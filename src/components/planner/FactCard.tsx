import { CheckCircle2, CircleAlert, CircleHelp, ExternalLink } from 'lucide-react'
import type { TravelFact } from '../../content/travel'
import { useLang } from '../../i18n'
import { date } from '../../lib/format'
import { Badge, Card } from '../ui'

export function ConfidenceBadge({ c }: { c: TravelFact['confidence'] }) {
  const { t } = useLang()
  const Icon = c === 'confirmed' ? CheckCircle2 : c === 'partial' ? CircleAlert : CircleHelp
  return (
    <Badge tone={c === 'confirmed' ? 'emerald' : c === 'partial' ? 'gold' : 'gray'}>
      <Icon className="size-3.5" aria-hidden /> {t(`facts.confidence.${c}`)}
    </Badge>
  )
}

export function FactCard({ fact }: { fact: TravelFact }) {
  const { t, lang } = useLang()
  return (
    <Card className="p-5">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-semibold text-emerald-900">{fact.topic[lang]}</h3>
        <ConfidenceBadge c={fact.confidence} />
      </div>
      <p className="mt-2 text-ink-soft">{fact.summary[lang]}</p>
      {fact.points && <ul className="mt-2 grid list-disc gap-1 pl-5 text-sm text-ink-soft">{fact.points[lang].map((p) => <li key={p}>{p}</li>)}</ul>}
      <details className="mt-3 text-sm">
        <summary className="min-h-9 cursor-pointer font-medium text-emerald-800">{t('facts.sources', { n: fact.sources.length })}</summary>
        <ul className="mt-2 grid gap-1.5">
          {fact.sources.map((s) => (
            <li key={s.url} className="flex flex-wrap items-center gap-2">
              <a href={s.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-emerald-800 underline">
                {s.title[lang]} <ExternalLink className="size-3" aria-hidden />
              </a>
              <Badge tone={s.official ? 'emerald' : 'sand'}>{s.official ? t('facts.official') : t('facts.secondary')}</Badge>
              <span className="text-xs text-ink-muted">{t('facts.checked', { date: date(s.checked, lang) })}</span>
            </li>
          ))}
        </ul>
      </details>
    </Card>
  )
}
