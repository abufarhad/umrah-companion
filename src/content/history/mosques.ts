import type { SacredPlace } from '../types'
import { SRC } from './sources'

export const haram: SacredPlace = {
  id: 'haram',
  order: 5,
  scene: 'haram',
  title: { bn: 'মসজিদুল হারাম', en: 'Masjid al-Haram' },
  subtitle: { bn: 'কাবার চারপাশের ছোট চত্বর থেকে বিশ্বের বৃহত্তম মসজিদ', en: 'From a small open space around the Kaaba to the world’s largest mosque' },
  intro: {
    bn: 'মসজিদুল হারাম কাবাকে ঘিরে থাকা মসজিদ। সহিহ হাদিসে একে পৃথিবীর প্রথম মসজিদ বলা হয়েছে এবং এখানে সালাতের বিশেষ ফজিলত আছে। শতাব্দীর পর শতাব্দী ধরে বাড়তে থাকা মুসল্লিদের জন্য এটি বারবার সম্প্রসারিত হয়েছে।',
    en: 'Masjid al-Haram is the mosque surrounding the Kaaba. Authentic hadith call it the first mosque on earth, and prayer in it carries special virtue. Over the centuries it has been enlarged again and again for growing numbers of worshippers.',
  },
  beginning: {
    id: 'first',
    title: { bn: 'পৃথিবীর প্রথম মসজিদ', en: 'The first mosque on earth' },
    body: {
      bn: 'আবু যর (রা.) জিজ্ঞেস করেছিলেন, পৃথিবীতে প্রথম কোন মসজিদ স্থাপিত হয়েছে? নবী ﷺ বললেন: মসজিদুল হারাম; তারপর মসজিদুল আকসা। কুরআন মক্কার ঘরকে “মানুষের জন্য প্রথম ঘর” বলেছে। নবী ﷺ-এর যুগে মসজিদ বলতে ছিল মূলত কাবার চারপাশের খোলা জায়গা, চারদিকে বাড়িঘর।',
      en: 'Abu Dharr asked which mosque was first set up on earth. The Prophet ﷺ said: al-Masjid al-Haram, then al-Masjid al-Aqsa. The Qur’an calls the House at Makkah “the first House established for mankind”. In the Prophet’s ﷺ time the mosque was essentially the open space around the Kaaba, surrounded by houses.',
    },
    kind: 'hadith',
    refs: ['h-first-mosque', 'q-3-96'],
    stage: 'kaaba',
  },
  story: [
    {
      id: 'early',
      title: { bn: 'প্রথম দেয়াল ও প্রাথমিক সম্প্রসারণ', en: 'The first wall and early enlargements' },
      body: {
        bn: '১৭ হিজরিতে (৬৩৮ খ্রি.) উমর (রা.) আশপাশের কিছু বাড়ি কিনে ভেঙে একটি নিচু দেয়াল দিয়ে এলাকাটি ঘিরে দেন। ২৬ হিজরিতে উসমান (রা.) আরও বাড়ি কিনে মসজিদ বাড়ান। পরে ইবনুয যুবাইর (রা.) এবং উমাইয়া খলিফা আবদুল মালিক ও ওয়ালিদের সময়েও কাজ হয় (উমাইয়া কাজের সঠিক সাল সূত্রে নেই)।',
        en: 'In 17 AH (638 CE) ‘Umar bought and demolished some surrounding houses and enclosed the area with a low wall. In 26 AH ‘Uthman bought more houses and enlarged it. Further work followed under Ibn al-Zubayr and the Umayyad caliphs ‘Abd al-Malik and al-Walid (the sources give no precise date for the Umayyad work).',
      },
      kind: 'documented',
      sources: [SRC.britannicaHaram, SRC.arabNewsHaram],
      stage: 'h646',
    },
    {
      id: 'abbasid-ottoman',
      title: { bn: 'আব্বাসীয় ও উসমানীয় যুগ', en: 'Abbasid and Ottoman eras' },
      body: {
        bn: 'আব্বাসীয় খলিফা আল-মাহদি (প্রায় ১৬১–১৬৯ হিজরি / ৭৭৭–৭৮৫ খ্রি.) মসজিদ বহুগুণ বাড়ান এবং স্তম্ভশ্রেণি নির্মাণ করেন। ৯৭৯–৯৮৪ হিজরিতে (১৫৭১–১৫৭৬ খ্রি.) উসমানীয়রা সমতল ছাদের জায়গায় ছোট ছোট গম্বুজসহ বারান্দা পুনর্নির্মাণ করে - উনিশ শতকের ছবিতে যা দেখা যায়।',
        en: 'The Abbasid caliph al-Mahdi (c. 161–169 AH / 777–785 CE) greatly enlarged the mosque with colonnades. In 979–984 AH (1571–1576 CE) the Ottomans rebuilt the arcades, replacing the flat roof with small domes - the arcades seen in 19th-century photographs.',
      },
      kind: 'documented',
      sources: [SRC.britannicaHaram, SRC.arabNewsHaram],
      stage: 'h1570',
    },
    {
      id: 'saudi',
      title: { bn: 'সৌদি সম্প্রসারণ', en: 'The Saudi expansions' },
      body: {
        bn: 'প্রথম সৌদি সম্প্রসারণ (১৯৫৫–১৯৭৩) মসজিদ বহুগুণ বড় করে এবং মাসআকে অন্তর্ভুক্ত করে। বাদশাহ ফাহদের সম্প্রসারণের ভিত্তিপ্রস্তর স্থাপিত হয় ১৪ সেপ্টেম্বর ১৯৮৮। তৃতীয় সম্প্রসারণ (বাদশাহ আবদুল্লাহ, ২০১১ থেকে) উত্তর দিকে বিশাল অংশ যোগ করে; মাতাফ সম্প্রসারণ (২০১৩–২০১৫) তাওয়াফের ধারণক্ষমতা ঘণ্টায় প্রায় ১ লাখ ৭ হাজার জনে উন্নীত করে।',
        en: 'The first Saudi expansion (1955–1973) multiplied the mosque’s size and brought in the Mas‘a. The foundation stone of King Fahd’s expansion was laid on 14 September 1988. The third expansion (King Abdullah, from 2011) added a vast northern section; the Mataf expansion (2013–2015) raised Tawaf capacity to about 107,000 people per hour.',
      },
      kind: 'documented',
      sources: [SRC.firstExpansion, SRC.secondExpansion, SRC.thirdExpansion, SRC.mataf],
      stage: 'h2008',
    },
    {
      id: 'facilities',
      title: { bn: 'আজকের সুবিধা', en: 'Facilities today' },
      body: {
        bn: 'আজ মসজিদে বহুতল মাতাফ ও মাসআ, এস্কেলেটর, হুইলচেয়ার ও বৈদ্যুতিক গাড়ির পথ, শীতাতপ নিয়ন্ত্রণ, জমজমের কুলার এবং উমরাহর জন্য নুসুক অ্যাপের সময়ভিত্তিক পারমিট ব্যবস্থা আছে। বর্তমান সুবিধা ও নিয়মের জন্য সর্বদা অফিসিয়াল সূত্র দেখুন।',
        en: 'Today the mosque has multi-level Mataf and Mas‘a, escalators, wheelchair and electric-cart routes, air-conditioning, Zamzam coolers, and the Nusuk time-slot permit system for Umrah. Always check official sources for current facilities and rules.',
      },
      kind: 'documented',
      sources: [SRC.ministry],
      stage: 'h2008',
    },
  ],
  timeline: [
    { id: 'g0', when: { bn: 'নবী ﷺ-এর যুগ', en: 'Time of the Prophet ﷺ' }, year: 630, title: { bn: 'কাবার চারপাশের খোলা চত্বর', en: 'An open space around the Kaaba' }, text: { bn: 'চারপাশে বাড়িঘর; কোনো দেয়াল নেই।', en: 'Houses all around; no enclosing wall.' }, kind: 'documented', sources: [SRC.britannicaHaram], stage: 'kaaba' },
    { id: 'g1', when: { bn: '১৭ হি. / ৬৩৮ খ্রি.', en: '17 AH / 638 CE' }, year: 638, title: { bn: 'উমর (রা.)-এর দেয়াল', en: '‘Umar’s wall' }, text: { bn: 'বাড়ি কিনে প্রথম নিচু দেয়াল।', en: 'Houses bought; the first low wall.' }, kind: 'documented', sources: [SRC.britannicaHaram, SRC.arabNewsHaram], stage: 'h638' },
    { id: 'g2', when: { bn: '২৬ হি. / ৬৪৭ খ্রি.', en: '26 AH / 647 CE' }, year: 647, title: { bn: 'উসমান (রা.)-এর সম্প্রসারণ', en: '‘Uthman’s enlargement' }, text: { bn: 'আরও বাড়ি কিনে মসজিদ বড় করা।', en: 'More houses bought; the mosque enlarged.' }, kind: 'documented', sources: [SRC.arabNewsHaram], stage: 'h646' },
    { id: 'g3', when: { bn: 'প্রায় ১৬১–১৬৯ হি. / ৭৭৭–৭৮৫ খ্রি.', en: 'c. 161–169 AH / 777–785 CE' }, year: 780, title: { bn: 'আল-মাহদির সম্প্রসারণ', en: 'Al-Mahdi’s enlargement' }, text: { bn: 'স্তম্ভশ্রেণিসহ বিরাট সম্প্রসারণ।', en: 'A major enlargement with colonnades.' }, kind: 'documented', sources: [SRC.britannicaHaram], stage: 'h780' },
    { id: 'g4', when: { bn: '৯৭৯–৯৮৪ হি. / ১৫৭১–১৫৭৬ খ্রি.', en: '979–984 AH / 1571–1576 CE' }, year: 1573, title: { bn: 'উসমানীয় গম্বুজওয়ালা বারান্দা', en: 'Ottoman domed arcades' }, text: { bn: 'সমতল ছাদের জায়গায় ছোট গম্বুজ।', en: 'Small domes replace the flat roof.' }, kind: 'documented', sources: [SRC.britannicaHaram], stage: 'h1570' },
    { id: 'g5', when: { bn: '১৯৫৫–১৯৭৩ খ্রি.', en: '1955–1973 CE' }, year: 1964, title: { bn: 'প্রথম সৌদি সম্প্রসারণ', en: 'First Saudi expansion' }, text: { bn: 'মাসআ অন্তর্ভুক্ত; আয়তন বহুগুণ।', en: 'The Mas‘a included; area multiplied.' }, kind: 'documented', sources: [SRC.firstExpansion], stage: 'h1955' },
    { id: 'g6', when: { bn: '১৯৮৮ খ্রি. থেকে', en: 'From 1988 CE' }, year: 1988, title: { bn: 'বাদশাহ ফাহদের সম্প্রসারণ', en: 'King Fahd’s expansion' }, text: { bn: 'পশ্চিম দিকে নতুন অংশ ও বাদশাহ ফাহদ ফটক।', en: 'A new western wing and the King Fahd Gate.' }, kind: 'documented', sources: [SRC.secondExpansion], stage: 'h1988' },
    { id: 'g7', when: { bn: '২০১১–২০১৫ খ্রি.', en: '2011–2015 CE' }, year: 2013, title: { bn: 'তৃতীয় সম্প্রসারণ ও মাতাফ', en: 'Third expansion and the Mataf' }, text: { bn: 'উত্তরের বিশাল অংশ; বহুতল মাতাফ।', en: 'The vast northern section; a multi-level Mataf.' }, kind: 'documented', sources: [SRC.thirdExpansion, SRC.mataf], stage: 'h2008' },
  ],
  umrah: {
    text: {
      bn: 'উমরাহর তাওয়াফ, দুই রাকাত, জমজম ও সাঈ - সবই মসজিদুল হারামের ভেতরে। ভিড়ে ওপরের তলায় তাওয়াফ ও সাঈ করা বৈধ।',
      en: 'The Tawaf, two rak‘ahs, Zamzam and Sa‘i of Umrah all take place inside Masjid al-Haram. Performing Tawaf and Sa‘i on upper floors is valid when it is crowded.',
    },
    stageId: 'entering',
  },
  refs: ['h-first-mosque', 'q-3-96', 'q-22-26', 'q-2-144', 'h-haram-prayer', 'h-makkah-sacred'],
  thenNow: {
    then: { mediaId: 'h-haram-1880-pano', text: { bn: '১৮৮০: উসমানীয় গম্বুজওয়ালা বারান্দায় ঘেরা মসজিদ।', en: '1880: the mosque enclosed by Ottoman domed arcades.' } },
    now: { mediaId: 'h-haram-2012', text: { bn: '২০১২: আবরাজ আল-বাইত থেকে রাতের মসজিদুল হারাম।', en: '2012: Masjid al-Haram at night from the Abraj al-Bait.' } },
  },
  audio: ['q-proclaim', 'q-qiblah', 'q-isra'],
  quiz: [
    {
      q: { bn: 'হাদিস অনুযায়ী পৃথিবীর প্রথম মসজিদ কোনটি?', en: 'According to the hadith, which was the first mosque on earth?' },
      options: [{ bn: 'মসজিদুল হারাম', en: 'Masjid al-Haram' }, { bn: 'মসজিদে নববী', en: 'Masjid an-Nabawi' }, { bn: 'মসজিদে কুবা', en: 'Masjid Quba' }],
      answer: 0,
      explain: { bn: 'সহিহ বুখারি ৩৩৬৬।', en: 'Sahih al-Bukhari 3366.' },
    },
    {
      q: { bn: 'মসজিদের চারপাশে প্রথম দেয়াল কে নির্মাণ করেন?', en: 'Who built the first wall around the mosque?' },
      options: [{ bn: 'উমর (রা.)', en: '‘Umar' }, { bn: 'উসমানীয় সুলতান', en: 'An Ottoman sultan' }, { bn: 'বাদশাহ ফাহদ', en: 'King Fahd' }],
      answer: 0,
      explain: { bn: '১৭ হিজরি / ৬৩৮ খ্রি.।', en: '17 AH / 638 CE.' },
    },
  ],
}

