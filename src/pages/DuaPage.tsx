import { motion } from 'motion/react'
import { ArrowLeft, ArrowRight, BookOpen } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router'
import { DuaDetail, PronunciationWarning } from '../components/duas'
import { ButtonLink } from '../components/ui'
import { DUA_CATEGORIES, duaById, duas } from '../content/duas'
import { guidePages } from '../content/guidePages'
import { useLang } from '../i18n'

export default function DuaPage() {
  const { duaId = '' } = useParams()
  const { t, lang } = useLang()
  const d = duaById.get(duaId)
  if (!d) return <Navigate to="/duas" replace />
  const i = duas.indexOf(d)
  const prev = duas[i - 1]
  const next = duas[i + 1]
  const cat = DUA_CATEGORIES.find((c) => c.id === d.category)
  const pages = guidePages.filter((p) => p.duas.includes(d.id))
  return (
    <>
      <header className="relative overflow-hidden bg-emerald-900 text-white">
        <div className="geo-pattern absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-3xl px-4 pt-5 pb-8">
          <Link to="/duas" className="inline-flex items-center gap-1 text-sm text-emerald-100 hover:text-white"><ArrowLeft className="size-4" /> {t('duas.title')}</Link>
          <p className="mt-4 text-sm font-semibold tracking-wide text-gold-300 uppercase">{cat?.title[lang]}</p>
          <motion.h1 key={d.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="mt-1 font-display text-3xl font-semibold">{d.title[lang]}</motion.h1>
        </div>
      </header>
      <div className="mx-auto grid max-w-3xl gap-5 px-4 py-6 pb-28">
        <PronunciationWarning />
        <DuaDetail d={d} />
        {pages.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {pages.map((p) => <ButtonLink key={p.id} to={`/guide/${p.id}`} variant="outline"><BookOpen className="size-4" /> {t('duas.inGuide', { step: p.title[lang] })}</ButtonLink>)}
          </div>
        )}
        <nav className="grid grid-cols-2 gap-2" aria-label={t('duas.more')}>
          {prev ? <ButtonLink to={`/duas/${prev.id}`} variant="outline" className="justify-start"><ArrowLeft className="size-4 shrink-0" /> <span className="truncate">{prev.title[lang]}</span></ButtonLink> : <span />}
          {next ? <ButtonLink to={`/duas/${next.id}`} variant="outline" className="justify-end"><span className="truncate">{next.title[lang]}</span> <ArrowRight className="size-4 shrink-0" /></ButtonLink> : <span />}
        </nav>
      </div>
    </>
  )
}
