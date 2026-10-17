import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { BookOpenText, CheckCircle2, ExternalLink, HelpCircle, Landmark, ScrollText, Sparkles, XCircle } from 'lucide-react'
import { useId, useState } from 'react'
import type { ClaimKind, HistorySource, QuizQuestion, TimelineEvent } from '../../content/types'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { RefChips } from '../religious'
import { Badge, Button, cx } from '../ui'

const claimStyle: Record<ClaimKind, { tone: 'emerald' | 'gold' | 'blue' | 'gray' | 'red'; icon: typeof Sparkles }> = {
  quran: { tone: 'emerald', icon: BookOpenText },
  hadith: { tone: 'gold', icon: ScrollText },
  documented: { tone: 'blue', icon: Landmark },
  scholarly: { tone: 'gray', icon: HelpCircle },
  disputed: { tone: 'red', icon: HelpCircle },
}

/** Labels how a statement is known: Qur'an, hadith, documented history, interpretation or disputed. */
export function ClaimBadge({ kind }: { kind: ClaimKind }) {
  const { t } = useLang()
  const s = claimStyle[kind]
  return (
    <Badge tone={s.tone}>
      <s.icon className="size-3.5" aria-hidden /> {t(`history.claim.${kind}`)}
    </Badge>
  )
}

export function Sources({ sources }: { sources?: HistorySource[] }) {
  const { t } = useLang()
  if (!sources?.length) return null
  return (
    <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-ink-muted">
      <span>{t('history.sources')}:</span>
      {sources.map((s) => (
        <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 underline">
          {s.title} <ExternalLink className="size-3" aria-hidden />
        </a>
      ))}
    </p>
  )
}

/**
 * A timeline you can scrub through. The slider, the event dots and the
 * keyboard all move between periods; the selected event drives the scene.
 */
export function TimelineScrubber({ events, index, onChange }: { events: TimelineEvent[]; index: number; onChange: (i: number) => void }) {
  const { t, lang } = useLang()
  const reduce = useReducedMotion()
  const id = useId()
  const e = events[index]
  return (
    <div className="rounded-2xl border border-sand-200 bg-white p-4 shadow-card sm:p-5">
      <label htmlFor={id} className="text-sm font-medium text-ink-soft">{t('history.scrub')}</label>
      <div className="relative mt-3">
        <div className="absolute top-1/2 right-0 left-0 h-1 -translate-y-1/2 rounded-full bg-sand-200" aria-hidden />
        <motion.div className="absolute top-1/2 left-0 h-1 -translate-y-1/2 rounded-full bg-emerald-600" initial={false} animate={{ width: `${(index / Math.max(1, events.length - 1)) * 100}%` }} aria-hidden />
        <div className="relative flex justify-between" aria-hidden>
          {events.map((ev, i) => (
            <button key={ev.id} type="button" tabIndex={-1} onClick={() => onChange(i)} className={cx('size-4 rounded-full border-2 transition-transform', i <= index ? 'border-emerald-600 bg-emerald-600' : 'border-sand-300 bg-white', i === index && 'scale-125 ring-4 ring-gold-300/50')} title={ev.when[lang]} />
          ))}
        </div>
        <input
          id={id}
          type="range"
          min={0}
          max={events.length - 1}
          value={index}
          onChange={(ev) => onChange(Number(ev.target.value))}
          aria-valuetext={`${e.when[lang]} - ${e.title[lang]}`}
          className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
        />
      </div>
      <div className="mt-2 flex justify-between text-[11px] text-ink-muted">
        <span>{events[0].when[lang]}</span>
        <span>{events.at(-1)!.when[lang]}</span>
      </div>
      <div className="mt-4 min-h-[9rem]" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={e.id} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.22 }}>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-display text-lg font-semibold text-gold-600">{e.when[lang]}</span>
              <ClaimBadge kind={e.kind} />
            </div>
            <h4 className="mt-1 font-semibold text-emerald-900">{e.title[lang]}</h4>
            <p className="mt-1 text-sm text-ink-soft">{e.text[lang]}</p>
            <RefChips ids={e.refs} />
            <Sources sources={e.sources} />
          </motion.div>
        </AnimatePresence>
      </div>
      <div className="mt-3 flex justify-between">
        <Button variant="ghost" onClick={() => onChange(Math.max(0, index - 1))} disabled={index === 0}>← {t('common.prev')}</Button>
        <span className="self-center text-xs text-ink-muted">{num(index + 1, lang)} / {num(events.length, lang)}</span>
        <Button variant="ghost" onClick={() => onChange(Math.min(events.length - 1, index + 1))} disabled={index === events.length - 1}>{t('common.next')} →</Button>
      </div>
    </div>
  )
}

export function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const { t, lang } = useLang()
  const [answers, setAnswers] = useState<(number | null)[]>(() => questions.map(() => null))
  const score = answers.filter((a, i) => a === questions[i].answer).length
  const done = answers.every((a) => a !== null)
  return (
    <div className="grid gap-4">
      {questions.map((q, qi) => {
        const chosen = answers[qi]
        return (
          <fieldset key={q.q.en} className="rounded-2xl border border-sand-200 bg-white p-4">
            <legend className="sr-only">{q.q[lang]}</legend>
            <p className="font-semibold text-emerald-900">{num(qi + 1, lang)}. {q.q[lang]}</p>
            <div className="mt-3 grid gap-2">
              {q.options.map((o, oi) => {
                const isRight = oi === q.answer
                const picked = chosen === oi
                return (
                  <button
                    key={o.en}
                    type="button"
                    disabled={chosen !== null}
                    aria-pressed={picked}
                    onClick={() => setAnswers((a) => a.map((x, i) => (i === qi ? oi : x)))}
                    className={cx(
                      'flex min-h-11 items-center gap-2 rounded-xl border px-3 py-2 text-left text-sm transition-colors',
                      chosen === null ? 'border-sand-300 hover:border-emerald-600 hover:bg-emerald-50' : isRight ? 'border-emerald-600 bg-emerald-50' : picked ? 'border-red-400 bg-red-50' : 'border-sand-200 opacity-60',
                    )}
                  >
                    {chosen !== null && isRight && <CheckCircle2 className="size-4 shrink-0 text-emerald-700" aria-hidden />}
                    {chosen !== null && picked && !isRight && <XCircle className="size-4 shrink-0 text-red-600" aria-hidden />}
                    {o[lang]}
                  </button>
                )
              })}
            </div>
            <AnimatePresence>
              {chosen !== null && (
                <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="mt-3 overflow-hidden text-sm text-ink-soft" role="status">
                  <span className="font-semibold">{chosen === q.answer ? t('history.correct') : t('history.notQuite')}</span> {q.explain[lang]}
                </motion.p>
              )}
            </AnimatePresence>
          </fieldset>
        )
      })}
      {done && (
        <div className="flex items-center justify-between rounded-2xl bg-emerald-900 p-4 text-white">
          <span>{t('history.score', { n: num(score, lang), total: num(questions.length, lang) })}</span>
          <Button variant="gold" onClick={() => setAnswers(questions.map(() => null))}>{t('history.tryAgain')}</Button>
        </div>
      )}
    </div>
  )
}
