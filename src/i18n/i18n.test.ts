import { describe, expect, it } from 'vitest'
import { defaultCostConfig } from '../content/costConfig'
import { calculateBudget, CATEGORY_IDS, defaultTripInputs } from '../lib/budget'
import { DEADLINES, generateItinerary } from '../lib/itinerary'
import { bn } from './bn'
import { en } from './en'

type Tree = { [k: string]: unknown }

function keys(o: Tree, prefix = ''): string[] {
  return Object.entries(o).flatMap(([k, v]) =>
    v && typeof v === 'object' && !Array.isArray(v) ? keys(v as Tree, `${prefix}${k}.`) : [`${prefix}${k}`],
  )
}

const has = (o: Tree, path: string) => path.split('.').reduce<unknown>((n, k) => (n as Tree | undefined)?.[k], o) !== undefined

describe('translations', () => {
  it('Bangla and English have the same keys', () => {
    expect(keys(bn as unknown as Tree).sort()).toEqual(keys(en as unknown as Tree).sort())
  })

  it('every itinerary key produced by the generator is translated', () => {
    const needed = new Set<string>()
    for (const order of ['makkah-first', 'madinah-first', 'makkah-only'] as const)
      for (const arrival of ['JED', 'MED'] as const)
        for (const totalDays of [4, 7, 10, 21]) {
          const it = generateItinerary({ departureDate: '', totalDays, order, arrival, madinahNights: null })
          it.days.forEach((d) => {
            needed.add(`itinerary.days.${d.titleKey}`)
            needed.add(`itinerary.city.${d.city}`)
            d.itemKeys.forEach((k) => needed.add(`itinerary.items.${k}`))
          })
          it.warnings.forEach((w) => needed.add(`itinerary.warnings.${w}`))
          needed.add(`itinerary.ihram.${it.ihramKey}`)
        }
    DEADLINES.forEach((d) => needed.add(`itinerary.deadlines.${d.key}`))
    for (const k of needed) {
      expect(has(en as unknown as Tree, k), k).toBe(true)
      expect(has(bn as unknown as Tree, k), k).toBe(true)
    }
  })

  it('every budget line and category is translated', () => {
    const r = calculateBudget({ ...defaultTripInputs(), childAges: [1, 5], newPassports: 1, extraInsuranceBdt: 100, departureCity: 'sylhet' }, defaultCostConfig)
    for (const l of r.lines) expect(has(en as unknown as Tree, l.labelKey), l.labelKey).toBe(true)
    for (const c of CATEGORY_IDS) expect(has(bn as unknown as Tree, `budget.cat.${c}`)).toBe(true)
  })
})
