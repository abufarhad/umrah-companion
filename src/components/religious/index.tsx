import { AnimatePresence, motion } from 'motion/react'
import { BookMarked, ExternalLink, Headphones, Info, Quote, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useAudio } from '../../audio/AudioProvider'
import { useSpeechLang } from '../../audio/useSpeechLang'
import { ListenBar } from '../../audio/Player'
import { referenceTrack } from '../../audio/tracks'
import { getReference } from '../../content/references'
import type { Attribution, Reference, RulingLevel } from '../../content/types'
import { useLang } from '../../i18n'
import { useStore } from '../../state/store'
import { Badge, Segmented, cx } from '../ui'

const attributionTone: Record<Attribution, 'emerald' | 'gold' | 'blue' | 'gray'> = {
  quran: 'emerald',
  prophetic: 'gold',
  companion: 'blue',
  general: 'gray',
}

export function AttributionBadge({ a }: { a: Attribution }) {
  const { t } = useLang()
  return <Badge tone={attributionTone[a]}>{t(`library.attribution.${a}`)}</Badge>
}

const rulingTone: Record<RulingLevel, 'emerald' | 'gold' | 'sand' | 'red' | 'blue' | 'gray'> = {
  pillar: 'red',
  obligatory: 'gold',
  sunnah: 'emerald',
  permissible: 'blue',
  prohibited: 'red',
  practical: 'gray',
}

export function RulingBadge({ level }: { level: RulingLevel }) {
  const { t } = useLang()
  return <Badge tone={rulingTone[level]}>{t(`guide.levels.${level}`)}</Badge>
}

