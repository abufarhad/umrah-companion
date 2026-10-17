import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from 'react'
import { readJson, writeJson } from '../lib/storage'
import type { AudioError, AudioItem, AudioStatus, AudioTrack, TtsLang } from './types'
import { rankVoices, speechText } from './voices'

/**
 * One app-wide player. It lives above the router, so playback (and its
 * position) continues while the user moves between pages; the mini-player
 * reflects it everywhere.
 *
 * Real recordings use a single HTMLAudioElement with URL fallbacks.
 * Synthetic speech uses the browser's SpeechSynthesis, spoken sentence by
 * sentence so captions stay in sync and long texts aren't cut off.
 */

export interface AudioState {
  track: AudioTrack | null
  index: number
  status: AudioStatus
  error: AudioError | null
  /** media: seconds; tts: unused */
  time: number
  duration: number
  /** tts: current sentence and count */
  sentence: number
  sentences: number
  rate: number
  volume: number
  muted: boolean
  /** Loop the whole track (useful for memorising a dua) */
  repeat: boolean
}

export interface AudioApi extends AudioState {
  play: (track: AudioTrack, index?: number) => void
  toggle: () => void
  pause: () => void
  seekFraction: (f: number) => void
  replay: () => void
  next: () => void
  prev: () => void
  jumpTo: (index: number) => void
  stop: () => void
  setRate: (r: number) => void
  setVolume: (v: number) => void
  toggleMute: () => void
  toggleRepeat: () => void
  /** 0..1 progress of the current item */
  progress: number
  /** Whether the device has a speech voice for the language */
  hasVoice: (lang: TtsLang) => boolean
  /** Result of a silent check that the language's voice really speaks */
  voiceStatus: (lang: TtsLang) => VoiceStatus
  /** Run the silent check once per language (cached) */
  checkVoice: (lang: TtsLang) => void
  /** Clearest-first voices the user can pick from for a language */
  voicesFor: (lang: TtsLang) => SpeechSynthesisVoice[]
  /** The voice that will be used for a language */
  currentVoice: (lang: TtsLang) => SpeechSynthesisVoice | null
  setVoicePref: (lang: TtsLang, voiceURI: string) => void
  isCurrent: (trackId: string) => boolean
}

export type VoiceStatus = 'unknown' | 'checking' | 'ok' | 'unavailable'

const PREFS_KEY = 'umrah-companion:audio'

/** Short phrases for the silent voice check (spoken at volume 0). */
const PROBE: Record<TtsLang, string> = { ar: 'السلام عليكم ورحمة الله', bn: 'আসসালামু আলাইকুম ওয়া রাহমাতুল্লাহ', en: 'Peace be upon you and the mercy of Allah' }
const Ctx = createContext<AudioApi | null>(null)

const LANG_PREFIX: Record<TtsLang, string> = { ar: 'ar', bn: 'bn', en: 'en' }

export function splitSentences(text: string): string[] {
  // Split after sentence punctuation in Latin, Bangla (।) and Arabic (؟ ، .) scripts.
  const parts = text.match(/[^.!?।؟\n]+[.!?।؟]*\s*/g) ?? [text]
  return parts.map((p) => p.trim()).filter(Boolean)
}

function synth(): SpeechSynthesis | null {
  return typeof window !== 'undefined' && 'speechSynthesis' in window ? window.speechSynthesis : null
}

