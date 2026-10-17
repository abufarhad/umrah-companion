import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useState } from 'react'
import { HARAM_STAGES } from '../../content/history/stages'
import type { SceneId } from '../../content/types'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { MiqatMap } from '../animations/Maps'

/*
 * Symbolic, schematic illustrations for the history pages.
 * - No people, prophets or angels are depicted; Hajar's journey is a moving light.
 * - Ancient stages show only outlines: no invented architectural detail.
 * - Sizes are relative, not to scale.
 */

const W = 600
const H = 340

function Frame({ children, label }: { children: React.ReactNode; label: string }) {
  const { t } = useLang()
  return (
    <figure className="overflow-hidden rounded-2xl border border-sand-200 bg-gradient-to-b from-sand-50 to-sand-100 shadow-card">
      <svg viewBox={`0 0 ${W} ${H}`} role="img" aria-label={label} className="block w-full">
        {children}
      </svg>
      <figcaption className="border-t border-sand-200 px-3 py-2 text-[11px] text-ink-muted">{t('history.schematic')}</figcaption>
    </figure>
  )
}

/** Mountains framing the valley of Makkah (symbolic). */
function Valley({ opacity = 1 }: { opacity?: number }) {
  return (
    <g opacity={opacity}>
      <path d={`M0 ${H} L0 170 Q60 110 120 160 Q170 90 230 150 L260 ${H} Z`} fill="#e2d1b0" />
      <path d={`M${W} ${H} L${W} 160 Q540 100 480 150 Q430 80 370 150 L340 ${H} Z`} fill="#e2d1b0" />
      <path d={`M0 ${H} L0 230 Q120 190 200 240 L${W / 2} ${H} Z`} fill="#d7c29b" />
      <path d={`M${W} ${H} L${W} 220 Q480 190 400 240 L${W / 2} ${H} Z`} fill="#d7c29b" />
      <rect x={0} y={H - 40} width={W} height={40} fill="#efe4cf" />
    </g>
  )
}

/* ------------------------------------------------------------------ */

function KaabaScene({ stage }: { stage: string }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const order = ['valley', 'foundations', 'walls', 'house', 'purified', 'rebuilt', 'today']
  const k = Math.max(0, order.indexOf(stage))
  const cx = W / 2
  const base = H - 40
  const wallH = k >= 2 ? 120 : 0
  return (
    <Frame label={t(`history.scene.kaaba.${order[k]}`)}>
      <Valley opacity={k >= 6 ? 0.35 : 1} />
      {k >= 6 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {/* Today: Mataf and the mosque around it (relative). */}
          <ellipse cx={cx} cy={base} rx={250} ry={34} fill="#fcfaf5" stroke="#e2d1b0" />
          <ellipse cx={cx} cy={base} rx={170} ry={22} fill="#ffffff" stroke="#efe4cf" />
          {[-230, -170, 170, 230].map((x) => (
            <rect key={x} x={cx + x - 6} y={base - 150} width={12} height={150} fill="#e2d1b0" rx={3} />
          ))}
        </motion.g>
      )}
      {/* Foundations (outline only). The Hijr side is shown as part of Ibrahim's foundations per Sahih al-Bukhari 1586. */}
      {k >= 1 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: reduce ? 0 : 0.6 }}>
          <rect x={cx - 70} y={base - 6} width={140} height={10} fill="none" stroke="#956f22" strokeWidth={3} strokeDasharray="8 6" />
          {k <= 3 && <text x={cx} y={base + 26} textAnchor="middle" fontSize="12" fill="#956f22" fontWeight={600}>{t('history.label.foundations')}</text>}
        </motion.g>
      )}
      {k >= 2 && (
        <motion.rect
          x={cx - 70}
          width={140}
          fill={k >= 3 ? '#1d2622' : '#b99b6b'}
          initial={{ height: 0, y: base }}
          animate={{ height: wallH, y: base - wallH }}
          transition={{ duration: reduce ? 0 : 1.4, ease: 'easeOut' }}
        />
      )}
      {k >= 3 && <motion.rect x={cx - 70} y={base - 92} width={140} height={10} fill="#d4ad55" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} style={{ originX: `${cx}px` }} transition={{ duration: reduce ? 0 : 0.8, delay: reduce ? 0 : 0.4 }} />}
      {k === 4 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.7] }} transition={{ duration: 1.6 }}>
          {Array.from({ length: 10 }, (_, i) => (
            <line key={i} x1={cx} y1={base - 60} x2={cx + Math.cos((i / 10) * Math.PI * 2) * 160} y2={base - 60 + Math.sin((i / 10) * Math.PI * 2) * 110} stroke="#e3c77f" strokeWidth={2} strokeOpacity={0.6} />
          ))}
        </motion.g>
      )}
      {k === 5 && (
        <motion.g initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {[0, 1, 2, 3].map((i) => (
            <line key={i} x1={cx - 90} y1={base - 30 * i} x2={cx + 90} y2={base - 30 * i} stroke="#7a5c3e" strokeWidth={2} strokeDasharray="4 4" />
          ))}
          <text x={cx} y={base - 140} textAnchor="middle" fontSize="12" fill="#4b5751">{t('history.label.restoration')}</text>
        </motion.g>
      )}
    </Frame>
  )
}

