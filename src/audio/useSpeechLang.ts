import { useEffect, useState } from 'react'
import type { Lang } from '../content/types'
import { useAudio } from './AudioProvider'
import type { TtsLang } from './types'

/**
 * Picks the speech language for device text-to-speech. Prefers Arabic, but
 * if the device's Arabic voice is missing or silent it falls back to the
 * interface language (then English) — automatically, unless the user chose.
 */
export function useSpeechLang(uiLang: Lang, preferArabic = true) {
  const audio = useAudio()
  const [choice, setChoice] = useState<TtsLang | null>(null)
  const ar = audio.voiceStatus('ar')
  const ui = audio.voiceStatus(uiLang)

  useEffect(() => {
    if (preferArabic) audio.checkVoice('ar')
    audio.checkVoice(uiLang)
    audio.checkVoice('en')
    // checkVoice is cached per language; re-run when voices finish loading.
  }, [audio.checkVoice, uiLang, preferArabic]) // eslint-disable-line react-hooks/exhaustive-deps

  const fallback: TtsLang = ui === 'unavailable' ? 'en' : uiLang
  const auto: TtsLang = preferArabic && ar !== 'unavailable' ? 'ar' : fallback
  const speech = choice ?? auto
  return {
    speech,
    setSpeech: setChoice,
    arabicUnavailable: ar === 'unavailable',
    /** Arabic was wanted but the device can't speak it, so we switched */
    fellBack: preferArabic && choice === null && ar === 'unavailable',
    status: (l: TtsLang) => audio.voiceStatus(l),
  }
}
