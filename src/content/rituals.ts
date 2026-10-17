import type { RitualStage } from './types'

/**
 * The Umrah guide, in order. Rulings state the position they follow. Unless
 * noted otherwise, "obligatory/pillar" follows the majority position
 * (Shafi'i, Maliki, Hanbali) with Hanafi differences listed under
 * `differences`. Religious requirements, Sunnah practices and practical tips
 * are kept in separate fields so the UI can label them distinctly.
 */
export const rituals: RitualStage[] = [
  /* 1 ------------------------------------------------------------------ */
  {
    id: 'preparation',
    order: 1,
    isRite: false,
    icon: 'Compass',
    animation: 'journey',
    title: { bn: 'সফরের আগে প্রস্তুতি', en: 'Preparation before travel' },
    short: { bn: 'নিয়ত, জ্ঞান, সামর্থ্য ও পরিবারের প্রস্তুতি', en: 'Intention, knowledge, means and family' },
    meaning: {
      bn: 'উমরাহ অর্থ “জিয়ারত” - নির্দিষ্ট নিয়মে কাবাঘরের তাওয়াফ ও সাফা-মারওয়ার সাঈ করার ইবাদত। প্রস্তুতি মানে ইবাদতের জ্ঞান অর্জন, হালাল উপার্জনে খরচের ব্যবস্থা এবং দায়িত্বগুলো গুছিয়ে যাওয়া।',
      en: "Umrah means 'visit' - an act of worship consisting of Tawaf of the Kaaba and Sa'i between Safa and Marwah in a prescribed way. Preparing means learning the rites, funding the trip from lawful earnings and settling your responsibilities.",
    },
    why: {
      bn: 'আল্লাহ হজ ও উমরাহ তাঁর জন্য পূর্ণ করার নির্দেশ দিয়েছেন। আগে থেকে শিখে গেলে ভিড় ও ক্লান্তির মধ্যেও সঠিকভাবে ইবাদত করা সহজ হয়।',
      en: 'Allah commands that Hajj and Umrah be completed for Him. Learning beforehand makes it far easier to worship correctly amid crowds and fatigue.',
    },
    steps: [
      { text: { bn: 'নিয়ত খাঁটি করুন - লোক দেখানো নয়, শুধু আল্লাহর সন্তুষ্টির জন্য।', en: 'Purify your intention - for Allah alone, not for show.' }, refs: ['h-intentions', 'q-2-196'] },
      { text: { bn: 'হালাল টাকা দিয়ে খরচের ব্যবস্থা করুন এবং ঋণ থাকলে পরিশোধ বা ব্যবস্থা করুন।', en: 'Fund the trip with lawful money and settle or arrange any debts.' } },
      { text: { bn: 'এই গাইডের ধাপগুলো অন্তত একবার পুরো পড়ুন; তালবিয়াহ ও মূল দোয়াগুলো মুখস্থ করার চেষ্টা করুন।', en: 'Read this guide end to end at least once; try to memorise the Talbiyah and key supplications.' }, refs: ['h-talbiyah'] },
      { text: { bn: 'পরিবারকে প্রয়োজনীয় খরচ ও দায়িত্ব বুঝিয়ে দিন; প্রয়োজনে অসিয়ত লিখে রাখুন।', en: 'Leave provision and instructions for your family; write a will if needed.' } },
      { text: { bn: 'শারীরিক প্রস্তুতি নিন - প্রতিদিন হাঁটার অভ্যাস করুন। তাওয়াফ ও সাঈ মিলিয়ে কয়েক কিলোমিটার হাঁটতে হয়।', en: "Prepare physically - walk daily. Tawaf and Sa'i together involve several kilometres of walking." } },
      { text: { bn: 'যাদের প্রতি অন্যায় করেছেন তাদের কাছে ক্ষমা চেয়ে নিন এবং তাওবা করুন।', en: 'Seek forgiveness from people you have wronged and make sincere repentance.' } },
    ],
    rulings: [
      { level: 'practical', text: { bn: 'উমরাহর হুকুম: শাফেয়ি ও হাম্বলি মাযহাবে জীবনে একবার সামর্থ্যবানের জন্য ওয়াজিব; হানাফি ও মালেকি মাযহাবে সুন্নাতে মুআক্কাদা।', en: "Ruling of Umrah: obligatory once in a lifetime for those able per the Shafi'i and Hanbali schools; an emphasised Sunnah per the Hanafi and Maliki schools." }, refs: ['q-2-196', 'q-3-97'] },
      { level: 'sunnah', text: { bn: 'রমজানে উমরাহর বিশেষ সওয়াব আছে, তবে কোনো নির্দিষ্ট মাস বাধ্যতামূলক নয়।', en: 'Umrah in Ramadan carries special reward, but no particular month is required.' }, refs: ['h-ramadan-umrah'] },
    ],
    mistakes: [
      { mistake: { bn: 'কিছু না শিখে শুধু দলনেতার ওপর নির্ভর করা।', en: 'Relying entirely on a group leader without learning anything.' }, fix: { bn: 'মূল চারটি কাজ (ইহরাম, তাওয়াফ, সাঈ, হলক/তাকসির) নিজে বুঝে যান।', en: "Understand the four core acts yourself (Ihram, Tawaf, Sa'i, Halq/Taqsir)." } },
      { mistake: { bn: 'নির্দিষ্ট দোয়া-বই মুখস্থ না হলে উমরাহ হবে না ভাবা।', en: 'Believing Umrah is invalid unless a particular dua book is recited.' }, fix: { bn: 'প্রতিটি চক্করের জন্য নির্দিষ্ট দোয়া প্রমাণিত নয়; নিজের ভাষায় দোয়া করুন।', en: 'No specific dua per circuit is established; supplicate in your own language.' } },
    ],
    refs: ['q-2-196', 'q-3-97', 'h-umrah-expiation', 'h-ramadan-umrah', 'h-intentions'],
    media: ['p-dac-1'],
    checklist: [
      { bn: 'নিয়ত খাঁটি করেছি', en: 'Made my intention sincere' },
      { bn: 'ইবাদতের ধাপগুলো পড়েছি', en: 'Read through all the rites' },
      { bn: 'তালবিয়াহ মুখস্থ করেছি', en: 'Memorised the Talbiyah' },
      { bn: 'ঋণ/দায়িত্ব গুছিয়েছি', en: 'Settled debts and responsibilities' },
      { bn: 'হাঁটার অনুশীলন শুরু করেছি', en: 'Started walking practice' },
    ],
    practical: [
      { bn: 'প্ল্যানার পাতায় বাজেট ও টাইমলাইন তৈরি করুন।', en: 'Build your budget and timeline in the planner.' },
      { bn: 'বয়স্ক বা অসুস্থ হলে আগে ডাক্তারের পরামর্শ নিন।', en: 'If elderly or unwell, consult a doctor first.' },
    ],
  },

  /* 2 ------------------------------------------------------------------ */
  {
    id: 'documents',
    order: 2,
    isRite: false,
    icon: 'FileCheck',
    animation: 'documents',
    title: { bn: 'কাগজপত্র, ভিসা ও প্যাকিং', en: 'Documents, visa and packing' },
    short: { bn: 'পাসপোর্ট, ভিসা, টিকা, নুসুক ও ব্যাগ', en: 'Passport, visa, vaccine, Nusuk and bags' },
    meaning: {
      bn: 'সফরের প্রশাসনিক প্রস্তুতি। এগুলো ধর্মীয় বিধান নয়, তবে এগুলো ছাড়া সফর সম্ভব নয়।',
      en: 'The administrative side of the journey. These are not religious rulings, but the trip is impossible without them.',
    },
    why: {
      bn: 'সৌদি আরবের প্রবেশ নিয়ম ও উমরাহ পারমিট ব্যবস্থা মেনে চলা প্রয়োজন। শেষ মুহূর্তের ঝামেলা এড়াতে আগে থেকে গুছিয়ে নিন।',
      en: "Saudi entry rules and the Umrah permit system must be followed. Prepare early to avoid last-minute problems.",
    },
    steps: [
      { text: { bn: 'পাসপোর্টের মেয়াদ সৌদি আরবে প্রবেশের তারিখ থেকে অন্তত ৬ মাস আছে কি না দেখুন।', en: 'Check your passport is valid for at least 6 months from your date of entry to Saudi Arabia.' } },
      { text: { bn: 'অনুমোদিত এজেন্সি বা নুসুক-সংযুক্ত প্ল্যাটফর্মের মাধ্যমে উমরাহ ভিসা নিন। ভিসায় কী অন্তর্ভুক্ত (বিমা, হোটেল, পরিবহন) লিখিতভাবে জেনে নিন।', en: 'Get your Umrah visa through an accredited agency or Nusuk-linked platform. Get in writing what it includes (insurance, hotel, transport).' } },
      { text: { bn: 'মেনিনজাইটিস (ACYW) টিকা পৌঁছানোর অন্তত ১০ দিন আগে নিন ও সনদ সংগ্রহ করুন।', en: 'Take the meningococcal (ACYW) vaccine at least 10 days before arrival and keep the certificate.' } },
      { text: { bn: 'নুসুক অ্যাপ ইনস্টল করুন, অ্যাকাউন্ট খুলুন এবং উমরাহর সময়সূচি পারমিট নিন।', en: 'Install the Nusuk app, create an account and book your Umrah time-slot permit.' } },
      { text: { bn: 'পাসপোর্ট, ভিসা, টিকিট, হোটেল বুকিং ও টিকার সনদের প্রিন্ট ও ফোনে কপি রাখুন।', en: 'Keep printed and phone copies of passport, visa, tickets, hotel bookings and vaccine certificate.' } },
      { text: { bn: 'হালকা ব্যাগ গুছান: ইহরামের কাপড় (পুরুষ), আরামদায়ক স্যান্ডেল, ছোট ব্যাগ, ওষুধ, সুগন্ধিবিহীন সাবান ও তেল।', en: 'Pack light: Ihram garments (men), comfortable sandals, a small bag, medicines, unscented soap and lotion.' } },
    ],
    rulings: [
      { level: 'practical', text: { bn: 'ভিসা, পারমিট ও টিকার নিয়ম সৌদি কর্তৃপক্ষ নির্ধারণ করে এবং পরিবর্তন হতে পারে - “ভ্রমণ তথ্য” অংশে সূত্র ও যাচাইয়ের তারিখ দেখুন।', en: 'Visa, permit and vaccine rules are set by the Saudi authorities and can change - see sources and check dates in Travel information.' } },
    ],
    forWomen: [
      { bn: 'ইহরামের জন্য নারীদের বিশেষ পোশাক নেই - স্বাভাবিক শালীন, ঢিলেঢালা পোশাক নিন।', en: 'Women have no special Ihram garment - pack normal modest, loose clothing.' },
      { bn: 'মাহরাম সম্পর্কিত প্রশাসনিক নিয়ম ও শরিয়তের মতভেদ “ভ্রমণ তথ্য” অংশে দেখুন।', en: 'See Travel information for the administrative mahram rule and the scholarly difference.' },
    ],
    mistakes: [
      { mistake: { bn: 'টিকা শেষ সপ্তাহে নেওয়া।', en: 'Taking the vaccine in the last week.' }, fix: { bn: 'পৌঁছানোর অন্তত ১০ দিন আগে নিন; প্ল্যানারে সময়সীমা দেখানো আছে।', en: 'Take it at least 10 days before arrival; the planner shows the deadline.' } },
      { mistake: { bn: 'নুসুক পারমিট ছাড়া হারামে উমরাহ করতে যাওয়া।', en: 'Going to perform Umrah without a Nusuk permit.' }, fix: { bn: 'পৌঁছানোর আগেই অ্যাপে পারমিট নিয়ে রাখুন।', en: 'Book the permit in the app before you arrive.' } },
    ],
    refs: [],
    media: ['p-dac-2'],
    checklist: [
      { bn: 'পাসপোর্টের মেয়াদ ৬ মাস+', en: 'Passport valid 6+ months' },
      { bn: 'ভিসা পেয়েছি', en: 'Visa received' },
      { bn: 'মেনিনজাইটিস টিকার সনদ', en: 'Meningococcal certificate' },
      { bn: 'নুসুক উমরাহ পারমিট', en: 'Nusuk Umrah permit' },
      { bn: 'কাগজপত্রের প্রিন্ট ও ডিজিটাল কপি', en: 'Printed and digital copies' },
      { bn: 'ব্যাগ গোছানো শেষ', en: 'Bags packed' },
    ],
    practical: [
      { bn: 'সুগন্ধিবিহীন সাবান, শ্যাম্পু ও ভ্যাসলিন নিন - ইহরাম অবস্থায় সুগন্ধি নিষেধ।', en: 'Pack unscented soap, shampoo and petroleum jelly - perfume is not allowed in Ihram.' },
      { bn: 'পায়ে ফোস্কা প্রতিরোধে প্লাস্টার ও আরামদায়ক স্যান্ডেল নিন।', en: 'Bring plasters and comfortable sandals to prevent blisters.' },
      { bn: 'সাথে একটি ছোট নামাজের মাদুর ও পানির বোতল রাখতে পারেন।', en: 'A small prayer mat and a water bottle are useful.' },
    ],
  },

  /* 3 ------------------------------------------------------------------ */
  {
    id: 'ihram',
    order: 3,
    isRite: true,
    icon: 'Shirt',
    animation: 'ihram',
    title: { bn: 'মিকাত ও ইহরাম', en: 'Miqat and entering Ihram' },
    short: { bn: 'কোথায় ও কীভাবে ইহরাম বাঁধবেন', en: 'Where and how to enter Ihram' },
    meaning: {
      bn: 'ইহরাম হলো উমরাহ শুরু করার নিয়তসহ পবিত্র অবস্থায় প্রবেশ, যার পর কিছু হালাল কাজও সাময়িকভাবে নিষিদ্ধ হয়ে যায়। মিকাত হলো সেই নির্ধারিত সীমা, যা উমরাহর নিয়তে ইহরাম ছাড়া অতিক্রম করা যায় না।',
      en: 'Ihram is entering the sacred state with the intention of Umrah, after which some normally lawful things become temporarily forbidden. The Miqat is the appointed boundary that may not be crossed, with the intention of Umrah, without Ihram.',
    },
    why: {
      bn: 'নবী ﷺ মিকাতগুলো নির্ধারণ করেছেন এবং যারা সেগুলোর পাশ দিয়ে হজ বা উমরাহর উদ্দেশ্যে আসে তাদের জন্যও তা প্রযোজ্য করেছেন।',
      en: 'The Prophet ﷺ appointed the Miqats and made them binding on everyone who passes them intending Hajj or Umrah.',
    },
    steps: [
      { text: { bn: 'নখ কাটা, অবাঞ্ছিত লোম পরিষ্কার ইত্যাদি সেরে গোসল করুন (সুন্নাহ)।', en: 'Trim nails, remove unwanted hair, then bathe (Sunnah).' }, refs: ['h-ghusl-ihram'] },
      { text: { bn: 'পুরুষ: শরীরে (কাপড়ে নয়) সুগন্ধি লাগাতে পারেন, তারপর সেলাইবিহীন দুই সাদা চাদর পরুন - একটি কোমর থেকে নিচে (ইজার), একটি গায়ে (রিদা)। মাথা খোলা থাকবে।', en: "Men: you may apply perfume to the body (not the garments), then wear two unstitched white sheets - one from the waist down (izar), one over the upper body (rida'). The head stays uncovered." }, audience: 'men', refs: ['h-perfume-before-ihram', 'h-ihram-clothing'] },
      { text: { bn: 'নারী: স্বাভাবিক শালীন পোশাক পরুন; নিকাব ও হাতমোজা পরবেন না। সুগন্ধি ব্যবহার করবেন না।', en: 'Women: wear normal modest clothing; do not wear a niqab or gloves. Do not use perfume.' }, audience: 'women', refs: ['h-woman-niqab'] },
      { text: { bn: 'বিমানে (ঢাকা → জেদ্দা): ঢাকা বিমানবন্দরে বা বিমানে ওঠার আগে ইহরামের কাপড় পরে নিন, কিন্তু নিয়ত করবেন মিকাতের সমান্তরালে পৌঁছানোর আগে (সাধারণত পাইলট/ক্রু ঘোষণা দেন)। জেদ্দা বিমানবন্দর মিকাত নয়।', en: 'By air (Dhaka → Jeddah): put on the Ihram garments at Dhaka airport or before boarding, but make the intention before the plane is parallel to the Miqat (usually announced by the crew). Jeddah airport is not a Miqat.' }, refs: ['h-mawaqit', 'h-dhat-irq'] },
      { text: { bn: 'মদিনা থেকে মক্কা: যুল-হুলাইফা (আবইয়ার আলি) মসজিদে ইহরাম বাঁধুন। ট্রেনে গেলে মদিনায় ওঠার আগেই ইহরামের কাপড় পরে নিন এবং মিকাত পার হওয়ার আগে নিয়ত করুন।', en: "From Madinah to Makkah: enter Ihram at Dhul-Hulayfah (Abyar 'Ali) mosque. By train, put on the garments before boarding in Madinah and make the intention before passing the Miqat." }, refs: ['h-mawaqit'] },
      { text: { bn: 'কোনো ফরজ সালাতের সময় হলে তা আদায় করে ইহরাম বাঁধা উত্তম; ইহরামের জন্য নির্দিষ্ট সালাত নিয়ে মতভেদ আছে (নিচে দেখুন)।', en: 'It is preferable to enter Ihram after an obligatory prayer if one is due; there is a difference of opinion on a specific prayer for Ihram (see below).' } },
    ],
    rulings: [
      { level: 'obligatory', text: { bn: 'মিকাত থেকে (বা তার আগে) ইহরাম বাঁধা ওয়াজিব। ইহরাম ছাড়া মিকাত পার হলে ফিরে গিয়ে ইহরাম বাঁধতে হবে; না ফিরলে অধিকাংশ আলেমের মতে দম (একটি পশু কুরবানি) ওয়াজিব।', en: 'Entering Ihram at (or before) the Miqat is obligatory. Whoever passes it without Ihram must go back; if not, most scholars hold a sacrifice (dam) becomes due.' }, refs: ['h-mawaqit'] },
      { level: 'prohibited', text: { bn: 'ইহরাম অবস্থায় নিষিদ্ধ: চুল/নখ কাটা, সুগন্ধি ব্যবহার, বিয়ে বা বিয়ের প্রস্তাব, স্বামী-স্ত্রীর মিলন ও তার পূর্ববর্তী আচরণ, স্থলজ প্রাণী শিকার; পুরুষের জন্য সেলাই করা পোশাক ও মাথা ঢাকা; নারীর জন্য নিকাব ও হাতমোজা।', en: "Forbidden in Ihram: cutting hair or nails, using perfume, marriage contracts or proposals, marital relations and foreplay, hunting land animals; for men, fitted (stitched-to-shape) clothing and covering the head; for women, niqab and gloves." }, refs: ['h-ihram-clothing', 'h-woman-niqab', 'q-2-197'] },
      { level: 'permissible', text: { bn: 'অনুমোদিত: গোসল, সুগন্ধিবিহীন সাবান, ঘড়ি, চশমা, বেল্ট/টাকার ব্যাগ, ছাতা, স্যান্ডেল, ইহরামের কাপড় বদলানো।', en: 'Allowed: bathing, unscented soap, a watch, glasses, a belt or money pouch, an umbrella, sandals, changing Ihram garments.' } },
      { level: 'sunnah', text: { bn: 'অসুস্থতা বা বাধার আশঙ্কা থাকলে শর্তযুক্ত ইহরাম (ইশতিরাত) করা যায়।', en: 'If you fear illness or being prevented, you may make a conditional Ihram (ishtirat).' }, refs: ['h-ishtirat'] },
    ],
    differences: [
      {
        topic: { bn: 'ইহরামের জন্য বিশেষ দুই রাকাত', en: "A specific two rak'ahs for Ihram" },
        views: [
          { holders: { bn: 'চার মাযহাবের অধিকাংশ', en: 'Majority of the four schools' }, view: { bn: 'ইহরামের আগে দুই রাকাত নফল পড়া মুস্তাহাব।', en: "Two voluntary rak'ahs before Ihram are recommended." } },
          { holders: { bn: 'ইবনে তাইমিয়া ও কিছু আলেম', en: 'Ibn Taymiyyah and some scholars' }, view: { bn: 'ইহরামের জন্য নির্দিষ্ট সালাত নেই; কোনো ফরজ সালাতের পরে ইহরাম বাঁধা উত্তম।', en: 'There is no prayer specific to Ihram; entering it after an obligatory prayer is best.' } },
        ],
      },
      {
        topic: { bn: 'বিমানযাত্রীর জন্য জেদ্দা মিকাত কি না', en: 'Whether Jeddah is a Miqat for air travellers' },
        views: [
          { holders: { bn: 'অধিকাংশ আলেম ও সৌদি হজ মন্ত্রণালয়', en: 'Most scholars and the Saudi Ministry of Hajj' }, view: { bn: 'বাংলাদেশ থেকে আসা যাত্রীর জন্য জেদ্দা মিকাতের ভেতরে; বিমানেই ইহরাম বাঁধতে হবে।', en: 'For travellers from Bangladesh, Jeddah is inside the Miqat; Ihram must be entered on the plane.' } },
          { holders: { bn: 'কিছু সমসাময়িক আলেম (সংখ্যালঘু মত)', en: 'Some contemporary scholars (minority view)' }, view: { bn: 'জেদ্দাকে মিকাত হিসেবে গণ্য করেছেন। এই অ্যাপ সতর্কতামূলক অধিকাংশের মত অনুসরণ করে।', en: 'Considered Jeddah a valid Miqat. This app follows the cautious majority view.' } },
        ],
        refs: ['h-mawaqit'],
      },
    ],
    forMen: [
      { bn: 'মাথা ও মুখ ঢাকবেন না; টাখনু ঢাকে না এমন স্যান্ডেল পরুন।', en: 'Do not cover your head; wear sandals that leave the ankles uncovered.' },
      { bn: 'ইহরামের নিচে অন্তর্বাস পরবেন না।', en: 'Do not wear underwear beneath the Ihram.' },
    ],
    forWomen: [
      { bn: 'যেকোনো রঙের শালীন পোশাক পরতে পারেন; মোজা পরা জায়েয।', en: 'Modest clothes of any colour are fine; socks are allowed.' },
      { bn: 'ঋতুস্রাব থাকলেও গোসল করে ইহরাম বাঁধবেন; শুধু তাওয়াফ পবিত্র হওয়া পর্যন্ত অপেক্ষা করবেন।', en: 'Even if menstruating, bathe and enter Ihram; only Tawaf waits until you are pure.' },
    ],
    mistakes: [
      { mistake: { bn: 'জেদ্দায় নেমে ইহরাম বাঁধা।', en: 'Entering Ihram after landing in Jeddah.' }, fix: { bn: 'ঢাকায় কাপড় পরে নিন এবং বিমানে মিকাতের আগে নিয়ত করুন।', en: 'Dress in Dhaka and make the intention on the plane before the Miqat.' } },
      { mistake: { bn: 'ইহরামের কাপড়ে সুগন্ধি লাগানো।', en: 'Putting perfume on the Ihram garments.' }, fix: { bn: 'শুধু নিয়তের আগে শরীরে লাগানো যায়।', en: 'Perfume may only go on the body, before the intention.' } },
      { mistake: { bn: 'মনে করা ইহরামের কাপড় পরলেই ইহরাম শুরু হয়ে যায়।', en: 'Thinking that wearing the garments alone means you are in Ihram.' }, fix: { bn: 'নিয়ত করলে ইহরাম শুরু হয়; কাপড় শুধু প্রস্তুতি।', en: 'Ihram begins with the intention; the garments are preparation.' } },
    ],
    refs: ['h-mawaqit', 'h-dhat-irq', 'h-ihram-clothing', 'h-woman-niqab', 'h-perfume-before-ihram', 'h-ghusl-ihram', 'h-ishtirat', 'q-2-197'],
    media: ['v-ihram', 'p-ihram-1', 'p-dhul-hulayfah-1', 'p-jed-airport-1'],
    checklist: [
      { bn: 'গোসল ও পরিচ্ছন্নতা', en: 'Bathed and groomed' },
      { bn: 'ইহরামের পোশাক পরেছি', en: 'Wearing Ihram clothing' },
      { bn: 'মিকাতের সময় জেনেছি (বিমান/ট্রেন)', en: 'Know when the Miqat comes (plane/train)' },
      { bn: 'নিষিদ্ধ কাজগুলো জানি', en: 'Know the prohibitions' },
    ],
    practical: [
      { bn: 'বিমানে ইহরামের কাপড় হ্যান্ড লাগেজে রাখুন; কানেক্টিং ফ্লাইটে শেষ লেগে ওঠার আগে পরুন।', en: 'Keep Ihram garments in hand luggage; on connecting flights, change before the final leg.' },
      { bn: 'ইহরামের চাদর আটকাতে বেল্ট বা সেফটি পিন ব্যবহার করা যায়।', en: 'A belt or safety pins may be used to secure the sheets.' },
    ],
  },

  /* 4 ------------------------------------------------------------------ */
  {
    id: 'niyyah',
    order: 4,
    isRite: true,
    icon: 'HeartHandshake',
    animation: 'talbiyah',
    title: { bn: 'নিয়ত ও তালবিয়াহ', en: 'Niyyah and Talbiyah' },
    short: { bn: 'উমরাহর নিয়ত এবং “লাব্বাইক” পাঠ', en: "The intention and saying 'Labbayk'" },
    meaning: {
      bn: 'নিয়ত হলো অন্তরে উমরাহ শুরুর সংকল্প। তালবিয়াহ হলো আল্লাহর ডাকে সাড়া দেওয়ার ঘোষণা - “আমি হাজির, হে আল্লাহ।”',
      en: "Niyyah is the heart's resolve to begin Umrah. The Talbiyah is the declaration of answering Allah's call - 'Here I am, O Allah.'",
    },
    why: {
      bn: 'সকল আমল নিয়তের ওপর নির্ভরশীল। তালবিয়াহ নবী ﷺ-এর সুন্নাহ এবং তাওহিদের ঘোষণা।',
      en: 'All deeds depend on intentions. The Talbiyah is the Sunnah of the Prophet ﷺ and a declaration of tawhid.',
    },
    steps: [
      { text: { bn: 'মিকাতে বা তার আগে অন্তরে উমরাহর নিয়ত করুন। মুখে বলা সুন্নাহসম্মত শব্দ: “লাব্বাইকা উমরাহ” (হে আল্লাহ, উমরাহর জন্য হাজির)।', en: "At or before the Miqat, intend Umrah in your heart. A commonly used spoken form is 'Labbayka 'Umrah' (Here I am for Umrah)." }, refs: ['h-intentions'] },
      { text: { bn: 'অসুস্থতা বা বাধার আশঙ্কা থাকলে শর্ত যোগ করুন: “আল্লাহুম্মা মাহিল্লি হাইসু হাবাসতানি।”', en: "If you fear being prevented, add the condition: 'Allahumma mahilli haythu habastani.'" }, refs: ['h-ishtirat'] },
      { text: { bn: 'তালবিয়াহ পড়া শুরু করুন এবং মাসজিদুল হারামে পৌঁছে তাওয়াফ শুরু করা পর্যন্ত বারবার পড়ুন।', en: 'Begin the Talbiyah and keep repeating it until you start Tawaf at Masjid al-Haram.' }, refs: ['h-talbiyah'] },
      { text: { bn: 'পুরুষেরা উচ্চস্বরে, নারীরা নিচু স্বরে পড়বেন।', en: 'Men say it aloud; women say it quietly.' } },
    ],
    rulings: [
      { level: 'pillar', text: { bn: 'ইহরামের নিয়ত উমরাহর রুকন (অধিকাংশ মাযহাব); হানাফি মতে ইহরাম উমরাহর শর্ত।', en: 'The intention of Ihram is a pillar of Umrah (majority); per the Hanafi school, Ihram is a precondition of Umrah.' }, refs: ['h-intentions'] },
      { level: 'sunnah', text: { bn: 'তালবিয়াহ পড়া অধিকাংশের মতে সুন্নাহ; হানাফি মতে ইহরাম শুরুর সময় তালবিয়াহ বা সমতুল্য জিকির আবশ্যক।', en: 'Saying the Talbiyah is Sunnah per the majority; the Hanafi school requires the Talbiyah (or equivalent remembrance) when starting Ihram.' }, refs: ['h-talbiyah'] },
      { level: 'practical', text: { bn: 'মুখে নিয়তের দীর্ঘ কোনো আরবি বাক্য বলা শর্ত নয়।', en: 'No lengthy spoken Arabic formula of intention is required.' } },
    ],
    mistakes: [
      { mistake: { bn: 'দলবদ্ধভাবে একসুরে তালবিয়াহ পড়াকে আবশ্যক মনে করা।', en: 'Treating chanting the Talbiyah in unison as required.' }, fix: { bn: 'প্রত্যেকে নিজে নিজে পড়ুন।', en: 'Each person recites individually.' } },
      { mistake: { bn: 'তাওয়াফের সময়ও তালবিয়াহ চালিয়ে যাওয়া।', en: 'Continuing the Talbiyah during Tawaf.' }, fix: { bn: 'তাওয়াফ শুরু করলে তালবিয়াহ বন্ধ করুন।', en: 'Stop the Talbiyah when you begin Tawaf.' } },
    ],
    refs: ['h-intentions', 'h-talbiyah', 'h-ishtirat'],
    media: ['v-alafasy-talbiyah'],
    checklist: [
      { bn: 'অন্তরে উমরাহর নিয়ত করেছি', en: 'Made the intention for Umrah' },
      { bn: 'তালবিয়াহ শুরু করেছি', en: 'Started the Talbiyah' },
      { bn: 'ইহরামের নিষিদ্ধ কাজ থেকে বিরত আছি', en: 'Avoiding the prohibitions of Ihram' },
    ],
  },

  /* 5 ------------------------------------------------------------------ */
  {
    id: 'entering',
    order: 5,
    isRite: false,
    icon: 'DoorOpen',
    animation: 'masjid-entry',
    title: { bn: 'মসজিদুল হারামে প্রবেশ', en: 'Entering Masjid al-Haram' },
    short: { bn: 'হোটেল থেকে কাবা পর্যন্ত', en: 'From the hotel to the Kaaba' },
    meaning: {
      bn: 'মক্কায় পৌঁছে বিশ্রাম নিয়ে, পবিত্র অবস্থায় মসজিদুল হারামে প্রবেশ করে তাওয়াফের দিকে যাওয়া।',
      en: 'After reaching Makkah and resting, entering Masjid al-Haram in a state of purity and heading to Tawaf.',
    },
    why: {
      bn: 'উমরাহর পরবর্তী কাজগুলো মসজিদের ভেতরে। প্রবেশের সুন্নাহ আদব মেনে চললে ইবাদতের মনোযোগ তৈরি হয়।',
      en: 'The next rites take place inside the mosque. Following the Sunnah etiquette of entry prepares the heart for worship.',
    },
    steps: [
      { text: { bn: 'হোটেলে মালপত্র রেখে বিশ্রাম নিন, প্রয়োজনে খেয়ে নিন। ক্লান্ত অবস্থায় তাওয়াফ শুরু করবেন না - কোনো সময়সীমা নেই।', en: 'Leave luggage at the hotel, rest and eat if needed. Do not start Tawaf exhausted - there is no deadline.' } },
      { text: { bn: 'অজু করে নিন। তালবিয়াহ পড়তে থাকুন।', en: 'Make wudu. Keep reciting the Talbiyah.' } },
      { text: { bn: 'ডান পা দিয়ে প্রবেশ করে মসজিদে প্রবেশের দোয়া পড়ুন।', en: 'Enter with the right foot and say the supplication for entering the mosque.' }, refs: ['d-enter-masjid'] },
      { text: { bn: 'কাবা দেখার পর নিজের ভাষায় যা ইচ্ছা দোয়া করুন - এর জন্য নির্দিষ্ট দোয়া প্রমাণিত নয় বলে অনেক আলেম উল্লেখ করেছেন।', en: 'On seeing the Kaaba, supplicate freely in your own words - many scholars note no specific supplication for this is established.' } },
      { text: { bn: 'মাতাফে (কাবার চারপাশের চত্বর) বা ওপরের তলায় তাওয়াফের জন্য যান। জামাতে সালাত শুরু হলে প্রথমে সালাত আদায় করুন।', en: 'Head to the Mataf (area around the Kaaba) or an upper floor for Tawaf. If congregational prayer starts, join it first.' } },
      { text: { bn: 'দল থেকে আলাদা হয়ে গেলে কোথায় মিলবেন তা আগে ঠিক করুন - গেট নম্বর মনে রাখুন।', en: 'Agree a meeting point in case you get separated - note the gate number.' } },
    ],
    rulings: [
      { level: 'sunnah', text: { bn: 'ডান পা দিয়ে প্রবেশ ও প্রবেশের দোয়া পড়া সুন্নাহ।', en: 'Entering with the right foot and saying the entry supplication is Sunnah.' }, refs: ['d-enter-masjid'] },
      { level: 'practical', text: { bn: 'উমরাহকারীর জন্য তাওয়াফই মসজিদুল হারামের “তাহিয়্যাতুল মসজিদ” - আলাদা দুই রাকাত লাগে না (অধিকাংশ আলেম)।', en: "For the pilgrim, Tawaf serves as the greeting of Masjid al-Haram - a separate two rak'ahs is not needed (most scholars)." } },
    ],
    mistakes: [
      { mistake: { bn: 'জুতা হারিয়ে ফেলা।', en: 'Losing your shoes.' }, fix: { bn: 'ছোট ব্যাগে জুতা নিয়ে নিন বা নম্বরসহ র‍্যাকে রাখুন।', en: 'Carry shoes in a small bag or use a numbered rack.' } },
      { mistake: { bn: 'বড় ব্যাগ বা লাগেজ নিয়ে মসজিদে প্রবেশ।', en: 'Bringing large bags or luggage into the mosque.' }, fix: { bn: 'হোটেলে রেখে আসুন - কর্তৃপক্ষ এটি নিরুৎসাহিত করে।', en: 'Leave them at the hotel - the authorities discourage it.' } },
    ],
    refs: ['d-enter-masjid', 'd-leave-masjid', 'h-haram-prayer'],
    media: ['v-etiquette', 'v-alafasy-masjid', 'p-haram-1', 'p-haram-2'],
    checklist: [
      { bn: 'বিশ্রাম নিয়েছি', en: 'Rested' },
      { bn: 'অজু আছে', en: 'Have wudu' },
      { bn: 'প্রবেশের দোয়া পড়েছি', en: 'Said the entry supplication' },
      { bn: 'মিলিত হওয়ার স্থান ঠিক করেছি', en: 'Agreed a meeting point' },
    ],
  },

  /* 6 ------------------------------------------------------------------ */
  {
    id: 'tawaf',
    order: 6,
    isRite: true,
    icon: 'RotateCcw',
    animation: 'tawaf',
    title: { bn: 'তাওয়াফ - সাত চক্কর', en: 'Tawaf - seven circuits' },
    short: { bn: 'কাবা বাম দিকে রেখে সাতবার প্রদক্ষিণ', en: 'Seven circuits with the Kaaba on your left' },
    meaning: {
      bn: 'তাওয়াফ হলো হাজরে আসওয়াদ থেকে শুরু করে কাবাঘরকে বাম দিকে রেখে সাতবার প্রদক্ষিণ করা। প্রতিটি চক্কর হাজরে আসওয়াদ বরাবর শেষ হয়।',
      en: 'Tawaf is circling the Kaaba seven times, starting from the Black Stone with the Kaaba on your left. Each circuit ends back in line with the Black Stone.',
    },
    why: {
      bn: 'আল্লাহ প্রাচীন ঘরের তাওয়াফের নির্দেশ দিয়েছেন। তাওয়াফ উমরাহর অন্যতম প্রধান রুকন।',
      en: 'Allah commands circling the Ancient House. Tawaf is one of the main pillars of Umrah.',
    },
    steps: [
      { text: { bn: 'অজু অবস্থায় থাকুন (অজুর বিধান নিয়ে মতভেদ নিচে দেখুন)।', en: 'Be in a state of wudu (see the difference of opinion below).' }, refs: ['h-tawaf-like-prayer'] },
      { text: { bn: 'পুরুষেরা ইযতিবা করুন - রিদা ডান বগলের নিচ দিয়ে এনে বাম কাঁধে রাখুন, ডান কাঁধ খোলা থাকবে।', en: "Men do idtiba' - bring the upper sheet under the right arm and over the left shoulder, leaving the right shoulder bare." }, audience: 'men', refs: ['h-idtiba'] },
      { text: { bn: 'তালবিয়াহ বন্ধ করুন। হাজরে আসওয়াদ বরাবর (মেঝের/দেয়ালের সবুজ বাতি বা চিহ্ন দেখে) কাবার দিকে মুখ করুন।', en: 'Stop the Talbiyah. Face the Kaaba in line with the Black Stone (look for the green light/marker).' } },
      { text: { bn: 'সম্ভব হলে হাজরে আসওয়াদ চুম্বন বা স্পর্শ করুন; না পারলে ডান হাত তুলে ইশারা করে “আল্লাহু আকবার” বলুন। ধাক্কাধাক্কি করবেন না।', en: "If possible kiss or touch the Black Stone; otherwise raise your right hand towards it and say 'Allahu Akbar'. Do not push." }, refs: ['h-takbir-corner', 'h-black-stone-umar'] },
      { text: { bn: 'কাবাকে বাম দিকে রেখে হাঁটা শুরু করুন। হাতিম (অর্ধবৃত্তাকার দেয়াল) এর বাইরে দিয়ে যান - এটি কাবার অংশ।', en: "Start walking with the Kaaba on your left. Go outside the Hijr Isma'il (the semicircular wall) - it is part of the Kaaba." } },
      { text: { bn: 'পুরুষেরা প্রথম তিন চক্করে রমল করবেন - ছোট ছোট দ্রুত পদক্ষেপ, কাঁধ নাড়িয়ে; বাকি চার চক্কর স্বাভাবিক হাঁটা।', en: 'Men do raml in the first three circuits - short, brisk steps; walk normally in the remaining four.' }, audience: 'men', refs: ['h-raml'] },
      { text: { bn: 'রুকনে ইয়ামানি (হাজরে আসওয়াদের আগের কোণ) সম্ভব হলে ডান হাতে স্পর্শ করুন - চুম্বন বা ইশারা নয়।', en: 'Touch the Yemeni Corner (the corner before the Black Stone) with your right hand if possible - do not kiss it or point at it.' } },
      { text: { bn: 'রুকনে ইয়ামানি ও হাজরে আসওয়াদের মাঝে পড়ুন: “রাব্বানা আতিনা ফিদ্দুনিয়া হাসানাহ…”', en: "Between the Yemeni Corner and the Black Stone say: 'Rabbana atina fid-dunya hasanah…'" }, refs: ['q-2-201'] },
      { text: { bn: 'হাজরে আসওয়াদ বরাবর পৌঁছালে এক চক্কর শেষ। আবার ইশারা ও তাকবির দিয়ে পরের চক্কর শুরু করুন। সাত চক্কর গুনে নিন - নিচের কাউন্টার ব্যবহার করুন।', en: 'Reaching the Black Stone line completes one circuit. Point and say takbir again to begin the next. Count seven - use the counter below.' } },
      { text: { bn: 'বাকি সময় নিজের ভাষায় দোয়া, জিকির, কুরআন তিলাওয়াত করুন। প্রতি চক্করের জন্য নির্দিষ্ট দোয়া নেই।', en: "Spend the rest in supplication, dhikr or Qur'an in any language. There is no specific dua per circuit." } },
    ],
    rulings: [
      { level: 'pillar', text: { bn: 'তাওয়াফ উমরাহর রুকন - এটি ছাড়া উমরাহ হয় না।', en: 'Tawaf is a pillar of Umrah - Umrah is not valid without it.' }, refs: ['q-22-29'] },
      { level: 'obligatory', text: { bn: 'সাত চক্কর পূর্ণ করা, হাজরে আসওয়াদ থেকে শুরু, কাবা বাম দিকে রাখা, হাতিমের বাইরে দিয়ে যাওয়া এবং সতর ঢাকা থাকা - এগুলো তাওয়াফ সহিহ হওয়ার শর্ত।', en: 'Completing seven circuits, starting at the Black Stone, keeping the Kaaba on the left, going outside the Hijr, and keeping the awrah covered - these are conditions for a valid Tawaf.' } },
      { level: 'sunnah', text: { bn: 'ইযতিবা ও রমল (শুধু পুরুষ, এই তাওয়াফে), হাজরে আসওয়াদ স্পর্শ/ইশারা, রুকনে ইয়ামানি স্পর্শ।', en: "Idtiba' and raml (men only, in this Tawaf), touching or pointing to the Black Stone, touching the Yemeni Corner." }, refs: ['h-idtiba', 'h-raml', 'h-takbir-corner'] },
      { level: 'practical', text: { bn: 'চক্করের সংখ্যায় সন্দেহ হলে কম সংখ্যাটি ধরুন এবং বাকিটা পূর্ণ করুন।', en: 'If unsure how many circuits you have done, take the lower number and complete the rest.' } },
    ],
    differences: [
      {
        topic: { bn: 'তাওয়াফের জন্য অজু', en: 'Wudu for Tawaf' },
        views: [
          { holders: { bn: 'শাফেয়ি, মালেকি, হাম্বলি (প্রসিদ্ধ মত)', en: "Shafi'i, Maliki, Hanbali (well-known view)" }, view: { bn: 'অজু তাওয়াফ সহিহ হওয়ার শর্ত। তাওয়াফের মাঝে অজু ভেঙে গেলে অজু করে আবার শুরু করতে হবে (কেউ কেউ বলেন যেখানে থেমেছেন সেখান থেকে)।', en: 'Wudu is a condition of validity. If it breaks mid-Tawaf, renew wudu and restart (some say continue from where you stopped).' } },
          { holders: { bn: 'হানাফি', en: 'Hanafi' }, view: { bn: 'অজু ওয়াজিব, শর্ত নয় - অজু ছাড়া তাওয়াফ হয়ে যায় তবে ক্ষতিপূরণ (দম/সদকা) লাগে।', en: 'Wudu is obligatory but not a condition - Tawaf without it counts but requires compensation (dam/sadaqah).' } },
          { holders: { bn: 'ইবনে তাইমিয়া ও কিছু আলেম', en: 'Ibn Taymiyyah and some scholars' }, view: { bn: 'অজু উত্তম, তবে শর্ত নয় (ছোট নাপাকির ক্ষেত্রে)।', en: 'Wudu is best but not a condition (for minor impurity).' } },
        ],
        refs: ['h-tawaf-like-prayer'],
      },
    ],
    forMen: [
      { bn: 'ইযতিবা শুধু তাওয়াফের সময়; তাওয়াফের পর সালাতের আগে কাঁধ ঢেকে নিন।', en: "Idtiba' is only during Tawaf; cover the shoulder before praying afterwards." },
      { bn: 'ভিড়ে রমল সম্ভব না হলে স্বাভাবিক হাঁটুন - কোনো ক্ষতি নেই।', en: 'If the crowd prevents raml, walk normally - no penalty.' },
    ],
    forWomen: [
      { bn: 'নারীদের জন্য রমল ও ইযতিবা নেই। ভিড় এড়াতে হাজরে আসওয়াদের কাছে যাওয়ার চেষ্টা না করে দূর থেকে ইশারা করুন।', en: "Women do not do raml or idtiba'. Point to the Black Stone from a distance rather than entering the crush." },
      { bn: 'ঋতুস্রাব অবস্থায় তাওয়াফ করবেন না; পবিত্র হওয়ার পর গোসল করে করবেন।', en: 'Do not perform Tawaf while menstruating; do it after becoming pure and bathing.' },
    ],
    mistakes: [
      { mistake: { bn: 'হাতিমের ভেতর দিয়ে তাওয়াফ করা।', en: 'Walking through the Hijr Isma\'il.' }, fix: { bn: 'অর্ধবৃত্তাকার দেয়ালের বাইরে দিয়ে চলুন, না হলে ঐ চক্কর গণ্য হবে না।', en: 'Stay outside the semicircular wall, or that circuit will not count.' } },
      { mistake: { bn: 'হাজরে আসওয়াদ চুম্বনের জন্য ধাক্কাধাক্কি।', en: 'Pushing to kiss the Black Stone.' }, fix: { bn: 'ইশারাই যথেষ্ট; অন্যকে কষ্ট দেওয়া হারাম।', en: 'Pointing is enough; harming others is forbidden.' } },
      { mistake: { bn: 'প্রতি চক্করের জন্য বই থেকে নির্দিষ্ট দোয়া পড়া জরুরি মনে করা।', en: 'Believing a book\'s specific dua per circuit is required.' }, fix: { bn: 'নিজের ভাষায় মন থেকে দোয়া করুন।', en: 'Supplicate from the heart in your own language.' } },
      { mistake: { bn: 'রুকনে ইয়ামানি চুম্বন বা ইশারা করা।', en: 'Kissing or pointing at the Yemeni Corner.' }, fix: { bn: 'শুধু সম্ভব হলে স্পর্শ; না পারলে কিছু না করে চলতে থাকুন।', en: 'Only touch it if you can; otherwise just keep walking.' } },
    ],
    refs: ['q-22-29', 'h-tawaf-like-prayer', 'h-idtiba', 'h-raml', 'h-takbir-corner', 'h-black-stone-umar', 'q-2-201', 'h-menstruation'],
    media: ['v-idtiba', 'p-kaaba-1', 'p-black-stone-1', 'p-kaaba-2'],
    checklist: [
      { bn: 'অজু আছে', en: 'Have wudu' },
      { bn: 'ইযতিবা (পুরুষ)', en: "Idtiba' (men)" },
      { bn: 'হাজরে আসওয়াদ থেকে শুরু', en: 'Started at the Black Stone' },
      { bn: 'সাত চক্কর সম্পন্ন', en: 'Completed seven circuits' },
      { bn: 'কাঁধ ঢেকেছি (পুরুষ)', en: 'Covered shoulder again (men)' },
    ],
    practical: [
      { bn: 'ভিড় কম থাকে সাধারণত গভীর রাতে ও দুপুরের পর - তবে গরমে পানি সাথে রাখুন।', en: 'Crowds are usually lighter late at night and after midday - carry water in the heat.' },
      { bn: 'হুইলচেয়ার বা বয়স্কদের জন্য ওপরের তলাগুলোতে তাওয়াফ সহজ, তবে দূরত্ব বেশি।', en: 'Upper floors are easier for wheelchairs and the elderly, though the distance is longer.' },
    ],
  },

  /* 7 ------------------------------------------------------------------ */
  {
    id: 'prayer',
    order: 7,
    isRite: false,
    icon: 'Landmark',
    animation: 'prayer-maqam',
    title: { bn: 'তাওয়াফের পর দুই রাকাত', en: "Two rak'ahs after Tawaf" },
    short: { bn: 'মাকামে ইবরাহিমের পেছনে, সম্ভব হলে', en: 'Behind the Station of Ibrahim if possible' },
    meaning: {
      bn: 'তাওয়াফ শেষ করে মাকামে ইবরাহিমকে নিজের ও কাবার মাঝে রেখে দুই রাকাত সালাত আদায় করা।',
      en: "After Tawaf, praying two rak'ahs with the Station of Ibrahim between you and the Kaaba.",
    },
    why: {
      bn: 'আল্লাহ মাকামে ইবরাহিমকে সালাতের স্থান বানাতে বলেছেন এবং নবী ﷺ তাওয়াফের পর তা-ই করেছেন।',
      en: 'Allah says to take the Station of Ibrahim as a place of prayer, and the Prophet ﷺ did so after his Tawaf.',
    },
    steps: [
      { text: { bn: 'পুরুষেরা ডান কাঁধ ঢেকে নিন।', en: 'Men cover the right shoulder.' }, audience: 'men' },
      { text: { bn: 'মাকামে ইবরাহিমের দিকে যেতে যেতে পড়তে পারেন: “ওয়াত্তাখিযু মিম মাকামি ইবরাহিমা মুসাল্লা।”', en: "While going towards the Station you may recite: 'Wattakhidhu min maqami Ibrahima musalla.'" }, refs: ['q-2-125'] },
      { text: { bn: 'মাকামের পেছনে জায়গা পেলে সেখানে, না পেলে মসজিদের যেকোনো স্থানে দুই রাকাত পড়ুন। প্রথম রাকাতে সূরা কাফিরুন, দ্বিতীয়তে সূরা ইখলাস পড়া সুন্নাহ।', en: "Pray two rak'ahs behind the Station if there is room, otherwise anywhere in the mosque. Reciting al-Kafirun in the first and al-Ikhlas in the second is Sunnah." }, refs: ['h-two-rakahs'] },
      { text: { bn: 'তাওয়াফকারীদের পথ আটকাবেন না; ভিড় বেশি হলে পেছনে সরে যান।', en: 'Do not block people doing Tawaf; move back if it is crowded.' } },
    ],
    rulings: [
      { level: 'sunnah', text: { bn: 'অধিকাংশ আলেমের মতে এই দুই রাকাত সুন্নাতে মুআক্কাদা; হানাফি মতে ওয়াজিব।', en: "Most scholars hold these two rak'ahs are an emphasised Sunnah; the Hanafi school holds them obligatory (wajib)." }, refs: ['h-two-rakahs', 'q-2-125'] },
      { level: 'permissible', text: { bn: 'মাকামের পেছনে পড়া শর্ত নয় - মসজিদের যেকোনো স্থানে পড়া যায়।', en: 'Praying directly behind the Station is not required - anywhere in the mosque is valid.' } },
      { level: 'practical', text: { bn: 'মাকরুহ সময় (যেমন ফজরের পর সূর্য ওঠা পর্যন্ত) নিয়ে মাযহাবগুলোতে ভিন্ন মত আছে; অনেক আলেম মসজিদুল হারামে তাওয়াফের দুই রাকাতকে যেকোনো সময় বৈধ বলেন।', en: "The schools differ on praying at disliked times (e.g. after Fajr until sunrise); many scholars allow the Tawaf rak'ahs at any time in Masjid al-Haram." } },
    ],
    mistakes: [
      { mistake: { bn: 'মাকামের ঠিক পেছনে পড়তে গিয়ে তাওয়াফের পথে বাধা সৃষ্টি।', en: 'Blocking the Tawaf flow to pray right behind the Station.' }, fix: { bn: 'পেছনে বা অন্য তলায় পড়ুন।', en: 'Pray further back or on another floor.' } },
      { mistake: { bn: 'কাঁধ খোলা রেখে সালাত পড়া (পুরুষ)।', en: 'Praying with the shoulder bare (men).' }, fix: { bn: 'সালাতের আগে রিদা দিয়ে দুই কাঁধ ঢেকে নিন।', en: "Cover both shoulders with the rida' before praying." } },
    ],
    refs: ['q-2-125', 'h-two-rakahs'],
    media: ['v-two-rakahs', 'p-maqam-1', 'p-maqam-2'],
    checklist: [
      { bn: 'কাঁধ ঢেকেছি (পুরুষ)', en: 'Covered shoulder (men)' },
      { bn: 'দুই রাকাত আদায় করেছি', en: "Prayed two rak'ahs" },
    ],
  },

  /* 8 ------------------------------------------------------------------ */
  {
    id: 'zamzam',
    order: 8,
    isRite: false,
    icon: 'Droplets',
    animation: 'zamzam',
    title: { bn: 'জমজম পান', en: 'Drinking Zamzam' },
    short: { bn: 'বরকতময় পানি পান ও দোয়া', en: 'Drink the blessed water and supplicate' },
    meaning: {
      bn: 'সালাতের পর জমজমের পানি পান করা। জমজম হাজার বছর ধরে প্রবাহিত বরকতময় কূপের পানি।',
      en: 'Drinking Zamzam water after the prayer. Zamzam is the blessed well that has flowed for thousands of years.',
    },
    why: {
      bn: 'নবী ﷺ জমজমকে বরকতময় বলেছেন এবং হজের সময় তা পান করেছেন (জাবির রা.-এর হাদিস, সহিহ মুসলিম ১২১৮)। আলেমগণ তাওয়াফের সালাতের পর পান করা মুস্তাহাব বলেছেন।',
      en: "The Prophet ﷺ called Zamzam blessed and drank it during his Hajj (hadith of Jabir, Sahih Muslim 1218). Scholars recommend drinking it after the Tawaf prayer.",
    },
    steps: [
      { text: { bn: 'মসজিদের যেকোনো জমজম কুলার থেকে পানি নিন।', en: 'Take water from any Zamzam cooler in the mosque.' } },
      { text: { bn: '“বিসমিল্লাহ” বলে ডান হাতে পান করুন এবং দুনিয়া ও আখিরাতের কল্যাণের জন্য দোয়া করুন।', en: "Say 'Bismillah', drink with the right hand and supplicate for good in this world and the next." }, refs: ['h-zamzam-blessed', 'h-zamzam-intention'] },
      { text: { bn: 'এরপর সাঈ শুরু করতে মাসআর দিকে যান।', en: "Then go to the Mas'a to begin Sa'i." } },
    ],
    rulings: [
      { level: 'sunnah', text: { bn: 'জমজম পান করা মুস্তাহাব; এটি উমরাহর আবশ্যক অংশ নয়।', en: 'Drinking Zamzam is recommended; it is not a required part of Umrah.' }, refs: ['h-zamzam-blessed'] },
    ],
    mistakes: [
      { mistake: { bn: 'জমজম পানের জন্য নির্দিষ্ট দীর্ঘ দোয়া আবশ্যক মনে করা।', en: 'Believing a specific long dua is required for Zamzam.' }, fix: { bn: 'নিজের প্রয়োজনমতো যেকোনো দোয়া করুন।', en: 'Make any supplication for your needs.' } },
    ],
    refs: ['h-zamzam-blessed', 'h-zamzam-intention'],
    media: ['p-zamzam-1', 'p-zamzam-2'],
    checklist: [{ bn: 'জমজম পান করেছি ও দোয়া করেছি', en: 'Drank Zamzam and supplicated' }],
    practical: [
      { bn: 'ঠান্ডা ও সাধারণ তাপমাত্রার দুই ধরনের কুলার থাকে - গলা ব্যথা এড়াতে সাধারণটি বেছে নিন।', en: 'There are chilled and room-temperature coolers - choose room temperature to avoid a sore throat.' },
      { bn: 'দেশে জমজম নিতে চাইলে অনুমোদিত দোকান থেকে সিল করা ৫ লিটারের বোতল কিনুন; এয়ারলাইনের নিয়ম দেখুন।', en: "To take Zamzam home, buy a sealed 5-litre container from official outlets; check your airline's rule." },
    ],
  },

  /* 9 ------------------------------------------------------------------ */
  {
    id: 'sai',
    order: 9,
    isRite: true,
    icon: 'MoveHorizontal',
    animation: 'sai',
    title: { bn: 'সাঈ - সাফা ও মারওয়া', en: "Sa'i - Safa and Marwah" },
    short: { bn: 'সাফা থেকে মারওয়া, সাত বার', en: 'Safa to Marwah, seven times' },
    meaning: {
      bn: 'সাফা পাহাড় থেকে শুরু করে মারওয়া পর্যন্ত সাতবার চলা। সাফা → মারওয়া এক, মারওয়া → সাফা দুই… সপ্তম বার মারওয়ায় শেষ।',
      en: 'Walking between the hills of Safa and Marwah seven times, starting at Safa. Safa → Marwah is one, Marwah → Safa is two… the seventh ends at Marwah.',
    },
    why: {
      bn: 'সাফা ও মারওয়া আল্লাহর নিদর্শন। এটি হাজেরা (আ.)-এর পানির সন্ধানে দৌড়ানোর স্মৃতি বহন করে এবং নবী ﷺ তা পালন করেছেন।',
      en: "Safa and Marwah are among the symbols of Allah. Sa'i recalls Hajar's search for water, and the Prophet ﷺ performed it.",
    },
    steps: [
      { text: { bn: 'সহজ হলে সাফায় যাওয়ার আগে আবার হাজরে আসওয়াদ স্পর্শ বা ইশারা করুন - জাবির (রা.)-এর বর্ণনায় এটি আছে; বাধ্যতামূলক নয়।', en: "If easy, touch or point to the Black Stone again before going to Safa - mentioned in Jabir's narration; not required." }, refs: ['h-jabir-sai'] },
      { text: { bn: 'সাফার দিকে যান। প্রথমবার সাফার কাছে পৌঁছে পড়ুন: “ইন্নাস সাফা ওয়াল মারওয়াতা মিন শাআইরিল্লাহ…” এবং বলুন “আবদাউ বিমা বাদাআল্লাহু বিহি” (আল্লাহ যা দিয়ে শুরু করেছেন, আমিও তা দিয়ে শুরু করছি)।', en: "Go to Safa. On first approaching it recite 'Innas-safa wal-marwata min sha'a'irillah…' and say 'Abda'u bima bada'allahu bihi' (I begin with what Allah began with)." }, refs: ['q-2-158', 'h-jabir-sai'] },
      { text: { bn: 'সাফায় উঠে কাবার দিকে মুখ করে হাত তুলে তাকবির দিন, নবী ﷺ-এর জিকির পড়ুন এবং দোয়া করুন - এভাবে তিনবার।', en: "On Safa, face the Kaaba, raise your hands, say takbir, recite the Prophet's ﷺ remembrance and supplicate - three times." }, refs: ['h-jabir-sai'] },
      { text: { bn: 'মারওয়ার দিকে হাঁটা শুরু করুন। দুই সবুজ বাতির মাঝে পুরুষেরা দ্রুত দৌড়ের মতো চলবেন; নারীরা স্বাভাবিক হাঁটবেন।', en: 'Walk towards Marwah. Between the two green lights men move at a brisk run; women walk normally.' }, refs: ['h-jabir-sai'] },
      { text: { bn: 'মারওয়ায় পৌঁছে একই কাজ করুন (কিবলামুখী হয়ে জিকির ও দোয়া)। এটি এক বার।', en: 'On Marwah do the same (face the Qiblah, remembrance and supplication). That is one.' } },
      { text: { bn: 'মারওয়া থেকে সাফায় ফেরা দুই। এভাবে সাতবার পূর্ণ করুন - সপ্তমটি মারওয়ায় শেষ হবে। নিচের কাউন্টার ব্যবহার করুন।', en: 'Returning from Marwah to Safa is two. Complete seven - the seventh ends at Marwah. Use the counter below.' } },
      { text: { bn: 'পথে নিজের ভাষায় দোয়া, জিকির, কুরআন পড়ুন। প্রতিটি চক্করের জন্য নির্দিষ্ট দোয়া প্রমাণিত নয়।', en: "On the way, supplicate, remember Allah or recite Qur'an in any language. No specific dua per lap is established." }, refs: ['athar-sai-dua'] },
    ],
    rulings: [
      { level: 'pillar', text: { bn: 'শাফেয়ি, মালেকি ও হাম্বলি মতে সাঈ উমরাহর রুকন; হানাফি মতে ওয়াজিব (ছুটে গেলে দম দিতে হয়)।', en: "Sa'i is a pillar of Umrah per the Shafi'i, Maliki and Hanbali schools; obligatory (wajib) per the Hanafi school (a sacrifice is due if missed)." }, refs: ['q-2-158'] },
      { level: 'obligatory', text: { bn: 'সাফা থেকে শুরু করা এবং সাত বার পূর্ণ করা আবশ্যক। সাঈ তাওয়াফের পরে হতে হবে।', en: "Starting at Safa and completing seven is required. Sa'i must come after Tawaf." } },
      { level: 'sunnah', text: { bn: 'অজু থাকা উত্তম তবে শর্ত নয়। সাফা-মারওয়ায় কিবলামুখী জিকির, সবুজ বাতির মাঝে পুরুষের দ্রুত চলা সুন্নাহ।', en: 'Wudu is better but not required. The remembrance facing the Qiblah on the hills and the brisk pace for men between the green lights are Sunnah.' } },
      { level: 'permissible', text: { bn: 'হুইলচেয়ারে সাঈ করা বৈধ। প্রয়োজনে বিরতি নেওয়া যায়।', en: "Sa'i in a wheelchair is valid. You may rest if needed." } },
    ],
    forMen: [{ bn: 'শুধু সবুজ বাতির মাঝের অংশে দ্রুত চলুন, পুরো পথে নয়।', en: 'Move briskly only between the green lights, not the whole way.' }],
    forWomen: [
      { bn: 'সবুজ বাতির মাঝে দৌড়ানোর বিধান নারীদের জন্য নয় - আলেমগণ এ বিষয়ে একমত বলে উল্লেখ করেছেন।', en: 'The brisk pace between the green lights is not for women - scholars report agreement on this.' },
      { bn: 'তাওয়াফের পর ঋতুস্রাব শুরু হলে সাঈ করা যায়, কারণ সাঈর জন্য পবিত্রতা শর্ত নয় (অধিকাংশ আলেম)।', en: "If menstruation starts after Tawaf, Sa'i may still be performed, as purity is not a condition for Sa'i (most scholars)." },
    ],
    mistakes: [
      { mistake: { bn: 'সাফা → মারওয়া → সাফাকে এক বার গোনা (মোট ১৪ বার হাঁটা)।', en: 'Counting Safa → Marwah → Safa as one (walking 14 times).' }, fix: { bn: 'প্রতিটি একমুখী যাত্রা এক বার; শেষ মারওয়ায়।', en: 'Each one-way journey is one; you finish at Marwah.' } },
      { mistake: { bn: 'পাহাড়ের ওপর বা পথে থেমে অন্যদের চলাচলে বাধা দেওয়া।', en: 'Stopping on the hills or the walkway and blocking others.' }, fix: { bn: 'পাশে সরে দাঁড়িয়ে দোয়া করুন।', en: 'Step aside to supplicate.' } },
      { mistake: { bn: 'হাত তুলে কাবার দিকে নামাজের তাকবিরের মতো ইশারা করা।', en: 'Gesturing as in the opening takbir of prayer towards the Kaaba.' }, fix: { bn: 'দোয়ার মতো করে হাত তুলুন।', en: 'Raise the hands as in supplication.' } },
    ],
    refs: ['q-2-158', 'h-jabir-sai', 'athar-sai-dua'],
    media: ['v-sai-flow', 'p-masa-3', 'p-masa-1', 'p-masa-2'],
    checklist: [
      { bn: 'সাফা থেকে শুরু করেছি', en: 'Started at Safa' },
      { bn: 'সাত বার সম্পন্ন', en: 'Completed seven journeys' },
      { bn: 'মারওয়ায় শেষ করেছি', en: 'Finished at Marwah' },
    ],
    practical: [
      { bn: 'সাফা থেকে মারওয়া প্রায় ৪৫০ মিটার; সাতবারে প্রায় ৩ কিমির বেশি হাঁটা।', en: 'Safa to Marwah is roughly 450 m; seven journeys exceed about 3 km.' },
      { bn: 'মাসআর ওপরের তলাগুলো ও হুইলচেয়ার লেন সাধারণত কম ভিড়ের।', en: "Upper floors of the Mas'a and the wheelchair lanes are usually less crowded." },
    ],
  },

  /* 10 ----------------------------------------------------------------- */
  {
    id: 'halq',
    order: 10,
    isRite: true,
    icon: 'Scissors',
    animation: 'halq',
    title: { bn: 'হলক বা তাকসির', en: 'Halq or Taqsir' },
    short: { bn: 'মাথা মুণ্ডন বা চুল ছোট করা', en: 'Shaving or shortening the hair' },
    meaning: {
      bn: 'হলক মানে মাথা মুণ্ডন, তাকসির মানে চুল ছোট করা। এর মাধ্যমে উমরাহর কাজ শেষ হয়ে ইহরাম থেকে বের হওয়া যায়।',
      en: 'Halq is shaving the head; Taqsir is shortening the hair. This concludes the rites and releases you from Ihram.',
    },
    why: {
      bn: 'কুরআনে মাথা মুণ্ডন ও চুল ছোট করার কথা এসেছে এবং নবী ﷺ মুণ্ডনকারীদের জন্য তিনবার দোয়া করেছেন।',
      en: 'The Qur\'an mentions shaving and shortening, and the Prophet ﷺ prayed three times for those who shave.',
    },
    steps: [
      { text: { bn: 'সাঈ শেষে মসজিদ থেকে বের হয়ে নাপিতের দোকানে যান (মারওয়ার কাছে অনেক আছে)।', en: 'After Sa\'i, leave the mosque and go to a barber (there are many near Marwah).' } },
      { text: { bn: 'পুরুষ: পুরো মাথা মুণ্ডন করুন (উত্তম), অথবা পুরো মাথা থেকে সমানভাবে চুল ছোট করুন - শুধু কয়েক জায়গা থেকে কয়েকটি চুল কাটা যথেষ্ট নয় (অধিকাংশ আলেম)।', en: 'Men: shave the whole head (better), or shorten hair evenly from the whole head - snipping a few hairs from a few spots is not enough (most scholars).' }, audience: 'men', refs: ['h-halq-mercy', 'q-48-27'] },
      { text: { bn: 'নারী: সব চুল একত্র করে শেষ প্রান্ত থেকে আঙুলের এক কড় (প্রায় ১–২ সেমি) পরিমাণ কাটুন। পরপুরুষের সামনে নয়, হোটেলে নিজে বা মাহরাম/অন্য নারীর সাহায্যে করুন।', en: 'Women: gather all the hair and cut about a fingertip\'s length (roughly 1–2 cm) from the ends. Do it privately at the hotel, yourself or with a mahram or another woman.' }, audience: 'women', refs: ['h-women-trim'] },
    ],
    rulings: [
      { level: 'obligatory', text: { bn: 'অধিকাংশ মাযহাবে হলক/তাকসির উমরাহর ওয়াজিব; শাফেয়ি মতে এটি রুকন।', en: "Halq/Taqsir is obligatory (wajib) in most schools; the Shafi'i school counts it a pillar." }, refs: ['q-48-27', 'h-halq-mercy'] },
      { level: 'sunnah', text: { bn: 'পুরুষের জন্য মুণ্ডন উত্তম। তবে উমরাহর পর শিগগিরই হজ থাকলে উমরাহতে তাকসির করে হজের জন্য চুল রেখে দেওয়া উত্তম বলেছেন আলেমগণ।', en: 'Shaving is better for men. If Hajj follows soon after, scholars recommend shortening for Umrah to leave hair for Hajj.' } },
      { level: 'prohibited', text: { bn: 'নারীদের মাথা মুণ্ডন নিষেধ।', en: 'Women must not shave their heads.' }, refs: ['h-women-trim'] },
    ],
    differences: [
      {
        topic: { bn: 'তাকসিরের পরিমাণ (পুরুষ)', en: 'How much to shorten (men)' },
        views: [
          { holders: { bn: 'মালেকি ও হাম্বলি', en: 'Maliki and Hanbali' }, view: { bn: 'পুরো মাথা থেকে (বা অধিকাংশ থেকে) ছোট করতে হবে।', en: 'Shorten from all (or most) of the head.' } },
          { holders: { bn: 'হানাফি', en: 'Hanafi' }, view: { bn: 'মাথার অন্তত এক-চতুর্থাংশ থেকে।', en: 'At least a quarter of the head.' } },
          { holders: { bn: 'শাফেয়ি', en: "Shafi'i" }, view: { bn: 'ন্যূনতম তিনটি চুল যথেষ্ট, তবে পুরো মাথা থেকে করা উত্তম।', en: 'A minimum of three hairs suffices, though the whole head is better.' } },
        ],
      },
    ],
    forMen: [{ bn: 'মেশিন দিয়ে খুব ছোট করে কাটাও তাকসির হিসেবে গণ্য।', en: 'A very short clipper cut also counts as Taqsir.' }],
    forWomen: [{ bn: 'বেণি থাকলে প্রতিটি বেণির প্রান্ত থেকে কাটুন।', en: 'If the hair is braided, cut from the end of each braid.' }],
    mistakes: [
      { mistake: { bn: 'চুল কাটার আগে ইহরামের পোশাক খুলে ফেলা।', en: 'Taking off Ihram clothing before cutting the hair.' }, fix: { bn: 'আগে হলক/তাকসির, তারপর স্বাভাবিক পোশাক।', en: 'Shave or shorten first, then change into normal clothes.' } },
      { mistake: { bn: 'মাথার সামান্য কয়েক জায়গা থেকে কাঁচি দিয়ে কয়েকটি চুল কাটা।', en: 'Snipping a few hairs from a couple of spots.' }, fix: { bn: 'পুরো মাথা থেকে সমানভাবে ছোট করুন।', en: 'Shorten evenly from the whole head.' } },
    ],
    refs: ['q-48-27', 'h-halq-mercy', 'h-women-trim'],
    media: [],
    checklist: [
      { bn: 'হলক বা তাকসির সম্পন্ন', en: 'Shaved or shortened' },
    ],
    practical: [{ bn: 'সেলুনে ব্যবহৃত ব্লেড নতুন কি না দেখে নিন।', en: 'Make sure the barber uses a new blade.' }],
  },

  /* 11 ----------------------------------------------------------------- */
  {
    id: 'complete',
    order: 11,
    isRite: false,
    icon: 'BadgeCheck',
    animation: 'complete',
    title: { bn: 'উমরাহ সম্পন্ন', en: 'Umrah complete' },
    short: { bn: 'ইহরামের নিষেধাজ্ঞা থেকে মুক্তি', en: 'Release from the restrictions of Ihram' },
    meaning: {
      bn: 'হলক/তাকসিরের মাধ্যমে উমরাহ সম্পূর্ণ হয় এবং ইহরামের সকল নিষেধাজ্ঞা উঠে যায়।',
      en: 'With Halq or Taqsir the Umrah is complete and all the restrictions of Ihram are lifted.',
    },
    why: {
      bn: 'আল্লাহর নির্দেশ অনুযায়ী উমরাহ পূর্ণ হলো। এখন কৃতজ্ঞতা প্রকাশ ও কবুলের দোয়ার সময়।',
      en: "Umrah has been completed as Allah commanded. Now is the time for gratitude and asking for acceptance.",
    },
    steps: [
      { text: { bn: 'গোসল করে স্বাভাবিক পোশাক পরুন; সুগন্ধি ব্যবহার এখন বৈধ।', en: 'Bathe and wear normal clothes; perfume is now permitted.' } },
      { text: { bn: 'আল্লাহর শুকরিয়া আদায় করুন এবং উমরাহ কবুলের দোয়া করুন।', en: 'Thank Allah and ask Him to accept your Umrah.' }, refs: ['h-umrah-expiation'] },
      { text: { bn: 'পর্যাপ্ত বিশ্রাম নিন - বেশিরভাগ মানুষ এই সময় খুব ক্লান্ত থাকেন।', en: 'Rest properly - most people are very tired at this point.' } },
    ],
    rulings: [
      { level: 'practical', text: { bn: 'উমরাহর জন্য বিদায়ী তাওয়াফ ওয়াজিব কি না তা নিয়ে আলেমদের মতভেদ আছে; অধিকাংশের মতে উমরাহর জন্য তা ওয়াজিব নয়, তবে মক্কা ছাড়ার আগে করা উত্তম।', en: "Scholars differ on whether a farewell Tawaf is required after Umrah; most hold it is not obligatory for Umrah, though doing it before leaving Makkah is good." } },
    ],
    mistakes: [
      { mistake: { bn: 'অন্যের পক্ষ থেকে বারবার উমরাহ করতে তানঈম থেকে দ্রুত একাধিক উমরাহ - নিজের শক্তি ও স্বাস্থ্যের ক্ষতি করে।', en: 'Rushing repeated Umrahs from Tan\'im at the cost of your health.' }, fix: { bn: 'অতিরিক্ত উমরাহ নিয়ে আলেমদের মধ্যে আলোচনা আছে; নফল তাওয়াফ ও জামাতে সালাতও বড় ইবাদত।', en: 'Scholars discuss repeated Umrahs; voluntary Tawaf and congregational prayer are also great worship.' } },
    ],
    refs: ['h-umrah-expiation'],
    media: [],
    checklist: [
      { bn: 'স্বাভাবিক পোশাক পরেছি', en: 'Changed into normal clothes' },
      { bn: 'শুকরিয়া ও কবুলের দোয়া', en: 'Gave thanks and asked for acceptance' },
    ],
  },

  /* 12 ----------------------------------------------------------------- */
  {
    id: 'after',
    order: 12,
    isRite: false,
    icon: 'Map',
    animation: 'madinah',
    title: { bn: 'সফরের বাকি সময়', en: 'The rest of your trip' },
    short: { bn: 'মক্কায় ইবাদত, মদিনা সফর ও দেশে ফেরা', en: 'Worship in Makkah, Madinah and returning home' },
    meaning: {
      bn: 'উমরাহর পর মক্কায় থাকার দিনগুলো, মদিনা সফর (যদি থাকে) এবং দেশে ফেরার প্রস্তুতি।',
      en: 'The days in Makkah after Umrah, the visit to Madinah (if included) and preparing to return home.',
    },
    why: {
      bn: 'মসজিদুল হারাম ও মসজিদে নববীতে সালাতের বিশেষ ফজিলত আছে। মদিনা সফর উমরাহর অংশ নয় - এটি আলাদা ইবাদত।',
      en: "Prayer in Masjid al-Haram and the Prophet's Mosque carries special virtue. Visiting Madinah is not part of Umrah - it is a separate act of worship.",
    },
    steps: [
      { text: { bn: 'মক্কায় পাঁচ ওয়াক্ত সালাত জামাতে আদায় করার চেষ্টা করুন; নফল তাওয়াফ করুন (ইহরাম ছাড়া, স্বাভাবিক পোশাকে)।', en: 'Try to pray all five prayers in congregation in Makkah; do voluntary Tawaf (in normal clothes, no Ihram).' }, refs: ['h-haram-prayer'] },
      { text: { bn: 'মদিনায় মসজিদে নববীতে সালাত আদায়ের নিয়তে যান। সেখানে নবী ﷺ, আবু বকর (রা.) ও উমর (রা.)-কে সালাম দিন।', en: "Travel to Madinah with the intention of praying in the Prophet's Mosque. There, greet the Prophet ﷺ, Abu Bakr and 'Umar." }, refs: ['h-three-mosques', 'h-nabawi-prayer'] },
      { text: { bn: 'রওজায় সালাতের জন্য নুসুক অ্যাপে আগেই সময় বুক করুন।', en: 'Book a Rawdah slot in the Nusuk app in advance.' }, refs: ['h-rawdah'] },
      { text: { bn: 'হোটেল থেকে অজু করে মসজিদে কুবায় গিয়ে দুই রাকাত পড়ুন।', en: "Make wudu at your hotel and pray two rak'ahs at Masjid Quba." }, refs: ['h-quba'] },
      { text: { bn: 'মদিনা থেকে মক্কায় নতুন উমরাহ করতে গেলে যুল-হুলাইফায় আবার ইহরাম বাঁধতে হবে।', en: 'If you go from Madinah to Makkah for another Umrah, enter Ihram again at Dhul-Hulayfah.' }, refs: ['h-mawaqit'] },
      { text: { bn: 'দেশে ফেরার আগে বিমানবন্দরে আগেভাগে পৌঁছান; জমজমের নিয়ম মেনে চলুন।', en: 'Reach the airport early before flying home; follow the Zamzam rules.' } },
    ],
    rulings: [
      { level: 'practical', text: { bn: 'কোনো নির্দিষ্ট সফরকাল ধর্মীয়ভাবে আবশ্যক নয়। মদিনা সফর ঐচ্ছিক এবং উমরাহ সহিহ হওয়ার শর্ত নয়।', en: 'No particular trip length is religiously required. Visiting Madinah is optional and not a condition of Umrah.' } },
      { level: 'sunnah', text: { bn: 'মক্কা ছাড়ার আগে বিদায়ী তাওয়াফ করা উত্তম (উমরাহর জন্য ওয়াজিব কি না তা নিয়ে মতভেদ আছে)।', en: 'Doing a farewell Tawaf before leaving Makkah is good (scholars differ on whether it is required for Umrah).' } },
    ],
    mistakes: [
      { mistake: { bn: 'মদিনা সফরকে উমরাহর অংশ বা বাধ্যতামূলক মনে করা।', en: 'Thinking the Madinah visit is part of Umrah or compulsory.' }, fix: { bn: 'এটি আলাদা সুন্নাহ সফর।', en: 'It is a separate, recommended visit.' } },
      { mistake: { bn: 'কবরের কাছে উচ্চস্বরে কান্না বা দোয়ার জন্য ভিড় করা।', en: 'Raising voices or crowding at the grave.' }, fix: { bn: 'শান্তভাবে সালাম দিয়ে এগিয়ে যান; দোয়া কিবলামুখী হয়ে করুন।', en: 'Greet calmly and move on; make supplication facing the Qiblah.' } },
    ],
    refs: ['h-haram-prayer', 'h-nabawi-prayer', 'h-three-mosques', 'h-rawdah', 'h-quba'],
    media: ['p-nabawi-1', 'p-quba-1', 'p-train-1', 'p-dhul-hulayfah-2', 'p-nabawi-2'],
    checklist: [
      { bn: 'জামাতে সালাতের রুটিন', en: 'Routine of congregational prayer' },
      { bn: 'রওজা পারমিট বুক করেছি', en: 'Booked a Rawdah permit' },
      { bn: 'কুবা মসজিদে সালাত', en: 'Prayed at Quba' },
      { bn: 'ফেরার প্রস্তুতি', en: 'Ready to return' },
    ],
  },
]

export const stageIds = rituals.map((r) => r.id)
export const stageById = new Map(rituals.map((r) => [r.id, r]))
