import { describe, expect, it } from 'vitest'
import { daysUntil, deadlines, generateItinerary, splitNights, type ItineraryInputs } from './itinerary'

const base = (over: Partial<ItineraryInputs> = {}): ItineraryInputs => ({
  departureDate: '2026-12-01',
  totalDays: 10,
  order: 'makkah-first',
  arrival: 'JED',
  madinahNights: null,
  ...over,
})

describe('generateItinerary', () => {
  for (const totalDays of [4, 7, 10, 14, 21, 30]) {
    for (const order of ['makkah-first', 'madinah-first', 'makkah-only'] as const) {
      for (const arrival of ['JED', 'MED'] as const) {
        it(`produces exactly ${totalDays} days for ${order} via ${arrival}`, () => {
          const it = generateItinerary(base({ totalDays, order, arrival }))
          expect(it.days).toHaveLength(totalDays)
          expect(it.days.filter((d) => d.kind === 'umrah')).toHaveLength(1)
          expect(it.days[0].kind).toBe('depart')
          expect(it.days.at(-1)!.kind).toBe('return')
          expect(it.makkahNights + it.madinahNights).toBe(totalDays - 1)
        })
      }
    }
  }

  it('dates follow the departure date', () => {
    const it = generateItinerary(base({ totalDays: 7 }))
    expect(it.days.map((d) => d.date)).toEqual([
      '2026-12-01', '2026-12-02', '2026-12-03', '2026-12-04', '2026-12-05', '2026-12-06', '2026-12-07',
    ])
  })

  it('leaves dates empty without a departure date', () => {
    const it = generateItinerary(base({ departureDate: '' }))
    expect(it.days.every((d) => d.date === null)).toBe(true)
  })

  it('puts Ihram on the flight for Makkah-first via Jeddah', () => {
    const it = generateItinerary(base())
    expect(it.ihramKey).toBe('onFlight')
    expect(it.days[0].itemKeys).toContain('ihramBeforeMiqat')
    expect(it.returnAirport).toBe('MED')
  })

  it('puts Ihram at Dhul-Hulayfah for Madinah-first', () => {
    const it = generateItinerary(base({ order: 'madinah-first', arrival: 'MED' }))
    expect(it.ihramKey).toBe('dhulHulayfah')
    expect(it.days[0].itemKeys).toContain('noIhramYet')
    const travel = it.days.findIndex((d) => d.titleKey === 'madinahToMakkah')
    const umrah = it.days.findIndex((d) => d.kind === 'umrah')
    expect(travel).toBeGreaterThan(0)
    expect(umrah).toBeGreaterThan(travel)
    expect(it.returnAirport).toBe('JED')
  })

  it('Makkah-first puts Umrah before any Madinah day', () => {
    const it = generateItinerary(base({ totalDays: 14 }))
    const umrah = it.days.findIndex((d) => d.kind === 'umrah')
    const firstMadinah = it.days.findIndex((d) => d.city === 'madinah')
    expect(umrah).toBeLessThan(firstMadinah)
  })

  it('respects a custom Madinah split but keeps 3 Makkah nights', () => {
    expect(splitNights(10, 'makkah-first', 4)).toEqual({ makkahNights: 5, madinahNights: 4 })
    expect(splitNights(6, 'makkah-first', 10)).toEqual({ makkahNights: 3, madinahNights: 2 })
    expect(splitNights(8, 'makkah-only', 3)).toEqual({ makkahNights: 7, madinahNights: 0 })
  })

  it('clamps unrealistic durations', () => {
    expect(generateItinerary(base({ totalDays: 1 })).days).toHaveLength(4)
    expect(generateItinerary(base({ totalDays: 500 })).days).toHaveLength(60)
  })

  it('warns about short trips', () => {
    expect(generateItinerary(base({ totalDays: 5 })).warnings).toContain('shortTrip')
  })
})

describe('deadlines', () => {
  it('are all before departure', () => {
    for (const d of deadlines('2026-12-01')) expect(d.date! < '2026-12-01').toBe(true)
  })
  it('vaccine deadline leaves at least 10 days before arrival', () => {
    const v = deadlines('2026-12-01').find((d) => d.key === 'vaccine')!
    expect(v.daysBefore).toBeGreaterThanOrEqual(10)
  })
  it('counts days until departure', () => {
    expect(daysUntil('2026-10-27', new Date(2026, 9, 17))).toBe(10)
    expect(daysUntil('', new Date())).toBeNull()
  })
})
