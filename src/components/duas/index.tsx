import { AlertTriangle, ArrowRight, Clock, Hand, Info, Lightbulb, MapPin, Mic2, Sparkles, VolumeX } from 'lucide-react'
import { useState } from 'react'
import { useAudio } from '../../audio/AudioProvider'
import { useSpeechLang } from '../../audio/useSpeechLang'
import { Link } from 'react-router'
import { AudioPlayer } from '../../audio/Player'
import { recitation, referenceTrack } from '../../audio/tracks'
import type { AudioTrack } from '../../audio/types'
import { mediaById } from '../../content/media'
import { getReference } from '../../content/references'
import type { Dua, DuaStatus } from '../../content/types'
import { useLang } from '../../i18n'
import { Video } from '../media'
import { CitationButton, RefChips } from '../religious'
import { Badge, Button, Card, Notice, Segmented, cx } from '../ui'

const statusTone: Record<DuaStatus, 'emerald' | 'gold' | 'blue' | 'gray' | 'red'> = {
  sunnah: 'gold',
  general: 'emerald',
  companion: 'blue',
  personal: 'gray',
  'not-established': 'red',
}

export function DuaStatusBadge({ status }: { status: DuaStatus }) {
  const { t } = useLang()
  return <Badge tone={statusTone[status]}>{t(`duas.status.${status}`)}</Badge>
}

/** Resolved text for a dua: its own fields, falling back to the library reference. */
export function duaText(d: Dua) {
  const r = d.refId ? getReference(d.refId) : undefined
  return {
    ref: r,
    arabic: d.arabic ?? r?.arabic,
    transliteration: d.transliteration ?? r?.transliteration,
    meaning: d.meaning ?? r?.meaning,
  }
}

/** Audio for a dua: Alafasy for Qur'an verses, otherwise labelled device speech in Arabic. Null when there is nothing to play. */
export function duaTrack(d: Dua, speech: 'ar' | 'bn' | 'en' = 'ar'): AudioTrack | null {
  const { ref, arabic, transliteration, meaning } = duaText(d)
  if (ref?.ayahs?.length) return recitation(`dua-${d.id}`, d.title, ref.ayahs, `/duas/${d.id}`)
  if (!arabic) return null
  // Device speech: Arabic text, or the Bangla/English meaning read aloud.
  const base = ref ?? { id: d.id, kind: 'hadith' as const, attribution: 'general' as const, title: d.title, arabic, transliteration, meaning: meaning ?? { bn: '', en: '' }, source: '', context: { bn: '', en: '' } }
  return { ...referenceTrack(base, speech), id: `dua-${d.id}-${speech}`, title: d.title, href: `/duas/${d.id}` }
}

