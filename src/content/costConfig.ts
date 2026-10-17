/**
 * Cost ASSUMPTIONS for the calculator. These are editable starting points, not
 * quotes or market rates. Every value the user sees is labelled as an
 * assumption and can be overridden in the calculator. When Supabase is
 * configured, an admin can override these from the `app_config` table
 * (key `cost_config`) without redeploying - see src/lib/remoteConfig.ts.
 *
 * Where a figure comes from a source it is noted with the date checked.
 */

export type Tier = 'budget' | 'comfort' | 'premium'
export type TransportMode = 'bus' | 'train' | 'private'
export type DepartureCity = 'dhaka' | 'chattogram' | 'sylhet' | 'other'

export interface CostConfig {
  version: string
  /** ISO date when these assumptions were last reviewed */
  reviewed: string
  /** BDT per 1 SAR */
  sarToBdt: number
  // Calibrated so a 10-day budget trip for two lands near the Tk 1.1–1.7 lakh/person
  // package listings seen in Bangladesh (non-official, Jul 2026). Still assumptions.
  sarToBdtNote: string

  /** Per person, BDT. Visa + mandatory insurance + agent service; varies by agent. */
  visaPerPersonBdt: number
  /** Bangladesh e-passport fees in BDT incl. VAT, 48 pages / 5 years */
  passportFeeBdt: { regular: number; express: number; superExpress: number }
  /** Meningococcal ACYW vaccine per person, BDT (assumption) */
  vaccinePerPersonBdt: number

  /** Return economy fare per adult, BDT (assumption - replace with your quote) */
  flightReturnAdultBdt: { direct: number; connecting: number }
  childFareRatio: number
  infantFareRatio: number
  /** One-way domestic feeder to Dhaka per person, BDT, when no direct flight is used */
  feederOneWayBdt: Record<DepartureCity, number>

  /** Hotel room per night, SAR, by city and tier (one room, standard occupancy) */
  hotelRoomNightSar: { makkah: Record<Tier, number>; madinah: Record<Tier, number> }
  /** Children younger than this share a bed and don't need room space */
  childNoBedUnderAge: number

  /** Food per adult per day, SAR */
  mealPerDaySar: Record<Tier, number>
  childMealRatio: number

  /** Per-person intercity transfer costs, SAR, by mode */
  transfersSar: Record<TransportMode, { airportToCity: number; intercity: number; cityToAirport: number }>
  /** Private car costs are per vehicle; this is the seats per vehicle */
  privateVehicleSeats: number
  /** Local taxis / buses per person per day, SAR */
  localPerDaySar: Record<Tier, number>

  /** Saudi SIM with data, per SIM, SAR */
  simSar: number
  /** Ihram set per man, BDT */
  ihramSetBdt: number
  /** Other essentials (bag, sandals, toiletries, medicine) per person, BDT */
  essentialsPerPersonBdt: number

  /** Personal spending per adult per day, BDT */
  personalPerDayBdt: Record<Tier, number>
  contingencyPercent: number
}

export const defaultCostConfig: CostConfig = {
  version: '2026-10-17',
  reviewed: '2026-10-17',
  // Derived: Bangladesh Bank USD/BDT weighted average 123.45 (17 Oct 2026) ÷ SAR peg 3.75.
  sarToBdt: 32.9,
  // Calibrated so a 10-day budget trip for two lands near the Tk 1.1–1.7 lakh/person
  // package listings seen in Bangladesh (non-official, Jul 2026). Still assumptions.
  sarToBdtNote: 'Derived from Bangladesh Bank USD rate (17 Oct 2026) and the fixed 3.75 SAR/USD peg. Not a published SAR rate.',

  visaPerPersonBdt: 15000,
  // Secondary sources (UNB), incl. 15% VAT - verify on epassport.gov.bd.
  passportFeeBdt: { regular: 4025, express: 6325, superExpress: 8625 },
  vaccinePerPersonBdt: 1500,

  flightReturnAdultBdt: { direct: 85000, connecting: 72000 },
  childFareRatio: 0.75,
  infantFareRatio: 0.1,
  feederOneWayBdt: { dhaka: 0, chattogram: 5500, sylhet: 5500, other: 6000 },

  hotelRoomNightSar: {
    makkah: { budget: 160, comfort: 380, premium: 1100 },
    madinah: { budget: 130, comfort: 280, premium: 800 },
  },
  childNoBedUnderAge: 6,

  mealPerDaySar: { budget: 35, comfort: 70, premium: 160 },
  childMealRatio: 0.6,

  // Train fares from press reports (Gulf News), dynamic pricing - check sar.hhr.sa.
  transfersSar: {
    bus: { airportToCity: 30, intercity: 90, cityToAirport: 30 },
    train: { airportToCity: 60, intercity: 150, cityToAirport: 60 },
    private: { airportToCity: 300, intercity: 700, cityToAirport: 300 },
  },
  privateVehicleSeats: 4,
  localPerDaySar: { budget: 8, comfort: 20, premium: 50 },

  simSar: 115,
  ihramSetBdt: 2500,
  essentialsPerPersonBdt: 3000,

  personalPerDayBdt: { budget: 300, comfort: 800, premium: 2500 },
  contingencyPercent: 10,
}

/** Budget scenarios are just presets over the editable assumptions above. */
export const scenarios: Record<Tier, { tier: Tier; transport: TransportMode; flight: 'direct' | 'connecting' }> = {
  budget: { tier: 'budget', transport: 'bus', flight: 'connecting' },
  comfort: { tier: 'comfort', transport: 'train', flight: 'direct' },
  premium: { tier: 'premium', transport: 'private', flight: 'direct' },
}
