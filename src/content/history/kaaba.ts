import type { SacredPlace } from '../types'
import { SRC } from './sources'

export const kaaba: SacredPlace = {
  id: 'kaaba',
  order: 1,
  scene: 'kaaba',
  title: { bn: 'কাবা', en: 'The Kaaba' },
  subtitle: { bn: 'ইবরাহিম (আ.) ও ইসমাইল (আ.)-এর নির্মিত ঘর - বিশ্বের মুসলমানদের কিবলা', en: 'The House raised by Ibrahim and Isma‘il - the qiblah of Muslims worldwide' },
  intro: {
    bn: 'কাবা মক্কার মসজিদুল হারামের কেন্দ্রে অবস্থিত ঘনকাকৃতির ঘর। পৃথিবীর সব মুসলমান সালাতে এর দিকেই মুখ করেন, আর উমরাহর তাওয়াফ এর চারপাশেই করা হয়। কুরআন একে “মানুষের জন্য নির্মিত প্রথম ঘর” বলেছে।',
    en: 'The Kaaba is the cube-shaped House at the centre of Masjid al-Haram in Makkah. Muslims everywhere face it in prayer, and the Tawaf of Umrah is performed around it. The Qur’an calls it “the first House established for mankind”.',
  },
  beginning: {
    id: 'foundations',
    title: { bn: 'ভিত্তি উঁচু করা', en: 'Raising the foundations' },
    body: {
      bn: 'কুরআন জানায়, আল্লাহ ইবরাহিম (আ.)-কে ঘরের স্থান দেখিয়ে দিয়েছিলেন এবং ইবরাহিম ও ইসমাইল (আ.) মিলে এর ভিত্তি উঁচু করেছিলেন, আর দোয়া করছিলেন: “হে আমাদের রব! আমাদের পক্ষ থেকে কবুল করো।” এটিই কাবার সবচেয়ে প্রাচীন ও নির্ভরযোগ্য বিবরণ।',
      en: 'The Qur’an tells that Allah showed Ibrahim the site of the House, and that Ibrahim and Isma‘il raised its foundations while praying: “Our Lord, accept this from us.” This is the earliest and most reliable account of the Kaaba.',
    },
    kind: 'quran',
    refs: ['q-2-127', 'q-22-26', 'q-3-96'],
    stage: 'foundations',
  },
  story: [
    {
      id: 'before-ibrahim',
      title: { bn: 'ইবরাহিম (আ.)-এর আগে?', en: 'Before Ibrahim?' },
      body: {
        bn: 'ইবরাহিম (আ.)-এর আগে ঘরটি ছিল কি না - যেমন আদম (আ.) বা ফেরেশতাদের নির্মাণ - এ নিয়ে কিছু বর্ণনা আছে, তবে সেগুলোর সনদ নিয়ে আলেমদের মধ্যে মতভেদ রয়েছে। কুরআন “ভিত্তি উঁচু করা” ও “ঘরের স্থান দেখানো” শব্দ ব্যবহার করেছে, তাই কেউ কেউ বলেন স্থানটি আগে থেকেই নির্ধারিত ছিল। এটিকে নিশ্চিত ইতিহাস হিসেবে উপস্থাপন করা উচিত নয়।',
        en: 'Some reports say the House existed before Ibrahim - built by Adam or by angels - but scholars differ over their chains of narration. Because the Qur’an speaks of “raising the foundations” and of Allah “showing Ibrahim the site”, some infer the site was already appointed. This should not be presented as established history.',
      },
      kind: 'disputed',
      refs: ['q-22-26'],
      stage: 'valley',
    },
    {
      id: 'prayer',
      title: { bn: 'ইবরাহিম (আ.)-এর দোয়া', en: 'The prayer of Ibrahim' },
      body: {
        bn: 'নির্মাণের সময় ইবরাহিম (আ.) দোয়া করেছিলেন - এই নগরীকে নিরাপদ করতে, এর অধিবাসীদের রিজিক দিতে, তাঁদের ও তাঁদের বংশধরদের অনুগত বানাতে, ইবাদতের নিয়ম দেখিয়ে দিতে এবং তাদের মধ্য থেকে একজন রাসুল পাঠাতে। মুসলমানরা বিশ্বাস করেন, এই শেষ দোয়ার পূর্ণতা হলো মুহাম্মাদ ﷺ-এর আগমন।',
        en: 'While building, Ibrahim prayed: that the city be made secure, its people provided for, that he and his descendants be made submissive to Allah, that they be shown their rites of worship, and that a messenger be raised from among them. Muslims understand the last of these prayers to be fulfilled in the Prophet Muhammad ﷺ.',
      },
      kind: 'quran',
      refs: ['q-2-127', 'q-14-37'],
      stage: 'walls',
    },
    {
      id: 'quraysh',
      title: { bn: 'কুরাইশদের পুনর্নির্মাণ', en: 'The rebuilding by Quraysh' },
      body: {
        bn: 'নবুয়তের কিছু আগে কুরাইশরা কাবা পুনর্নির্মাণ করে; সিরাতগ্রন্থ অনুযায়ী তখন নবী ﷺ-এর বয়স ছিল প্রায় ৩৫ বছর এবং হাজরে আসওয়াদ স্থাপনের বিরোধ তিনি সবার অংশগ্রহণে মীমাংসা করেন। আয়েশা (রা.)-এর হাদিসে আছে, অর্থের অভাবে কুরাইশরা ইবরাহিম (আ.)-এর পূর্ণ ভিত্তির ওপর নির্মাণ করতে পারেনি; তাই হাতিমের অংশ ঘরের বাইরে থেকে যায়। এজন্যই তাওয়াফ হাতিমের বাইরে দিয়ে করতে হয়।',
        en: 'Shortly before the Prophethood, Quraysh rebuilt the Kaaba; according to the Sira the Prophet ﷺ was about 35 and settled a dispute over replacing the Black Stone so that every clan shared the honour. A hadith of ‘A’ishah states that, lacking funds, Quraysh did not build on all of Ibrahim’s foundations, leaving the Hijr outside the walls - which is why Tawaf goes around the outside of the Hijr.',
      },
      kind: 'hadith',
      refs: ['h-quraysh-short'],
      sources: [SRC.quraysh1582, SRC.britannicaKaaba],
      stage: 'house',
    },
    {
      id: 'conquest',
      title: { bn: 'মক্কা বিজয় ও মূর্তি অপসারণ', en: 'The conquest of Makkah and the removal of idols' },
      body: {
        bn: 'অষ্টম হিজরিতে (৬৩০ খ্রি.) মক্কা বিজয়ের দিন কাবার চারপাশে ৩৬০টি মূর্তি ছিল। নবী ﷺ হাতের লাঠি দিয়ে সেগুলোতে আঘাত করছিলেন আর পড়ছিলেন: “সত্য এসেছে এবং মিথ্যা বিলুপ্ত হয়েছে।” ভেতরের ছবিগুলো সরানোর আগে তিনি ঘরে প্রবেশ করেননি। এভাবে কাবা আবার একমাত্র আল্লাহর ইবাদতের ঘর হলো।',
        en: 'On the day Makkah was conquered in 8 AH (630 CE) there were 360 idols around the Kaaba. The Prophet ﷺ struck them with a stick, reciting: “Truth has come and falsehood has vanished.” He did not enter the House until the images inside were removed. The Kaaba became once again a house for the worship of Allah alone.',
      },
      kind: 'hadith',
      refs: ['h-conquest-idols', 'h-images-removed', 'q-17-81'],
      stage: 'purified',
    },
    {
      id: 'restorations',
      title: { bn: 'পরবর্তী পুনর্নির্মাণ ও সংস্কার', en: 'Later rebuildings and restorations' },
      body: {
        bn: 'ইতিহাসে কাবা কয়েকবার পুনর্নির্মিত ও সংস্কার হয়েছে: আবদুল্লাহ ইবনুয যুবাইর (রা.) ৬৪–৬৫ হিজরিতে একে ইবরাহিম (আ.)-এর ভিত্তির ওপর হাতিমসহ নির্মাণ করেন; ৭৪ হিজরিতে খলিফা আবদুল মালিকের নির্দেশে হাজ্জাজ ইবনে ইউসুফ হাতিমের দিক আবার কুরাইশের মাপে ফিরিয়ে নেন (সহিহ মুসলিম ১৩৩৩)। বন্যায় দেয়াল ধসে যাওয়ার পর উসমানীয় সুলতান মুরাদ চতুর্থের সময়ে পুনর্নির্মাণ হয় - অধিকাংশ সূত্রে ১০৩৯–১০৪০ হিজরি (১৬৩০ খ্রি.), যদিও সাল নিয়ে ভিন্নমত আছে এবং ১৪১৭ হিজরিতে (১৯৯৬ খ্রি.) বড় সংস্কার হয়। প্রাচীন যুগের সঠিক স্থাপত্যরূপ সম্পর্কে নির্ভরযোগ্য তথ্য সীমিত - তাই এখানকার চিত্রগুলো শুধু রূপরেখা।',
        en: 'The Kaaba has been rebuilt and restored several times: ‘Abdullah ibn al-Zubayr rebuilt it in 64–65 AH on Ibrahim’s foundations including the Hijr; in 74 AH al-Hajjaj ibn Yusuf, on the order of the caliph ‘Abd al-Malik, returned the Hijr side to the Quraysh dimensions (Sahih Muslim 1333). After a flood collapsed its walls it was rebuilt under the Ottoman Sultan Murad IV - most sources say 1039–1040 AH (1630 CE), though the year is disputed - and a major restoration took place in 1417 AH (1996 CE). Reliable detail about its ancient appearance is limited - which is why the illustrations here are outlines only.',
      },
      kind: 'documented',
      sources: [SRC.ibnZubayr, SRC.qdlFlood, SRC.kaaba1996],
      stage: 'rebuilt',
    },
    {
      id: 'today',
      title: { bn: 'আজকের কাবা', en: 'The Kaaba today' },
      body: {
        bn: 'আজ কাবা প্রতিদিন লাখো মানুষের তাওয়াফের কেন্দ্র এবং দিনে পাঁচবার সারা বিশ্বের সালাতের দিক। কুরআনে মুসলমানদের মসজিদুল হারামের দিকে মুখ ফেরানোর নির্দেশ এসেছে। ব্রিটানিকার তথ্যমতে বর্তমান কাবা প্রায় ১৫ মিটার উঁচু এবং ভূমিতে প্রায় ১০ × ১২ মিটার। কাবা উপাসনার বস্তু নয় - ইবাদত শুধু আল্লাহর; কাবা ঐক্য ও দিকনির্দেশের প্রতীক।',
        en: 'Today the Kaaba is the centre of Tawaf for vast numbers of pilgrims and the direction of prayer for the whole world five times a day. The Qur’an commands Muslims to turn towards al-Masjid al-Haram. According to Britannica the present Kaaba is about 15 m high and roughly 10 × 12 m at its base. The Kaaba is not itself worshipped - worship is for Allah alone; the Kaaba is a focus of unity and direction.',
      },
      kind: 'quran',
      refs: ['q-2-144', 'q-2-125'],
      sources: [SRC.britannicaKaaba],
      stage: 'today',
    },
  ],
  timeline: [
    { id: 't-ibrahim', when: { bn: 'ইবরাহিম (আ.)-এর যুগ - তারিখ অজানা', en: 'Time of Ibrahim - date unknown' }, year: null, title: { bn: 'ভিত্তি উঁচু করা', en: 'Foundations raised' }, text: { bn: 'ইবরাহিম ও ইসমাইল (আ.) ঘরের ভিত্তি উঁচু করেন। কুরআন কোনো সাল উল্লেখ করেনি; নির্দিষ্ট তারিখ দাবি করা অনুমাননির্ভর।', en: 'Ibrahim and Isma‘il raise the foundations of the House. The Qur’an gives no date; any precise year is conjecture.' }, kind: 'quran', refs: ['q-2-127'], stage: 'foundations' },
    { id: 't-quraysh', when: { bn: 'প্রায় ৬০৫ খ্রি.', en: 'c. 605 CE' }, year: 605, title: { bn: 'কুরাইশদের পুনর্নির্মাণ', en: 'Rebuilt by Quraysh' }, text: { bn: 'পুনর্নির্মাণ ও তাতে নবী ﷺ-এর পাথর বহন সহিহ বুখারিতে আছে; সাল (প্রায় ৬০৫) ও হাজরে আসওয়াদ স্থাপনের মীমাংসার ঘটনা সিরাতগ্রন্থের বর্ণনা।', en: 'The rebuilding, with the Prophet ﷺ carrying stones, is in Sahih al-Bukhari; the year (c. 605) and the Black Stone arbitration come from the Sira.' }, kind: 'hadith', refs: ['h-quraysh-short'], sources: [SRC.quraysh1582], stage: 'house' },
    { id: 't-conquest', when: { bn: '৮ হিজরি / ৬৩০ খ্রি.', en: '8 AH / 630 CE' }, year: 630, title: { bn: 'মক্কা বিজয়', en: 'Conquest of Makkah' }, text: { bn: '৩৬০টি মূর্তি অপসারণ; “সত্য এসেছে, মিথ্যা বিলুপ্ত হয়েছে।”', en: '360 idols removed: “Truth has come and falsehood has vanished.”' }, kind: 'hadith', refs: ['h-conquest-idols'], stage: 'purified' },
    { id: 't-zubayr', when: { bn: '৬৪–৬৫ হিজরি / ৬৮৩–৬৮৪ খ্রি.', en: '64–65 AH / 683–684 CE' }, year: 684, title: { bn: 'ইবনুয যুবাইরের পুনর্নির্মাণ', en: 'Rebuilt by Ibn al-Zubayr' }, text: { bn: 'ইবরাহিম (আ.)-এর ভিত্তির ওপর হাতিমসহ পুনর্নির্মাণ।', en: 'Rebuilt on Ibrahim’s foundations, including the Hijr.' }, kind: 'documented', sources: [SRC.ibnZubayr], stage: 'rebuilt' },
    { id: 't-hajjaj', when: { bn: '৭৪ হিজরি / ৬৯৩ খ্রি.', en: '74 AH / 693 CE' }, year: 693, title: { bn: 'হাজ্জাজের পরিবর্তন', en: 'Al-Hajjaj’s alteration' }, text: { bn: 'খলিফা আবদুল মালিকের নির্দেশে হাতিমের দিক আবার কুরাইশের মাপে; হাতিম আবার বাইরে।', en: 'On the caliph ‘Abd al-Malik’s order the Hijr side returned to the Quraysh dimensions; the Hijr outside again.' }, kind: 'documented', sources: [SRC.ibnZubayr], stage: 'rebuilt' },
    { id: 't-ottoman', when: { bn: '১০৩৯–১০৪০ হিজরি / ১৬২৯–১৬৩০ খ্রি.', en: '1039–1040 AH / 1629–1630 CE' }, year: 1630, title: { bn: 'বন্যার পর উসমানীয় পুনর্নির্মাণ', en: 'Ottoman rebuilding after a flood' }, text: { bn: 'সুলতান মুরাদ চতুর্থের সময়ে দেয়াল পুনর্নির্মাণ; সাল নিয়ে সূত্রগুলোর মধ্যে ভিন্নতা আছে (একটি পুরোনো সূত্রে ১৬২৬)।', en: 'Walls rebuilt under Sultan Murad IV; sources differ on the year (one older source gives 1626).' }, kind: 'disputed', sources: [SRC.qdlFlood], stage: 'rebuilt' },
    { id: 't-1996', when: { bn: '১৪১৭ হিজরি / ১৯৯৬ খ্রি.', en: '1417 AH / 1996 CE' }, year: 1996, title: { bn: 'বড় সংস্কার', en: 'Major restoration' }, text: { bn: 'বাদশাহ ফাহদের সময়ে কাবার ব্যাপক সংস্কার।', en: 'Extensive restoration under King Fahd.' }, kind: 'documented', sources: [SRC.kaaba1996], stage: 'today' },
    { id: 't-today', when: { bn: 'আজ', en: 'Today' }, year: 2026, title: { bn: 'সারা বিশ্বের কিবলা', en: 'The qiblah of the world' }, text: { bn: 'প্রতিদিনের সালাতের দিক ও তাওয়াফের কেন্দ্র।', en: 'The direction of daily prayer and the centre of Tawaf.' }, kind: 'quran', refs: ['q-2-144'], stage: 'today' },
  ],
  umrah: {
    text: {
      bn: 'উমরাহর তাওয়াফ কাবার চারপাশে সাতবার - হাজরে আসওয়াদ থেকে শুরু, হাতিমের বাইরে দিয়ে। হাতিম কেন বাইরে, তা উপরের কুরাইশ-পুনর্নির্মাণের ইতিহাস থেকে বোঝা যায়।',
      en: 'The Tawaf of Umrah is seven circuits around the Kaaba - starting at the Black Stone and passing outside the Hijr. Why the Hijr is outside is explained by the Quraysh rebuilding above.',
    },
    stageId: 'tawaf',
  },
  refs: ['q-2-127', 'h-building-house', 'q-3-96', 'q-22-26', 'q-14-37', 'h-first-mosque', 'h-quraysh-short', 'h-conquest-idols', 'h-images-removed', 'q-17-81', 'h-makkah-sacred'],
  thenNow: {
    then: { mediaId: 'h-kaaba-1880', text: { bn: '১৮৮০ সালের কাবা - মুহাম্মদ সাদিক বে-র তোলা কাবার প্রাচীনতম আলোকচিত্রগুলোর একটি।', en: 'The Kaaba in 1880 - among the earliest photographs of it, by Muhammad Sadiq Bey.' } },
    now: { mediaId: 'h-haram-2012', text: { bn: 'আজকের মাতাফ - বহুতল তাওয়াফ এলাকাসহ মসজিদুল হারাম।', en: 'The Mataf today - Masjid al-Haram with its multi-level Tawaf areas.' } },
  },
  audio: ['q-foundations', 'q-first-house', 'q-conquest', 'q-quraysh'],
  quiz: [
    {
      q: { bn: 'কুরআন অনুযায়ী কারা কাবার ভিত্তি উঁচু করেছিলেন?', en: 'According to the Qur’an, who raised the foundations of the Kaaba?' },
      options: [
        { bn: 'ইবরাহিম ও ইসমাইল (আ.)', en: 'Ibrahim and Isma‘il' },
        { bn: 'কুরাইশ গোত্র', en: 'The tribe of Quraysh' },
        { bn: 'উসমানীয় সুলতানরা', en: 'The Ottoman sultans' },
      ],
      answer: 0,
      explain: { bn: 'আল-বাকারা ২:১২৭।', en: 'Al-Baqarah 2:127.' },
    },
    {
      q: { bn: 'তাওয়াফ হাতিমের বাইরে দিয়ে করা হয় কেন?', en: 'Why is Tawaf performed outside the Hijr?' },
      options: [
        { bn: 'হাতিম ইবরাহিম (আ.)-এর ভিত্তির ভেতরে, অর্থাৎ ঘরেরই অংশ', en: 'The Hijr lies within Ibrahim’s foundations - it is part of the House' },
        { bn: 'হাতিম একটি কবরস্থান', en: 'The Hijr is a graveyard' },
        { bn: 'এর কোনো কারণ নেই', en: 'There is no reason' },
      ],
      answer: 0,
      explain: { bn: 'আয়েশা (রা.)-এর হাদিস: কুরাইশরা পূর্ণ ভিত্তির ওপর নির্মাণ করেনি।', en: 'The hadith of ‘A’ishah: Quraysh did not build on the full foundations.' },
    },
    {
      q: { bn: 'মক্কা বিজয়ের দিন মূর্তি অপসারণের সময় নবী ﷺ কোন আয়াত পড়ছিলেন?', en: 'Which verse did the Prophet ﷺ recite while removing the idols?' },
      options: [
        { bn: '“সত্য এসেছে এবং মিথ্যা বিলুপ্ত হয়েছে”', en: '“Truth has come and falsehood has vanished”' },
        { bn: '“আর তোমরা হজ ও উমরাহ পূর্ণ করো”', en: '“And complete the Hajj and Umrah”' },
        { bn: '“নিশ্চয়ই সাফা ও মারওয়া…”', en: '“Indeed Safa and Marwah…”' },
      ],
      answer: 0,
      explain: { bn: 'আল-ইসরা ১৭:৮১ - সহিহ বুখারি ৪২৮৭।', en: 'Al-Isra 17:81 - Sahih al-Bukhari 4287.' },
    },
  ],
}