export const miqat: SacredPlace = {
  id: 'miqat',
  order: 6,
  scene: 'miqat',
  title: { bn: 'মিকাতসমূহ', en: 'The Miqat boundaries' },
  subtitle: { bn: 'যেখানে পৌঁছানোর আগে ইহরামে প্রবেশ করতে হয়', en: 'Where pilgrims must be in Ihram before passing' },
  intro: {
    bn: 'মিকাত হলো নবী ﷺ-এর নির্ধারিত সীমা, যা হজ বা উমরাহর নিয়তে ইহরাম ছাড়া অতিক্রম করা যায় না। মানচিত্রে অবস্থান আনুমানিক; বিমানের প্রকৃত পথ ফ্লাইটভেদে ভিন্ন।',
    en: 'The Miqats are boundaries appointed by the Prophet ﷺ that may not be crossed, with the intention of Hajj or Umrah, without Ihram. Positions on the map are approximate; actual flight paths differ by flight.',
  },
  beginning: {
    id: 'appointed',
    title: { bn: 'নবী ﷺ-এর নির্ধারণ', en: 'Appointed by the Prophet ﷺ' },
    body: {
      bn: 'ইবনে আব্বাস (রা.) বর্ণনা করেন, নবী ﷺ মদিনাবাসীর জন্য যুল-হুলাইফা, শামের জন্য জুহফা, নজদের জন্য কারনুল মানাজিল এবং ইয়েমেনের জন্য ইয়ালামলাম নির্ধারণ করেন - এবং বলেন, এগুলো তাদের জন্যও যারা অন্য দেশ থেকে এগুলোর পাশ দিয়ে আসে। ইরাকের জন্য যাতু ইরক উমর (রা.) নির্ধারণ করেন।',
      en: 'Ibn ‘Abbas narrated that the Prophet ﷺ appointed Dhul-Hulayfah for the people of Madinah, al-Juhfah for Sham, Qarn al-Manazil for Najd and Yalamlam for Yemen - adding that they also apply to those from elsewhere who pass them. Dhat ‘Irq for Iraq was set by ‘Umar.',
    },
    kind: 'hadith',
    refs: ['h-mawaqit', 'h-dhat-irq'],
    stage: 'air',
  },
  story: [
    {
      id: 'reach-vs-enter',
      title: { bn: 'মিকাতে পৌঁছানো বনাম ইহরামে প্রবেশ', en: 'Reaching the Miqat vs entering Ihram' },
      body: {
        bn: 'মিকাতে পৌঁছানো একটি ভৌগোলিক ঘটনা; ইহরামে প্রবেশ হলো উমরাহর নিয়ত করা (সাথে তালবিয়াহ)। শুধু ইহরামের কাপড় পরলেই ইহরাম শুরু হয় না। নবী ﷺ যুল-হুলাইফায় বাহনে চড়ার পর তালবিয়াহ শুরু করেছিলেন।',
        en: 'Reaching the Miqat is a matter of geography; entering Ihram means making the intention of Umrah (with the Talbiyah). Wearing the garments alone does not begin Ihram. The Prophet ﷺ began the Talbiyah at Dhul-Hulayfah after mounting his camel.',
      },
      kind: 'hadith',
      refs: ['h-talbiyah-dhul-hulayfah', 'h-intentions'],
      stage: 'madinah',
    },
    {
      id: 'distances',
      title: { bn: 'অবস্থান ও দূরত্ব', en: 'Locations and distances' },
      body: {
        bn: 'সৌদিপিডিয়ার তথ্যমতে মক্কা থেকে আনুমানিক দূরত্ব: যুল-হুলাইফা (আবইয়ার আলি) - মসজিদে নববী থেকে প্রায় ১৪ কিমি, মক্কা থেকে প্রায় ৪৩৩–৪৫০ কিমি (দুটি পাতায় ভিন্ন সংখ্যা); জুহফা প্রায় ১৮০ কিমি (বাস্তবে রাবিগ থেকে ইহরাম বাঁধা হয়); কারনুল মানাজিল (আস-সাইলুল কাবির) প্রায় ৭৫ কিমি; ইয়ালামলাম (আস-সাদিয়্যা) প্রায় ১৩০ কিমি; যাতু ইরক প্রায় ১০০ কিমি।',
        en: 'Approximate distances from Makkah per Saudipedia: Dhul-Hulayfah (Abyar ‘Ali) - about 14 km from the Prophet’s Mosque and about 433–450 km from Makkah (two pages differ); al-Juhfah about 180 km (in practice Ihram is entered at Rabigh); Qarn al-Manazil (al-Sayl al-Kabir) about 75 km; Yalamlam (al-Sa‘diyyah) about 130 km; Dhat ‘Irq about 100 km.',
      },
      kind: 'documented',
      sources: [SRC.mawaqit, SRC.dhulHulayfah],
      stage: 'air',
    },
    {
      id: 'bangladesh',
      title: { bn: 'বাংলাদেশ থেকে বিমানযাত্রী', en: 'Air travellers from Bangladesh' },
      body: {
        bn: 'সরাসরি জেদ্দাগামী ফ্লাইটে বিমান কোনো মিকাতের সমান্তরালে পৌঁছানোর আগেই নিয়ত করতে হয় - সৌদি হজ ও উমরাহ মন্ত্রণালয় বলে জেদ্দা বিমানবন্দর মিকাত নয়। কোন মিকাতের সমান্তরালে বিমান পৌঁছায় তা ফ্লাইটের পথের ওপর নির্ভর করে; এয়ারলাইনের ঘোষণা অনুসরণ করুন। আগে মদিনা গেলে যুল-হুলাইফায় ইহরাম বাঁধবেন। নিজের ফ্লাইট ও পরিকল্পনা অনুযায়ী বর্তমান নির্দেশনা নিশ্চিত করুন।',
        en: 'On a direct flight to Jeddah, the intention must be made before the aircraft is parallel to a Miqat - the Saudi Ministry of Hajj and Umrah states Jeddah airport is not a Miqat. Which Miqat the aircraft parallels depends on its route; follow the airline’s announcement. If you visit Madinah first, enter Ihram at Dhul-Hulayfah. Confirm current guidance for your actual flight and plan.',
      },
      kind: 'documented',
      refs: ['h-mawaqit', 'h-dhat-irq'],
      sources: [SRC.ministry],
      stage: 'air',
    },
  ],
  timeline: [
    { id: 'q1', when: { bn: 'নবী ﷺ-এর যুগ', en: 'Time of the Prophet ﷺ' }, year: 631, title: { bn: 'চারটি মিকাত নির্ধারণ', en: 'Four Miqats appointed' }, text: { bn: 'যুল-হুলাইফা, জুহফা, কারনুল মানাজিল, ইয়ালামলাম।', en: 'Dhul-Hulayfah, al-Juhfah, Qarn al-Manazil, Yalamlam.' }, kind: 'hadith', refs: ['h-mawaqit'], stage: 'air' },
    { id: 'q2', when: { bn: '১০ হি. / ৬৩২ খ্রি.', en: '10 AH / 632 CE' }, year: 632, title: { bn: 'যুল-হুলাইফায় নবী ﷺ-এর ইহরাম', en: 'The Prophet’s ﷺ Ihram at Dhul-Hulayfah' }, text: { bn: 'বিদায় হজে বাহনে চড়ে তালবিয়াহ শুরু।', en: 'He began the Talbiyah on his mount for the Farewell Hajj.' }, kind: 'hadith', refs: ['h-talbiyah-dhul-hulayfah'], stage: 'madinah' },
    { id: 'q3', when: { bn: 'উমর (রা.)-এর খিলাফত', en: 'Caliphate of ‘Umar' }, year: 640, title: { bn: 'যাতু ইরক', en: 'Dhat ‘Irq' }, text: { bn: 'কারনুল মানাজিলের সমান্তরালে ইরাকবাসীর জন্য - “সমান্তরাল” নীতির ভিত্তি।', en: 'Set for Iraq, parallel to Qarn al-Manazil - the basis of the “parallel” principle.' }, kind: 'hadith', refs: ['h-dhat-irq'], stage: 'air' },
    { id: 'q4', when: { bn: 'আজ', en: 'Today' }, year: 2026, title: { bn: 'বিমানে ইহরাম', en: 'Ihram in the air' }, text: { bn: 'মিকাতের সমান্তরালে পৌঁছানোর আগে নিয়ত; জেদ্দা মিকাত নয়।', en: 'Intention before the Miqat’s parallel; Jeddah is not a Miqat.' }, kind: 'documented', sources: [SRC.ministry], stage: 'air' },
  ],
  umrah: {
    text: {
      bn: 'উমরাহর প্রথম আমল - ইহরাম - মিকাত থেকেই শুরু। গাইডের “মিকাত ও ইহরাম” ধাপে বিস্তারিত নির্দেশনা দেখুন।',
      en: 'The first rite of Umrah - Ihram - begins at the Miqat. See the “Miqat and entering Ihram” step of the guide for full instructions.',
    },
    stageId: 'ihram',
  },
  refs: ['h-mawaqit', 'h-dhat-irq', 'h-talbiyah-dhul-hulayfah', 'h-talbiyah'],
  thenNow: {
    then: { mediaId: 'h-hejaz-rail-1910s', text: { bn: 'উসমানীয় যুগের শেষে মদিনায় হেজাজ রেলওয়ে - মদিনা থেকে মক্কাগামীরা যুল-হুলাইফা হয়ে যেতেন। (যুল-হুলাইফার কোনো ঐতিহাসিক ছবি আমরা পাইনি।)', en: 'The Hejaz Railway at Madinah in the late Ottoman era - travellers from Madinah to Makkah passed Dhul-Hulayfah. (We found no historical photo of Dhul-Hulayfah itself.)' } },
    now: { mediaId: 'p-dhul-hulayfah-1', text: { bn: 'আজকের যুল-হুলাইফা (আবইয়ার আলি) মসজিদ।', en: 'The Dhul-Hulayfah (Abyar ‘Ali) mosque today.' } },
  },
  audio: ['q-umrah'],
  quiz: [
    {
      q: { bn: 'বাংলাদেশ থেকে সরাসরি জেদ্দায় গেলে কখন নিয়ত করবেন?', en: 'Flying direct from Bangladesh to Jeddah, when do you make the intention?' },
      options: [
        { bn: 'বিমান মিকাতের সমান্তরালে পৌঁছানোর আগে', en: 'Before the aircraft is parallel to the Miqat' },
        { bn: 'জেদ্দা বিমানবন্দরে নেমে', en: 'After landing at Jeddah' },
        { bn: 'মক্কার হোটেলে পৌঁছে', en: 'On reaching the hotel in Makkah' },
      ],
      answer: 0,
      explain: { bn: 'জেদ্দা বিমানবন্দর মিকাত নয় (হজ ও উমরাহ মন্ত্রণালয়)।', en: 'Jeddah airport is not a Miqat (Ministry of Hajj and Umrah).' },
    },
    {
      q: { bn: 'শুধু ইহরামের কাপড় পরলেই কি ইহরাম শুরু হয়?', en: 'Does wearing the Ihram garments alone begin Ihram?' },
      options: [{ bn: 'না - নিয়ত করলে শুরু হয়', en: 'No - it begins with the intention' }, { bn: 'হ্যাঁ', en: 'Yes' }],
      answer: 0,
      explain: { bn: 'আমল নিয়তের ওপর নির্ভরশীল (বুখারি ১)।', en: 'Deeds are by intentions (Bukhari 1).' },
    },
    {
      q: { bn: 'মদিনা থেকে মক্কাগামীদের মিকাত কোনটি?', en: 'Which is the Miqat for those travelling from Madinah to Makkah?' },
      options: [{ bn: 'যুল-হুলাইফা', en: 'Dhul-Hulayfah' }, { bn: 'ইয়ালামলাম', en: 'Yalamlam' }, { bn: 'জেদ্দা', en: 'Jeddah' }],
      answer: 0,
      explain: { bn: 'সহিহ বুখারি ১৫২৪।', en: 'Sahih al-Bukhari 1524.' },
    },
  ],
}

