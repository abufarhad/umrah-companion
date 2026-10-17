import { motion } from 'motion/react'
import { BedDouble, CalendarClock, Info, Landmark, Pencil, Plane, RotateCcw, Sparkles, TrainFront } from 'lucide-react'
import { useState } from 'react'
import { TripSetup } from '../components/planner/TripSetup'
import { Badge, Button, Card, Check, Notice, PageHeader, SectionTitle, Segmented, cx } from '../components/ui'
import { useLang } from '../i18n'
import { date, num, weekday } from '../lib/format'
import { daysUntil, deadlines, type Day, type DayKind } from '../lib/itinerary'
import { useDerived } from '../state/derived'
import { useStore } from '../state/store'
import { Countdown } from '../components/planner/Countdown'

const kindStyle: Record<DayKind, { icon: typeof Plane; cls: string }> = {
  depart: { icon: Plane, cls: 'bg-sky-100 text-sky-900' },
  umrah: { icon: Sparkles, cls: 'bg-gold-300 text-emerald-950' },
  makkah: { icon: Landmark, cls: 'bg-emerald-100 text-emerald-900' },
  madinah: { icon: Landmark, cls: 'bg-emerald-50 text-emerald-800' },
  intercity: { icon: TrainFront, cls: 'bg-sand-200 text-ink' },
  rest: { icon: BedDouble, cls: 'bg-sand-100 text-ink-soft' },
  return: { icon: Plane, cls: 'bg-sky-100 text-sky-900' },
}

function DayCard({ day }: { day: Day }) {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const [editing, setEditing] = useState(false)
  const s = kindStyle[day.kind]
  const title = state.dayTitles[day.index] || t(`itinerary.days.${day.titleKey}`)
  const note = state.dayNotes[day.index] ?? ''
  return (
    <motion.li layout initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="relative grid grid-cols-[3.5rem_1fr] gap-3">
      <div className="flex flex-col items-center">
        <span className={cx('grid size-12 place-items-center rounded-2xl', s.cls)}>
          <s.icon className="size-5" aria-hidden />
        </span>
        <span className="mt-1 w-0.5 flex-1 bg-sand-200" aria-hidden />
      </div>
      <Card className="mb-3 p-4">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase">
              {t('itinerary.dayN', { n: num(day.index + 1, lang) })}
              {day.date && ` · ${weekday(day.date, lang)} ${date(day.date, lang, { day: 'numeric', month: 'short' })}`}
            </p>
            {editing ? (
              <input autoFocus className="mt-1 w-full rounded-lg border border-sand-300 px-2 py-1 font-semibold" value={state.dayTitles[day.index] ?? title} onChange={(e) => dispatch({ type: 'dayTitle', index: day.index, value: e.target.value })} aria-label={t('itinerary.editTitle')} />
            ) : (
              <h3 className="mt-0.5 font-semibold text-emerald-900">{title}</h3>
            )}
          </div>
          <div className="flex items-center gap-1">
            {day.kind === 'umrah' && <Badge tone="gold">{t('itinerary.umrahBadge')}</Badge>}
            <Badge tone="sand">{t(`itinerary.city.${day.city}`)}</Badge>
            <button type="button" className="no-print grid size-9 place-items-center rounded-lg hover:bg-sand-100" onClick={() => setEditing((e) => !e)} aria-label={t('itinerary.edit')} aria-pressed={editing}>
              <Pencil className="size-4" />
            </button>
          </div>
        </div>
        <ul className="mt-2 grid gap-1 text-sm text-ink-soft">
          {day.itemKeys.map((k) => {
            const religious = ['ihramBeforeMiqat', 'ihramDhulHulayfah', 'performUmrah', 'halq'].includes(k)
            return (
              <li key={k} className="flex items-start gap-2">
                <span className={cx('mt-2 size-1.5 shrink-0 rounded-full', religious ? 'bg-gold-500' : 'bg-emerald-600/50')} aria-hidden />
                <span>
                  {t(`itinerary.items.${k}`)}
                  {religious && <span className="ml-1 text-xs font-semibold text-gold-600">· {t('itinerary.religious')}</span>}
                </span>
              </li>
            )
          })}
        </ul>
        {(editing || note) && (
          <textarea
            className="mt-3 w-full rounded-lg border border-sand-300 bg-sand-50 px-3 py-2 text-sm"
            rows={2}
            placeholder={t('itinerary.notePlaceholder')}
            value={note}
            readOnly={!editing}
            onChange={(e) => dispatch({ type: 'dayNote', index: day.index, value: e.target.value })}
            aria-label={t('itinerary.note')}
          />
        )}
      </Card>
    </motion.li>
  )
}

