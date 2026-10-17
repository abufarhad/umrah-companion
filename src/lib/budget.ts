import type { CostConfig, DepartureCity, Tier, TransportMode } from '../content/costConfig'

export type CategoryId =
  | 'documents'
  | 'flights'
  | 'makkahHotel'
  | 'madinahHotel'
  | 'transport'
  | 'food'
  | 'connectivity'
  | 'essentials'
  | 'insurance'
  | 'misc'

export const CATEGORY_IDS: CategoryId[] = [
  'documents',
  'flights',
  'makkahHotel',
  'madinahHotel',
  'transport',
  'food',
  'connectivity',
  'essentials',
  'insurance',
  'misc',
]

/** When a package is used, each category is marked as included, excluded or unknown. */
export type Inclusion = 'included' | 'excluded' | 'unknown'

export interface TripInputs {
  men: number
  women: number
  /** Ages of each child (under 18) */
  childAges: number[]
  departureCity: DepartureCity
  /** ISO date (yyyy-mm-dd) or empty */
  departureDate: string
  makkahNights: number
  madinahNights: number
  /** Nights spent travelling (flights/transfers) not in a hotel */
  travelDays: number
  tier: Tier
  /** People sharing one room */
  roomSharing: number
  flightType: 'direct' | 'connecting'
  /** Overrides the assumption when set (> 0) */
  flightFareAdultBdt: number
  transport: TransportMode
  /** Overrides the assumption when set (> 0) */
  mealPerDaySar: number
  usePackage: boolean
  /** Package price per adult in BDT */
  packagePerAdultBdt: number
  /** Package price per child as a share of the adult price */
  packageChildRatio: number
  inclusions: Record<CategoryId, Inclusion>
  newPassports: number
  passportSpeed: 'regular' | 'express' | 'superExpress'
  simCount: number
  extraInsuranceBdt: number
  personalPerDayBdt: number
  shoppingBdt: number
  contingencyPercent: number
  alreadySavedBdt: number
}

export interface LineItem {
  id: string
  category: CategoryId
  /** Translation key for the label */
  labelKey: string
  /** Translation params, e.g. counts */
  params?: Record<string, string | number>
  bdt: number
  /** SAR amount when the item is naturally priced in SAR */
  sar?: number
  /** Covered by the package - shown but not added */
  coveredByPackage: boolean
}

export interface BudgetResult {
  travellers: number
  adults: number
  children: number
  infants: number
  /** People needing bed space */
  bedPeople: number
  rooms: number
  daysInSaudi: number
  lines: LineItem[]
  subtotals: Record<CategoryId, number>
  packageTotal: number
  /** Sum of items marked "unknown" - may already be in the package */
  possibleOverlap: number
  subtotalBeforeContingency: number
  contingency: number
  total: number
  perPerson: number
  /** In-country spend (hotels, food, local transport, personal) per day */
  dailyInSaudi: number
  flightsAndTransport: number
  savingsNeeded: number
  /** Whole months until departure, or null when no date */
  monthsToDeparture: number | null
  monthlySaving: number | null
}

export const clampInt = (n: number, min = 0, max = 1000) =>
  Number.isFinite(n) ? Math.min(max, Math.max(min, Math.round(n))) : min

const nonNeg = (n: number) => (Number.isFinite(n) && n > 0 ? n : 0)

export function defaultInclusions(value: Inclusion = 'excluded'): Record<CategoryId, Inclusion> {
  return Object.fromEntries(CATEGORY_IDS.map((c) => [c, value])) as Record<CategoryId, Inclusion>
}

/** A typical agency package: flights, visa, hotels and transfers included; the rest unknown. */
export function typicalPackageInclusions(): Record<CategoryId, Inclusion> {
  return {
    ...defaultInclusions('unknown'),
    flights: 'included',
    makkahHotel: 'included',
    madinahHotel: 'included',
    transport: 'included',
    documents: 'unknown',
    insurance: 'unknown',
    misc: 'excluded',
    connectivity: 'excluded',
    essentials: 'excluded',
  }
}

export function defaultTripInputs(): TripInputs {
  return {
    men: 1,
    women: 1,
    childAges: [],
    departureCity: 'dhaka',
    departureDate: '',
    makkahNights: 6,
    madinahNights: 4,
    travelDays: 2,
    tier: 'comfort',
    roomSharing: 2,
    flightType: 'direct',
    flightFareAdultBdt: 0,
    transport: 'train',
    mealPerDaySar: 0,
    usePackage: false,
    packagePerAdultBdt: 0,
    packageChildRatio: 0.8,
    inclusions: typicalPackageInclusions(),
    newPassports: 0,
    passportSpeed: 'regular',
    simCount: 1,
    extraInsuranceBdt: 0,
    personalPerDayBdt: 0,
    shoppingBdt: 10000,
    contingencyPercent: -1,
    alreadySavedBdt: 0,
  }
}