/* ------------------------------------------------------------------ */

const SAFA = { x: 150, y: 220 }
const MARWAH = { x: 450, y: 220 }

function HajarScene({ stage }: { stage: string }) {
  const { t, lang } = useLang()
  const reduce = useReducedMotion()
  const [lap, setLap] = useState(0)
  useEffect(() => {
    if (stage !== 'run' || reduce) {
      setLap(stage === 'run' || stage === 'zamzam' || stage === 'today' ? 7 : 0)
      return
    }
    setLap(0)
    const id = window.setInterval(() => setLap((l) => (l >= 7 ? 7 : l + 1)), 1100)
    return () => window.clearInterval(id)
  }, [stage, reduce])
  const atMarwah = lap % 2 === 1
  const hill = (p: { x: number; y: number }, label: string) => (
    <g>
      <path d={`M${p.x - 60} 280 Q${p.x} 170 ${p.x + 60} 280 Z`} fill="#d7c29b" stroke="#b99b6b" />
      <text x={p.x} y={304} textAnchor="middle" fontSize="15" fontWeight={700} fill="#0b4f3f">{label}</text>
    </g>
  )
  return (
    <Frame label={t(`history.scene.hajar.${stage}`)}>
      {stage === 'today' ? (
        <g>
          <rect x={60} y={90} width={480} height={170} rx={16} fill="#fcfaf5" stroke="#e2d1b0" />
          {[110, 150, 190, 230].map((y) => <line key={y} x1={90} y1={y} x2={510} y2={y} stroke="#efe4cf" />)}
          <rect x={250} y={92} width={90} height={166} fill="#1f9a78" opacity={0.12} />
          <text x={W / 2} y={80} textAnchor="middle" fontSize="12" fill="#0f6650">{t('history.label.masa')}</text>
        </g>
      ) : (
        <Valley />
      )}
      {hill(SAFA, t('sai.safa'))}
      {hill(MARWAH, t('sai.marwah'))}
      {/* Path between the hills */}
      <line x1={SAFA.x + 40} y1={250} x2={MARWAH.x - 40} y2={250} stroke="#b98d32" strokeWidth={2} strokeDasharray="6 7" />
      {/* The light that marks the journey (no figure is depicted). */}
      {stage !== 'arrival' && (
        <motion.circle cy={240} r={9} fill="#d4ad55" stroke="#fff" strokeWidth={3} initial={false} animate={{ cx: atMarwah ? MARWAH.x - 40 : SAFA.x + 40 }} transition={{ duration: reduce ? 0 : 1, ease: 'easeInOut' }} />
      )}
      {stage === 'arrival' && (
        <motion.circle cx={300} cy={300} r={10} fill="#d4ad55" initial={{ opacity: 0 }} animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: reduce ? 0 : Infinity }} />
      )}
      {(stage === 'run' || stage === 'search') && (
        <text x={W / 2} y={40} textAnchor="middle" fontSize="16" fill="#956f22" fontWeight={700}>
          {t('history.label.journeys', { n: num(Math.min(lap, 7), lang) })}
        </text>
      )}
      {(stage === 'zamzam' || stage === 'today') && (
        <g>
          <motion.circle cx={300} cy={300} r={14} fill="#7cc4e8" initial={{ scale: 0 }} animate={{ scale: [0, 1.3, 1] }} transition={{ duration: reduce ? 0 : 1.2 }} />
          {!reduce && [0, 1, 2].map((i) => (
            <motion.circle key={i} cx={300} cy={300} r={14} fill="none" stroke="#7cc4e8" strokeWidth={2} animate={{ r: [14, 46], opacity: [0.8, 0] }} transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.7 }} />
          ))}
          <text x={300} y={334} textAnchor="middle" fontSize="12" fill="#0b4f3f" fontWeight={600}>{t('history.label.zamzam')}</text>
        </g>
      )}
    </Frame>
  )
}

