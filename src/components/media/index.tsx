import { ExternalLink, ImageOff, Play, MonitorPlay } from 'lucide-react'
import { useState } from 'react'
import type { MediaItem } from '../../content/types'
import { useLang } from '../../i18n'
import { num } from '../../lib/format'
import { Badge, cx } from '../ui'

export function Credit({ item }: { item: MediaItem }) {
  const { t } = useLang()
  if (!item.credit) return null
  const c = item.credit
  return (
    <p className="mt-1 text-[11px] leading-snug text-ink-muted">
      {item.type === 'video' ? t('media.videoBy') : t('media.photoBy')} {c.author} ·{' '}
      {c.licenseUrl ? (
        <a href={c.licenseUrl} target="_blank" rel="noopener noreferrer license" className="underline">
          {c.license}
        </a>
      ) : (
        c.license
      )}{' '}
      ·{' '}
      <a href={c.sourceUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-0.5 underline">
        {c.sourceName} <ExternalLink className="size-3" aria-hidden />
      </a>
    </p>
  )
}

/** Lazy-loaded photograph with caption, attribution and a fallback when it can't load. */
export function Photo({ item, className, aspect = 'aspect-[4/3]' }: { item: MediaItem; className?: string; aspect?: string }) {
  const { t, lang } = useLang()
  const [failed, setFailed] = useState(false)
  const [loaded, setLoaded] = useState(false)
  return (
    <figure className={cx('overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card', className)}>
      <div className={cx('relative overflow-hidden bg-sand-100', aspect)}>
        {!failed && item.src ? (
          <img
            src={item.src}
            alt={item.alt[lang]}
            loading="lazy"
            decoding="async"
            referrerPolicy="no-referrer"
            onLoad={() => setLoaded(true)}
            onError={() => setFailed(true)}
            className={cx('size-full object-cover transition-[opacity,transform] duration-500', loaded ? 'scale-100 opacity-100' : 'scale-[1.02] opacity-0')}
          />
        ) : (
          <div className="grid size-full place-items-center p-4 text-center text-sm text-ink-muted">
            <span>
              <ImageOff className="mx-auto mb-2 size-6" aria-hidden />
              {t('media.unavailable')}
              <span className="mt-1 block text-xs">{item.alt[lang]}</span>
            </span>
          </div>
        )}
        <Badge tone="sand" className="absolute top-2 left-2 bg-white/90">{t('media.photo')}</Badge>
      </div>
      <figcaption className="p-3">
        <p className="text-sm font-semibold text-emerald-900">{item.title[lang]}</p>
        <p className="mt-0.5 text-sm text-ink-soft">{item.caption[lang]}</p>
        <Credit item={item} />
      </figcaption>
    </figure>
  )
}

/**
 * Click-to-load YouTube embed (youtube-nocookie). Nothing is fetched from
 * YouTube until the user presses play - saves mobile data and avoids tracking.
 */
export function Video({ item, className }: { item: MediaItem & { duration?: number }; className?: string }) {
  const { t, lang } = useLang()
  const [active, setActive] = useState(false)
  return (
    <figure className={cx('overflow-hidden rounded-2xl border border-sand-200 bg-white shadow-card', className)}>
      <div className="relative aspect-video bg-emerald-950">
        {active ? (
          <iframe
            className="absolute inset-0 size-full"
            src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
            title={item.title[lang]}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        ) : (
          <button type="button" onClick={() => setActive(true)} className="geo-pattern group absolute inset-0 flex flex-col items-center justify-center gap-3 text-white">
            <span className="grid size-16 place-items-center rounded-full bg-gold-400 text-emerald-950 shadow-lift transition-transform group-hover:scale-110">
              <Play className="ml-1 size-7" aria-hidden />
            </span>
            <span className="px-6 text-center text-sm font-semibold">{item.title[lang]}</span>
            <span className="flex items-center gap-2 text-xs text-emerald-100">
              <MonitorPlay className="size-4" aria-hidden /> {t('media.loadsYoutube')}
              {item.duration ? ` · ${num(item.duration, lang)} ${t('media.seconds')}` : ''}
            </span>
          </button>
        )}
        <Badge tone="gold" className="absolute top-2 left-2">{t('media.officialVideo')}</Badge>
      </div>
      <figcaption className="p-3">
        <p className="text-sm text-ink-soft">{item.caption[lang]}</p>
        <p className="mt-1 text-xs text-ink-muted">{t('media.arabicAudio')}</p>
        <Credit item={item} />
      </figcaption>
    </figure>
  )
}

export function MediaCard({ item, className }: { item: MediaItem; className?: string }) {
  return item.type === 'video' ? <Video item={item} className={className} /> : <Photo item={item} className={className} />
}
