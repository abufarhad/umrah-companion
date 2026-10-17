import { AnimatePresence, motion } from 'motion/react'
import { AlertCircle, AudioLines, BadgeCheck, Bot, ChevronLeft, ChevronRight, ExternalLink, Loader2, Pause, Play, Repeat, RotateCcw, Volume2, VolumeX, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router'
import { Badge, cx } from '../components/ui'
import { useLang } from '../i18n'
import { num } from '../lib/format'
import { splitSentences, useAudio } from './AudioProvider'
import { fetchWordTimings, type WordTiming } from './quran'
import type { AudioTrack } from './types'
import { voiceLabel } from './voices'

export const RATES = [0.75, 1, 1.25, 1.5]

export function fmtTime(sec: number, lang: 'bn' | 'en') {
  if (!Number.isFinite(sec) || sec <= 0) return num(0, lang) + ':' + num(0, lang) + num(0, lang)
  const m = Math.floor(sec / 60)
  const s = Math.floor(sec % 60)
  return `${num(m, lang)}:${s < 10 ? num(0, lang) : ''}${num(s, lang)}`
}

/** Who is speaking - always explicit, never implied. */
export function VoiceBadge({ track }: { track: AudioTrack }) {
  const { t, lang } = useLang()
  return track.voice.isHuman ? (
    <Badge tone="emerald">
      <BadgeCheck className="size-3.5" aria-hidden /> {track.voice.name[lang]}
      {track.voice.verified && <span className="sr-only">({t('audio.verified')})</span>}
    </Badge>
  ) : (
    <Badge tone="gray">
      <Bot className="size-3.5" aria-hidden /> {t('audio.synthetic')}
    </Badge>
  )
}

function StatusLine({ track }: { track: AudioTrack }) {
  const { t } = useLang()
  const a = useAudio()
  if (!a.isCurrent(track.id)) return null
  if (a.status === 'loading')
    return (
      <p className="flex items-center gap-1.5 text-xs text-ink-muted" role="status">
        <Loader2 className="size-3.5 animate-spin" /> {t('audio.loading')}
      </p>
    )
  if (a.status === 'error')
    return (
      <p className="flex items-center gap-1.5 text-xs text-red-700" role="alert">
        <AlertCircle className="size-3.5" /> {t(`audio.errors.${a.error ?? 'network'}`)}
      </p>
    )
  return null
}

function Controls({ track, compact = false }: { track: AudioTrack; compact?: boolean }) {
  const { t, lang } = useLang()
  const a = useAudio()
  const active = a.isCurrent(track.id)
  const playing = active && a.status === 'playing'
  const loading = active && a.status === 'loading'
  const item = active ? track.items[a.index] : track.items[0]
  const isTts = !!item?.tts
  const progress = active ? a.progress : 0
  const unavailable = isTts && item?.tts && !a.hasVoice(item.tts.lang)

  return (
    <div className="grid gap-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => (active ? a.toggle() : a.play(track))}
          disabled={!!unavailable}
          className="grid size-11 shrink-0 place-items-center rounded-full bg-emerald-800 text-white shadow-card transition-colors hover:bg-emerald-700 disabled:opacity-40"
          aria-label={playing ? t('audio.pause') : t('audio.play')}
        >
          {loading ? <Loader2 className="size-5 animate-spin" /> : playing ? <Pause className="size-5" /> : <Play className="ml-0.5 size-5" />}
        </button>
        <div className="min-w-0 flex-1">
          <input
            type="range"
            min={0}
            max={1000}
            value={Math.round(progress * 1000)}
            onChange={(e) => active && a.seekFraction(Number(e.target.value) / 1000)}
            disabled={!active}
            aria-label={t('audio.position')}
            aria-valuetext={isTts ? t('audio.sentenceOf', { n: num(a.sentence + 1, lang), total: num(a.sentences, lang) }) : `${fmtTime(a.time, lang)} / ${fmtTime(a.duration, lang)}`}
            className="h-2 w-full cursor-pointer accent-emerald-700 disabled:cursor-default"
          />
          <div className="flex justify-between text-[11px] text-ink-muted tabular-nums">
            <span>{active ? (isTts ? t('audio.sentenceOf', { n: num(a.sentence + 1, lang), total: num(a.sentences || 1, lang) }) : fmtTime(a.time, lang)) : '-'}</span>
            <span>
              {track.items.length > 1 && t('audio.partOf', { n: num((active ? a.index : 0) + 1, lang), total: num(track.items.length, lang) })}
              {!isTts && active && a.duration > 0 && ` · ${fmtTime(a.duration, lang)}`}
            </span>
          </div>
        </div>
        {!compact && (
          <button type="button" onClick={() => (active ? a.replay() : a.play(track))} className="grid size-10 place-items-center rounded-lg hover:bg-sand-100" aria-label={t('audio.replay')}>
            <RotateCcw className="size-4" />
          </button>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-2">
        {track.items.length > 1 && (
          <div className="flex">
            <button type="button" onClick={a.prev} disabled={!active || a.index === 0} className="grid size-9 place-items-center rounded-lg hover:bg-sand-100 disabled:opacity-30" aria-label={t('audio.prevPart')}>
              <ChevronLeft className="size-4" />
            </button>
            <button type="button" onClick={a.next} disabled={!active || a.index >= track.items.length - 1} className="grid size-9 place-items-center rounded-lg hover:bg-sand-100 disabled:opacity-30" aria-label={t('audio.nextPart')}>
              <ChevronRight className="size-4" />
            </button>
          </div>
        )}
        <div role="group" aria-label={t('audio.speed')} className="flex rounded-lg bg-sand-100 p-0.5">
          {RATES.map((r) => (
            <button key={r} type="button" aria-pressed={a.rate === r} onClick={() => a.setRate(r)} className={cx('min-h-8 rounded-md px-2 text-xs font-semibold tabular-nums', a.rate === r ? 'bg-white text-emerald-900 shadow-card' : 'text-ink-soft')}>
              {num(r, lang, 2)}×
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={a.toggleRepeat}
          aria-pressed={a.repeat}
          className={cx('inline-flex min-h-8 items-center gap-1 rounded-lg px-2 text-xs font-semibold', a.repeat ? 'bg-emerald-800 text-white' : 'bg-sand-100 text-ink-soft')}
        >
          <Repeat className="size-3.5" aria-hidden /> {t('audio.repeat')}
        </button>
        {!compact && (
          <div className="flex items-center gap-1">
            <button type="button" onClick={a.toggleMute} className="grid size-9 place-items-center rounded-lg hover:bg-sand-100" aria-label={a.muted ? t('audio.unmute') : t('audio.mute')}>
              {a.muted || a.volume === 0 ? <VolumeX className="size-4" /> : <Volume2 className="size-4" />}
            </button>
            <input type="range" min={0} max={100} value={a.muted ? 0 : Math.round(a.volume * 100)} onChange={(e) => a.setVolume(Number(e.target.value) / 100)} aria-label={t('audio.volume')} className="h-1.5 w-20 accent-emerald-700" />
          </div>
        )}
      </div>
      {isTts && item?.tts && a.voicesFor(item.tts.lang).length > 1 && (
        <label className="flex flex-wrap items-center gap-2 text-xs text-ink-soft">
          <span>{t('audio.voice')}</span>
          <select
            value={a.currentVoice(item.tts.lang)?.voiceURI ?? ''}
            onChange={(e) => a.setVoicePref(item.tts!.lang, e.target.value)}
            className="min-h-9 max-w-[16rem] rounded-lg border border-sand-300 bg-white px-2 text-sm"
          >
            {a.voicesFor(item.tts.lang).map((v) => (
              <option key={v.voiceURI} value={v.voiceURI}>{voiceLabel(v)}</option>
            ))}
          </select>
        </label>
      )}
      {unavailable && !(active && a.status === 'error') && <p className="text-xs text-red-700">{t('audio.errors.no-voice')}</p>}
      <StatusLine track={track} />
    </div>
  )
}

function Attribution({ track }: { track: AudioTrack }) {
  const { t, lang } = useLang()
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-ink-muted">
      <VoiceBadge track={track} />
      {track.voice.note && <span>{track.voice.note[lang]}</span>}
      {track.source && (
        <a href={track.source.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 underline">
          {t('audio.source')}: {track.source.name} <ExternalLink className="size-3" aria-hidden />
        </a>
      )}
      {track.source?.terms && (track.source.termsUrl ? <a href={track.source.termsUrl} target="_blank" rel="noopener noreferrer" className="underline">{track.source.terms[lang]}</a> : <span>{track.source.terms[lang]}</span>)}
    </div>
  )
}

/**
 * Arabic ayah with the word being recited highlighted. Timings load only for
 * the ayah that is playing; until then (or on failure) the plain text shows.
 */
function SyncedAyah({ verseKey, fallback, active }: { verseKey: string; fallback: string; active: boolean }) {
  const a = useAudio()
  const [words, setWords] = useState<WordTiming[] | null>(null)
  useEffect(() => {
    if (!active) return
    let live = true
    void fetchWordTimings(verseKey).then((w) => live && setWords(w))
    return () => {
      live = false
    }
  }, [active, verseKey])
  if (!active || !words) return <>{fallback}</>
  const ms = a.time * 1000
  return (
    <>
      {words.map((w) => {
        const on = w.start !== null && w.end !== null && ms >= w.start && ms < w.end
        return (
          <span key={w.position} className={cx('rounded px-0.5 transition-colors', on && 'bg-gold-300/60')}>
            {w.text}{' '}
          </span>
        )
      })}
    </>
  )
}

/** Transcript with the current part (and sentence, for speech) highlighted. */
function Transcript({ track }: { track: AudioTrack }) {
  const { lang } = useLang()
  const a = useAudio()
  const active = a.isCurrent(track.id)
  const box = useRef<HTMLOListElement>(null)
  useEffect(() => {
    if (!active) return
    box.current?.querySelector<HTMLElement>('[data-current="true"]')?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [active, a.index, a.sentence])
  const other = lang === 'bn' ? 'en' : 'bn'
  return (
    <ol ref={box} className="grid max-h-[26rem] gap-2 overflow-y-auto pr-1">
      {track.items.map((it, i) => {
        const current = active && a.index === i
        const sentences = it.tts ? splitSentences(it.tts.text) : null
        return (
          <li key={it.id} data-current={current} className={cx('rounded-xl border p-3 transition-colors', current ? 'border-gold-400 bg-gold-300/10' : 'border-sand-200 bg-white')}>
            <button type="button" className="w-full text-left" onClick={() => (active ? a.jumpTo(i) : a.play(track, i))}>
              {it.caption.label && <span className="mb-1 block text-xs font-semibold text-emerald-800">{it.caption.label}</span>}
              {it.caption.arabic && (
                <span lang="ar" dir="rtl" className="arabic block text-right text-xl text-ink">
                  {it.verseKey ? (
                    <SyncedAyah verseKey={it.verseKey} fallback={it.caption.arabic} active={current} />
                  ) : sentences && it.tts?.lang === 'ar' ? (
                    sentences.map((x, j) => <span key={j} className={cx(current && a.sentence === j && 'rounded bg-gold-300/50')}>{x} </span>)
                  ) : (
                    it.caption.arabic
                  )}
                </span>
              )}
              {it.caption.transliteration && <span className="mt-1 block text-xs text-ink-soft italic">{it.caption.transliteration}</span>}
              <span className="mt-1.5 block text-sm text-ink">
                {sentences && it.tts?.lang === lang
                  ? sentences.map((x, j) => <span key={j} className={cx(current && a.sentence === j && 'rounded bg-gold-300/50')}>{x} </span>)
                  : it.caption[lang]}
              </span>
              <span lang={other} className="mt-1 block text-xs text-ink-muted">
                {sentences && it.tts?.lang === other
                  ? sentences.map((x, j) => <span key={j} className={cx(current && a.sentence === j && 'rounded bg-gold-300/50')}>{x} </span>)
                  : it.caption[other]}
              </span>
            </button>
          </li>
        )
      })}
    </ol>
  )
}

/** Full player: controls, attribution and transcript. */
export function AudioPlayer({ track, transcript = true, className }: { track: AudioTrack; transcript?: boolean; className?: string }) {
  const { lang } = useLang()
  return (
    <section className={cx('rounded-2xl border border-sand-200 bg-white p-4 shadow-card', className)} aria-label={track.title[lang]}>
      <div className="mb-3 flex items-start gap-2">
        <AudioLines className="mt-0.5 size-5 shrink-0 text-gold-500" aria-hidden />
        <h3 className="font-semibold text-emerald-900">{track.title[lang]}</h3>
      </div>
      <Controls track={track} />
      <div className="mt-3">
        <Attribution track={track} />
      </div>
      {transcript && <div className="mt-4"><Transcript track={track} /></div>}
    </section>
  )
}

/** Compact controls for inline use (e.g. inside a reference card). */
export function ListenBar({ track }: { track: AudioTrack }) {
  return (
    <div className="mt-3 rounded-xl bg-sand-50 p-3">
      <Controls track={track} compact />
      <div className="mt-2">
        <Attribution track={track} />
      </div>
    </div>
  )
}

/** Global mini-player: visible on every page while something is loaded. */
export function MiniPlayer() {
  const { t, lang } = useLang()
  const a = useAudio()
  const track = a.track
  const playing = a.status === 'playing'
  return (
    <AnimatePresence>
      {track && a.status !== 'idle' && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          className="no-print fixed inset-x-2 bottom-[calc(4rem+env(safe-area-inset-bottom))] z-40 sm:right-4 sm:left-auto sm:w-96 lg:bottom-4"
          role="region"
          aria-label={t('audio.miniPlayer')}
        >
          <div className="overflow-hidden rounded-2xl bg-emerald-950 text-white shadow-lift ring-1 ring-white/10">
            <div className="h-1 bg-white/10">
              <div className="h-full bg-gold-400 transition-[width] duration-300" style={{ width: `${Math.round(a.progress * 100)}%` }} />
            </div>
            <div className="flex items-center gap-3 p-3">
              <button type="button" onClick={a.toggle} className="grid size-10 shrink-0 place-items-center rounded-full bg-gold-400 text-emerald-950" aria-label={playing ? t('audio.pause') : t('audio.play')}>
                {a.status === 'loading' ? <Loader2 className="size-5 animate-spin" /> : playing ? <Pause className="size-5" /> : <Play className="ml-0.5 size-5" />}
              </button>
              <div className="min-w-0 flex-1">
                {track.href ? (
                  <Link to={track.href} className="block truncate text-sm font-semibold hover:underline">{track.title[lang]}</Link>
                ) : (
                  <p className="truncate text-sm font-semibold">{track.title[lang]}</p>
                )}
                <p className="truncate text-xs text-emerald-100/80">
                  {track.voice.isHuman ? track.voice.name[lang] : t('audio.synthetic')}
                  {track.items.length > 1 && ` · ${t('audio.partOf', { n: num(a.index + 1, lang), total: num(track.items.length, lang) })}`}
                  {a.status === 'error' && ` · ${t('audio.failed')}`}
                </p>
              </div>
              <button type="button" onClick={a.stop} className="grid size-9 place-items-center rounded-lg text-white/70 hover:bg-white/10" aria-label={t('audio.close')}>
                <X className="size-4" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
