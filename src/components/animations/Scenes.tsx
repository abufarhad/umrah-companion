import { motion, useReducedMotion } from 'motion/react'
import type { AnimationId } from '../../content/types'
import { useLang } from '../../i18n'
import { JourneyRoute, MiqatMap } from './Maps'
import { SaiTutorial } from './Sai'
import { TawafTutorial } from './Tawaf'
import { TutorialPlayer, type TutorialStep } from './TutorialPlayer'

/* Original illustrations. Simple, symbolic figures - not depictions of real people. */

function Person({ x, y, garment, head, highlight }: { x: number; y: number; garment: 'ihram' | 'ihram-idtiba' | 'modest' | 'normal'; head?: 'shaved' | 'hair' | 'covered'; highlight?: 'shoulder' | 'head' | 'face' }) {
  const skin = '#d9b48f'
  return (
    <g transform={`translate(${x} ${y})`}>
      {/* body */}
      {garment === 'modest' ? (
        <path d="M -38 150 L -26 40 Q 0 26 26 40 L 38 150 Z" fill="#6b8f80" />
      ) : garment === 'normal' ? (
        <path d="M -34 150 L -30 40 Q 0 28 30 40 L 34 150 Z" fill="#8aa1b3" />
      ) : (
        <>
          {/* izar */}
          <rect x={-30} y={88} width={60} height={62} rx={6} fill="#fbfbf8" stroke="#d6d3c8" />
          {/* torso */}
          <path d="M -28 40 Q 0 30 28 40 L 30 92 L -30 92 Z" fill={skin} />
          {/* rida */}
          {garment === 'ihram' ? (
            <path d="M -32 40 Q 0 28 32 40 L 32 94 L -32 94 Z" fill="#fbfbf8" stroke="#d6d3c8" />
          ) : (
            <path d="M -32 46 Q -8 30 20 38 L 32 94 L -32 94 Z" fill="#fbfbf8" stroke="#d6d3c8" />
          )}
          {garment === 'ihram-idtiba' && highlight === 'shoulder' && <circle cx={24} cy={42} r={14} fill="none" stroke="#d4ad55" strokeWidth={3} />}
        </>
      )}
      {/* head */}
      {head === 'covered' ? (
        <>
          <ellipse cx={0} cy={16} rx={20} ry={24} fill="#3f6f5f" />
          <circle cx={0} cy={18} r={13} fill={skin} />
          {highlight === 'face' && <circle cx={0} cy={18} r={18} fill="none" stroke="#d4ad55" strokeWidth={3} />}
        </>
      ) : (
        <>
          <circle cx={0} cy={16} r={17} fill={skin} />
          {head === 'hair' && <path d="M -17 12 Q 0 -10 17 12 Q 10 2 0 2 Q -10 2 -17 12 Z" fill="#3b2f2a" />}
          {highlight === 'head' && <circle cx={0} cy={14} r={22} fill="none" stroke="#d4ad55" strokeWidth={3} />}
        </>
      )}
      {/* feet / sandals */}
      <rect x={-22} y={150} width={16} height={6} rx={3} fill="#7a5c3e" />
      <rect x={6} y={150} width={16} height={6} rx={3} fill="#7a5c3e" />
    </g>
  )
}

const ihramSteps: (TutorialStep & { s: number })[] = [
  { s: 0, caption: { bn: '১. গোসল করুন, নখ ও অবাঞ্ছিত লোম পরিষ্কার করুন। পুরুষ শরীরে (কাপড়ে নয়) সুগন্ধি লাগাতে পারেন।', en: '1. Bathe, trim nails and remove unwanted hair. Men may perfume the body (not the garments).' } },
  { s: 1, caption: { bn: '২. পুরুষ: কোমরে ইজার ও গায়ে রিদা - দুই সেলাইবিহীন সাদা চাদর। মাথা খোলা, টাখনু খোলা স্যান্ডেল।', en: "2. Men: izar around the waist and rida' over the body - two unstitched white sheets. Head uncovered, sandals that show the ankles." } },
  { s: 2, caption: { bn: '৩. নারী: স্বাভাবিক শালীন পোশাক; নিকাব ও হাতমোজা নয়। কোনো নির্দিষ্ট রং বাধ্যতামূলক নয়।', en: '3. Women: normal modest clothing; no niqab or gloves. No particular colour is required.' } },
  { s: 3, caption: { bn: '৪. মিকাতের আগে নিয়ত করুন এবং তালবিয়াহ শুরু করুন - এখন থেকে ইহরামের নিষেধাজ্ঞা প্রযোজ্য।', en: '4. Make the intention before the Miqat and begin the Talbiyah - the restrictions of Ihram now apply.' } },
]

