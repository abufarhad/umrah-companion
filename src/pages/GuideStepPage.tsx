import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { AlertTriangle, ArrowLeft, ArrowRight, BookOpen, CheckCircle2, Eye, HelpCircle, Images, Lightbulb, ListChecks, Scale, Sparkles, Users, XCircle, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate, useParams, useSearchParams } from 'react-router'
import { StageAnimation } from '../components/animations/Scenes'
import { SaiCounter } from '../components/animations/Sai'
import { TawafCounter } from '../components/animations/Tawaf'
import { DuaCard, PronunciationWarning } from '../components/duas'
import { MediaCard } from '../components/media'
import { RefChips, ReferenceCard, RulingBadge } from '../components/religious'
import { Badge, Button, ButtonLink, Card, Check, Disclosure, Notice, ProgressBar, Segmented, cx } from '../components/ui'
import { duaById } from '../content/duas'
import { guidePageById, guidePageIds, guidePages, pageForStage, type GuidePage } from '../content/guidePages'
import { mediaById } from '../content/media'
import { getReference } from '../content/references'
import { stageById, stageIds } from '../content/rituals'
import type { Audience, RitualStage } from '../content/types'
import { useLang } from '../i18n'
import { num } from '../lib/format'
import { setStageComplete, toggleCheck, type GuideProgress } from '../lib/ritualProgress'
import { useStore } from '../state/store'

export const pageDone = (p: GuidePage, progress: GuideProgress) => p.stageIds.every((s) => progress.completed[s])

type Tab = 'overview' | 'steps' | 'duas' | 'rules' | 'mistakes' | 'media'

/** Step navigator: numbered dots on wide screens, a jump-to select on phones. */
export function StepNavigator({ current }: { current: string }) {
  const { t, lang } = useLang()
  const { state } = useStore()
  const nav = useNavigate()
  return (
    <nav aria-label={t('guide.stepNav')} className="no-print">
      <ol className="hidden items-center gap-1 sm:flex">
        {guidePages.map((p, i) => {
          const done = pageDone(p, state.progress)
          const active = p.id === current
          return (
            <li key={p.id} className="flex flex-1 items-center">
              <Link
                to={`/guide/${p.id}`}
                aria-current={active ? 'step' : undefined}
                title={p.title[lang]}
                className={cx('grid size-9 shrink-0 place-items-center rounded-full text-sm font-bold transition-all', active ? 'scale-110 bg-gold-400 text-emerald-950 ring-4 ring-gold-300/40' : done ? 'bg-emerald-500 text-white' : 'bg-white/15 text-white/80 hover:bg-white/25')}
              >
                {done && !active ? <CheckCircle2 className="size-4" /> : num(i + 1, lang)}
              </Link>
              {i < guidePages.length - 1 && <span className={cx('mx-1 h-0.5 flex-1 rounded', done ? 'bg-emerald-400' : 'bg-white/20')} />}
            </li>
          )
        })}
      </ol>
      <label className="flex items-center gap-2 sm:hidden">
        <span className="text-sm text-emerald-100">{t('guide.jumpTo')}</span>
        <select value={current} onChange={(e) => nav(`/guide/${e.target.value}`)} className="min-h-10 flex-1 rounded-xl border border-white/20 bg-emerald-950/50 px-3 text-white">
          {guidePages.map((p, i) => (
            <option key={p.id} value={p.id}>
              {num(i + 1, lang)}. {p.title[lang]} {pageDone(p, state.progress) ? '✓' : ''}
            </option>
          ))}
        </select>
      </label>
    </nav>
  )
}

function OverviewTab({ stage }: { stage: RitualStage }) {
  const { t, lang } = useLang()
  return (
    <div className="grid gap-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <Card className="p-4">
          <p className="flex items-center gap-2 font-semibold text-emerald-900"><BookOpen className="size-4 text-gold-500" /> {t('guide.meaning')}</p>
          <p className="mt-1 text-ink-soft">{stage.meaning[lang]}</p>
        </Card>
        <Card className="p-4">
          <p className="flex items-center gap-2 font-semibold text-emerald-900"><HelpCircle className="size-4 text-gold-500" /> {t('guide.why')}</p>
          <p className="mt-1 text-ink-soft">{stage.why[lang]}</p>
        </Card>
      </div>
      <div>
        <p className="mb-2 flex items-center gap-2 font-semibold text-emerald-900"><Eye className="size-4 text-gold-500" /> {t('guide.watch')}</p>
        <StageAnimation id={stage.animation} />
      </div>
    </div>
  )
}

