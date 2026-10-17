import { motion, useReducedMotion } from 'motion/react'
import { useEffect, useMemo, useRef, useState } from 'react'
import type { TourSite } from '../../content/types'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { hasMapsKey, loadGoogleMaps, project } from '../../lib/maps'

const W = 640
const H = 420

interface MapProps {
  sites: TourSite[]
  /** ordered ids forming the user's route */
  route: string[]
  active?: string
  visited: Record<string, boolean>
  onSelect: (id: string) => void
}

/**
 * Keyless overview: markers placed from the sites' real coordinates
 * (equirectangular projection). Route lines are straight connectors showing
 * visit order only - not roads. Directions always open in Google Maps.
 */
export function SchematicMap({ sites, route, active, visited, onSelect }: MapProps) {
  const { t, lang } = useLang()
  const reduce = useReducedMotion()
  const proj = useMemo(() => project(sites, W, H, 46), [sites])
  const pts = route.map((id) => sites.find((s) => s.id === id)).filter((s) => !!s).map((s) => proj(s))
  const d = pts.map((p, i) => `${i ? 'L' : 'M'} ${p.x} ${p.y}`).join(' ')
  // Nudge labels of nearby pins apart vertically so close places (e.g. Arafat and Namirah) stay readable.
  const labelDy = useMemo(() => {
    const placed: { x: number; y: number }[] = []
    const out: Record<string, number> = {}
    for (const s of [...sites].sort((a, b) => proj(a).y - proj(b).y)) {
      const p = proj(s)
      let dy = 4
      while (placed.some((q) => Math.abs(q.x - p.x) < 150 && Math.abs(q.y - (p.y + dy)) < 14)) dy += 14
      placed.push({ x: p.x, y: p.y + dy })
      out[s.id] = dy
    }
    return out
  }, [sites, proj])
  return (
    <figure className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t('tour.mapLabel')} className="block w-full bg-[#f3efe4]">
        <defs>
          <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
            <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#e2d6bc" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width={W} height={H} fill="url(#grid)" />
        <text x={W - 16} y={24} textAnchor="end" fontSize="12" fill="#6d7872">{t('tawaf.north')}</text>
        {pts.length > 1 && (
          <motion.path key={route.join(',')} d={d} fill="none" stroke="#b98d32" strokeWidth={3} strokeDasharray="8 6" strokeLinecap="round" initial={reduce ? false : { pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.6, ease: 'easeInOut' }} />
        )}
        {sites.map((s) => {
          const p = proj(s)
          const order = route.indexOf(s.id)
          const isActive = s.id === active
          const fill = s.relation === 'umrah-rite' ? '#0b4f3f' : s.relation === 'hajj-site' ? '#956f22' : s.relation === 'miqat' ? '#157d62' : '#4b5751'
          return (
            <g key={s.id} transform={`translate(${p.x} ${p.y})`} className="cursor-pointer" onClick={() => onSelect(s.id)} role="button" tabIndex={0} aria-label={s.name[lang]} onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onSelect(s.id)}>
              {isActive && <motion.circle r={20} fill="none" stroke="#d4ad55" strokeWidth={3} initial={{ scale: 0.6, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} />}
              <circle r={order >= 0 ? 12 : 8} fill={visited[s.id] ? '#1f9a78' : fill} stroke="#fff" strokeWidth={3} />
              {order >= 0 && <text y={4} textAnchor="middle" fontSize="11" fontWeight={700} fill="#fff">{num(order + 1, lang)}</text>}
              {/* Labels near the right edge flip to the left of the pin so they stay visible. */}
              <text x={p.x > W * 0.6 ? -14 : 14} y={labelDy[s.id] ?? 4} textAnchor={p.x > W * 0.6 ? 'end' : 'start'} fontSize="12" fontWeight={isActive ? 700 : 500} fill="#1d2622" paintOrder="stroke" stroke="#f3efe4" strokeWidth={4}>{s.name[lang]}</text>
            </g>
          )
        })}
      </svg>
      <figcaption className="border-t border-sand-200 px-3 py-2 text-[11px] text-ink-muted">{t('tour.schematicNote')}</figcaption>
    </figure>
  )
}

