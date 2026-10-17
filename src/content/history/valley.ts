import type { SacredPlace } from '../types'
import { SRC } from './sources'

const IBRAHIM_ERA = { bn: 'ইবরাহিম (আ.)-এর যুগ - তারিখ অজানা', en: 'Time of Ibrahim - date unknown' }

export const hajar: SacredPlace = {
  id: 'safa-marwah',
  order: 2,
  scene: 'hajar',
  title: { bn: 'হাজেরা (আ.), ইসমাইল (আ.) ও সাঈর সূচনা', en: 'Hajar, Isma‘il and the origin of Sa‘i' },
  subtitle: { bn: 'এক মায়ের তাওয়াক্কুল ও সন্ধান - যা আজ প্রতিটি উমরাহর অংশ', en: 'A mother’s trust and search - now part of every Umrah' },
  intro: {
    bn: 'সাফা ও মারওয়া মসজিদুল হারামের পাশে দুটি ছোট পাহাড়। এদের মাঝে হাজেরা (আ.)-এর পানির সন্ধানের ঘটনা সহিহ বুখারিতে বিস্তারিত বর্ণিত হয়েছে, আর নবী ﷺ বলেছেন, এটিই মানুষের সাঈর উৎস।',
    en: 'Safa and Marwah are two small hills beside Masjid al-Haram. Hajar’s search for water between them is narrated in detail in Sahih al-Bukhari, and the Prophet ﷺ said this is the origin of people’s Sa‘i.',
  },
  beginning: {
    id: 'settled',
    title: { bn: 'অনাবাদি উপত্যকায়', en: 'In a valley without cultivation' },
    body: {
      bn: 'ইবরাহিম (আ.) হাজেরা (আ.) ও শিশু ইসমাইল (আ.)-কে সম্মানিত ঘরের কাছে এক অনাবাদি উপত্যকায় রেখে দোয়া করেন, যাতে তারা সালাত কায়েম করে এবং মানুষের অন্তর তাদের প্রতি অনুরাগী হয়। হাদিসে আছে, হাজেরা (আ.) জিজ্ঞেস করেছিলেন, আল্লাহ কি এ নির্দেশ দিয়েছেন? উত্তর “হ্যাঁ” শুনে তিনি বলেছিলেন, তাহলে তিনি আমাদের ধ্বংস হতে দেবেন না।',
      en: 'Ibrahim left Hajar and the infant Isma‘il in a barren valley near the Sacred House, praying that they would establish prayer and that people’s hearts would incline towards them. The hadith relates that Hajar asked whether Allah had commanded this; hearing “yes”, she said: then He will not abandon us.',
    },
    kind: 'quran',
    refs: ['q-14-37', 'h-hajar-sai'],
    stage: 'arrival',
  },
  story: [
    {
      id: 'search',
      title: { bn: 'পানির সন্ধান', en: 'The search for water' },
      body: {
        bn: 'পানি ও খাবার শেষ হয়ে গেলে শিশুটি কষ্ট পেতে লাগল। হাজেরা (আ.) কাছের পাহাড় সাফায় উঠে চারদিকে তাকালেন, কাউকে দেখলেন না। তিনি নেমে উপত্যকার নিচু অংশ দৌড়ে পার হলেন, তারপর মারওয়ায় উঠে আবার দেখলেন।',
        en: 'When the water and food ran out, the child began to suffer. Hajar climbed the nearby hill of Safa and looked in every direction, but saw no one. She came down, ran across the low part of the valley, then climbed Marwah and looked again.',
      },
      kind: 'hadith',
      refs: ['h-hajar-sai'],
      stage: 'search',
    },
    {
      id: 'seven',
      title: { bn: 'সাতবার', en: 'Seven times' },
      body: {
        bn: 'তিনি এভাবে সাতবার সাফা ও মারওয়ার মাঝে যাতায়াত করলেন। নবী ﷺ বলেন: “আর এটিই হলো এ দুটির মাঝে মানুষের সাঈ।” উপত্যকার যে নিচু অংশ তিনি দৌড়ে পার হয়েছিলেন, তার স্মরণে আজ সবুজ বাতির মাঝে পুরুষেরা দ্রুত চলেন।',
        en: 'She went between Safa and Marwah seven times. The Prophet ﷺ said: “And that is the Sa‘i of people between them.” The low stretch she crossed at a run is remembered today in the brisk pace men take between the green lights.',
      },
      kind: 'hadith',
      refs: ['h-hajar-sai', 'h-jabir-sai'],
      stage: 'run',
    },
    {
      id: 'zamzam',
      title: { bn: 'জমজমের আবির্ভাব', en: 'Zamzam appears' },
      body: {
        bn: 'সপ্তমবার মারওয়ায় থাকতে তিনি একটি শব্দ শুনলেন। হাদিস অনুযায়ী জমজমের স্থানে একজন ফেরেশতা মাটিতে আঘাত করলে পানি বেরিয়ে এল, আর হাজেরা (আ.) পানির চারপাশে বাঁধ দিতে লাগলেন। নবী ﷺ বলেন: আল্লাহ ইসমাইলের মায়ের প্রতি রহম করুন; তিনি যদি তা ছেড়ে দিতেন, জমজম একটি প্রবাহিত ঝরনা হতো। (ফেরেশতাকে এখানে চিত্রিত করা হয়নি।)',
        en: 'On Marwah for the seventh time she heard a sound. According to the hadith an angel struck the ground at the place of Zamzam and water came out, and Hajar began to wall it in. The Prophet ﷺ said: May Allah have mercy on the mother of Isma‘il; had she left it, Zamzam would have been a flowing spring. (The angel is not depicted here.)',
      },
      kind: 'hadith',
      refs: ['h-hajar-zamzam'],
      stage: 'zamzam',
    },
    {
      id: 'settlement',
      title: { bn: 'জনবসতি ও ঘর নির্মাণ', en: 'A settlement, then the House' },
      body: {
        bn: 'একই হাদিসে আছে, পানি দেখে জুরহুম গোত্রের লোকেরা হাজেরা (আ.)-এর অনুমতি নিয়ে সেখানে বসতি গড়ে; ইসমাইল (আ.) তাদের মধ্যে বড় হন। পরবর্তীতে ইবরাহিম (আ.) ফিরে এসে ইসমাইল (আ.)-এর সাথে কাবার ভিত্তি উঁচু করেন।',
        en: 'The same hadith tells that people of the tribe of Jurhum, seeing the water, settled there with Hajar’s permission, and Isma‘il grew up among them. Later Ibrahim returned and, with Isma‘il, raised the foundations of the Kaaba.',
      },
      kind: 'hadith',
      refs: ['h-building-house', 'q-2-127'],
      stage: 'today',
    },
  ],
  timeline: [
    { id: 'h1', when: IBRAHIM_ERA, year: null, title: { bn: 'উপত্যকায় বসবাস', en: 'Settled in the valley' }, text: { bn: 'ইবরাহিম (আ.)-এর দোয়া: “অনাবাদি উপত্যকায় তোমার সম্মানিত ঘরের কাছে।”', en: 'Ibrahim’s prayer: “a valley without cultivation, near Your Sacred House.”' }, kind: 'quran', refs: ['q-14-37'], stage: 'arrival' },
    { id: 'h2', when: IBRAHIM_ERA, year: null, title: { bn: 'সাতবার সাফা–মারওয়া', en: 'Seven journeys between the hills' }, text: { bn: 'হাজেরা (আ.)-এর পানির সন্ধান - সাঈর উৎস।', en: 'Hajar’s search for water - the origin of Sa‘i.' }, kind: 'hadith', refs: ['h-hajar-sai'], stage: 'run' },
    { id: 'h3', when: IBRAHIM_ERA, year: null, title: { bn: 'জমজম', en: 'Zamzam' }, text: { bn: 'পানি বের হয়; হাজেরা (আ.) তার চারপাশে বাঁধ দেন।', en: 'Water emerges; Hajar walls it in.' }, kind: 'hadith', refs: ['h-hajar-zamzam'], stage: 'zamzam' },
    { id: 'h4', when: { bn: '১০ হি. / ৬৩২ খ্রি.', en: '10 AH / 632 CE' }, year: 632, title: { bn: 'সাঈর বিধান', en: 'Sa‘i as a rite' }, text: { bn: '“সাফা ও মারওয়া আল্লাহর নিদর্শন” (২:১৫৮); নবী ﷺ সাফা থেকে সাঈ শুরু করেন।', en: '“Safa and Marwah are among the symbols of Allah” (2:158); the Prophet ﷺ began Sa‘i at Safa.' }, kind: 'quran', refs: ['q-2-158', 'h-jabir-sai'], stage: 'run' },
    { id: 'h5', when: { bn: 'আজ', en: 'Today' }, year: 2026, title: { bn: 'প্রতিটি উমরাহয় সাঈ', en: 'Sa‘i in every Umrah' }, text: { bn: 'শীতাতপ নিয়ন্ত্রিত মাসআয় একই সাতবারের যাত্রা।', en: 'The same seven journeys, now in the air-conditioned Mas‘a.' }, kind: 'documented', sources: [SRC.masa2008], stage: 'today' },
  ],
  umrah: {
    text: {
      bn: 'উমরাহর সাঈতে আপনি হাজেরা (আ.)-এর পথই অনুসরণ করেন: সাফা থেকে শুরু, সাতবার, শেষ মারওয়ায়; পুরুষেরা সবুজ বাতির মাঝে দ্রুত চলেন।',
      en: 'In the Sa‘i of Umrah you follow Hajar’s path: start at Safa, seven journeys, finish at Marwah; men move briskly between the green lights.',
    },
    stageId: 'sai',
  },
  refs: ['q-14-37', 'h-hajar-sai', 'h-hajar-zamzam', 'q-2-158', 'h-jabir-sai'],
  thenNow: {
    then: { text: { bn: 'চিত্রণ: সাফা ও মারওয়ার মাঝের খোলা উপত্যকা - কোনো আলোকচিত্র নয়; প্রাচীন রূপ সম্পর্কে বিস্তারিত তথ্য নেই।', en: 'Illustration: the open valley between Safa and Marwah - not a photograph; no detailed record of its ancient appearance exists.' } },
    now: { mediaId: 'h-masa-2019', text: { bn: 'আজকের মাসআ - একই দুই পাহাড়ের মাঝে বহুতল গ্যালারি।', en: 'The Mas‘a today - a multi-level gallery between the same two hills.' } },
  },
  audio: ['q-valley', 'q-safa-marwah'],
  quiz: [
    {
      q: { bn: 'হাজেরা (আ.) কোন পাহাড় থেকে সন্ধান শুরু করেছিলেন?', en: 'From which hill did Hajar begin her search?' },
      options: [{ bn: 'সাফা', en: 'Safa' }, { bn: 'মারওয়া', en: 'Marwah' }, { bn: 'আরাফাত', en: 'Arafat' }],
      answer: 0,
      explain: { bn: 'সহিহ বুখারি ৩৩৬৪ - আজও সাঈ সাফা থেকে শুরু হয়।', en: 'Sahih al-Bukhari 3364 - Sa‘i still begins at Safa.' },
    },
    {
      q: { bn: 'তিনি কতবার দুই পাহাড়ের মাঝে যাতায়াত করেছিলেন?', en: 'How many times did she go between the hills?' },
      options: [{ bn: 'তিনবার', en: 'Three' }, { bn: 'সাতবার', en: 'Seven' }, { bn: 'চৌদ্দবার', en: 'Fourteen' }],
      answer: 1,
      explain: { bn: 'সাতবার - প্রতিটি একমুখী যাত্রা এক বার।', en: 'Seven - each one-way journey counts as one.' },
    },
    {
      q: { bn: 'সাঈ সম্পর্কে নবী ﷺ কী বলেছেন?', en: 'What did the Prophet ﷺ say about this event?' },
      options: [
        { bn: '“এটিই এ দুটির মাঝে মানুষের সাঈ”', en: '“That is the Sa‘i of people between them”' },
        { bn: 'সাঈ শুধু নারীদের জন্য', en: 'Sa‘i is only for women' },
        { bn: 'এর কোনো সম্পর্ক নেই', en: 'It has no connection' },
      ],
      answer: 0,
      explain: { bn: 'সহিহ বুখারি ৩৩৬৪।', en: 'Sahih al-Bukhari 3364.' },
    },
  ],
}

