import type { TtsLang } from './types'

/**
 * Choosing a clear device voice and preparing text so it is spoken clearly.
 * (Captions always show the original text; only the spoken copy is cleaned.)
 */

const PREFIX: Record<TtsLang, string> = { ar: 'ar', bn: 'bn', en: 'en' }

/** macOS novelty and "Eloquence" voices — robotic or comic, never chosen automatically. */
const NOVELTY = /^(albert|bad news|bahh|bells|boing|bubbles|cellos|good news|jester|organ|superstar|trinoids|whisper|wobble|zarvox|fred|junior|ralph|kathy|eddy|flo|grandma|grandpa|reed|rocko|sandy|shelley)\b/i

/** Higher-quality engines or downloaded voices. */
const PREMIUM = /(premium|enhanced|neural|natural|google|microsoft .*online|siri)/i

/** Clear, widely available system voices (macOS/iOS, Windows, Android, Chrome). */
const CLEAR = /^(samantha|daniel|karen|moira|tessa|rishi|alex|ava|allison|susan|tom|serena|kate|oliver|zoe|evan|nathan|aria|jenny|guy|zira|david|mark|hazel|george|libby|ryan|sonia|piya|lekha|majed|maged|tarik|laila|hoda|naayf|zariyah)\b/i

const REGION_PREF: Record<TtsLang, string[]> = { en: ['en-gb', 'en-us', 'en-in', 'en-au', 'en-ie'], bn: ['bn-bd', 'bn-in'], ar: ['ar-sa', 'ar-001', 'ar-eg'] }

export function isNovelty(v: SpeechSynthesisVoice) {
  return NOVELTY.test(v.name)
}

function score(v: SpeechSynthesisVoice, lang: TtsLang): number {
  const l = v.lang.toLowerCase()
  let s = 0
  if (PREMIUM.test(v.name)) s += 40
  if (CLEAR.test(v.name)) s += 20
  const region = REGION_PREF[lang].indexOf(l)
  if (region >= 0) s += 10 - region
  if (v.default) s += 3
  if (v.localService) s += 1 // works offline and starts instantly
  return s
}

/** Voices for a language, clearest first; novelty voices excluded. */
export function rankVoices(all: SpeechSynthesisVoice[], lang: TtsLang): SpeechSynthesisVoice[] {
  return all
    .filter((v) => v.lang.toLowerCase().startsWith(PREFIX[lang]) && !isNovelty(v))
    .sort((a, b) => score(b, lang) - score(a, lang))
}

/** Short, readable label for a voice in the picker. */
export function voiceLabel(v: SpeechSynthesisVoice) {
  return `${v.name.replace(/\s*\(.*\)\s*$/, '')} · ${v.lang}`
}

/**
 * Make text easier for a speech engine: expand honorific symbols, drop
 * transliteration marks that engines misread, and turn dashes/ellipses into pauses.
 */
export function speechText(text: string, lang: TtsLang): string {
  let t = text
  if (lang === 'en') {
    t = t
      .replace(/ﷺ/g, ', peace be upon him,')
      .replace(/\s*\((?:may Allah be pleased with (?:him|her|them))\)/gi, '')
      // ḥ ā ī ū ṣ ḍ ṭ ẓ → plain letters; ‘ ’ ʿ ʾ (ayn/hamza marks) removed
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[‘’ʿʾ`]/g, '')
  } else if (lang === 'bn') {
    t = t
      .replace(/ﷺ/g, ' সাল্লাল্লাহু আলাইহি ওয়া সাল্লাম')
      .replace(/\(রা\.\)/g, ' রাদিয়াল্লাহু আনহু')
      .replace(/\(আ\.\)/g, ' আলাইহিস সালাম')
      .replace(/[‘’]/g, '')
  }
  return t
    .replace(/\s+-\s+/g, ', ')
    .replace(/…|\.\.\./g, ', ')
    .replace(/[“”"«»]/g, '')
    .replace(/\s{2,}/g, ' ')
    .trim()
}
