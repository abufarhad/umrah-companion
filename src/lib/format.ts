import type { L10n, Lang } from '../content/types'

const locale = (lang: Lang) => (lang === 'bn' ? 'bn-BD' : 'en-GB')

export function num(n: number, lang: Lang, digits = 0): string {
  return new Intl.NumberFormat(locale(lang), { maximumFractionDigits: digits }).format(n)
}

/** Taka with South Asian grouping, e.g. ৳১,২৫,০০০ / Tk 1,25,000 */
export function bdt(n: number, lang: Lang): string {
  const s = new Intl.NumberFormat(lang === 'bn' ? 'bn-BD' : 'en-IN', { maximumFractionDigits: 0 }).format(Math.round(n))
  return lang === 'bn' ? `৳${s}` : `Tk ${s}`
}

export function sar(n: number, lang: Lang): string {
  return lang === 'bn' ? `${num(Math.round(n), lang)} রিয়াল` : `SAR ${num(Math.round(n), lang)}`
}

export function date(iso: string | null | undefined, lang: Lang, opts: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' }): string {
  if (!iso) return '-'
  const d = new Date(`${iso}T00:00:00`)
  if (Number.isNaN(d.getTime())) return '-'
  return new Intl.DateTimeFormat(locale(lang), opts).format(d)
}

export function weekday(iso: string | null, lang: Lang): string {
  return iso ? date(iso, lang, { weekday: 'short' }) : ''
}

export const pick = (v: L10n, lang: Lang) => v[lang]