function StepsTab({ stage }: { stage: RitualStage }) {
  const { t, lang } = useLang()
  const [audience, setAudience] = useState<Audience>('all')
  const steps = stage.steps.filter((s) => audience === 'all' || !s.audience || s.audience === 'all' || s.audience === audience)
  return (
    <div className="grid gap-4">
      {stage.id === 'tawaf' && <TawafCounter />}
      {stage.id === 'sai' && <SaiCounter />}
      {stage.steps.some((s) => s.audience && s.audience !== 'all') && (
        <div className="max-w-xs">
          <Segmented size="sm" label={t('guide.showFor')} value={audience} onChange={setAudience} options={[{ value: 'all', label: t('common.all') }, { value: 'men', label: t('common.men') }, { value: 'women', label: t('common.women') }]} />
        </div>
      )}
      <ol className="grid gap-2">
        {steps.map((s, i) => (
          <motion.li key={s.text.en} layout initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} className="flex gap-3 rounded-2xl border border-sand-200 bg-white p-4">
            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-800 text-sm font-bold text-white">{num(i + 1, lang)}</span>
            <div className="min-w-0">
              {s.audience && s.audience !== 'all' && <Badge tone={s.audience === 'men' ? 'blue' : 'gold'} className="mb-1">{t(`common.${s.audience}`)}</Badge>}
              <p className="text-ink">{s.text[lang]}</p>
              <RefChips ids={s.refs} />
            </div>
          </motion.li>
        ))}
      </ol>
      {stage.practical && (
        <Disclosure title={<span className="flex items-center gap-2"><Lightbulb className="size-4 text-gold-500" /> {t('guide.practical')}</span>}>
          <ul className="grid list-disc gap-1 pl-5 text-ink-soft">{stage.practical.map((p) => <li key={p.en}>{p[lang]}</li>)}</ul>
        </Disclosure>
      )}
    </div>
  )
}

function RulesTab({ stage }: { stage: RitualStage }) {
  const { t, lang } = useLang()
  const refs = stage.refs.map(getReference).filter((r) => !!r)
  return (
    <div className="grid gap-3">
      <p className="text-sm text-ink-muted">{t('guide.rulingsNote')}</p>
      {stage.rulings.map((r) => (
        <div key={r.text.en} className="rounded-2xl border border-sand-200 bg-white p-4">
          <RulingBadge level={r.level} />
          <p className="mt-2 text-ink">{r.text[lang]}</p>
          <RefChips ids={r.refs} />
        </div>
      ))}
      {stage.differences?.map((d) => (
        <Disclosure key={d.topic.en} title={<span className="text-sky-950">{t('guide.difference')}: {d.topic[lang]}</span>}>
          <ul className="grid gap-2">
            {d.views.map((v) => (
              <li key={v.holders.en} className="rounded-xl bg-sky-50 p-3 text-sm"><span className="font-semibold text-emerald-900">{v.holders[lang]}: </span>{v.view[lang]}</li>
            ))}
          </ul>
          <RefChips ids={d.refs} />
          <p className="mt-2 text-xs text-ink-muted">{t('guide.differenceNote')}</p>
        </Disclosure>
      ))}
      {(stage.forMen || stage.forWomen) && (
        <div className="grid gap-3 sm:grid-cols-2">
          {[{ k: 'forMen', v: stage.forMen }, { k: 'forWomen', v: stage.forWomen }].map(({ k, v }) =>
            v ? (
              <Card key={k} className="p-4">
                <p className="flex items-center gap-2 font-semibold text-emerald-900"><Users className="size-4 text-gold-500" /> {t(`guide.${k}`)}</p>
                <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm text-ink-soft">{v.map((m) => <li key={m.en}>{m[lang]}</li>)}</ul>
              </Card>
            ) : null,
          )}
        </div>
      )}
      {refs.length > 0 && (
        <Disclosure title={<span className="flex items-center gap-2"><BookOpen className="size-4 text-gold-500" /> {t('guide.refs')} ({num(refs.length, lang)})</span>}>
          <div className="grid gap-3">{refs.map((r) => <ReferenceCard key={r.id} r={r} compact />)}</div>
        </Disclosure>
      )}
    </div>
  )
}

