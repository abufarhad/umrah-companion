import { Info, Search } from 'lucide-react'
import { useMemo, useState } from 'react'
import { ReferenceCard } from '../components/religious'
import { Notice, PageHeader, Segmented, cx } from '../components/ui'
import { references } from '../content/references'
import type { Attribution, Topic } from '../content/types'
import { useLang } from '../i18n'
import { num } from '../lib/format'

type Filter = 'all' | Attribution

const TOPICS: Topic[] = ['umrah', 'kaaba', 'tawaf', 'safa-marwah', 'zamzam', 'ihram', 'ibrahim', 'prophet', 'makkah', 'madinah']

export default function LibraryPage() {
  const { t, lang } = useLang()
  const [filter, setFilter] = useState<Filter>('all')
  const [q, setQ] = useState('')
  const [topic, setTopic] = useState<Topic | null>(null)

  const list = useMemo(() => {
    const needle = q.trim().toLowerCase()
    return references.filter((r) => {
      if (filter !== 'all' && r.attribution !== filter) return false
      if (topic && !r.topics?.includes(topic)) return false
      if (!needle) return true
      return [r.title.bn, r.title.en, r.meaning.bn, r.meaning.en, r.source, r.arabic ?? '', r.transliteration ?? ''].some((s) => s.toLowerCase().includes(needle))
    })
  }, [filter, q, topic])

  return (
    <>
      <PageHeader eyebrow={t('library.eyebrow')} title={t('library.title')} intro={<p>{t('library.intro')}</p>} />
      <div className="mx-auto max-w-4xl px-4 py-8">
        <Notice icon={<Info className="size-5 text-gold-600" />} className="mb-6">
          <p className="font-semibold">{t('library.principlesTitle')}</p>
          <ul className="mt-1 grid list-disc gap-1 pl-5">
            <li>{t('library.principle1')}</li>
            <li>{t('library.principle2')}</li>
            <li>{t('library.principle3')}</li>
          </ul>
        </Notice>
        <div className="mb-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-end">
          <label className="relative block">
            <span className="sr-only">{t('library.search')}</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-ink-muted" aria-hidden />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('library.search')} className="min-h-11 w-full rounded-xl border border-sand-300 bg-white py-2 pr-3 pl-10 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 focus:outline-none" />
          </label>
          <Segmented
            size="sm"
            label={t('library.filter')}
            value={filter}
            onChange={setFilter}
            options={[
              { value: 'all', label: t('common.all') },
              { value: 'quran', label: t('library.attribution.quran') },
              { value: 'prophetic', label: t('library.attribution.prophetic') },
              { value: 'companion', label: t('library.attribution.companion') },
              { value: 'general', label: t('library.attribution.general') },
            ]}
          />
        </div>
        <div role="group" aria-label={t('library.topics')} className="mb-6 flex flex-wrap gap-2">
          {[null, ...TOPICS].map((tp) => (
            <button
              key={tp ?? 'all'}
              type="button"
              aria-pressed={topic === tp}
              onClick={() => setTopic(tp)}
              className={cx('min-h-9 rounded-full px-3 text-sm font-medium ring-1 transition-colors', topic === tp ? 'bg-emerald-800 text-white ring-emerald-800' : 'bg-white text-ink-soft ring-sand-300 hover:ring-emerald-600')}
            >
              {tp ? t(`library.topic.${tp}`) : t('library.allTopics')}
            </button>
          ))}
        </div>
        <p className="mb-4 text-sm text-ink-muted" aria-live="polite">{t('library.count', { n: num(list.length, lang) })}</p>
        <div className="grid gap-4">
          {list.map((r) => (
            <ReferenceCard key={r.id} r={r} compact />
          ))}
        </div>
      </div>
    </>
  )
}
