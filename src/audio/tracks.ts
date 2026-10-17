import { ayahs } from '../content/ayahs'
import type { Lang, Reference, SacredPlace, TourSite } from '../content/types'
import { recitationUrls } from './quran'
import type { AudioSource, AudioTrack, Voice } from './types'

/**
 * Audio catalogue. Rules (see README):
 *  - Recordings are attributed only to the reciter verified at the source.
 *  - No voice is synthesised to imitate a person. Where no verified human
 *    recording exists (all hadith used here), the app offers the device's
 *    text-to-speech, labelled as synthetic.
 */

export const ALAFASY: Voice = {
  name: { bn: 'শাইখ মিশারি রাশিদ আলাফাসি', en: 'Sheikh Mishary Rashid Alafasy' },
  isHuman: true,
  verified: true,
  note: { bn: 'কুরআন তিলাওয়াত (হাফস)', en: "Qur'an recitation (Hafs)" },
}

export const QURAN_AUDIO_SOURCE: AudioSource = {
  name: 'Islamic Network / AlQuran.cloud · Quran.com',
  url: 'https://alquran.cloud/cdn',
  terms: { bn: 'শিক্ষামূলক অ-বাণিজ্যিক স্ট্রিমিং; কপিরাইট ক্বারির', en: 'Educational non-commercial streaming; copyright remains with the reciter' },
  termsUrl: 'https://alquran.cloud/terms-and-conditions',
}

const SYNTHETIC: Voice = {
  name: { bn: 'ডিভাইসের টেক্সট-টু-স্পিচ', en: 'Device text-to-speech' },
  isHuman: false,
  verified: false,
  note: {
    bn: 'আপনার ডিভাইসের কৃত্রিম কণ্ঠ - কোনো ব্যক্তির রেকর্ডিং নয়। এই হাদিসের যাচাইকৃত মানব-রেকর্ডিং পাওয়া যায়নি।',
    en: 'Your device’s synthetic voice - not a recording of any person. No verified human recording of this text was found.',
  },
}

/** Build a recitation track from verse keys. */
export function recitation(id: string, title: { bn: string; en: string }, keys: string[], href?: string): AudioTrack {
  return {
    id,
    title,
    kind: 'recitation',
    voice: ALAFASY,
    source: QURAN_AUDIO_SOURCE,
    href,
    items: keys.map((k) => {
      const a = ayahs[k]
      return {
        id: `${id}:${k}`,
        urls: recitationUrls(k),
        verseKey: k,
        caption: { arabic: a?.arabic, bn: a?.meaning.bn ?? '', en: a?.meaning.en ?? '', label: `${k}` },
      }
    }),
  }
}

export const quranTracks: AudioTrack[] = [
  recitation('q-foundations', { bn: 'ঘরের ভিত্তি স্থাপন ও ইবরাহিম (আ.)-এর দোয়া - আল-বাকারা ২:১২৫–১২৯', en: 'Raising the foundations and Ibrahim’s prayer - al-Baqarah 2:125–129' }, ['2:125', '2:126', '2:127', '2:128', '2:129'], '/history/kaaba'),
  recitation('q-first-house', { bn: 'প্রথম ঘর - আলে ইমরান ৩:৯৬–৯৭', en: 'The first House - Al ‘Imran 3:96–97' }, ['3:96', '3:97'], '/history/kaaba'),
  recitation('q-valley', { bn: 'অনাবাদি উপত্যকায় ইবরাহিম (আ.)-এর দোয়া - ইবরাহিম ১৪:৩৫–৩৭', en: 'Ibrahim’s prayer for the barren valley - Ibrahim 14:35–37' }, ['14:35', '14:36', '14:37'], '/history/safa-marwah'),
  recitation('q-safa-marwah', { bn: 'সাফা ও মারওয়া - আল-বাকারা ২:১৫৮', en: 'Safa and Marwah - al-Baqarah 2:158' }, ['2:158'], '/history/hills'),
  recitation('q-proclaim', { bn: 'হজের ঘোষণা - আল-হজ ২২:২৬–২৯', en: 'The call to pilgrimage - al-Hajj 22:26–29' }, ['22:26', '22:27', '22:29'], '/history/haram'),
  recitation('q-qiblah', { bn: 'মসজিদুল হারাম কিবলা - আল-বাকারা ২:১৪৪', en: 'Al-Masjid al-Haram as the qiblah - al-Baqarah 2:144' }, ['2:144'], '/history/haram'),
  recitation('q-isra', { bn: 'মসজিদুল হারাম থেকে রাত্রিভ্রমণ - আল-ইসরা ১৭:১', en: 'The Night Journey from al-Masjid al-Haram - al-Isra 17:1' }, ['17:1'], '/history/haram'),
  recitation('q-conquest', { bn: 'সত্য এসেছে; আন-নাসর - ১৭:৮১, ১১০:১–৩', en: 'Truth has come; an-Nasr - 17:81, 110:1–3' }, ['17:81', '110:1', '110:2', '110:3'], '/history/kaaba'),
  recitation('q-quraysh', { bn: 'এই ঘরের রব - কুরাইশ ১০৬:৩–৪', en: 'The Lord of this House - Quraysh 106:3–4' }, ['106:3', '106:4'], '/history/kaaba'),
  recitation('q-piety-mosque', { bn: 'তাকওয়ার ওপর প্রতিষ্ঠিত মসজিদ - আত-তাওবা ৯:১০৮', en: 'A mosque founded on piety - at-Tawbah 9:108' }, ['9:108'], '/history/madinah'),
  recitation('q-umrah', { bn: 'হজ ও উমরাহ পূর্ণ করো - আল-বাকারা ২:১৯৬', en: 'Complete Hajj and Umrah - al-Baqarah 2:196' }, ['2:196'], '/history/miqat'),
]

