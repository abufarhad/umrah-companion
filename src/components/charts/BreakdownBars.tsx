import { motion } from 'motion/react'
import { useState } from 'react'

export interface BarDatum {
  id: string
  label: string
  value: number
  display: string
  /** shown in the tooltip, e.g. "18% of total" */
  detail?: string
}

/**
 * Sorted horizontal bars in one hue - magnitude only, so no categorical
 * palette is needed and identity never depends on colour. Labels and values
 * are always visible text; hovering or focusing a row reveals its share.
 */
export function BreakdownBars({ data, label }: { data: BarDatum[]; label: string }) {
  const rows = data.filter((d) => d.value > 0).sort((a, b) => b.value - a.value)
  const max = Math.max(1, ...rows.map((r) => r.value))
  const [active, setActive] = useState<string | null>(null)
  return (
    <ul aria-label={label} className="grid gap-2.5">
      {rows.map((r) => (
        <li
          key={r.id}
          tabIndex={0}
          onMouseEnter={() => setActive(r.id)}
          onMouseLeave={() => setActive(null)}
          onFocus={() => setActive(r.id)}
          onBlur={() => setActive(null)}
          className="group rounded-lg px-1 py-0.5 outline-none focus-visible:ring-2 focus-visible:ring-gold-400"
        >
          <div className="mb-1 flex items-baseline justify-between gap-3 text-sm">
            <span className="text-ink-soft">{r.label}</span>
            <span className="font-semibold text-ink tabular-nums">{r.display}</span>
          </div>
          <div className="relative h-2.5 rounded-full bg-sand-100">
            <motion.div
              className="h-full rounded-full bg-emerald-600 group-hover:bg-emerald-700"
              initial={false}
              animate={{ width: `${Math.max(1.5, (r.value / max) * 100)}%` }}
              transition={{ type: 'spring', bounce: 0, duration: 0.6 }}
            />
          </div>
          {active === r.id && r.detail && <p className="mt-1 text-xs text-ink-muted">{r.detail}</p>}
        </li>
      ))}
    </ul>
  )
}
