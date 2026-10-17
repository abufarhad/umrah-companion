import { motion, useInView } from 'motion/react'
import { ArrowLeft, ArrowRight, BookOpen, CalendarRange, Footprints, Headphones, HelpCircle, Images, Info, MapPin, Sparkles } from 'lucide-react'
import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, Navigate, useParams } from 'react-router'
import { AudioPlayer } from '../audio/Player'
import { narrationTrack, trackById } from '../audio/tracks'
import { ClaimBadge, Quiz, Sources, TimelineScrubber } from '../components/history'
import { HistoryScene } from '../components/history/Scenes'
import { Photo } from '../components/media'
import { RefChips, ReferenceCard } from '../components/religious'
import { Badge, ButtonLink, Card, Notice, SectionTitle, cx } from '../components/ui'
import { placeById, places } from '../content/history'
import { mediaById } from '../content/media'
import { getReference } from '../content/references'
import { stageById } from '../content/rituals'
import type { StoryChapter } from '../content/types'
import { useLang } from '../i18n'
import { num } from '../lib/format'

/** A story chapter that reports when it is the one being read, to drive the sticky scene. */
function Chapter({ c, n, onActive }: { c: StoryChapter; n: number; onActive: () => void }) {
  const { lang } = useLang()
  const ref = useRef<HTMLElement>(null)
  const inView = useInView(ref, { margin: '-45% 0px -45% 0px' })
  useEffect(() => {
    if (inView) onActive()
  }, [inView, onActive])
  return (
    <motion.article ref={ref} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.4 }} className="rounded-2xl border border-sand-200 bg-white p-5 shadow-card">
      <div className="flex flex-wrap items-center gap-2">
        <span className="grid size-7 place-items-center rounded-full bg-gold-300 text-xs font-bold text-emerald-950">{num(n, lang)}</span>
        <h3 className="font-display text-lg font-semibold text-emerald-900">{c.title[lang]}</h3>
        <ClaimBadge kind={c.kind} />
      </div>
      <p className="mt-2 leading-relaxed text-ink-soft">{c.body[lang]}</p>
      <RefChips ids={c.refs} />
      <Sources sources={c.sources} />
    </motion.article>
  )
}

