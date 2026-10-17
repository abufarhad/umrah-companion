import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { useEffect, useRef } from 'react'
import type { TourSite } from '../../content/types'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'

interface Props {
  sites: TourSite[]
  route: string[]
  active?: string
  visited: Record<string, boolean>
  onSelect: (id: string) => void
}

const COLORS: Record<TourSite['relation'], string> = {
  'umrah-rite': '#0b4f3f',
  'hajj-site': '#956f22',
  miqat: '#157d62',
  'mosque-visit': '#4b5751',
  historical: '#4b5751',
}

/**
 * Free interactive map: OpenStreetMap tiles via Leaflet — no API key, no
 * account, no billing. Tiles are © OpenStreetMap contributors (attribution
 * required, shown on the map). The dashed line shows visit order, not roads.
 */
export function OsmMap({ sites, route, active, visited, onSelect }: Props) {
  const { t, lang } = useLang()
  const el = useRef<HTMLDivElement>(null)
  const map = useRef<L.Map | null>(null)
  const layer = useRef<L.LayerGroup | null>(null)
  const pending = useRef<L.LatLngBounds | null>(null)

  /** Fit to the pending bounds once the container has a real size. */
  const fit = () => {
    const m = map.current
    if (!m || !pending.current || !el.current?.clientWidth || !el.current.clientHeight) return
    m.invalidateSize()
    m.fitBounds(pending.current, { padding: [30, 30] })
    pending.current = null
  }

  // Create the map once.
  useEffect(() => {
    if (!el.current || map.current) return
    map.current = L.map(el.current, { scrollWheelZoom: false, zoomControl: true })
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
    }).addTo(map.current)
    layer.current = L.layerGroup().addTo(map.current)
    // The map can mount inside an animating tab; re-measure whenever its box changes.
    const ro = new ResizeObserver(() => {
      map.current?.invalidateSize()
      fit()
    })
    ro.observe(el.current)
    return () => {
      ro.disconnect()
      map.current?.remove()
      map.current = null
    }
  }, [])

  // Fit to the city's places when they change.
  useEffect(() => {
    if (!map.current || !sites.length) return
    pending.current = L.latLngBounds(sites.map((s) => [s.lat, s.lng]))
    fit()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sites])

  // Markers, labels and route.
  useEffect(() => {
    const g = layer.current
    if (!g) return
    g.clearLayers()
    const pts = route.map((id) => sites.find((s) => s.id === id)).filter((s): s is TourSite => !!s)
    if (pts.length > 1) {
      L.polyline(pts.map((s) => [s.lat, s.lng]), { color: '#b98d32', weight: 4, dashArray: '8 8', opacity: 0.9 }).addTo(g)
    }
    for (const s of sites) {
      const order = route.indexOf(s.id)
      const isActive = s.id === active
      const color = visited[s.id] ? '#1f9a78' : COLORS[s.relation]
      const size = order >= 0 ? 28 : 20
      const icon = L.divIcon({
        className: '',
        iconSize: [size, size],
        iconAnchor: [size / 2, size / 2],
        html: `<div style="width:${size}px;height:${size}px;border-radius:9999px;background:${color};border:3px solid ${isActive ? '#d4ad55' : '#fff'};box-shadow:0 2px 6px rgb(0 0 0 / .35);display:grid;place-items:center;color:#fff;font:700 12px system-ui">${order >= 0 ? num(order + 1, lang) : ''}</div>`,
      })
      const m = L.marker([s.lat, s.lng], { icon, title: s.name[lang], keyboard: true, zIndexOffset: isActive ? 1000 : order >= 0 ? 500 : 0 })
      m.bindTooltip(s.name[lang], { direction: 'top', offset: [0, -size / 2], permanent: isActive })
      m.on('click', () => onSelect(s.id))
      m.addTo(g)
    }
    const a = sites.find((s) => s.id === active)
    if (a && map.current && !pending.current) map.current.panTo([a.lat, a.lng])
  }, [sites, route, active, visited, lang, onSelect])

  return (
    <figure className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card">
      <div ref={el} className="relative z-0 aspect-[3/2] w-full bg-sand-100" role="application" aria-label={t('tour.mapLabel')} />
      <figcaption className="border-t border-sand-200 px-3 py-2 text-[11px] text-ink-muted">{t('tour.osmNote')}</figcaption>
    </figure>
  )
}