export const madinah: SacredPlace = {
  id: 'madinah',
  order: 7,
  scene: 'madinah',
  optional: true,
  title: { bn: 'মদিনা ও মসজিদে নববী', en: 'Madinah and Masjid an-Nabawi' },
  subtitle: { bn: 'হিজরত, প্রথম মুসলিম সমাজ ও নবী ﷺ-এর মসজিদ - উমরাহর অংশ নয়', en: 'The Hijrah, the first Muslim community and the Prophet’s ﷺ Mosque - not part of Umrah' },
  intro: {
    bn: 'মদিনা সফর উমরাহর শর্ত বা অংশ নয়; উমরাহ মক্কাতেই সম্পূর্ণ হয়। তবে অনেক যাত্রী মসজিদে নববীতে সালাত আদায়ের জন্য মদিনা যান - যার বিশেষ ফজিলত সহিহ হাদিসে এসেছে।',
    en: 'Visiting Madinah is neither a condition nor a part of Umrah; Umrah is completed in Makkah. Many pilgrims, however, travel to Madinah to pray in the Prophet’s Mosque, whose special virtue is established in authentic hadith.',
  },
  beginning: {
    id: 'hijrah',
    title: { bn: 'হিজরত', en: 'The Hijrah' },
    body: {
      bn: '১ হিজরিতে (৬২২ খ্রি.) নবী ﷺ মক্কা থেকে মদিনায় হিজরত করেন - এই ঘটনা থেকেই হিজরি সন গণনা শুরু। আনাস (রা.)-এর বর্ণনায়, তিনি প্রথমে কুবায় বনু আমর ইবনে আওফের কাছে ১৪ রাত অবস্থান করেন, তারপর মদিনায় প্রবেশ করেন।',
      en: 'In 1 AH (622 CE) the Prophet ﷺ migrated from Makkah to Madinah - the event from which the Hijri calendar is counted. Anas narrates that he first stayed 14 nights at Quba with Banu ‘Amr ibn ‘Awf, then entered Madinah.',
    },
    kind: 'hadith',
    refs: ['h-mosque-built'],
    sources: [SRC.britannicaMedina],
    stage: 'hijrah',
  },
  story: [
    {
      id: 'quba',
      title: { bn: 'কুবা মসজিদ', en: 'The mosque at Quba' },
      body: {
        bn: 'সহিহ বুখারির হিজরতের বর্ণনায় কুবায় একটি মসজিদ প্রতিষ্ঠার কথা আছে এবং সেখানে “তাকওয়ার ওপর প্রতিষ্ঠিত” আয়াতটি কুবার ক্ষেত্রে বলা হয়েছে। তবে আয়াতটি (৯:১০৮) কুবা না মসজিদে নববী বোঝায় - এ নিয়ে আলেমদের মতভেদ আছে। কুবায় সালাতের সওয়াব একটি উমরাহর মতো বলে হাদিসে এসেছে।',
        en: 'The Hijrah narration in Sahih al-Bukhari mentions a mosque founded at Quba and applies the words “founded on piety” to it. Scholars differ, however, over whether the verse (9:108) refers to Quba or to the Prophet’s Mosque. A hadith states that praying at Quba carries a reward like an Umrah.',
      },
      kind: 'scholarly',
      refs: ['q-9-108', 'h-mosque-orphans', 'h-quba'],
      stage: 'm622',
    },
    {
      id: 'built',
      title: { bn: 'দুই এতিমের জমিতে মসজিদ', en: 'A mosque on the land of two orphans' },
      body: {
        bn: 'নবী ﷺ-এর উট যেখানে বসল, সেটি ছিল দুই এতিম বালক সুহাইল ও সাহলের খেজুর শুকানোর জায়গা। তিনি জমিটি কিনতে চাইলে তারা উপহার দিতে চাইল (বুখারি ৩৯০৬)। আনাস (রা.)-এর বর্ণনায়, বনু নাজ্জার বলেছিল তারা এর মূল্য শুধু আল্লাহর কাছে চায়; খেজুর গাছ কেটে কিবলার দিকে সারিবদ্ধ করা হয়। মসজিদ ছিল কাঁচা ইটের, খুঁটি খেজুর গাছের কাণ্ডের (বুখারি ৪৪৬)।',
        en: 'Where the Prophet’s ﷺ camel knelt was a date-drying yard belonging to two orphan boys, Suhayl and Sahl. He offered to buy it; they offered it as a gift (Bukhari 3906). In Anas’s narration, Banu al-Najjar said they sought its price only from Allah; palm trees were cut and lined up as the qiblah wall. The mosque was of mud brick with palm-trunk pillars (Bukhari 446).',
      },
      kind: 'hadith',
      refs: ['h-mosque-orphans', 'h-mosque-built'],
      sources: [SRC.bukhari446],
      stage: 'm622',
    },
    {
      id: 'growth',
      title: { bn: 'মসজিদের বিকাশ', en: 'How the mosque grew' },
      body: {
        bn: 'উমর (রা.) ১৭ হিজরিতে একই উপকরণে এবং উসমান (রা.) ২৯ হিজরিতে খোদাই করা পাথর ও সেগুন কাঠে মসজিদ বাড়ান (বুখারি ৪৪৬)। উমাইয়া খলিফা ওয়ালিদ ৮৮–৯১ হিজরিতে (৭০৭–৭১০ খ্রি.) মসজিদ পুনর্নির্মাণ করেন এবং নবী ﷺ-এর ঘর মসজিদের অন্তর্ভুক্ত হয়। উসমানীয় সুলতান আবদুল মাজিদ ১২৬৫–১২৭৭ হিজরিতে (১৮৪৯–১৮৬০ খ্রি.) পুনর্নির্মাণ করেন। সৌদি সম্প্রসারণ হয় ১৯৫১–১৯৫৫ এবং বাদশাহ ফাহদের সময়ে (১৯৮৪/৮৫–১৯৯৩/৯৪); বাইরের চত্বরের বিশাল ছাতাগুলো ২০১০–২০১৫ সালে বসানো হয়। নবী ﷺ ৭ হিজরিতে মসজিদ বাড়িয়েছিলেন বলে প্রচলিত বর্ণনা আছে, তবে আমরা নির্ভরযোগ্য সূত্র পাইনি।',
        en: '‘Umar enlarged the mosque in 17 AH with the same materials, and ‘Uthman in 29 AH with carved stone and teak (Bukhari 446). The Umayyad caliph al-Walid rebuilt it in 88–91 AH (707–710 CE), bringing the Prophet’s ﷺ chamber inside the mosque. The Ottoman Sultan Abdulmejid rebuilt it in 1265–1277 AH (1849–1860 CE). Saudi expansions followed in 1951–1955 and under King Fahd (1984/85–1993/94); the giant umbrellas in the outer courtyards were installed in 2010–2015. A traditional report says the Prophet ﷺ enlarged the mosque in 7 AH, but we found no reliable source for it.',
      },
      kind: 'documented',
      sources: [SRC.bukhari446, SRC.britannicaNabawi, SRC.nabawiArabNews, SRC.nabawiTimeline],
      stage: 'm1994',
    },
    {
      id: 'dome',
      title: { bn: 'সবুজ গম্বুজ', en: 'The Green Dome' },
      body: {
        bn: 'নবী ﷺ-এর কবরের ওপরের গম্বুজের ইতিহাসে সূত্রগুলোর মধ্যে ভিন্নতা আছে। মাধ্যমিক সূত্রে প্রথম গম্বুজ ৬৭৮ হিজরিতে (১২৭৯ খ্রি.) মামলুক যুগে বলা হয়। বর্তমান গম্বুজ উসমানীয় সুলতান দ্বিতীয় মাহমুদের সময়ে নির্মিত - ব্রিটানিকার মতে ১৮১৭ সালে নির্মিত ও ১৮৩৯ সালে সবুজ রং করা; অন্য সূত্রে ১৮১৮ ও ১৮৩৭।',
        en: 'Sources differ on the history of the dome over the Prophet’s ﷺ grave. Secondary sources date the first dome to 678 AH (1279 CE) in the Mamluk era. The present dome was built under the Ottoman Sultan Mahmud II - built in 1817 and painted green in 1839 according to Britannica; other sources give 1818 and 1837.',
      },
      kind: 'disputed',
      sources: [SRC.britannicaMedina, SRC.greenDome],
      stage: 'm1849',
    },
    {
      id: 'etiquette',
      title: { bn: 'মদিনা সফরের আদব', en: 'Etiquette of visiting Madinah' },
      body: {
        bn: 'সফরের নিয়ত হবে মসজিদে নববীতে সালাত। মদিনা একটি হারাম - এর গাছ কাটা ও সেখানে বিদআত সৃষ্টি নিষেধ। শান্তভাবে নবী ﷺ, আবু বকর (রা.) ও উমর (রা.)-কে সালাম দিন; কবরের কাছে উচ্চস্বর ও ভিড় এড়ান; দোয়া কিবলামুখী হয়ে করুন। রওজায় সালাতের জন্য নুসুক অ্যাপে পারমিট নিন।',
        en: 'The intention of the journey should be to pray in the Prophet’s Mosque. Madinah is a sanctuary - its trees are not to be cut and innovations are not to be introduced. Greet the Prophet ﷺ, Abu Bakr and ‘Umar calmly; avoid raised voices and crowding at the grave; make supplication facing the qiblah. Book a Nusuk permit to pray in the Rawdah.',
      },
      kind: 'hadith',
      refs: ['h-three-mosques', 'h-madinah-sacred', 'h-nabawi-prayer', 'h-rawdah'],
      stage: 'm1994',
    },
  ],
  timeline: [
    { id: 'n1', when: { bn: '১ হি. / ৬২২ খ্রি.', en: '1 AH / 622 CE' }, year: 622, title: { bn: 'হিজরত ও মসজিদ নির্মাণ', en: 'Hijrah and the first mosque' }, text: { bn: 'কাঁচা ইট ও খেজুর গাছের কাণ্ডে সাধারণ মসজিদ।', en: 'A simple mosque of mud brick and palm trunks.' }, kind: 'hadith', refs: ['h-mosque-orphans', 'h-mosque-built'], stage: 'm622' },
    { id: 'n2', when: { bn: '৭ হি. / ৬২৮–৬২৯ খ্রি.', en: '7 AH / 628–629 CE' }, year: 629, title: { bn: 'নবী ﷺ-এর সম্প্রসারণ (প্রচলিত বর্ণনা)', en: 'Enlarged by the Prophet ﷺ (traditional report)' }, text: { bn: 'খায়বারের পর সম্প্রসারণের প্রচলিত বর্ণনা - নির্ভরযোগ্য সূত্র পাওয়া যায়নি।', en: 'A traditional report of enlargement after Khaybar - no reliable source found.' }, kind: 'disputed', stage: 'm629' },
    { id: 'n3', when: { bn: '১৭ হি. / ৬৩৮ খ্রি.', en: '17 AH / 638 CE' }, year: 638, title: { bn: 'উমর (রা.)-এর সম্প্রসারণ', en: '‘Umar’s enlargement' }, text: { bn: 'একই উপকরণ, কাঠের খুঁটি।', en: 'Same materials, wooden pillars.' }, kind: 'hadith', sources: [SRC.bukhari446], stage: 'm638' },
    { id: 'n4', when: { bn: '৮৮–৯১ হি. / ৭০৭–৭১০ খ্রি.', en: '88–91 AH / 707–710 CE' }, year: 708, title: { bn: 'ওয়ালিদের পুনর্নির্মাণ', en: 'Al-Walid’s rebuilding' }, text: { bn: 'নবী ﷺ-এর ঘর মসজিদের অন্তর্ভুক্ত।', en: 'The Prophet’s ﷺ chamber brought inside.' }, kind: 'documented', sources: [SRC.britannicaNabawi], stage: 'm707' },
    { id: 'n5', when: { bn: '১২৬৫–১২৭৭ হি. / ১৮৪৯–১৮৬০ খ্রি.', en: '1265–1277 AH / 1849–1860 CE' }, year: 1855, title: { bn: 'উসমানীয় পুনর্নির্মাণ', en: 'Ottoman reconstruction' }, text: { bn: 'সুলতান আবদুল মাজিদের সময়ে।', en: 'Under Sultan Abdulmejid.' }, kind: 'documented', sources: [SRC.britannicaMedina], stage: 'm1849' },
    { id: 'n6', when: { bn: '১৯৫১–১৯৫৫ খ্রি.', en: '1951–1955 CE' }, year: 1953, title: { bn: 'প্রথম সৌদি সম্প্রসারণ', en: 'First Saudi expansion' }, text: { bn: 'ব্রিটানিকা অনুযায়ী কাজ ১৯৫৩–৫৫।', en: 'Britannica dates the works to 1953–55.' }, kind: 'documented', sources: [SRC.nabawiTimeline], stage: 'm1955' },
    { id: 'n7', when: { bn: '১৯৮৪/৮৫–১৯৯৩/৯৪ খ্রি.', en: '1984/85–1993/94 CE' }, year: 1990, title: { bn: 'বাদশাহ ফাহদের সম্প্রসারণ', en: 'King Fahd’s expansion' }, text: { bn: 'প্রায় ৮২,০০০ বর্গমিটার যোগ।', en: 'About 82,000 m² added.' }, kind: 'documented', sources: [SRC.nabawiSecond], stage: 'm1994' },
    { id: 'n8', when: { bn: '২০১০–২০১৫ খ্রি.', en: '2010–2015 CE' }, year: 2012, title: { bn: 'চত্বরের বিশাল ছাতা', en: 'Giant courtyard umbrellas' }, text: { bn: 'বাইরের চত্বরে মোট ২৫০টি।', en: '250 in the outer courtyards.' }, kind: 'documented', sources: [SRC.nabawiTimeline], stage: 'm1994' },
  ],
  umrah: {
    text: {
      bn: 'মদিনা সফর উমরাহর অংশ নয়। তবে আগে মদিনা গেলে মক্কা যাওয়ার পথে যুল-হুলাইফায় ইহরাম বাঁধতে হবে।',
      en: 'Visiting Madinah is not part of Umrah. But if you go to Madinah first, you must enter Ihram at Dhul-Hulayfah on the way to Makkah.',
    },
    stageId: 'after',
  },
  refs: ['h-mosque-orphans', 'h-mosque-built', 'q-9-108', 'h-nabawi-prayer', 'h-three-mosques', 'h-madinah-sacred', 'h-rawdah', 'h-quba'],
  thenNow: {
    then: { mediaId: 'h-nabawi-1880s', text: { bn: '১৮৮০-এর দশক: উসমানীয় যুগের মসজিদে নববী ও সবুজ গম্বুজ।', en: '1880s: the Ottoman-era Prophet’s Mosque and the Green Dome.' } },
    now: { mediaId: 'h-nabawi-umbrellas', text: { bn: '২০২২: চত্বরের স্বয়ংক্রিয় ছাতা।', en: '2022: the retractable courtyard umbrellas.' } },
  },
  audio: ['q-piety-mosque'],
  quiz: [
    {
      q: { bn: 'মদিনা সফর কি উমরাহর শর্ত?', en: 'Is visiting Madinah a condition of Umrah?' },
      options: [{ bn: 'না - উমরাহ মক্কাতেই সম্পূর্ণ', en: 'No - Umrah is completed in Makkah' }, { bn: 'হ্যাঁ', en: 'Yes' }],
      answer: 0,
      explain: { bn: 'মদিনা সফর আলাদা সুন্নাহ সফর।', en: 'The Madinah visit is a separate, recommended journey.' },
    },
    {
      q: { bn: 'মসজিদে নববী যে জমিতে নির্মিত, তা কাদের ছিল?', en: 'Whose land was the Prophet’s Mosque built on?' },
      options: [{ bn: 'দুই এতিম বালক সুহাইল ও সাহলের', en: 'Two orphan boys, Suhayl and Sahl' }, { bn: 'কুরাইশ নেতাদের', en: 'Quraysh leaders' }, { bn: 'উমাইয়া খলিফার', en: 'An Umayyad caliph' }],
      answer: 0,
      explain: { bn: 'সহিহ বুখারি ৩৯০৬।', en: 'Sahih al-Bukhari 3906.' },
    },
    {
      q: { bn: 'হিজরি সন কোন ঘটনা থেকে গণনা করা হয়?', en: 'From which event is the Hijri calendar counted?' },
      options: [{ bn: 'মক্কা থেকে মদিনায় হিজরত', en: 'The migration from Makkah to Madinah' }, { bn: 'মক্কা বিজয়', en: 'The conquest of Makkah' }, { bn: 'বিদায় হজ', en: 'The Farewell Hajj' }],
      answer: 0,
      explain: { bn: '১ হিজরি = ৬২২ খ্রি.।', en: '1 AH = 622 CE.' },
    },
  ],
}
