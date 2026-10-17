/**
 * Itinerary generation. Scheduling here is a practical RECOMMENDATION - no trip
 * length or day order is religiously required. The only religious constraint
 * encoded is where Ihram must be entered, which depends on the route.
 */

export type Order = 'makkah-first' | 'madinah-first' | 'makkah-only'
export type Airport = 'JED' | 'MED'
export type City = 'makkah' | 'madinah' | 'transit' | 'home'

export type DayKind = 'depart' | 'umrah' | 'makkah' | 'madinah' | 'intercity' | 'rest' | 'return'

export interface ItineraryInputs {
  /** yyyy-mm-dd, may be empty */
  departureDate: string
  /** Total calendar days including the departure and return days */
  totalDays: number
  order: Order
  arrival: Airport
  /** Nights in Madinah; null = automatic split */
  madinahNights: number | null
}

export interface Day {
  index: number
  /** yyyy-mm-dd or null when no departure date */
  date: string | null
  city: City
  kind: DayKind
  /** Translation keys under `itinerary.days.*` */
  titleKey: string
  itemKeys: string[]
}

export interface Itinerary {
  days: Day[]
  makkahNights: number
  madinahNights: number
  returnAirport: Airport
  /** Where to enter Ihram for this route - a translation key under `itinerary.ihram.*` */
  ihramKey: 'onFlight' | 'dhulHulayfah'
  warnings: string[]
}

export const MIN_DAYS = 4
export const MAX_DAYS = 60

export function addDays(iso: string, n: number): string {
  const d = new Date(`${iso}T00:00:00Z`)
  d.setUTCDate(d.getUTCDate() + n)
  return d.toISOString().slice(0, 10)
}

export function isValidIso(iso: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(iso) && !Number.isNaN(new Date(`${iso}T00:00:00Z`).getTime())
}

/** Nights in Saudi = days - 1 (arrive on day 1, fly home on the last day). */
export function splitNights(totalDays: number, order: Order, madinahNights: number | null) {
  const nights = Math.max(0, totalDays - 1)
  if (order === 'makkah-only') return { makkahNights: nights, madinahNights: 0 }
  // Keep at least 3 nights in Makkah (arrival rest + Umrah + buffer) and 1 in Madinah.
  const autoMadinah = Math.max(1, Math.round(nights * 0.4))
  const md = Math.min(Math.max(1, madinahNights ?? autoMadinah), Math.max(1, nights - 3))
  return { makkahNights: nights - md, madinahNights: md }
}

