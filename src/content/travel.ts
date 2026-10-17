import type { L10n, SourceLink } from './types'

/**
 * Time-sensitive travel information. Each fact carries its sources, the date
 * it was checked and a confidence level. The UI shows all three, and tells the
 * user to verify with the official source before paying or travelling.
 *
 * confidence:
 *  - confirmed : stated on an official source we read
 *  - partial   : official source exists but details came from press/secondary sources
 *  - unconfirmed: secondary sources only - treat as a hint
 */

export type Confidence = 'confirmed' | 'partial' | 'unconfirmed'

export interface TravelFact {
  id: string
  topic: L10n
  summary: L10n
  points?: { bn: string[]; en: string[] }
  confidence: Confidence
  sources: SourceLink[]
}

const CHECKED = '2026-10-17'
const src = (en: string, bn: string, url: string, official: boolean): SourceLink => ({
  title: { en, bn },
  url,
  checked: CHECKED,
  official,
})

export const OFFICIAL = {
  ministry: src('Ministry of Hajj and Umrah - Umrah', 'হজ ও উমরাহ মন্ত্রণালয় - উমরাহ', 'https://haj.gov.sa/Umrah', true),
  ihramGuide: src('Ministry of Hajj and Umrah - Ihram guide (PDF)', 'হজ ও উমরাহ মন্ত্রণালয় - ইহরাম গাইড (PDF)', 'https://haj.gov.sa/-/media/Project/HAJJ/Awareness-Guides/Ihram-Guide/English/en-ihram-guide.pdf', true),
  rawdah: src('Permit to visit al-Rawdah al-Sharifah', 'রওজা শরিফ জিয়ারতের অনুমতি', 'https://haj.gov.sa/en/E-Services/Permit-to-Visit-Al-Rawdah-Al-Sharifiyah-for-Men-Women', true),
  nusuk: src('Nusuk - official platform', 'নুসুক - অফিসিয়াল প্ল্যাটফর্ম', 'https://www.nusuk.sa', true),
  mohHealth: src('Saudi Ministry of Health - Umrah health requirements (PDF)', 'সৌদি স্বাস্থ্য মন্ত্রণালয় - উমরাহ স্বাস্থ্য নির্দেশনা (PDF)', 'https://www.moh.gov.sa/en/HealthAwareness/Pilgrims-Health/Documents/Health-Regulations-Umrah-EN.pdf', true),
  visaCheck: src('Saudi visa eligibility checker', 'সৌদি ভিসা যোগ্যতা যাচাই', 'https://ksavisa.sa', true),
  eVisa: src('Visit Saudi eVisa portal', 'ভিজিট সৌদি ই-ভিসা পোর্টাল', 'https://visa.visitsaudi.com', true),
  embassyUmrah: src('Saudi embassy - Umrah visa requirements', 'সৌদি দূতাবাস - উমরাহ ভিসার শর্ত', 'https://embassies.mofa.gov.sa/sites/usa/EN/CONSULARANDTRAVELSERVICES/VISAAPPLICATION/Pages/Umrah-Visa.aspx', true),
  passport: src('Department of Immigration & Passports - e-Passport fees', 'ইমিগ্রেশন ও পাসপোর্ট অধিদপ্তর - ই-পাসপোর্ট ফি', 'https://www.epassport.gov.bd/instructions/passport-fees', true),
  hhr: src('Haramain High Speed Railway (official)', 'হারামাইন হাই-স্পিড রেলওয়ে (অফিসিয়াল)', 'https://sar.hhr.sa/', true),
  saptco: src('SAPTCO intercity buses', 'সাপটকো আন্তঃনগর বাস', 'https://www.saptco.com.sa', true),
  bb: src('Bangladesh Bank - exchange rates', 'বাংলাদেশ ব্যাংক - বিনিময় হার', 'https://www.bb.org.bd/en/index.php/econdata/exchangerate', true),
  biman: src('Biman Bangladesh Airlines', 'বিমান বাংলাদেশ এয়ারলাইন্স', 'https://www.biman-airlines.com', true),
  saudia: src('Saudia', 'সৌদিয়া', 'https://www.saudia.com', true),
  usBangla: src('US-Bangla Airlines', 'ইউএস-বাংলা এয়ারলাইন্স', 'https://usbair.com', true),
}

