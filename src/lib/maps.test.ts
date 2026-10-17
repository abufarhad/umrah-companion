import { describe, expect, it } from 'vitest'
import { directionsUrl, project, routeUrl } from './maps'

describe('google maps urls', () => {
  it('builds directions to a place', () => {
    expect(directionsUrl({ lat: 21.4225, lng: 39.8262 }, 'walking')).toBe('https://www.google.com/maps/dir/?api=1&destination=21.4225%2C39.8262&travelmode=walking')
  })
  it('builds a multi-stop route in order', () => {
    const u = new URL(routeUrl([{ lat: 1, lng: 2 }, { lat: 3, lng: 4 }, { lat: 5, lng: 6 }], 'driving')!)
    expect(u.searchParams.get('origin')).toBe('1,2')
    expect(u.searchParams.get('waypoints')).toBe('3,4')
    expect(u.searchParams.get('destination')).toBe('5,6')
    expect(u.searchParams.get('travelmode')).toBe('driving')
  })
  it('caps waypoints at nine', () => {
    const stops = Array.from({ length: 14 }, (_, i) => ({ lat: i, lng: i }))
    const u = new URL(routeUrl(stops)!)
    expect(u.searchParams.get('waypoints')!.split('|')).toHaveLength(9)
  })
  it('returns null with no stops', () => expect(routeUrl([])).toBeNull())
  it('projects points inside the box with north up', () => {
    const p = project([{ lat: 21.4, lng: 39.8 }, { lat: 21.5, lng: 39.9 }], 400, 300)
    const a = p({ lat: 21.4, lng: 39.8 })
    const b = p({ lat: 21.5, lng: 39.9 })
    expect(b.y).toBeLessThan(a.y)
    expect(b.x).toBeGreaterThan(a.x)
    for (const q of [a, b]) {
      expect(q.x).toBeGreaterThanOrEqual(0)
      expect(q.x).toBeLessThanOrEqual(400)
    }
  })
})