function CalendarView({ days }: { days: Day[] }) {
  const { t, lang } = useLang()
  const first = days[0]?.date
  if (!first) return <Notice tone="blue">{t('itinerary.calendarNeedsDate')}</Notice>
  const start = new Date(`${first}T00:00:00`)
  const end = new Date(`${days.at(-1)!.date}T00:00:00`)
  const byDate = new Map(days.map((d) => [d.date, d]))
  // Build month grids covering the whole trip (weeks start Saturday, as is common in Bangladesh).
  const months: Date[] = []
  for (let m = new Date(start.getFullYear(), start.getMonth(), 1); m <= end; m = new Date(m.getFullYear(), m.getMonth() + 1, 1)) months.push(m)
  const wd = Array.from({ length: 7 }, (_, i) => new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-GB', { weekday: 'narrow' }).format(new Date(2026, 0, 3 + i)))
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {months.map((m) => {
        const offset = (m.getDay() + 1) % 7
        const count = new Date(m.getFullYear(), m.getMonth() + 1, 0).getDate()
        return (
          <Card key={m.toISOString()} className="p-4">
            <p className="mb-2 font-semibold text-emerald-900">{new Intl.DateTimeFormat(lang === 'bn' ? 'bn-BD' : 'en-GB', { month: 'long', year: 'numeric' }).format(m)}</p>
            <div className="grid grid-cols-7 gap-1 text-center text-xs">
              {wd.map((w, i) => <span key={i} className="py-1 text-ink-muted">{w}</span>)}
              {Array.from({ length: offset }, (_, i) => <span key={`e${i}`} />)}
              {Array.from({ length: count }, (_, i) => {
                const iso = `${m.getFullYear()}-${String(m.getMonth() + 1).padStart(2, '0')}-${String(i + 1).padStart(2, '0')}`
                const d = byDate.get(iso)
                return (
                  <span key={iso} title={d ? t(`itinerary.days.${d.titleKey}`) : undefined} className={cx('grid aspect-square place-items-center rounded-lg', d ? kindStyle[d.kind].cls : 'text-ink-soft')}>
                    {num(i + 1, lang)}
                  </span>
                )
              })}
            </div>
          </Card>
        )
      })}
    </div>
  )
}

export default function ItineraryPage() {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const { itinerary } = useDerived()
  const [view, setView] = useState<'list' | 'calendar'>('list')
  const dl = deadlines(state.plan.departureDate)
  const doneCount = dl.filter((d) => state.prep[d.key]).length

  return (
    <>
      <PageHeader eyebrow={t('itinerary.eyebrow')} title={t('itinerary.title')} intro={<p>{t('itinerary.intro')}</p>} />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[1fr_22rem]">
          <div className="grid min-w-0 content-start gap-6">
            <TripSetup showTravellers={false} />
            <Notice icon={<Info className="size-5 text-gold-600" />}>{t('itinerary.recommendationNote')}</Notice>
            <Notice tone="emerald"><span className="font-semibold">{t('plan.ihramForRoute')}: </span>{t(`itinerary.ihram.${itinerary.ihramKey}`)}</Notice>
            {itinerary.warnings.map((w) => <Notice key={w} tone="blue">{t(`itinerary.warnings.${w}`)}</Notice>)}

            <div className="flex flex-wrap items-end justify-between gap-3">
              <SectionTitle className="mb-0">{t('itinerary.schedule')}</SectionTitle>
              <div className="flex items-end gap-2">
                <div className="w-56"><Segmented size="sm" label={t('itinerary.view')} value={view} onChange={setView} options={[{ value: 'list', label: t('itinerary.list') }, { value: 'calendar', label: t('itinerary.calendar') }]} /></div>
                <Button variant="ghost" onClick={() => dispatch({ type: 'resetDays' })} aria-label={t('itinerary.resetEdits')}><RotateCcw className="size-4" /></Button>
              </div>
            </div>
            {view === 'list' ? (
              <ol>{itinerary.days.map((d) => <DayCard key={`${d.index}-${d.titleKey}`} day={d} />)}</ol>
            ) : (
              <CalendarView days={itinerary.days} />
            )}
          </div>

          <aside className="grid content-start gap-4 lg:sticky lg:top-20 lg:self-start">
            <Card className="p-5">
              <p className="flex items-center gap-2 text-sm font-semibold text-ink-soft"><CalendarClock className="size-4 text-gold-500" />{t('itinerary.countdown')}</p>
              <div className="mt-2"><Countdown /></div>
            </Card>
            <Card className="p-5">
              <h2 className="font-display text-lg font-semibold text-emerald-900">{t('itinerary.prepTitle')}</h2>
              <p className="text-sm text-ink-muted">{t('itinerary.prepProgress', { done: num(doneCount, lang), total: num(dl.length, lang) })}</p>
              <div className="mt-3 grid gap-1">
                {dl.map((d) => {
                  const left = d.date ? daysUntil(d.date) : null
                  return (
                    <Check key={d.key} checked={!!state.prep[d.key]} onChange={(v) => dispatch({ type: 'prep', key: d.key, value: v })}>
                      <span className="block">{t(`itinerary.deadlines.${d.key}`)}</span>
                      <span className={cx('block text-xs', left !== null && left < 0 && !state.prep[d.key] ? 'font-semibold text-red-700' : 'text-ink-muted')}>
                        {d.date ? `${date(d.date, lang)}${left !== null && left < 0 && !state.prep[d.key] ? ` · ${t('itinerary.overdue')}` : ''}` : t('itinerary.daysBefore', { n: num(d.daysBefore, lang) })}
                      </span>
                    </Check>
                  )
                })}
              </div>
              <p className="mt-3 text-xs text-ink-muted">{t('itinerary.deadlineNote')}</p>
            </Card>
          </aside>
        </div>
      </div>
    </>
  )
}
