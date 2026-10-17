import { motion } from 'motion/react'
import { ArrowRight, MapPin, Search, Sparkles } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { DuaStatusBadge, PronunciationWarning, duaText } from '../components/duas'
import { ButtonLink, Card, Disclosure, PageHeader, cx } from '../components/ui'
import { DUA_CATEGORIES, duas } from '../content/duas'
import { mediaById } from '../content/media'
import { Video } from '../components/media'
import type { DuaCategoryId, DuaStatus } from '../content/types'
import { useLang } from '../i18n'
import { num } from '../lib/format'

const STATUSES: DuaStatus[] = ['sunnah', 'general', 'companion', 'personal', 'not-established']

/** Pronunciation guide for Arabic sounds that Bangla script can only approximate. */
const SOUNDS: { ar: string; bn: string; en: string }[] = [
  { ar: 'ع', bn: '‘আইন - গলার মাঝখান চেপে আসা আওয়াজ; লেখায় ‘ চিহ্ন দেওয়া হয়েছে', en: '‘ayn - a squeezed sound from the middle of the throat; marked ‘' },
  { ar: 'ح', bn: 'হা - গলার মাঝখান থেকে ফিসফিসে হ; সাধারণ “হ” (ه) থেকে আলাদা', en: 'ḥa - a breathy h from the middle of the throat; different from the plain h (ه)' },
  { ar: 'خ', bn: 'খা - গলার ওপর থেকে ঘর্ষণের “খ”', en: 'kha - a raspy kh from the upper throat' },
  { ar: 'ق', bn: 'ক্বাফ - জিহ্বার গোড়া থেকে গভীর “ক”; লেখায় “ক্ব”', en: 'qaf - a deep k from the back of the tongue; written “q”' },
  { ar: 'ض', bn: 'দোয়াদ - জিহ্বার পাশ দিয়ে ভারী “দ”', en: 'ḍad - a heavy d made with the side of the tongue' },
  { ar: 'ظ / ذ', bn: 'যোয়া / যাল - দাঁতের মাঝে জিহ্বা রেখে “য”; ইংরেজি “this”-এর th-এর মতো', en: 'ẓa / dhal - tongue between the teeth, like “th” in “this”' },
  { ar: 'ث', bn: 'সা - দাঁতের মাঝে জিহ্বা রেখে “স”; ইংরেজি “think”-এর th', en: 'tha - like “th” in “think”' },
  { ar: 'ـا ـي ـو', bn: 'দীর্ঘ স্বর (মদ্দ) - “আ-”, “ঈ”, “ঊ” টেনে দুই মাত্রা', en: 'Long vowels (madd) - hold “ā”, “ī”, “ū” for two counts' },
]

