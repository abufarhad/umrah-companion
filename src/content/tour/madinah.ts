import type { TourSite } from '../types'

/** Madinah sites - coordinates from Wikidata (P625), facts and visitor notes verified 2026-10-17. Generated from research data; edit the copy here. */
export const madinahSites: TourSite[] = [
  {
    "id": "masjid-nabawi",
    "city": "madinah",
    "name": {
      "bn": "মসজিদে নববী",
      "en": "Masjid an-Nabawi"
    },
    "relation": "mosque-visit",
    "lat": 24.468333333333,
    "lng": 39.610833333333,
    "coordSource": {
      "label": "Wikidata P625",
      "url": "https://www.wikidata.org/wiki/Q486080"
    },
    "intro": {
      "bn": "নবী ﷺ-এর মসজিদ - হিজরতের পর নির্মিত, মদিনার কেন্দ্র। এখানে সালাতের বিশেষ ফজিলত আছে। মদিনা সফর উমরাহর অংশ নয়।",
      "en": "The Prophet’s ﷺ Mosque - built after the Hijrah, at the heart of Madinah. Prayer here carries special virtue. Visiting Madinah is not part of Umrah."
    },
    "timeline": [
      {
        "id": "masjid-nabawi-e1",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 632,
        "title": {
          "bn": "হাজার সালাতের চেয়ে উত্তম",
          "en": "Better than a thousand prayers"
        },
        "text": {
          "bn": "এখানে এক সালাত মসজিদুল হারাম ছাড়া অন্য মসজিদের হাজার সালাতের চেয়ে উত্তম।",
          "en": "One prayer here is better than a thousand elsewhere, except al-Masjid al-Haram."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1190",
            "url": "https://sunnah.com/bukhari:1190"
          }
        ]
      },
      {
        "id": "masjid-nabawi-e2",
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
          "bn": "যে তিন মসজিদের উদ্দেশ্যে ইবাদতের সফর বৈধ, তার একটি।",
          "en": "One of the three mosques to which one may travel for worship."
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
        "id": "masjid-nabawi-e3",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 632,
        "title": {
          "bn": "“তাকওয়ার ওপর প্রতিষ্ঠিত”",
          "en": "“Founded on piety”"
        },
        "text": {
          "bn": "মুসলিম ১৩৯৮-এ নবী ﷺ নিজের মসজিদের দিকে ইশারা করেছেন; অন্যরা ৯:১০৮ কে কুবার ক্ষেত্রে প্রয়োগ করেন।",
          "en": "In Muslim 1398 the Prophet ﷺ pointed to his own mosque; others apply 9:108 to Quba."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1398a",
            "url": "https://sunnah.com/muslim:1398a"
          }
        ]
      }
    ],
    "media": [
      "t-masjid-nabawi-1",
      "t-masjid-nabawi-2"
    ],
    "visitor": {
      "text": {
        "bn": "মসজিদে প্রবেশে বুকিং লাগে না। শুধু রওজায় সালাতের জন্য নুসুকে বিনামূল্যে পারমিট লাগে। খোলার সময়ের অফিসিয়াল তথ্য যাচাই করা যায়নি।",
        "en": "No booking is needed to enter the mosque. Only praying in the Rawdah needs a free Nusuk permit. Official opening hours were not verified."
      },
      "sources": [
        {
          "title": "Ministry of Hajj and Umrah",
          "url": "https://haj.gov.sa/en/E-Services/Permit-to-Visit-Al-Rawdah-Al-Sharifiyah-for-Men-Women"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [
      "h-nabawi-prayer",
      "h-three-mosques",
      "h-mosque-built"
    ],
    "suggestMinutes": 120,
    "historyId": "madinah",
    "guideId": "complete",
    "scene": {
      "id": "madinah",
      "stage": "m1994"
    }
  },
  {
    "id": "rawdah",
    "city": "madinah",
    "name": {
      "bn": "রওজা শরিফ",
      "en": "The Rawdah"
    },
    "relation": "mosque-visit",
    "lat": 24.468333333333,
    "lng": 39.610833333333,
    "coordSource": {
      "label": "No P625 on Q12187922; uses Prophet's Mosque coordinates (Wikidata Q486080 P625)",
      "url": "https://www.wikidata.org/wiki/Q12187922"
    },
    "intro": {
      "bn": "নবী ﷺ-এর ঘর ও মিম্বারের মাঝের অংশ - যাকে তিনি জান্নাতের একটি বাগান বলেছেন। এখানে সালাতের জন্য নুসুক অ্যাপে সময় বুক করতে হয়।",
      "en": "The area between the Prophet’s ﷺ house and his pulpit, which he called a garden of Paradise. Praying here requires a time slot booked in the Nusuk app."
    },
    "timeline": [
      {
        "id": "rawdah-e1",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 632,
        "title": {
          "bn": "জান্নাতের বাগান",
          "en": "A garden of Paradise"
        },
        "text": {
          "bn": "“আমার ঘর ও মিম্বারের মাঝখান জান্নাতের বাগানগুলোর একটি; আর আমার মিম্বার আমার হাউজের ওপর।”",
          "en": "“Between my house and my pulpit is one of the gardens of Paradise, and my pulpit is on my Fountain.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1196",
            "url": "https://sunnah.com/bukhari:1196"
          }
        ]
      },
      {
        "id": "rawdah-e2",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 632,
        "title": {
          "bn": "আরেক বর্ণনা",
          "en": "A second narration"
        },
        "text": {
          "bn": "আবদুল্লাহ ইবনে যায়েদ আল-মাযিনি (রা.)-ও একই কথা বর্ণনা করেছেন।",
          "en": "‘Abdullah ibn Zayd al-Mazini narrated the same."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1195",
            "url": "https://sunnah.com/bukhari:1195"
          }
        ]
      },
      {
        "id": "rawdah-e3",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "নুসুক পারমিট",
          "en": "Nusuk permit"
        },
        "text": {
          "bn": "পুরুষ ও নারীদের জন্য নুসুকের মাধ্যমে সময়ভিত্তিক পারমিট।",
          "en": "Time-slot permits for men and women via Nusuk."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Ministry of Hajj and Umrah",
            "url": "https://haj.gov.sa/en/E-Services/Permit-to-Visit-Al-Rawdah-Al-Sharifiyah-for-Men-Women"
          }
        ]
      }
    ],
    "media": [
      "t-rawdah-1",
      "t-rawdah-2"
    ],
    "visitor": {
      "text": {
        "bn": "নুসুক অ্যাপ বা ওয়েবসাইটে বিনামূল্যে পারমিট (পুরুষ/নারী) নিন: সাইন ইন করে তারিখ ও সময় বেছে নিন, পারমিট সাথে সাথে আসে। “বছরে একবার” নিয়মের সংবাদ আছে, কিন্তু অফিসিয়াল পাতায় (২০/০৯/২০২৬) তা নেই।",
        "en": "Book a free permit (men/women) in the Nusuk app or website: sign in, choose a date and time slot, and the permit is issued immediately. Press reports mention a “once a year” rule, but the official page (20/09/2026) does not state it."
      },
      "sources": [
        {
          "title": "Ministry of Hajj and Umrah",
          "url": "https://haj.gov.sa/en/E-Services/Permit-to-Visit-Al-Rawdah-Al-Sharifiyah-for-Men-Women"
        },
        {
          "title": "Gulf News",
          "url": "https://gulfnews.com/world/gulf/saudi/saudi-arabia-visit-to-al-rawda-al-sharifa-limited-to-once-a-year-1.100095002"
        }
      ],
      "checked": "2026-10-17",
      "status": "verified"
    },
    "refs": [
      "h-rawdah"
    ],
    "suggestMinutes": 30,
    "historyId": "madinah"
  },
  {
    "id": "baqi",
    "city": "madinah",
    "name": {
      "bn": "জান্নাতুল বাকি",
      "en": "Jannat al-Baqi"
    },
    "relation": "historical",
    "lat": 24.466944444444444,
    "lng": 39.61638888888889,
    "coordSource": {
      "label": "Wikidata P625",
      "url": "https://www.wikidata.org/wiki/Q154204"
    },
    "intro": {
      "bn": "মসজিদে নববীর পাশের প্রাচীন কবরস্থান, যেখানে নবী ﷺ-এর পরিবারের অনেক সদস্য ও বহু সাহাবি সমাহিত। নবী ﷺ এখানে গিয়ে কবরবাসীদের জন্য দোয়া করতেন।",
      "en": "The ancient cemetery beside the Prophet’s Mosque, where many of the Prophet’s ﷺ family and Companions are buried. The Prophet ﷺ would go there and pray for its people."
    },
    "timeline": [
      {
        "id": "baqi-e1",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 630,
        "title": {
          "bn": "নবী ﷺ-এর দোয়া",
          "en": "The Prophet’s ﷺ prayer"
        },
        "text": {
          "bn": "আয়েশা (রা.)-এর পালার রাতে শেষ রাতে নবী ﷺ বাকিতে গিয়ে সালাম দিতেন ও তাদের জন্য ক্ষমা চাইতেন।",
          "en": "On ‘A’ishah’s nights he would go to al-Baqi at the end of the night, greet its people and pray for their forgiveness."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 974a",
            "url": "https://sunnah.com/muslim:974a"
          }
        ]
      },
      {
        "id": "baqi-e2",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2026,
        "title": {
          "bn": "অবস্থান ও আয়তন",
          "en": "Location and size"
        },
        "text": {
          "bn": "মসজিদে নববীর দক্ষিণ-পূর্ব দেয়ালের পাশে; সম্প্রসারণের পর প্রায় ১,৮০,০০০ বর্গমিটার।",
          "en": "Beside the south-east wall of the Prophet’s Mosque; about 180,000 m² after expansions."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Saudipedia",
            "url": "https://saudipedia.com/en/al-baqi-cemetery"
          }
        ]
      },
      {
        "id": "baqi-e3",
        "when": {
          "bn": "প্রাথমিক ইসলামী যুগ",
          "en": "Early Islamic era"
        },
        "year": null,
        "title": {
          "bn": "যাঁরা সমাহিত",
          "en": "Those buried here"
        },
        "text": {
          "bn": "নবী ﷺ-এর স্ত্রীগণ (খাদিজা ও মায়মুনা রা. ছাড়া), তাঁর কন্যাগণ, পুত্র ইবরাহিম, চাচা আব্বাস, ফুফু সাফিয়্যা, হাসান ইবনে আলি ও খলিফা উসমান (রা.)।",
          "en": "The Prophet’s ﷺ wives (except Khadijah and Maymunah), his daughters, his son Ibrahim, his uncle al-‘Abbas, his aunt Safiyyah, al-Hasan ibn ‘Ali and the caliph ‘Uthman."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Saudipedia",
            "url": "https://saudipedia.com/en/al-baqi-cemetery"
          }
        ]
      },
      {
        "id": "baqi-e4",
        "when": {
          "bn": "প্রচলিত হিসাব",
          "en": "Traditional estimate"
        },
        "year": null,
        "title": {
          "bn": "প্রায় ১০,০০০ সাহাবি?",
          "en": "About 10,000 Companions?"
        },
        "text": {
          "bn": "ভিজিট মদিনার তথ্যে প্রায় ১০,০০০ সাহাবির কথা আছে - এটি প্রচলিত অনুমান, নিশ্চিত সংখ্যা নয়।",
          "en": "Visit Madinah mentions about 10,000 Companions - a traditional estimate, not a confirmed figure."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Visit Madinah",
            "url": "https://visitmadinahsa.com/sa-en/destinations/Baqi'-Al-Gharqad-"
          }
        ]
      }
    ],
    "media": [
      "t-baqi-1",
      "t-baqi-2"
    ],
    "visitor": {
      "text": {
        "bn": "ভিজিট মদিনার তথ্যমতে বাকি জিয়ারত পুরুষ ও শিশুদের জন্য উন্মুক্ত এবং ফরজ সালাতের পর যাওয়ার পরামর্শ দেওয়া হয়। নির্দিষ্ট সময়সূচির অফিসিয়াল তথ্য যাচাই করা যায়নি - স্থানীয়ভাবে জেনে নিন।",
        "en": "Visit Madinah says al-Baqi is open to men and children and recommends visiting after the obligatory prayers. No official timetable was verified - check locally."
      },
      "sources": [
        {
          "title": "Visit Madinah",
          "url": "https://visitmadinahsa.com/sa-en/destinations/Baqi'-Al-Gharqad-"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [
      "d-graves"
    ],
    "suggestMinutes": 30
  },
  {
    "id": "quba",
    "city": "madinah",
    "name": {
      "bn": "মসজিদে কুবা",
      "en": "Masjid Quba"
    },
    "relation": "mosque-visit",
    "lat": 24.439166666667,
    "lng": 39.617222222222,
    "coordSource": {
      "label": "Wikidata P625",
      "url": "https://www.wikidata.org/wiki/Q276569"
    },
    "intro": {
      "bn": "হিজরতের সময় নবী ﷺ মদিনায় পৌঁছার আগে কুবায় অবস্থান করেন। তিনি প্রতি শনিবার এখানে আসতেন। বাড়িতে অজু করে এখানে সালাতের সওয়াব একটি উমরাহর মতো।",
      "en": "During the Hijrah the Prophet ﷺ stayed at Quba before entering Madinah. He used to come here every Saturday. Praying here after making wudu at home carries a reward like an Umrah."
    },
    "timeline": [
      {
        "id": "quba-e1",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 630,
        "title": {
          "bn": "প্রতি শনিবার",
          "en": "Every Saturday"
        },
        "text": {
          "bn": "নবী ﷺ কখনো হেঁটে, কখনো বাহনে চড়ে প্রতি শনিবার কুবায় আসতেন; ইবনে উমর (রা.)-ও তা করতেন।",
          "en": "The Prophet ﷺ came to Quba every Saturday, walking or riding; Ibn ‘Umar did the same."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1193",
            "url": "https://sunnah.com/bukhari:1193"
          }
        ]
      },
      {
        "id": "quba-e2",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 630,
        "title": {
          "bn": "দুই রাকাত",
          "en": "Two rak‘ahs"
        },
        "text": {
          "bn": "তিনি সেখানে দুই রাকাত সালাত পড়তেন (নাফি-এর বর্ণনা)।",
          "en": "He would pray two rak‘ahs there (Nafi‘’s addition)."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1194",
            "url": "https://sunnah.com/bukhari:1194"
          }
        ]
      },
      {
        "id": "quba-e3",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 630,
        "title": {
          "bn": "উমরাহর মতো সওয়াব",
          "en": "A reward like an Umrah"
        },
        "text": {
          "bn": "বাড়িতে পবিত্র হয়ে এসে কুবায় এক সালাত পড়লে উমরাহর মতো সওয়াব - হাসান। এটি সওয়াবের তুলনা, উমরাহর বিকল্প নয়।",
          "en": "Purifying at home then praying at Quba brings a reward like an Umrah - hasan. A comparison of reward, not a substitute for Umrah."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sunan Ibn Majah 1412",
            "url": "https://sunnah.com/ibnmajah:1412"
          }
        ]
      },
      {
        "id": "quba-e4",
        "when": {
          "bn": "মতভেদ",
          "en": "Difference of opinion"
        },
        "year": null,
        "title": {
          "bn": "৯:১০৮ কোন মসজিদ?",
          "en": "Which mosque is 9:108?"
        },
        "text": {
          "bn": "ভিজিট সৌদি একে কুবা বলে; সহিহ মুসলিম ১৩৯৮-এ নবী ﷺ নিজের মসজিদকে বুঝিয়েছেন। আলেমদের মতভেদ আছে।",
          "en": "Visit Saudi applies it to Quba; in Sahih Muslim 1398 the Prophet ﷺ applied it to his own mosque. Scholars differ."
        },
        "kind": "disputed",
        "sources": [
          {
            "title": "Qur'an 9:108",
            "url": "https://quran.com/9/108"
          }
        ]
      },
      {
        "id": "quba-e5",
        "when": {
          "bn": "২০২২ খ্রি.",
          "en": "2022 CE"
        },
        "year": 2022,
        "title": {
          "bn": "সম্প্রসারণ ঘোষণা",
          "en": "Expansion announced"
        },
        "text": {
          "bn": "বাদশাহ সালমানের সম্প্রসারণে ৬৬,০০০ মুসল্লির ধারণক্ষমতার লক্ষ্য।",
          "en": "King Salman’s expansion targets capacity for 66,000 worshippers."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Arab News",
            "url": "https://arabnews.com/node/2059121"
          }
        ]
      }
    ],
    "media": [
      "t-quba-1",
      "t-quba-2"
    ],
    "visitor": {
      "text": {
        "bn": "ভিজিট সৌদির তথ্যমতে মসজিদে নববী থেকে প্রায় ৩ কিমি, প্রতিদিন ২৪ ঘণ্টা খোলা (পাতা হালনাগাদ ১৯ আগস্ট ২০২৬)। সম্প্রসারণের কাজ চলছে বলে সংবাদ আছে। হাদিস অনুসারে হোটেলে অজু করে যান।",
        "en": "Visit Saudi lists it about 3 km from the Prophet’s Mosque and open 24 hours daily (page updated 19 Aug 2026). Expansion works are reported. Following the hadith, make wudu at your hotel before going."
      },
      "sources": [
        {
          "title": "Visit Saudi",
          "url": "https://www.visitsaudi.com/en/madinah/attractions/masjid-quba-in-madinah"
        }
      ],
      "checked": "2026-10-17",
      "status": "verified"
    },
    "refs": [
      "h-quba",
      "q-9-108"
    ],
    "suggestMinutes": 45,
    "historyId": "madinah"
  },
  {
    "id": "uhud",
    "city": "madinah",
    "name": {
      "bn": "উহুদ পাহাড়",
      "en": "Mount Uhud"
    },
    "relation": "historical",
    "lat": 24.510277777778,
    "lng": 39.613888888889,
    "coordSource": {
      "label": "Wikidata P625 (first of two values; second is 24.52097, 39.62685)",
      "url": "https://www.wikidata.org/wiki/Q1436040"
    },
    "intro": {
      "bn": "মদিনার উত্তরের পাহাড়, যার পাদদেশে ৩ হিজরিতে উহুদের যুদ্ধ হয়। নবী ﷺ বলেছেন: “এটি এমন পাহাড় যা আমাদের ভালোবাসে এবং আমরা একে ভালোবাসি।”",
      "en": "The mountain north of Madinah at whose foot the Battle of Uhud took place in 3 AH. The Prophet ﷺ said: “This is a mountain that loves us and we love it.”"
    },
    "timeline": [
      {
        "id": "uhud-e1",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 630,
        "title": {
          "bn": "যে পাহাড় আমাদের ভালোবাসে",
          "en": "A mountain that loves us"
        },
        "text": {
          "bn": "“এটি এমন পাহাড় যা আমাদের ভালোবাসে এবং আমরা যাকে ভালোবাসি।”",
          "en": "“This is a mountain that loves us and is loved by us.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 4083",
            "url": "https://sunnah.com/bukhari:4083"
          }
        ]
      },
      {
        "id": "uhud-e2",
        "when": {
          "bn": "৯ হিজরি",
          "en": "9 AH"
        },
        "year": 630,
        "title": {
          "bn": "তাবুক থেকে ফেরার পথে",
          "en": "Returning from Tabuk"
        },
        "text": {
          "bn": "তাবুক থেকে ফিরে উহুদ দেখে নবী ﷺ একই কথা বলেন।",
          "en": "Returning from Tabuk and seeing Uhud, the Prophet ﷺ said the same."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1481",
            "url": "https://sunnah.com/bukhari:1481"
          }
        ]
      },
      {
        "id": "uhud-e3",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 630,
        "title": {
          "bn": "সহিহ মুসলিমে",
          "en": "In Sahih Muslim"
        },
        "text": {
          "bn": "“উহুদ এমন পাহাড় যা আমাদের ভালোবাসে এবং আমরা যাকে ভালোবাসি।”",
          "en": "“Uhud is a mountain which loves us and which we love.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih Muslim 1393a",
            "url": "https://sunnah.com/muslim:1393a"
          }
        ]
      },
      {
        "id": "uhud-e4",
        "when": {
          "bn": "৩ হিজরি",
          "en": "3 AH"
        },
        "year": 625,
        "title": {
          "bn": "যুদ্ধের প্রস্তুতি",
          "en": "Preparing for battle"
        },
        "text": {
          "bn": "কুরআন স্মরণ করায়: নবী ﷺ সকালে পরিবার ছেড়ে মুমিনদের যুদ্ধের অবস্থানে সাজিয়েছিলেন।",
          "en": "The Qur’an recalls the Prophet ﷺ leaving his family in the morning to post the believers at their stations."
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 3:121",
            "url": "https://quran.com/3/121"
          }
        ]
      },
      {
        "id": "uhud-e5",
        "when": {
          "bn": "৩ হিজরি",
          "en": "3 AH"
        },
        "year": 625,
        "title": {
          "bn": "শিক্ষা",
          "en": "The lesson"
        },
        "text": {
          "bn": "বিজয় দৃষ্টিগোচর হওয়ার পর নির্দেশ অমান্য ও মতবিরোধের কথা কুরআনে বর্ণিত।",
          "en": "The Qur’an describes losing heart, disputing the order and disobeying after victory was in sight."
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 3:152",
            "url": "https://quran.com/3/152"
          }
        ]
      }
    ],
    "media": [
      "t-uhud-1",
      "t-uhud-2"
    ],
    "visitor": {
      "text": {
        "bn": "গাড়ি, ট্যাক্সি বা হপ-অন হপ-অফ বাসে যাওয়া যায়। ভিজিট মদিনার ট্যুরে শহিদদের কবরস্থান ও তীরন্দাজদের পাহাড় অন্তর্ভুক্ত। খোলার সময় ও টিকিট যাচাই করা যায়নি।",
        "en": "Reachable by car, taxi or the hop-on hop-off bus. Visit Madinah tours include the Martyrs’ Cemetery and Archers’ Hill. Opening times and tickets were not verified."
      },
      "sources": [
        {
          "title": "Arab News",
          "url": "https://arabnews.com/node/2291671/saudi-arabia"
        },
        {
          "title": "Visit Madinah",
          "url": "https://visitmadinahsa.com/en/Details/65"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [],
    "suggestMinutes": 60
  },
  {
    "id": "uhud-martyrs",
    "city": "madinah",
    "name": {
      "bn": "উহুদের শহিদদের কবরস্থান ও সাইয়্যিদুশ শুহাদা মসজিদ",
      "en": "Uhud Martyrs’ Cemetery and Sayyid al-Shuhada Mosque"
    },
    "relation": "historical",
    "lat": 24.503516666666666,
    "lng": 39.612716666666664,
    "coordSource": {
      "label": "Wikidata P625 (Sayyid Ash-Shuhada Mosque, Q79354137). Cemetery item Q12244640 P625: 24.5038623, 39.6117246",
      "url": "https://www.wikidata.org/wiki/Q79354137"
    },
    "intro": {
      "bn": "উহুদের যুদ্ধে শহিদ সাহাবিদের কবরস্থান - যার মধ্যে নবী ﷺ-এর চাচা হামযা (রা.)। পাশে সাইয়্যিদুশ শুহাদা মসজিদ।",
      "en": "The resting place of the Companions martyred at Uhud - among them the Prophet’s ﷺ uncle Hamzah. Beside it stands the Sayyid al-Shuhada Mosque."
    },
    "timeline": [
      {
        "id": "uhud-martyrs-e1",
        "when": {
          "bn": "৩ হিজরি",
          "en": "3 AH"
        },
        "year": 625,
        "title": {
          "bn": "শহিদদের দাফন",
          "en": "Burying the martyrs"
        },
        "text": {
          "bn": "নবী ﷺ দুজন করে এক কাপড়ে দাফন করেন, যিনি বেশি কুরআন জানতেন তাকে আগে রাখেন; গোসল ও জানাজা ছাড়া রক্তসহ দাফন করেন এবং বলেন, “আমি কিয়ামতের দিন এদের সাক্ষী হব।”",
          "en": "The Prophet ﷺ buried them two to a sheet, placing first the one who knew more Qur’an; unwashed, with their blood, without funeral prayer, saying: “I will be a witness for them on the Day of Resurrection.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1347",
            "url": "https://sunnah.com/bukhari:1347"
          }
        ]
      },
      {
        "id": "uhud-martyrs-e2",
        "when": {
          "bn": "৩ হিজরি",
          "en": "3 AH"
        },
        "year": 625,
        "title": {
          "bn": "জাবির (রা.)-এর পিতা",
          "en": "Jabir’s father"
        },
        "text": {
          "bn": "জাবির (রা.) বলেন, উহুদে পিতা শহিদ হলে আমি কেঁদেছিলাম ও তাঁর মুখ খুলেছিলাম।",
          "en": "Jabir said: when my father was martyred at Uhud I wept and uncovered his face."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 4079",
            "url": "https://sunnah.com/bukhari:4079"
          }
        ]
      },
      {
        "id": "uhud-martyrs-e3",
        "when": {
          "bn": "৩ হিজরি",
          "en": "3 AH"
        },
        "year": 625,
        "title": {
          "bn": "হামযা (রা.)-এর শাহাদাত",
          "en": "The martyrdom of Hamzah"
        },
        "text": {
          "bn": "ওয়াহশি নিজেই উহুদে হামযা (রা.)-কে হত্যার বিবরণ দিয়েছেন (পরে তিনি ইসলাম গ্রহণ করেন)।",
          "en": "Wahshi himself recounts killing Hamzah at Uhud (he later accepted Islam)."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 4072",
            "url": "https://sunnah.com/bukhari:4072"
          }
        ]
      },
      {
        "id": "uhud-martyrs-e4",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2023,
        "title": {
          "bn": "সম্প্রসারিত মসজিদ",
          "en": "An expanded mosque"
        },
        "text": {
          "bn": "সাইয়্যিদুশ শুহাদা মসজিদ ১৫,০০০ মুসল্লির জন্য সম্প্রসারিত।",
          "en": "Sayyid al-Shuhada Mosque has been expanded for 15,000 worshippers."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Arab News",
            "url": "https://arabnews.com/node/2291671/saudi-arabia"
          }
        ]
      }
    ],
    "media": [
      "t-uhud-martyrs-1",
      "t-uhud-martyrs-2"
    ],
    "visitor": {
      "text": {
        "bn": "সংস্কারকৃত শহিদ চত্বর ও সম্প্রসারিত মসজিদের সংবাদ আছে (আরব নিউজ)। কবরস্থানের সময় ও নিয়মের অফিসিয়াল তথ্য যাচাই করা যায়নি।",
        "en": "Arab News reports a renovated Martyrs’ Square and an expanded mosque. No official visiting hours or rules for the cemetery were verified."
      },
      "sources": [
        {
          "title": "Arab News",
          "url": "https://arabnews.com/node/2291671/saudi-arabia"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [
      "d-graves"
    ],
    "suggestMinutes": 30
  },
  {
    "id": "jabal-rumat",
    "city": "madinah",
    "name": {
      "bn": "জাবালুর রুমাত (তীরন্দাজদের পাহাড়)",
      "en": "Jabal al-Rumat (Archers’ Hill)"
    },
    "relation": "historical",
    "lat": 24.50277778,
    "lng": 39.61166667,
    "coordSource": {
      "label": "Wikidata P625",
      "url": "https://www.wikidata.org/wiki/Q12204742"
    },
    "intro": {
      "bn": "উহুদের যুদ্ধে নবী ﷺ এই ছোট পাহাড়ে ৫০ জন তীরন্দাজ নিয়োগ করেছিলেন এবং যেকোনো অবস্থায় স্থান না ছাড়ার নির্দেশ দিয়েছিলেন।",
      "en": "At Uhud the Prophet ﷺ posted fifty archers on this low hill and ordered them not to leave their place whatever happened."
    },
    "timeline": [
      {
        "id": "jabal-rumat-e1",
        "when": {
          "bn": "৩ হিজরি",
          "en": "3 AH"
        },
        "year": 625,
        "title": {
          "bn": "পঞ্চাশ তীরন্দাজ",
          "en": "Fifty archers"
        },
        "text": {
          "bn": "আবদুল্লাহ ইবনে জুবাইর (রা.)-কে ৫০ জন তীরন্দাজের নেতা করা হয়; বেশিরভাগ গনিমত সংগ্রহে নেমে যায়।",
          "en": "‘Abdullah ibn Jubayr commanded fifty archers; most left to collect the spoils."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 3039",
            "url": "https://sunnah.com/bukhari:3039"
          }
        ]
      },
      {
        "id": "jabal-rumat-e2",
        "when": {
          "bn": "৩ হিজরি",
          "en": "3 AH"
        },
        "year": 625,
        "title": {
          "bn": "“এই স্থান ছেড়ো না”",
          "en": "“Do not leave this place”"
        },
        "text": {
          "bn": "বারা (রা.)-এর বর্ণনাতেও একই নির্দেশ।",
          "en": "Al-Bara’ gives a parallel account of the same order."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 4043",
            "url": "https://sunnah.com/bukhari:4043"
          }
        ]
      },
      {
        "id": "jabal-rumat-e3",
        "when": {
          "bn": "৩ হিজরি",
          "en": "3 AH"
        },
        "year": 625,
        "title": {
          "bn": "কুরআনের শিক্ষা",
          "en": "The Qur’an’s lesson"
        },
        "text": {
          "bn": "“তোমাদের পছন্দের জিনিস দেখানোর পর” মতবিরোধ ও অবাধ্যতার কথা।",
          "en": "The disputing and disobedience “after He had shown you what you love”."
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 3:152",
            "url": "https://quran.com/3/152"
          }
        ]
      },
      {
        "id": "jabal-rumat-e4",
        "when": {
          "bn": "আজ",
          "en": "Today"
        },
        "year": 2023,
        "title": {
          "bn": "আজ",
          "en": "Today"
        },
        "text": {
          "bn": "দর্শনার্থীরা পাহাড়ে উঠে সাইয়্যিদুশ শুহাদা মসজিদের দিকে তাকান।",
          "en": "Visitors climb for a view over the Sayyid al-Shuhada Mosque."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Arab News",
            "url": "https://arabnews.com/node/2291671/saudi-arabia"
          }
        ]
      }
    ],
    "media": [
      "t-jabal-rumat-1",
      "t-jabal-rumat-2"
    ],
    "visitor": {
      "text": {
        "bn": "শহিদ কবরস্থানের সামনের নিচু পাহাড়ে ওঠা যায় (আরব নিউজ, ২০২৩)। অফিসিয়াল নিয়ম বা সময় যাচাই করা যায়নি।",
        "en": "Visitors climb the low hill opposite the Martyrs’ Cemetery (Arab News, 2023). No official rules or hours were verified."
      },
      "sources": [
        {
          "title": "Arab News",
          "url": "https://arabnews.com/node/2291671/saudi-arabia"
        },
        {
          "title": "Visit Madinah",
          "url": "https://visitmadinahsa.com/en/Details/65"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [],
    "suggestMinutes": 20
  },
  {
    "id": "khandaq",
    "city": "madinah",
    "name": {
      "bn": "খন্দকের যুদ্ধের স্থান - সাত মসজিদ",
      "en": "Site of the Battle of the Trench - the Seven Mosques"
    },
    "relation": "historical",
    "lat": 24.476747222222222,
    "lng": 39.59580833333333,
    "coordSource": {
      "label": "Wikidata P625 (The Seven Mosques). Masjid al-Fath has no Medina Wikidata item. Battle item Q826083 has only approximate coordinates (24.4667",
      "url": "https://www.wikidata.org/wiki/Q12192912"
    },
    "intro": {
      "bn": "৫ হিজরিতে সম্মিলিত বাহিনী মদিনা ঘেরাও করলে মুসলমানরা পরিখা (খন্দক) খনন করে। সালা পাহাড়ের পাদদেশের এই এলাকায় ছোট ছোট মসজিদ আছে।",
      "en": "In 5 AH, when the confederate armies besieged Madinah, the Muslims dug a trench (khandaq). Small mosques stand in this area at the foot of Mount Sal‘."
    },
    "timeline": [
      {
        "id": "khandaq-e1",
        "when": {
          "bn": "৫ হিজরি",
          "en": "5 AH"
        },
        "year": 627,
        "title": {
          "bn": "আল্লাহর অনুগ্রহ",
          "en": "Allah’s favour"
        },
        "text": {
          "bn": "“যখন বাহিনী তোমাদের ওপর এসেছিল, আমি তাদের ওপর বাতাস ও অদৃশ্য বাহিনী পাঠিয়েছিলাম।”",
          "en": "“When armies came at you, We sent upon them a wind and armies you did not see.”"
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 33:9",
            "url": "https://quran.com/33/9"
          }
        ]
      },
      {
        "id": "khandaq-e2",
        "when": {
          "bn": "৫ হিজরি",
          "en": "5 AH"
        },
        "year": 627,
        "title": {
          "bn": "ভয়ের মুহূর্ত",
          "en": "A moment of fear"
        },
        "text": {
          "bn": "“যখন তারা ওপর ও নিচ থেকে এসেছিল, চোখ ঘুরে গিয়েছিল এবং প্রাণ কণ্ঠাগত হয়েছিল।”",
          "en": "“When they came at you from above and below, when eyes shifted and hearts reached the throats.”"
        },
        "kind": "quran",
        "sources": [
          {
            "title": "Qur'an 33:10",
            "url": "https://quran.com/33/10"
          }
        ]
      },
      {
        "id": "khandaq-e3",
        "when": {
          "bn": "৫ হিজরি",
          "en": "5 AH"
        },
        "year": 627,
        "title": {
          "bn": "পরিখা খনন",
          "en": "Digging the trench"
        },
        "text": {
          "bn": "শীতের সকালে মুহাজির ও আনসাররা খনন করছিলেন; নবী ﷺ দোয়া করেন: “হে আল্লাহ! আখিরাতের জীবনই আসল জীবন; আনসার ও মুহাজিরদের ক্ষমা করো।”",
          "en": "On a cold morning the Emigrants and Ansar dug; the Prophet ﷺ prayed: “O Allah, the real life is the life of the Hereafter; forgive the Ansar and the Emigrants.”"
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 4099",
            "url": "https://sunnah.com/bukhari:4099"
          }
        ]
      },
      {
        "id": "khandaq-e4",
        "when": {
          "bn": "৫ হিজরি",
          "en": "5 AH"
        },
        "year": 627,
        "title": {
          "bn": "মাটি বহন",
          "en": "Carrying the earth"
        },
        "text": {
          "bn": "তাঁরা পিঠে মাটি বহন করতে করতে অঙ্গীকারের কবিতা বলছিলেন; নবী ﷺ জবাব দিচ্ছিলেন।",
          "en": "They carried earth on their backs chanting their pledge, and the Prophet ﷺ answered them."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 4100",
            "url": "https://sunnah.com/bukhari:4100"
          }
        ]
      },
      {
        "id": "khandaq-e5",
        "when": {
          "bn": "৫ হিজরি",
          "en": "5 AH"
        },
        "year": 627,
        "title": {
          "bn": "শক্ত পাথর",
          "en": "The hard rock"
        },
        "text": {
          "bn": "জাবির (রা.): একটি শক্ত পাথর বাধা হয়ে দাঁড়ালে ক্ষুধায় পেটে পাথর বাঁধা অবস্থায় নবী ﷺ আঘাত করে তা চূর্ণ করেন।",
          "en": "Jabir: a hard rock blocked the trench; the Prophet ﷺ, a stone tied to his belly from hunger, struck it until it crumbled."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 4101",
            "url": "https://sunnah.com/bukhari:4101"
          }
        ]
      },
      {
        "id": "khandaq-e6",
        "when": {
          "bn": "প্রচলিত বর্ণনা",
          "en": "Local tradition"
        },
        "year": null,
        "title": {
          "bn": "মসজিদগুলোর অবস্থান",
          "en": "Where the mosques stand"
        },
        "text": {
          "bn": "মসজিদুল ফাতহ পরিখার স্থানে; তবে ছোট মসজিদগুলো যুদ্ধের নির্দিষ্ট স্থান চিহ্নিত করে - এটি স্থানীয় ঐতিহ্য, সহিহ হাদিসে প্রমাণিত নয়।",
          "en": "Masjid al-Fath stands on the trench site; that the small mosques mark exact places from the battle is local tradition, not established by sahih hadith."
        },
        "kind": "disputed",
        "sources": [
          {
            "title": "Arab News",
            "url": "https://arabnews.com/node/2291671/saudi-arabia"
          }
        ]
      }
    ],
    "media": [
      "t-khandaq-1",
      "t-khandaq-2"
    ],
    "visitor": {
      "text": {
        "bn": "অফিসিয়াল শহর-ভ্রমণে (ভিজিট মদিনা) অন্তর্ভুক্ত। সময়সূচি যাচাই করা যায়নি। মসজিদুল ফাতহের আলাদা উইকিডেটা আইটেম নেই - অবস্থান “সাত মসজিদ” আইটেম থেকে।",
        "en": "Included in official city tours (Visit Madinah). Hours were not verified. Masjid al-Fath has no Wikidata item of its own - the location is from the “Seven Mosques” item."
      },
      "sources": [
        {
          "title": "Visit Madinah",
          "url": "https://visitmadinahsa.com/en/Details/65"
        },
        {
          "title": "Arab News",
          "url": "https://arabnews.com/node/2291671/saudi-arabia"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [],
    "suggestMinutes": 30
  },
  {
    "id": "qiblatayn",
    "city": "madinah",
    "name": {
      "bn": "মসজিদুল কিবলাতাইন",
      "en": "Masjid al-Qiblatayn"
    },
    "relation": "mosque-visit",
    "lat": 24.4841,
    "lng": 39.5789,
    "coordSource": {
      "label": "Wikidata P625",
      "url": "https://www.wikidata.org/wiki/Q2334553"
    },
    "intro": {
      "bn": "“দুই কিবলার মসজিদ” - প্রচলিত বর্ণনা অনুযায়ী এখানে সালাতের মধ্যে কিবলা বায়তুল মাকদিস থেকে কাবার দিকে পরিবর্তনের সংবাদ পৌঁছেছিল।",
      "en": "“The Mosque of the Two Qiblahs” - by tradition, where news of the change of qiblah from Jerusalem to the Kaaba reached worshippers mid-prayer."
    },
    "timeline": [
      {
        "id": "qiblatayn-e1",
        "when": {
          "bn": "২ হিজরি",
          "en": "2 AH"
        },
        "year": 624,
        "title": {
          "bn": "কিবলা পরিবর্তনের আয়াত",
          "en": "The verse of the qiblah"
        },
        "text": {
          "bn": "“অতএব তোমার মুখ মসজিদুল হারামের দিকে ফেরাও।”",
          "en": "“So turn your face towards al-Masjid al-Haram.”"
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
        "id": "qiblatayn-e2",
        "when": {
          "bn": "২ হিজরি",
          "en": "2 AH"
        },
        "year": 624,
        "title": {
          "bn": "রুকুরত অবস্থায় ঘুরে যাওয়া",
          "en": "Turning while bowing"
        },
        "text": {
          "bn": "১৬–১৭ মাস বায়তুল মাকদিসের দিকে সালাতের পর আয়াত নাজিল হয়; একজন অন্য মসজিদে রুকুরতদের খবর দিলে তারা কাবার দিকে ঘুরে যান।",
          "en": "After 16–17 months facing Bayt al-Maqdis the verse came; a man told people bowing in another mosque, and they turned to the Kaaba."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 399",
            "url": "https://sunnah.com/bukhari:399"
          }
        ]
      },
      {
        "id": "qiblatayn-e3",
        "when": {
          "bn": "২ হিজরি",
          "en": "2 AH"
        },
        "year": 624,
        "title": {
          "bn": "আসরের সালাত",
          "en": "The ‘Asr prayer"
        },
        "text": {
          "bn": "একই ঘটনা: নবী ﷺ কাবামুখী আসর পড়েন এবং একজন অন্য মসজিদে খবর দেন।",
          "en": "The same event: the Prophet ﷺ prayed ‘Asr facing the Kaaba and a man informed another mosque."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 4486",
            "url": "https://sunnah.com/bukhari:4486"
          }
        ]
      },
      {
        "id": "qiblatayn-e4",
        "when": {
          "bn": "২ হিজরি",
          "en": "2 AH"
        },
        "year": 624,
        "title": {
          "bn": "কুবায় ফজরে",
          "en": "Quba at Fajr"
        },
        "text": {
          "bn": "আলাদা বর্ণনা: কুবাবাসীরা ফজরে খবর পেয়ে কাবার দিকে ঘুরে যান।",
          "en": "A separate report: the people of Quba were told during Fajr and turned to the Kaaba."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 403",
            "url": "https://sunnah.com/bukhari:403"
          }
        ]
      },
      {
        "id": "qiblatayn-e5",
        "when": {
          "bn": "প্রচলিত বর্ণনা",
          "en": "Traditional report"
        },
        "year": null,
        "title": {
          "bn": "কোন মসজিদ?",
          "en": "Which mosque?"
        },
        "text": {
          "bn": "সহিহ বর্ণনায় মসজিদের নাম নেই; বনু সালিমার মসজিদ (আজকের কিবলাতাইন) হিসেবে চিহ্নিত করা প্রচলিত বর্ণনা।",
          "en": "The sahih reports do not name the mosque; identifying it as the Banu Salimah mosque (today’s Qiblatayn) is a traditional report."
        },
        "kind": "disputed",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Masjid_al-Qiblatayn"
          }
        ]
      }
    ],
    "media": [
      "t-qiblatayn-1",
      "t-qiblatayn-2"
    ],
    "visitor": {
      "text": {
        "bn": "অফিসিয়াল শহর-ভ্রমণে অন্তর্ভুক্ত; সম্প্রসারণ কাজের সংবাদ (২০২৩)। খোলার সময় যাচাই করা যায়নি।",
        "en": "Included in official city tours; expansion works were reported (2023). Opening hours were not verified."
      },
      "sources": [
        {
          "title": "Visit Saudi",
          "url": "https://www.visitsaudi.com/en/madinah/attractions/masjid-al-qiblatain-in-madinah"
        },
        {
          "title": "Arab News",
          "url": "https://arabnews.com/node/2291671/saudi-arabia"
        }
      ],
      "checked": "2026-10-17",
      "status": "unverified"
    },
    "refs": [
      "q-2-144"
    ],
    "suggestMinutes": 30
  },
  {
    "id": "dhul-hulayfah",
    "city": "madinah",
    "name": {
      "bn": "যুল-হুলাইফা - মসজিদুল মিকাত",
      "en": "Dhul-Hulayfah - Masjid al-Miqat"
    },
    "relation": "miqat",
    "lat": 24.41361111,
    "lng": 39.54277778,
    "coordSource": {
      "label": "Wikidata P625",
      "url": "https://www.wikidata.org/wiki/Q6783320"
    },
    "intro": {
      "bn": "মদিনা থেকে মক্কাগামীদের মিকাত (আবইয়ার আলি)। মদিনা আগে গেলে এখানে ইহরাম বাঁধতে হয় - উমরাহর সাথে সরাসরি সম্পর্কিত একমাত্র মদিনার স্থান।",
      "en": "The Miqat for those travelling from Madinah to Makkah (Abyar ‘Ali). If you visit Madinah first, you enter Ihram here - the one Madinah site directly tied to Umrah."
    },
    "timeline": [
      {
        "id": "dhul-hulayfah-e1",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 631,
        "title": {
          "bn": "মদিনাবাসীর মিকাত",
          "en": "The Miqat of Madinah"
        },
        "text": {
          "bn": "নবী ﷺ যুল-হুলাইফাকে মদিনাবাসী ও এ পথে আগত সকল হজ/উমরাহকারীর মিকাত নির্ধারণ করেন।",
          "en": "The Prophet ﷺ set Dhul-Hulayfah as the Miqat for Madinah and for all who pass it intending Hajj or Umrah."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1524",
            "url": "https://sunnah.com/bukhari:1524"
          }
        ]
      },
      {
        "id": "dhul-hulayfah-e2",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 631,
        "title": {
          "bn": "“মদিনাবাসীর মিকাত যুল-হুলাইফা”",
          "en": "“The Miqat of Madinah is Dhul-Hulayfah”"
        },
        "text": {
          "bn": "ইবনে উমর (রা.)-এর বর্ণনা।",
          "en": "Narrated by Ibn ‘Umar."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1528",
            "url": "https://sunnah.com/bukhari:1528"
          }
        ]
      },
      {
        "id": "dhul-hulayfah-e3",
        "when": {
          "bn": "১০ হিজরি",
          "en": "10 AH"
        },
        "year": 632,
        "title": {
          "bn": "বাতহায় সালাত",
          "en": "Prayer at al-Batha’"
        },
        "text": {
          "bn": "নবী ﷺ যুল-হুলাইফার বাতহায় উট বসিয়ে সালাত পড়েন; ইবনে উমর (রা.)-ও তা করতেন।",
          "en": "The Prophet ﷺ made his camel kneel at al-Batha’ in Dhul-Hulayfah and prayed; Ibn ‘Umar did the same."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1532",
            "url": "https://sunnah.com/bukhari:1532"
          }
        ]
      },
      {
        "id": "dhul-hulayfah-e4",
        "when": {
          "bn": "১০ হিজরি",
          "en": "10 AH"
        },
        "year": 632,
        "title": {
          "bn": "বরকতময় উপত্যকা",
          "en": "The blessed valley"
        },
        "text": {
          "bn": "আকিক উপত্যকায় নবী ﷺ-কে “এই বরকতময় উপত্যকায়” সালাত পড়তে ও ইহরাম বাঁধতে বলা হয়।",
          "en": "In the valley of al-‘Aqiq the Prophet ﷺ was told to pray in “this blessed valley” and enter Ihram."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1534",
            "url": "https://sunnah.com/bukhari:1534"
          }
        ]
      },
      {
        "id": "dhul-hulayfah-e5",
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
          "bn": "মসজিদে নববী থেকে দক্ষিণ-পশ্চিমে আকিক উপত্যকার পশ্চিমে; দূরত্ব নিয়ে সূত্রভেদে প্রায় ৭–১৪ কিমি।",
          "en": "South-west of the Prophet’s Mosque, west of Wadi al-‘Aqiq; sources give roughly 7–14 km."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Wikipedia (secondary)",
            "url": "https://en.wikipedia.org/wiki/Miqat_Dhu_al-Hulayfah"
          }
        ]
      }
    ],
    "media": [
      "t-dhul-hulayfah-1",
      "t-dhul-hulayfah-2"
    ],
    "visitor": {
      "text": {
        "bn": "মদিনা থেকে উমরাহর জন্য মক্কাগামী সবাইকে এখানে বা এর আগে ইহরাম বাঁধতে হবে। ট্রেনে গেলে মদিনায় ওঠার আগে ইহরামের কাপড় পরুন এবং মিকাত পার হওয়ার আগে নিয়ত করুন। সুবিধা বা সময়ের অফিসিয়াল পাতা যাচাই করা যায়নি।",
        "en": "Everyone travelling from Madinah to Makkah for Umrah must enter Ihram here or before. By train, dress before boarding in Madinah and make the intention before passing the Miqat. No official facilities or hours page was verified."
      },
      "sources": [
        {
          "title": "Sahih al-Bukhari 1524",
          "url": "https://sunnah.com/bukhari:1524"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [
      "h-mawaqit",
      "h-talbiyah-dhul-hulayfah"
    ],
    "suggestMinutes": 45,
    "historyId": "miqat",
    "guideId": "ihram"
  },
  {
    "id": "ghamamah",
    "city": "madinah",
    "name": {
      "bn": "মসজিদুল গামামাহ",
      "en": "Masjid al-Ghamamah"
    },
    "relation": "mosque-visit",
    "lat": 24.465833333333332,
    "lng": 39.606944444444444,
    "coordSource": {
      "label": "Wikidata P625",
      "url": "https://www.wikidata.org/wiki/Q12242769"
    },
    "intro": {
      "bn": "মসজিদে নববীর কাছে, যেখানে ঐতিহ্যগতভাবে নবী ﷺ-এর ঈদ ও বৃষ্টির সালাতের মুসাল্লা (খোলা ময়দান) ছিল বলে বলা হয়।",
      "en": "Close to the Prophet’s Mosque, on the site traditionally identified as the Musalla (open prayer ground) where the Prophet ﷺ led Eid and rain prayers."
    },
    "timeline": [
      {
        "id": "ghamamah-e1",
        "when": {
          "bn": "৯ হিজরি",
          "en": "9 AH"
        },
        "year": 630,
        "title": {
          "bn": "নাজাশির জানাজা",
          "en": "The funeral prayer for the Negus"
        },
        "text": {
          "bn": "নবী ﷺ নাজাশির মৃত্যুর খবর দিয়ে মুসাল্লায় গিয়ে সারিবদ্ধ করে চার তাকবিরে জানাজা পড়েন। হাদিসে “মুসাল্লা” আছে; এই স্থানের সাথে মেলানো ঐতিহ্যগত।",
          "en": "The Prophet ﷺ announced the Negus’s death, went to the Musalla, lined the people up and prayed with four takbirs. The hadith says “the Musalla”; identifying it with this site is traditional."
        },
        "kind": "hadith",
        "sources": [
          {
            "title": "Sahih al-Bukhari 1245",
            "url": "https://sunnah.com/bukhari:1245"
          }
        ]
      },
      {
        "id": "ghamamah-e2",
        "when": {
          "bn": "নবী ﷺ-এর যুগ",
          "en": "Time of the Prophet ﷺ"
        },
        "year": 630,
        "title": {
          "bn": "ঈদ ও বৃষ্টির সালাত",
          "en": "Eid and rain prayers"
        },
        "text": {
          "bn": "ভিজিট সৌদির তথ্যমতে স্থানটি নবী ﷺ-এর শেষ জীবনের ঈদ ও বৃষ্টির সালাতের মুসাল্লা ছিল।",
          "en": "Visit Saudi says the site was the Musalla where the Prophet ﷺ led Eid and rain prayers late in his life."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Visit Saudi",
            "url": "https://www.visitsaudi.com/en/madinah/attractions/masjid-alghamamah-in-madinah"
          }
        ]
      },
      {
        "id": "ghamamah-e3",
        "when": {
          "bn": "বর্ণনা",
          "en": "Narration"
        },
        "year": null,
        "title": {
          "bn": "“মেঘ”-এর নাম",
          "en": "The name “the cloud”"
        },
        "text": {
          "bn": "এখানে সালাতের সময় মেঘ ছায়া দিয়েছিল - এই বর্ণনার কোনো সূত্র ভিজিট সৌদি উল্লেখ করেনি।",
          "en": "That a cloud shaded the Prophet ﷺ here while he prayed - Visit Saudi gives no source for this narration."
        },
        "kind": "disputed",
        "sources": [
          {
            "title": "Visit Saudi",
            "url": "https://www.visitsaudi.com/en/madinah/attractions/masjid-alghamamah-in-madinah"
          }
        ]
      },
      {
        "id": "ghamamah-e4",
        "when": {
          "bn": "১ম শতাব্দী হিজরি",
          "en": "1st century AH"
        },
        "year": 710,
        "title": {
          "bn": "প্রথম নির্মাণ",
          "en": "First built"
        },
        "text": {
          "bn": "মদিনার গভর্নর থাকাকালে উমর ইবনে আবদুল আজিজ প্রথম নির্মাণ করেন; পরে সৌদি সরকার সংস্কার করে।",
          "en": "First built by ‘Umar ibn ‘Abd al-‘Aziz as governor of Madinah; later restored by the Saudi government."
        },
        "kind": "documented",
        "sources": [
          {
            "title": "Visit Saudi",
            "url": "https://www.visitsaudi.com/en/madinah/attractions/masjid-alghamamah-in-madinah"
          }
        ]
      }
    ],
    "media": [
      "t-ghamamah-1",
      "t-ghamamah-2"
    ],
    "visitor": {
      "text": {
        "bn": "মসজিদে নববী থেকে প্রায় ২০০ মিটার। ভিজিট সৌদির তথ্যমতে প্রতিদিন সকাল ১০টা থেকে রাত ১২টা খোলা, জামাতে ফরজ সালাত হয় (পাতা হালনাগাদ ২১ মে ২০২৫)।",
        "en": "About 200 m from the Prophet’s Mosque. Visit Saudi lists it as open daily 10:00–24:00 with congregational prayers (page updated 21 May 2025)."
      },
      "sources": [
        {
          "title": "Visit Saudi",
          "url": "https://www.visitsaudi.com/en/madinah/attractions/masjid-alghamamah-in-madinah"
        }
      ],
      "checked": "2026-10-17",
      "status": "partial"
    },
    "refs": [],
    "suggestMinutes": 15
  }
]
