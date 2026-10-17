import { motion } from 'motion/react'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { daysUntil } from '../../lib/itinerary'
import { useStore } from '../../state/store'

export function Countdown() {
  const { t, lang } = useLang()
  const { state } = useStore()
  const d = daysUntil(state.plan.departureDate)
  if (d === null) return <p className="text-sm text-ink-muted">{t('itinerary.noDate')}</p>
  return (
    <div className="flex items-baseline gap-2">
      <motion.span key={d} initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="font-display text-4xl font-semibold text-emerald-900 tabular-nums">
        {num(Math.abs(d), lang)}
      </motion.span>
      <span className="text-ink-soft">{d >= 0 ? t('itinerary.daysToGo') : t('itinerary.daysAgo')}</span>
    </div>
  )
}

