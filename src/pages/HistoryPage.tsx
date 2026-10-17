import { motion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router'
import { ClaimBadge } from '../components/history'
import { Badge, Notice, PageHeader } from '../components/ui'
import { places } from '../content/history'
import type { ClaimKind } from '../content/types'
import { useLang } from '../i18n'
import { num } from '../lib/format'

const KINDS: ClaimKind[] = ['quran', 'hadith', 'documented', 'scholarly', 'disputed']

export default function HistoryPage() {
  const { t, lang } = useLang()
  return (
    <>
      <PageHeader eyebrow={t('history.eyebrow')} title={t('history.title')} intro={<p>{t('history.intro')}</p>} />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Notice tone="emerald" className="mb-8">
          <p className="font-semibold">{t('history.legendTitle')}</p>
          <ul className="mt-2 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {KINDS.map((k) => (
              <li key={k} className="flex items-start gap-2">
                <ClaimBadge kind={k} />
                <span className="text-sm text-ink-soft">{t(`history.claimDesc.${k}`)}</span>
              </li>
            ))}
          </ul>
        </Notice>
        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {places.map((p, i) => (
            <motion.li key={p.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: (i % 3) * 0.06 }}>
              <Link to={`/history/${p.id}`} className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-sand-200 bg-white p-5 shadow-card transition-shadow hover:shadow-lift">
                <div className="geo-pattern-light absolute inset-0 opacity-70" aria-hidden />
                <div className="relative flex items-center gap-2">
                  <span className="grid size-9 place-items-center rounded-full bg-emerald-800 text-sm font-bold text-white">{num(p.order, lang)}</span>
                  {p.optional && <Badge tone="sand">{t('history.optional')}</Badge>}
                </div>
                <h2 className="relative mt-3 font-display text-xl font-semibold text-emerald-900 group-hover:underline">{p.title[lang]}</h2>
                <p className="relative mt-1 flex-1 text-sm text-ink-soft">{p.subtitle[lang]}</p>
                <span className="relative mt-4 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800">
                  {t('history.explore')} <ArrowRight className="size-4" />
                </span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </div>
    </>
  )
}