const byId = new Map(quranTracks.map((t) => [t.id, t]))
export const trackById = (id: string) => byId.get(id)

/**
 * Audio for a library reference: Alafasy's recitation for Qur'an verses,
 * device speech (clearly labelled) for hadith and supplications.
 */
export function referenceTrack(r: Reference, ttsLang: 'ar' | Lang): AudioTrack {
  if (r.ayahs?.length) {
    const t = recitation(`ref-${r.id}`, r.title, r.ayahs, '/library')
    // Library references carry their own (often partial) quotation; show it as the caption.
    if (r.ayahs.length === 1 && r.arabic) t.items[0].caption = { ...t.items[0].caption, label: r.source }
    return t
  }
  const text = ttsLang === 'ar' ? (r.arabic ?? r.meaning.en) : r.meaning[ttsLang]
  return {
    id: `tts-${r.id}-${ttsLang}`,
    title: r.title,
    kind: 'tts',
    voice: SYNTHETIC,
    href: '/library',
    items: [
      {
        id: `${r.id}-${ttsLang}`,
        tts: { text, lang: r.arabic || ttsLang !== 'ar' ? ttsLang : 'en' },
        caption: { arabic: r.arabic, transliteration: r.transliteration, bn: r.meaning.bn, en: r.meaning.en, label: r.source },
      },
    ],
  }
}

/** Synthetic narration of a history story, one item per chapter, captions in sync. */
export function narrationTrack(p: SacredPlace, lang: Lang): AudioTrack {
  const chapters = [p.beginning, ...p.story]
  return {
    id: `narration-${p.id}-${lang}`,
    title: { bn: `কাহিনি শুনুন: ${p.title.bn}`, en: `Listen to the story: ${p.title.en}` },
    kind: 'narration',
    voice: {
      ...SYNTHETIC,
      note: { bn: 'আপনার ডিভাইসের কৃত্রিম কণ্ঠে বর্ণনা - কোনো ব্যক্তির রেকর্ডিং নয়।', en: 'Narrated by your device’s synthetic voice - not a recording of any person.' },
    },
    href: `/history/${p.id}`,
    items: [
      { id: `${p.id}-intro`, tts: { text: p.intro[lang], lang }, caption: { bn: p.intro.bn, en: p.intro.en, label: lang === 'bn' ? 'ভূমিকা' : 'Introduction' } },
      ...chapters.map((c) => ({ id: `${p.id}-${c.id}`, tts: { text: c.body[lang], lang }, caption: { bn: c.body.bn, en: c.body.en, label: c.title[lang] } })),
    ],
  }
}

/** Synthetic narration of a tour site: intro, then each timeline event, captions in sync. */
export function siteNarrationTrack(site: TourSite, lang: Lang): AudioTrack {
  return {
    id: `site-${site.id}-${lang}`,
    title: { bn: `শুনুন: ${site.name.bn}`, en: `Listen: ${site.name.en}` },
    kind: 'narration',
    voice: {
      ...SYNTHETIC,
      note: { bn: 'আপনার ডিভাইসের কৃত্রিম কণ্ঠে বর্ণনা - কোনো ব্যক্তির রেকর্ডিং নয়।', en: 'Narrated by your device’s synthetic voice - not a recording of any person.' },
    },
    href: `/explore/${site.id}`,
    items: [
      { id: `${site.id}-intro`, tts: { text: site.intro[lang], lang }, caption: { bn: site.intro.bn, en: site.intro.en, label: site.name[lang] } },
      ...site.timeline.map((e) => ({ id: e.id, tts: { text: `${e.title[lang]}. ${e.text[lang]}`, lang }, caption: { bn: e.text.bn, en: e.text.en, label: `${e.when[lang]} - ${e.title[lang]}` } })),
    ],
  }
}