/** Audio block for a dua: picks a voice that really works, with a clear fallback when Arabic can't be spoken. */
function DuaAudio({ d }: { d: Dua }) {
  const { t, lang } = useLang()
  const audio = useAudio()
  const { speech, setSpeech, arabicUnavailable, fellBack } = useSpeechLang(lang)
  const [help, setHelp] = useState(false)
  const track = duaTrack(d, speech)
  if (!track) return <p className="flex items-center gap-2 rounded-xl bg-sand-100 p-3 text-sm text-ink-soft"><VolumeX className="size-4" /> {t('duas.noAudio')}</p>
  const isTts = !track.voice.isHuman
  const failed = isTts && audio.isCurrent(track.id) && audio.status === 'error'
  return (
    <div className="grid gap-3">
      {isTts && (
        <div className="max-w-md">
          <Segmented
            size="sm"
            label={t('audio.ttsLanguage')}
            value={speech}
            onChange={setSpeech}
            options={[
              { value: 'ar', label: arabicUnavailable ? `${t('audio.langAr')} (${t('duas.unavailableShort')})` : t('audio.langAr') },
              { value: 'bn', label: 'বাংলা' },
              { value: 'en', label: 'English' },
            ]}
          />
          {speech !== 'ar' && <p className="mt-1 text-xs text-ink-muted">{t('duas.meaningSpoken')}</p>}
        </div>
      )}
      {fellBack && (
        <p className="flex items-start gap-2 rounded-xl bg-sky-50 p-3 text-sm text-sky-950">
          <Info className="mt-0.5 size-4 shrink-0" />
          <span>
            {t('duas.autoFallback')}{' '}
            <button type="button" className="font-semibold underline" onClick={() => setHelp((h) => !h)} aria-expanded={help}>{t('duas.howToArabic')}</button>
          </span>
        </p>
      )}
      {(help || ((failed || arabicUnavailable) && speech === 'ar')) && (
        <Notice tone="gold" icon={<AlertTriangle className="size-4" />}>
          <p>{t('duas.arabicVoiceHelp')}</p>
          {speech === 'ar' && (
            <div className="mt-2 flex flex-wrap gap-2">
              <Button variant="outline" onClick={() => setSpeech('bn')}>{t('duas.tryBangla')}</Button>
              <Button variant="outline" onClick={() => setSpeech('en')}>{t('duas.tryEnglish')}</Button>
            </div>
          )}
        </Notice>
      )}
      <AudioPlayer key={track.id} track={track} transcript={false} />
      {isTts && <p className="text-xs text-ink-muted">{t(speech === 'ar' ? 'duas.ttsNote' : 'duas.ttsNoteGeneric')}</p>}
      {track.kind === 'recitation' && <p className="text-xs text-ink-muted">{t('duas.fullVerseNote')}</p>}
    </div>
  )
}

/** Arabic + Bangla pronunciation + transliteration + both meanings. */
export function DuaText({ d, big = false }: { d: Dua; big?: boolean }) {
  const { lang } = useLang()
  const { arabic, transliteration, meaning } = duaText(d)
  const other = lang === 'bn' ? 'en' : 'bn'
  return (
    <div className="grid gap-3">
      {arabic && (
        <p lang="ar" dir="rtl" className={cx('arabic rounded-xl bg-sand-50 px-4 py-3 text-right text-ink', big ? 'text-3xl leading-[2.3]' : 'text-2xl')}>
          {arabic}
        </p>
      )}
      {d.bnPron && (
        <p lang="bn" className={cx('rounded-xl border border-gold-400/30 bg-gold-300/10 px-4 py-2 text-ink', big ? 'text-xl' : 'text-base')}>
          {d.bnPron}
        </p>
      )}
      {transliteration && <p className="text-sm text-ink-soft italic">{transliteration}</p>}
      {meaning && (
        <div>
          <p className="text-ink">{meaning[lang]}</p>
          <p lang={other} className="mt-1 text-sm text-ink-muted">{meaning[other]}</p>
        </div>
      )}
    </div>
  )
}

export function PronunciationWarning() {
  const { t } = useLang()
  return (
    <Notice tone="gold" icon={<Mic2 className="size-5 text-gold-600" />}>
      {t('duas.pronWarning')}
    </Notice>
  )
}

/** Compact card used in lists and in the guide's Duas tab. */
export function DuaCard({ d }: { d: Dua }) {
  const { t, lang } = useLang()
  return (
    <Card className="p-4">
      <div className="flex flex-wrap items-start justify-between gap-2">
        <h3 className="font-semibold text-emerald-900">{d.title[lang]}</h3>
        <DuaStatusBadge status={d.status} />
      </div>
      <p className="mt-1 flex items-start gap-1.5 text-sm text-ink-soft">
        <Clock className="mt-0.5 size-4 shrink-0 text-gold-500" aria-hidden /> {d.when[lang]}
      </p>
      <div className="mt-3">
        <DuaText d={d} />
      </div>
      <Link to={`/duas/${d.id}`} className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-emerald-800 hover:underline">
        {t('duas.openDetail')} <ArrowRight className="size-4" />
      </Link>
    </Card>
  )
}

function Row({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl bg-white p-3 ring-1 ring-sand-200">
      <span className="mt-0.5 text-gold-500">{icon}</span>
      <div>
        <p className="text-xs font-semibold tracking-wide text-ink-muted uppercase">{label}</p>
        <div className="mt-0.5 text-ink">{children}</div>
      </div>
    </div>
  )
}