function MistakesTab({ stage }: { stage: RitualStage }) {
  const { lang } = useLang()
  return (
    <ul className="grid gap-3">
      {stage.mistakes.map((m) => (
        <li key={m.mistake.en} className="grid gap-2 rounded-2xl border border-sand-200 bg-white p-4 sm:grid-cols-2">
          <p className="flex gap-2 text-ink"><XCircle className="mt-0.5 size-5 shrink-0 text-red-600" aria-hidden />{m.mistake[lang]}</p>
          <p className="flex gap-2 text-ink-soft"><CheckCircle2 className="mt-0.5 size-5 shrink-0 text-emerald-600" aria-hidden />{m.fix[lang]}</p>
        </li>
      ))}
    </ul>
  )
}

function StageChecklist({ stage }: { stage: RitualStage }) {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const checks = new Set(state.progress.checks[stage.id] ?? [])
  return (
    <Card className="p-4">
      <p className="font-semibold text-emerald-900">{t('guide.checklist')}: {stage.title[lang]}</p>
      <div className="mt-2 grid gap-1">
        {stage.checklist.map((c, i) => (
          <Check key={c.en} checked={checks.has(i)} onChange={() => dispatch({ type: 'progress', value: toggleCheck(state.progress, stage.id, i) })}>{c[lang]}</Check>
        ))}
      </div>
    </Card>
  )
}

