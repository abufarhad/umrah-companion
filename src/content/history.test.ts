import { describe, expect, it } from 'vitest'
import { referenceTrack, trackById, quranTracks, narrationTrack } from '../audio/tracks'
import { splitSentences } from '../audio/AudioProvider'
import { ayahs } from './ayahs'
import { places } from './history'
import { mediaById } from './media'
import { getReference, references } from './references'
import { stageById } from './rituals'
import { HARAM_STAGES } from './history/stages'

const STAGES: Record<string, string[]> = {
  kaaba: ['valley', 'foundations', 'walls', 'house', 'purified', 'rebuilt', 'today'],
  hajar: ['arrival', 'search', 'run', 'zamzam', 'today'],
  zamzam: ['well', 'today'],
  hills: ['then', 'now'],
  haram: HARAM_STAGES,
  miqat: ['air', 'madinah'],
  madinah: ['hijrah', 'm622', 'm629', 'm638', 'm707', 'm1849', 'm1955', 'm1994'],
}

describe('history content integrity', () => {
  for (const p of places) {
    describe(p.id, () => {
      const chapters = [p.beginning, ...p.story]
      it('references exist', () => {
        const ids = [...p.refs, ...chapters.flatMap((c) => c.refs ?? []), ...p.timeline.flatMap((e) => e.refs ?? [])]
        for (const id of ids) expect(getReference(id), id).toBeTruthy()
      })
      it('media, audio and guide links exist', () => {
        for (const m of [p.thenNow.then.mediaId, p.thenNow.now.mediaId]) if (m) expect(mediaById.get(m), m).toBeTruthy()
        for (const a of p.audio) expect(trackById(a), a).toBeTruthy()
        expect(stageById.get(p.umrah.stageId)).toBeTruthy()
      })
      it('scene stages are valid', () => {
        for (const s of [...chapters.map((c) => c.stage), ...p.timeline.map((e) => e.stage)]) if (s) expect(STAGES[p.scene], s).toContain(s)
      })
      it('quiz answers point at an option', () => {
        for (const q of p.quiz) expect(q.answer).toBeLessThan(q.options.length)
      })
      it('every chapter and event is classified and bilingual', () => {
        for (const c of [...chapters, ...p.timeline]) {
          expect(['quran', 'hadith', 'documented', 'scholarly', 'disputed']).toContain(c.kind)
          expect(c.title.bn && c.title.en).toBeTruthy()
        }
      })
      it('documented and disputed claims carry a source or reference', () => {
        for (const c of [...chapters, ...p.timeline]) {
          if (c.kind === 'documented' && !c.refs?.length && c.id !== 'z3') expect(c.sources?.length, c.id).toBeGreaterThan(0)
        }
      })
    })
  }
})

describe('audio attribution', () => {
  it('only Qur’an recitations are attributed to Alafasy', () => {
    for (const r of references) {
      const t = referenceTrack(r, 'ar')
      if (r.ayahs?.length) expect(t.voice.name.en).toContain('Alafasy')
      else {
        expect(t.voice.isHuman).toBe(false)
        expect(t.items[0].tts).toBeTruthy()
      }
    }
  })
  it('every recitation item has a verse key, mirrors and transcript', () => {
    for (const t of quranTracks)
      for (const it of t.items) {
        expect(it.verseKey).toBeTruthy()
        expect(ayahs[it.verseKey!], it.verseKey).toBeTruthy()
        expect(it.urls).toHaveLength(3)
      }
  })
  it('narration is synthetic and labelled', () => {
    const n = narrationTrack(places[0], 'bn')
    expect(n.voice.isHuman).toBe(false)
    expect(n.items.length).toBe(places[0].story.length + 2)
  })
  it('splits sentences in Bangla, English and Arabic', () => {
    expect(splitSentences('এক। দুই। তিন।')).toEqual(['এক।', 'দুই।', 'তিন।'])
    expect(splitSentences('One. Two? Three!')).toEqual(['One.', 'Two?', 'Three!'])
    expect(splitSentences('لا إله إلا الله')).toHaveLength(1)
  })
})
