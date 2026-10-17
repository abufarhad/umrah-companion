import { describe, expect, it } from 'vitest'
import { DUA_CATEGORIES, duaById, duas } from './duas'
import { guidePages } from './guidePages'
import { mediaById } from './media'
import { getReference } from './references'
import { stageById, stageIds } from './rituals'
import { virtues } from './virtues'

describe('guide pages', () => {
  it('cover every stage exactly once, in order', () => {
    expect(guidePages.flatMap((p) => p.stageIds)).toEqual(stageIds)
  })
  it('link to existing duas and have bilingual quick notes', () => {
    for (const p of guidePages) {
      for (const d of p.duas) expect(duaById.get(d), `${p.id}:${d}`).toBeTruthy()
      expect(p.quick.bn.length).toBe(p.quick.en.length)
      expect(p.quick.bn.length).toBeGreaterThan(0)
    }
  })
})

describe('duas', () => {
  it('have unique ids, valid categories and resolvable references', () => {
    expect(new Set(duas.map((d) => d.id)).size).toBe(duas.length)
    const cats = new Set(DUA_CATEGORIES.map((c) => c.id))
    for (const d of duas) {
      expect(cats.has(d.category), d.id).toBe(true)
      if (d.refId) expect(getReference(d.refId), d.id).toBeTruthy()
      for (const r of [...(d.refs ?? []), ...(d.virtue?.refs ?? [])]) expect(getReference(r), `${d.id}:${r}`).toBeTruthy()
      for (const v of d.videoIds ?? []) expect(mediaById.get(v)?.type, `${d.id}:${v}`).toBe('video')
      for (const s of d.stageIds ?? []) expect(stageById.get(s), `${d.id}:${s}`).toBeTruthy()
      expect(d.mistakes.length, d.id).toBeGreaterThan(0)
    }
  })
  it('have something to read: Arabic from a reference or a meaning', () => {
    for (const d of duas) {
      const r = d.refId ? getReference(d.refId) : undefined
      expect(Boolean(d.arabic || r?.arabic || d.meaning), d.id).toBe(true)
    }
  })
  it('label Companion reports and weak wordings honestly', () => {
    for (const d of duas) {
      const r = d.refId ? getReference(d.refId) : undefined
      if (r?.attribution === 'companion' && r.id !== 'athar-seeing-kaaba') expect(d.status, d.id).toBe('companion')
    }
    expect(duaById.get('seeing-kaaba')!.status).toBe('not-established')
  })
  it('never attribute a fixed dua to individual Tawaf circuits or Sa‘i journeys', () => {
    for (const d of duas) expect(/circuit [1-7]|journey [1-7]/i.test(d.title.en), d.id).toBe(false)
  })
  it('include all requested situations', () => {
    const needed = ['travel', 'ihram', 'mosque', 'kaaba', 'tawaf', 'sai', 'zamzam', 'prayer', 'dhikr', 'personal', 'madinah']
    for (const c of needed) expect(duas.some((d) => d.category === c), c).toBe(true)
  })
})

describe('virtues', () => {
  it('every established point cites a reference that exists', () => {
    for (const v of virtues)
      for (const p of v.points) {
        if (p.kind === 'established') expect(p.refs.length, `${v.id}: ${p.text.en}`).toBeGreaterThan(0)
        for (const r of p.refs) expect(getReference(r), r).toBeTruthy()
      }
  })
})
