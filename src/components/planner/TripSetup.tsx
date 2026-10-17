import { Card, NumberField, Segmented, Select, TextField } from '../ui'
import type { DepartureCity } from '../../content/costConfig'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { MAX_DAYS, MIN_DAYS, type Airport, type Order } from '../../lib/itinerary'
import { useDerived } from '../../state/derived'
import { useStore } from '../../state/store'

const PRESETS = [7, 10, 14, 21]

/** Shared trip basics used by the planner, budget and itinerary pages. */
export function TripSetup({ showTravellers = true }: { showTravellers?: boolean }) {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const { itinerary } = useDerived()
  const plan = state.plan
  const trip = state.trip
  const isPreset = PRESETS.includes(plan.totalDays)

  return (
    <Card className="p-5">
      <h2 className="font-display text-lg font-semibold text-emerald-900">{t('plan.setupTitle')}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <Select<DepartureCity>
          label={t('plan.departureCity')}
          value={trip.departureCity}
          onChange={(v) => dispatch({ type: 'trip', value: { departureCity: v } })}
          options={(['dhaka', 'chattogram', 'sylhet', 'other'] as const).map((c) => ({ value: c, label: t(`cities.${c}`) }))}
          hint={trip.departureCity !== 'dhaka' ? t('plan.cityHint') : undefined}
        />
        <TextField label={t('plan.departureDate')} type="date" value={plan.departureDate} onChange={(e) => dispatch({ type: 'plan', value: { departureDate: e.target.value } })} hint={t('plan.dateHint')} />
        <div className="sm:col-span-2">
          <Segmented<number | 'custom'>
            label={t('plan.duration')}
            value={isPreset ? plan.totalDays : 'custom'}
            onChange={(v) => v !== 'custom' && dispatch({ type: 'plan', value: { totalDays: v, madinahNights: null } })}
            options={[...PRESETS.map((d) => ({ value: d as number | 'custom', label: t('plan.daysN', { n: num(d, lang) }) })), { value: 'custom', label: t('plan.custom') }]}
          />
        </div>
        <NumberField label={t('plan.totalDays')} value={plan.totalDays} min={MIN_DAYS} max={MAX_DAYS} onChange={(n) => dispatch({ type: 'plan', value: { totalDays: n } })} hint={t('plan.totalDaysHint')} />
        <Select<Order>
          label={t('plan.order')}
          value={plan.order}
          onChange={(v) => dispatch({ type: 'plan', value: { order: v, arrival: v === 'madinah-first' ? 'MED' : 'JED', madinahNights: null } })}
          options={[
            { value: 'makkah-first', label: t('plan.orders.makkah-first') },
            { value: 'madinah-first', label: t('plan.orders.madinah-first') },
            { value: 'makkah-only', label: t('plan.orders.makkah-only') },
          ]}
        />
        <Segmented<Airport>
          label={t('plan.arrival')}
          value={plan.arrival}
          onChange={(v) => dispatch({ type: 'plan', value: { arrival: v } })}
          options={[{ value: 'JED', label: t('plan.jed') }, { value: 'MED', label: t('plan.med') }]}
        />
        {plan.order !== 'makkah-only' && (
          <NumberField
            label={t('plan.madinahNights')}
            value={itinerary.madinahNights}
            min={1}
            max={Math.max(1, plan.totalDays - 4)}
            onChange={(n) => dispatch({ type: 'plan', value: { madinahNights: n } })}
            hint={t('plan.splitHint', { makkah: num(itinerary.makkahNights, lang), madinah: num(itinerary.madinahNights, lang) })}
          />
        )}
        {showTravellers && (
          <>
            <NumberField label={t('plan.men')} value={trip.men} max={30} onChange={(n) => dispatch({ type: 'trip', value: { men: n } })} />
            <NumberField label={t('plan.women')} value={trip.women} max={30} onChange={(n) => dispatch({ type: 'trip', value: { women: n } })} />
            <div className="sm:col-span-2">
              <ChildAges />
            </div>
          </>
        )}
      </div>
    </Card>
  )
}

function ChildAges() {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const ages = state.trip.childAges
  const set = (a: number[]) => dispatch({ type: 'trip', value: { childAges: a } })
  return (
    <div>
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-ink-soft">{t('plan.children', { n: num(ages.length, lang) })}</span>
        <div className="flex gap-2">
          <button type="button" className="min-h-9 rounded-lg bg-sand-100 px-3 text-sm hover:bg-sand-200 disabled:opacity-40" disabled={!ages.length} onClick={() => set(ages.slice(0, -1))}>
            − {t('plan.removeChild')}
          </button>
          <button type="button" className="min-h-9 rounded-lg bg-emerald-50 px-3 text-sm font-semibold text-emerald-900 hover:bg-emerald-100" disabled={ages.length >= 10} onClick={() => set([...ages, 8])}>
            + {t('plan.addChild')}
          </button>
        </div>
      </div>
      {ages.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-2">
          {ages.map((a, i) => (
            <label key={i} className="flex items-center gap-2 rounded-xl border border-sand-300 bg-white px-3 py-1.5 text-sm">
              {t('plan.childAge', { n: num(i + 1, lang) })}
              <input type="number" min={0} max={17} value={a} onChange={(e) => set(ages.map((x, j) => (j === i ? Math.max(0, Math.min(17, Number(e.target.value) || 0)) : x)))} className="w-14 rounded-md border border-sand-300 px-1 py-0.5" aria-label={t('plan.childAge', { n: num(i + 1, lang) })} />
            </label>
          ))}
        </div>
      )}
      <p className="mt-1 text-xs text-ink-muted">{t('plan.childHint')}</p>
    </div>
  )
}