export function IhramTutorial() {
  const { t } = useLang()
  return (
    <TutorialPlayer steps={ihramSteps} title={t('scenes.ihramTitle')}>
      {(s) => (
        <svg viewBox="0 0 400 230" role="img" aria-label={t('scenes.ihramLabel')} className="block w-full">
          <Person x={110} y={40} garment={s === 0 ? 'normal' : 'ihram'} head="hair" />
          <Person x={290} y={40} garment="modest" head="covered" highlight={s === 2 ? 'face' : undefined} />
          <text x={110} y={225} textAnchor="middle" fontSize="13" fill="#0b4f3f" fontWeight="600">{t('common.men')}</text>
          <text x={290} y={225} textAnchor="middle" fontSize="13" fill="#0b4f3f" fontWeight="600">{t('common.women')}</text>
          {s === 3 && (
            <motion.text x={200} y={28} textAnchor="middle" fontSize="16" fill="#956f22" fontWeight="700" initial={{ opacity: 0, y: 36 }} animate={{ opacity: 1, y: 28 }}>
              لَبَّيْكَ عُمْرَةً
            </motion.text>
          )}
          {s === 0 && (
            <motion.g initial={{ opacity: 0 }} animate={{ opacity: [0, 1, 0.6] }} transition={{ duration: 2, repeat: Infinity }}>
              {[0, 1, 2, 3].map((i) => (
                <circle key={i} cx={90 + i * 14} cy={20 + (i % 2) * 8} r={3} fill="#7cc4e8" />
              ))}
            </motion.g>
          )}
        </svg>
      )}
    </TutorialPlayer>
  )
}

const halqSteps: (TutorialStep & { s: number })[] = [
  { s: 0, caption: { bn: '১. সাঈ শেষ করার পর চুল কাটুন - এটি উমরাহর শেষ কাজ।', en: "1. After finishing Sa'i, cut the hair - the final act of Umrah." } },
  { s: 1, caption: { bn: '২. পুরুষ: পুরো মাথা মুণ্ডন (উত্তম) অথবা পুরো মাথা থেকে সমানভাবে ছোট করা।', en: '2. Men: shave the whole head (better) or shorten evenly all over.' } },
  { s: 2, caption: { bn: '৩. নারী: চুলের প্রান্ত থেকে আঙুলের এক কড় (প্রায় ১–২ সেমি) - একান্তে।', en: "3. Women: a fingertip's length (about 1–2 cm) from the ends - in private." } },
  { s: 3, caption: { bn: '৪. এখন ইহরামের সব নিষেধাজ্ঞা শেষ - উমরাহ সম্পন্ন!', en: '4. All Ihram restrictions are now lifted - Umrah complete!' } },
]