/** Full, consistent dua layout (the 12 parts). */
export function DuaDetail({ d }: { d: Dua }) {
  const { t, lang } = useLang()
  const { ref } = duaText(d)
  const videos = (d.videoIds ?? []).map((id) => mediaById.get(id)).filter((m) => !!m)
  return (
    <div className="grid gap-5">
      <div className="flex flex-wrap items-center gap-2">
        <DuaStatusBadge status={d.status} />
        {d.statusNote && <span className="text-sm text-ink-soft">{d.statusNote[lang]}</span>}
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Row icon={<Clock className="size-5" />} label={t('duas.when')}>{d.when[lang]}</Row>
        <Row icon={<MapPin className="size-5" />} label={t('duas.where')}>{d.where[lang]}</Row>
        <Row icon={<Hand className="size-5" />} label={t('duas.how')}>{d.how[lang]}</Row>
      </div>

      <section aria-label={t('duas.text')}>
        <DuaText d={d} big />
        {d.bnPron && <p className="mt-2 text-xs text-ink-muted">{t('duas.bnPronLabel')}</p>}
      </section>

      {d.tips?.length ? (
        <Notice tone="blue" icon={<Lightbulb className="size-5" />}>
          <p className="font-semibold">{t('duas.tips')}</p>
          <ul className="mt-1 grid list-disc gap-1 pl-5">{d.tips.map((x) => <li key={x.en}>{x[lang]}</li>)}</ul>
        </Notice>
      ) : null}

      <section aria-label={t('duas.audio')} className="grid gap-3">
        {videos.length > 0 && (
          <div className="grid gap-2">
            <p className="text-sm font-semibold text-emerald-900">{t('duas.humanRecording')}</p>
            {videos.map((v) => <Video key={v.id} item={v} />)}
          </div>
        )}
        <DuaAudio d={d} />
      </section>

      <section aria-label={t('duas.reference')}>
        <h3 className="mb-2 font-display text-lg font-semibold text-emerald-900">{t('duas.reference')}</h3>
        {ref ? (
          <div className="rounded-xl bg-white p-3 ring-1 ring-sand-200">
            <CitationButton r={ref} />
            {ref.grading && <p className="mt-1 text-sm text-ink-soft">{t('library.grading')}: {ref.grading.grade[lang]}{ref.grading.by ? ` - ${ref.grading.by}` : ''}</p>}
            <p className="mt-1 text-sm text-ink-soft">{ref.context[lang]}</p>
          </div>
        ) : (
          <p className="text-sm text-ink-soft">{t('duas.noFixedText')}</p>
        )}
        {d.refs?.length ? <div className="mt-2"><p className="text-xs text-ink-muted">{t('duas.related')}</p><RefChips ids={d.refs} /></div> : null}
      </section>

      {d.virtue && (
        <section className="rounded-2xl border border-emerald-600/20 bg-emerald-50 p-4">
          <p className="flex items-center gap-2 font-semibold text-emerald-900"><Sparkles className="size-4 text-gold-500" /> {t('duas.virtue')}</p>
          <p className="mt-1 text-ink">{d.virtue.text[lang]}</p>
          <Badge tone={d.virtue.kind === 'established' ? 'emerald' : 'gray'} className="mt-2">{t(`virtues.kind.${d.virtue.kind}`)}</Badge>
          <RefChips ids={d.virtue.refs} />
        </section>
      )}

      <section>
        <h3 className="mb-2 flex items-center gap-2 font-display text-lg font-semibold text-emerald-900"><AlertTriangle className="size-5 text-gold-500" /> {t('duas.mistakes')}</h3>
        <ul className="grid gap-2">
          {d.mistakes.map((m) => <li key={m.en} className="rounded-xl bg-white p-3 text-sm ring-1 ring-sand-200">{m[lang]}</li>)}
        </ul>
      </section>

      <p className="flex gap-2 text-xs text-ink-muted"><Info className="size-4 shrink-0" /> {t('duas.reviewNote')}</p>
    </div>
  )
}