export const zamzam: SacredPlace = {
  id: 'zamzam',
  order: 3,
  scene: 'zamzam',
  title: { bn: 'জমজম কূপ', en: 'The Well of Zamzam' },
  subtitle: { bn: 'হাজেরা (আ.)-এর যুগ থেকে আজকের পানি সরবরাহ পর্যন্ত', en: 'From the time of Hajar to today’s water supply' },
  intro: {
    bn: 'জমজম কূপ কাবার কাছে, মসজিদুল হারামের ভেতরে অবস্থিত। এর পানি বরকতময় বলে সহিহ হাদিসে এসেছে, আর হাজিরা ও উমরাহকারীরা তা পান করেন এবং দেশে নিয়ে যান।',
    en: 'The Well of Zamzam lies close to the Kaaba inside Masjid al-Haram. Authentic hadith describe its water as blessed; pilgrims drink it and carry it home.',
  },
  beginning: {
    id: 'origin',
    title: { bn: 'উৎপত্তি', en: 'Origin' },
    body: {
      bn: 'সহিহ বুখারির বর্ণনা অনুযায়ী, হাজেরা (আ.)-এর সাতবার সাফা–মারওয়া যাতায়াতের পর জমজমের স্থানে পানি বের হয় এবং তিনি তার চারপাশে বাঁধ দেন। নবী ﷺ বলেন, তিনি তা ছেড়ে দিলে জমজম একটি প্রবাহিত ঝরনা হতো।',
      en: 'According to Sahih al-Bukhari, after Hajar’s seven journeys between Safa and Marwah, water came out at the place of Zamzam and she walled it in. The Prophet ﷺ said that had she left it, Zamzam would have been a flowing spring.',
    },
    kind: 'hadith',
    refs: ['h-hajar-zamzam'],
    stage: 'well',
  },
  story: [
    {
      id: 'blessed',
      title: { bn: 'বরকতময় পানি', en: 'Blessed water' },
      body: {
        bn: 'নবী ﷺ জমজম সম্পর্কে বলেছেন: “নিশ্চয়ই এটি বরকতময়; এটি পরিতৃপ্তিদায়ক খাদ্য।” আরেক বর্ণনায় আছে, জমজম যে উদ্দেশ্যে পান করা হয় তার জন্য - এর সনদ নিয়ে মুহাদ্দিসদের মতভেদ আছে। নবী ﷺ নিজে হজের সময় জমজম পান করেছেন।',
        en: 'The Prophet ﷺ said of Zamzam: “It is blessed; it is food that satisfies.” Another narration says Zamzam is for whatever it is drunk for - hadith scholars differ on its chain. The Prophet ﷺ himself drank Zamzam during his Hajj.',
      },
      kind: 'hadith',
      refs: ['h-zamzam-blessed', 'h-zamzam-intention', 'h-jabir-sai'],
      stage: 'well',
    },
    {
      id: 'building',
      title: { bn: 'কূপের ওপরের ভবন', en: 'The building over the well' },
      body: {
        bn: 'উনিশ শতকের আলোকচিত্রে কাবার পাশে গম্বুজওয়ালা জমজম ভবন দেখা যায়। সৌদি তথ্যসূত্র অনুযায়ী ১৩৮২ হিজরিতে (১৯৬২ খ্রি.) মাতাফ প্রশস্ত করতে কূপের মুখ মাতাফের নিচে একটি বেসমেন্টে নামিয়ে নেওয়া হয় এবং ১৪২৪ হিজরিতে (২০০৩ খ্রি.) বেসমেন্টের প্রবেশপথ ঢেকে দেওয়া হয়। কূপটি আজও সেখানে আছে, কিন্তু সরাসরি দেখা যায় না।',
        en: 'Nineteenth-century photographs show a domed Zamzam building beside the Kaaba. According to Saudi sources, in 1382 AH (1962 CE) the well’s opening was lowered into a basement beneath the Mataf to widen the Tawaf area, and in 1424 AH (2003 CE) the basement entrances were covered over. The well is still there but no longer visible.',
      },
      kind: 'documented',
      sources: [SRC.zamzamTimeline, SRC.zamzamSpa],
      stage: 'well',
    },
    {
      id: 'depth',
      title: { bn: 'কূপের গভীরতা', en: 'The depth of the well' },
      body: {
        bn: 'সৌদি প্রেস এজেন্সির তথ্যমতে কূপটি প্রায় ৩০ মিটার গভীর - ওপরের প্রায় ১২.৮ মিটার গাঁথুনি করা এবং নিচের প্রায় ১৭.২ মিটার পাথর কেটে তৈরি। ভূগর্ভস্থ প্রকৌশলের আর কোনো বিশদ এখানে অনুমান করে দেখানো হয়নি।',
        en: 'According to the Saudi Press Agency the well is about 30 m deep - roughly 12.8 m lined with masonry and 17.2 m cut into rock. No further underground engineering detail is guessed at here.',
      },
      kind: 'documented',
      sources: [SRC.zamzamSpa],
      stage: 'well',
    },
    {
      id: 'project',
      title: { bn: 'আজকের সরবরাহব্যবস্থা', en: 'How the water reaches you today' },
      body: {
        bn: '২০১০ সালের ৩ সেপ্টেম্বর কুদাইয়ে বাদশাহ আবদুল্লাহ জমজম পানি প্রকল্প চালু হয়। প্রকাশিত তথ্য অনুযায়ী এটি দিনে প্রায় ৫০ লাখ লিটার পানি পরিশোধন করে, ১ কোটি লিটারের ট্যাংকে সংরক্ষণ করে এবং চারটি ইস্পাতের পাইপে মসজিদুল হারামে পাঠায়; দিনে প্রায় ২০ লাখ লিটার বোতলজাত হয়। হারামের কুলারগুলোতে আপনি এই পানিই পান করেন।',
        en: 'The King Abdullah Zamzam Water Project at Kudai was launched on 3 September 2010. Published figures say it purifies about 5 million litres a day, stores water in a 10-million-litre tank and pumps it to Masjid al-Haram through four steel pipes, with about 2 million litres a day going to bottling. The coolers in the Haram carry this water.',
      },
      kind: 'documented',
      sources: [SRC.zamzamProject, SRC.zamzamDiscover],
      stage: 'today',
    },
  ],
  timeline: [
    { id: 'z1', when: IBRAHIM_ERA, year: null, title: { bn: 'পানির আবির্ভাব', en: 'Water emerges' }, text: { bn: 'হাজেরা (আ.)-এর সন্ধানের পর জমজম।', en: 'Zamzam after Hajar’s search.' }, kind: 'hadith', refs: ['h-hajar-zamzam'], stage: 'well' },
    { id: 'z2', when: { bn: '১০ হিজরি / ৬৩২ খ্রি.', en: '10 AH / 632 CE' }, year: 632, title: { bn: 'বিদায় হজে নবী ﷺ জমজম পান করেন', en: 'The Prophet ﷺ drinks Zamzam at the Farewell Hajj' }, text: { bn: 'জাবির (রা.)-এর দীর্ঘ হাদিসে বর্ণিত।', en: 'Narrated in Jabir’s long hadith.' }, kind: 'hadith', refs: ['h-jabir-sai'], stage: 'well' },
    { id: 'z3', when: { bn: '১৮৮৮ খ্রি.', en: '1888 CE' }, year: 1888, title: { bn: 'গম্বুজওয়ালা জমজম ভবন', en: 'The domed Zamzam building' }, text: { bn: 'সমকালীন আলোকচিত্রে কাবার পাশে ভবনটি দেখা যায়।', en: 'Contemporary photographs show the building beside the Kaaba.' }, kind: 'documented', stage: 'well' },
    { id: 'z4', when: { bn: '১৩৮২ হি. / ১৯৬২ খ্রি.', en: '1382 AH / 1962 CE' }, year: 1962, title: { bn: 'মাতাফের নিচে বেসমেন্ট', en: 'Basement beneath the Mataf' }, text: { bn: 'মাতাফ প্রশস্ত করতে কূপের মুখ নিচে নামানো হয়।', en: 'The well’s opening is lowered to widen the Mataf.' }, kind: 'documented', sources: [SRC.zamzamTimeline], stage: 'well' },
    { id: 'z5', when: { bn: '১৪২৪ হি. / ২০০৩ খ্রি.', en: '1424 AH / 2003 CE' }, year: 2003, title: { bn: 'প্রবেশপথ ঢেকে দেওয়া', en: 'Entrances covered' }, text: { bn: 'বেসমেন্টের প্রবেশপথ বন্ধ করে মাতাফ সমতল করা হয়।', en: 'Basement entrances are roofed over, levelling the Mataf.' }, kind: 'documented', sources: [SRC.zamzamTimeline], stage: 'well' },
    { id: 'z6', when: { bn: '১৪৩১ হি. / ২০১০ খ্রি.', en: '1431 AH / 2010 CE' }, year: 2010, title: { bn: 'কুদাই জমজম প্রকল্প', en: 'Kudai Zamzam project' }, text: { bn: 'পরিশোধন, সংরক্ষণ, পাইপে হারামে সরবরাহ ও বোতলজাতকরণ।', en: 'Purification, storage, piping to the Haram and bottling.' }, kind: 'documented', sources: [SRC.zamzamProject], stage: 'today' },
  ],
  umrah: {
    text: {
      bn: 'তাওয়াফের দুই রাকাতের পর জমজম পান করা মুস্তাহাব - বাধ্যতামূলক নয়। মসজিদের যেকোনো কুলার থেকে পান করুন এবং দোয়া করুন।',
      en: 'Drinking Zamzam after the two rak‘ahs of Tawaf is recommended - not required. Drink from any cooler in the mosque and supplicate.',
    },
    stageId: 'zamzam',
  },
  refs: ['h-hajar-zamzam', 'h-zamzam-blessed', 'h-zamzam-intention'],
  thenNow: {
    then: { mediaId: 'h-zamzam-1888', text: { bn: '১৮৮৮: কাবার পাশে গম্বুজওয়ালা জমজম ভবন।', en: '1888: the domed Zamzam building beside the Kaaba.' } },
    now: { mediaId: 'p-zamzam-1', text: { bn: 'আজ: হারামজুড়ে জমজমের কুলার; কূপটি মাতাফের নিচে।', en: 'Today: Zamzam coolers across the Haram; the well lies beneath the Mataf.' } },
  },
  audio: ['q-valley'],
  quiz: [
    {
      q: { bn: 'জমজম কীভাবে আবির্ভূত হয়েছিল (সহিহ বুখারি অনুযায়ী)?', en: 'How did Zamzam appear, according to Sahih al-Bukhari?' },
      options: [
        { bn: 'হাজেরা (আ.)-এর সন্ধানের পর জমজমের স্থানে পানি বের হয়', en: 'Water came out at its place after Hajar’s search' },
        { bn: 'কুরাইশরা খনন করেছিল', en: 'Quraysh dug it' },
        { bn: 'উসমানীয়রা নির্মাণ করেছিল', en: 'The Ottomans built it' },
      ],
      answer: 0,
      explain: { bn: 'সহিহ বুখারি ৩৩৬৪।', en: 'Sahih al-Bukhari 3364.' },
    },
    {
      q: { bn: 'আজ কূপটি কোথায়?', en: 'Where is the well today?' },
      options: [{ bn: 'মাতাফের নিচে', en: 'Beneath the Mataf' }, { bn: 'মদিনায়', en: 'In Madinah' }, { bn: 'এটি আর নেই', en: 'It no longer exists' }],
      answer: 0,
      explain: { bn: '১৯৬২ সালে কূপের মুখ মাতাফের নিচের বেসমেন্টে নামানো হয়।', en: 'In 1962 the opening was lowered into a basement beneath the Mataf.' },
    },
    {
      q: { bn: 'উমরাহয় জমজম পান করার বিধান কী?', en: 'What is the ruling on drinking Zamzam in Umrah?' },
      options: [{ bn: 'মুস্তাহাব', en: 'Recommended' }, { bn: 'রুকন', en: 'A pillar' }, { bn: 'নিষিদ্ধ', en: 'Forbidden' }],
      answer: 0,
      explain: { bn: 'এটি উমরাহর আবশ্যক অংশ নয়।', en: 'It is not a required part of Umrah.' },
    },
  ],
}