/* ------------------------------------------------------------------ */

function ZamzamScene({ stage }: { stage: string }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  if (stage === 'today') {
    const steps = ['well', 'plant', 'storage', 'haram'] as const
    return (
      <Frame label={t('history.scene.zamzam.today')}>
        {steps.map((s, i) => {
          const x = 30 + i * 145
          return (
            <motion.g key={s} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduce ? 0 : i * 0.3 }}>
              <rect x={x} y={120} width={120} height={90} rx={14} fill="#fff" stroke="#1f9a78" strokeWidth={2} />
              <foreignObject x={x + 6} y={126} width={108} height={78}>
                <div className="flex h-full items-center justify-center text-center text-[12px] leading-snug font-semibold text-emerald-900">{t(`history.label.zz.${s}`)}</div>
              </foreignObject>
              {i < steps.length - 1 && (
                <motion.path d={`M ${x + 122} 165 L ${x + 143} 165`} stroke="#7cc4e8" strokeWidth={4} markerEnd="url(#zz-arrow)" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: reduce ? 0 : i * 0.3 + 0.2 }} />
              )}
            </motion.g>
          )
        })}
        <defs>
          <marker id="zz-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4" orient="auto"><path d="M0 0 L10 5 L0 10 z" fill="#7cc4e8" /></marker>
        </defs>
        <text x={W / 2} y={260} textAnchor="middle" fontSize="12" fill="#4b5751">{t('history.label.zz.note')}</text>
      </Frame>
    )
  }
  // Before today: the traditional story - water emerging in the valley.
  return <HajarScene stage="zamzam" />
}

/* ------------------------------------------------------------------ */

function HillsScene({ stage }: { stage: string }) {
  const { t } = useLang()
  const enclosed = stage !== 'then'
  return (
    <Frame label={t(enclosed ? 'history.scene.hills.now' : 'history.scene.hills.then')}>
      <AnimatePresence mode="wait">
        {enclosed ? (
          <motion.g key="now" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {[0, 1, 2].map((f) => (
              <rect key={f} x={40} y={230 - f * 60} width={520} height={50} rx={6} fill={f === 0 ? '#fcfaf5' : '#f7f1e6'} stroke="#e2d1b0" />
            ))}
            <text x={W / 2} y={50} textAnchor="middle" fontSize="13" fill="#0b4f3f" fontWeight={600}>{t('history.label.masaFloors')}</text>
            <path d="M40 280 Q90 230 140 280 Z" fill="#b99b6b" />
            <path d="M460 280 Q510 236 560 280 Z" fill="#b99b6b" />
          </motion.g>
        ) : (
          <motion.g key="then" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <Valley />
            <path d="M60 280 Q140 170 220 280 Z" fill="#d7c29b" stroke="#b99b6b" />
            <path d="M380 280 Q460 180 540 280 Z" fill="#d7c29b" stroke="#b99b6b" />
            <line x1={200} y1={276} x2={400} y2={276} stroke="#7a5c3e" strokeWidth={3} strokeDasharray="10 8" />
            <text x={W / 2} y={50} textAnchor="middle" fontSize="13" fill="#0b4f3f" fontWeight={600}>{t('history.label.openValley')}</text>
          </motion.g>
        )}
      </AnimatePresence>
      <text x={110} y={310} textAnchor="middle" fontSize="14" fontWeight={700} fill="#0b4f3f">{t('sai.safa')}</text>
      <text x={490} y={310} textAnchor="middle" fontSize="14" fontWeight={700} fill="#0b4f3f">{t('sai.marwah')}</text>
    </Frame>
  )
}

