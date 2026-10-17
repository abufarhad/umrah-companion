import { AnimatePresence, motion } from 'motion/react'
import { ChevronDown } from 'lucide-react'
import { useId, useState, type ComponentProps, type ReactNode } from 'react'
import { Link } from 'react-router'

export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(' ')

type Variant = 'primary' | 'gold' | 'outline' | 'ghost' | 'soft' | 'onDark'

const variants: Record<Variant, string> = {
  primary: 'bg-emerald-800 text-white hover:bg-emerald-700 shadow-card',
  gold: 'bg-gold-400 text-emerald-950 hover:bg-gold-300 shadow-card',
  outline: 'border border-emerald-800/25 text-emerald-900 hover:bg-emerald-50 bg-white/70',
  ghost: 'text-emerald-900 hover:bg-emerald-50',
  soft: 'bg-emerald-50 text-emerald-900 hover:bg-emerald-100',
  onDark: 'border border-white/30 bg-white/10 text-white hover:bg-white/20',
}

const btnBase =
  'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors disabled:opacity-50 disabled:pointer-events-none min-h-11'

export function Button({ variant = 'primary', className, ...p }: ComponentProps<'button'> & { variant?: Variant }) {
  return <button type="button" className={cx(btnBase, variants[variant], className)} {...p} />
}

export function ButtonLink({ variant = 'primary', className, ...p }: ComponentProps<typeof Link> & { variant?: Variant }) {
  return <Link className={cx(btnBase, variants[variant], className)} {...p} />
}

export function Card({ className, ...p }: ComponentProps<'div'>) {
  return <div className={cx('rounded-2xl border border-sand-200 bg-white shadow-card', className)} {...p} />
}

type Tone = 'emerald' | 'gold' | 'sand' | 'red' | 'blue' | 'gray'
const tones: Record<Tone, string> = {
  emerald: 'bg-emerald-50 text-emerald-800 ring-emerald-700/15',
  gold: 'bg-gold-300/25 text-gold-600 ring-gold-500/25',
  sand: 'bg-sand-100 text-ink-soft ring-sand-300',
  red: 'bg-red-50 text-red-800 ring-red-700/15',
  blue: 'bg-sky-50 text-sky-800 ring-sky-700/15',
  gray: 'bg-gray-100 text-gray-700 ring-gray-500/15',
}

export function Badge({ tone = 'emerald', className, ...p }: ComponentProps<'span'> & { tone?: Tone }) {
  return (
    <span
      className={cx('inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium ring-1 ring-inset', tones[tone], className)}
      {...p}
    />
  )
}

export function PageHeader({ eyebrow, title, intro, children }: { eyebrow?: string; title: string; intro?: ReactNode; children?: ReactNode }) {
  return (
    <header className="relative overflow-hidden bg-emerald-900 text-white">
      <div className="geo-pattern absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-4 py-10 sm:py-14">
        {eyebrow && <p className="mb-2 text-sm font-semibold tracking-wide text-gold-300 uppercase">{eyebrow}</p>}
        <h1 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h1>
        {intro && <div className="mt-3 max-w-3xl text-emerald-50/90">{intro}</div>}
        {children}
      </div>
    </header>
  )
}

export function SectionTitle({ icon, children, className }: { icon?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <h2 className={cx('mb-3 flex items-center gap-2 font-display text-xl font-semibold text-emerald-900', className)}>
      {icon && <span className="text-gold-500">{icon}</span>}
      {children}
    </h2>
  )
}