export function monthsBetween(from: Date, toIso: string): number | null {
  if (!toIso) return null
  const to = new Date(`${toIso}T00:00:00`)
  if (Number.isNaN(to.getTime())) return null
  const months = (to.getFullYear() - from.getFullYear()) * 12 + (to.getMonth() - from.getMonth())
  return Math.max(0, months - (to.getDate() < from.getDate() ? 1 : 0))
}

/**
 * Pure budget calculation. All money is returned in BDT (rounded to whole taka).
 * Items whose category is "included" in a package are listed with
 * `coveredByPackage: true` and excluded from totals, so nothing is double-counted.
 */
export function calculateBudget(input: TripInputs, cfg: CostConfig, today = new Date()): BudgetResult {
  const rate = cfg.sarToBdt
  const men = clampInt(input.men)
  const women = clampInt(input.women)
  const adults = men + women
  const ages = input.childAges.map((a) => clampInt(a, 0, 17))
  const infants = ages.filter((a) => a < 2).length
  const children = ages.length - infants
  const travellers = adults + ages.length
  const bedPeople = adults + ages.filter((a) => a >= cfg.childNoBedUnderAge).length
  const sharing = clampInt(input.roomSharing, 1, 8)
  const rooms = bedPeople > 0 ? Math.ceil(bedPeople / sharing) : 0
  const makkahNights = clampInt(input.makkahNights, 0, 90)
  const madinahNights = clampInt(input.madinahNights, 0, 90)
  const daysInSaudi = makkahNights + madinahNights + (makkahNights + madinahNights > 0 ? 1 : 0)
  const tier = input.tier
  /** Child weighting for per-person consumables */
  const childUnits = ages.filter((a) => a >= 2).length * cfg.childMealRatio

  const lines: LineItem[] = []
  const usePackage = input.usePackage && nonNeg(input.packagePerAdultBdt) > 0
  const covered = (c: CategoryId) => usePackage && input.inclusions[c] === 'included'
  const add = (item: Omit<LineItem, 'coveredByPackage' | 'bdt'> & { bdt: number }) => {
    if (item.bdt <= 0) return
    lines.push({ ...item, bdt: Math.round(item.bdt), coveredByPackage: covered(item.category) })
  }

  /* Documents */
  add({ id: 'visa', category: 'documents', labelKey: 'budget.items.visa', params: { n: travellers }, bdt: travellers * cfg.visaPerPersonBdt })
  const passports = clampInt(input.newPassports, 0, travellers)
  add({
    id: 'passport',
    category: 'documents',
    labelKey: 'budget.items.passport',
    params: { n: passports },
    bdt: passports * cfg.passportFeeBdt[input.passportSpeed],
  })
  // Meningococcal vaccine is required from age 1.
  const vaccinated = adults + ages.filter((a) => a >= 1).length
  add({ id: 'vaccine', category: 'documents', labelKey: 'budget.items.vaccine', params: { n: vaccinated }, bdt: vaccinated * cfg.vaccinePerPersonBdt })

  /* Flights */
  const fare = nonNeg(input.flightFareAdultBdt) || cfg.flightReturnAdultBdt[input.flightType]
  add({ id: 'flightAdults', category: 'flights', labelKey: 'budget.items.flightAdults', params: { n: adults }, bdt: adults * fare })
  add({ id: 'flightChildren', category: 'flights', labelKey: 'budget.items.flightChildren', params: { n: children }, bdt: children * fare * cfg.childFareRatio })
  add({ id: 'flightInfants', category: 'flights', labelKey: 'budget.items.flightInfants', params: { n: infants }, bdt: infants * fare * cfg.infantFareRatio })
  const feeder = cfg.feederOneWayBdt[input.departureCity] ?? 0
  add({ id: 'feeder', category: 'flights', labelKey: 'budget.items.feeder', params: { n: travellers - infants }, bdt: feeder * 2 * (travellers - infants) })

  /* Hotels */
  const mkRate = cfg.hotelRoomNightSar.makkah[tier]
  const mdRate = cfg.hotelRoomNightSar.madinah[tier]
  add({
    id: 'makkahHotel',
    category: 'makkahHotel',
    labelKey: 'budget.items.hotel',
    params: { rooms, nights: makkahNights },
    sar: rooms * makkahNights * mkRate,
    bdt: rooms * makkahNights * mkRate * rate,
  })
  add({
    id: 'madinahHotel',
    category: 'madinahHotel',
    labelKey: 'budget.items.hotel',
    params: { rooms, nights: madinahNights },
    sar: rooms * madinahNights * mdRate,
    bdt: rooms * madinahNights * mdRate * rate,
  })

  /* Transport */
  const t = cfg.transfersSar[input.transport]
  const seatPeople = travellers - infants
  const legs = (madinahNights > 0 && makkahNights > 0 ? 1 : 0)
  const transferSar =
    input.transport === 'private'
      ? Math.ceil(seatPeople / cfg.privateVehicleSeats) * (t.airportToCity + legs * t.intercity + t.cityToAirport)
      : seatPeople * (t.airportToCity + legs * t.intercity + t.cityToAirport)
  add({ id: 'transfers', category: 'transport', labelKey: 'budget.items.transfers', sar: transferSar, bdt: transferSar * rate })
  const localSar = (adults + childUnits) * daysInSaudi * cfg.localPerDaySar[tier]
  add({ id: 'localTransport', category: 'transport', labelKey: 'budget.items.local', params: { days: daysInSaudi }, sar: localSar, bdt: localSar * rate })

  /* Food */
  const meal = nonNeg(input.mealPerDaySar) || cfg.mealPerDaySar[tier]
  const foodSar = (adults + childUnits) * daysInSaudi * meal
  add({ id: 'food', category: 'food', labelKey: 'budget.items.food', params: { days: daysInSaudi }, sar: foodSar, bdt: foodSar * rate })

  /* Connectivity */
  const sims = clampInt(input.simCount, 0, travellers)
  add({ id: 'sim', category: 'connectivity', labelKey: 'budget.items.sim', params: { n: sims }, sar: sims * cfg.simSar, bdt: sims * cfg.simSar * rate })

  /* Essentials */
  add({ id: 'ihram', category: 'essentials', labelKey: 'budget.items.ihram', params: { n: men }, bdt: men * cfg.ihramSetBdt })
  add({ id: 'essentials', category: 'essentials', labelKey: 'budget.items.essentials', params: { n: travellers }, bdt: travellers * cfg.essentialsPerPersonBdt })

  /* Insurance - the mandatory Umrah insurance is part of the visa fee; this is optional extra cover */
  add({ id: 'insurance', category: 'insurance', labelKey: 'budget.items.insurance', bdt: nonNeg(input.extraInsuranceBdt) })

  /* Misc */
  const personal = nonNeg(input.personalPerDayBdt) || cfg.personalPerDayBdt[tier]
  add({ id: 'personal', category: 'misc', labelKey: 'budget.items.personal', params: { days: daysInSaudi }, bdt: adults * daysInSaudi * personal })
  add({ id: 'shopping', category: 'misc', labelKey: 'budget.items.shopping', bdt: nonNeg(input.shoppingBdt) })

  const subtotals = Object.fromEntries(CATEGORY_IDS.map((c) => [c, 0])) as Record<CategoryId, number>
  let possibleOverlap = 0
  for (const l of lines) {
    if (l.coveredByPackage) continue
    subtotals[l.category] += l.bdt
    if (usePackage && input.inclusions[l.category] === 'unknown') possibleOverlap += l.bdt
  }

  const packageTotal = usePackage
    ? Math.round(adults * input.packagePerAdultBdt + ages.length * input.packagePerAdultBdt * nonNeg(input.packageChildRatio))
    : 0

  const itemized = CATEGORY_IDS.reduce((s, c) => s + subtotals[c], 0)
  const subtotalBeforeContingency = itemized + packageTotal
  const pct = input.contingencyPercent >= 0 ? input.contingencyPercent : cfg.contingencyPercent
  const contingency = Math.round((subtotalBeforeContingency * Math.min(100, pct)) / 100)
  const total = subtotalBeforeContingency + contingency

  const inCountry =
    subtotals.makkahHotel + subtotals.madinahHotel + subtotals.food + subtotals.misc - nonNeg(input.shoppingBdt) +
    lines.filter((l) => l.id === 'localTransport' && !l.coveredByPackage).reduce((s, l) => s + l.bdt, 0)

  const savingsNeeded = Math.max(0, total - nonNeg(input.alreadySavedBdt))
  const monthsToDeparture = monthsBetween(today, input.departureDate)

  return {
    travellers,
    adults,
    children,
    infants,
    bedPeople,
    rooms,
    daysInSaudi,
    lines,
    subtotals,
    packageTotal,
    possibleOverlap,
    subtotalBeforeContingency,
    contingency,
    total,
    perPerson: travellers > 0 ? Math.round(total / travellers) : 0,
    dailyInSaudi: daysInSaudi > 0 ? Math.round(Math.max(0, inCountry) / daysInSaudi) : 0,
    flightsAndTransport: subtotals.flights + subtotals.transport,
    savingsNeeded,
    monthsToDeparture,
    monthlySaving: monthsToDeparture && monthsToDeparture > 0 ? Math.ceil(savingsNeeded / monthsToDeparture) : null,
  }
}
