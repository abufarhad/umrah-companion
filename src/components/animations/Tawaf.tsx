import { motion, useAnimationFrame, useMotionValue, useReducedMotion, useTransform } from 'motion/react'
import { Minus, Plus, RotateCcw } from 'lucide-react'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { TAWAF_CIRCUITS, tawafInfo } from '../../lib/ritualProgress'
import { useStore } from '../../state/store'
import { Badge, Button, cx } from '../ui'
import { TutorialPlayer, type TutorialStep } from './TutorialPlayer'

/*
 * Overhead view, north up. The Kaaba's corners point roughly to the cardinal
 * directions: Black Stone (east), Iraqi (north), Shami (west), Yemeni (south).
 * The door and Maqam Ibrahim face north-east; the Hijr is on the north-west side.
 * Tawaf runs anticlockwise with the Kaaba on the pilgrim's left.
 */
const C = 200
const R = 128
const corner = { E: [250, 200], N: [200, 150], W: [150, 200], S: [200, 250] } as const

/** Point on the Tawaf circle; θ in radians, anticlockwise from east. */
const at = (θ: number, r = R) => [C + r * Math.cos(θ), C - r * Math.sin(θ)] as const

export type TawafHighlight = 'none' | 'start' | 'direction' | 'hijr' | 'yemeni' | 'dua' | 'end' | 'maqam'