export default function GuideStepPage() {
  const { pageId = '' } = useParams()
  const [search, setSearch] = useSearchParams()
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const reduce = useReducedMotion()
  const [tab, setTab] = useState<Tab>('overview')
  const page = guidePageById.get(pageId)

  useEffect(() => setTab('overview'), [pageId])

  // Old links pointed at individual stages (/guide/tawaf); send them to the page that contains them.
  if (!page) {
    const p = pageForStage.get(pageId)
    return <Navigate to={p ? `/guide/${p}?part=${pageId}` : '/guide'} replace />
  }

  const index = guidePageIds.indexOf(page.id)
  const prev = guidePages[index - 1]
  const next = guidePages[index + 1]
  const stages = page.stageIds.map((s) => stageById.get(s)!)
  const part = stages.find((s) => s.id === search.get('part')) ?? stages[0]
  const done = pageDone(page, state.progress)
  const overall = guidePages.filter((p) => pageDone(p, state.progress)).length / guidePages.length
  const duas = page.duas.map((id) => duaById.get(id)).filter((d) => !!d)
  const media = part.media.map((id) => mediaById.get(id)).filter((m) => !!m)
  const allDone = stageIds.every((id) => state.progress.completed[id])

  const setDone = (v: boolean) => {
    let p = state.progress
    for (const s of page.stageIds) p = setStageComplete(p, s, v)
    dispatch({ type: 'progress', value: p })
  }

  const tabs: { id: Tab; label: string; icon: typeof Eye; show: boolean }[] = [
    { id: 'overview', label: t('guide.tabs.overview'), icon: Eye, show: true },
    { id: 'steps', label: t('guide.tabs.steps'), icon: ListChecks, show: true },
    { id: 'duas', label: t('guide.tabs.duas'), icon: Sparkles, show: duas.length > 0 },
    { id: 'rules', label: t('guide.tabs.rules'), icon: Scale, show: true },
    { id: 'mistakes', label: t('guide.tabs.mistakes'), icon: AlertTriangle, show: true },
    { id: 'media', label: t('guide.tabs.media'), icon: Images, show: media.length > 0 },
  ]

  return (
    <>
      <header className="relative overflow-hidden bg-emerald-900 text-white">
        <div className="geo-pattern absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 pt-5 pb-6">
          <div className="mb-4 flex items-center justify-between gap-3 text-sm">
            <Link to="/guide" className="inline-flex items-center gap-1 text-emerald-100 hover:text-white"><ArrowLeft className="size-4" /> {t('guide.allSteps')}</Link>
            <Link to="/guide/quick" className="inline-flex items-center gap-1 rounded-full bg-gold-400 px-3 py-1 font-semibold text-emerald-950"><Zap className="size-4" /> {t('quick.open')}</Link>
          </div>
          <StepNavigator current={page.id} />
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={page.id} initial={reduce ? false : { opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.22 }}>
              <p className="mt-5 text-sm font-semibold tracking-wide text-gold-300 uppercase">{t('guide.pageOf', { n: num(index + 1, lang), total: num(guidePages.length, lang) })}</p>
              <h1 className="mt-1 font-display text-2xl font-semibold sm:text-3xl">{page.title[lang]}</h1>
              {done && <Badge tone="emerald" className="mt-2"><CheckCircle2 className="size-3.5" /> {t('common.completed')}</Badge>}
            </motion.div>
          </AnimatePresence>
          <div className="mt-4 max-w-md">
            <div className="mb-1 flex justify-between text-xs text-emerald-100"><span>{t('guide.journey')}</span><span>{num(Math.round(overall * 100), lang)}%</span></div>
            <ProgressBar value={overall} label={t('guide.journey')} />
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 pt-5 pb-40 lg:pb-12">
        {stages.length > 1 && (
          <div className="mb-4 max-w-lg">
            <Segmented
              label={t('guide.part')}
              value={part.id}
              onChange={(v) => {
                setSearch({ part: v }, { replace: true })
                setTab('overview')
              }}
              options={stages.map((s) => ({ value: s.id, label: s.title[lang] }))}
            />
          </div>
        )}

        {/* Compact tabs */}
        <div role="tablist" aria-label={t('guide.sections')} className="no-print -mx-4 mb-4 flex gap-1 overflow-x-auto px-4 pb-1">
          {tabs.filter((x) => x.show).map((x) => (
            <button
              key={x.id}
              role="tab"
              type="button"
              aria-selected={tab === x.id}
              onClick={() => setTab(x.id)}
              className={cx('flex min-h-10 shrink-0 items-center gap-1.5 rounded-full px-4 text-sm font-semibold transition-colors', tab === x.id ? 'bg-emerald-800 text-white' : 'bg-white text-ink-soft ring-1 ring-sand-200 hover:ring-emerald-600')}
            >
              <x.icon className="size-4" aria-hidden /> {x.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={`${part.id}-${tab}`} role="tabpanel" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.18 }}>
            {tab === 'overview' && <OverviewTab stage={part} />}
            {tab === 'steps' && <StepsTab stage={part} />}
            {tab === 'duas' && (
              <div className="grid gap-4">
                <PronunciationWarning />
                {duas.map((d) => <DuaCard key={d.id} d={d} />)}
                <ButtonLink to="/duas" variant="outline" className="w-fit">{t('duas.browseAll')} <ArrowRight className="size-4" /></ButtonLink>
              </div>
            )}
            {tab === 'rules' && <RulesTab stage={part} />}
            {tab === 'mistakes' && <MistakesTab stage={part} />}
            {tab === 'media' && <div className="grid gap-4 sm:grid-cols-2">{media.map((m) => <MediaCard key={m.id} item={m} />)}</div>}
          </motion.div>
        </AnimatePresence>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {stages.map((s) => <StageChecklist key={s.id} stage={s} />)}
        </div>

        {!next && allDone && (
          <Notice tone="emerald" icon={<Sparkles className="size-5 text-gold-500" />} className="mt-6">
            <p className="font-semibold">{t('guide.finishTitle')}</p>
            <p className="mt-1">{t('guide.finishText')}</p>
          </Notice>
        )}
      </div>

      {/* One-handed bottom bar: above the tab bar on phones, inline on desktop */}
      <div className="no-print fixed inset-x-0 bottom-[calc(3.5rem+env(safe-area-inset-bottom))] z-30 border-t border-sand-200 bg-white/95 px-3 py-2 backdrop-blur lg:static lg:mx-auto lg:max-w-5xl lg:border-0 lg:bg-transparent lg:px-4 lg:pb-10">
        <div className="mx-auto grid max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-2">
          {prev ? <ButtonLink to={`/guide/${prev.id}`} variant="outline" aria-label={t('common.prev')}><ArrowLeft className="size-4" /><span className="hidden sm:inline">{t('common.prev')}</span></ButtonLink> : <span />}
          <Button variant={done ? 'soft' : 'primary'} onClick={() => setDone(!done)}>
            <CheckCircle2 className="size-4" /> {done ? t('guide.markIncomplete') : t('guide.markComplete')}
          </Button>
          {next ? (
            <ButtonLink to={`/guide/${next.id}`} variant="gold" onClick={() => !done && setDone(true)} aria-label={t('guide.nextStep')}>
              <span className="hidden sm:inline">{t('guide.nextStep')}</span><ArrowRight className="size-4" />
            </ButtonLink>
          ) : (
            <ButtonLink to="/guide" variant="gold" aria-label={t('guide.allSteps')}><CheckCircle2 className="size-4" /></ButtonLink>
          )}
        </div>
      </div>
    </>
  )
}
