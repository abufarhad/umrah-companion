import { motion } from 'motion/react'
import { AlertTriangle, Download, Info, Printer, Wallet } from 'lucide-react'
import { useMemo } from 'react'
import { BreakdownBars } from '../components/charts/BreakdownBars'
import { TripSetup } from '../components/planner/TripSetup'
import { Badge, Button, Card, Disclosure, Notice, NumberField, PageHeader, SectionTitle, Segmented, Toggle, cx } from '../components/ui'
import { scenarios, type Tier, type TransportMode } from '../content/costConfig'
import { useLang } from '../i18n'
import { CATEGORY_IDS, calculateBudget, type CategoryId, type Inclusion } from '../lib/budget'
import { downloadFile } from '../lib/download'
import { bdt, date, num, sar } from '../lib/format'
import { useDerived } from '../state/derived'
import { useStore } from '../state/store'

function Stat({ label, value, sub, big = false }: { label: string; value: string; sub?: string; big?: boolean }) {
  return (
    <div className={cx('rounded-2xl p-4', big ? 'bg-emerald-900 text-white' : 'bg-white ring-1 ring-sand-200')}>
      <p className={cx('text-sm', big ? 'text-emerald-100' : 'text-ink-muted')}>{label}</p>
      <motion.p key={value} initial={{ opacity: 0.4, y: 4 }} animate={{ opacity: 1, y: 0 }} className={cx('font-display font-semibold tabular-nums', big ? 'text-3xl text-gold-300 sm:text-4xl' : 'text-xl text-emerald-900')}>
        {value}
      </motion.p>
      {sub && <p className={cx('mt-0.5 text-xs', big ? 'text-emerald-100/80' : 'text-ink-muted')}>{sub}</p>}
    </div>
  )
}