export function Disclosure({ title, children, defaultOpen = false, className }: { title: ReactNode; children: ReactNode; defaultOpen?: boolean; className?: string }) {
  const [open, setOpen] = useState(defaultOpen)
  const id = useId()
  return (
    <div className={cx('rounded-xl border border-sand-200 bg-white', className)}>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={id}
        onClick={() => setOpen((o) => !o)}
        className="flex min-h-11 w-full items-center justify-between gap-3 px-4 py-3 text-left font-semibold text-emerald-900"
      >
        <span>{title}</span>
        <ChevronDown className={cx('size-5 shrink-0 transition-transform', open && 'rotate-180')} aria-hidden />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={id}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <div className="px-4 pb-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ---------------- Form fields ---------------- */

export function Field({ label, hint, children, htmlFor }: { label: string; hint?: ReactNode; children: ReactNode; htmlFor?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={htmlFor} className="text-sm font-medium text-ink-soft">
        {label}
      </label>
      {children}
      {hint && <p className="text-xs text-ink-muted">{hint}</p>}
    </div>
  )
}

const inputCls =
  'min-h-11 w-full rounded-xl border border-sand-300 bg-white px-3 py-2 text-ink focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20 focus:outline-none'

export function NumberField({
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  hint,
  suffix,
}: {
  label: string
  value: number
  onChange: (n: number) => void
  min?: number
  max?: number
  step?: number
  hint?: ReactNode
  suffix?: string
}) {
  const id = useId()
  return (
    <Field label={label} hint={hint} htmlFor={id}>
      <div className="relative">
        <input
          id={id}
          type="number"
          inputMode="decimal"
          className={cx(inputCls, suffix && 'pr-16')}
          value={Number.isFinite(value) ? value : ''}
          min={min}
          max={max}
          step={step}
          onChange={(e) => {
            const n = e.target.value === '' ? 0 : Number(e.target.value)
            if (Number.isFinite(n)) onChange(max !== undefined ? Math.min(max, Math.max(min, n)) : Math.max(min, n))
          }}
        />
        {suffix && <span className="pointer-events-none absolute top-1/2 right-3 -translate-y-1/2 text-xs text-ink-muted">{suffix}</span>}
      </div>
    </Field>
  )
}

export function TextField({ label, hint, ...p }: ComponentProps<'input'> & { label: string; hint?: ReactNode }) {
  const id = useId()
  return (
    <Field label={label} hint={hint} htmlFor={id}>
      <input id={id} className={inputCls} {...p} />
    </Field>
  )
}

export function Select<T extends string>({
  label,
  value,
  onChange,
  options,
  hint,
}: {
  label: string
  value: T
  onChange: (v: T) => void
  options: { value: T; label: string }[]
  hint?: ReactNode
}) {
  const id = useId()
  return (
    <Field label={label} hint={hint} htmlFor={id}>
      <select id={id} className={inputCls} value={value} onChange={(e) => onChange(e.target.value as T)}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </Field>
  )
}

/** Accessible segmented control (radio group). */
export function Segmented<T extends string | number>({
  label,
  value,
  onChange,
  options,
  size = 'md',
  hideLabel = false,
}: {
  label: string
  value: T
  onChange: (v: T) => void
  options: { value: T; label: string }[]
  size?: 'sm' | 'md'
  hideLabel?: boolean
}) {
  const uid = useId()
  return (
    <fieldset className="flex flex-col gap-1">
      <legend className={hideLabel ? 'sr-only' : 'mb-1 text-sm font-medium text-ink-soft'}>{label}</legend>
      <div className="flex flex-wrap gap-1 rounded-xl bg-sand-100 p-1">
        {options.map((o) => {
          const active = o.value === value
          return (
            <button
              key={String(o.value)}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => onChange(o.value)}
              className={cx(
                'relative flex-1 rounded-lg px-3 font-medium transition-colors',
                size === 'sm' ? 'min-h-9 text-xs' : 'min-h-10 text-sm',
                active ? 'text-emerald-950' : 'text-ink-soft hover:text-emerald-900',
              )}
            >
              {active && (
                <motion.span layoutId={`seg-${uid}`} className="absolute inset-0 rounded-lg bg-white shadow-card" transition={{ type: 'spring', bounce: 0.15, duration: 0.35 }} />
              )}
              <span className="relative">{o.label}</span>
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}

export function Toggle({ label, checked, onChange, description }: { label: string; checked: boolean; onChange: (v: boolean) => void; description?: string }) {
  return (
    <label className="flex cursor-pointer items-start justify-between gap-4 py-2">
      <span>
        <span className="block font-medium text-ink">{label}</span>
        {description && <span className="block text-sm text-ink-muted">{description}</span>}
      </span>
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-label={label}
        onClick={() => onChange(!checked)}
        className={cx('relative mt-1 h-6 w-11 shrink-0 rounded-full transition-colors', checked ? 'bg-emerald-700' : 'bg-sand-300')}
      >
        <span className={cx('absolute top-0.5 left-0.5 size-5 rounded-full bg-white shadow transition-transform', checked && 'translate-x-5')} />
      </button>
    </label>
  )
}

export function Check({ checked, onChange, children }: { checked: boolean; onChange: (v: boolean) => void; children: ReactNode }) {
  return (
    <label className={cx('flex min-h-11 cursor-pointer items-center gap-3 rounded-xl px-3 py-2 transition-colors', checked ? 'bg-emerald-50' : 'hover:bg-sand-100')}>
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="size-5 shrink-0 accent-emerald-700" />
      <span className={cx('text-sm', checked && 'text-emerald-900 line-through decoration-emerald-700/40')}>{children}</span>
    </label>
  )
}

export function ProgressBar({ value, label }: { value: number; label: string }) {
  return (
    <div role="progressbar" aria-label={label} aria-valuenow={Math.round(value * 100)} aria-valuemin={0} aria-valuemax={100} className="h-2 w-full overflow-hidden rounded-full bg-emerald-950/20">
      <motion.div className="h-full rounded-full bg-gold-400" initial={false} animate={{ width: `${Math.round(value * 100)}%` }} transition={{ duration: 0.5 }} />
    </div>
  )
}

export function Notice({ tone = 'gold', icon, children, className }: { tone?: 'gold' | 'emerald' | 'red' | 'blue'; icon?: ReactNode; children: ReactNode; className?: string }) {
  const t = {
    gold: 'border-gold-400/40 bg-gold-300/15 text-ink',
    emerald: 'border-emerald-600/25 bg-emerald-50 text-ink',
    red: 'border-red-300 bg-red-50 text-red-900',
    blue: 'border-sky-300 bg-sky-50 text-sky-950',
  }[tone]
  return (
    <div className={cx('flex gap-3 rounded-xl border px-4 py-3 text-sm', t, className)}>
      {icon && <span className="mt-0.5 shrink-0">{icon}</span>}
      <div className="min-w-0">{children}</div>
    </div>
  )
}