export function generateItinerary(input: ItineraryInputs): Itinerary {
  const totalDays = Math.min(MAX_DAYS, Math.max(MIN_DAYS, Math.round(input.totalDays) || MIN_DAYS))
  const order = input.order
  const { makkahNights, madinahNights } = splitNights(totalDays, order, input.madinahNights)
  const warnings: string[] = []
  const hasDate = isValidIso(input.departureDate)

  // A Madinah-first trip normally lands in Madinah; a Makkah-first trip in Jeddah.
  const arrival: Airport = input.arrival
  if (order === 'madinah-first' && arrival === 'JED') warnings.push('jedThenMadinah')
  if (order === 'makkah-first' && arrival === 'MED') warnings.push('medThenMakkah')
  const returnAirport: Airport = order === 'makkah-first' && madinahNights > 0 ? 'MED' : 'JED'

  const plan: Omit<Day, 'index' | 'date'>[] = []
  const pushMakkah = (days: number, arrivingFromIntercity: boolean) => {
    if (days <= 0) return
    // The day Umrah is performed comes right after arrival, with rest first.
    plan.push({
      city: 'makkah',
      kind: 'umrah',
      titleKey: 'umrahDay',
      itemKeys: arrivingFromIntercity ? ['restFirst', 'performUmrah', 'halq'] : ['restFirst', 'performUmrah', 'halq', 'callFamily'],
    })
    for (let i = 1; i < days; i++) {
      const isBuffer = i === 1
      plan.push({
        city: 'makkah',
        kind: isBuffer ? 'rest' : 'makkah',
        titleKey: isBuffer ? 'recoveryDay' : 'makkahDay',
        itemKeys: isBuffer ? ['sleep', 'congregation', 'hydrate'] : i % 3 === 0 ? ['congregation', 'quran', 'tawafNafl'] : ['congregation', 'dhikr', 'rest'],
      })
    }
  }
  const pushMadinah = (days: number) => {
    for (let i = 0; i < days; i++) {
      plan.push({
        city: 'madinah',
        kind: 'madinah',
        titleKey: 'madinahDay',
        itemKeys: i === 0 ? ['nabawiPrayer', 'salam', 'rawdahPermit'] : i === 1 ? ['quba', 'congregation'] : ['congregation', 'rest'],
      })
    }
  }

  // The arrival night counts as the first night in that city, so each city
  // block below adds (nights - 1) days after the day you arrive there.
  if (order === 'madinah-first') {
    plan.push({
      city: 'madinah',
      kind: 'depart',
      titleKey: 'departToMadinah',
      itemKeys: arrival === 'JED' ? ['airportEarly', 'noIhramYet', 'trainToMadinah', 'checkIn'] : ['airportEarly', 'noIhramYet', 'checkIn'],
    })
    pushMadinah(madinahNights - 1)
    plan.push({ city: 'makkah', kind: 'intercity', titleKey: 'madinahToMakkah', itemKeys: ['ihramDhulHulayfah', 'talbiyah', 'travelMakkah', 'checkIn'] })
    pushMakkah(makkahNights - 1, true)
  } else {
    plan.push({
      city: 'makkah',
      kind: 'depart',
      titleKey: 'departToMakkah',
      itemKeys:
        arrival === 'MED'
          ? ['airportEarly', 'noIhramYet', 'ihramDhulHulayfah', 'talbiyah', 'travelMakkah', 'checkIn']
          : ['airportEarly', 'ihramBeforeMiqat', 'talbiyah', 'transferMakkah', 'checkIn'],
    })
    pushMakkah(makkahNights - 1, false)
    if (madinahNights > 0) {
      plan.push({ city: 'madinah', kind: 'intercity', titleKey: 'makkahToMadinah', itemKeys: ['farewellTawaf', 'trainToMadinah', 'checkIn'] })
      pushMadinah(madinahNights - 1)
    }
  }

  plan.push({
    city: 'home',
    kind: 'return',
    titleKey: 'returnHome',
    itemKeys: returnAirport === 'JED' && order !== 'makkah-only' ? ['farewellTawaf', 'airportEarly', 'zamzam'] : ['airportEarly', 'zamzam'],
  })

  // The split above yields exactly totalDays; this guards against future edits.
  while (plan.length > totalDays) {
    const i = plan.findIndex((d) => d.kind === 'makkah' || d.kind === 'madinah' || d.kind === 'rest')
    if (i < 0) break
    plan.splice(i, 1)
  }
  while (plan.length < totalDays) {
    plan.splice(plan.length - 1, 0, { city: 'makkah', kind: 'makkah', titleKey: 'makkahDay', itemKeys: ['congregation', 'rest'] })
  }

  if (totalDays < 7) warnings.push('shortTrip')

  return {
    days: plan.map((d, index) => ({ ...d, index, date: hasDate ? addDays(input.departureDate, index) : null })),
    makkahNights,
    madinahNights,
    returnAirport,
    ihramKey: order === 'madinah-first' || (arrival === 'MED' && order === 'makkah-first') ? 'dhulHulayfah' : 'onFlight',
    warnings,
  }
}

/* ------------------------------------------------------------------ */
/* Pre-departure deadlines                                            */
/* ------------------------------------------------------------------ */

export interface Deadline {
  key: string
  daysBefore: number
  date: string | null
}

/** Practical lead times (recommendations, not official cut-offs). */
export const DEADLINES: { key: string; daysBefore: number }[] = [
  { key: 'passport', daysBefore: 90 },
  { key: 'budget', daysBefore: 75 },
  { key: 'agent', daysBefore: 60 },
  { key: 'flights', daysBefore: 50 },
  { key: 'hotels', daysBefore: 45 },
  { key: 'visa', daysBefore: 30 },
  // Meningococcal vaccine must be given at least 10 days before arrival.
  { key: 'vaccine', daysBefore: 21 },
  { key: 'nusuk', daysBefore: 14 },
  { key: 'learn', daysBefore: 10 },
  { key: 'money', daysBefore: 5 },
  { key: 'packing', daysBefore: 3 },
  { key: 'printDocs', daysBefore: 2 },
]

export function deadlines(departureDate: string): Deadline[] {
  const ok = isValidIso(departureDate)
  return DEADLINES.map((d) => ({ ...d, date: ok ? addDays(departureDate, -d.daysBefore) : null }))
}

export function daysUntil(iso: string, today = new Date()): number | null {
  if (!isValidIso(iso)) return null
  const t = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  return Math.round((new Date(`${iso}T00:00:00Z`).getTime() - t) / 86_400_000)
}