export default function DuasPage() {
  const { t, lang } = useLang()
  const [cat, setCat] = useState<DuaCategoryId | 'all'>('all')
  const [q, setQ] = useState('')
  const list = useMemo(() => {
    const n = q.trim().toLowerCase()
    return duas.filter((d) => {
      if (cat !== 'all' && d.category !== cat) return false
      if (!n) return true
      const x = duaText(d)
      return [d.title.bn, d.title.en, d.when.bn, d.when.en, x.arabic ?? '', d.bnPron ?? '', x.transliteration ?? ''].some((s) => s.toLowerCase().includes(n))
    })
  }, [cat, q])
  const cats = DUA_CATEGORIES.filter((c) => (cat === 'all' || c.id === cat) && list.some((d) => d.category === c.id))

  return (
    <>
      <PageHeader eyebrow={t('duas.eyebrow')} title={t('duas.title')} intro={<p>{t('duas.intro')}</p>}>
        <div className="mt-5"><ButtonLink to="/virtues" variant="onDark"><Sparkles className="size-4" /> {t('virtues.title')}</ButtonLink></div>
      </PageHeader>
      <div className="mx-auto max-w-5xl px-4 py-8">
        <div className="grid gap-4">
          <PronunciationWarning />
          <Disclosure title={t('duas.legend')}>
            <ul className="grid gap-2">
              {STATUSES.map((s) => <li key={s} className="flex flex-wrap items-center gap-2 text-sm"><DuaStatusBadge status={s} /> <span className="text-ink-soft">{t(`duas.statusDesc.${s}`)}</span></li>)}
            </ul>
          </Disclosure>
          <Disclosure title={t('duas.soundsTitle')}>
            <ul className="grid gap-2 sm:grid-cols-2">
              {SOUNDS.map((x) => (
                <li key={x.ar} className="flex items-center gap-3 rounded-xl bg-sand-50 p-2">
                  <span lang="ar" dir="rtl" className="arabic w-14 shrink-0 text-center text-2xl">{x.ar}</span>
                  <span className="text-sm text-ink-soft">{x[lang]}</span>
                </li>
              ))}
            </ul>
          </Disclosure>
        </div>

        <div className="mt-6 grid gap-3">
          <label className="relative block">
            <span className="sr-only">{t('duas.search')}</span>
            <Search className="pointer-events-none absolute top-1/2 left-3 size-5 -translate-y-1/2 text-ink-muted" aria-hidden />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={t('duas.search')} className="min-h-11 w-full rounded-xl border border-sand-300 bg-white py-2 pr-3 pl-10 focus:border-emerald-600 focus:outline-none" />
          </label>
          <div role="group" aria-label={t('duas.situation')} className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1">
            {[{ id: 'all' as const, title: { bn: 'সব', en: 'All' } }, ...DUA_CATEGORIES].map((c) => (
              <button key={c.id} type="button" aria-pressed={cat === c.id} onClick={() => setCat(c.id)} className={cx('min-h-10 shrink-0 rounded-full px-4 text-sm font-medium ring-1', cat === c.id ? 'bg-emerald-800 text-white ring-emerald-800' : 'bg-white text-ink-soft ring-sand-300')}>
                {c.title[lang]}
              </button>
            ))}
          </div>
          <p className="text-sm text-ink-muted" aria-live="polite">{t('duas.count', { n: num(list.length, lang) })}</p>
        </div>

        <div className="mt-4 grid gap-8">
          {cats.map((c) => (
            <section key={c.id} aria-labelledby={`cat-${c.id}`}>
              <h2 id={`cat-${c.id}`} className="font-display text-xl font-semibold text-emerald-900">{c.title[lang]}</h2>
              <p className="mb-3 flex items-center gap-1 text-sm text-ink-muted"><MapPin className="size-4" /> {c.where[lang]}</p>
              {c.id === 'dhikr' && (
                <div className="mb-4 grid gap-3 sm:grid-cols-2">
                  {['v-alafasy-morning', 'v-alafasy-evening'].map((id) => mediaById.get(id)).filter((m) => !!m).map((m) => <Video key={m.id} item={m} />)}
                </div>
              )}
              <div className="grid gap-3 sm:grid-cols-2">
                {list.filter((d) => d.category === c.id).map((d, i) => (
                  <motion.div key={d.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                    <Link to={`/duas/${d.id}`} className="group block h-full">
                      <Card className="h-full p-4 transition-shadow group-hover:shadow-lift">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h3 className="font-semibold text-emerald-900 group-hover:underline">{d.title[lang]}</h3>
                          <DuaStatusBadge status={d.status} />
                        </div>
                        {duaText(d).arabic && <p lang="ar" dir="rtl" className="arabic mt-2 line-clamp-2 text-right text-xl">{duaText(d).arabic}</p>}
                        <p className="mt-2 line-clamp-2 text-sm text-ink-soft">{d.when[lang]}</p>
                        <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-emerald-800">{t('duas.openDetail')} <ArrowRight className="size-4" /></span>
                      </Card>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </>
  )
}