export function HalqTutorial() {
  const { t } = useLang()
  const reduce = useReducedMotion()
  return (
    <TutorialPlayer steps={halqSteps} title={t('scenes.halqTitle')}>
      {(s) => (
        <svg viewBox="0 0 400 230" role="img" aria-label={t('scenes.halqLabel')} className="block w-full">
          <Person x={110} y={40} garment="ihram" head={s >= 1 ? 'shaved' : 'hair'} highlight={s === 1 ? 'head' : undefined} />
          <g transform="translate(290 40)">
            <ellipse cx={0} cy={60} rx={34} ry={70} fill="#3b2f2a" />
            <circle cx={0} cy={16} r={17} fill="#d9b48f" />
            {/* fingertip cut at hair end */}
            <rect x={-14} y={124} width={28} height={8} fill={s >= 2 ? '#d4ad55' : 'transparent'} />
            {s === 2 && (
              <motion.g animate={reduce ? undefined : { x: [-10, 10, -10] }} transition={{ duration: 1.2, repeat: Infinity }}>
                <path d="M -20 140 l 14 -8 M -20 132 l 14 8" stroke="#4b5751" strokeWidth={3} />
                <circle cx={-24} cy={130} r={4} fill="none" stroke="#4b5751" strokeWidth={2} />
                <circle cx={-24} cy={142} r={4} fill="none" stroke="#4b5751" strokeWidth={2} />
              </motion.g>
            )}
          </g>
          <text x={110} y={225} textAnchor="middle" fontSize="13" fill="#0b4f3f" fontWeight="600">{t('scenes.halqMen')}</text>
          <text x={290} y={225} textAnchor="middle" fontSize="13" fill="#0b4f3f" fontWeight="600">{t('scenes.taqsirWomen')}</text>
          {s === 3 && (
            <motion.g initial={{ scale: 0.4, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ originX: '200px', originY: '110px' }}>
              <circle cx={200} cy={110} r={34} fill="#0b4f3f" />
              <path d="M 184 110 l 10 10 l 22 -22" stroke="#e3c77f" strokeWidth={6} fill="none" strokeLinecap="round" />
            </motion.g>
          )}
        </svg>
      )}
    </TutorialPlayer>
  )
}