/* ------------------------------------------------------------------ */

/** Concentric growth: each documented expansion adds a ring (relative, not to scale). */
function GrowthScene({ stage, stages, center = 'kaaba' }: { stage: string; stages: string[]; center?: 'kaaba' | 'nabawi' }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const k = Math.max(0, stages.indexOf(stage))
  return (
    <Frame label={t('history.scene.growth')}>
      <rect width={W} height={H} fill="#fcfaf5" />
      {stages.map((s, i) =>
        i <= k && i > 0 ? (
          <motion.rect
            key={s}
            x={W / 2 - 40 - i * 32}
            y={H / 2 - 30 - i * 17}
            width={80 + i * 64}
            height={60 + i * 34}
            rx={8 + i * 2}
            fill="none"
            stroke={i === k ? '#b98d32' : '#b99b6b'}
            strokeWidth={i === k ? 3 : 1.5}
            strokeDasharray={i === k ? undefined : '5 5'}
            initial={reduce ? false : { opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ originX: `${W / 2}px`, originY: `${H / 2}px` }}
            transition={{ duration: 0.5 }}
          />
        ) : null,
      )}
      {center === 'kaaba' ? (
        <rect x={W / 2 - 14} y={H / 2 - 14} width={28} height={28} fill="#1d2622" stroke="#d4ad55" strokeWidth={2} />
      ) : (
        <g>
          <rect x={W / 2 - 22} y={H / 2 - 16} width={44} height={32} fill="#fff" stroke="#0f6650" strokeWidth={2} />
          <circle cx={W / 2 + 12} cy={H / 2 - 4} r={7} fill="#1f9a78" />
        </g>
      )}
      <text x={W / 2} y={H - 16} textAnchor="middle" fontSize="12" fill="#4b5751">{t('history.label.relative')}</text>
    </Frame>
  )
}

/* ------------------------------------------------------------------ */

function MadinahScene({ stage }: { stage: string }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  if (stage !== 'hijrah') return <GrowthScene stage={stage} stages={['m622', 'm629', 'm638', 'm707', 'm1849', 'm1955', 'm1994']} center="nabawi" />
  // Schematic Makkah → Madinah route (approximate; not the exact historical path).
  return (
    <Frame label={t('history.scene.hijrah')}>
      <Valley opacity={0.5} />
      <path d="M 150 290 C 220 220 260 180 300 150 S 400 70 450 60" fill="none" stroke="#b98d32" strokeWidth={3} strokeDasharray="4 8" strokeLinecap="round" />
      {!reduce && <motion.circle r={8} fill="#d4ad55" stroke="#fff" strokeWidth={2} animate={{ cx: [150, 230, 300, 380, 450], cy: [290, 210, 150, 95, 60] }} transition={{ duration: 6, repeat: Infinity, repeatDelay: 1 }} />}
      <rect x={140} y={280} width={20} height={20} fill="#1d2622" stroke="#d4ad55" strokeWidth={2} />
      <text x={170} y={318} fontSize="14" fontWeight={700} fill="#0b4f3f">{t('places.makkah')}</text>
      <circle cx={450} cy={60} r={10} fill="#1f9a78" />
      <text x={470} y={66} fontSize="14" fontWeight={700} fill="#0b4f3f">{t('maps.madinah')}</text>
      <text x={W / 2} y={30} textAnchor="middle" fontSize="12" fill="#4b5751">{t('history.label.hijrahRoute')}</text>
    </Frame>
  )
}


export function HistoryScene({ scene, stage }: { scene: SceneId; stage: string }) {
  switch (scene) {
    case 'kaaba':
      return <KaabaScene stage={stage} />
    case 'hajar':
      return <HajarScene stage={stage} />
    case 'zamzam':
      return <ZamzamScene stage={stage} />
    case 'hills':
      return <HillsScene stage={stage} />
    case 'haram':
      return <GrowthScene stage={stage} stages={HARAM_STAGES} />
    case 'miqat':
      return <MiqatMap route={stage === 'madinah' ? 'madinah' : 'air'} />
    case 'madinah':
      return <MadinahScene stage={stage} />
  }
}
