import { CheckSquare, Download, ExternalLink, Printer, Square } from 'lucide-react'
import { Link } from 'react-router'
import { Countdown } from '../components/planner/Countdown'
import { downloadFile } from '../lib/download'
import { Badge, Button, Card, Notice, PageHeader, SectionTitle } from '../components/ui'
import { OFFICIAL } from '../content/travel'
import { stageIds } from '../content/rituals'
import { useLang } from '../i18n'
import { bdt, date, num } from '../lib/format'
import { addDays, deadlines } from '../lib/itinerary'
import { completionRatio } from '../lib/ritualProgress'
import { useDerived } from '../state/derived'
import { useStore } from '../state/store'

export default function SummaryPage() {
  const { t, lang } = useLang()
  const { state, costConfig } = useStore()
  const { itinerary, budget: b } = useDerived()
  const plan = state.plan
  const ret = plan.departureDate ? addDays(plan.departureDate, itinerary.days.length - 1) : null
  const dl = deadlines(plan.departureDate)
  const guide = completionRatio(state.progress, stageIds)
  const route = `${t(`cities.${state.trip.departureCity}`)} → ${plan.arrival === 'JED' ? t('maps.jeddah') : t('maps.madinah')} → ${
    plan.order === 'madinah-first' ? `${t('maps.madinah')} → ${t('places.makkah')}` : plan.order === 'makkah-first' ? `${t('places.makkah')} → ${t('maps.madinah')}` : t('places.makkah')
  } → ${itinerary.returnAirport === 'JED' ? t('maps.jeddah') : t('maps.madinah')} → ${t(`cities.${state.trip.departureCity}`)}`

  const verify = ['visa', 'nusuk', 'vaccine', 'flights', 'hotels', 'rate', 'baggage'] as const
  const links = [OFFICIAL.ministry, OFFICIAL.nusuk, OFFICIAL.mohHealth, OFFICIAL.visaCheck, OFFICIAL.passport, OFFICIAL.hhr, OFFICIAL.ihramGuide]

  const exportText = () => {
    const lines = [
      t('summary.title'),
      '',
      `${t('summary.route')}: ${route}`,
      `${t('summary.dates')}: ${date(plan.departureDate, lang)} – ${date(ret, lang)}`,
      `${t('summary.duration')}: ${t('plan.daysN', { n: num(itinerary.days.length, lang) })}`,
      `${t('summary.total')}: ${bdt(b.total, lang)} · ${t('budget.perPerson')}: ${bdt(b.perPerson, lang)}`,
      `${t('plan.ihramForRoute')}: ${t(`itinerary.ihram.${itinerary.ihramKey}`)}`,
      '',
      t('itinerary.schedule') + ':',
      ...itinerary.days.map((d) => `${t('itinerary.dayN', { n: num(d.index + 1, lang) })}${d.date ? ` (${date(d.date, lang)})` : ''}: ${state.dayTitles[d.index] || t(`itinerary.days.${d.titleKey}`)}${state.dayNotes[d.index] ? ` - ${state.dayNotes[d.index]}` : ''}`),
      '',
      t('summary.checklist') + ':',
      ...dl.map((d) => `${state.prep[d.key] ? '[x]' : '[ ]'} ${t(`itinerary.deadlines.${d.key}`)}${d.date ? ` - ${date(d.date, lang)}` : ''}`),
      '',
      t('summary.assumptionNote'),
    ]
    downloadFile('umrah-plan.txt', lines.join('\n'), 'text/plain;charset=utf-8')
  }

  return (
    <>
      <PageHeader eyebrow={t('summary.eyebrow')} title={t('summary.title')} intro={<p>{t('summary.intro')}</p>}>
        <div className="no-print mt-6 flex flex-wrap gap-2">
          <Button variant="gold" onClick={() => window.print()}><Printer className="size-4" />{t('summary.print')}</Button>
          <Button variant="onDark" onClick={exportText}><Download className="size-4" />{t('summary.download')}</Button>
        </div>
      </PageHeader>
      <div className="mx-auto grid max-w-5xl gap-6 px-4 py-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <Card className="p-5 sm:col-span-2">
            <p className="text-sm text-ink-muted">{t('summary.route')}</p>
            <p className="mt-1 font-semibold text-emerald-900">{route}</p>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm sm:grid-cols-3">
              <div><p className="text-ink-muted">{t('summary.departure')}</p><p className="font-semibold">{date(plan.departureDate, lang)}</p></div>
              <div><p className="text-ink-muted">{t('summary.return')}</p><p className="font-semibold">{date(ret, lang)}</p></div>
              <div><p className="text-ink-muted">{t('summary.duration')}</p><p className="font-semibold">{t('plan.daysN', { n: num(itinerary.days.length, lang) })}</p></div>
              <div><p className="text-ink-muted">{t('summary.order')}</p><p className="font-semibold">{t(`plan.orders.${plan.order}`)}</p></div>
              <div><p className="text-ink-muted">{t('summary.nights')}</p><p className="font-semibold">{t('summary.nightsSplit', { makkah: num(itinerary.makkahNights, lang), madinah: num(itinerary.madinahNights, lang) })}</p></div>
              <div><p className="text-ink-muted">{t('summary.travellers')}</p><p className="font-semibold">{num(b.travellers, lang)}</p></div>
            </div>
          </Card>
          <Card className="p-5">
            <p className="text-sm text-ink-muted">{t('itinerary.countdown')}</p>
            <div className="mt-1"><Countdown /></div>
            <p className="mt-3 text-sm text-ink-muted">{t('summary.guideProgress')}</p>
            <p className="font-semibold">{num(Math.round(guide * 100), lang)}%</p>
          </Card>
        </div>

        <Card className="p-5">
          <SectionTitle>{t('summary.budget')}</SectionTitle>
          <div className="grid gap-4 sm:grid-cols-4">
            <div><p className="text-sm text-ink-muted">{t('summary.total')}</p><p className="font-display text-2xl font-semibold text-emerald-900">{bdt(b.total, lang)}</p></div>
            <div><p className="text-sm text-ink-muted">{t('budget.perPerson')}</p><p className="font-display text-2xl font-semibold">{bdt(b.perPerson, lang)}</p></div>
            <div><p className="text-sm text-ink-muted">{t('summary.accommodation')}</p><p className="font-semibold">{bdt(b.subtotals.makkahHotel + b.subtotals.madinahHotel, lang)}</p></div>
            <div><p className="text-sm text-ink-muted">{t('budget.flightsTransport')}</p><p className="font-semibold">{bdt(b.flightsAndTransport, lang)}</p></div>
          </div>
          {b.packageTotal > 0 && <p className="mt-3 text-sm text-ink-soft">{t('summary.packageIncluded', { v: bdt(b.packageTotal, lang) })}</p>}
          <p className="mt-3 text-xs text-ink-muted">{t('summary.budgetAssumptions', { tier: t(`budget.tiers.${state.trip.tier}`), mode: t(`budget.modes.${state.trip.transport}`), rate: num(costConfig.sarToBdt, lang, 2), date: date(costConfig.reviewed, lang) })}</p>
          <Link to="/budget" className="no-print mt-2 inline-block text-sm font-semibold text-emerald-800 hover:underline">{t('summary.editBudget')} →</Link>
        </Card>

        <Notice tone="emerald">
          <p className="font-semibold">{t('plan.ihramForRoute')}</p>
          <p className="mt-1">{t(`itinerary.ihram.${itinerary.ihramKey}`)}</p>
          <Link to="/guide/ihram" className="no-print mt-1 inline-block font-semibold text-emerald-800 hover:underline">{t('summary.readIhram')} →</Link>
        </Notice>

        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-5">
            <SectionTitle>{t('summary.checklist')}</SectionTitle>
            <ul className="grid gap-2 text-sm">
              {dl.map((d) => (
                <li key={d.key} className="flex items-start gap-2">
                  {state.prep[d.key] ? <CheckSquare className="mt-0.5 size-4 text-emerald-700" /> : <Square className="mt-0.5 size-4 text-ink-muted" />}
                  <span>
                    {t(`itinerary.deadlines.${d.key}`)}
                    {d.date && <span className="block text-xs text-ink-muted">{t('summary.by', { date: date(d.date, lang) })}</span>}
                  </span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="p-5">
            <SectionTitle>{t('summary.verify')}</SectionTitle>
            <ul className="grid gap-2 text-sm">
              {verify.map((v) => <li key={v} className="flex gap-2"><Badge tone="gold">!</Badge><span>{t(`summary.verifyItems.${v}`)}</span></li>)}
            </ul>
            <SectionTitle className="mt-6">{t('summary.links')}</SectionTitle>
            <ul className="grid gap-1.5 text-sm">
              {links.map((l) => (
                <li key={l.url}>
                  <a href={l.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-800 underline">{l.title[lang]} <ExternalLink className="size-3" /></a>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <Card className="print-break p-5">
          <SectionTitle>{t('itinerary.schedule')}</SectionTitle>
          <ol className="grid gap-2 text-sm">
            {itinerary.days.map((d) => (
              <li key={d.index} className="grid grid-cols-[7rem_1fr] gap-2 border-b border-sand-100 pb-2">
                <span className="text-ink-muted">{t('itinerary.dayN', { n: num(d.index + 1, lang) })}{d.date && <span className="block">{date(d.date, lang, { day: 'numeric', month: 'short' })}</span>}</span>
                <span>
                  <span className="font-semibold">{state.dayTitles[d.index] || t(`itinerary.days.${d.titleKey}`)}</span>
                  {state.dayNotes[d.index] && <span className="block text-ink-soft">{state.dayNotes[d.index]}</span>}
                </span>
              </li>
            ))}
          </ol>
        </Card>

        <Notice>{t('summary.assumptionNote')}</Notice>
      </div>
    </>
  )
}
