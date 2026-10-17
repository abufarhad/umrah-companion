import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ChevronLeft, ChevronRight, Pause, Play, RotateCcw } from 'lucide-react'
import { useEffect, useState, type ReactNode } from 'react'
import type { L10n } from '../../content/types'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { cx } from '../ui'

export interface TutorialStep {
  caption: L10n
}

/**
 * A short, captioned, self-advancing visual tutorial (≈ 5 s per step). It plays
 * the role of a short explainer video but is an original illustration - light
 * on mobile data, bilingual, pausable and keyboard-accessible. Captions are
 * announced to screen readers via aria-live.
 */
export function TutorialPlayer({
  steps,
  title,
  children,
  seconds = 5,
}: {
  steps: TutorialStep[]
  title: string
  children: (step: number) => ReactNode
  seconds?: number
}) {
  const { t, lang } = useLang()
  const reduce = useReducedMotion()
  const [step, setStep] = useState(0)
  const [playing, setPlaying] = useState(false)
  const last = steps.length - 1

  useEffect(() => {
    if (!playing) return
    if (step >= last) {
      setPlaying(false)
      return
    }
    const id = window.setTimeout(() => setStep((s) => Math.min(last, s + 1)), seconds * 1000)
    return () => window.clearTimeout(id)
  }, [playing, step, last, seconds])

  return (
    <figure className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card">
      <div className="relative bg-gradient-to-b from-sand-50 to-sand-100">{children(step)}</div>
      <figcaption className="border-t border-sand-200 p-4">
        <div className="mb-2 flex items-center justify-between gap-2 text-xs text-ink-muted">
          <span className="font-semibold text-emerald-800">{title}</span>
          <span>
            {t('media.illustration')} · {num(step + 1, lang)}/{num(steps.length, lang)}
          </span>
        </div>
        <div className="min-h-[3.5rem]" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.p
              key={step}
              initial={reduce ? false : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="text-[0.95rem] text-ink"
            >
              {steps[step].caption[lang]}
            </motion.p>
          </AnimatePresence>
        </div>
        <div className="mt-3 flex items-center gap-2">
          <button type="button" className="grid size-10 place-items-center rounded-lg bg-sand-100 hover:bg-sand-200 disabled:opacity-40" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} aria-label={t('common.prev')}>
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            className="flex min-h-10 flex-1 items-center justify-center gap-2 rounded-lg bg-emerald-800 px-3 text-sm font-semibold text-white hover:bg-emerald-700"
            onClick={() => {
              if (step >= last) {
                setStep(0)
                setPlaying(true)
              } else setPlaying((p) => !p)
            }}
          >
            {step >= last && !playing ? <RotateCcw className="size-4" /> : playing ? <Pause className="size-4" /> : <Play className="size-4" />}
            {step >= last && !playing ? t('media.replay') : playing ? t('media.pause') : t('media.play')}
          </button>
          <button type="button" className="grid size-10 place-items-center rounded-lg bg-sand-100 hover:bg-sand-200 disabled:opacity-40" onClick={() => setStep((s) => Math.min(last, s + 1))} disabled={step === last} aria-label={t('common.next')}>
            <ChevronRight className="size-5" />
          </button>
        </div>
        <div className="mt-3 flex gap-1" aria-hidden>
          {steps.map((_, i) => (
            <button key={i} type="button" tabIndex={-1} onClick={() => setStep(i)} className={cx('h-1.5 flex-1 rounded-full transition-colors', i <= step ? 'bg-gold-400' : 'bg-sand-200')} />
          ))}
        </div>
      </figcaption>
    </figure>
  )
}
