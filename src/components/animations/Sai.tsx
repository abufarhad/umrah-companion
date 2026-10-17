import { motion, useReducedMotion } from 'motion/react'
import { ArrowLeft, ArrowRight, Minus, Plus, RotateCcw } from 'lucide-react'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { SAI_LAPS, saiInfo } from '../../lib/ritualProgress'
import { useStore } from '../../state/store'
import { Badge, Button, cx } from '../ui'
import { TutorialPlayer, type TutorialStep } from './TutorialPlayer'

/*
 * Straight-line schematic of the Mas'a. Safa on the left, Marwah on the right
 * (not to scale). The green-light section marks where men walk briskly.
 */
const SAFA_X = 70
const MARWAH_X = 530
const Y = 120
const GREEN = [235, 330] as const

export type SaiHighlight = 'none' | 'safa' | 'green' | 'marwah' | 'count' | 'end'

export function SaiScene({ completed, highlight = 'none', running = false, label }: { completed: number; highlight?: SaiHighlight; running?: boolean; label: string }) {
  const { t, lang } = useLang()
  const reduce = useReducedMotion()
  const atMarwah = completed % 2 === 1
  const x = atMarwah ? MARWAH_X - 30 : SAFA_X + 30
  const hl = (k: SaiHighlight) => highlight === k

  return (
    <svg viewBox="0 0 600 230" role="img" aria-label={label} className="block w-full">
      <defs>
        <linearGradient id="floor" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fcfaf5" />
          <stop offset="1" stopColor="#efe4cf" />
        </linearGradient>
      </defs>
      <rect x={20} y={70} width={560} height={100} rx={18} fill="url(#floor)" stroke="#e2d1b0" />
      {/* lanes */}
      <line x1={SAFA_X + 30} y1={Y - 18} x2={MARWAH_X - 30} y2={Y - 18} stroke="#e2d1b0" strokeDasharray="8 8" />
      <line x1={SAFA_X + 30} y1={Y + 18} x2={MARWAH_X - 30} y2={Y + 18} stroke="#e2d1b0" strokeDasharray="8 8" />
      {/* green-light section */}
      <rect x={GREEN[0]} y={74} width={GREEN[1] - GREEN[0]} height={92} fill="#1f9a78" opacity={hl('green') ? 0.28 : 0.12} />
      {[GREEN[0], GREEN[1]].map((gx) => (
        <g key={gx}>
          <rect x={gx - 3} y={60} width={6} height={16} rx={2} fill="#1f9a78" />
          <motion.circle cx={gx} cy={56} r={6} fill="#34d399" animate={reduce ? undefined : { opacity: [0.5, 1, 0.5] }} transition={{ duration: 1.6, repeat: Infinity }} />
        </g>
      ))}
      <text x={(GREEN[0] + GREEN[1]) / 2} y={44} textAnchor="middle" fontSize="12" fill="#0f6650" fontWeight="600">
        {t('sai.greenZone')}
      </text>
      {/* hills */}
      <g>
        <path d={`M ${SAFA_X - 45} 170 Q ${SAFA_X} 70 ${SAFA_X + 45} 170 Z`} fill={hl('safa') ? '#d4ad55' : '#e2d1b0'} stroke="#b99b6b" />
        <text x={SAFA_X} y={196} textAnchor="middle" fontSize="15" fontWeight="700" fill="#0b4f3f">{t('sai.safa')}</text>
        <text x={SAFA_X} y={214} textAnchor="middle" fontSize="11" fill="#6d7872">{t('sai.start')}</text>
      </g>
      <g>
        <path d={`M ${MARWAH_X - 45} 170 Q ${MARWAH_X} 80 ${MARWAH_X + 45} 170 Z`} fill={hl('marwah') || hl('end') ? '#d4ad55' : '#e2d1b0'} stroke="#b99b6b" />
        <text x={MARWAH_X} y={196} textAnchor="middle" fontSize="15" fontWeight="700" fill="#0b4f3f">{t('sai.marwah')}</text>
        <text x={MARWAH_X} y={214} textAnchor="middle" fontSize="11" fill="#6d7872">{t('sai.finish')}</text>
      </g>
      {/* direction arrow for the current journey */}
      {completed < SAI_LAPS && (
        <g opacity={0.8}>
          <line x1={atMarwah ? 420 : 180} y1={Y + 40} x2={atMarwah ? 180 : 420} y2={Y + 40} stroke="#b98d32" strokeWidth={3} markerEnd="url(#sai-arrow)" />
          <defs>
            <marker id="sai-arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto">
              <path d="M0 0 L10 5 L0 10 z" fill="#b98d32" />
            </marker>
          </defs>
        </g>
      )}
      {/* lap counters on the track */}
      {hl('count') &&
        Array.from({ length: SAI_LAPS }, (_, i) => (
          <text key={i} x={SAFA_X + 60 + i * 58} y={Y - 30} fontSize="12" fill={i % 2 === 0 ? '#0f6650' : '#956f22'} fontWeight="700" textAnchor="middle">
            {num(i + 1, lang)}
            {i % 2 === 0 ? '→' : '←'}
          </text>
        ))}
      {/* pilgrim */}
      {running && !reduce ? (
        <motion.circle
          cy={Y}
          r={10}
          fill="#d4ad55"
          stroke="#fff"
          strokeWidth={3}
          initial={{ cx: SAFA_X + 30 }}
          animate={{ cx: [SAFA_X + 30, GREEN[0], GREEN[1], MARWAH_X - 30] }}
          // slower outside the green section, faster inside it (men)
          transition={{ duration: 6, times: [0, 0.4, 0.55, 1], repeat: Infinity, repeatType: 'reverse', ease: 'linear' }}
        />
      ) : (
        <motion.circle cy={Y} r={10} fill="#d4ad55" stroke="#fff" strokeWidth={3} initial={false} animate={{ cx: x }} transition={{ duration: reduce ? 0 : 1.2, ease: 'easeInOut' }} />
      )}
    </svg>
  )
}