/** Accessible modal with citation details. */
export function CitationDialog({ r, onClose }: { r: Reference; onClose: () => void }) {
  const { t, lang } = useLang()
  const closeRef = useRef<HTMLButtonElement>(null)
  useEffect(() => {
    closeRef.current?.focus()
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-emerald-950/50 p-0 sm:items-center sm:p-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-labelledby={`cite-${r.id}`}
        className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-t-3xl bg-white p-5 shadow-lift sm:rounded-3xl"
        initial={{ y: 40 }}
        animate={{ y: 0 }}
        exit={{ y: 40 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 id={`cite-${r.id}`} className="font-display text-lg font-semibold text-emerald-900">{t('library.citation')}</h3>
          <button ref={closeRef} type="button" onClick={onClose} className="grid size-10 place-items-center rounded-lg hover:bg-sand-100" aria-label={t('common.close')}>
            <X className="size-5" />
          </button>
        </div>
        <dl className="mt-3 grid gap-3 text-sm">
          <div>
            <dt className="text-ink-muted">{t('library.source')}</dt>
            <dd className="font-semibold">{r.source}</dd>
          </div>
          {r.alsoIn && (
            <div>
              <dt className="text-ink-muted">{t('library.alsoIn')}</dt>
              <dd>{r.alsoIn.join(' · ')}</dd>
            </div>
          )}
          <div>
            <dt className="text-ink-muted">{t('library.type')}</dt>
            <dd className="flex flex-wrap gap-2">
              <AttributionBadge a={r.attribution} />
              <Badge tone="sand">{t(`library.kind.${r.kind}`)}</Badge>
            </dd>
          </div>
          {r.grading && (
            <div>
              <dt className="text-ink-muted">{t('library.grading')}</dt>
              <dd>
                {r.grading.grade[lang]}
                {r.grading.by && <span className="text-ink-muted"> - {r.grading.by}</span>}
              </dd>
            </div>
          )}
          <div>
            <dt className="text-ink-muted">{t('library.numbering')}</dt>
            <dd>{r.numbering ?? (r.kind === 'quran' ? t('library.quranNumbering') : t('library.hadithNumbering'))}</dd>
          </div>
        </dl>
        {r.url ? (
          <a href={r.url} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 font-semibold text-white hover:bg-emerald-700">
            {t('library.openSource')} <ExternalLink className="size-4" />
          </a>
        ) : (
          <p className="mt-5 rounded-xl bg-sand-100 p-3 text-sm text-ink-soft">{t('library.noOnlineSource')}</p>
        )}
      </motion.div>
    </motion.div>
  )
}

export function CitationButton({ r, className }: { r: Reference; className?: string }) {
  const { t } = useLang()
  const [open, setOpen] = useState(false)
  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={cx('inline-flex min-h-9 items-center gap-1.5 rounded-lg px-2 text-sm font-medium text-emerald-800 underline decoration-emerald-800/30 underline-offset-4 hover:bg-emerald-50', className)}>
        <BookMarked className="size-4" aria-hidden />
        <span>{r.source}</span>
        <span className="sr-only">- {t('library.viewCitation')}</span>
      </button>
      {/* Portal: escapes transformed/sticky ancestors so the dialog is always on top. */}
      {createPortal(<AnimatePresence>{open && <CitationDialog r={r} onClose={() => setOpen(false)} />}</AnimatePresence>, document.body)}
    </>
  )
}

/**
 * Listening for a reference: Alafasy's recitation for Qur'an verses; for
 * hadith and duas, device speech in the chosen language (labelled synthetic).
 */
function Listen({ r }: { r: Reference }) {
  const { t, lang } = useLang()
  const audio = useAudio()
  const { speech: ttsLang, setSpeech: setTtsLang, arabicUnavailable } = useSpeechLang(lang, !!r.arabic)
  const track = referenceTrack(r, ttsLang)
  const [open, setOpen] = useState(() => audio.isCurrent(track.id))
  if (!open)
    return (
      <button type="button" onClick={() => setOpen(true)} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-emerald-50 px-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-100">
        <Headphones className="size-4" aria-hidden /> {r.ayahs?.length ? t('audio.listenRecitation') : t('audio.listen')}
      </button>
    )
  return (
    <div className="w-full">
      {!r.ayahs?.length && (
        <div className="mt-3 max-w-xs">
          <Segmented
            size="sm"
            label={t('audio.ttsLanguage')}
            value={ttsLang}
            onChange={setTtsLang}
            options={[
              ...(r.arabic ? [{ value: 'ar' as const, label: arabicUnavailable ? `${t('audio.langAr')} (${t('duas.unavailableShort')})` : t('audio.langAr') }] : []),
              { value: 'bn' as const, label: 'বাংলা' },
              { value: 'en' as const, label: 'English' },
            ]}
          />
        </div>
      )}
      <ListenBar key={track.id} track={track} />
    </div>
  )
}

/** Full reference card: Arabic, transliteration, both translations, source, grading, context. */
export function ReferenceCard({ r, compact = false }: { r: Reference; compact?: boolean }) {
  const { t, lang } = useLang()
  const { state } = useStore()
  const other = lang === 'bn' ? 'en' : 'bn'
  const [showContext, setShowContext] = useState(!compact)
  return (
    <article className="rounded-2xl border border-sand-200 bg-white p-4 shadow-card sm:p-5">
      <header className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-semibold text-emerald-900">{r.title[lang]}</h3>
        <AttributionBadge a={r.attribution} />
      </header>
      {r.arabic && (
        <p lang="ar" dir="rtl" className="arabic mt-3 rounded-xl bg-sand-50 px-4 py-3 text-right text-2xl text-ink sm:text-[1.7rem]">
          {r.arabic}
        </p>
      )}
      {r.transliteration && state.settings.showTransliteration && <p className="mt-2 text-sm text-ink-soft italic">{r.transliteration}</p>}
      <div className="mt-3 flex gap-2">
        <Quote className="mt-1 size-4 shrink-0 text-gold-500" aria-hidden />
        <div>
          <p className="text-ink">{r.meaning[lang]}</p>
          <p lang={other} className="mt-1 text-sm text-ink-muted">{r.meaning[other]}</p>
        </div>
      </div>
      {r.note && (
        <p className="mt-3 flex gap-2 rounded-xl bg-gold-300/15 p-3 text-sm text-ink">
          <Info className="mt-0.5 size-4 shrink-0 text-gold-600" aria-hidden />
          {r.note[lang]}
        </p>
      )}
      <div className="mt-3">
        <Listen r={r} />
      </div>
      <footer className="mt-3 flex flex-wrap items-center justify-between gap-2 border-t border-sand-100 pt-3">
        <CitationButton r={r} />
        <div className="flex items-center gap-2">
          {r.grading && <Badge tone="sand">{r.grading.grade[lang]}</Badge>}
          {compact && (
            <button type="button" onClick={() => setShowContext((s) => !s)} className="min-h-9 rounded-lg px-2 text-sm text-ink-soft hover:bg-sand-100" aria-expanded={showContext}>
              {showContext ? t('library.hideContext') : t('library.showContext')}
            </button>
          )}
        </div>
      </footer>
      <AnimatePresence initial={false}>
        {showContext && (
          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden text-sm text-ink-soft">
            <span className="mt-2 block">
              <span className="font-semibold text-emerald-900">{t('library.context')}: </span>
              {r.context[lang]}
            </span>
          </motion.p>
        )}
      </AnimatePresence>
    </article>
  )
}

/** Inline list of small citation chips for a set of reference ids. */
export function RefChips({ ids }: { ids?: string[] }) {
  if (!ids?.length) return null
  return (
    <span className="mt-1 flex flex-wrap gap-1">
      {ids.map((id) => {
        const r = getReference(id)
        return r ? <CitationButton key={id} r={r} className="min-h-8 text-xs" /> : null
      })}
    </span>
  )
}
