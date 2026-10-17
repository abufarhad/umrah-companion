import { motion } from 'motion/react'
import { ArrowRight, BookOpen, Calculator, Landmark, Library, Map as MapIcon, Plane, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router'
import { TawafScene } from '../components/animations/Tawaf'
import { ButtonLink, Card, ProgressBar } from '../components/ui'
import { mediaById } from '../content/media'
import { references } from '../content/references'
import { rituals, stageIds } from '../content/rituals'
import { useLang } from '../i18n'
import { num } from '../lib/format'
import { completionRatio, nextIncomplete } from '../lib/ritualProgress'
import { useStore } from '../state/store'

export default function HomePage() {
  const { t, lang } = useLang()
  const { state } = useStore()
  const ratio = completionRatio(state.progress, stageIds)
  const next = nextIncomplete(state.progress, stageIds)
  const kaaba = mediaById.get('p-kaaba-2')

  return (
    <>
      <section className="relative overflow-hidden bg-emerald-900 text-white">
        <div className="geo-pattern absolute inset-0 opacity-70" aria-hidden />
        <div className="absolute -top-40 -right-40 size-[32rem] rounded-full bg-emerald-600/30 blur-3xl" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 sm:py-16 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="arabic text-2xl text-gold-300" lang="ar" dir="rtl">
              وَأَتِمُّوا۟ ٱلْحَجَّ وَٱلْعُمْرَةَ لِلَّهِ
            </motion.p>
            <p className="mt-1 text-sm text-emerald-100/80">{t('home.verseRef')}</p>
            <motion.h1 initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="mt-5 font-display text-4xl leading-tight font-semibold sm:text-5xl">
              {t('home.title')}
            </motion.h1>
            <p className="mt-4 max-w-xl text-lg text-emerald-50/90">{t('home.subtitle')}</p>
            <div className="mt-8 grid gap-3 sm:flex">
              <ButtonLink to="/guide" variant="gold" className="px-6 py-3 text-base">
                <BookOpen className="size-5" /> {t('home.ctaLearn')}
              </ButtonLink>
              <ButtonLink to="/plan" variant="onDark" className="px-6 py-3 text-base">
                <Plane className="size-5" /> {t('home.ctaPlan')}
              </ButtonLink>
            </div>
            {ratio > 0 && (
              <div className="mt-8 max-w-sm rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
                <div className="mb-2 flex justify-between text-sm">
                  <span>{t('home.yourProgress')}</span>
                  <span>{num(Math.round(ratio * 100), lang)}%</span>
                </div>
                <ProgressBar value={ratio} label={t('home.yourProgress')} />
                {next && (
                  <Link to={`/guide/${next}`} className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-gold-300 hover:underline">
                    {t('home.continueWith', { step: rituals.find((r) => r.id === next)!.title[lang] })} <ArrowRight className="size-4" />
                  </Link>
                )}
              </div>
            )}
          </div>
          <div className="relative">
            <div className="rounded-[2rem] bg-sand-50 p-4 shadow-lift">
              <TawafScene highlight="direction" label={t('tawaf.diagramLabel')} />
            </div>
            {kaaba?.src && (
              <img src={kaaba.src} alt={kaaba.alt[lang]} loading="lazy" referrerPolicy="no-referrer" className="absolute -bottom-6 -left-4 hidden w-40 rotate-[-4deg] rounded-2xl border-4 border-white object-cover shadow-lift sm:block" />
            )}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="font-display text-2xl font-semibold text-emerald-900">{t('home.journeyTitle')}</h2>
        <p className="mt-1 text-ink-soft">{t('home.journeyIntro')}</p>
        <ol className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {rituals.map((r, i) => (
            <motion.li key={r.id} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ delay: (i % 4) * 0.05 }}>
              <Link to={`/guide/${r.id}`} className="group flex h-full gap-3 rounded-2xl border border-sand-200 bg-white p-4 shadow-card transition-shadow hover:shadow-lift">
                <span className={`grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold ${state.progress.completed[r.id] ? 'bg-emerald-700 text-white' : r.isRite ? 'bg-gold-300 text-emerald-950' : 'bg-sand-100 text-ink-soft'}`}>
                  {num(r.order, lang)}
                </span>
                <span>
                  <span className="block font-semibold text-emerald-900 group-hover:underline">{r.title[lang]}</span>
                  <span className="block text-sm text-ink-muted">{r.short[lang]}</span>
                </span>
              </Link>
            </motion.li>
          ))}
        </ol>
      </section>

      <section className="bg-sand-100">
        <div className="mx-auto grid max-w-6xl gap-4 px-4 py-12 sm:grid-cols-2 lg:grid-cols-5">
          {[
            { to: '/duas', icon: Sparkles, title: t('duas.title'), text: t('home.duasText') },
            { to: '/explore', icon: MapIcon, title: t('tour.title'), text: t('home.exploreText') },
            { to: '/history', icon: Landmark, title: t('history.title'), text: t('home.historyText') },
            { to: '/library', icon: Library, title: t('nav.library'), text: t('home.libraryText', { n: num(references.length, lang) }) },
            { to: '/budget', icon: Calculator, title: t('nav.budget'), text: t('home.budgetText') },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="group">
              <Card className="h-full p-5 transition-shadow group-hover:shadow-lift">
                <c.icon className="size-7 text-gold-500" aria-hidden />
                <h3 className="mt-3 font-display text-lg font-semibold text-emerald-900">{c.title}</h3>
                <p className="mt-1 text-sm text-ink-soft">{c.text}</p>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <Card className="geo-pattern-light flex flex-col gap-4 p-6 sm:flex-row sm:items-center">
          <ShieldCheck className="size-10 shrink-0 text-emerald-700" aria-hidden />
          <div>
            <h2 className="font-display text-xl font-semibold text-emerald-900">{t('home.trustTitle')}</h2>
            <p className="mt-1 text-ink-soft">{t('home.trustText')}</p>
          </div>
        </Card>
      </section>
    </>
  )
}
