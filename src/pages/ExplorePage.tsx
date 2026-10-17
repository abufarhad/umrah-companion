import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { AlertTriangle, ArrowDown, ArrowRight, ArrowUp, Info, ListPlus, Map as MapIcon, Navigation, Plus, Route, Trash2, X } from 'lucide-react'
import { useMemo, useState } from 'react'
import { Link } from 'react-router'
import { RelationBadge, VisitedToggle } from '../components/tour'
import { TourMap } from '../components/tour/Maps'
import { Button, Card, Notice, PageHeader, Segmented, cx } from '../components/ui'
import { mediaById } from '../content/media'
import { presets, sitesIn, siteById } from '../content/tour'
import type { SiteRelation } from '../content/types'
import { useLang } from '../i18n'
import { num } from '../lib/format'
import { MAX_WAYPOINTS, routeUrl, type TravelMode } from '../lib/maps'
import { useStore } from '../state/store'

type View = 'list' | 'map' | 'tour'
type Filter = 'all' | SiteRelation

export default function ExplorePage() {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const reduce = useReducedMotion()
  const tour = state.tour
  const [view, setView] = useState<View>('list')
  const [filter, setFilter] = useState<Filter>('all')
  const [active, setActive] = useState<string | undefined>()
  const sites = useMemo(() => sitesIn(tour.city), [tour.city])
  const shown = sites.filter((s) => filter === 'all' || s.relation === filter)
  // Only the selected sites of the current city form the route.
  const route = tour.selected.filter((id) => siteById.get(id)?.city === tour.city)
  const routeSites = route.map((id) => siteById.get(id)!)
  const url = routeUrl(routeSites, tour.mode)
  const minutes = routeSites.reduce((s, x) => s + (x.suggestMinutes ?? 0), 0)
  const relations = [...new Set(sites.map((s) => s.relation))]

  const setSelected = (ids: string[]) => dispatch({ type: 'tour', value: { selected: ids } })
  const toggle = (id: string) => setSelected(tour.selected.includes(id) ? tour.selected.filter((x) => x !== id) : [...tour.selected, id])
  const move = (id: string, d: -1 | 1) => {
    const ids = [...tour.selected]
    const i = ids.indexOf(id)
    const j = i + d
    if (i < 0 || j < 0 || j >= ids.length) return
    ;[ids[i], ids[j]] = [ids[j], ids[i]]
    setSelected(ids)
  }
  const setVisited = (id: string, v: boolean) => dispatch({ type: 'tour', value: { visited: { ...tour.visited, [id]: v } } })

  const list = (
    <ul className="grid gap-3">
      {shown.map((s, i) => {
        const img = mediaById.get(s.media[0])
        const inTour = tour.selected.includes(s.id)
        return (
          <motion.li key={s.id} initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.03 }}>
            <Card className={cx('flex gap-3 p-3 transition-shadow', active === s.id && 'ring-2 ring-gold-400')} onMouseEnter={() => setActive(s.id)}>
              {img?.src && <img src={img.src} alt="" loading="lazy" referrerPolicy="no-referrer" className="size-20 shrink-0 rounded-xl object-cover sm:size-24" />}
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-1.5">
                  <RelationBadge r={s.relation} />
                  {tour.visited[s.id] && <span className="text-xs font-semibold text-emerald-700">✓ {t('tour.visited')}</span>}
                </div>
                <Link to={`/explore/${s.id}`} className="mt-1 block font-semibold text-emerald-900 hover:underline">{s.name[lang]}</Link>
                <p className="line-clamp-2 text-sm text-ink-soft">{s.intro[lang]}</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <button type="button" onClick={() => toggle(s.id)} aria-pressed={inTour} className={cx('inline-flex min-h-9 items-center gap-1 rounded-lg px-2.5 text-sm font-semibold', inTour ? 'bg-gold-300/40 text-emerald-950' : 'bg-emerald-50 text-emerald-900')}>
                    {inTour ? <X className="size-4" /> : <Plus className="size-4" />} {inTour ? t('tour.removeFromTour') : t('tour.addToTour')}
                  </button>
                  <Link to={`/explore/${s.id}`} className="inline-flex min-h-9 items-center gap-1 rounded-lg px-2.5 text-sm font-semibold text-emerald-800 hover:bg-sand-100">{t('tour.details')} <ArrowRight className="size-4" /></Link>
                </div>
              </div>
            </Card>
          </motion.li>
        )
      })}
    </ul>
  )

  const planner = (
    <Card className="p-4">
      <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-emerald-900"><Route className="size-5 text-gold-500" /> {t('tour.myTour')}</h2>
      <p className="mt-1 text-sm text-ink-muted">{t('tour.myTourHint')}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {presets.filter((p) => p.city === tour.city).map((p) => (
          <button key={p.id} type="button" title={p.description[lang]} onClick={() => setSelected([...tour.selected.filter((id) => siteById.get(id)?.city !== tour.city), ...p.siteIds.filter((id) => siteById.has(id))])} className="inline-flex min-h-9 items-center gap-1 rounded-full bg-sand-100 px-3 text-sm font-medium hover:bg-sand-200">
            <ListPlus className="size-4" /> {p.title[lang]}
          </button>
        ))}
      </div>
      {routeSites.length === 0 ? (
        <p className="mt-4 rounded-xl bg-sand-50 p-3 text-sm text-ink-soft">{t('tour.empty')}</p>
      ) : (
        <ol className="mt-4 grid gap-2">
          <AnimatePresence initial={false}>
            {routeSites.map((s, i) => (
              <motion.li key={s.id} layout initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 10 }} className="flex items-center gap-2 rounded-xl bg-white p-2 ring-1 ring-sand-200">
                <span className={cx('grid size-8 shrink-0 place-items-center rounded-full text-sm font-bold', tour.visited[s.id] ? 'bg-emerald-600 text-white' : 'bg-gold-300 text-emerald-950')}>{num(i + 1, lang)}</span>
                <span className="min-w-0 flex-1">
                  <Link to={`/explore/${s.id}`} className="block truncate text-sm font-semibold text-emerald-900 hover:underline">{s.name[lang]}</Link>
                  {s.suggestMinutes ? <span className="text-xs text-ink-muted">{t('tour.onSite', { n: num(s.suggestMinutes, lang) })}</span> : null}
                </span>
                <button type="button" onClick={() => move(s.id, -1)} disabled={i === 0} className="grid size-8 place-items-center rounded-lg hover:bg-sand-100 disabled:opacity-30" aria-label={t('tour.moveUp')}><ArrowUp className="size-4" /></button>
                <button type="button" onClick={() => move(s.id, 1)} disabled={i === routeSites.length - 1} className="grid size-8 place-items-center rounded-lg hover:bg-sand-100 disabled:opacity-30" aria-label={t('tour.moveDown')}><ArrowDown className="size-4" /></button>
                <button type="button" onClick={() => toggle(s.id)} className="grid size-8 place-items-center rounded-lg text-red-700 hover:bg-red-50" aria-label={t('tour.removeFromTour')}><Trash2 className="size-4" /></button>
              </motion.li>
            ))}
          </AnimatePresence>
        </ol>
      )}
      {routeSites.length > 0 && (
        <div className="mt-4 grid gap-3">
          <Segmented<TravelMode> size="sm" label={t('tour.mode')} value={tour.mode} onChange={(m) => dispatch({ type: 'tour', value: { mode: m } })} options={[{ value: 'driving', label: t('tour.modes.driving') }, { value: 'walking', label: t('tour.modes.walking') }, { value: 'transit', label: t('tour.modes.transit') }]} />
          {minutes > 0 && <p className="text-sm text-ink-soft">{t('tour.totalOnSite', { n: num(Math.round(minutes / 6) / 10, lang, 1) })}</p>}
          {routeSites.length > MAX_WAYPOINTS + 1 && <Notice tone="gold" icon={<AlertTriangle className="size-4" />}>{t('tour.tooMany', { n: num(MAX_WAYPOINTS + 2, lang) })}</Notice>}
          {url && (
            <a href={url} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-800 px-4 font-semibold text-white hover:bg-emerald-700">
              <Navigation className="size-5" /> {t('tour.openRoute')}
            </a>
          )}
          <p className="text-xs text-ink-muted">{t('tour.routeNote')}</p>
          <div className="grid gap-1">
            <p className="text-sm font-semibold text-emerald-900">{t('tour.checklist')}</p>
            {routeSites.map((s) => (
              <div key={s.id} className="flex items-center justify-between gap-2 text-sm">
                <span className="truncate">{s.name[lang]}</span>
                <VisitedToggle done={!!tour.visited[s.id]} onChange={(v) => setVisited(s.id, v)} />
              </div>
            ))}
          </div>
          <Button variant="ghost" onClick={() => setSelected(tour.selected.filter((id) => siteById.get(id)?.city !== tour.city))}><Trash2 className="size-4" /> {t('tour.clear')}</Button>
        </div>
      )}
    </Card>
  )

  return (
    <>
      <PageHeader eyebrow={t('tour.eyebrow')} title={t('tour.title')} intro={<p>{t('tour.intro')}</p>}>
        <div className="mt-5 max-w-sm rounded-xl bg-white/95 p-1">
          <Segmented label={t('tour.city')} hideLabel value={tour.city} onChange={(c) => { dispatch({ type: 'tour', value: { city: c } }); setActive(undefined); setFilter('all') }} options={[{ value: 'makkah', label: t('places.makkah') }, { value: 'madinah', label: t('maps.madinah') }]} />
        </div>
      </PageHeader>
      <div className="mx-auto max-w-6xl px-4 py-6 pb-28">
        <Notice tone="emerald" icon={<Info className="size-5" />} className="mb-4">{t('tour.notRequired')}</Notice>
        <div role="group" aria-label={t('tour.filter')} className="-mx-4 mb-4 flex gap-2 overflow-x-auto px-4 pb-1">
          {(['all', ...relations] as Filter[]).map((f) => (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)} className={cx('min-h-9 shrink-0 rounded-full px-3 text-sm font-medium ring-1', filter === f ? 'bg-emerald-800 text-white ring-emerald-800' : 'bg-white text-ink-soft ring-sand-300')}>
              {f === 'all' ? t('common.all') : t(`tour.relation.${f}`)}
            </button>
          ))}
        </div>

        {sites.length === 0 ? (
          <Notice tone="gold">{t('tour.noSites')}</Notice>
        ) : (
          <>
            {/* Phones: one view at a time */}
            <div className="mb-4 lg:hidden">
              <Segmented label={t('tour.view')} hideLabel value={view} onChange={setView} options={[{ value: 'list', label: t('tour.views.list') }, { value: 'map', label: t('tour.views.map') }, { value: 'tour', label: `${t('tour.views.tour')}${route.length ? ` (${num(route.length, lang)})` : ''}` }]} />
            </div>
            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
              <div className={cx('grid content-start gap-4', view !== 'map' && 'max-lg:hidden')}>
                <TourMap sites={sites} route={route} active={active} visited={tour.visited} onSelect={setActive} />
                {active && siteById.get(active) && (
                  <Card className="flex items-center justify-between gap-3 p-3">
                    <span className="flex items-center gap-2 font-semibold text-emerald-900"><MapIcon className="size-4 text-gold-500" /> {siteById.get(active)!.name[lang]}</span>
                    <Link to={`/explore/${active}`} className="text-sm font-semibold text-emerald-800 hover:underline">{t('tour.details')} →</Link>
                  </Card>
                )}
                <div className="max-lg:hidden">{planner}</div>
              </div>
              <div className={cx(view !== 'list' && 'max-lg:hidden')}>{list}</div>
              <div className={cx('lg:hidden', view !== 'tour' && 'hidden')}>{planner}</div>
            </div>
          </>
        )}
      </div>
    </>
  )
}
