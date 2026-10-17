import { describe, expect, it } from 'vitest'
import { SURAH_LENGTHS, globalAyah, recitationUrls } from './quran'

describe('quran audio urls', () => {
  it('has 6236 verses in 114 surahs', () => {
    expect(SURAH_LENGTHS).toHaveLength(114)
    expect(SURAH_LENGTHS.reduce((a, b) => a + b, 0)).toBe(6236)
  })
  it('computes global ayah numbers (verified against AlQuran.cloud)', () => {
    expect(globalAyah('1:1')).toBe(1)
    expect(globalAyah('2:125')).toBe(132)
    expect(globalAyah('114:6')).toBe(6236)
  })
  it('builds mirror urls', () => {
    expect(recitationUrls('2:158')).toEqual([
      'https://cdn.islamic.network/quran/audio/128/ar.alafasy/165.mp3',
      'https://verses.quran.com/Alafasy/mp3/002158.mp3',
      'https://everyayah.com/data/Alafasy_128kbps/002158.mp3',
    ])
  })
  it('rejects invalid keys', () => {
    expect(() => recitationUrls('2:287')).toThrow()
  })
})
