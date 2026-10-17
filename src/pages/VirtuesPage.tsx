import { motion } from 'motion/react'
import { BookOpen, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { ReferenceCard } from '../components/religious'
import { Badge, Notice, PageHeader, cx } from '../components/ui'
import { getReference } from '../content/references'
import { virtues } from '../content/virtues'
import { useLang } from '../i18n'

const tone = { established: 'emerald', interpretation: 'blue', general: 'gray' } as const

export default function VirtuesPage() {
  const { t, lang } = useLang()
  const [open, setOpen] = useState<string | null>(virtues[0].id)
  const [evidence, setEvidence] = useState<Record<string, boolean>>({})
  return (
    <>
      <PageHeader eyebrow={t('virtues.eyebrow')} title={t('virtues.title')} intro={<p>{t('virtues.intro')}</p>} />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Notice tone="emerald" className="mb-6">{t('virtues.note')}</Notice>
        <div className="grid gap-3">
          {virtues.map((v) => {
            const isOpen = open === v.id
            return (
              <section key={v.id} className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card">
                <button type="button" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? null : v.id)} className="flex w-full items-center justify-between gap-3 p-4 text-left">
                  <span>
                    <span className="block font-display text-lg font-semibold text-emerald-900">{v.title[lang]}</span>
                    <span className="block text-sm text-ink-soft">{v.summary[lang]}</span>
                  </span>
                  <ChevronDown className={cx('size-5 shrink-0 transition-transform', isOpen && 'rotate-180')} />
                </button>
                {isOpen && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="border-t border-sand-100 px-4 pb-4">
                    <ul className="mt-3 grid gap-3">
                      {v.points.map((p) => {
                        const key = `${v.id}:${p.text.en}`
                        const refs = p.refs.map(getReference).filter((r) => !!r)
                        return (
                          <li key={key} className="rounded-xl bg-sand-50 p-3">
                            <Badge tone={tone[p.kind]}>{t(`virtues.kind.${p.kind}`)}</Badge>
                            <p className="mt-1 text-ink">{p.text[lang]}</p>
                            {refs.length > 0 && (
                              <button type="button" aria-expanded={!!evidence[key]} onClick={() => setEvidence((e) => ({ ...e, [key]: !e[key] }))} className="mt-2 inline-flex min-h-9 items-center gap-1 text-sm font-semibold text-emerald-800">
                                <BookOpen className="size-4" /> {evidence[key] ? t('virtues.hideEvidence') : t('virtues.showEvidence', { n: refs.length })}
                              </button>
                            )}
                            {evidence[key] && <div className="mt-2 grid gap-3">{refs.map((r) => <ReferenceCard key={r.id} r={r} compact />)}</div>}
                          </li>
                        )
                      })}
                    </ul>
                  </motion.div>
                )}
              </section>
            )
          })}
        </div>
      </div>
    </>
  )
}
