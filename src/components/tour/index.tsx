import { CheckCircle2, Circle, ExternalLink, Navigation } from 'lucide-react'
import type { SiteRelation, TourSite } from '../../content/types'
import { useLang } from '../../i18n'
import { directionsUrl, placeUrl, type TravelMode } from '../../lib/maps'
import { Badge } from '../ui'

const relTone: Record<SiteRelation, 'emerald' | 'gold' | 'blue' | 'gray' | 'sand'> = {
  'umrah-rite': 'emerald',
  'hajj-site': 'gold',
  miqat: 'blue',
  'mosque-visit': 'sand',
  historical: 'gray',
}

export function RelationBadge({ r }: { r: SiteRelation }) {
  const { t } = useLang()
  return <Badge tone={relTone[r]}>{t(`tour.relation.${r}`)}</Badge>
}

export function StatusBadge({ s }: { s: TourSite['visitor']['status'] }) {
  const { t } = useLang()
  return <Badge tone={s === 'verified' ? 'emerald' : s === 'partial' ? 'gold' : 'red'}>{t(`tour.status.${s}`)}</Badge>
}

/** Google Maps actions: open the place, or get directions with the chosen travel mode. */
export function MapLinks({ site, mode = 'driving', compact = false }: { site: TourSite; mode?: TravelMode; compact?: boolean }) {
  const { t } = useLang()
  const cls = 'inline-flex min-h-10 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold'
  return (
    <div className="flex flex-wrap gap-2">
      <a href={directionsUrl(site, mode)} target="_blank" rel="noopener noreferrer" className={`${cls} bg-emerald-800 text-white hover:bg-emerald-700`}>
        <Navigation className="size-4" aria-hidden /> {t('tour.directions')}
      </a>
      {!compact && (
        <a href={placeUrl(site, site.name.en)} target="_blank" rel="noopener noreferrer" className={`${cls} bg-white text-emerald-900 ring-1 ring-sand-300 hover:bg-emerald-50`}>
          <ExternalLink className="size-4" aria-hidden /> {t('tour.openInMaps')}
        </a>
      )}
    </div>
  )
}

export function VisitedToggle({ done, onChange }: { done: boolean; onChange: (v: boolean) => void }) {
  const { t } = useLang()
  return (
    <button type="button" aria-pressed={done} onClick={() => onChange(!done)} className={`inline-flex min-h-10 items-center gap-1.5 rounded-xl px-3 text-sm font-semibold ${done ? 'bg-emerald-50 text-emerald-800' : 'bg-sand-100 text-ink-soft'}`}>
      {done ? <CheckCircle2 className="size-4" /> : <Circle className="size-4" />} {done ? t('tour.visited') : t('tour.markVisited')}
    </button>
  )
}