type GMap = { setCenter: (p: unknown) => void; fitBounds: (b: unknown) => void; panTo: (p: unknown) => void }
type GMaps = Record<string, new (...a: unknown[]) => Record<string, (...a: unknown[]) => unknown>>

/** Interactive Google map (only when an API key is configured). */
export function GoogleMap({ sites, route, active, visited, onSelect }: MapProps) {
  const { t, lang } = useLang()
  const el = useRef<HTMLDivElement>(null)
  const map = useRef<GMap | null>(null)
  const markers = useRef<Record<string, Record<string, (...a: unknown[]) => unknown>>>({})
  const line = useRef<Record<string, (...a: unknown[]) => unknown> | null>(null)
  const g = useRef<GMaps | null>(null)
  const [failed, setFailed] = useState(false)

  useEffect(() => {
    let live = true
    loadGoogleMaps()
      .then((m) => {
        if (!live || !el.current) return
        g.current = m as GMaps
        map.current = new g.current.Map(el.current, { center: { lat: sites[0].lat, lng: sites[0].lng }, zoom: 12, mapTypeControl: false, streetViewControl: false }) as unknown as GMap
        const bounds = new g.current.LatLngBounds()
        for (const s of sites) {
          const mk = new g.current.Marker({ position: { lat: s.lat, lng: s.lng }, map: map.current, title: s.name[lang] })
          mk.addListener('click', () => onSelect(s.id))
          markers.current[s.id] = mk
          bounds.extend({ lat: s.lat, lng: s.lng })
        }
        map.current.fitBounds(bounds)
      })
      .catch(() => live && setFailed(true))
    return () => {
      live = false
      Object.values(markers.current).forEach((m) => m.setMap(null))
      markers.current = {}
    }
    // Recreate markers only when the city's sites change.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sites])

  useEffect(() => {
    for (const s of sites) {
      const m = markers.current[s.id]
      if (!m) continue
      const order = route.indexOf(s.id)
      m.setLabel(order >= 0 ? { text: String(order + 1), color: '#ffffff', fontWeight: '700' } : null)
      m.setOpacity(visited[s.id] ? 0.6 : 1)
      m.setTitle(s.name[lang])
    }
    line.current?.setMap(null)
    if (g.current && map.current && route.length > 1) {
      line.current = new g.current.Polyline({
        path: route.map((id) => sites.find((s) => s.id === id)).filter((s) => !!s).map((s) => ({ lat: s.lat, lng: s.lng })),
        geodesic: true,
        strokeColor: '#b98d32',
        strokeOpacity: 0,
        icons: [{ icon: { path: 'M 0,-1 0,1', strokeOpacity: 1, scale: 3 }, offset: '0', repeat: '14px' }],
        map: map.current,
      })
    }
    const a = sites.find((s) => s.id === active)
    if (a && map.current) map.current.panTo({ lat: a.lat, lng: a.lng })
  }, [route, visited, active, sites, lang])

  if (failed) return <SchematicMap sites={sites} route={route} active={active} visited={visited} onSelect={onSelect} />
  return (
    <figure className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card">
      <div ref={el} className="aspect-[3/2] w-full bg-sand-100" role="application" aria-label={t('tour.mapLabel')} />
      <figcaption className="border-t border-sand-200 px-3 py-2 text-[11px] text-ink-muted">{t('tour.googleNote')}</figcaption>
    </figure>
  )
}

export function TourMap(props: MapProps) {
  // Places inside another (Kaaba, Mas‘a, Zamzam inside Masjid al-Haram) share its pin.
  const pins = props.sites.filter((s) => !s.within)
  const map = (id?: string) => (id ? (props.sites.find((s) => s.id === id)?.within ?? id) : id)
  const route = props.route.map((id) => map(id)!).filter((id, i, a) => a.indexOf(id) === i)
  const p = { ...props, sites: pins, route, active: map(props.active) }
  return hasMapsKey ? <GoogleMap {...p} /> : <SchematicMap {...p} />
}