export function TawafScene({ highlight = 'none', circuit = 0, moving = true, label }: { highlight?: TawafHighlight; circuit?: number; moving?: boolean; label: string }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const theta = useMotionValue(0.02)
  useAnimationFrame((_, delta) => {
    if (!moving || reduce) return
    // One lap every 9 s.
    theta.set((theta.get() + (delta / 9000) * Math.PI * 2) % (Math.PI * 2))
  })
  const cxv = useTransform(theta, (v) => at(v)[0])
  const cyv = useTransform(theta, (v) => at(v)[1])

  const hl = (k: TawafHighlight) => highlight === k
  // Arc from Yemeni corner (south, θ=-90°) to Black Stone (east, θ=0), for the Rabbana dua.
  const duaArc = `M ${at(-Math.PI / 2, R)[0]} ${at(-Math.PI / 2, R)[1]} A ${R} ${R} 0 0 1 ${at(0, R)[0]} ${at(0, R)[1]}`

  return (
    <svg viewBox="0 0 400 400" role="img" aria-label={label} className="mx-auto block w-full max-w-md">
      <defs>
        <radialGradient id="mataf" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="100%" stopColor="#efe4cf" />
        </radialGradient>
        <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M0 0 L10 5 L0 10 z" fill="#b98d32" />
        </marker>
      </defs>
      <circle cx={C} cy={C} r={185} fill="url(#mataf)" stroke="#e2d1b0" />
      {/* Compass */}
      <g fontSize="11" fill="#6d7872" textAnchor="middle">
        <text x={C} y={24}>{t('tawaf.north')}</text>
      </g>
      {/* Tawaf path with direction arrows (anticlockwise) */}
      <circle cx={C} cy={C} r={R} fill="none" stroke={hl('direction') ? '#b98d32' : '#d4ad55'} strokeOpacity={hl('direction') ? 1 : 0.55} strokeWidth={hl('direction') ? 4 : 2} strokeDasharray="6 8" />
      {[Math.PI * 0.25, Math.PI * 0.75, Math.PI * 1.25, Math.PI * 1.75].map((a) => {
        const [x1, y1] = at(a - 0.12)
        const [x2, y2] = at(a + 0.12)
        return <path key={a} d={`M ${x1} ${y1} A ${R} ${R} 0 0 0 ${x2} ${y2}`} fill="none" stroke="#b98d32" strokeWidth={3} markerEnd="url(#arrow)" />
      })}
      {/* Rabbana stretch */}
      <path d={duaArc} fill="none" stroke="#1f9a78" strokeWidth={hl('dua') ? 10 : 0} strokeOpacity={0.35} strokeLinecap="round" />
      {/* Start / end line from Black Stone */}
      <line x1={corner.E[0]} y1={C} x2={C + 190} y2={C} stroke="#157d62" strokeWidth={hl('start') || hl('end') ? 4 : 2} strokeDasharray={hl('start') || hl('end') ? undefined : '3 4'} />
      <text x={C + 160} y={C - 8} fontSize="10" fill="#0b4f3f" textAnchor="middle">{t('tawaf.startLine')}</text>
      {/* Hijr Isma'il (semicircle on NW face) */}
      <path d={`M ${corner.N[0]} ${corner.N[1]} A 36 36 0 0 0 ${corner.W[0]} ${corner.W[1]}`} fill="none" stroke={hl('hijr') ? '#b98d32' : '#b99b6b'} strokeWidth={hl('hijr') ? 6 : 4} />
      <text x={138} y={140} fontSize="10" fill="#4b5751" textAnchor="middle">{t('tawaf.hijr')}</text>
      {/* Kaaba */}
      <g>
        <polygon points={`${corner.E} ${corner.N} ${corner.W} ${corner.S}`} fill="#1d2622" />
        <polygon points={`${corner.E} ${corner.N} ${corner.W} ${corner.S}`} fill="none" stroke="#d4ad55" strokeWidth={3} />
        {/* door on NE face */}
        <line x1={232} y1={180} x2={220} y2={168} stroke="#d4ad55" strokeWidth={4} />
        <text x={C} y={C + 4} fontSize="12" fill="#e3c77f" textAnchor="middle" fontWeight="600">{t('tawaf.kaaba')}</text>
      </g>
      {/* Maqam Ibrahim */}
      <g opacity={hl('maqam') ? 1 : 0.85}>
        <circle cx={262} cy={138} r={hl('maqam') ? 9 : 7} fill="#d4ad55" stroke="#956f22" />
        <text x={262} y={122} fontSize="10" fill="#4b5751" textAnchor="middle">{t('tawaf.maqam')}</text>
      </g>
      {/* Corners */}
      <g>
        <circle cx={corner.E[0]} cy={corner.E[1]} r={hl('start') || hl('end') ? 9 : 6} fill="#0b4f3f" stroke="#e3c77f" strokeWidth={2} />
        <text x={corner.E[0] + 8} y={corner.E[1] + 20} fontSize="10" fill="#0b4f3f" fontWeight="700">{t('tawaf.blackStone')}</text>
        <circle cx={corner.S[0]} cy={corner.S[1]} r={hl('yemeni') ? 9 : 6} fill="#157d62" stroke="#e3c77f" strokeWidth={2} />
        <text x={corner.S[0]} y={corner.S[1] + 22} fontSize="10" fill="#0b4f3f" textAnchor="middle" fontWeight="700">{t('tawaf.yemeni')}</text>
      </g>
      {/* Pilgrim marker */}
      {moving && !reduce ? (
        <motion.circle cx={cxv} cy={cyv} r={9} fill="#d4ad55" stroke="#fff" strokeWidth={3} />
      ) : (
        <circle cx={at(0.6)[0]} cy={at(0.6)[1]} r={9} fill="#d4ad55" stroke="#fff" strokeWidth={3} />
      )}
      {/* Circuit progress ring */}
      {circuit > 0 && (
        <motion.circle
          cx={C}
          cy={C}
          r={R + 22}
          fill="none"
          stroke="#1f9a78"
          strokeWidth={5}
          strokeLinecap="round"
          // Flip vertically so the ring fills anticlockwise from the Black Stone.
          transform={`scale(1 -1) translate(0 ${-2 * C})`}
          initial={false}
          animate={{ pathLength: Math.min(1, circuit / TAWAF_CIRCUITS) }}
          transition={{ duration: 0.6 }}
        />
      )}
    </svg>
  )
}