/** Small looping vignettes for steps that don't need a full tutorial. */
function Vignette({ kind }: { kind: AnimationId }) {
  const { t } = useLang()
  const reduce = useReducedMotion()
  const loop = reduce ? undefined : { repeat: Infinity, duration: 2.4 }
  const common = 'block w-full rounded-2xl border border-sand-200 bg-gradient-to-b from-sand-50 to-sand-100'
  switch (kind) {
    case 'talbiyah':
      return (
        <svg viewBox="0 0 400 200" role="img" aria-label={t('scenes.talbiyahLabel')} className={common}>
          {[0, 1, 2].map((i) => (
            <motion.circle key={i} cx={200} cy={100} r={30} fill="none" stroke="#d4ad55" strokeWidth={2} animate={reduce ? undefined : { r: [30, 90], opacity: [0.8, 0] }} transition={{ ...loop, delay: i * 0.8 }} />
          ))}
          <text x={200} y={108} textAnchor="middle" fontSize="22" fill="#0b4f3f" fontFamily="Amiri, serif">لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ</text>
        </svg>
      )
    case 'masjid-entry':
      return (
        <svg viewBox="0 0 400 200" role="img" aria-label={t('scenes.entryLabel')} className={common}>
          <path d="M 140 180 L 140 80 Q 200 20 260 80 L 260 180 Z" fill="#0b4f3f" />
          <path d="M 160 180 L 160 90 Q 200 50 240 90 L 240 180 Z" fill="#fcfaf5" />
          <motion.g animate={reduce ? undefined : { x: [0, 20, 0] }} transition={loop}>
            <ellipse cx={186} cy={170} rx={10} ry={5} fill="#7a5c3e" />
            <ellipse cx={214} cy={162} rx={10} ry={5} fill="#d4ad55" />
            <text x={232} y={150} fontSize="12" fill="#956f22" fontWeight="700">{t('scenes.rightFoot')}</text>
          </motion.g>
        </svg>
      )
    case 'prayer-maqam':
      return (
        <svg viewBox="0 0 400 200" role="img" aria-label={t('scenes.maqamLabel')} className={common}>
          <rect x={170} y={20} width={60} height={50} fill="#1d2622" stroke="#d4ad55" strokeWidth={3} />
          <circle cx={200} cy={100} r={9} fill="#d4ad55" />
          <text x={216} y={104} fontSize="11" fill="#4b5751">{t('tawaf.maqam')}</text>
          <motion.g animate={reduce ? undefined : { y: [0, 6, 0] }} transition={loop}>
            <rect x={188} y={140} width={24} height={36} rx={8} fill="#fbfbf8" stroke="#d6d3c8" />
            <circle cx={200} cy={132} r={9} fill="#d9b48f" />
          </motion.g>
          <text x={200} y={196} textAnchor="middle" fontSize="11" fill="#0b4f3f">{t('scenes.maqamCaption')}</text>
        </svg>
      )
    case 'zamzam':
      return (
        <svg viewBox="0 0 400 200" role="img" aria-label={t('scenes.zamzamLabel')} className={common}>
          <rect x={160} y={40} width={80} height={100} rx={12} fill="#dcefe7" stroke="#157d62" strokeWidth={2} />
          <text x={200} y={95} textAnchor="middle" fontSize="20" fill="#0b4f3f" fontFamily="Amiri, serif">زَمْزَم</text>
          <rect x={192} y={140} width={16} height={10} fill="#157d62" />
          <motion.path d="M 200 152 q -6 10 0 16 q 6 -6 0 -16" fill="#7cc4e8" animate={reduce ? undefined : { y: [0, 22], opacity: [1, 0] }} transition={{ ...loop, duration: 1.2 }} />
          <path d="M 184 172 L 216 172 L 212 194 L 188 194 Z" fill="#fff" stroke="#b99b6b" />
        </svg>
      )
    case 'complete':
      return (
        <svg viewBox="0 0 400 200" role="img" aria-label={t('scenes.completeLabel')} className={common}>
          {Array.from({ length: 12 }, (_, i) => {
            const a = (i / 12) * Math.PI * 2
            return <motion.circle key={i} cx={200} cy={100} r={5} fill={i % 2 ? '#d4ad55' : '#1f9a78'} animate={reduce ? undefined : { cx: [200, 200 + Math.cos(a) * 90], cy: [100, 100 + Math.sin(a) * 70], opacity: [1, 0] }} transition={{ ...loop, duration: 1.8 }} />
          })}
          <circle cx={200} cy={100} r={44} fill="#0b4f3f" />
          <path d="M 180 100 l 13 13 l 28 -28" stroke="#e3c77f" strokeWidth={7} fill="none" strokeLinecap="round" />
        </svg>
      )
    case 'documents':
    case 'packing':
      return (
        <svg viewBox="0 0 400 200" role="img" aria-label={t('scenes.documentsLabel')} className={common}>
          {[t('scenes.docPassport'), t('scenes.docVisa'), t('scenes.docVaccine'), t('scenes.docNusuk')].map((label, i) => (
            <motion.g key={label} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: reduce ? 0 : i * 0.25 }}>
              <rect x={30 + i * 88} y={50} width={76} height={100} rx={10} fill="#fff" stroke="#e2d1b0" />
              <rect x={42 + i * 88} y={64} width={52} height={8} rx={4} fill="#dcefe7" />
              <rect x={42 + i * 88} y={80} width={40} height={6} rx={3} fill="#efe4cf" />
              <circle cx={68 + i * 88} cy={120} r={11} fill="#1f9a78" />
              <path d={`M ${62 + i * 88} 120 l 5 5 l 9 -9`} stroke="#fff" strokeWidth={3} fill="none" />
              <text x={68 + i * 88} y={172} textAnchor="middle" fontSize="11" fill="#0b4f3f" fontWeight="600">{label}</text>
            </motion.g>
          ))}
        </svg>
      )
    default:
      return null
  }
}

/** The visual block shown for a ritual stage. */
export function StageAnimation({ id }: { id: AnimationId }) {
  switch (id) {
    case 'tawaf':
      return <TawafTutorial />
    case 'sai':
      return <SaiTutorial />
    case 'ihram':
      return (
        <div className="grid gap-4">
          <IhramTutorial />
          <MiqatMap route="air" />
        </div>
      )
    case 'halq':
      return <HalqTutorial />
    case 'journey':
      return <JourneyRoute />
    case 'madinah':
      return <MiqatMap route="madinah" />
    default:
      return <Vignette kind={id} />
  }
}
