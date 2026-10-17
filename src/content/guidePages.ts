import type { L10n } from './types'

/**
 * The guide is presented as 8 focused pages. Each page groups one or two of
 * the detailed stages in rituals.ts (progress is still tracked per stage).
 * `quick` is the essential, at-a-glance version for use during Umrah.
 */
export interface GuidePage {
  id: string
  stageIds: string[]
  title: L10n
  quick: { bn: string[]; en: string[] }
  /** Dua ids (src/content/duas.ts) most relevant on this page */
  duas: string[]
}

export const guidePages: GuidePage[] = [
  {
    id: 'prepare',
    stageIds: ['preparation', 'documents'],
    title: { bn: 'প্রস্তুতি ও কাগজপত্র', en: 'Preparation and documents' },
    quick: {
      bn: ['নিয়ত খাঁটি করুন', 'পাসপোর্ট (৬ মাস+), ভিসা, মেনিনজাইটিস টিকা, নুসুক পারমিট', 'ইহরামের কাপড় হ্যান্ড লাগেজে'],
      en: ['Make your intention sincere', 'Passport (6+ months), visa, meningococcal vaccine, Nusuk permit', 'Ihram garments in hand luggage'],
    },
    duas: ['leaving-home', 'travel'],
  },
  {
    id: 'ihram',
    stageIds: ['ihram', 'niyyah'],
    title: { bn: 'মিকাত, ইহরাম, নিয়ত ও তালবিয়াহ', en: 'Miqat, Ihram, Niyyah and Talbiyah' },
    quick: {
      bn: ['গোসল; পুরুষ: দুই সাদা চাদর, নারী: শালীন পোশাক', 'মিকাতের আগে নিয়ত - বিমানে, জেদ্দায় নয়', 'তালবিয়াহ পড়ুন; ইহরামের নিষেধাজ্ঞা মেনে চলুন'],
      en: ['Bathe; men: two white sheets, women: modest clothing', 'Intend before the Miqat - on the plane, not at Jeddah', 'Recite the Talbiyah; observe the restrictions of Ihram'],
    },
    duas: ['niyyah', 'ishtirat', 'talbiyah'],
  },
  {
    id: 'enter',
    stageIds: ['entering'],
    title: { bn: 'মসজিদুল হারামে প্রবেশ', en: 'Entering Masjid al-Haram' },
    quick: {
      bn: ['আগে বিশ্রাম; অজু করুন', 'ডান পা দিয়ে প্রবেশ, প্রবেশের দোয়া', 'কাবা দেখে নিজের ভাষায় দোয়া - নির্দিষ্ট দোয়া প্রমাণিত নয়'],
      en: ['Rest first; make wudu', 'Enter with the right foot; the entry dua', 'On seeing the Kaaba, supplicate in your own words - no specific dua is established'],
    },
    duas: ['enter-mosque', 'seeing-kaaba'],
  },
  {
    id: 'tawaf',
    stageIds: ['tawaf'],
    title: { bn: 'তাওয়াফ', en: 'Tawaf' },
    quick: {
      bn: ['তালবিয়াহ বন্ধ; পুরুষ: ইযতিবা', 'হাজরে আসওয়াদ থেকে শুরু: ইশারা ও “আল্লাহু আকবার”', 'কাবা বাম দিকে, হাতিমের বাইরে দিয়ে, সাত চক্কর', 'রুকনে ইয়ামানি → হাজরে আসওয়াদ: “রাব্বানা আতিনা…”'],
      en: ['Stop the Talbiyah; men: idtiba‘', 'Start at the Black Stone: point and say “Allahu Akbar”', 'Kaaba on your left, outside the Hijr, seven circuits', 'Yemeni Corner → Black Stone: “Rabbana atina…”'],
    },
    duas: ['takbir-black-stone', 'rabbana-atina', 'personal-dua'],
  },
  {
    id: 'prayer',
    stageIds: ['prayer', 'zamzam'],
    title: { bn: 'তাওয়াফের পর সালাত ও জমজম', en: 'Prayer after Tawaf and Zamzam' },
    quick: {
      bn: ['কাঁধ ঢেকে দুই রাকাত - সম্ভব হলে মাকামের পেছনে', 'কাফিরুন ও ইখলাস পড়া সুন্নাহ', 'জমজম পান করে দোয়া'],
      en: ['Cover the shoulder; two rak‘ahs - behind the Station if possible', 'Reciting al-Kafirun and al-Ikhlas is Sunnah', 'Drink Zamzam and supplicate'],
    },
    duas: ['maqam-verse', 'zamzam'],
  },
  {
    id: 'sai',
    stageIds: ['sai'],
    title: { bn: 'সাফা ও মারওয়ার সাঈ', en: 'Sa‘i between Safa and Marwah' },
    quick: {
      bn: ['সাফা থেকে শুরু: ২:১৫৮ ও “আবদাউ বিমা বাদাআল্লাহু বিহি”', 'কিবলামুখী হয়ে জিকির ও দোয়া', 'সাতবার, শেষ মারওয়ায়; পুরুষ সবুজ বাতির মাঝে দ্রুত'],
      en: ['Start at Safa: 2:158 and “Abda’u bima bada’a Allahu bih”', 'Face the qiblah, remember Allah and supplicate', 'Seven journeys, ending at Marwah; men brisk between the green lights'],
    },
    duas: ['safa-verse', 'safa-dhikr', 'sai-companion'],
  },
  {
    id: 'halq',
    stageIds: ['halq'],
    title: { bn: 'হলক বা তাকসির', en: 'Halq or Taqsir' },
    quick: {
      bn: ['পুরুষ: পুরো মাথা মুণ্ডন (উত্তম) বা সমানভাবে ছোট', 'নারী: আঙুলের এক কড় পরিমাণ, একান্তে', 'এরপর ইহরাম শেষ'],
      en: ['Men: shave the whole head (better) or shorten evenly', 'Women: a fingertip’s length, in private', 'Ihram ends after this'],
    },
    duas: ['halq-mercy'],
  },
  {
    id: 'complete',
    stageIds: ['complete', 'after'],
    title: { bn: 'উমরাহ সম্পন্ন ও পরবর্তী সময়', en: 'Completion and after Umrah' },
    quick: {
      bn: ['আল্লাহর শুকরিয়া ও কবুলের দোয়া', 'জামাতে সালাত, নফল তাওয়াফ', 'মদিনা ঐচ্ছিক - উমরাহর অংশ নয়'],
      en: ['Thank Allah and ask for acceptance', 'Congregational prayer, voluntary Tawaf', 'Madinah is optional - not part of Umrah'],
    },
    duas: ['istighfar-master', 'greeting-prophet', 'returning'],
  },
]

export const guidePageIds = guidePages.map((p) => p.id)
export const guidePageById = new Map(guidePages.map((p) => [p.id, p]))
/** Old stage URLs (/guide/tawaf etc.) still work: stage id → page id. */
export const pageForStage = new Map(guidePages.flatMap((p) => p.stageIds.map((s) => [s, p.id] as const)))
