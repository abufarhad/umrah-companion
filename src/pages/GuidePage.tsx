import { motion } from 'motion/react'
import { ArrowRight, CheckCircle2, RotateCcw, Zap } from 'lucide-react'
import { Link } from 'react-router'
import { Badge, Button, ButtonLink, PageHeader, ProgressBar } from '../components/ui'
import { guidePages } from '../content/guidePages'
import { stageById } from '../content/rituals'
import { useLang } from '../i18n'
import { num } from '../lib/format'
import { emptyProgress } from '../lib/ritualProgress'
import { useStore } from '../state/store'
import { pageDone } from './GuideStepPage'

export default function GuidePage() {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const doneCount = guidePages.filter((p) => pageDone(p, state.progress)).length
  const next = guidePages.find((p) => !pageDone(p, state.progress))

  return (
    <>
      <PageHeader eyebrow={t('guide.eyebrow')} title={t('guide.title')} intro={<p>{t('guide.intro')}</p>}>
        <div className="mt-6 max-w-md">
          <div className="mb-2 flex justify-between text-sm text-emerald-50/90">
            <span>{t('guide.pagesDone', { done: num(doneCount, lang), total: num(guidePages.length, lang) })}</span>
            <span>{num(Math.round((doneCount / guidePages.length) * 100), lang)}%</span>
          </div>
          <ProgressBar value={doneCount / guidePages.length} label={t('guide.journey')} />
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          {next && <ButtonLink to={`/guide/${next.id}`} variant="gold">{doneCount ? t('common.continue') : t('common.start')}: {next.title[lang]} <ArrowRight className="size-4" /></ButtonLink>}
          <ButtonLink to="/guide/quick" variant="onDark"><Zap className="size-4" /> {t('quick.open')}</ButtonLink>
        </div>
      </PageHeader>
      <div className="mx-auto max-w-4xl px-4 py-8">
        <ol className="grid gap-3 sm:grid-cols-2">
          {guidePages.map((p, i) => {
            const done = pageDone(p, state.progress)
            const isRite = p.stageIds.some((s) => stageById.get(s)?.isRite)
            return (
              <motion.li key={p.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
                <Link to={`/guide/${p.id}`} className="group flex h-full items-start gap-4 rounded-2xl border border-sand-200 bg-white p-4 shadow-card transition-shadow hover:shadow-lift">
                  <span className={`grid size-11 shrink-0 place-items-center rounded-full font-bold ${done ? 'bg-emerald-700 text-white' : isRite ? 'bg-gold-300 text-emerald-950' : 'bg-sand-100 text-ink-soft'}`}>
                    {done ? <CheckCircle2 className="size-5" aria-hidden /> : num(i + 1, lang)}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="font-display text-lg font-semibold text-emerald-900 group-hover:underline">{p.title[lang]}</span>
                      {isRite && <Badge tone="gold">{t('guide.rite')}</Badge>}
                    </span>
                    <span className="mt-1 block text-sm text-ink-soft">{p.quick[lang][0]}</span>
                    {done && <span className="sr-only">{t('common.completed')}</span>}
                  </span>
                </Link>
              </motion.li>
            )
          })}
        </ol>
        {doneCount > 0 && (
          <div className="mt-8 text-center">
            <Button variant="ghost" onClick={() => confirm(t('guide.resetConfirm')) && dispatch({ type: 'progress', value: emptyProgress() })}>
              <RotateCcw className="size-4" /> {t('guide.reset')}
            </Button>
          </div>
        )}
      </div>
    </>
  )
}
