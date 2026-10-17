import { describe, expect, it } from 'vitest'
import { defaultCostConfig as cfg } from '../content/costConfig'
import { calculateBudget, defaultInclusions, defaultTripInputs, monthsBetween, type TripInputs } from './budget'

const base = (over: Partial<TripInputs> = {}): TripInputs => ({
  ...defaultTripInputs(),
  shoppingBdt: 0,
  contingencyPercent: 0,
  ...over,
})

describe('calculateBudget', () => {
  it('sums line items into the total', () => {
    const r = calculateBudget(base(), cfg)
    const sum = r.lines.filter((l) => !l.coveredByPackage).reduce((s, l) => s + l.bdt, 0)
    expect(r.total).toBe(sum)
    expect(r.travellers).toBe(2)
    expect(r.perPerson).toBe(Math.round(r.total / 2))
  })

  it('computes hotel subtotals from rooms × nights × rate', () => {
    const r = calculateBudget(base({ men: 2, women: 2, roomSharing: 4, makkahNights: 5, madinahNights: 3, tier: 'budget' }), cfg)
    expect(r.rooms).toBe(1)
    expect(r.subtotals.makkahHotel).toBe(Math.round(5 * cfg.hotelRoomNightSar.makkah.budget * cfg.sarToBdt))
    expect(r.subtotals.madinahHotel).toBe(Math.round(3 * cfg.hotelRoomNightSar.madinah.budget * cfg.sarToBdt))
  })

  it('rounds rooms up and lets young children share beds', () => {
    const r = calculateBudget(base({ men: 2, women: 1, childAges: [3, 10], roomSharing: 2 }), cfg)
    expect(r.bedPeople).toBe(4) // 3 adults + the 10-year-old
    expect(r.rooms).toBe(2)
  })

  it('updates when inputs change', () => {
    const a = calculateBudget(base({ makkahNights: 4 }), cfg)
    const b = calculateBudget(base({ makkahNights: 8 }), cfg)
    expect(b.total).toBeGreaterThan(a.total)
    expect(b.subtotals.makkahHotel).toBe(a.subtotals.makkahHotel * 2)
  })

  it('applies child and infant fare ratios', () => {
    const r = calculateBudget(base({ men: 1, women: 0, childAges: [5, 1], flightFareAdultBdt: 100000 }), cfg)
    const get = (id: string) => r.lines.find((l) => l.id === id)?.bdt
    expect(get('flightAdults')).toBe(100000)
    expect(get('flightChildren')).toBe(100000 * cfg.childFareRatio)
    expect(get('flightInfants')).toBe(100000 * cfg.infantFareRatio)
  })

  it('adds feeder flights for departures outside Dhaka', () => {
    const dhaka = calculateBudget(base({ departureCity: 'dhaka' }), cfg)
    const ctg = calculateBudget(base({ departureCity: 'chattogram' }), cfg)
    expect(ctg.subtotals.flights - dhaka.subtotals.flights).toBe(cfg.feederOneWayBdt.chattogram * 2 * 2)
  })

  it('does not double-count items included in a package', () => {
    const withoutPkg = calculateBudget(base(), cfg)
    const inclusions = { ...defaultInclusions('excluded'), flights: 'included' as const, makkahHotel: 'included' as const }
    const r = calculateBudget(base({ usePackage: true, packagePerAdultBdt: 150000, inclusions }), cfg)
    expect(r.subtotals.flights).toBe(0)
    expect(r.subtotals.makkahHotel).toBe(0)
    expect(r.packageTotal).toBe(300000)
    expect(r.lines.some((l) => l.category === 'flights' && l.coveredByPackage)).toBe(true)
    expect(r.total).toBe(withoutPkg.total - withoutPkg.subtotals.flights - withoutPkg.subtotals.makkahHotel + 300000)
  })

  it('flags unknown inclusions as possible overlap but still counts them', () => {
    const inclusions = { ...defaultInclusions('excluded'), food: 'unknown' as const }
    const r = calculateBudget(base({ usePackage: true, packagePerAdultBdt: 100000, inclusions }), cfg)
    expect(r.possibleOverlap).toBe(r.subtotals.food)
    expect(r.subtotals.food).toBeGreaterThan(0)
  })

  it('ignores inclusion marks when no package price is entered', () => {
    const inclusions = defaultInclusions('included')
    const r = calculateBudget(base({ usePackage: true, packagePerAdultBdt: 0, inclusions }), cfg)
    expect(r.packageTotal).toBe(0)
    expect(r.lines.every((l) => !l.coveredByPackage)).toBe(true)
  })

  it('applies contingency and savings', () => {
    const r = calculateBudget(base({ contingencyPercent: 10, alreadySavedBdt: 50000 }), cfg)
    expect(r.contingency).toBe(Math.round(r.subtotalBeforeContingency * 0.1))
    expect(r.savingsNeeded).toBe(r.total - 50000)
  })

  it('uses the default contingency when the input is negative', () => {
    const r = calculateBudget(base({ contingencyPercent: -1 }), cfg)
    expect(r.contingency).toBe(Math.round((r.subtotalBeforeContingency * cfg.contingencyPercent) / 100))
  })

  it('handles invalid numbers safely', () => {
    const r = calculateBudget(base({ men: Number.NaN, women: -3, makkahNights: Number.NaN }), cfg)
    expect(r.travellers).toBe(0)
    expect(Number.isFinite(r.total)).toBe(true)
    expect(r.perPerson).toBe(0)
  })

  it('splits private car costs per vehicle', () => {
    const r = calculateBudget(base({ men: 3, women: 2, transport: 'private' }), cfg)
    const t = cfg.transfersSar.private
    const transfers = r.lines.find((l) => l.id === 'transfers')!
    expect(transfers.sar).toBe(2 * (t.airportToCity + t.intercity + t.cityToAirport))
  })

  it('calculates monthly savings to the departure date', () => {
    const r = calculateBudget(base({ departureDate: '2027-01-20' }), cfg, new Date('2026-10-17T00:00:00'))
    expect(r.monthsToDeparture).toBe(3)
    expect(r.monthlySaving).toBe(Math.ceil(r.savingsNeeded / 3))
  })
})

describe('monthsBetween', () => {
  it('returns null for empty or invalid dates', () => {
    expect(monthsBetween(new Date(), '')).toBeNull()
    expect(monthsBetween(new Date(), 'nope')).toBeNull()
  })
  it('never goes negative', () => {
    expect(monthsBetween(new Date('2026-10-17T00:00:00'), '2026-01-01')).toBe(0)
  })
})
