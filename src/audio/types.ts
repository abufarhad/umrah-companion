import type { L10n } from '../content/types'

/**
 * One playable unit. Either a real recording (`urls`, tried in order) or a
 * device text-to-speech request (`tts`). Never both.
 */
export interface AudioItem {
  id: string
  urls?: string[]
  tts?: { text: string; lang: TtsLang }
  /** Qur'an verse key (e.g. "2:125") - enables word-by-word highlighting when timings load */
  verseKey?: string
  /** Transcript shown and highlighted while this item plays */
  caption: { arabic?: string; transliteration?: string; bn: string; en: string; label?: string }
}

export type TtsLang = 'ar' | 'bn' | 'en'

export interface Voice {
  name: L10n
  /** A real person's recording (true) or synthetic device speech (false) */
  isHuman: boolean
  /** Speaker identity verified from the publishing source */
  verified: boolean
  note?: L10n
}

export interface AudioSource {
  name: string
  url: string
  terms?: L10n
  termsUrl?: string
}

export interface AudioTrack {
  id: string
  title: L10n
  kind: 'recitation' | 'narration' | 'tts'
  voice: Voice
  source?: AudioSource
  items: AudioItem[]
  /** Page to return to from the mini-player */
  href?: string
}

export type AudioStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'ended' | 'error'

export type AudioError = 'network' | 'unsupported' | 'no-voice' | 'voice-broken' | 'blocked'
