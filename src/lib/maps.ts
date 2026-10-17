/**
 * Google Maps helpers.
 *
 * Without an API key the app uses only Google Maps URLs (free, no key) to
 * open places and turn-by-turn directions in the Google Maps app/website.
 * With VITE_GOOGLE_MAPS_API_KEY set, an interactive map (Maps JavaScript API)
 * is shown. Routes are always computed by Google - this app never invents
 * road routes, distances or travel times.
 */

export interface LatLng {
  lat: number
  lng: number
}

export type TravelMode = 'driving' | 'walking' | 'transit'

export const MAPS_KEY = (import.meta.env.VITE_GOOGLE_MAPS_API_KEY as string | undefined) || ''
export const hasMapsKey = MAPS_KEY.length > 0

const ll = (p: LatLng) => `${p.lat},${p.lng}`

/** Open a place in Google Maps (app on phones, website on desktop). */
export function placeUrl(p: LatLng, name?: string): string {
  const q = name ? `${name}` : ll(p)
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(name ? `${q} ${ll(p)}` : q)}`
}

/** Directions to one place from the user's current location. */
export function directionsUrl(to: LatLng, mode: TravelMode = 'driving'): string {
  return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ll(to))}&travelmode=${mode}`
}

/**
 * Multi-stop route in the order given. Google computes the real route.
 * Google Maps URLs accept up to 9 waypoints; extra stops are dropped (the UI warns).
 */
export function routeUrl(stops: LatLng[], mode: TravelMode = 'driving'): string | null {
  if (stops.length === 0) return null
  if (stops.length === 1) return directionsUrl(stops[0], mode)
  const [origin, ...rest] = stops
  const destination = rest[rest.length - 1]
  const waypoints = rest.slice(0, -1).slice(0, 9)
  const params = new URLSearchParams({ api: '1', origin: ll(origin), destination: ll(destination), travelmode: mode })
  if (waypoints.length) params.set('waypoints', waypoints.map(ll).join('|'))
  return `https://www.google.com/maps/dir/?${params.toString()}`
}

export const MAX_WAYPOINTS = 9

/** Equirectangular projection into a box - used by the keyless schematic overview map. */
export function project(points: LatLng[], width: number, height: number, pad = 40) {
  const lats = points.map((p) => p.lat)
  const lngs = points.map((p) => p.lng)
  const [minLat, maxLat] = [Math.min(...lats), Math.max(...lats)]
  const [minLng, maxLng] = [Math.min(...lngs), Math.max(...lngs)]
  const kx = Math.cos(((minLat + maxLat) / 2) * (Math.PI / 180))
  const spanX = Math.max(1e-6, (maxLng - minLng) * kx)
  const spanY = Math.max(1e-6, maxLat - minLat)
  const scale = Math.min((width - pad * 2) / spanX, (height - pad * 2) / spanY)
  const ox = (width - spanX * scale) / 2
  const oy = (height - spanY * scale) / 2
  return (p: LatLng) => ({ x: ox + (p.lng - minLng) * kx * scale, y: oy + (maxLat - p.lat) * scale })
}

/* ---------- Maps JavaScript API loader (only with a key) ---------- */

let loader: Promise<unknown> | null = null

export function loadGoogleMaps(): Promise<unknown> {
  if (!hasMapsKey) return Promise.reject(new Error('no-key'))
  const w = window as unknown as { google?: { maps?: unknown } }
  if (w.google?.maps) return Promise.resolve(w.google.maps)
  loader ??= new Promise((resolve, reject) => {
    const cb = `__gmapsReady${Date.now()}`
    ;(window as unknown as Record<string, unknown>)[cb] = () => resolve((window as unknown as { google: { maps: unknown } }).google.maps)
    const s = document.createElement('script')
    s.src = `https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(MAPS_KEY)}&v=weekly&callback=${cb}`
    s.async = true
    s.onerror = () => {
      loader = null
      reject(new Error('load-failed'))
    }
    document.head.appendChild(s)
  })
  return loader
}
