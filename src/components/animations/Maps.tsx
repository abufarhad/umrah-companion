import { motion, useReducedMotion } from 'motion/react'
import { places } from '../../content/travel'
import { useLang } from '../../i18n'

/*
 * Illustrative maps. These are schematic, NOT navigation maps and not
 * bookable itineraries; coordinates are approximate.
 */

const W = 460
const H = 520
const LON = [37.8, 41.2] as const
const LAT = [25.2, 19.9] as const
const px = (lon: number, lat: number) => [((lon - LON[0]) / (LON[1] - LON[0])) * W, ((LAT[0] - lat) / (LAT[0] - LAT[1])) * H] as const

const coast: [number, number][] = [
  [37.8, 24.6],
  [38.06, 24.09],
  [38.6, 23.6],
  [39.03, 22.8],
  [39.1, 22.4],
  [39.17, 21.5],
  [39.6, 20.9],
  [40.27, 20.15],
  [40.6, 19.9],
]

const place = (id: string) => places.find((p) => p.id === id)!

export function MiqatMap({ route = 'air' }: { route?: 'air' | 'madinah' }) {
  const { t, lang } = useLang()
  const reduce = useReducedMotion()
  const sea = `M 0 0 ${coast.map(([lon, lat]) => `L ${px(lon, lat).join(' ')}`).join(' ')} L 0 ${H} Z`
  // Approximate Miqat ring around Makkah (illustrative).
  const ring = ['dhul-hulayfah', 'dhat-irq', 'qarn', 'yalamlam', 'juhfah']
    .map((id) => px(place(id).lon, place(id).lat))
    .map(([x, y], i) => `${i === 0 ? 'M' : 'L'} ${x} ${y}`)
    .join(' ')
  const [mx, my] = px(place('makkah').lon, place('makkah').lat)
  const [jx, jy] = px(place('jed').lon, place('jed').lat)
  const [dx, dy] = px(place('dhul-hulayfah').lon, place('dhul-hulayfah').lat)
  const [mdx, mdy] = px(place('madinah').lon, place('madinah').lat)
  // Flight from the east: enters the frame on the right, crosses the Miqat line, lands at Jeddah.
  const flight = { x: [W + 10, 380, 280, jx], y: [120, 190, 250, jy] }
  const crossing = px(40.35, 21.55)

  return (
    <figure className="overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={t(route === 'air' ? 'maps.miqatAirLabel' : 'maps.miqatMadinahLabel')} className="block w-full bg-sand-50">
        <path d={sea} fill="#d6ebf2" />
        <text x={40} y={H - 90} fontSize="13" fill="#4f7f90" fontStyle="italic">{t('maps.redSea')}</text>
        <path d={`${ring} Z`} fill="#1f9a78" fillOpacity={0.07} stroke="#157d62" strokeWidth={2} strokeDasharray="7 6" />
        <text x={px(40.5, 22.6)[0]} y={px(40.5, 22.6)[1]} fontSize="11" fill="#0f6650" fontWeight="600" textAnchor="middle">
          {t('maps.miqatBoundary')}
        </text>
        {/* Route Madinah → Makkah */}
        {route === 'madinah' && (
          <>
            <path d={`M ${mdx} ${mdy} L ${dx} ${dy} Q ${dx - 40} ${(dy + my) / 2} ${mx} ${my}`} fill="none" stroke="#b98d32" strokeWidth={3} strokeDasharray="2 6" strokeLinecap="round" />
            {!reduce && (
              <motion.circle r={7} fill="#d4ad55" stroke="#fff" strokeWidth={2} animate={{ cx: [mdx, dx, dx - 30, mx], cy: [mdy, dy, (dy + my) / 2, my] }} transition={{ duration: 7, repeat: Infinity, repeatDelay: 1, times: [0, 0.15, 0.6, 1] }} />
            )}
            <g>
              <circle cx={dx} cy={dy} r={14} fill="none" stroke="#b98d32" strokeWidth={2} />
              <text x={dx + 18} y={dy + 22} fontSize="11" fill="#956f22" fontWeight="700">{t('maps.enterIhramHere')}</text>
            </g>
          </>
        )}
        {/* Route by air from Bangladesh */}
        {route === 'air' && (
          <>
            <path d={`M ${W + 10} 120 L 380 190 L 280 250 L ${jx} ${jy}`} fill="none" stroke="#b98d32" strokeWidth={2.5} strokeDasharray="6 6" />
            <g>
              <circle cx={crossing[0]} cy={crossing[1]} r={14} fill="none" stroke="#b98d32" strokeWidth={2} />
              <text x={crossing[0] - 6} y={crossing[1] - 22} fontSize="11" fill="#956f22" fontWeight="700" textAnchor="middle">{t('maps.ihramBeforeHere')}</text>
            </g>
            {!reduce && (
              <motion.g animate={{ x: flight.x, y: flight.y }} transition={{ duration: 6, repeat: Infinity, repeatDelay: 1.2, ease: 'easeInOut' }}>
                <path d="M -10 0 L 10 0 M 0 -8 L 4 0 L 0 8 M -8 -4 L -6 0 L -8 4" stroke="#0b4f3f" strokeWidth={3} strokeLinecap="round" fill="none" transform="rotate(200)" />
              </motion.g>
            )}
            <text x={W - 10} y={104} fontSize="11" fill="#4b5751" textAnchor="end">{t('maps.fromBangladesh')}</text>
          </>
        )}
        {/* Places */}
        {places.map((p) => {
          const [x, y] = px(p.lon, p.lat)
          const color = p.kind === 'miqat' ? '#157d62' : p.kind === 'airport' ? '#4b5751' : '#956f22'
          return (
            <g key={p.id}>
              {p.kind === 'haram' ? <rect x={x - 6} y={y - 6} width={12} height={12} fill="#1d2622" stroke="#d4ad55" strokeWidth={2} /> : <circle cx={x} cy={y} r={p.kind === 'airport' ? 5 : 6} fill={color} stroke="#fff" strokeWidth={2} />}
              <text x={x + 10} y={y + 4} fontSize={p.kind === 'haram' ? 14 : 11} fontWeight={p.kind === 'haram' ? 700 : 500} fill={p.id === 'jed' ? '#b91c1c' : '#1d2622'}>
                {p.name[lang]}
              </text>
            </g>
          )
        })}
      </svg>
      <figcaption className="border-t border-sand-200 p-3 text-xs text-ink-muted">{t('maps.disclaimer')}</figcaption>
    </figure>
  )
}

