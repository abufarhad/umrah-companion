import type { VirtueTopic } from './types'

/**
 * Fazilat - the significance of acts of worship. Each point is tagged:
 * established (stated in the Qur'an or an authentic hadith, with reference),
 * interpretation (scholars' explanation), or general (a spiritual benefit
 * without a specific textual promise). No numeric reward is given without a source.
 */
export const virtues: VirtueTopic[] = [
  {
    id: 'umrah',
    title: { bn: 'উমরাহ', en: 'Umrah' },
    summary: { bn: 'আল্লাহর নির্দেশিত ইবাদত, যা গুনাহের কাফফারা হয়।', en: 'An act of worship commanded by Allah that expiates sins.' },
    points: [
      { text: { bn: 'আল্লাহ হজ ও উমরাহ তাঁর জন্য পূর্ণ করার নির্দেশ দিয়েছেন।', en: 'Allah commands completing Hajj and Umrah for Him.' }, kind: 'established', refs: ['q-2-196'] },
      { text: { bn: 'এক উমরাহ থেকে পরবর্তী উমরাহ মধ্যবর্তী গুনাহের কাফফারা।', en: 'One Umrah to the next expiates the sins between them.' }, kind: 'established', refs: ['h-umrah-expiation'] },
      { text: { bn: 'রমজানের উমরাহ সওয়াবে হজের মতো - তবে ফরজ হজের বিকল্প নয়।', en: 'An Umrah in Ramadan is like a Hajj in reward - but does not replace the obligatory Hajj.' }, kind: 'established', refs: ['h-ramadan-umrah'] },
    ],
  },
  {
    id: 'tawaf',
    title: { bn: 'তাওয়াফ', en: 'Tawaf' },
    summary: { bn: 'আল্লাহর নির্দেশে প্রাচীন ঘরের চারপাশে ইবাদত।', en: 'Worship around the Ancient House, by Allah’s command.' },
    points: [
      { text: { bn: 'আল্লাহ প্রাচীন ঘরের তাওয়াফের নির্দেশ দিয়েছেন।', en: 'Allah commands circling the Ancient House.' }, kind: 'established', refs: ['q-22-29'] },
      { text: { bn: 'সাত চক্কর যথাযথ তাওয়াফ দাস মুক্তির মতো; প্রতি পদক্ষেপে গুনাহ মোচন ও নেকি - হাসান হাদিস।', en: 'A complete seven-circuit Tawaf is like freeing a slave; each step removes a sin and records a good deed - a hasan hadith.' }, kind: 'established', refs: ['h-tawaf-virtue'] },
      { text: { bn: 'তাওয়াফ সালাতের মতো, তবে কথা বলা যায় - তাই কেবল ভালো কথা।', en: 'Tawaf is like prayer except that speaking is allowed - so speak only good.' }, kind: 'established', refs: ['h-tawaf-like-prayer'] },
    ],
  },
  {
    id: 'sai',
    title: { bn: 'সাঈ', en: 'Sa‘i' },
    summary: { bn: 'আল্লাহর নিদর্শনের মাঝে হাজেরা (আ.)-এর পথ অনুসরণ।', en: 'Following Hajar’s path between the symbols of Allah.' },
    points: [
      { text: { bn: 'সাফা ও মারওয়া আল্লাহর নিদর্শন।', en: 'Safa and Marwah are among the symbols of Allah.' }, kind: 'established', refs: ['q-2-158'] },
      { text: { bn: 'নবী ﷺ বলেছেন, হাজেরা (আ.)-এর দৌড়ই মানুষের সাঈর উৎস।', en: 'The Prophet ﷺ said Hajar’s running is the origin of people’s Sa‘i.' }, kind: 'established', refs: ['h-hajar-sai'] },
      { text: { bn: 'আলেমগণ বলেন, সাঈ আল্লাহর ওপর তাওয়াক্কুল ও চেষ্টার শিক্ষা দেয়।', en: 'Scholars explain that Sa‘i teaches reliance on Allah together with effort.' }, kind: 'interpretation', refs: [] },
    ],
  },
  {
    id: 'talbiyah',
    title: { bn: 'তালবিয়াহ', en: 'Talbiyah' },
    summary: { bn: 'আল্লাহর ডাকে সাড়া ও তাওহিদের ঘোষণা।', en: 'Answering Allah’s call and declaring His oneness.' },
    points: [
      { text: { bn: 'নবী ﷺ-এর তালবিয়াহর শব্দাবলি সহিহ বুখারিতে।', en: 'The Prophet’s ﷺ wording of the Talbiyah is in Sahih al-Bukhari.' }, kind: 'established', refs: ['h-talbiyah'] },
      { text: { bn: 'তালবিয়াহকারীর সাথে ডানে-বামের পাথর, গাছ ও মাটিও তালবিয়াহ পড়ে - হাসান হাদিস।', en: 'The stones, trees and earth to the right and left of the one reciting the Talbiyah recite it with him - a hasan hadith.' }, kind: 'established', refs: ['h-talbiyah-virtue'] },
    ],
  },
  {
    id: 'salah',
    title: { bn: 'সালাত', en: 'Salah' },
    summary: { bn: 'আল্লাহর স্মরণের জন্য প্রতিষ্ঠিত ইবাদত - মসজিদুল হারামে বিশেষ মর্যাদা।', en: 'Worship established for Allah’s remembrance - with special merit in Masjid al-Haram.' },
    points: [
      { text: { bn: 'আমার স্মরণের জন্য সালাত কায়েম করো।', en: 'Establish prayer for My remembrance.' }, kind: 'established', refs: ['q-20-14'] },
      { text: { bn: 'সালাত অশ্লীলতা ও মন্দ কাজ থেকে বিরত রাখে।', en: 'Prayer restrains from indecency and wrongdoing.' }, kind: 'established', refs: ['q-29-45'] },
      { text: { bn: 'সালাত আলো।', en: 'Prayer is light.' }, kind: 'established', refs: ['h-salah-light'] },
      { text: { bn: 'মসজিদুল হারামে এক সালাত অন্যত্র এক লাখের চেয়ে উত্তম।', en: 'A prayer in Masjid al-Haram is better than 100,000 elsewhere.' }, kind: 'established', refs: ['h-haram-prayer'] },
    ],
  },
  {
    id: 'dhikr',
    title: { bn: 'জিকির', en: 'Dhikr' },
    summary: { bn: 'আল্লাহর স্মরণ - অন্তরের প্রশান্তি।', en: 'Remembering Allah - rest for the heart.' },
    points: [
      { text: { bn: 'আল্লাহর স্মরণেই অন্তর প্রশান্ত হয়।', en: 'In the remembrance of Allah hearts find rest.' }, kind: 'established', refs: ['q-13-28'] },
      { text: { bn: 'আমাকে স্মরণ করো, আমি তোমাদের স্মরণ করব।', en: 'Remember Me; I will remember you.' }, kind: 'established', refs: ['q-2-152'] },
      { text: { bn: 'জিকিরকারী ও জিকিরহীনের উদাহরণ জীবিত ও মৃতের মতো।', en: 'The one who remembers and the one who does not are like the living and the dead.' }, kind: 'established', refs: ['h-dhikr-living'] },
      { text: { bn: '“সুবহানাল্লাহি ওয়া বিহামদিহি” ও তাহলিলের নির্দিষ্ট ফজিলত দোয়া গাইডে দেখুন।', en: 'See the Dua guide for the specific virtues of “SubhanAllahi wa bihamdihi” and the tahlil.' }, kind: 'established', refs: ['d-subhanallah', 'd-tahlil'] },
    ],
  },
  {
    id: 'quran',
    title: { bn: 'কুরআন তিলাওয়াত', en: 'Reciting the Qur’an' },
    summary: { bn: 'প্রতিটি অক্ষরে নেকি; কিয়ামতে সুপারিশকারী।', en: 'A reward for every letter; an intercessor on the Day of Resurrection.' },
    points: [
      { text: { bn: 'প্রতিটি অক্ষরে একটি নেকি, যা দশগুণ - হাসান হাদিস।', en: 'Each letter brings a good deed, multiplied tenfold - a hasan hadith.' }, kind: 'established', refs: ['h-quran-letter'] },
      { text: { bn: 'হারামে অপেক্ষার সময়গুলো তিলাওয়াতে কাটানো একটি সুন্দর অভ্যাস।', en: 'Spending waiting time in the Haram reciting is a beautiful habit.' }, kind: 'general', refs: [] },
    ],
  },
  {
    id: 'istighfar',
    title: { bn: 'ইস্তিগফার', en: 'Istighfar' },
    summary: { bn: 'আল্লাহর কাছে ক্ষমা চাওয়া - নবী ﷺ-এর দৈনন্দিন অভ্যাস।', en: 'Seeking Allah’s forgiveness - a daily habit of the Prophet ﷺ.' },
    points: [
      { text: { bn: 'তোমাদের রবের কাছে ক্ষমা চাও; তিনি মহা ক্ষমাশীল।', en: 'Seek forgiveness from your Lord; He is ever Forgiving.' }, kind: 'established', refs: ['q-71-10'] },
      { text: { bn: 'আল্লাহর রহমত থেকে নিরাশ হয়ো না; তিনি সব গুনাহ ক্ষমা করেন।', en: 'Do not despair of Allah’s mercy; He forgives all sins.' }, kind: 'established', refs: ['q-39-53'] },
      { text: { bn: 'নবী ﷺ দিনে একশ বার ইস্তিগফার করতেন।', en: 'The Prophet ﷺ sought forgiveness a hundred times a day.' }, kind: 'established', refs: ['h-istighfar-100'] },
      { text: { bn: 'সাইয়্যিদুল ইস্তিগফারের ফজিলত সহিহ বুখারিতে।', en: 'The virtue of Sayyid al-Istighfar is in Sahih al-Bukhari.' }, kind: 'established', refs: ['d-sayyid-istighfar'] },
    ],
  },
  {
    id: 'dua',
    title: { bn: 'দোয়া', en: 'Supplication' },
    summary: { bn: 'দোয়াই ইবাদত - আল্লাহ নিকটে এবং সাড়া দেন।', en: 'Supplication is worship - Allah is near and responds.' },
    points: [
      { text: { bn: 'আমি নিকটেই; আহ্বানকারীর ডাকে সাড়া দিই।', en: 'I am near; I answer the call of the caller.' }, kind: 'established', refs: ['q-2-186'] },
      { text: { bn: 'আমাকে ডাকো, আমি সাড়া দেব।', en: 'Call upon Me; I will respond.' }, kind: 'established', refs: ['q-40-60'] },
      { text: { bn: 'দোয়াই ইবাদত।', en: 'Supplication is worship.' }, kind: 'established', refs: ['h-dua-worship'] },
      { text: { bn: 'সিজদায় বান্দা রবের সবচেয়ে নিকটে - বেশি দোয়া করো।', en: 'The servant is closest to his Lord in prostration - supplicate much.' }, kind: 'established', refs: ['h-closest-sujud'] },
      { text: { bn: '“সাড়া দেওয়া” মানে সবসময় চাওয়া জিনিসটিই পাওয়া নয় - আলেমগণ বলেন, আল্লাহ উত্তম কিছু দেন বা বিপদ দূর করেন।', en: '“Responding” does not always mean receiving exactly what was asked - scholars explain Allah may give something better or avert harm.' }, kind: 'interpretation', refs: [] },
    ],
  },
  {
    id: 'zamzam',
    title: { bn: 'জমজম', en: 'Zamzam' },
    summary: { bn: 'বরকতময় পানি, যার ইতিহাস হাজেরা (আ.) পর্যন্ত।', en: 'Blessed water whose story goes back to Hajar.' },
    points: [
      { text: { bn: 'জমজম বরকতময় ও পরিতৃপ্তিদায়ক।', en: 'Zamzam is blessed and satisfying.' }, kind: 'established', refs: ['h-zamzam-blessed'] },
      { text: { bn: '“যে উদ্দেশ্যে পান করা হয়” - হাদিসটির গ্রেডিং নিয়ে মতভেদ আছে।', en: '“For whatever it is drunk for” - scholars differ on this hadith’s grading.' }, kind: 'interpretation', refs: ['h-zamzam-intention'] },
    ],
  },
  {
    id: 'nabawi',
    title: { bn: 'মসজিদে নববী', en: 'The Prophet’s Mosque' },
    summary: { bn: 'যে তিন মসজিদের উদ্দেশ্যে সফর বৈধ তার একটি - উমরাহর অংশ নয়।', en: 'One of the three mosques one may travel to for worship - not part of Umrah.' },
    points: [
      { text: { bn: 'এখানে এক সালাত অন্যত্র (মসজিদুল হারাম ছাড়া) হাজার সালাতের চেয়ে উত্তম।', en: 'A prayer here is better than a thousand elsewhere, except Masjid al-Haram.' }, kind: 'established', refs: ['h-nabawi-prayer'] },
      { text: { bn: 'নবী ﷺ-এর ঘর ও মিম্বারের মাঝখান জান্নাতের একটি বাগান।', en: 'Between his house and his pulpit is a garden of Paradise.' }, kind: 'established', refs: ['h-rawdah'] },
      { text: { bn: 'কুবায় সালাত একটি উমরাহর মতো।', en: 'Praying at Quba is like an Umrah.' }, kind: 'established', refs: ['h-quba'] },
    ],
  },
]