export default function PlacePage() {
  const { placeId = '' } = useParams()
  const { t, lang } = useLang()
  const place = placeById.get(placeId)
  const [stage, setStage] = useState<string | undefined>(undefined)
  const [eventIndex, setEventIndex] = useState(0)
  const [tab, setTab] = useState<'story' | 'events' | 'refs' | 'thennow' | 'listen' | 'quiz'>('story')
  useEffect(() => {
    setTab('story')
    setEventIndex(0)
    setStage(undefined)
  }, [placeId])

  const chapters = useMemo(() => (place ? [place.beginning, ...place.story] : []), [place])
  const narration = useMemo(() => (place ? narrationTrack(place, lang) : null), [place, lang])
  if (!place || !narration) return <Navigate to="/history" replace />

  const i = places.indexOf(place)
  const prev = places[i - 1]
  const next = places[i + 1]
  const sceneStage = stage ?? chapters[0].stage ?? 'valley'
  const refs = place.refs.map(getReference).filter((r) => !!r)
  const tracks = place.audio.map((id) => trackById(id)).filter((x) => !!x)
  const umrahStage = stageById.get(place.umrah.stageId)
  const thenMedia = place.thenNow.then.mediaId ? mediaById.get(place.thenNow.then.mediaId) : undefined
  const nowMedia = place.thenNow.now.mediaId ? mediaById.get(place.thenNow.now.mediaId) : undefined

  return (
    <>
      {/* 1. Introduction */}
      <header className="relative overflow-hidden bg-emerald-900 text-white">
        <div className="geo-pattern absolute inset-0 opacity-60" aria-hidden />
        <div className="relative mx-auto max-w-6xl px-4 pt-8 pb-10">
          <Link to="/history" className="inline-flex items-center gap-1 text-sm text-emerald-100 hover:text-white"><ArrowLeft className="size-4" /> {t('history.title')}</Link>
          <p className="mt-4 text-sm font-semibold tracking-wide text-gold-300 uppercase">{t('history.chapterOf', { n: num(place.order, lang), total: num(places.length, lang) })}</p>
          <h1 className="mt-1 font-display text-3xl font-semibold sm:text-4xl">{place.title[lang]}</h1>
          <p className="mt-3 max-w-3xl text-emerald-50/90">{place.intro[lang]}</p>
          {place.optional && <Badge tone="gold" className="mt-4">{t('history.optionalNote')}</Badge>}
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-6">
        <div role="tablist" aria-label={t('guide.sections')} className="no-print -mx-4 mb-6 flex gap-1 overflow-x-auto px-4 pb-1">
          {(['story', 'events', 'refs', 'thennow', 'listen', 'quiz'] as const).map((k) => (
            <button key={k} role="tab" type="button" aria-selected={tab === k} onClick={() => setTab(k)} className={cx('min-h-10 shrink-0 rounded-full px-4 text-sm font-semibold', tab === k ? 'bg-emerald-800 text-white' : 'bg-white text-ink-soft ring-1 ring-sand-200')}>
              {t(`history.tabs.${k}`)}
            </button>
          ))}
        </div>
        {/* 2–3. Beginning and story, with a sticky scene that follows the reader */}
        {tab === 'story' && <section aria-labelledby="story" className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div className="grid content-start gap-4">
            <SectionTitle icon={<Sparkles className="size-5" />}><span id="story">{t('history.story')}</span></SectionTitle>
            {chapters.map((c, n) => (
              <Chapter key={c.id} c={c} n={n + 1} onActive={() => c.stage && setStage(c.stage)} />
            ))}
          </div>
          {/* Pinned scene that follows the reader: above the text on phones, beside it on desktop. */}
          <div className="sticky top-16 z-10 order-first -mx-4 bg-sand-50/95 px-4 pt-2 pb-3 backdrop-blur lg:top-20 lg:order-none lg:mx-0 lg:self-start lg:bg-transparent lg:p-0">
            <HistoryScene scene={place.scene} stage={sceneStage} />
          </div>
        </section>}

        {/* 4. Key events */}
        {tab === 'events' && <section aria-labelledby="events" className="grid gap-6 lg:grid-cols-[1fr_1.05fr]">
          <div>
            <SectionTitle icon={<CalendarRange className="size-5" />}><span id="events">{t('history.keyEvents')}</span></SectionTitle>
            <TimelineScrubber events={place.timeline} index={eventIndex} onChange={setEventIndex} />
          </div>
          <div className="lg:pt-10">
            <HistoryScene scene={place.scene} stage={place.timeline[eventIndex].stage ?? sceneStage} />
          </div>
        </section>}

        {/* 5. Connection to Umrah */}
        {tab === 'refs' && <section aria-labelledby="umrah">
          <SectionTitle icon={<Footprints className="size-5" />}><span id="umrah">{t('history.connection')}</span></SectionTitle>
          <Card className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center">
            <p className="flex-1 text-ink-soft">{place.umrah.text[lang]}</p>
            {umrahStage && <ButtonLink to={`/guide/${umrahStage.id}`} variant="gold">{t('history.openStep', { step: umrahStage.title[lang] })} <ArrowRight className="size-4" /></ButtonLink>}
          </Card>
        </section>}

        {/* 6. Qur'an and Hadith */}
        {tab === 'refs' && refs.length > 0 && (
          <section aria-labelledby="refs" className="mt-8">
            <SectionTitle icon={<BookOpen className="size-5" />}><span id="refs">{t('guide.refs')}</span></SectionTitle>
            <div className="grid gap-4 lg:grid-cols-2">{refs.map((r) => <ReferenceCard key={r.id} r={r} compact />)}</div>
          </section>
        )}

        {/* 7. Then and now */}
        {tab === 'thennow' && <section aria-labelledby="thennow">
          <SectionTitle icon={<Images className="size-5" />}><span id="thennow">{t('history.thenNow')}</span></SectionTitle>
          <div className="grid gap-4 md:grid-cols-2">
            {[{ k: 'then', m: thenMedia, text: place.thenNow.then.text }, { k: 'now', m: nowMedia, text: place.thenNow.now.text }].map(({ k, m, text }) => (
              <div key={k} className="grid content-start gap-3">
                <Badge tone={k === 'then' ? 'sand' : 'emerald'} className="w-fit">{t(`history.${k}`)}</Badge>
                {m ? <Photo item={m} /> : <HistoryScene scene={place.scene} stage={k === 'then' ? (chapters[0].stage ?? 'valley') : (place.timeline.at(-1)?.stage ?? 'today')} />}
                <p className="text-sm text-ink-soft">{text[lang]}</p>
              </div>
            ))}
          </div>
        </section>}

        {/* 8. Listen and learn */}
        {tab === 'listen' && <section aria-labelledby="listen">
          <SectionTitle icon={<Headphones className="size-5" />}><span id="listen">{t('history.listen')}</span></SectionTitle>
          <Notice tone="blue" icon={<Info className="size-5" />} className="mb-4">{t('history.audioNote')}</Notice>
          <div className="grid gap-4 lg:grid-cols-2">
            {tracks.map((tr) => <AudioPlayer key={tr.id} track={tr} />)}
            <AudioPlayer track={narration} />
          </div>
        </section>}

        {/* 9. Knowledge check */}
        {tab === 'quiz' && <section aria-labelledby="quiz">
          <SectionTitle icon={<HelpCircle className="size-5" />}><span id="quiz">{t('history.quiz')}</span></SectionTitle>
          <Quiz key={place.id} questions={place.quiz} />
        </section>}

        <nav className="mt-12 grid grid-cols-2 gap-3" aria-label={t('history.morePlaces')}>
          {prev ? <ButtonLink to={`/history/${prev.id}`} variant="outline"><ArrowLeft className="size-4" /> {prev.title[lang]}</ButtonLink> : <span />}
          {next ? <ButtonLink to={`/history/${next.id}`} variant="outline">{next.title[lang]} <ArrowRight className="size-4" /></ButtonLink> : <ButtonLink to="/history" variant="outline"><MapPin className="size-4" /> {t('history.title')}</ButtonLink>}
        </nav>
      </div>
    </>
  )
}