export function AudioProvider({ children }: { children: ReactNode }) {
  const prefs = readJson<{ rate?: number; volume?: number; voices?: Partial<Record<TtsLang, string>> }>(PREFS_KEY)
  const [s, setS] = useState<AudioState>({
    track: null,
    index: 0,
    status: 'idle',
    error: null,
    time: 0,
    duration: 0,
    sentence: 0,
    sentences: 0,
    rate: prefs?.rate ?? 1,
    volume: prefs?.volume ?? 1,
    muted: false,
    repeat: false,
  })
  const ref = useRef(s)
  ref.current = s
  const audio = useRef<HTMLAudioElement | null>(null)
  const urlIndex = useRef(0)
  const ttsToken = useRef(0)
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([])

  const patch = useCallback((p: Partial<AudioState>) => setS((cur) => ({ ...cur, ...p })), [])

  /* ---------- voices ---------- */
  useEffect(() => {
    const sy = synth()
    if (!sy) return
    const load = () => setVoices(sy.getVoices())
    load()
    sy.addEventListener('voiceschanged', load)
    return () => sy.removeEventListener('voiceschanged', load)
  }, [])
  // Some devices list a voice that cannot actually speak (e.g. a macOS voice that
  // was never downloaded): it "ends" instantly with no sound. Such voices are
  // remembered as broken and skipped, so a play button never pretends to work.
  const [broken, setBroken] = useState<Set<string>>(() => new Set())
  const [voicePrefs, setVoicePrefs] = useState<Partial<Record<TtsLang, string>>>(prefs?.voices ?? {})
  // The user's chosen voice if it works, otherwise the clearest working one.
  const voiceFor = useCallback(
    (lang: TtsLang) => {
      const ranked = rankVoices(voices, lang).filter((v) => !broken.has(v.voiceURI))
      return ranked.find((v) => v.voiceURI === voicePrefs[lang]) ?? ranked[0] ?? null
    },
    [voices, broken, voicePrefs],
  )

  /*
   * Silent voice check: speak a short phrase at volume 0 and time it. A real
   * voice takes about a second; a listed-but-missing voice "ends" in ~100 ms.
   * Runs one language at a time, never while speech is playing.
   */
  const [voiceChecks, setVoiceChecks] = useState<Partial<Record<TtsLang, VoiceStatus>>>({})
  const checking = useRef<Promise<void>>(Promise.resolve())
  const checkVoice = useCallback(
    (lang: TtsLang) => {
      const sy = synth()
      if (!sy || !voices.length || voiceChecks[lang]) return
      setVoiceChecks((c) => ({ ...c, [lang]: 'checking' }))
      checking.current = checking.current.then(async () => {
        const candidates = rankVoices(voices, lang)
        const bad: string[] = []
        let ok = false
        for (const v of candidates) {
          while (sy.speaking) await new Promise((r) => setTimeout(r, 500))
          const ms = await new Promise<number>((resolve) => {
            const u = new SpeechSynthesisUtterance(PROBE[lang])
            u.voice = v
            u.lang = v.lang
            u.volume = 0
            const t0 = performance.now()
            const done = () => resolve(performance.now() - t0)
            u.onend = done
            u.onerror = () => resolve(0)
            setTimeout(() => resolve(10_000), 4000)
            sy.speak(u)
          })
          if (ms >= 400) {
            ok = true
            break
          }
          bad.push(v.voiceURI)
        }
        if (bad.length) setBroken((b) => new Set([...b, ...bad]))
        setVoiceChecks((c) => ({ ...c, [lang]: ok ? 'ok' : 'unavailable' }))
      })
    },
    [voices, voiceChecks],
  )

  /* ---------- core loading ---------- */
  const stopEverything = useCallback(() => {
    ttsToken.current++
    synth()?.cancel()
    const a = audio.current
    if (a) {
      a.pause()
      a.removeAttribute('src')
      a.load()
    }
  }, [])

  const loadRef = useRef<(track: AudioTrack, index: number) => void>(() => {})

  const itemEnded = useCallback(() => {
    const { track, index } = ref.current
    if (track && index + 1 < track.items.length) loadRef.current(track, index + 1)
    else if (track && ref.current.repeat) loadRef.current(track, 0)
    else patch({ status: 'ended' })
  }, [patch])

  const speak = useCallback(
    (item: AudioItem, sentence: number) => {
      const sy = synth()
      if (!sy || !item.tts) return patch({ status: 'error', error: 'unsupported' })
      const voice = voiceFor(item.tts.lang)
      if (!voice) return patch({ status: 'error', error: 'no-voice' })
      const parts = splitSentences(item.tts.text)
      const token = ++ttsToken.current
      sy.cancel()
      const say = (i: number) => {
        if (token !== ttsToken.current) return
        const started = performance.now()
        const u = new SpeechSynthesisUtterance(speechText(parts[i], item.tts!.lang))
        u.voice = voice
        u.lang = voice.lang
        u.rate = ref.current.rate
        u.volume = ref.current.muted ? 0 : ref.current.volume
        u.onend = () => {
          if (token !== ttsToken.current) return
          // Ended far faster than any real speech: the voice is silent.
          const elapsed = performance.now() - started
          if (elapsed < Math.min(700, parts[i].length * 20)) {
            setVoiceChecks((c) => ({ ...c, [item.tts!.lang]: 'unavailable' }))
            const next = new Set(broken).add(voice.voiceURI)
            setBroken(next)
            const alt = rankVoices(voices, item.tts!.lang).find((v) => !next.has(v.voiceURI))
            if (alt) setTimeout(() => speakRef.current(item, i), 0)
            else patch({ status: 'error', error: 'voice-broken' })
            return
          }
          if (i + 1 < parts.length) say(i + 1)
          else itemEnded()
        }
        u.onerror = (e) => {
          if (token !== ttsToken.current || e.error === 'interrupted' || e.error === 'canceled') return
          patch({ status: 'error', error: e.error === 'not-allowed' ? 'blocked' : 'unsupported' })
        }
        patch({ sentence: i, sentences: parts.length, status: 'playing', error: null })
        sy.speak(u)
      }
      say(Math.min(Math.max(0, sentence), parts.length - 1))
    },
    [voiceFor, voices, broken, itemEnded, patch],
  )

  const speakRef = useRef(speak)
  speakRef.current = speak

  const load = useCallback(
    (track: AudioTrack, index: number) => {
      stopEverything()
      const item = track.items[index]
      if (!item) return
      setS((cur) => ({ ...cur, track, index, status: 'loading', error: null, time: 0, duration: 0, sentence: 0, sentences: 0 }))
      if (item.tts) {
        speak(item, 0)
        return
      }
      const a = audio.current
      if (!a || !item.urls?.length) return patch({ status: 'error', error: 'network' })
      urlIndex.current = 0
      a.src = item.urls[0]
      a.playbackRate = ref.current.rate
      a.volume = ref.current.volume
      a.muted = ref.current.muted
      a.play().catch((e: DOMException) => {
        // Autoplay restrictions: keep it loaded and let the user press play.
        if (e.name === 'NotAllowedError') patch({ status: 'paused', error: null })
      })
    },
    [stopEverything, speak, patch],
  )
  loadRef.current = load

  /* ---------- media element ---------- */
  useEffect(() => {
    const a = new Audio()
    a.preload = 'none'
    audio.current = a
    const on = (ev: string, fn: () => void) => a.addEventListener(ev, fn)
    // Ignore events from the element being emptied by stop().
    const live = () => !!a.getAttribute('src') && !!ref.current.track
    on('loadstart', () => live() && patch({ status: 'loading' }))
    on('playing', () => patch({ status: 'playing', error: null }))
    on('pause', () => live() && !a.ended && ref.current.status === 'playing' && patch({ status: 'paused' }))
    on('waiting', () => live() && patch({ status: 'loading' }))
    on('timeupdate', () => patch({ time: a.currentTime }))
    on('durationchange', () => patch({ duration: Number.isFinite(a.duration) ? a.duration : 0 }))
    on('ended', () => itemEnded())
    on('error', () => {
      const item = ref.current.track?.items[ref.current.index]
      if (!a.getAttribute('src') || !item?.urls) return
      // Try the next mirror before giving up.
      if (urlIndex.current + 1 < item.urls.length) {
        urlIndex.current++
        a.src = item.urls[urlIndex.current]
        void a.play().catch(() => {})
      } else patch({ status: 'error', error: 'network' })
    })
    return () => {
      a.pause()
      a.removeAttribute('src')
    }
  }, [patch, itemEnded])

  useEffect(() => writeJson(PREFS_KEY, { rate: s.rate, volume: s.volume, voices: voicePrefs }), [s.rate, s.volume, voicePrefs])

  // Lock-screen / headset controls on mobile.
  useEffect(() => {
    if (!('mediaSession' in navigator) || !s.track) return
    navigator.mediaSession.metadata = new MediaMetadata({ title: s.track.title.en, artist: s.track.voice.name.en, album: 'Umrah Companion' })
  }, [s.track])

  /* ---------- public API ---------- */
  const isTts = () => !!ref.current.track?.items[ref.current.index]?.tts

  const api = useMemo<AudioApi>(() => {
    const pause = () => {
      if (isTts()) {
        // Cancel and remember the sentence: more reliable than synth.pause() on mobile.
        ttsToken.current++
        synth()?.cancel()
        patch({ status: 'paused' })
      } else audio.current?.pause()
    }
    const resume = () => {
      const { track, index, sentence, status } = ref.current
      if (!track) return
      if (status === 'ended' || status === 'error') return load(track, status === 'ended' ? 0 : index)
      const item = track.items[index]
      if (item.tts) speak(item, sentence)
      else void audio.current?.play().catch(() => patch({ status: 'error', error: 'blocked' }))
    }
    return {
      ...s,
      progress: s.track?.items[s.index]?.tts ? (s.sentences ? s.sentence / s.sentences : 0) : s.duration ? s.time / s.duration : 0,
      play: (track, index = 0) => {
        const cur = ref.current
        if (cur.track?.id === track.id && cur.index === index && (cur.status === 'paused' || cur.status === 'loading')) resume()
        else load(track, index)
      },
      toggle: () => (ref.current.status === 'playing' ? pause() : resume()),
      pause,
      seekFraction: (f) => {
        const { track, index } = ref.current
        const item = track?.items[index]
        if (!item) return
        const clamped = Math.min(1, Math.max(0, f))
        if (item.tts) speak(item, Math.floor(clamped * Math.max(1, splitSentences(item.tts.text).length)))
        else if (audio.current && ref.current.duration) audio.current.currentTime = clamped * ref.current.duration
      },
      replay: () => ref.current.track && load(ref.current.track, 0),
      next: () => {
        const { track, index } = ref.current
        if (track && index + 1 < track.items.length) load(track, index + 1)
      },
      prev: () => {
        const { track, index } = ref.current
        if (track) load(track, Math.max(0, index - 1))
      },
      jumpTo: (i) => ref.current.track && load(ref.current.track, i),
      stop: () => {
        stopEverything()
        setS((cur) => ({ ...cur, track: null, index: 0, status: 'idle', error: null, time: 0, duration: 0 }))
      },
      setRate: (r) => {
        patch({ rate: r })
        if (audio.current) audio.current.playbackRate = r
        // Speech rate can't change mid-utterance; restart the current sentence.
        const { track, index, sentence, status } = ref.current
        const item = track?.items[index]
        if (item?.tts && status === 'playing') setTimeout(() => speak(item, sentence), 0)
      },
      setVolume: (v) => {
        patch({ volume: v, muted: v === 0 })
        if (audio.current) {
          audio.current.volume = v
          audio.current.muted = v === 0
        }
      },
      toggleMute: () => {
        const m = !ref.current.muted
        patch({ muted: m })
        if (audio.current) audio.current.muted = m
      },
      toggleRepeat: () => patch({ repeat: !ref.current.repeat }),
      hasVoice: (lang) => !!voiceFor(lang),
      voiceStatus: (lang) => (!voices.length ? 'unknown' : !voices.some((v) => v.lang.toLowerCase().startsWith(LANG_PREFIX[lang])) ? 'unavailable' : (voiceChecks[lang] ?? 'unknown')),
      checkVoice,
      voicesFor: (lang) => rankVoices(voices, lang).filter((v) => !broken.has(v.voiceURI)),
      currentVoice: voiceFor,
      setVoicePref: (lang, uri) => {
        setVoicePrefs((p) => ({ ...p, [lang]: uri }))
        // Restart the current sentence with the new voice.
        const { track, index, sentence, status } = ref.current
        const item = track?.items[index]
        if (item?.tts?.lang === lang && status === 'playing') setTimeout(() => speakRef.current(item, sentence), 0)
      },
      isCurrent: (id) => ref.current.track?.id === id,
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [s, load, speak, patch, stopEverything, voiceFor, voices, voiceChecks, checkVoice, broken])

  return <Ctx.Provider value={api}>{children}</Ctx.Provider>
}

export function useAudio(): AudioApi {
  const a = useContext(Ctx)
  if (!a) throw new Error('useAudio outside AudioProvider')
  return a
}
