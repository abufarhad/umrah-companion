import { AnimatePresence, motion } from 'motion/react'
import { ArrowLeft, ArrowRight, MapPin, Type } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router'
import { SaiCounter } from '../components/animations/Sai'
import { TawafCounter } from '../components/animations/Tawaf'
import { DuaText } from '../components/duas'
import { cx } from '../components/ui'
import { duaById } from '../content/duas'
import { guidePages } from '../content/guidePages'
import { useLang } from '../i18n'
import { num } from '../lib/format'
import { readString, writeString } from '../lib/storage'

const KEY = 'umrah-companion:quick'

/**
 * Quick reference for use during Umrah: one step per screen, large text,
 * only the essentials, the key dua and the counters. Remembers where you are.
 */
export default function QuickPage() {
  const { t, lang } = useLang()
  const [i, setI] = useState(() => {
    const saved = Number(readString(KEY))
    return Number.isInteger(saved) && saved >= 0 && saved < guidePages.length ? saved : 0
  })
  const [big, setBig] = useState(true)
  const go = (n: number) => {
    const v = Math.min(guidePages.length - 1, Math.max(0, n))
    setI(v)
    writeString(KEY, String(v))
    window.scrollTo({ top: 0 })
  }
  const page = guidePages[i]
  const dua = page.duas.map((id) => duaById.get(id)).find((d) => d && (d.arabic || d.refId))

  return (
    <div className={cx('min-h-[80vh] bg-emerald-950 pb-40 text-white', big && 'text-[1.12rem]')}>
      <div className="mx-auto max-w-2xl px-4 pt-4">
        <div className="flex items-center justify-between gap-2">
          <Link to={`/guide/${page.id}`} className="inline-flex min-h-10 items-center gap-1 text-sm text-emerald-100"><ArrowLeft className="size-4" /> {t('quick.full')}</Link>
          <button type="button" onClick={() => setBig((b) => !b)} aria-pressed={big} className="inline-flex min-h-10 items-center gap-1 rounded-full bg-white/10 px-3 text-sm"><Type className="size-4" /> {t('quick.bigText')}</button>
        </div>
        <div className="mt-3 flex gap-1" aria-hidden>
          {guidePages.map((p, n) => <span key={p.id} className={cx('h-1.5 flex-1 rounded-full', n <= i ? 'bg-gold-400' : 'bg-white/15')} />)}
        </div>
        <AnimatePresence mode="wait" initial={false}>
          <motion.section key={page.id} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.2 }} aria-live="polite">
            <p className="mt-5 text-sm font-semibold text-gold-300">{t('quick.stepOf', { n: num(i + 1, lang), total: num(guidePages.length, lang) })}</p>
            <h1 className="mt-1 font-display text-3xl font-semibold">{page.title[lang]}</h1>
            <ol className="mt-5 grid gap-3">
              {page.quick[lang].map((q, n) => (
                <li key={q} className="flex gap-3 rounded-2xl bg-white/10 p-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold-400 font-bold text-emerald-950">{num(n + 1, lang)}</span>
                  <span className="leading-snug">{q}</span>
                </li>
              ))}
            </ol>
            {page.id === 'tawaf' && <div className="mt-5 text-ink"><TawafCounter /></div>}
            {page.id === 'sai' && <div className="mt-5 text-ink"><SaiCounter /></div>}
            {dua && (
              <div className="mt-5 rounded-2xl bg-sand-50 p-4 text-ink">
                <p className="mb-2 flex items-center gap-1 text-sm font-semibold text-emerald-800"><MapPin className="size-4" /> {dua.title[lang]}</p>
                <DuaText d={dua} big={big} />
                <Link to={`/duas/${dua.id}`} className="mt-2 inline-block text-sm font-semibold text-emerald-800 underline">{t('duas.openDetail')}</Link>
              </div>
            )}
          </motion.section>
        </AnimatePresence>
      </div>
      <div className="fixed inset-x-0 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-30 bg-emerald-950/95 px-3 py-2 backdrop-blur lg:bottom-0">
        <div className="mx-auto grid max-w-2xl grid-cols-2 gap-2">
          <button type="button" onClick={() => go(i - 1)} disabled={i === 0} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-white/10 text-lg font-semibold disabled:opacity-30"><ArrowLeft className="size-5" /> {t('common.prev')}</button>
          <button type="button" onClick={() => go(i + 1)} disabled={i === guidePages.length - 1} className="flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gold-400 text-lg font-semibold text-emerald-950 disabled:opacity-30">{t('common.next')} <ArrowRight className="size-5" /></button>
        </div>
      </div>
    </div>
  )
}
