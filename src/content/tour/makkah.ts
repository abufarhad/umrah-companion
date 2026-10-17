import type { TourSite } from '../types'

/** Makkah sites - coordinates from Wikidata (P625), facts and visitor notes verified 2026-10-17. Generated from research data; edit the copy here. */
export const makkahSites: TourSite[] = [
  {
    "id": "masjid-al-haram",
    "city": "makkah",
    "name": {
      "bn": "মসজিদুল হারাম",
      "en": "Masjid al-Haram"
    },
    "relation": "umrah-rite",
    "lat": 21.4225,
    "lng": 39.82611111111111,
    "coordSource": {
      "label": "Wikidata P625 (Q428858)",
      "url": "https://www.wikidata.org/wiki/Q428858"
    },
    "intro": {
      "bn": "কাবাকে ঘিরে থাকা মসজিদ - উমরাহর তাওয়াফ, দুই রাকাত, জমজম ও সাঈ সবই এখানে। পৃথিবীর প্রথম মসজিদ এবং সারা বিশ্বের কিবলা।",
      "en": "The mosque around the Kaaba - the Tawaf, two rak‘ahs, Zamzam and Sa‘i of Umrah all take place here. The first mosque on earth and the qiblah of the world."
    },
    "timeline": [
      {
        "id": "masjid-al-haram-e1",
        "when": {
          "bn": "প্রাচীন যুগ",
          "en": "Ancient"
        },
        "year": null,
        "title": {
          "bn": "প্রথম ঘর",
          "en": "The first House"
        },
        "text": {
          "bn": "মানুষের জন্য প্রথম ঘর বাক্কায় (মক্কায়) - বরকতময় ও হিদায়াত।",
          "en": "The first House for mankind is at Bakkah (Makkah) - blessed and a guidance."
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 3:96",
            "url": "https://quran.com/3/96"
          }
        ]
      },
      {
        "id": "masjid-al-haram-e2",
        "when": {
          "bn": "২ হিজরি",
          "en": "2 AH"
        },
        "year": 624,
        "title": {
          "bn": "কিবলা",
          "en": "The qiblah"
        },
        "text": {
          "bn": "মুমিনদের সালাতে মসজিদুল হারামের দিকে মুখ ফেরানোর নির্দেশ।",
          "en": "Believers are commanded to face al-Masjid al-Haram in prayer."
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 2:144",
            "url": "https://quran.com/2/144"
          }
        ]
      },
      {
        "id": "masjid-al-haram-e3",
        "when": {
          "bn": "ইবরাহিম (আ.)-এর যুগ",
          "en": "Time of Ibrahim"
        },
        "year": null,
        "title": {
          "bn": "নিরাপত্তার স্থান",
          "en": "A place of security"
        },
        "text": {
          "bn": "ঘরকে প্রত্যাবর্তন ও নিরাপত্তার স্থান করা হয়েছে; ইবরাহিম ও ইসমাইল (আ.)-কে তাওয়াফকারীদের জন্য পবিত্র রাখার নির্দেশ।",
          "en": "The House was made a place of return and security; Ibrahim and Isma‘il were charged to purify it for those who circle it."
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 2:125",
            "url": "https://quran.com/2/125"
          }
        ]
      },
      {
        "id": "masjid-al-haram-e4",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 632,
        "title": {
          "bn": "তিন মসজিদের একটি",
          "en": "One of the three mosques"
        },
        "text": {
          "bn": "যে তিন মসজিদের উদ্দেশ্যে ইবাদতের সফর বৈধ - তার একটি।",
          "en": "One of the three mosques one may travel to for worship."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1189",
            "url": "https://sunnah.com/bukhari:1189"
          }
        ]
      },
      {
        "id": "masjid-al-haram-e5",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 632,
        "title": {
          "bn": "এক লাখ সালাতের চেয়ে উত্তম",
          "en": "Better than 100,000 prayers"
        },
        "text": {
          "bn": "এখানে এক সালাত অন্যত্র এক লাখ সালাতের চেয়ে উত্তম (সহিহ - দারুসসালাম)।",
          "en": "A prayer here is better than 100,000 elsewhere (graded sahih by Darussalam)."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sunan Ibn Majah 1406",
            "url": "https://sunnah.com/ibnmajah:1406"
          }
        ]
      },
      {
        "id": "masjid-al-haram-e6",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "নবী ﷺ-এর তাওয়াফ ও সাঈ",
          "en": "The Prophet’s ﷺ Tawaf and Sa‘i"
        },
        "text": {
          "bn": "রুকন স্পর্শ, সাত চক্কর (তিনটিতে রমল), মাকামের পেছনে সালাত, তারপর সাফা-মারওয়া।",
          "en": "He touched the corner, made seven circuits (brisk in three), prayed behind the Station, then went to Safa and Marwah."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1218a",
            "url": "https://sunnah.com/muslim:1218a"
          }
        ]
      }
    ],
    "media": [
      "t-masjid-al-haram-1",
      "t-masjid-al-haram-2"
    ],
    "visitor": {
      "text": {
        "bn": "হজ ও উমরাহ মন্ত্রণালয় অনুযায়ী উমরাহর জন্য নুসুক অ্যাপে পারমিট লাগে এবং উমরাহর প্রবেশ পারমিটের সময়ের সাথে যুক্ত; সালাতের জন্য যেকোনো সময় প্রবেশ করা যায়। (মন্ত্রণালয়ের পাতা থেকে সার্চ অংশ দেখে যাচাই।)",
        "en": "Per the Ministry of Hajj and Umrah, Umrah needs a Nusuk permit and entry for Umrah is tied to its time slot; entry for prayer is allowed at any time. (Checked from search excerpts of the ministry’s pages.)"
      },
      "sources": [
        {
          "title": "Ministry of Hajj and Umrah",
          "url": "https://haj.gov.sa/en/FAQ"
        },
        {
          "title": "Ministry of Hajj and Umrah",
          "url": "https://haj.gov.sa/en/E-Services/Umrah-Permit-Application"
        },
        {
          "title": "Saudi Press Agency",
          "url": "https://www.spa.gov.sa/en/N2558453"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [
      "q-3-96",
      "q-2-144",
      "h-three-mosques",
      "h-haram-prayer"
    ],
    "suggestMinutes": 180,
    "historyId": "haram",
    "guideId": "enter",
    "scene": {
      "id": "haram",
      "stage": "h2008"
    }
  },
  {
    "id": "kaaba",
    "city": "makkah",
    "name": {
      "bn": "কাবা",
      "en": "The Kaaba"
    },
    "relation": "umrah-rite",
    "within": "masjid-al-haram",
    "lat": 21.4225,
    "lng": 39.82611111111111,
    "coordSource": {
      "label": "Inside Masjid al-Haram - uses the mosque’s Wikidata coordinates (Q428858)",
      "url": "https://www.wikidata.org/wiki/Q428858"
    },
    "intro": {
      "bn": "মসজিদুল হারামের কেন্দ্রে ঘনকাকৃতির ঘর - তাওয়াফের কেন্দ্র ও সারা বিশ্বের কিবলা। এর পূর্ণ ইতিহাস “পবিত্র স্থানগুলোর ইতিহাস” অধ্যায়ে।",
      "en": "The cube-shaped House at the centre of Masjid al-Haram - the centre of Tawaf and the qiblah of the world. Its full history is in the History of the Sacred Places chapter."
    },
    "timeline": [],
    "media": [
      "h-kaaba-1880",
      "p-kaaba-1",
      "p-black-stone-1"
    ],
    "visitor": {
      "text": {
        "bn": "মাতাফে তাওয়াফ নুসুক পারমিটের সময় অনুযায়ী; ভিড়ে ওপরের তলাগুলো ব্যবহার করুন। হাজরে আসওয়াদ চুম্বনের জন্য ধাক্কাধাক্কি করবেন না।",
        "en": "Tawaf in the Mataf follows your Nusuk permit slot; use the upper floors when crowded. Do not push to kiss the Black Stone."
      },
      "sources": [
        {
          "title": "Ministry of Hajj and Umrah",
          "url": "https://haj.gov.sa/Umrah"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [
      "q-2-127",
      "q-3-96",
      "h-first-mosque"
    ],
    "suggestMinutes": 60,
    "historyId": "kaaba",
    "guideId": "tawaf",
    "scene": {
      "id": "kaaba",
      "stage": "today"
    }
  },
  {
    "id": "safa-marwah-site",
    "city": "makkah",
    "name": {
      "bn": "সাফা ও মারওয়া (মাসআ)",
      "en": "Safa and Marwah (the Mas‘a)"
    },
    "relation": "umrah-rite",
    "within": "masjid-al-haram",
    "lat": 21.4225,
    "lng": 39.82611111111111,
    "coordSource": {
      "label": "Inside Masjid al-Haram - uses the mosque’s Wikidata coordinates (Q428858)",
      "url": "https://www.wikidata.org/wiki/Q428858"
    },
    "intro": {
      "bn": "মসজিদুল হারামের ভেতরের বহুতল মাসআ, যেখানে সাঈ করা হয় - হাজেরা (আ.)-এর পথ।",
      "en": "The multi-level Mas‘a inside Masjid al-Haram where Sa‘i is performed - the path of Hajar."
    },
    "timeline": [],
    "media": [
      "h-masa-2019",
      "p-masa-3",
      "h-bab-ali-1914"
    ],
    "visitor": {
      "text": {
        "bn": "মাসআ বহুতল ও শীতাতপ নিয়ন্ত্রিত; হুইলচেয়ার লেন আছে। পথে দাঁড়িয়ে অন্যদের আটকাবেন না।",
        "en": "The Mas‘a is multi-level and air-conditioned, with wheelchair lanes. Do not stop in the walkway."
      },
      "sources": [
        {
          "title": "Ministry of Hajj and Umrah",
          "url": "https://haj.gov.sa/Umrah"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [
      "q-2-158",
      "h-hajar-sai"
    ],
    "suggestMinutes": 60,
    "historyId": "safa-marwah",
    "guideId": "sai",
    "scene": {
      "id": "hajar",
      "stage": "today"
    }
  },
  {
    "id": "zamzam-site",
    "city": "makkah",
    "name": {
      "bn": "জমজম",
      "en": "Zamzam"
    },
    "relation": "umrah-rite",
    "within": "masjid-al-haram",
    "lat": 21.4225,
    "lng": 39.82611111111111,
    "coordSource": {
      "label": "Inside Masjid al-Haram - uses the mosque’s Wikidata coordinates (Q428858)",
      "url": "https://www.wikidata.org/wiki/Q428858"
    },
    "intro": {
      "bn": "জমজম কূপ এখন মাতাফের নিচে; হারামজুড়ে কুলারে এর পানি পাওয়া যায়।",
      "en": "The Zamzam well now lies beneath the Mataf; its water is available from coolers throughout the Haram."
    },
    "timeline": [],
    "media": [
      "p-zamzam-1",
      "h-zamzam-1888"
    ],
    "visitor": {
      "text": {
        "bn": "হারামের যেকোনো কুলার থেকে বিনামূল্যে পান করুন - ঠান্ডা ও সাধারণ তাপমাত্রার দুই ধরনের কুলার আছে। দেশে নিতে অনুমোদিত দোকান থেকে সিল করা ৫ লিটারের বোতল কিনুন; এয়ারলাইনের নিয়ম দেখুন।",
        "en": "Drink free from any cooler in the Haram - chilled and room-temperature coolers are available. To take some home, buy a sealed 5-litre container from official outlets; check your airline’s rule."
      },
      "sources": [
        {
          "title": "Ministry of Hajj and Umrah",
          "url": "https://haj.gov.sa/Umrah"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [
      "h-zamzam-blessed",
      "h-hajar-zamzam"
    ],
    "suggestMinutes": 10,
    "historyId": "zamzam",
    "guideId": "prayer",
    "scene": {
      "id": "zamzam",
      "stage": "today"
    }
  },
  {
    "id": "jabal-al-nour-hira",
    "city": "makkah",
    "name": {
      "bn": "জাবালে নূর ও হেরা গুহা",
      "en": "Jabal al-Nour and the Cave of Hira"
    },
    "relation": "historical",
    "lat": 21.458055555556,
    "lng": 39.861388888889,
    "coordSource": {
      "label": "Wikidata P625 (Q1033157, Jabal al-Nour)",
      "url": "https://www.wikidata.org/wiki/Q1033157"
    },
    "intro": {
      "bn": "মসজিদুল হারাম থেকে প্রায় ৪ কিমি উত্তর-পূর্বের পাহাড়, যার গুহায় নবী ﷺ নির্জনে ইবাদত করতেন এবং প্রথম ওহি “ইকরা” নাজিল হয়। এখানে কোনো নির্ধারিত আমল নেই।",
      "en": "A mountain about 4 km north-east of Masjid al-Haram, in whose cave the Prophet ﷺ used to worship in seclusion and where the first revelation, “Read!”, came. There is no prescribed ritual here."
    },
    "timeline": [
      {
        "id": "jabal-al-nour-hira-e1",
        "when": {
          "bn": "নবুয়তের সূচনা (প্রায় ৬১০ খ্রি.)",
          "en": "Start of Prophethood (c. 610 CE)"
        },
        "year": 610,
        "title": {
          "bn": "হেরায় নির্জনতা ও প্রথম ওহি",
          "en": "Seclusion in Hira and the first revelation"
        },
        "text": {
          "bn": "নবুয়তের আগে নবী ﷺ বহু রাত হেরায় ইবাদতে কাটাতেন; সেখানে ফেরেশতা এসে বললেন: “পড়ুন!”",
          "en": "Before Prophethood he spent many nights in worship in Hira; there the angel came and said: “Read!”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 3",
            "url": "https://sunnah.com/bukhari:3"
          }
        ]
      },
      {
        "id": "jabal-al-nour-hira-e2",
        "when": {
          "bn": "প্রায় ৬১০ খ্রি.",
          "en": "c. 610 CE"
        },
        "year": 610,
        "title": {
          "bn": "প্রথম নাজিলকৃত আয়াত",
          "en": "The first revealed words"
        },
        "text": {
          "bn": "“পড়ুন আপনার রবের নামে, যিনি সৃষ্টি করেছেন” - সূরা আলাকের শুরু।",
          "en": "“Read in the name of your Lord who created” - the opening of Surah al-‘Alaq."
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 96:1",
            "url": "https://quran.com/96/1"
          }
        ]
      },
      {
        "id": "jabal-al-nour-hira-e3",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "উচ্চতা ও অবস্থান",
          "en": "Height and location"
        },
        "text": {
          "bn": "মসজিদুল হারাম থেকে প্রায় ৪ কিমি উত্তর-পূর্বে; উচ্চতা ৬৪২ মিটার (ভিজিট সৌদি)।",
          "en": "About 4 km north-east of Masjid al-Haram; 642 m high (Visit Saudi)."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Visit Saudi",
            "url": "https://www.visitsaudi.com/en/makkah/attractions/jabal-al-noor"
          }
        ]
      },
      {
        "id": "jabal-al-nour-hira-e4",
        "when": {
          "bn": "২০২৩ থেকে",
          "en": "From 2023"
        },
        "year": 2023,
        "title": {
          "bn": "হেরা কালচারাল ডিস্ট্রিক্ট",
          "en": "Hira Cultural District"
        },
        "text": {
          "bn": "পাহাড়ের পাদদেশের ডিস্ট্রিক্ট থেকে সাইনবোর্ড, বিশ্রামস্থল ও নিরাপত্তাসহ পাকা পথ গুহা পর্যন্ত গেছে।",
          "en": "A paved path with signs, rest areas and safety measures leads from the district at the foot of the mountain to the cave."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Saudipedia",
            "url": "https://saudipedia.com/en/hira-cultural-district"
          }
        ]
      }
    ],
    "media": [
      "t-jabal-al-nour-hira-1",
      "t-jabal-al-nour-hira-2"
    ],
    "visitor": {
      "text": {
        "bn": "ভিজিট সৌদি অনুযায়ী প্রতিদিন ২৪ ঘণ্টা খোলা। আরোহণ কষ্টসাধ্য - উইকিপিডিয়ায় প্রায় ১,৭৫০ ধাপ ও ৩০ মিনিট–৩ ঘণ্টার কথা আছে (অফিসিয়াল নয়)। পাদদেশের হেরা কালচারাল ডিস্ট্রিক্টে (২০২৩) কুরআন জাদুঘর ও ওহি প্রদর্শনী - ১০ জুন ২০২৬-এর অফিসিয়াল সংবাদ অনুযায়ী ২৪ ঘণ্টা খোলা, শুক্রবার সকাল ৭টা–বিকেল ৩:৩০ বন্ধ; টিকিটের তথ্য নিশ্চিত নয়। বয়স্ক ও অসুস্থরা আরোহণ এড়িয়ে চলুন; পানি নিন।",
        "en": "Visit Saudi lists it as open 24 hours daily. The climb is strenuous - Wikipedia cites about 1,750 steps and 30 minutes to 3 hours (not official). At the foot, the Hira Cultural District (2023) has the Holy Quran Museum and Revelation Exhibition - open 24 hours per an official news item of 10 June 2026, closed Fridays 7:00–15:30; ticketing is unconfirmed. The elderly and unwell should avoid the climb; carry water."
      },
      "sources": [
        {
          "title": "Visit Saudi",
          "url": "https://www.visitsaudi.com/en/makkah/attractions/jabal-al-noor"
        },
        {
          "title": "pep.gov.sa",
          "url": "https://pep.gov.sa/en/news/824"
        },
        {
          "title": "Wikipedia (secondary)",
          "url": "https://en.wikipedia.org/wiki/Jabal_al-Nour"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [],
    "suggestMinutes": 150
  },
  {
    "id": "jabal-thawr",
    "city": "makkah",
    "name": {
      "bn": "জাবালে সাওর ও সাওর গুহা",
      "en": "Jabal Thawr and the Cave of Thawr"
    },
    "relation": "historical",
    "lat": 21.383333333333,
    "lng": 39.85,
    "coordSource": {
      "label": "Wikidata P625 (Q4116104, Jabal Thawr)",
      "url": "https://www.wikidata.org/wiki/Q4116104"
    },
    "intro": {
      "bn": "মক্কার দক্ষিণের পাহাড়, যার গুহায় হিজরতের সময় নবী ﷺ ও আবু বকর (রা.) তিন রাত আত্মগোপন করেছিলেন। এখানে কোনো নির্ধারিত আমল নেই।",
      "en": "A mountain south of Makkah in whose cave the Prophet ﷺ and Abu Bakr hid for three nights during the Hijrah. There is no prescribed ritual here."
    },
    "timeline": [
      {
        "id": "jabal-thawr-e1",
        "when": {
          "bn": "১ হিজরি / ৬২২ খ্রি.",
          "en": "1 AH / 622 CE"
        },
        "year": 622,
        "title": {
          "bn": "“আল্লাহ আমাদের সাথে আছেন”",
          "en": "“Allah is with us”"
        },
        "text": {
          "bn": "আল্লাহ তাঁর রাসুলকে সাহায্য করেছিলেন যখন তাঁরা দুজন গুহায় ছিলেন এবং তিনি সাথীকে বলেছিলেন: “দুঃখ কোরো না, আল্লাহ আমাদের সাথে আছেন।”",
          "en": "Allah aided His Messenger when the two were in the cave and he said to his companion: “Do not grieve; Allah is with us.”"
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 9:40",
            "url": "https://quran.com/9/40"
          }
        ]
      },
      {
        "id": "jabal-thawr-e2",
        "when": {
          "bn": "১ হিজরি / ৬২২ খ্রি.",
          "en": "1 AH / 622 CE"
        },
        "year": 622,
        "title": {
          "bn": "দুজনের তৃতীয় আল্লাহ",
          "en": "Two, the third of whom is Allah"
        },
        "text": {
          "bn": "আবু বকর (রা.): কেউ পায়ের নিচে তাকালেই আমাদের দেখবে। নবী ﷺ: “যে দুজনের তৃতীয় আল্লাহ, তাদের সম্পর্কে তোমার কী ধারণা?”",
          "en": "Abu Bakr: if anyone looked under his feet he would see us. The Prophet ﷺ: “What do you think of two, the third of whom is Allah?”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 3653",
            "url": "https://sunnah.com/bukhari:3653"
          }
        ]
      },
      {
        "id": "jabal-thawr-e3",
        "when": {
          "bn": "১ হিজরি / ৬২২ খ্রি.",
          "en": "1 AH / 622 CE"
        },
        "year": 622,
        "title": {
          "bn": "তিন রাত",
          "en": "Three nights"
        },
        "text": {
          "bn": "তাঁরা তিন রাত গুহায় থাকেন; আবদুল্লাহ ইবনে আবু বকর খবর আনতেন এবং আমির ইবনে ফুহাইরা কাছেই ছাগল চরাতেন।",
          "en": "They stayed three nights; ‘Abdullah ibn Abi Bakr brought news and ‘Amir ibn Fuhayrah grazed sheep nearby."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 3905",
            "url": "https://sunnah.com/bukhari:3905"
          }
        ]
      },
      {
        "id": "jabal-thawr-e4",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "অবস্থান",
          "en": "Location"
        },
        "text": {
          "bn": "মক্কার দক্ষিণে (মিসফালার দক্ষিণে); উচ্চতা উইকিপিডিয়া অনুযায়ী ৭৫০ মিটার।",
          "en": "South of Makkah (south of al-Misfalah); Wikipedia gives its height as 750 m."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Jabal_Thawr"
          }
        ]
      }
    ],
    "media": [
      "t-jabal-thawr-1",
      "t-jabal-thawr-2"
    ],
    "visitor": {
      "text": {
        "bn": "অফিসিয়াল দর্শনার্থী পাতা পাওয়া যায়নি; প্রবেশ, সময় ও পথের অবস্থা যাচাই করা যায়নি। আরোহণ কঠিন ও খাড়া হতে পারে। যাওয়া ঐচ্ছিক - কোনো বিশেষ আমল নেই।",
        "en": "No official visitor page was found; access, hours and path conditions could not be verified. The climb may be steep and difficult. Visiting is optional - there is no special ritual."
      },
      "sources": [
        {
          "title": "Wikipedia - Jabal Thawr (secondary)",
          "url": "https://en.wikipedia.org/wiki/Jabal_Thawr"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [],
    "suggestMinutes": 60,
    "historyId": "madinah",
    "scene": {
      "id": "madinah",
      "stage": "hijrah"
    }
  },
  {
    "id": "mina",
    "city": "makkah",
    "name": {
      "bn": "মিনা",
      "en": "Mina"
    },
    "relation": "hajj-site",
    "lat": 21.413333333333,
    "lng": 39.893333333333,
    "coordSource": {
      "label": "Wikidata P625 (Q753276)",
      "url": "https://www.wikidata.org/wiki/Q753276"
    },
    "intro": {
      "bn": "হজের সময় হাজিরা যেখানে অবস্থান করেন ও জামারাতে পাথর নিক্ষেপ করেন - “তাঁবুর শহর”। উমরাহর কোনো আমল এখানে নেই।",
      "en": "Where pilgrims stay and stone the Jamarat during Hajj - “the city of tents”. No rite of Umrah takes place here."
    },
    "timeline": [
      {
        "id": "mina-e1",
        "when": {
          "bn": "কুরআন",
          "en": "Qur’an"
        },
        "year": null,
        "title": {
          "bn": "নির্দিষ্ট দিনগুলো",
          "en": "The numbered days"
        },
        "text": {
          "bn": "“নির্দিষ্ট দিনগুলোতে আল্লাহকে স্মরণ করো; যে দুই দিনে তাড়াতাড়ি করে তার গুনাহ নেই…” - তিরমিজি ৮৮৯ একে মিনার দিনগুলোর সাথে যুক্ত করে।",
          "en": "“Remember Allah during the numbered days; whoever hastens in two days, there is no sin on him…” - Tirmidhi 889 links this to the days of Mina."
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 2:203",
            "url": "https://quran.com/2/203"
          }
        ]
      },
      {
        "id": "mina-e2",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 632,
        "title": {
          "bn": "মিনার তিন দিন",
          "en": "The three days of Mina"
        },
        "text": {
          "bn": "“মিনার দিন তিনটি; যে দুই দিনে চলে যায় তার গুনাহ নেই, যে দেরি করে তারও গুনাহ নেই।” (সহিহ - দারুসসালাম)",
          "en": "“The days of Mina are three; whoever leaves after two has no sin, and whoever delays has no sin.” (sahih - Darussalam)"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Jami' at-Tirmidhi 889",
            "url": "https://sunnah.com/tirmidhi:889"
          }
        ]
      },
      {
        "id": "mina-e3",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "তারবিয়ার দিন",
          "en": "The day of Tarwiyah"
        },
        "text": {
          "bn": "৮ জিলহজ নবী ﷺ মিনায় গিয়ে যোহর থেকে ফজর পর্যন্ত সালাত পড়েন; মুজদালিফার পর জামারায় সাতটি পাথর নিক্ষেপ করেন।",
          "en": "On 8 Dhul-Hijjah he went to Mina and prayed from Dhuhr to Fajr there; after Muzdalifah he stoned the Jamrah with seven pebbles."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1218a",
            "url": "https://sunnah.com/muslim:1218a"
          }
        ]
      },
      {
        "id": "mina-e4",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "“পুরো মিনা কুরবানির স্থান”",
          "en": "“All of Mina is a place of sacrifice”"
        },
        "text": {
          "bn": "“আমি এখানে কুরবানি করেছি, আর পুরো মিনাই কুরবানির স্থান।”",
          "en": "“I have sacrificed here, and the whole of Mina is a place for sacrifice.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1218c",
            "url": "https://sunnah.com/muslim:1218c"
          }
        ]
      },
      {
        "id": "mina-e5",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "তাঁবুর শহর",
          "en": "City of tents"
        },
        "text": {
          "bn": "মসজিদুল হারাম থেকে প্রায় ৭ কিমি উত্তর-পূর্বে; হাজারো অগ্নিরোধী তাঁবু ও বহুতল জামারাত সেতু (এসপিএ)।",
          "en": "About 7 km north-east of the Grand Mosque; thousands of fire-resistant tents and the multi-level Jamarat bridge (SPA)."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Saudi Press Agency",
            "url": "https://spa.gov.sa/en/N2576350"
          }
        ]
      }
    ],
    "media": [
      "t-mina-1"
    ],
    "visitor": {
      "text": {
        "bn": "মিনা মূলত হজের সময় ব্যবহৃত হয়। ভিজিট সৌদির একটি তালিকায় (সার্চ অংশ) মসজিদুল খাইফ শুধু হজ মৌসুমে খোলা বলা হয়েছে। হজের বাইরে প্রবেশ অফিসিয়াল সূত্রে যাচাই করা যায়নি।",
        "en": "Mina is used mainly during Hajj. A Visit Saudi listing (search excerpt) says Masjid al-Khayf is open only in the Hajj season. Access outside Hajj could not be verified officially."
      },
      "sources": [
        {
          "title": "Visit Saudi",
          "url": "https://www.visitsaudi.com/en/makkah/attractions/masjid-al-khaif"
        },
        {
          "title": "Saudi Press Agency",
          "url": "https://spa.gov.sa/en/N2576350"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [],
    "suggestMinutes": 30
  },
  {
    "id": "arafat",
    "city": "makkah",
    "name": {
      "bn": "আরাফাত ও জাবালে রহমত",
      "en": "Arafat and Jabal al-Rahmah"
    },
    "relation": "hajj-site",
    "lat": 21.354831,
    "lng": 39.983886,
    "coordSource": {
      "label": "Wikidata P625 (Q216894, Mount Arafat / Jabal al-Rahmah)",
      "url": "https://www.wikidata.org/wiki/Q216894"
    },
    "intro": {
      "bn": "হজের প্রধান রুকন - ৯ জিলহজের অবস্থান - এখানে। নবী ﷺ বলেছেন, “হজ হলো আরাফাহ।” উমরাহর কোনো আমল এখানে নেই।",
      "en": "The central pillar of Hajj - the standing on 9 Dhul-Hijjah - takes place here. The Prophet ﷺ said: “Hajj is Arafah.” No rite of Umrah takes place here."
    },
    "timeline": [
      {
        "id": "arafat-e1",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 632,
        "title": {
          "bn": "“হজ হলো আরাফাহ”",
          "en": "“Hajj is Arafah”"
        },
        "text": {
          "bn": "“হজ হলো আরাফাহ; যে ফজরের আগে রাতে মুজদালিফায় পৌঁছে, সে হজ পেয়েছে।” (সহিহ - দারুসসালাম)",
          "en": "“Hajj is Arafah; whoever reaches Muzdalifah during the night before Fajr has caught the Hajj.” (sahih - Darussalam)"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Jami' at-Tirmidhi 889",
            "url": "https://sunnah.com/tirmidhi:889"
          }
        ]
      },
      {
        "id": "arafat-e2",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "সূর্যাস্ত পর্যন্ত অবস্থান",
          "en": "Standing until sunset"
        },
        "text": {
          "bn": "খুতবা ও যোহর-আসর একত্রে পড়ার পর নবী ﷺ অবস্থানের স্থানে গিয়ে কিবলামুখী হয়ে সূর্যাস্ত পর্যন্ত দাঁড়িয়ে থাকেন।",
          "en": "After the sermon and the combined Dhuhr and ‘Asr, he went to the place of standing, faced the qiblah and stood until sunset."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1218a",
            "url": "https://sunnah.com/muslim:1218a"
          }
        ]
      },
      {
        "id": "arafat-e3",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "“পুরো আরাফাত অবস্থানের স্থান”",
          "en": "“All of Arafat is a place of standing”"
        },
        "text": {
          "bn": "“আমি এখানে অবস্থান করেছি, আর পুরো আরাফাতই অবস্থানের স্থান।”",
          "en": "“I have stood here, and the whole of Arafat is a place for standing.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1218c",
            "url": "https://sunnah.com/muslim:1218c"
          }
        ]
      },
      {
        "id": "arafat-e4",
        "when": {
          "bn": "কুরআন",
          "en": "Qur’an"
        },
        "year": null,
        "title": {
          "bn": "আরাফাত থেকে ফেরা",
          "en": "Departing Arafat"
        },
        "text": {
          "bn": "“যখন তোমরা আরাফাত থেকে ফিরবে, মাশআরুল হারামে আল্লাহকে স্মরণ করো।”",
          "en": "“When you depart from Arafat, remember Allah at al-Mash‘ar al-Haram.”"
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 2:198",
            "url": "https://quran.com/2/198"
          }
        ]
      },
      {
        "id": "arafat-e5",
        "when": {
          "bn": "মতভেদ",
          "en": "Disputed"
        },
        "year": null,
        "title": {
          "bn": "পাহাড়ের চূড়ায় খুতবা?",
          "en": "The sermon on the hilltop?"
        },
        "text": {
          "bn": "বিদায় হজের খুতবা জাবালে রহমতের চূড়া থেকে দেওয়া হয়েছিল - এই প্রচলিত দাবি জাবির (রা.)-এর বর্ণনার সাথে মেলে না; তিনি “উপত্যকার নিচ” (নামিরার কাছে) থেকে খুতবা দিয়েছিলেন।",
          "en": "The popular claim that the Farewell Sermon was given from the top of Jabal al-Rahmah does not fit Jabir’s account, which places it in “the bottom of the valley” near Namirah."
        },
        "kind": "disputed",
        "sources": [
          {
            "title": "Sahih Muslim 1218a",
            "url": "https://sunnah.com/muslim:1218a"
          }
        ]
      },
      {
        "id": "arafat-e6",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "অবস্থান",
          "en": "Location"
        },
        "text": {
          "bn": "মক্কা থেকে প্রায় ২০ কিমি পূর্বে; জাবালে রহমত প্রায় ৭০ মিটার উঁচু (এসপিএ)।",
          "en": "About 20 km east of Makkah; Jabal al-Rahmah is about 70 m high (SPA)."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Saudi Press Agency",
            "url": "https://spa.gov.sa/en/N2576350"
          }
        ]
      }
    ],
    "media": [
      "t-arafat-1",
      "t-arafat-2"
    ],
    "visitor": {
      "text": {
        "bn": "হজের বাইরে আরাফাত দেখার অফিসিয়াল নির্দেশনা পাওয়া যায়নি। জাবালে রহমতে ওঠা কোনো আমলের অংশ নয়। প্রবেশ ও সময় যাচাই করা যায়নি।",
        "en": "No official guidance for visiting Arafat outside Hajj was found. Climbing Jabal al-Rahmah is not part of any rite. Access and hours could not be verified."
      },
      "sources": [
        {
          "title": "Saudi Press Agency",
          "url": "https://spa.gov.sa/en/N2576350"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [],
    "suggestMinutes": 45
  },
  {
    "id": "masjid-namirah",
    "city": "makkah",
    "name": {
      "bn": "মসজিদে নামিরা",
      "en": "Masjid Namirah"
    },
    "relation": "hajj-site",
    "lat": 21.352777777778,
    "lng": 39.966111111111,
    "coordSource": {
      "label": "Wikidata P625 (Q12242853), first of two normal-rank values; the second is 21.3538569, 39.9647955999999",
      "url": "https://www.wikidata.org/wiki/Q12242853"
    },
    "intro": {
      "bn": "আরাফাতের প্রান্তে সেই এলাকা, যেখানে বিদায় হজে নবী ﷺ তাঁবু স্থাপন করে খুতবা দেন এবং যোহর-আসর একত্রে পড়েন। আজ আরাফাহর দিনের খুতবা এখানে হয়।",
      "en": "At the edge of Arafat, where during the Farewell Hajj the Prophet ﷺ pitched his tent, gave the sermon and prayed Dhuhr and ‘Asr together. The Day of Arafah sermon is given here today."
    },
    "timeline": [
      {
        "id": "masjid-namirah-e1",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "নামিরায় তাঁবু ও খুতবা",
          "en": "The tent and sermon at Namirah"
        },
        "text": {
          "bn": "৯ জিলহজ নামিরায় তাঁবু স্থাপন করা হয়; সূর্য হেলে পড়লে উপত্যকার নিচ থেকে বিদায় হজের খুতবা দিয়ে যোহর-আসর একত্রে পড়েন।",
          "en": "On the 9th his tent was pitched at Namirah; after midday he addressed the people from the bottom of the valley (the Farewell Sermon) and prayed Dhuhr and ‘Asr together."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1218a",
            "url": "https://sunnah.com/muslim:1218a"
          }
        ]
      },
      {
        "id": "masjid-namirah-e2",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "আজকের মসজিদ",
          "en": "The mosque today"
        },
        "text": {
          "bn": "আরাফাহর দিনের খুতবা ও যোহর-আসর এখানে হয়। উইকিপিডিয়ায় আব্বাসীয় যুগে প্রথম নির্মাণ ও প্রায় ২৭,০০০ বর্গমিটার সম্প্রসারণের কথা আছে - কোনো সূত্র ছাড়া।",
          "en": "The Day of Arafah sermon and Dhuhr–‘Asr are held here. Wikipedia says it was first built in the Abbasid era and expanded to about 27,000 m² - without citing sources."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Masjid_al-Namirah"
          }
        ]
      }
    ],
    "media": [
      "t-masjid-namirah-1"
    ],
    "visitor": {
      "text": {
        "bn": "ভিজিট সৌদির পাতা (২১ সেপ্টেম্বর ২০২৬ হালনাগাদ) খোলেনি, তাই সময় যাচাই করা যায়নি।",
        "en": "Visit Saudi’s page (updated 21 Sep 2026) did not load, so hours could not be verified."
      },
      "sources": [
        {
          "title": "Visit Saudi",
          "url": "https://www.visitsaudi.com/en/makkah/attractions/masjid-namirah"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [],
    "suggestMinutes": 20
  },
  {
    "id": "muzdalifah",
    "city": "makkah",
    "name": {
      "bn": "মুজদালিফা ও মাশআরুল হারাম মসজিদ",
      "en": "Muzdalifah and Masjid al-Mash‘ar al-Haram"
    },
    "relation": "hajj-site",
    "lat": 21.3925,
    "lng": 39.937777777778,
    "coordSource": {
      "label": "Wikidata P625 (Q1788735, Muzdalifah)",
      "url": "https://www.wikidata.org/wiki/Q1788735"
    },
    "intro": {
      "bn": "মিনা ও আরাফাতের মাঝখানে - হজের সময় ১০ জিলহজের রাত হাজিরা এখানে খোলা আকাশের নিচে কাটান। উমরাহর কোনো আমল এখানে নেই।",
      "en": "Between Mina and Arafat - during Hajj, pilgrims spend the night of the 10th of Dhul-Hijjah here in the open. No rite of Umrah takes place here."
    },
    "timeline": [
      {
        "id": "muzdalifah-e1",
        "when": {
          "bn": "কুরআন",
          "en": "Qur’an"
        },
        "year": null,
        "title": {
          "bn": "মাশআরুল হারামে জিকির",
          "en": "Remembrance at al-Mash‘ar al-Haram"
        },
        "text": {
          "bn": "“যখন তোমরা আরাফাত থেকে ফিরবে, মাশআরুল হারামে আল্লাহকে স্মরণ করো।”",
          "en": "“When you depart from Arafat, remember Allah at al-Mash‘ar al-Haram.”"
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 2:198",
            "url": "https://quran.com/2/198"
          }
        ]
      },
      {
        "id": "muzdalifah-e2",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "মুজদালিফার রাত",
          "en": "The night at Muzdalifah"
        },
        "text": {
          "bn": "এক আজান ও দুই ইকামতে মাগরিব-ইশা একত্রে, ফজর পর্যন্ত বিশ্রাম, তারপর মাশআরুল হারামে কিবলামুখী হয়ে দোয়া - খুব ফর্সা হওয়া পর্যন্ত।",
          "en": "Maghrib and ‘Isha together with one adhan and two iqamahs, rest until dawn, then supplication at al-Mash‘ar al-Haram facing the qiblah until it was very bright."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1218a",
            "url": "https://sunnah.com/muslim:1218a"
          }
        ]
      },
      {
        "id": "muzdalifah-e3",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "“পুরো মুজদালিফা অবস্থানের স্থান”",
          "en": "“All of Muzdalifah is a place of stay”"
        },
        "text": {
          "bn": "“আমি এখানে অবস্থান করেছি, আর পুরো মুজদালিফাই অবস্থানের স্থান।”",
          "en": "“I have stayed here, and the whole of Muzdalifah is a place for stay.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1218c",
            "url": "https://sunnah.com/muslim:1218c"
          }
        ]
      },
      {
        "id": "muzdalifah-e4",
        "when": {
          "bn": "ইসলামপূর্ব যুগ",
          "en": "Pre-Islamic era"
        },
        "year": null,
        "title": {
          "bn": "হুমস",
          "en": "The Hums"
        },
        "text": {
          "bn": "কুরাইশ (হুমস) আরাফাতের বদলে মুজদালিফায় থামত; এ নিয়েই ২:১৯৯ (“যেখান থেকে সবাই ফেরে, সেখান থেকে ফেরো”) নাজিল হয়।",
          "en": "Quraysh (the Hums) used to stop at Muzdalifah instead of Arafat; 2:199 (“depart from where all the people depart”) was revealed about them."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1665",
            "url": "https://sunnah.com/bukhari:1665"
          }
        ]
      },
      {
        "id": "muzdalifah-e5",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "অবস্থান",
          "en": "Location"
        },
        "text": {
          "bn": "মিনা ও আরাফাতের মাঝে; হাজিরা ১০ জিলহজের রাত খোলা আকাশে কাটান (এসপিএ)।",
          "en": "Between Mina and Arafat; pilgrims spend the night of the 10th in the open (SPA)."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Saudi Press Agency",
            "url": "https://spa.gov.sa/en/N2576350"
          }
        ]
      },
      {
        "id": "muzdalifah-e6",
        "when": {
          "bn": "৩য় শতাব্দী হিজরি",
          "en": "3rd century AH"
        },
        "year": null,
        "title": {
          "bn": "মসজিদ নির্মাণ",
          "en": "The mosque built"
        },
        "text": {
          "bn": "আল-আযরাকির বর্ণনামতে মাশআরুল হারাম মসজিদ প্রথম ৩য় শতাব্দী হিজরিতে নির্মিত (উইকিপিডিয়ার সূত্রে)।",
          "en": "According to al-Azraqi, the Mash‘ar al-Haram mosque was first built in the 3rd century AH (via Wikipedia)."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Al-Mash%27ar_al-Haram_Mosque"
          }
        ]
      }
    ],
    "media": [
      "t-muzdalifah-1",
      "t-muzdalifah-2"
    ],
    "visitor": {
      "text": {
        "bn": "হজের বাইরে যাওয়ার অফিসিয়াল নির্দেশনা পাওয়া যায়নি। প্রবেশ যাচাই করা যায়নি।",
        "en": "No official guidance for visiting outside Hajj was found. Access could not be verified."
      },
      "sources": [
        {
          "title": "Visit Saudi",
          "url": "https://www.visitsaudi.com/en/makkah/events/mamsha-muzdalifah"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [],
    "suggestMinutes": 20
  },
  {
    "id": "masjid-aisha-tanim",
    "city": "makkah",
    "name": {
      "bn": "মসজিদে আয়েশা (তানঈম)",
      "en": "Masjid Aisha (al-Tan‘im)"
    },
    "relation": "miqat",
    "lat": 21.46757222,
    "lng": 39.80124722,
    "coordSource": {
      "label": "Wikidata P625 (Q3850811)",
      "url": "https://www.wikidata.org/wiki/Q3850811"
    },
    "intro": {
      "bn": "হারামের সীমার ঠিক বাইরে তানঈমে - মক্কায় অবস্থানরত কেউ নতুন উমরাহ করতে চাইলে এখানে (বা হারামের বাইরে যেকোনো স্থানে) ইহরাম বাঁধেন। নবী ﷺ আয়েশা (রা.)-কে এখান থেকে উমরাহ করতে পাঠিয়েছিলেন।",
      "en": "At al-Tan‘im, just outside the Haram boundary - those already in Makkah who want another Umrah enter Ihram here (or anywhere outside the Haram). The Prophet ﷺ sent ‘A’ishah to begin her Umrah from here."
    },
    "timeline": [
      {
        "id": "masjid-aisha-tanim-e1",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "আয়েশা (রা.)-এর উমরাহ",
          "en": "‘A’ishah’s Umrah"
        },
        "text": {
          "bn": "নবী ﷺ আবদুর রহমান ইবনে আবু বকর (রা.)-কে আয়েশা (রা.)-কে তানঈম থেকে উমরাহ করাতে নির্দেশ দেন।",
          "en": "The Prophet ﷺ told ‘Abd al-Rahman ibn Abi Bakr to take ‘A’ishah to perform Umrah from al-Tan‘im."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1784",
            "url": "https://sunnah.com/bukhari:1784"
          }
        ]
      },
      {
        "id": "masjid-aisha-tanim-e2",
        "when": {
          "bn": "১০ হিজরি - বিদায় হজ",
          "en": "10 AH - Farewell Hajj"
        },
        "year": 632,
        "title": {
          "bn": "“এটি তোমার উমরাহর স্থান”",
          "en": "“This is the place for your Umrah”"
        },
        "text": {
          "bn": "ঋতুস্রাবের কারণে আয়েশা (রা.) উমরাহ পূর্ণ করতে পারেননি; হজের পর নবী ﷺ তাঁকে ভাইয়ের সাথে তানঈমে পাঠিয়ে বলেন: “এটি তোমার উমরাহর স্থান।”",
          "en": "Menstruating on arrival, ‘A’ishah could not complete her Umrah; after Hajj the Prophet ﷺ sent her with her brother to al-Tan‘im, saying: “This is the place for your Umrah.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1211a",
            "url": "https://sunnah.com/muslim:1211a"
          }
        ]
      },
      {
        "id": "masjid-aisha-tanim-e3",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "আজকের মসজিদ",
          "en": "The mosque today"
        },
        "text": {
          "bn": "পশ্চিম মক্কায়, মসজিদুল হারাম থেকে প্রায় ৭ কিমি; মক্কাবাসীরা ইহরামের জন্য ব্যবহার করেন, সারা বছর দর্শনার্থী আসেন।",
          "en": "In western Makkah, about 7 km from Masjid al-Haram; used by people in Makkah to enter Ihram, with visitors all year."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Visit Saudi",
            "url": "https://www.visitsaudi.com/en/makkah/attractions/masjid-altaniem-in-makkah"
          }
        ]
      },
      {
        "id": "masjid-aisha-tanim-e4",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "সুবিধা",
          "en": "Facilities"
        },
        "text": {
          "bn": "হিল এলাকায় (হারামের বাইরে); প্রায় ৬,০০০ বর্গমিটার, দুটি মিনার, ইহরামের জন্য অজু ও পোশাক বদলের ব্যবস্থা।",
          "en": "In al-Hill (outside the Haram); about 6,000 m², two minarets, washing and changing facilities for Ihram."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Masjid_at-Taneem"
          }
        ]
      }
    ],
    "media": [
      "t-masjid-aisha-tanim-1",
      "t-masjid-aisha-tanim-2"
    ],
    "visitor": {
      "text": {
        "bn": "ভিজিট সৌদি অনুযায়ী প্রতিদিন ২৪ ঘণ্টা খোলা, অজু ও পোশাক বদলের সুবিধাসহ। (ভিজিট সৌদির পাতায় আয়েশা রা.-এর উমরাহকে ৯ হিজরিতে বলা হয়েছে - বিদায় হজ ছিল ১০ হিজরিতে।) মক্কা থেকে বারবার উমরাহ করা নিয়ে আলেমদের আলোচনা আছে।",
        "en": "Visit Saudi lists it as open 24 hours daily, with ablution and changing facilities. (Visit Saudi dates ‘A’ishah’s Umrah to 9 AH - the Farewell Hajj was in 10 AH.) Scholars discuss repeated Umrahs from Makkah."
      },
      "sources": [
        {
          "title": "Visit Saudi",
          "url": "https://www.visitsaudi.com/en/makkah/attractions/masjid-altaniem-in-makkah"
        }
      ],
      "checked": "2026-10-17",
      "status": "verified"
    },
    "refs": [],
    "suggestMinutes": 45,
    "guideId": "ihram"
  },
  {
    "id": "jannat-al-mualla",
    "city": "makkah",
    "name": {
      "bn": "জান্নাতুল মুআল্লা",
      "en": "Jannat al-Mu‘alla"
    },
    "relation": "historical",
    "lat": 21.436991,
    "lng": 39.829213,
    "coordSource": {
      "label": "Wikidata P625 (Q42004)",
      "url": "https://www.wikidata.org/wiki/Q42004"
    },
    "intro": {
      "bn": "মসজিদুল হারামের উত্তরে মক্কার ঐতিহাসিক কবরস্থান, যেখানে খাদিজা (রা.) সমাহিত বলে বর্ণিত।",
      "en": "Makkah’s historic cemetery north of Masjid al-Haram, where Khadijah is reported to be buried."
    },
    "timeline": [
      {
        "id": "jannat-al-mualla-e1",
        "when": {
          "bn": "ইসলামপূর্ব যুগ থেকে",
          "en": "Since before Islam"
        },
        "year": null,
        "title": {
          "bn": "প্রাচীন কবরস্থান",
          "en": "An ancient cemetery"
        },
        "text": {
          "bn": "আল-হাজুন নামেও পরিচিত; ইসলামের আগে থেকেই কুরাইশ ও মক্কার পরিবারগুলোর কবরস্থান (উইকিপিডিয়া)।",
          "en": "Also called al-Hajun; a burial ground of Quraysh and Makkan families since before Islam (Wikipedia)."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Jannat_al-Mu%27alla"
          }
        ]
      },
      {
        "id": "jannat-al-mualla-e2",
        "when": {
          "bn": "প্রাথমিক যুগ",
          "en": "Early era"
        },
        "year": null,
        "title": {
          "bn": "যাঁরা সমাহিত",
          "en": "Those buried here"
        },
        "text": {
          "bn": "খাদিজা বিনতে খুয়াইলিদ, নবী ﷺ-এর পুত্র কাসিম, দাদা আবদুল মুত্তালিব, চাচা আবু তালিব, আসমা বিনতে আবু বকর ও আবদুল্লাহ ইবনুয যুবাইর (উইকিপিডিয়ার তালিকা)।",
          "en": "Khadijah bint Khuwaylid, the Prophet’s son al-Qasim, his grandfather ‘Abd al-Muttalib, his uncle Abu Talib, Asma’ bint Abi Bakr and ‘Abdullah ibn al-Zubayr (Wikipedia’s list)."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Jannat_al-Mu%27alla"
          }
        ]
      },
      {
        "id": "jannat-al-mualla-e3",
        "when": {
          "bn": "১৯২৫–২৬ খ্রি.",
          "en": "1925–26 CE"
        },
        "year": 1925,
        "title": {
          "bn": "গম্বুজ অপসারণ",
          "en": "Domes removed"
        },
        "text": {
          "bn": "কবরের ওপরের গম্বুজওয়ালা সমাধি (১৭ শতকে এভলিয়া চেলেবি ৭৫টি গুনেছিলেন) ১৯২৫–২৬ সালে সরিয়ে ফেলা হয় (উইকিপিডিয়া)।",
          "en": "The domed tombs over graves (Evliya Çelebi counted 75 in the 17th century) were removed in 1925–26 (Wikipedia)."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Jannat_al-Mu%27alla"
          }
        ]
      },
      {
        "id": "jannat-al-mualla-e4",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 630,
        "title": {
          "bn": "কবর জিয়ারতের সুন্নাহ",
          "en": "The Sunnah of visiting graves"
        },
        "text": {
          "bn": "“কবর জিয়ারত করো, কারণ তা মৃত্যুকে স্মরণ করায়।” - এটি সাধারণ সুন্নাহ, এই কবরস্থানের জন্য নির্দিষ্ট নয়।",
          "en": "“Visit the graves, for they remind you of death.” - a general Sunnah, not specific to this cemetery."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 976b",
            "url": "https://sunnah.com/muslim:976b"
          }
        ]
      }
    ],
    "media": [
      "t-jannat-al-mualla-1",
      "t-jannat-al-mualla-2"
    ],
    "visitor": {
      "text": {
        "bn": "অফিসিয়াল দর্শনার্থী নির্দেশনা (সময়, প্রবেশ) পাওয়া যায়নি। কবরবাসীদের জন্য দোয়া করুন; কবরের কাছে কিছু চাওয়া বা স্পর্শ করা থেকে বিরত থাকুন।",
        "en": "No official visitor guidance (hours, access) was found. Pray for those buried there; avoid asking anything of the graves or touching them."
      },
      "sources": [
        {
          "title": "Wikipedia - Jannat al-Mu‘alla (secondary)",
          "url": "https://en.wikipedia.org/wiki/Jannat_al-Mu%27alla"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [
      "d-graves"
    ],
    "suggestMinutes": 20
  }
]