export const travelFacts: TravelFact[] = [
  {
    id: 'visa',
    topic: { bn: 'ভিসা: কীভাবে উমরাহ ভিসা পাবেন', en: 'Visa: how to get an Umrah visa' },
    summary: {
      bn: 'বাংলাদেশি পাসপোর্টধারীরা সাধারণত সৌদি হজ ও উমরাহ মন্ত্রণালয় অনুমোদিত এজেন্সি বা নুসুক-সংযুক্ত প্ল্যাটফর্মের মাধ্যমে উমরাহ ভিসা নেন।',
      en: 'Bangladeshi passport holders usually obtain an Umrah visa through agencies accredited by the Saudi Ministry of Hajj and Umrah, or through Nusuk-integrated platforms.',
    },
    points: {
      bn: [
        'বাংলাদেশ সাধারণ পর্যটন ই-ভিসা তালিকায় নেই (মাধ্যমিক সূত্র)। তবে ব্যবহৃত বৈধ মার্কিন/যুক্তরাজ্য/শেনজেন ভিসা থাকলে ই-ভিসা/অন-অ্যারাইভালের সুযোগ থাকতে পারে - ksavisa.sa-তে যাচাই করুন।',
        'মন্ত্রীর বক্তব্য অনুযায়ী (২০২২–২৩) হজ মৌসুম ছাড়া যেকোনো ভিসায় উমরাহ করা যায়; তবে নুসুকে উমরাহর পারমিট লাগে।',
        '২০২৩ সালে উমরাহ ভিসার মেয়াদ ৯০ দিন করা হয় এবং বাধ্যতামূলক স্বাস্থ্যবিমা ভিসা ফির অন্তর্ভুক্ত করা হয় (সংবাদমাধ্যম)। বর্তমান শর্ত এজেন্সি/দূতাবাস থেকে নিশ্চিত হোন।',
        '১৪৪৮ হিজরি মৌসুম (সংবাদ প্রতিবেদন): শেষ ভিসা ইস্যু ৯ মার্চ ২০২৭, শেষ প্রবেশ ২৩ মার্চ ২০২৭, শেষ প্রস্থান ৭ এপ্রিল ২০২৭।',
      ],
      en: [
        'Bangladesh is not on the standard tourist eVisa list (secondary sources). Holders of a used, valid US/UK/Schengen visa may qualify for eVisa/visa on arrival - check ksavisa.sa.',
        'Per ministerial statements (2022–23), Umrah may be performed on any visa type outside Hajj season; a Nusuk Umrah permit is still required.',
        'In 2023 the Umrah visa was extended to 90 days and mandatory health insurance was included in the visa fee (press reports). Confirm current terms with your agent or the embassy.',
        '1448 AH season (press report of the ministry calendar): last visa issue 9 Mar 2027, last entry 23 Mar 2027, last departure 7 Apr 2027.',
      ],
    },
    confidence: 'partial',
    sources: [
      OFFICIAL.ministry,
      OFFICIAL.visaCheck,
      OFFICIAL.eVisa,
      src('Arab News - any visa can be used for Umrah; no mahram required (Oct 2022)', 'আরব নিউজ - যেকোনো ভিসায় উমরাহ; মাহরাম বাধ্যতামূলক নয় (অক্টো ২০২২)', 'https://www.arabnews.com/node/2179356', false),
      src('Arab News - Umrah insurance cost reduced (Jan 2023)', 'আরব নিউজ - উমরাহ বিমার খরচ কমানো (জানু ২০২৩)', 'https://www.arabnews.pk/node/2233911', false),
      src('Riyadh Daily - Umrah season calendar 1448 AH', 'রিয়াদ ডেইলি - ১৪৪৮ হিজরি উমরাহ মৌসুম', 'https://alriyadhdaily.com/article/769e88b80b994043bac33a377227243a', false),
    ],
  },
  {
    id: 'passport',
    topic: { bn: 'পাসপোর্ট', en: 'Passport' },
    summary: {
      bn: 'সৌদি আরবে প্রবেশের তারিখ থেকে পাসপোর্টের মেয়াদ অন্তত ৬ মাস থাকতে হবে। নতুন বা নবায়ন করতে হলে আগেভাগে আবেদন করুন।',
      en: 'Your passport must be valid for at least 6 months from the date you enter Saudi Arabia. Apply early if you need a new one or a renewal.',
    },
    points: {
      bn: [
        'ই-পাসপোর্ট ফি (৪৮ পৃষ্ঠা, ৫ বছর, ভ্যাটসহ - মাধ্যমিক সূত্র): সাধারণ ৳৪,০২৫, জরুরি ৳৬,৩২৫, অতীব জরুরি ৳৮,৬২৫।',
        'আনুমানিক সময়: সাধারণ ১৫–২১ কর্মদিবস, জরুরি ৭–১০ কর্মদিবস, অতীব জরুরি ২ কর্মদিবস। epassport.gov.bd-তে যাচাই করুন।',
      ],
      en: [
        'e-Passport fees (48 pages, 5 years, incl. VAT - secondary sources): regular Tk 4,025, express Tk 6,325, super express Tk 8,625.',
        'Approximate delivery: regular 15–21 working days, express 7–10, super express 2. Verify on epassport.gov.bd.',
      ],
    },
    confidence: 'partial',
    sources: [
      OFFICIAL.embassyUmrah,
      OFFICIAL.passport,
      src('UNB - e-passport documents and fees', 'ইউএনবি - ই-পাসপোর্টের কাগজপত্র ও ফি', 'https://unb.com.bd/category/Bangladesh/getting-e-passport-without-police-verification-in-bangladesh-documents-fees-and-online-application-process/154686', false),
    ],
  },
  {
    id: 'health',
    topic: { bn: 'স্বাস্থ্য ও টিকা', en: 'Health and vaccination' },
    summary: {
      bn: '১ বছর বা তার বেশি বয়সী সকল উমরাহযাত্রীর মেনিনজাইটিস (মেনিনগোকক্কাল ACYW) টিকার সনদ প্রয়োজন - পৌঁছানোর অন্তত ১০ দিন আগে নিতে হবে।',
      en: 'All Umrah travellers aged 1 and over need a meningococcal (ACYW) vaccination certificate - given at least 10 days before arrival.',
    },
    points: {
      bn: [
        'কনজুগেট টিকা ৫ বছর, পলিস্যাকারাইড টিকা ৩ বছর বৈধ। সনদে টিকার নাম, ধরন ও তারিখ থাকতে হবে।',
        'পোলিও টিকা শুধু নির্দিষ্ট দেশের যাত্রীদের জন্য - বাংলাদেশ তালিকায় আছে কি না আমরা নিশ্চিত করতে পারিনি; সৌদি স্বাস্থ্য মন্ত্রণালয়ের সর্বশেষ নির্দেশনা দেখুন।',
        'কোভিড-১৯ ও মৌসুমি ফ্লু টিকা সুপারিশকৃত, বাধ্যতামূলক নয়।',
        'নিয়মিত ওষুধ প্রেসক্রিপশনসহ সাথে রাখুন।',
      ],
      en: [
        'Conjugate vaccine is valid for 5 years, polysaccharide for 3. The certificate must show vaccine name, type and date.',
        'Polio vaccination applies only to travellers from listed countries - we could not confirm whether Bangladesh is listed; check the latest Saudi MoH guidance.',
        'COVID-19 and seasonal flu vaccines are recommended, not required.',
        'Carry regular medicines with their prescriptions.',
      ],
    },
    confidence: 'partial',
    sources: [OFFICIAL.mohHealth],
  },
  {
    id: 'nusuk',
    topic: { bn: 'নুসুক অ্যাপ ও পারমিট', en: 'Nusuk app and permits' },
    summary: {
      bn: 'মসজিদুল হারামে উমরাহ করার জন্য নুসুক অ্যাপে সময়ভিত্তিক উমরাহ পারমিট নিতে হয়। মসজিদে নববীর রওজায় সালাতের জন্যও বিনামূল্যে পারমিট লাগে।',
      en: 'A time-slot Umrah permit from the Nusuk app is required to perform Umrah at Masjid al-Haram. Praying in the Rawdah at the Prophet\'s Mosque also needs a free permit.',
    },
    points: {
      bn: [
        'মন্ত্রণালয়ের গ্রাহকসেবা অনুযায়ী (সংবাদ): ৫ বছরের কম বয়সী শিশুর আলাদা পারমিট লাগে না।',
        'রওজার পারমিট অফিসিয়াল ই-সার্ভিস - বিনামূল্যে, তাৎক্ষণিক, তারিখ ও সময় বেছে নিতে হয়।',
      ],
      en: [
        "Per the ministry's customer care (press): children under 5 do not need their own permit.",
        'The Rawdah permit is an official e-service - free, instant, choose a date and time slot.',
      ],
    },
    confidence: 'partial',
    sources: [
      OFFICIAL.nusuk,
      OFFICIAL.rawdah,
      src('Ajel - no age requirement for children to enter the Two Holy Mosques', 'আজেল - শিশুদের প্রবেশে বয়সসীমা নেই', 'https://english.ajel.sa/saudi-arabia/no-age-requirement-for-children-to-enter-two-holy-mosques', false),
    ],
  },
  {
    id: 'ihram-air',
    topic: { bn: 'বিমানযাত্রীদের ইহরাম', en: 'Ihram for air travellers' },
    summary: {
      bn: 'সৌদি হজ ও উমরাহ মন্ত্রণালয়ের অফিসিয়াল নির্দেশনা: বিমানে আগতরা ইহরাম ছাড়া মিকাত (বা তার সমান্তরাল স্থান) অতিক্রম করবেন না। জেদ্দা বিমানবন্দর মিকাত নয় এবং ইহরাম বাঁধার স্থান নয়।',
      en: 'Official Ministry of Hajj and Umrah guidance: air travellers must not cross the Miqat (or the point parallel to it) without Ihram. Jeddah airport is neither a Miqat nor a place to enter Ihram.',
    },
    points: {
      bn: ['বিমান মিকাতের সমান্তরালে পৌঁছালে সাধারণত এয়ারলাইন ঘোষণা দেয়। ঘোষণার আগেই প্রস্তুত থাকুন।'],
      en: ['Airlines usually announce when the aircraft is parallel to the Miqat. Be ready before the announcement.'],
    },
    confidence: 'confirmed',
    sources: [OFFICIAL.ministry, OFFICIAL.ihramGuide],
  },
  {
    id: 'women',
    topic: { bn: 'নারী যাত্রী', en: 'Women travellers' },
    summary: {
      bn: '২০২২ সালের মন্ত্রণালয়ের ঘোষণা অনুযায়ী সৌদি কর্তৃপক্ষ উমরাহর জন্য নারীদের মাহরাম বাধ্যতামূলক করে না। তবে এটি প্রশাসনিক নিয়ম - শরিয়তে নারীর মাহরাম ছাড়া সফরের বিধান নিয়ে আলেমদের মতভেদ আছে; নিজের আলেমের পরামর্শ নিন।',
      en: 'Per the 2022 ministry announcement, Saudi authorities do not require a mahram for women performing Umrah. This is an administrative rule - scholars differ on the religious ruling of a woman travelling without a mahram; consult a scholar you trust.',
    },
    confidence: 'partial',
    sources: [src('Arab News - male guardians no longer required (Oct 2022)', 'আরব নিউজ - পুরুষ অভিভাবক আর বাধ্যতামূলক নয় (অক্টো ২০২২)', 'https://www.arabnews.com/node/2179356', false)],
  },
  {
    id: 'flights',
    topic: { bn: 'বাংলাদেশ থেকে ফ্লাইট', en: 'Flights from Bangladesh' },
    summary: {
      bn: 'ঢাকা–জেদ্দা সরাসরি ফ্লাইট: সৌদিয়া, বিমান বাংলাদেশ, ইউএস-বাংলা (সংবাদ/অ্যাগ্রিগেটর তথ্য)। সরাসরি ফ্লাইটে প্রায় ৬.৫–৭.৫ ঘণ্টা।',
      en: 'Dhaka–Jeddah nonstop: Saudia, Biman Bangladesh, US-Bangla (press/aggregator data). Nonstop flight time is roughly 6.5–7.5 hours.',
    },
    points: {
      bn: [
        'ঢাকা–মদিনা সরাসরি: বিমান ও সৌদিয়া (প্রতিবেদিত; এয়ারলাইনের সাইটে যাচাই করা যায়নি)।',
        'সিলেট–জেদ্দা: বিমান (অ্যাগ্রিগেটর অনুযায়ী সপ্তাহে কয়েক দিন)। চট্টগ্রাম–জেদ্দা: সৌদিয়া ঘোষণা দিয়েছে - চালু হয়েছে কি না নিশ্চিত নয়।',
        'অনেকে উপসাগরীয় এয়ারলাইনে কানেক্টিং ফ্লাইটে যান - দাম কম হতে পারে, তবে ইহরামের সময় ও ট্রানজিট বিবেচনা করুন।',
        'জমজম: প্রস্থানকালে কারখানায় সিল করা একটি ৫ লিটারের বোতল নেওয়া যায়; চেক-ইন স্যুটকেসের ভেতরে নয়। এয়ারলাইনের নিয়ম যাচাই করুন।',
      ],
      en: [
        'Dhaka–Madinah nonstop: Biman and Saudia (reported; not verified on airline sites).',
        'Sylhet–Jeddah: Biman (a few times a week per aggregators). Chattogram–Jeddah: announced by Saudia - launch not confirmed.',
        'Many travel via Gulf carriers with a connection - sometimes cheaper, but plan for transit and when to enter Ihram.',
        'Zamzam: departing pilgrims may carry one factory-sealed 5-litre container; not inside checked suitcases. Check your airline\'s rule.',
      ],
    },
    confidence: 'partial',
    sources: [
      OFFICIAL.biman,
      OFFICIAL.saudia,
      OFFICIAL.usBangla,
      src('FlightsFrom - DAC to JED nonstop', 'ফ্লাইটসফ্রম - ঢাকা থেকে জেদ্দা', 'https://www.flightsfrom.com/DAC-JED', false),
      src('Gulf News - Jeddah airport Zamzam update', 'গালফ নিউজ - জেদ্দা বিমানবন্দরে জমজম', 'https://gulfnews.com/world/gulf/saudi/key-jeddah-airport-in-saudi-arabia-updates-pilgrims-on-zamzam-1.96900272', false),
    ],
  },
  {
    id: 'ground',
    topic: { bn: 'সৌদি আরবে যাতায়াত', en: 'Getting around Saudi Arabia' },
    summary: {
      bn: 'হারামাইন হাই-স্পিড রেল মক্কা, জেদ্দা (শহর ও বিমানবন্দর), কেএইসি ও মদিনাকে যুক্ত করে। এছাড়া সাপটকো বাস, মক্কা বাস ও রাইড-হেইলিং অ্যাপ আছে।',
      en: 'The Haramain High-Speed Railway links Makkah, Jeddah (city and airport), KAEC and Madinah. There are also SAPTCO buses, the Makkah Bus network and ride-hailing apps.',
    },
    points: {
      bn: [
        'ট্রেন (সংবাদ সূত্র, দাম চাহিদা অনুযায়ী বদলায়): মক্কা–মদিনা প্রায় ২ ঘ. ১৫ মি.–২ ঘ. ৪৫ মি., ইকোনমি প্রায় ১৫০ রিয়াল; মক্কা–জেদ্দা বিমানবন্দর প্রায় ৩৫–৫০ মিনিট, প্রায় ৬০ রিয়াল।',
        'মদিনা রেলস্টেশন শহরকেন্দ্র থেকে কিছুটা দূরে - হোটেল পর্যন্ত ট্যাক্সি/বাস লাগবে।',
        'রাইড-হেইলিং: Careem, Uber, Jeeny, Bolt।',
        'রেলস্টেশনে ইহরামের নিয়ম একই: মদিনা থেকে মক্কাগামী ট্রেনে ওঠার আগে বা মিকাত পার হওয়ার আগে ইহরাম বাঁধুন।',
      ],
      en: [
        'Train (press sources, prices vary with demand): Makkah–Madinah about 2h15–2h45, economy about SAR 150; Makkah–Jeddah Airport about 35–50 min, about SAR 60.',
        'Madinah station is outside the city centre - you will need a taxi or bus to your hotel.',
        'Ride-hailing: Careem, Uber, Jeeny, Bolt.',
        'Ihram rules are the same on the train: from Madinah to Makkah, enter Ihram before boarding or before passing the Miqat.',
      ],
    },
    confidence: 'partial',
    sources: [
      OFFICIAL.hhr,
      OFFICIAL.saptco,
      src('Gulf News - guide to the Haramain High-Speed Rail', 'গালফ নিউজ - হারামাইন রেল গাইড', 'https://gulfnews.com/living-in-uae/transport/all-you-need-to-know-about-saudi-arabias-haramain-high-speed-rail-hhr-1.500224470', false),
      src('Makkah Bus app', 'মক্কা বাস অ্যাপ', 'https://apps.apple.com/sa/app/makkah-bus/id1609922603', false),
    ],
  },
  {
    id: 'money',
    topic: { bn: 'টাকা ও রিয়াল', en: 'Money: taka and riyal' },
    summary: {
      bn: 'ক্যালকুলেটরে ব্যবহৃত হার: ১ রিয়াল ≈ ৳৩২.৯ - বাংলাদেশ ব্যাংকের ডলার হার (১৭ অক্টো ২০২৬) ও ৩.৭৫ রিয়াল/ডলার নির্ধারিত হার থেকে হিসাব করা। এটি প্রকাশিত রিয়াল হার নয়; ক্যালকুলেটরে বদলাতে পারবেন।',
      en: 'Rate used in the calculator: 1 SAR ≈ Tk 32.9 - derived from the Bangladesh Bank USD rate (17 Oct 2026) and the fixed 3.75 SAR/USD peg. It is not a published SAR rate; you can change it in the calculator.',
    },
    confidence: 'partial',
    sources: [OFFICIAL.bb],
  },
  {
    id: 'prices',
    topic: { bn: 'খরচ সম্পর্কে সতর্কতা', en: 'A note on prices' },
    summary: {
      bn: 'ধর্ম মন্ত্রণালয় বা হাব (HAAB) কর্তৃক প্রকাশিত কোনো অফিসিয়াল উমরাহ প্যাকেজ মূল্যসীমা আমরা পাইনি। এই অ্যাপের সব দাম সম্পাদনযোগ্য অনুমান - নিজের এজেন্সি/এয়ারলাইনের লিখিত কোটেশন বসিয়ে নিন।',
      en: 'We found no official Umrah package price range published by the Ministry of Religious Affairs or HAAB. Every price in this app is an editable assumption - replace it with written quotes from your agency or airline.',
    },
    confidence: 'unconfirmed',
    sources: [src('Dhaka Tribune - Umrah gains popularity amid soaring cost of Hajj', 'ঢাকা ট্রিবিউন - হজের খরচ বৃদ্ধিতে উমরাহর জনপ্রিয়তা', 'https://www.dhakatribune.com/bangladesh/337278/umrah-gains-popularity-amid-soaring-cost-of-hajj', false)],
  },
]