/** Dhaka → Jeddah / Madinah schematic flight route. */
export function JourneyRoute({ arrival = 'JED', departure = 'dhaka' }: { arrival?: 'JED' | 'MED'; departure?: string }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const dac = [520, 150]
  const dest = arrival === 'JED' ? [90, 190] : [100, 120]
  const mid = [310, 40]
  const path = `M ${dac[0]} ${dac[1]} Q ${mid[0]} ${mid[1]} ${dest[0]} ${dest[1]}`
  return (
    <svg viewBox="0 0 600 260" role="img" aria-label={t('maps.journeyLabel')} className="block w-full">
      <rect width={600} height={260} rx={16} fill="#073d31" />
      <path d="M 40 60 Q 90 40 150 70 L 170 230 Q 120 250 60 220 Z" fill="#0f6650" opacity={0.6} />
      <path d="M 470 90 Q 520 70 570 110 L 560 230 Q 500 240 470 200 Z" fill="#0f6650" opacity={0.6} />
      <text x={110} y={245} fontSize="12" fill="#e3c77f" textAnchor="middle">{t('maps.saudi')}</text>
      <text x={520} y={245} fontSize="12" fill="#e3c77f" textAnchor="middle">{t('maps.bangladesh')}</text>
      <path d={path} fill="none" stroke="#e3c77f" strokeWidth={2.5} strokeDasharray="8 8" />
      {!reduce && (
        <motion.circle r={7} fill="#d4ad55" stroke="#fff" strokeWidth={2}
          animate={{ cx: [dac[0], 420, mid[0], 200, dest[0]], cy: [dac[1], 78, 58, 85, dest[1]] }}
          transition={{ duration: 5, repeat: Infinity, repeatDelay: 1, ease: 'easeInOut' }}
        />
      )}
      <circle cx={dac[0]} cy={dac[1]} r={6} fill="#fff" />
      <text x={dac[0]} y={dac[1] + 22} fontSize="13" fill="#fff" textAnchor="middle" fontWeight="600">{t(`cities.${departure}`)}</text>
      <circle cx={dest[0]} cy={dest[1]} r={6} fill="#fff" />
      <text x={dest[0] + 6} y={dest[1] - 12} fontSize="13" fill="#fff" fontWeight="600">{arrival === 'JED' ? t('maps.jeddah') : t('maps.madinah')}</text>
      <text x={mid[0]} y={130} fontSize="12" fill="#dcefe7" textAnchor="middle">{t('maps.flightTime')}</text>
    </svg>
  )
}