export const hills: SacredPlace = {
  id: 'hills',
  order: 4,
  scene: 'hills',
  title: { bn: 'সাফা ও মারওয়া পাহাড়', en: 'Mount Safa and Mount Marwah' },
  subtitle: { bn: 'খোলা উপত্যকা থেকে মসজিদুল হারামের ভেতরের গ্যালারি', en: 'From an open valley to a gallery inside Masjid al-Haram' },
  intro: {
    bn: 'সাফা ও মারওয়া কাবার পূর্ব দিকের দুটি পাহাড়। কুরআন এদের “আল্লাহর নিদর্শন” বলেছে। একসময় এদের মাঝে খোলা পথ ছিল; আজ পুরো অংশটি মসজিদুল হারামের ভেতরে শীতাতপ নিয়ন্ত্রিত বহুতল মাসআ।',
    en: 'Safa and Marwah are two hills east of the Kaaba. The Qur’an calls them “among the symbols of Allah”. Once an open path lay between them; today the whole stretch is the air-conditioned, multi-level Mas‘a inside Masjid al-Haram.',
  },
  beginning: {
    id: 'symbols',
    title: { bn: 'আল্লাহর নিদর্শন', en: 'Symbols of Allah' },
    body: {
      bn: 'আল-বাকারা ২:১৫৮-এ আল্লাহ বলেন, সাফা ও মারওয়া তাঁর নিদর্শন, এবং হজ বা উমরাহকারীর জন্য এদের মাঝে সাঈ করায় দোষ নেই। পাহাড় দুটির মর্যাদার মূল ভিত্তি হাজেরা (আ.)-এর ঘটনা, যা সহিহ বুখারিতে বর্ণিত।',
      en: 'In al-Baqarah 2:158 Allah says Safa and Marwah are among His symbols, and that there is no blame on one performing Hajj or Umrah for walking between them. The hills’ standing rests on the story of Hajar narrated in Sahih al-Bukhari.',
    },
    kind: 'quran',
    refs: ['q-2-158', 'h-hajar-sai'],
    stage: 'then',
  },
  story: [
    {
      id: 'prophet',
      title: { bn: 'নবী ﷺ-এর সাঈ', en: 'The Sa‘i of the Prophet ﷺ' },
      body: {
        bn: 'জাবির (রা.)-এর বর্ণনায়, নবী ﷺ সাফার কাছে এসে ২:১৫৮ পড়লেন, বললেন “আল্লাহ যা দিয়ে শুরু করেছেন আমিও তা দিয়ে শুরু করছি”, সাফায় উঠে কিবলামুখী হয়ে আল্লাহর একত্ব ঘোষণা করলেন, তারপর উপত্যকার নিচু অংশে দ্রুত চললেন এবং মারওয়াতেও একই কাজ করলেন।',
        en: 'In Jabir’s narration, the Prophet ﷺ approached Safa reciting 2:158, said “I begin with what Allah began with”, climbed Safa, faced the qiblah and declared Allah’s oneness, then moved briskly through the low part of the valley and did the same on Marwah.',
      },
      kind: 'hadith',
      refs: ['h-jabir-sai'],
      stage: 'then',
    },
    {
      id: 'street',
      title: { bn: 'একসময়ের খোলা পথ', en: 'Once an open street' },
      body: {
        bn: 'ঐতিহাসিক বিবরণ ও উনিশ–বিশ শতকের আলোকচিত্র অনুযায়ী মাসআ দীর্ঘকাল মসজিদের বাইরের একটি পথ ছিল, যার দুপাশে বসতি ও দোকান ছিল; মসজিদের বাব আলি ফটক এর দিকে খুলত। আমরা মাসআর কোনো নিশ্চিতভাবে চিহ্নিত পুরোনো আলোকচিত্র পাইনি, তাই এখানে চিত্রণ ব্যবহার করা হয়েছে।',
        en: 'Historical accounts and 19th–20th-century photographs indicate that for a long time the Mas‘a was a street outside the mosque, lined with houses and shops; the mosque’s Bab Ali gate faced it. We found no clearly identified old photograph of the Mas‘a itself, so an illustration is used here.',
      },
      kind: 'documented',
      sources: [SRC.britannicaHaram],
      stage: 'then',
    },
    {
      id: 'enclosed',
      title: { bn: 'মসজিদের অন্তর্ভুক্ত', en: 'Brought inside the mosque' },
      body: {
        bn: 'প্রথম সৌদি সম্প্রসারণে (১৩৭৫–১৩৯৩ হিজরি / ১৯৫৫–১৯৭৩ খ্রি.) মাসআকে ঢাকা দিয়ে দোতলা করে মসজিদুল হারামের সাথে যুক্ত করা হয়। ১৪২৮–১৪২৯ হিজরিতে (২০০৭–২০০৮ খ্রি.) মাসআ আরও প্রশস্ত ও বহুতল করা হয় - একটি সূত্রে প্রায় ২০ মিটার থেকে ৪০ মিটার প্রশস্ত হওয়ার কথা আছে, যা আমরা স্বাধীনভাবে নিশ্চিত করতে পারিনি।',
        en: 'In the first Saudi expansion (1375–1393 AH / 1955–1973 CE) the Mas‘a was roofed, given an upper floor and joined to Masjid al-Haram. In 1428–1429 AH (2007–2008 CE) it was widened and given more floors - one source gives a widening from about 20 m to 40 m, which we could not confirm independently.',
      },
      kind: 'documented',
      sources: [SRC.firstExpansion, SRC.masa2008],
      stage: 'now',
    },
  ],
  timeline: [
    { id: 'm1', when: IBRAHIM_ERA, year: null, title: { bn: 'হাজেরা (আ.)-এর সন্ধান', en: 'Hajar’s search' }, text: { bn: 'দুই পাহাড়ের মাঝে সাতবার।', en: 'Seven journeys between the two hills.' }, kind: 'hadith', refs: ['h-hajar-sai'], stage: 'then' },
    { id: 'm2', when: { bn: '১০ হিজরি / ৬৩২ খ্রি.', en: '10 AH / 632 CE' }, year: 632, title: { bn: 'নবী ﷺ-এর সাঈ', en: 'The Prophet’s ﷺ Sa‘i' }, text: { bn: 'বিদায় হজে সাফা থেকে শুরু (জাবির রা.-এর হাদিস)।', en: 'Beginning at Safa during the Farewell Hajj (Jabir’s hadith).' }, kind: 'hadith', refs: ['h-jabir-sai'], stage: 'then' },
    { id: 'm3', when: { bn: '১৯৫৫–১৯৭৩ খ্রি.', en: '1955–1973 CE' }, year: 1960, title: { bn: 'মাসআ মসজিদের অংশ', en: 'Mas‘a joins the mosque' }, text: { bn: 'প্রথম সৌদি সম্প্রসারণে ছাদ ও দোতলা।', en: 'Roofed and given an upper floor in the first Saudi expansion.' }, kind: 'documented', sources: [SRC.firstExpansion], stage: 'now' },
    { id: 'm4', when: { bn: '২০০৭–২০০৮ খ্রি.', en: '2007–2008 CE' }, year: 2008, title: { bn: 'মাসআ সম্প্রসারণ', en: 'Mas‘a expansion' }, text: { bn: 'প্রশস্ত ও বহুতল গ্যালারি।', en: 'A wider, multi-level gallery.' }, kind: 'documented', sources: [SRC.masa2008], stage: 'now' },
  ],
  umrah: {
    text: {
      bn: 'সাঈ উমরাহর রুকন (অধিকাংশ মাযহাবে)। সাফায় এখনো প্রাকৃতিক পাথরের কিছু অংশ দেখা যায় - সেখান থেকে শুরু করুন।',
      en: 'Sa‘i is a pillar of Umrah (most schools). Part of the natural rock of Safa is still visible - that is where you begin.',
    },
    stageId: 'sai',
  },
  refs: ['q-2-158', 'h-jabir-sai', 'h-hajar-sai'],
  thenNow: {
    then: { mediaId: 'h-bab-ali-1914', text: { bn: '১৯১৪-এর আগে: বাব আলি ফটক, যা তখনকার মাসআ পথের দিকে খুলত।', en: 'Before 1914: Bab Ali gate, which then opened onto the Mas‘a street.' } },
    now: { mediaId: 'p-masa-1', text: { bn: 'আজ: মসজিদের ভেতরের শীতাতপ নিয়ন্ত্রিত মাসআ।', en: 'Today: the air-conditioned Mas‘a inside the mosque.' } },
  },
  audio: ['q-safa-marwah'],
  quiz: [
    {
      q: { bn: 'কুরআনের কোন আয়াতে সাফা ও মারওয়াকে আল্লাহর নিদর্শন বলা হয়েছে?', en: 'Which verse calls Safa and Marwah symbols of Allah?' },
      options: [{ bn: 'আল-বাকারা ২:১৫৮', en: 'Al-Baqarah 2:158' }, { bn: 'আল-ফাতিহা ১:১', en: 'Al-Fatihah 1:1' }, { bn: 'আল-হজ ২২:২৭', en: 'Al-Hajj 22:27' }],
      answer: 0,
      explain: { bn: '২:১৫৮ - নবী ﷺ সাফায় এটি পড়েছিলেন।', en: '2:158 - recited by the Prophet ﷺ at Safa.' },
    },
    {
      q: { bn: 'কখন মাসআ মসজিদুল হারামের ভেতরে অন্তর্ভুক্ত হয়?', en: 'When was the Mas‘a brought inside Masjid al-Haram?' },
      options: [{ bn: 'প্রথম সৌদি সম্প্রসারণে (১৯৫৫–১৯৭৩)', en: 'In the first Saudi expansion (1955–1973)' }, { bn: 'নবী ﷺ-এর যুগে', en: 'In the Prophet’s ﷺ time' }, { bn: '২০২০ সালে', en: 'In 2020' }],
      answer: 0,
      explain: { bn: 'সৌদিপিডিয়া ও ব্রিটানিকা।', en: 'Saudipedia and Britannica.' },
    },
  ],
}