const tutorial: (TutorialStep & { hl: SaiHighlight; at: number; run?: boolean })[] = [
  { hl: 'safa', at: 0, caption: { bn: '১. সাফা থেকে শুরু। প্রথমবার পড়ুন “ইন্নাস সাফা ওয়াল মারওয়াতা…”, কাবার দিকে মুখ করে জিকির ও দোয়া করুন।', en: "1. Begin at Safa. On the first ascent recite 'Innas-safa wal-marwata…', face the Kaaba, remember Allah and supplicate." } },
  { hl: 'green', at: 0, run: true, caption: { bn: '২. মারওয়ার দিকে হাঁটুন। দুই সবুজ বাতির মাঝে পুরুষেরা দ্রুত চলবেন; নারীরা স্বাভাবিক হাঁটবেন।', en: '2. Walk towards Marwah. Between the two green lights men move briskly; women walk normally.' } },
  { hl: 'marwah', at: 1, caption: { bn: '৩. মারওয়ায় পৌঁছালে এক বার সম্পন্ন। এখানেও কিবলামুখী হয়ে জিকির ও দোয়া করুন।', en: '3. Reaching Marwah completes one. Face the Qiblah here too, remember Allah and supplicate.' } },
  { hl: 'count', at: 2, caption: { bn: '৪. মারওয়া থেকে সাফায় ফেরা দুই। প্রতিটি একমুখী যাত্রা এক বার গণ্য হয়।', en: '4. Returning from Marwah to Safa is two. Each one-way journey counts as one.' } },
  { hl: 'end', at: 7, caption: { bn: '৫. সাত বার পূর্ণ হলে আপনি মারওয়ায় থাকবেন - সাঈ শেষ। এরপর হলক বা তাকসির।', en: "5. After seven you finish at Marwah - Sa'i is complete. Next: Halq or Taqsir." } },
]

export function SaiTutorial() {
  const { t } = useLang()
  return (
    <TutorialPlayer steps={tutorial} title={t('sai.tutorialTitle')} seconds={6}>
      {(s) => (
        <div className="px-2 py-4">
          <SaiScene completed={tutorial[s].at} highlight={tutorial[s].hl} running={tutorial[s].run} label={t('sai.diagramLabel')} />
        </div>
      )}
    </TutorialPlayer>
  )
}

export function SaiCounter() {
  const { t, lang } = useLang()
  const { state, dispatch } = useStore()
  const completed = state.progress.sai
  const info = saiInfo({ completed })
  const set = (n: number) => dispatch({ type: 'progress', value: { ...state.progress, sai: Math.max(0, Math.min(SAI_LAPS, n)) } })
  const name = (h: 'safa' | 'marwah') => t(`sai.${h}`)

  return (
    <div className="rounded-2xl border border-emerald-700/20 bg-emerald-50 p-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="font-display text-lg font-semibold text-emerald-900">{t('sai.counter')}</h3>
        {info.done ? <Badge tone="emerald">{t('sai.done')}</Badge> : (
          <Badge tone="gold">
            {info.from === 'safa' ? <ArrowRight className="size-3" /> : <ArrowLeft className="size-3" />}
            {name(info.from)} → {name(info.to)}
          </Badge>
        )}
      </div>
      <div className="my-3 rounded-xl bg-white px-2 py-2">
        <SaiScene completed={completed} label={t('sai.diagramLabel')} />
      </div>
      <div className="mb-3 flex items-center justify-center gap-1.5" aria-hidden>
        {Array.from({ length: SAI_LAPS }, (_, i) => (
          <span key={i} className={cx('grid size-8 place-items-center rounded-full text-xs font-bold', i < completed ? 'bg-emerald-700 text-white' : i === completed ? 'bg-gold-300 text-emerald-950 ring-2 ring-gold-500' : 'bg-white text-ink-muted ring-1 ring-sand-300')}>
            {num(i + 1, lang)}
          </span>
        ))}
      </div>
      <p className="text-center text-sm text-ink-soft" aria-live="polite">
        {info.done
          ? t('sai.allDone')
          : t('sai.status', { current: num(info.current, lang), from: name(info.from), to: name(info.to), remaining: num(info.remaining, lang) })}
      </p>
      <div className="mt-4 flex gap-2">
        <Button variant="outline" onClick={() => set(completed - 1)} disabled={completed === 0} aria-label={t('sai.undo')}>
          <Minus className="size-4" />
        </Button>
        <Button className="flex-1" onClick={() => set(completed + 1)} disabled={info.done}>
          <Plus className="size-4" /> {info.done ? t('sai.done') : t('sai.arrived', { place: name(info.to) })}
        </Button>
        <Button variant="ghost" onClick={() => set(0)} aria-label={t('common.reset')}>
          <RotateCcw className="size-4" />
        </Button>
      </div>
    </div>
  )
}