/* ------------------------------------------------------------------ */
/* Places used by the maps (approximate coordinates, for illustration) */
/* ------------------------------------------------------------------ */

export interface Place {
  id: string
  name: L10n
  lat: number
  lon: number
  kind: 'city' | 'airport' | 'miqat' | 'haram'
}

export const places: Place[] = [
  { id: 'makkah', name: { bn: 'মক্কা', en: 'Makkah' }, lat: 21.4225, lon: 39.8262, kind: 'haram' },
  { id: 'madinah', name: { bn: 'মদিনা', en: 'Madinah' }, lat: 24.4672, lon: 39.6111, kind: 'haram' },
  { id: 'jed', name: { bn: 'জেদ্দা বিমানবন্দর (মিকাত নয়)', en: 'Jeddah Airport (not a Miqat)' }, lat: 21.68, lon: 39.16, kind: 'airport' },
  { id: 'med', name: { bn: 'মদিনা বিমানবন্দর', en: 'Madinah Airport' }, lat: 24.55, lon: 39.7, kind: 'airport' },
  { id: 'dhul-hulayfah', name: { bn: 'যুল-হুলাইফা', en: 'Dhul-Hulayfah' }, lat: 24.413, lon: 39.543, kind: 'miqat' },
  { id: 'juhfah', name: { bn: 'জুহফা', en: 'Al-Juhfah' }, lat: 22.7, lon: 39.15, kind: 'miqat' },
  { id: 'qarn', name: { bn: 'কারনুল মানাজিল', en: 'Qarn al-Manazil' }, lat: 21.63, lon: 40.42, kind: 'miqat' },
  { id: 'yalamlam', name: { bn: 'ইয়ালামলাম', en: 'Yalamlam' }, lat: 20.55, lon: 39.85, kind: 'miqat' },
  { id: 'dhat-irq', name: { bn: 'যাতু ইরক', en: "Dhat 'Irq" }, lat: 21.93, lon: 40.43, kind: 'miqat' },
]