export default function BudgetPage() {
  const { t, lang } = useLang()
  const { state, dispatch, costConfig } = useStore()
  const { budget: b, itinerary } = useDerived()
  const trip = state.trip
  const set = (v: Partial<typeof trip>) => dispatch({ type: 'trip', value: v })

  const scenarioTotals = useMemo(
    () =>
      (Object.keys(scenarios) as Tier[]).map((tier) => {
        const s = scenarios[tier]
        const r = calculateBudget(
          { ...trip, tier: s.tier, transport: s.transport, flightType: s.flight, mealPerDaySar: 0, personalPerDayBdt: 0, flightFareAdultBdt: 0, departureDate: state.plan.departureDate, makkahNights: itinerary.makkahNights, madinahNights: itinerary.madinahNights },
          costConfig,
        )
        return { tier, total: r.total, perPerson: r.perPerson }
      }),
    [trip, costConfig, itinerary, state.plan.departureDate],
  )

  const exportCsv = () => {
    const rows = [['Category', 'Item', 'BDT', 'SAR', 'Covered by package']]
    for (const l of b.lines) rows.push([l.category, t(l.labelKey, l.params), String(l.bdt), l.sar ? String(Math.round(l.sar)) : '', l.coveredByPackage ? 'yes' : ''])
    if (b.packageTotal) rows.push(['package', t('budget.packageLine'), String(b.packageTotal), '', ''])
    rows.push(['contingency', t('budget.contingency'), String(b.contingency), '', ''])
    rows.push(['total', t('budget.total'), String(b.total), '', ''])
    downloadFile('umrah-budget.csv', '﻿' + rows.map((r) => r.map((c) => `"${c.replace(/"/g, '""')}"`).join(',')).join('\n'), 'text/csv;charset=utf-8')
  }

  const inclusionOpts: { value: Inclusion; label: string }[] = [
    { value: 'included', label: t('common.included') },
    { value: 'excluded', label: t('common.excluded') },
    { value: 'unknown', label: t('common.unknown') },
  ]

  return (
    <>
      <PageHeader eyebrow={t('budget.eyebrow')} title={t('budget.title')} intro={<p>{t('budget.intro')}</p>} />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Notice icon={<Info className="size-5 text-gold-600" />} className="mb-6">
          {t('budget.disclaimer', { date: date(costConfig.reviewed, lang) })}
        </Notice>

        <div className="grid gap-6 lg:grid-cols-[1fr_24rem]">
          <div className="grid min-w-0 content-start gap-6">
            <TripSetup />

            {/* Scenarios */}
            <Card className="p-5">
              <h2 className="font-display text-lg font-semibold text-emerald-900">{t('budget.scenarios')}</h2>
              <p className="mt-1 text-sm text-ink-muted">{t('budget.scenariosHint')}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {scenarioTotals.map((s) => {
                  const active = trip.tier === s.tier && trip.transport === scenarios[s.tier].transport
                  return (
                    <button
                      key={s.tier}
                      type="button"
                      aria-pressed={active}
                      onClick={() => set({ tier: s.tier, transport: scenarios[s.tier].transport, flightType: scenarios[s.tier].flight, mealPerDaySar: 0, personalPerDayBdt: 0 })}
                      className={cx('rounded-2xl border p-4 text-left transition-all', active ? 'border-emerald-700 bg-emerald-50 ring-2 ring-emerald-700/20' : 'border-sand-200 bg-white hover:border-emerald-600/40')}
                    >
                      <p className="font-semibold text-emerald-900">{t(`budget.tiers.${s.tier}`)}</p>
                      <p className="mt-1 font-display text-xl font-semibold tabular-nums">{bdt(s.total, lang)}</p>
                      <p className="text-xs text-ink-muted">{t('budget.perPersonShort', { v: bdt(s.perPerson, lang) })}</p>
                      <p className="mt-2 text-xs text-ink-soft">{t(`budget.tierDesc.${s.tier}`)}</p>
                    </button>
                  )
                })}
              </div>
            </Card>

            {/* Stay & travel */}
            <Card className="p-5">
              <h2 className="font-display text-lg font-semibold text-emerald-900">{t('budget.stayTravel')}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <Segmented<Tier> label={t('budget.hotelTier')} value={trip.tier} onChange={(v) => set({ tier: v })} options={(['budget', 'comfort', 'premium'] as const).map((v) => ({ value: v, label: t(`budget.tiers.${v}`) }))} />
                <NumberField label={t('budget.roomSharing')} value={trip.roomSharing} min={1} max={8} onChange={(n) => set({ roomSharing: n })} hint={t('budget.roomsHint', { rooms: num(b.rooms, lang), people: num(b.bedPeople, lang) })} />
                <Segmented label={t('budget.flightType')} value={trip.flightType} onChange={(v) => set({ flightType: v })} options={[{ value: 'direct', label: t('budget.direct') }, { value: 'connecting', label: t('budget.connecting') }]} />
                <NumberField label={t('budget.fare')} value={trip.flightFareAdultBdt} step={1000} suffix="BDT" onChange={(n) => set({ flightFareAdultBdt: n })} hint={t('budget.fareHint', { v: bdt(costConfig.flightReturnAdultBdt[trip.flightType], lang) })} />
                <Segmented<TransportMode> label={t('budget.transport')} value={trip.transport} onChange={(v) => set({ transport: v })} options={(['bus', 'train', 'private'] as const).map((v) => ({ value: v, label: t(`budget.modes.${v}`) }))} />
                <NumberField label={t('budget.meal')} value={trip.mealPerDaySar} suffix="SAR" onChange={(n) => set({ mealPerDaySar: n })} hint={t('budget.mealHint', { v: sar(costConfig.mealPerDaySar[trip.tier], lang) })} />
              </div>
            </Card>

            {/* Package */}
            <Card className="p-5">
              <Toggle label={t('budget.usePackage')} description={t('budget.usePackageHint')} checked={trip.usePackage} onChange={(v) => set({ usePackage: v })} />
              {trip.usePackage && (
                <div className="mt-4 grid gap-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <NumberField label={t('budget.packagePrice')} value={trip.packagePerAdultBdt} step={1000} suffix="BDT" onChange={(n) => set({ packagePerAdultBdt: n })} />
                    <NumberField label={t('budget.packageChild')} value={Math.round(trip.packageChildRatio * 100)} max={100} suffix="%" onChange={(n) => set({ packageChildRatio: n / 100 })} />
                  </div>
                  <div>
                    <p className="mb-2 text-sm font-medium text-ink-soft">{t('budget.inclusionTitle')}</p>
                    <div className="grid gap-2">
                      {CATEGORY_IDS.map((c) => (
                        <div key={c} className="grid items-center gap-2 rounded-xl bg-sand-50 p-2 sm:grid-cols-[1fr_18rem]">
                          <span className="text-sm">{t(`budget.cat.${c}`)}</span>
                          <Segmented<Inclusion> size="sm" hideLabel label={t(`budget.cat.${c}`)} value={trip.inclusions[c]} onChange={(v) => set({ inclusions: { ...trip.inclusions, [c]: v } })} options={inclusionOpts} />
                        </div>
                      ))}
                    </div>
                    <p className="mt-2 text-xs text-ink-muted">{t('budget.inclusionHint')}</p>
                  </div>
                </div>
              )}
            </Card>

            {/* Other */}
            <Card className="p-5">
              <h2 className="font-display text-lg font-semibold text-emerald-900">{t('budget.other')}</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <NumberField label={t('budget.newPassports')} value={trip.newPassports} max={b.travellers} onChange={(n) => set({ newPassports: n })} />
                <Segmented label={t('budget.passportSpeed')} size="sm" value={trip.passportSpeed} onChange={(v) => set({ passportSpeed: v })} options={[{ value: 'regular', label: t('budget.speed.regular') }, { value: 'express', label: t('budget.speed.express') }, { value: 'superExpress', label: t('budget.speed.superExpress') }]} />
                <NumberField label={t('budget.sims')} value={trip.simCount} max={b.travellers} onChange={(n) => set({ simCount: n })} />
                <NumberField label={t('budget.extraInsurance')} value={trip.extraInsuranceBdt} step={500} suffix="BDT" onChange={(n) => set({ extraInsuranceBdt: n })} hint={t('budget.insuranceHint')} />
                <NumberField label={t('budget.personal')} value={trip.personalPerDayBdt} step={100} suffix="BDT" onChange={(n) => set({ personalPerDayBdt: n })} hint={t('budget.personalHint', { v: bdt(costConfig.personalPerDayBdt[trip.tier], lang) })} />
                <NumberField label={t('budget.shopping')} value={trip.shoppingBdt} step={1000} suffix="BDT" onChange={(n) => set({ shoppingBdt: n })} />
                <NumberField label={t('budget.contingencyPct')} value={trip.contingencyPercent < 0 ? costConfig.contingencyPercent : trip.contingencyPercent} max={50} suffix="%" onChange={(n) => set({ contingencyPercent: n })} />
                <NumberField label={t('budget.saved')} value={trip.alreadySavedBdt} step={1000} suffix="BDT" onChange={(n) => set({ alreadySavedBdt: n })} />
              </div>
            </Card>

            {/* Assumptions */}
            <Disclosure title={t('budget.assumptions')}>
              <p className="mb-3 text-sm text-ink-muted">{t('budget.assumptionsHint')}</p>
              <div className="mb-4 grid gap-4 sm:grid-cols-2">
                <NumberField label={t('budget.rate')} value={costConfig.sarToBdt} step={0.1} suffix="BDT/SAR" onChange={(n) => dispatch({ type: 'cost', value: { sarToBdt: n || costConfig.sarToBdt } })} hint={costConfig.sarToBdtNote} />
                <NumberField label={t('budget.visaFee')} value={costConfig.visaPerPersonBdt} step={500} suffix="BDT" onChange={(n) => dispatch({ type: 'cost', value: { visaPerPersonBdt: n } })} hint={t('budget.visaHint')} />
              </div>
              <dl className="grid gap-x-6 gap-y-1 text-sm sm:grid-cols-2">
                <dt className="text-ink-muted">{t('budget.a.hotelMakkah')}</dt><dd>{(['budget', 'comfort', 'premium'] as const).map((k) => sar(costConfig.hotelRoomNightSar.makkah[k], lang)).join(' / ')}</dd>
                <dt className="text-ink-muted">{t('budget.a.hotelMadinah')}</dt><dd>{(['budget', 'comfort', 'premium'] as const).map((k) => sar(costConfig.hotelRoomNightSar.madinah[k], lang)).join(' / ')}</dd>
                <dt className="text-ink-muted">{t('budget.a.transfers')}</dt><dd>{(['bus', 'train', 'private'] as const).map((k) => `${t(`budget.modes.${k}`)}: ${sar(costConfig.transfersSar[k].airportToCity + costConfig.transfersSar[k].intercity + costConfig.transfersSar[k].cityToAirport, lang)}`).join(' · ')}</dd>
                <dt className="text-ink-muted">{t('budget.a.vaccine')}</dt><dd>{bdt(costConfig.vaccinePerPersonBdt, lang)}</dd>
                <dt className="text-ink-muted">{t('budget.a.sim')}</dt><dd>{sar(costConfig.simSar, lang)}</dd>
                <dt className="text-ink-muted">{t('budget.a.ihram')}</dt><dd>{bdt(costConfig.ihramSetBdt, lang)}</dd>
                <dt className="text-ink-muted">{t('budget.a.childFare')}</dt><dd>{num(costConfig.childFareRatio * 100, lang)}% / {num(costConfig.infantFareRatio * 100, lang)}%</dd>
              </dl>
              <Button variant="ghost" className="mt-3" onClick={() => dispatch({ type: 'resetCost' })}>{t('budget.resetAssumptions')}</Button>
            </Disclosure>
          </div>

          {/* Results */}
          <aside className="lg:sticky lg:top-20 lg:self-start">
            <div className="grid gap-3">
              <Stat big label={t('budget.total')} value={bdt(b.total, lang)} sub={t('budget.totalSub', { n: num(b.travellers, lang), days: num(itinerary.days.length, lang) })} />
              <div className="grid grid-cols-2 gap-3">
                <Stat label={t('budget.perPerson')} value={bdt(b.perPerson, lang)} />
                <Stat label={t('budget.daily')} value={bdt(b.dailyInSaudi, lang)} sub={t('budget.dailySub')} />
                <Stat label={t('budget.makkahHotel')} value={bdt(b.subtotals.makkahHotel, lang)} sub={t('budget.nights', { n: num(itinerary.makkahNights, lang) })} />
                <Stat label={t('budget.madinahHotel')} value={bdt(b.subtotals.madinahHotel, lang)} sub={t('budget.nights', { n: num(itinerary.madinahNights, lang) })} />
                <Stat label={t('budget.flightsTransport')} value={bdt(b.flightsAndTransport, lang)} />
                <Stat label={t('budget.contingency')} value={bdt(b.contingency, lang)} />
              </div>
              {b.packageTotal > 0 && <Stat label={t('budget.packageLine')} value={bdt(b.packageTotal, lang)} />}
              <Card className="p-4">
                <p className="flex items-center gap-2 font-semibold text-emerald-900"><Wallet className="size-4 text-gold-500" />{t('budget.savings')}</p>
                <p className="mt-1 font-display text-2xl font-semibold tabular-nums">{bdt(b.savingsNeeded, lang)}</p>
                {b.monthlySaving ? (
                  <p className="text-sm text-ink-soft">{t('budget.monthly', { v: bdt(b.monthlySaving, lang), n: num(b.monthsToDeparture ?? 0, lang) })}</p>
                ) : (
                  <p className="text-sm text-ink-muted">{t('budget.setDate')}</p>
                )}
              </Card>
              {b.possibleOverlap > 0 && (
                <Notice tone="red" icon={<AlertTriangle className="size-5" />}>
                  {t('budget.overlap', { v: bdt(b.possibleOverlap, lang) })}
                </Notice>
              )}
              <div className="no-print grid grid-cols-2 gap-2">
                <Button variant="outline" onClick={() => window.print()}><Printer className="size-4" />{t('common.print')}</Button>
                <Button variant="outline" onClick={exportCsv}><Download className="size-4" />CSV</Button>
              </div>
            </div>
          </aside>
        </div>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="p-5">
            <SectionTitle>{t('budget.breakdown')}</SectionTitle>
            <BreakdownBars
              label={t('budget.breakdown')}
              data={[
                ...CATEGORY_IDS.map((c: CategoryId) => ({ id: c, label: t(`budget.cat.${c}`), value: b.subtotals[c], display: bdt(b.subtotals[c], lang), detail: t('budget.share', { p: num(b.total ? (b.subtotals[c] / b.total) * 100 : 0, lang, 1) }) })),
                { id: 'package', label: t('budget.packageLine'), value: b.packageTotal, display: bdt(b.packageTotal, lang), detail: t('budget.share', { p: num(b.total ? (b.packageTotal / b.total) * 100 : 0, lang, 1) }) },
                { id: 'contingency', label: t('budget.contingency'), value: b.contingency, display: bdt(b.contingency, lang) },
              ]}
            />
          </Card>
          <Card className="overflow-hidden p-0">
            <div className="p-5 pb-2"><SectionTitle className="mb-0">{t('budget.table')}</SectionTitle></div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead className="bg-sand-50 text-left text-ink-muted">
                  <tr>
                    <th className="px-4 py-2 font-medium">{t('budget.item')}</th>
                    <th className="px-4 py-2 text-right font-medium">BDT</th>
                  </tr>
                </thead>
                <tbody>
                  {b.lines.map((l) => (
                    <tr key={l.id} className="border-t border-sand-100">
                      <td className="px-4 py-2">
                        <span className={cx(l.coveredByPackage && 'text-ink-muted line-through')}>{t(l.labelKey, { ...l.params, n: num(Number(l.params?.n ?? 0), lang), rooms: num(Number(l.params?.rooms ?? 0), lang), nights: num(Number(l.params?.nights ?? 0), lang), days: num(Number(l.params?.days ?? 0), lang) })}</span>
                        <span className="ml-2 text-xs text-ink-muted">{t(`budget.cat.${l.category}`)}</span>
                        {l.coveredByPackage && <Badge tone="emerald" className="ml-2">{t('budget.inPackage')}</Badge>}
                        {l.sar ? <span className="block text-xs text-ink-muted">{sar(l.sar, lang)}</span> : null}
                      </td>
                      <td className={cx('px-4 py-2 text-right tabular-nums', l.coveredByPackage && 'text-ink-muted line-through')}>{bdt(l.bdt, lang)}</td>
                    </tr>
                  ))}
                  {b.packageTotal > 0 && (
                    <tr className="border-t border-sand-100"><td className="px-4 py-2">{t('budget.packageLine')}</td><td className="px-4 py-2 text-right tabular-nums">{bdt(b.packageTotal, lang)}</td></tr>
                  )}
                  <tr className="border-t border-sand-100"><td className="px-4 py-2">{t('budget.contingency')}</td><td className="px-4 py-2 text-right tabular-nums">{bdt(b.contingency, lang)}</td></tr>
                  <tr className="border-t-2 border-emerald-800 font-semibold"><td className="px-4 py-2">{t('budget.total')}</td><td className="px-4 py-2 text-right tabular-nums">{bdt(b.total, lang)}</td></tr>
                </tbody>
              </table>
            </div>
          </Card>
        </section>
      </div>
    </>
  )
}
