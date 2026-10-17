import { useState } from 'react'
import { HalqTutorial, IhramTutorial } from '../components/animations/Scenes'
import { JourneyRoute, MiqatMap } from '../components/animations/Maps'
import { SaiTutorial } from '../components/animations/Sai'
import { TawafTutorial } from '../components/animations/Tawaf'
import { MediaCard } from '../components/media'
import { Notice, PageHeader, SectionTitle, Segmented } from '../components/ui'
import { media } from '../content/media'
import { useLang } from '../i18n'

type Tab = 'animations' | 'videos' | 'photos'

export default function MediaPage() {
  const { t } = useLang()
  const [tab, setTab] = useState<Tab>('animations')
  return (
    <>
      <PageHeader eyebrow={t('media.eyebrow')} title={t('media.title')} intro={<p>{t('media.intro')}</p>} />
      <div className="mx-auto max-w-6xl px-4 py-8">
        <div className="mb-6 max-w-md">
          <Segmented label={t('media.show')} value={tab} onChange={setTab} options={[{ value: 'animations', label: t('media.animations') }, { value: 'videos', label: t('media.videos') }, { value: 'photos', label: t('media.photos') }]} />
        </div>
        {tab === 'animations' && (
          <div className="grid gap-8">
            <div className="grid gap-6 lg:grid-cols-2">
              <section><SectionTitle>{t('media.secIhram')}</SectionTitle><IhramTutorial /></section>
              <section><SectionTitle>{t('media.secMiqat')}</SectionTitle><MiqatMap route="air" /></section>
              <section><SectionTitle>{t('media.secTawaf')}</SectionTitle><TawafTutorial /></section>
              <section><SectionTitle>{t('media.secSai')}</SectionTitle><SaiTutorial /></section>
              <section><SectionTitle>{t('media.secHalq')}</SectionTitle><HalqTutorial /></section>
              <section><SectionTitle>{t('media.secMadinah')}</SectionTitle><MiqatMap route="madinah" /></section>
            </div>
            <section><SectionTitle>{t('media.secJourney')}</SectionTitle><JourneyRoute /></section>
          </div>
        )}
        {tab === 'videos' && (
          <>
            <Notice tone="emerald" className="mb-6">{t('media.videosNote')}</Notice>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{media.filter((m) => m.type === 'video').map((m) => <MediaCard key={m.id} item={m} />)}</div>
          </>
        )}
        {tab === 'photos' && (
          <>
            <Notice tone="emerald" className="mb-6">{t('media.photosNote')}</Notice>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{media.filter((m) => m.type === 'photo').map((m) => <MediaCard key={m.id} item={m} />)}</div>
          </>
        )}
      </div>
    </>
  )
}