const tutorial: (TutorialStep & { hl: TawafHighlight })[] = [
  { hl: 'start', caption: { bn: '১. হাজরে আসওয়াদ বরাবর সবুজ রেখায় দাঁড়ান, কাবার দিকে মুখ করে ডান হাত তুলে “আল্লাহু আকবার” বলুন।', en: "1. Stand on the green line in line with the Black Stone, face the Kaaba, raise your right hand and say 'Allahu Akbar'." } },
  { hl: 'direction', caption: { bn: '২. ডানে ঘুরে কাবাকে বাম দিকে রেখে হাঁটা শুরু করুন - ঘড়ির কাঁটার বিপরীত দিকে।', en: '2. Turn right and walk with the Kaaba on your left - anticlockwise.' } },
  { hl: 'hijr', caption: { bn: '৩. হাতিমের (অর্ধবৃত্তাকার দেয়াল) বাইরে দিয়ে যান - এটি কাবার অংশ।', en: '3. Pass outside the Hijr (the semicircular wall) - it is part of the Kaaba.' } },
  { hl: 'yemeni', caption: { bn: '৪. রুকনে ইয়ামানি সম্ভব হলে ডান হাতে স্পর্শ করুন; না পারলে ইশারা ছাড়াই চলতে থাকুন।', en: "4. Touch the Yemeni Corner with your right hand if you can; if not, keep walking without pointing." } },
  { hl: 'dua', caption: { bn: '৫. রুকনে ইয়ামানি থেকে হাজরে আসওয়াদ পর্যন্ত পড়ুন: “রাব্বানা আতিনা ফিদ্দুনিয়া হাসানাহ…”', en: "5. From the Yemeni Corner to the Black Stone say: 'Rabbana atina fid-dunya hasanah…'" } },
  { hl: 'end', caption: { bn: '৬. সবুজ রেখায় ফিরলে এক চক্কর শেষ। আবার তাকবির দিয়ে পরের চক্কর - মোট সাতবার।', en: '6. Back at the green line, one circuit is done. Say takbir and begin the next - seven in total.' } },
  { hl: 'maqam', caption: { bn: '৭. সাত চক্কর শেষে কাঁধ ঢেকে মাকামে ইবরাহিমের পেছনে (বা যেকোনো স্থানে) দুই রাকাত পড়ুন।', en: "7. After seven, cover your shoulder and pray two rak'ahs behind the Station of Ibrahim (or anywhere)." } },
]

export function TawafTutorial() {
  const { t } = useLang()
  return (
    <TutorialPlayer steps={tutorial} title={t('tawaf.tutorialTitle')}>
      {(s) => <TawafScene highlight={tutorial[s].hl} moving label={t('tawaf.diagramLabel')} />}
    </TutorialPlayer>
  )
}

export function TawafCounter() {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const completed = state.progress.tawaf
  const info = tawafInfo({ completed })
  const set = (n: number) => dispatch({ type: 'progress', value: { ...state.progress, tawaf: Math.max(0, Math.min(TAWAF_CIRCUITS, n)) } })

  return (
    <div className="rounded-2xl border border-emerald-700/20 bg-emerald-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-emerald-900">{t('tawaf.counter')}</h3>
        {info.done ? <Badge tone="emerald">{t('tawaf.done')}</Badge> : info.ramlForMen ? <Badge tone="gold">{t('tawaf.raml')}</Badge> : <Badge tone="sand">{t('tawaf.walk')}</Badge>}
      </div>
      <div className="my-4 flex items-center justify-center gap-2" aria-hidden>
        {Array.from({ length: TAWAF_CIRCUITS }, (_, i) => (
          <motion.span
            key={i}
            className={cx('grid size-9 place-items-center rounded-full text-sm font-bold', i < completed ? 'bg-emerald-700 text-white' : i === completed ? 'bg-gold-300 text-emerald-950 ring-2 ring-gold-500' : 'bg-white text-ink-muted ring-1 ring-sand-300')}
            animate={i < completed ? { scale: [1, 1.15, 1] } : { scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {num(i + 1, lang)}
          </motion.span>
        ))}
      </div>
      <p className="text-center text-sm text-ink-soft" aria-live="polite">
        {info.done ? t('tawaf.allDone') : t('tawaf.status', { current: num(info.current, lang), remaining: num(info.remaining, lang) })}
      </p>
      <div className="mt-4 flex gap-2">
        <Button variant="outline" onClick={() => set(completed - 1)} disabled={completed === 0} aria-label={t('tawaf.undo')}>
          <Minus className="size-4" />
        </Button>
        <Button className="flex-1" onClick={() => set(completed + 1)} disabled={info.done}>
          <Plus className="size-4" /> {t('tawaf.complete')}
        </Button>
        <Button variant="ghost" onClick={() => set(0)} aria-label={t('common.reset')}>
          <RotateCcw className="size-4" />
        </Button>
      </div>
      <p className="mt-3 text-xs text-ink-muted">{t('tawaf.doubt')}</p>
    </div>
  )
}
