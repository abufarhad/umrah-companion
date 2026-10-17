import { motion } from 'motion/react'
import { ArrowRight, Building2, Calculator, CalendarDays, Info, Luggage, Plane, TrainFront } from 'lucide-react'
import { JourneyRoute, MiqatMap } from '../components/animations/Maps'
import { MediaCard } from '../components/media'
import { FactCard } from '../components/planner/FactCard'
import { TripSetup } from '../components/planner/TripSetup'
import { ButtonLink, Card, Notice, PageHeader, SectionTitle } from '../components/ui'
import { mediaById } from '../content/media'
import { travelFacts } from '../content/travel'
import { useLang } from '../i18n'
import { num } from '../lib/format'
import { useDerived } from '../state/derived'
import { useStore } from '../state/store'

const ROUTE_STEPS = ['passport', 'visa', 'package', 'flights', 'arrival', 'ground', 'hotel', 'ihram', 'umrah', 'return'] as const

export default function PlanPage() {
  const { t, lang } = useLang()
  const { state } = useStore()
  const { itinerary } = useDerived()
  const madinahFirst = itinerary.ihramKey === 'dhulHulayfah'

  return (
    <>
      <PageHeader eyebrow={t('plan.eyebrow')} title={t('plan.title')} intro={<p>{t('plan.intro')}</p>} />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr]">
          <TripSetup />
          <div className="grid content-start gap-4">
            <JourneyRoute arrival={state.plan.arrival} departure={state.trip.departureCity} />
            <Notice tone={madinahFirst ? 'emerald' : 'gold'} icon={<Info className="size-5" />}>
              <p className="font-semibold">{t('plan.ihramForRoute')}</p>
              <p className="mt-1">{t(`itinerary.ihram.${itinerary.ihramKey}`)}</p>
            </Notice>
            {itinerary.warnings.map((w) => (
              <Notice key={w} tone="blue">{t(`itinerary.warnings.${w}`)}</Notice>
            ))}
            <div className="grid grid-cols-2 gap-3">
              <ButtonLink to="/budget" variant="primary"><Calculator className="size-4" /> {t('plan.toBudget')}</ButtonLink>
              <ButtonLink to="/itinerary" variant="outline"><CalendarDays className="size-4" /> {t('plan.toItinerary')}</ButtonLink>
            </div>
          </div>
        </div>

        <section className="mt-12">
          <SectionTitle icon={<Plane className="size-5" />}>{t('plan.routeTitle')}</SectionTitle>
          <p className="mb-4 text-ink-soft">{t('plan.routeIntro')}</p>
          <ol className="grid gap-3 md:grid-cols-2">
            {ROUTE_STEPS.map((s, i) => (
              <motion.li key={s} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: (i % 2) * 0.05 }} className="flex gap-3 rounded-2xl border border-sand-200 bg-white p-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-emerald-800 text-sm font-bold text-white">{num(i + 1, lang)}</span>
                <div>
                  <p className="font-semibold text-emerald-900">{t(`plan.steps.${s}.title`)}</p>
                  <p className="mt-0.5 text-sm text-ink-soft">{t(`plan.steps.${s}.text`)}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </section>

        <section className="mt-12 grid gap-6 lg:grid-cols-2">
          <div>
            <SectionTitle icon={<Plane className="size-5" />}>{t('plan.orderTitle')}</SectionTitle>
            <div className="grid gap-3">
              <Card className="p-4">
                <p className="font-semibold text-emerald-900">{t('plan.orders.makkah-first')}</p>
                <p className="mt-1 text-sm text-ink-soft">{t('plan.makkahFirstText')}</p>
              </Card>
              <Card className="p-4">
                <p className="font-semibold text-emerald-900">{t('plan.orders.madinah-first')}</p>
                <p className="mt-1 text-sm text-ink-soft">{t('plan.madinahFirstText')}</p>
              </Card>
              <Card className="p-4">
                <p className="font-semibold text-emerald-900">{t('plan.directVsConnecting')}</p>
                <p className="mt-1 text-sm text-ink-soft">{t('plan.directVsConnectingText')}</p>
              </Card>
            </div>
          </div>
          <div>
            <SectionTitle>{t('plan.mapTitle')}</SectionTitle>
            <MiqatMap route={madinahFirst ? 'madinah' : 'air'} />
          </div>
        </section>

        <section className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            { icon: TrainFront, k: 'transport' },
            { icon: Building2, k: 'hotels' },
            { icon: Luggage, k: 'luggage' },
          ].map(({ icon: Icon, k }) => (
            <Card key={k} className="p-5">
              <Icon className="size-6 text-gold-500" aria-hidden />
              <h3 className="mt-2 font-display text-lg font-semibold text-emerald-900">{t(`plan.tips.${k}.title`)}</h3>
              <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm text-ink-soft">
                {(t(`plan.tips.${k}.items`, { returnObjects: true }) as string[]).map((x) => <li key={x}>{x}</li>)}
              </ul>
            </Card>
          ))}
        </section>

        <section className="mt-6 grid gap-4 sm:grid-cols-2">
          {['p-train-1', 'p-jed-airport-2'].map((id) => {
            const m = mediaById.get(id)
            return m ? <MediaCard key={id} item={m} /> : null
          })}
        </section>

        <section className="mt-12">
          <SectionTitle icon={<Info className="size-5" />}>{t('facts.title')}</SectionTitle>
          <Notice className="mb-4">{t('facts.intro')}</Notice>
          <div className="grid gap-4 md:grid-cols-2">{travelFacts.map((f) => <FactCard key={f.id} fact={f} />)}</div>
        </section>

        <div className="mt-10 flex justify-center">
          <ButtonLink to="/budget" variant="gold" className="px-6">{t('plan.toBudget')} <ArrowRight className="size-4" /></ButtonLink>
        </div>
      </div>
    </>
  )
}
