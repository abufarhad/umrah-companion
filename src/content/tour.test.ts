import { describe, expect, it } from 'vitest'
import { guidePageById } from './guidePages'
import { placeById } from './history'
import { mediaById } from './media'
import { getReference } from './references'
import { presets, siteById, tourSites } from './tour'

const BOUNDS = {
  // Generous boxes around each city and its holy sites (Arafat is ~20 km east of Makkah; Dhul-Hulayfah south-west of Madinah).
  makkah: { lat: [21.25, 21.6], lng: [39.7, 40.05] },
  madinah: { lat: [24.3, 24.6], lng: [39.45, 39.75] },
}

describe('tour sites', () => {
  it('have unique ids', () => expect(new Set(tourSites.map((s) => s.id)).size).toBe(tourSites.length))
  for (const s of tourSites) {
    it(`${s.id}: coordinates sit inside ${s.city} and cite a source`, () => {
      const b = BOUNDS[s.city]
      expect(s.lat).toBeGreaterThan(b.lat[0])
      expect(s.lat).toBeLessThan(b.lat[1])
      expect(s.lng).toBeGreaterThan(b.lng[0])
      expect(s.lng).toBeLessThan(b.lng[1])
      expect(s.coordSource.url).toMatch(/^https:\/\//)
    })
    it(`${s.id}: links resolve`, () => {
      for (const m of s.media) expect(mediaById.get(m), m).toBeTruthy()
      for (const r of s.refs) expect(getReference(r), r).toBeTruthy()
      if (s.historyId) expect(placeById.get(s.historyId)).toBeTruthy()
      if (s.guideId) expect(guidePageById.get(s.guideId)).toBeTruthy()
      if (s.within) expect(siteById.get(s.within)?.city).toBe(s.city)
      expect(s.visitor.sources.length).toBeGreaterThan(0)
      expect(s.name.bn && s.name.en && s.intro.bn && s.intro.en).toBeTruthy()
      for (const e of s.timeline) expect(e.sources?.length, e.id).toBeGreaterThan(0)
    })
  }
  it('only Masjid al-Haram and places inside it are Umrah rites', () => {
    for (const s of tourSites.filter((x) => x.relation === 'umrah-rite')) expect(s.id === 'masjid-al-haram' || s.within === 'masjid-al-haram', s.id).toBe(true)
  })
  it('presets reference existing sites in the right city', () => {
    for (const p of presets) for (const id of p.siteIds) expect(siteById.get(id)?.city, `${p.id}:${id}`).toBe(p.city)
  })
})
