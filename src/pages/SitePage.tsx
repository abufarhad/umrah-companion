import { ArrowLeft, ArrowRight, BookOpen, Clock, Landmark, MapPin, Plus, X } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { AudioPlayer } from '../audio/Player'
import { siteNarrationTrack } from '../audio/tracks'
import { ClaimBadge, Sources, TimelineScrubber } from '../components/history'
import { HistoryScene } from '../components/history/Scenes'
import { MediaCard } from '../components/media'
import { ReferenceCard } from '../components/religious'
import { MapLinks, RelationBadge, StatusBadge, VisitedToggle } from '../components/tour'
import { TourMap } from '../components/tour/Maps'
import { ButtonLink, Card, Notice, cx } from '../components/ui'
import { guidePageById } from '../content/guidePages'
import { placeById } from '../content/history'
import { mediaById } from '../content/media'
import { getReference } from '../content/references'
import { siteById, sitesIn } from '../content/tour'
import { useLang } from '../i18n'
import { date, num } from '../lib/format'
import { useStore } from '../state/store'

type Tab = 'history' | 'gallery' | 'visit' | 'listen' | 'refs'

export default function SitePage() {
  const { siteId = '' } = useParams()
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const site = siteById.get(siteId)
  const [tab, setTab] = useState<Tab>('history')
  const [ev, setEv] = useState(0)
  useEffect(() => {
    setTab('history')
    setEv(0)
  }, [siteId])
  const narration = useMemo(() => (site ? siteNarrationTrack(site, lang) : null), [site, lang])
  if (!site || !narration) return <Navigate to="/explore" replace />

  const other = lang === 'bn' ? 'en' : 'bn'
  const media = site.media.map((m) => mediaById.get(m)).filter((m) => !!m)
  const hero = media[0]
  const refs = site.refs.map(getReference).filter((r) => !!r)
  const citySites = sitesIn(site.city)
  const i = citySites.indexOf(site)
  const prev = citySites[i - 1]
  const next = citySites[i + 1]
  const inTour = state.tour.selected.includes(site.id)
  const history = site.historyId ? placeById.get(site.historyId) : undefined
  const guide = site.guideId ? guidePageById.get(site.guideId) : undefined
  const tabs: Tab[] = ['history', 'gallery', 'visit', 'listen', ...(refs.length ? (['refs'] as Tab[]) : [])]

  return (
    <>
      <header className="relative overflow-hidden bg-emerald-950 text-white">
        {hero?.src && <img src={hero.src} alt={hero.alt[lang]} referrerPolicy="no-referrer" className="absolute inset-0 size-full object-cover opacity-45" />}
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-emerald-950/70 to-emerald-950/30" aria-hidden />
        <div className="relative mx-auto max-w-5xl px-4 pt-5 pb-8">
          <Link to="/explore" className="inline-flex items-center gap-1 text-sm text-emerald-100 hover:text-white"><ArrowLeft className="size-4" /> {t('tour.title')}</Link>
          <div className="mt-16 flex flex-wrap items-center gap-2 sm:mt-24">
            <RelationBadge r={site.relation} />
            <span className="text-sm text-emerald-100">{site.city === 'makkah' ? t('places.makkah') : t('maps.madinah')}</span>
          </div>
          <h1 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">{site.name[lang]}</h1>
          <p lang={other} className="text-emerald-100/80">{site.name[other]}</p>
          <p className="mt-3 max-w-3xl text-emerald-50/95">{site.intro[lang]}</p>
          <p className="mt-2 text-xs text-emerald-100/70">{t(`tour.relationNote.${site.relation}`)}</p>
          {hero?.credit && <p className="mt-3 text-[11px] text-emerald-100/60">{t('media.photoBy')} {hero.credit.author} · {hero.credit.license}</p>}
        </div>
      </header>

      <div className="mx-auto max-w-5xl px-4 py-6 pb-28">
        <div className="grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          <TourMap sites={citySites} route={[]} active={site.id} visited={state.tour.visited} onSelect={() => {}} />
          <Card className="grid content-start gap-3 p-4">
            <p className="flex items-center gap-2 text-sm text-ink-soft"><MapPin className="size-4 text-gold-500" /> {num(site.lat, lang, 5)}, {num(site.lng, lang, 5)} · <a href={site.coordSource.url} target="_blank" rel="noopener noreferrer" className="underline">{t('tour.coordSource')}</a></p>
            {site.suggestMinutes ? <p className="flex items-center gap-2 text-sm text-ink-soft"><Clock className="size-4 text-gold-500" /> {t('tour.suggestTime', { n: num(site.suggestMinutes, lang) })}</p> : null}
            <MapLinks site={site} mode={state.tour.mode} />
            <div className="flex flex-wrap gap-2">
              <button type="button" aria-pressed={inTour} onClick={() => dispatch({ type: 'tour', value: { selected: inTour ? state.tour.selected.filter((x) => x !== site.id) : [...state.tour.selected, site.id], city: site.city } })} className="inline-flex min-h-10 items-center gap-1.5 rounded-xl bg-gold-300/40 px-3 text-sm font-semibold text-emerald-950">
                {inTour ? <X className="size-4" /> : <Plus className="size-4" />} {inTour ? t('tour.removeFromTour') : t('tour.addToTour')}
              </button>
              <VisitedToggle done={!!state.tour.visited[site.id]} onChange={(v) => dispatch({ type: 'tour', value: { visited: { ...state.tour.visited, [site.id]: v } } })} />
            </div>
            {(history || guide) && (
              <div className="flex flex-wrap gap-2 border-t border-sand-100 pt-3">
                {history && <ButtonLink to={`/history/${history.id}`} variant="outline"><Landmark className="size-4" /> {history.title[lang]}</ButtonLink>}
                {guide && <ButtonLink to={`/guide/${guide.id}`} variant="outline"><BookOpen className="size-4" /> {guide.title[lang]}</ButtonLink>}
              </div>
            )}
          </Card>
        </div>

        <div role="tablist" aria-label={t('guide.sections')} className="no-print -mx-4 mt-6 mb-4 flex gap-1 overflow-x-auto px-4 pb-1">
          {tabs.map((k) => (
            <button key={k} role="tab" type="button" aria-selected={tab === k} onClick={() => setTab(k)} className={cx('min-h-10 shrink-0 rounded-full px-4 text-sm font-semibold', tab === k ? 'bg-emerald-800 text-white' : 'bg-white text-ink-soft ring-1 ring-sand-200')}>
              {t(`tour.tabs.${k}`)}
            </button>
          ))}
        </div>

        {tab === 'history' && (
          <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
            {site.timeline.length > 0 && <TimelineScrubber events={site.timeline} index={Math.min(ev, site.timeline.length - 1)} onChange={setEv} />}
            <div className="grid content-start gap-4">
              {site.scene ? <HistoryScene scene={site.scene.id} stage={site.scene.stage} /> : media[1] ? <MediaCard item={media[1]} /> : null}
              <ul className="grid gap-2">
                {site.timeline.map((e) => (
                  <li key={e.id} className="rounded-xl bg-white p-3 text-sm ring-1 ring-sand-200">
                    <div className="flex flex-wrap items-center gap-2"><span className="font-semibold text-gold-600">{e.when[lang]}</span><ClaimBadge kind={e.kind} /></div>
                    <p className="mt-1 font-semibold text-emerald-900">{e.title[lang]}</p>
                    <Sources sources={e.sources} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        {tab === 'gallery' && <div className="grid gap-4 sm:grid-cols-2">{media.map((m) => <MediaCard key={m.id} item={m} />)}</div>}
        {tab === 'visit' && (
          <Card className="p-5">
            <div className="flex flex-wrap items-center gap-2"><StatusBadge s={site.visitor.status} /><span className="text-xs text-ink-muted">{t('facts.checked', { date: date(site.visitor.checked, lang) })}</span></div>
            <p className="mt-3 text-ink">{site.visitor.text[lang]}</p>
            <Sources sources={site.visitor.sources} />
            {site.visitor.status !== 'verified' && <Notice tone="gold" className="mt-4">{t('tour.unverifiedNote')}</Notice>}
            <p className="mt-4 text-xs text-ink-muted">{t('tour.separateNote')}</p>
          </Card>
        )}
        {tab === 'listen' && <AudioPlayer track={narration} />}
        {tab === 'refs' && <div className="grid gap-4">{refs.map((r) => <ReferenceCard key={r.id} r={r} compact />)}</div>}

        <nav className="mt-10 grid grid-cols-2 gap-2" aria-label={t('tour.morePlaces')}>
          {prev ? <ButtonLink to={`/explore/${prev.id}`} variant="outline" className="justify-start"><ArrowLeft className="size-4 shrink-0" /><span className="truncate">{prev.name[lang]}</span></ButtonLink> : <span />}
          {next ? <ButtonLink to={`/explore/${next.id}`} variant="outline" className="justify-end"><span className="truncate">{next.name[lang]}</span><ArrowRight className="size-4 shrink-0" /></ButtonLink> : <span />}
        </nav>
      </div>
    </>
  )
}
