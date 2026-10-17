import { describe, expect, it } from 'vitest'
import { rankVoices, speechText } from './voices'

const v = (name: string, lang: string, extra: Partial<SpeechSynthesisVoice> = {}) =>
  ({ name, lang, voiceURI: name, localService: true, default: false, ...extra }) as SpeechSynthesisVoice

describe('voice ranking', () => {
  const all = [v('Albert', 'en-US'), v('Zarvox', 'en-US'), v('Fred', 'en-US'), v('Samantha', 'en-US', { default: true }), v('Daniel', 'en-GB'), v('Samantha (Enhanced)', 'en-US'), v('Piya', 'bn-IN')]
  it('never picks novelty voices', () => {
    const names = rankVoices(all, 'en').map((x) => x.name)
    expect(names).not.toContain('Albert')
    expect(names).not.toContain('Zarvox')
    expect(names).not.toContain('Fred')
  })
  it('prefers enhanced/premium voices, then clear system voices', () => {
    expect(rankVoices(all, 'en')[0].name).toBe('Samantha (Enhanced)')
    expect(rankVoices(all.filter((x) => !x.name.includes('Enhanced')), 'en').map((x) => x.name).slice(0, 2).sort()).toEqual(['Daniel', 'Samantha'])
  })
  it('filters by language', () => {
    expect(rankVoices(all, 'bn').map((x) => x.name)).toEqual(['Piya'])
    expect(rankVoices(all, 'ar')).toEqual([])
  })
})

describe('speech text cleaning', () => {
  it('expands ﷺ and strips transliteration marks in English', () => {
    expect(speechText('The Prophet ﷺ said to ‘A’ishah: “Do what the pilgrim does.”', 'en')).toBe('The Prophet , peace be upon him, said to Aishah: Do what the pilgrim does.')
    expect(speechText('ḥajj and ‘umrah - Sa‘i', 'en')).toBe('hajj and umrah, Sai')
  })
  it('expands Bangla honorifics', () => {
    expect(speechText('নবী ﷺ ও উমর (রা.)', 'bn')).toBe('নবী সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম ও উমর রাদিয়াল্লাহু আনহু')
  })
})
