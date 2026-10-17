import type { MediaItem } from './types'
import { madinahMedia } from './tour/madinah-media'
import { makkahMedia } from './tour/makkah-media'

/**
 * Externally sourced media. Photos come from Wikimedia Commons (licence and
 * author verified via the Commons API on 2026-10-17); videos are embeds from
 * the Ministry of Hajj and Umrah's official YouTube channel (@SaudiMOHU,
 * linked from haj.gov.sa). Nothing is re-hosted. Original SVG illustrations
 * and animations live in src/components/animations and are listed in
 * `illustrations` below.
 */
export const media: (MediaItem & { duration?: number; date?: string })[] = [
  {
    "id": "p-kaaba-1",
    "type": "photo",
    "title": {
      "bn": "কাবা ও তাওয়াফ",
      "en": "The Kaaba and Tawaf"
    },
    "caption": {
      "bn": "মসজিদুল হারামে কাবার চারপাশে তাওয়াফরত মুসল্লিরা - কাবা বাম দিকে রেখে ঘড়ির কাঁটার বিপরীত দিকে চলা হয়।",
      "en": "Pilgrims circling the Kaaba in Masjid al-Haram - moving anticlockwise with the Kaaba on their left."
    },
    "alt": {
      "bn": "কাবা ও তাওয়াফ - আলোকচিত্র",
      "en": "The Kaaba and Tawaf - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/Tawaf_of_the_Kaaba.jpg/960px-Tawaf_of_the_Kaaba.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "omar_chatriwala",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Tawaf_of_the_Kaaba.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "tawaf",
      "makkah"
    ]
  },
  {
    "id": "p-kaaba-2",
    "type": "photo",
    "title": {
      "bn": "কাবা ও তাওয়াফ",
      "en": "The Kaaba and Tawaf"
    },
    "caption": {
      "bn": "মসজিদুল হারামে কাবার চারপাশে তাওয়াফরত মুসল্লিরা - কাবা বাম দিকে রেখে ঘড়ির কাঁটার বিপরীত দিকে চলা হয়।",
      "en": "Pilgrims circling the Kaaba in Masjid al-Haram - moving anticlockwise with the Kaaba on their left."
    },
    "alt": {
      "bn": "কাবা ও তাওয়াফ - আলোকচিত্র",
      "en": "The Kaaba and Tawaf - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b3/The_Kaaba_during_Hajj_-_edited.jpg/960px-The_Kaaba_during_Hajj_-_edited.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Adli Wahid Minor modifications made by Basile Morin, from the original version.",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:The_Kaaba_during_Hajj_-_edited.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "tawaf",
      "makkah"
    ]
  },
  {
    "id": "p-black-stone-1",
    "type": "photo",
    "title": {
      "bn": "হাজরে আসওয়াদ",
      "en": "The Black Stone"
    },
    "caption": {
      "bn": "কাবার পূর্ব কোণে রুপালি ফ্রেমে বাঁধানো হাজরে আসওয়াদ - প্রতিটি তাওয়াফ চক্কর এখান থেকে শুরু ও শেষ হয়।",
      "en": "The Black Stone in its silver frame on the eastern corner of the Kaaba - every Tawaf circuit starts and ends here."
    },
    "alt": {
      "bn": "হাজরে আসওয়াদ - আলোকচিত্র",
      "en": "The Black Stone - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/62/Black_stone.jpg/960px-Black_stone.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Saudi Press Agency (SPA)",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Black_stone.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "tawaf"
    ]
  },
  {
    "id": "p-black-stone-2",
    "type": "photo",
    "title": {
      "bn": "হাজরে আসওয়াদ",
      "en": "The Black Stone"
    },
    "caption": {
      "bn": "কাবার পূর্ব কোণে রুপালি ফ্রেমে বাঁধানো হাজরে আসওয়াদ - প্রতিটি তাওয়াফ চক্কর এখান থেকে শুরু ও শেষ হয়।",
      "en": "The Black Stone in its silver frame on the eastern corner of the Kaaba - every Tawaf circuit starts and ends here."
    },
    "alt": {
      "bn": "হাজরে আসওয়াদ - আলোকচিত্র",
      "en": "The Black Stone - photograph"
    },
    "src": "https://upload.wikimedia.org/wikipedia/commons/f/f3/The_Blackstone.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "credit": {
      "author": "Amerrycan Muslim",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:The_Blackstone.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "tawaf"
    ]
  },
  {
    "id": "p-maqam-1",
    "type": "photo",
    "title": {
      "bn": "মাকামে ইবরাহিম",
      "en": "The Station of Ibrahim"
    },
    "caption": {
      "bn": "কাচ ও ধাতব আবরণে ঘেরা মাকামে ইবরাহিম। তাওয়াফের পর সম্ভব হলে এর পেছনে দুই রাকাত সালাত পড়া হয়।",
      "en": "The Station of Ibrahim in its glass and metal enclosure. After Tawaf, two rak'ahs are prayed behind it where possible."
    },
    "alt": {
      "bn": "মাকামে ইবরাহিম - আলোকচিত্র",
      "en": "The Station of Ibrahim - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/Maqam_Ibrahim%2C_Makkah.jpg/960px-Maqam_Ibrahim%2C_Makkah.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "معتز توفيق اغبارية",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Maqam_Ibrahim,_Makkah.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "tawaf",
      "prayer"
    ]
  },
  {
    "id": "p-maqam-2",
    "type": "photo",
    "title": {
      "bn": "মাকামে ইবরাহিম",
      "en": "The Station of Ibrahim"
    },
    "caption": {
      "bn": "কাচ ও ধাতব আবরণে ঘেরা মাকামে ইবরাহিম। তাওয়াফের পর সম্ভব হলে এর পেছনে দুই রাকাত সালাত পড়া হয়।",
      "en": "The Station of Ibrahim in its glass and metal enclosure. After Tawaf, two rak'ahs are prayed behind it where possible."
    },
    "alt": {
      "bn": "মাকামে ইবরাহিম - আলোকচিত্র",
      "en": "The Station of Ibrahim - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/94/Maqam_Ibrahim_2008.jpg/960px-Maqam_Ibrahim_2008.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Ibrahim.ID",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Maqam_Ibrahim_2008.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "tawaf",
      "prayer"
    ]
  },
  {
    "id": "p-haram-1",
    "type": "photo",
    "title": {
      "bn": "মসজিদুল হারাম",
      "en": "Masjid al-Haram"
    },
    "caption": {
      "bn": "মক্কার মসজিদুল হারাম - ডান পা দিয়ে প্রবেশ করুন এবং প্রবেশের দোয়া পড়ুন।",
      "en": "Masjid al-Haram in Makkah - enter with the right foot and say the supplication for entering."
    },
    "alt": {
      "bn": "মসজিদুল হারাম - আলোকচিত্র",
      "en": "Masjid al-Haram - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0d/Masjid_al_Haram_Exterior.jpg/960px-Masjid_al_Haram_Exterior.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "King Eliot",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Masjid_al_Haram_Exterior.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "makkah",
      "entry"
    ]
  },
  {
    "id": "p-haram-2",
    "type": "photo",
    "title": {
      "bn": "মসজিদুল হারাম",
      "en": "Masjid al-Haram"
    },
    "caption": {
      "bn": "মক্কার মসজিদুল হারাম - ডান পা দিয়ে প্রবেশ করুন এবং প্রবেশের দোয়া পড়ুন।",
      "en": "Masjid al-Haram in Makkah - enter with the right foot and say the supplication for entering."
    },
    "alt": {
      "bn": "মসজিদুল হারাম - আলোকচিত্র",
      "en": "Masjid al-Haram - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Masjid_al-%E1%B8%A4aram_1.jpg/960px-Masjid_al-%E1%B8%A4aram_1.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Tahir mq",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Masjid_al-%E1%B8%A4aram_1.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "makkah",
      "entry"
    ]
  },
  {
    "id": "p-masa-1",
    "type": "photo",
    "title": {
      "bn": "মাসআ - সাফা ও মারওয়ার মাঝে",
      "en": "The Mas'a - between Safa and Marwah"
    },
    "caption": {
      "bn": "সাফা ও মারওয়ার মাঝের শীতাতপ নিয়ন্ত্রিত দীর্ঘ গ্যালারি, যেখানে সাঈ করা হয়।",
      "en": "The long, air-conditioned gallery between Safa and Marwah where Sa'i is performed."
    },
    "alt": {
      "bn": "মাসআ - সাফা ও মারওয়ার মাঝে - আলোকচিত্র",
      "en": "The Mas'a - between Safa and Marwah - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Mas%27aa3.jpg/960px-Mas%27aa3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Tahir mq",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mas%27aa3.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "sai"
    ]
  },
  {
    "id": "p-masa-2",
    "type": "photo",
    "title": {
      "bn": "মাসআ - সাফা ও মারওয়ার মাঝে",
      "en": "The Mas'a - between Safa and Marwah"
    },
    "caption": {
      "bn": "সাফা ও মারওয়ার মাঝের শীতাতপ নিয়ন্ত্রিত দীর্ঘ গ্যালারি, যেখানে সাঈ করা হয়।",
      "en": "The long, air-conditioned gallery between Safa and Marwah where Sa'i is performed."
    },
    "alt": {
      "bn": "মাসআ - সাফা ও মারওয়ার মাঝে - আলোকচিত্র",
      "en": "The Mas'a - between Safa and Marwah - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Mas%27aa2.jpg/960px-Mas%27aa2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Tahir mq",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mas%27aa2.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "sai"
    ]
  },
  {
    "id": "p-masa-3",
    "type": "photo",
    "title": {
      "bn": "মাসআ - সাফা ও মারওয়ার মাঝে",
      "en": "The Mas'a - between Safa and Marwah"
    },
    "caption": {
      "bn": "সাফা পাহাড়ের কাছে নির্দেশনা ফলক - সাঈ এখান থেকে শুরু হয়।",
      "en": "The guidance panel at Mount Safa - Sa'i begins here."
    },
    "alt": {
      "bn": "মাসআ - সাফা ও মারওয়ার মাঝে - আলোকচিত্র",
      "en": "The Mas'a - between Safa and Marwah - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c8/Al-Safa_1.JPG/960px-Al-Safa_1.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Aiman titi",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Al-Safa_1.JPG",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "sai"
    ]
  },
  {
    "id": "p-zamzam-1",
    "type": "photo",
    "title": {
      "bn": "জমজমের পানি",
      "en": "Zamzam water"
    },
    "caption": {
      "bn": "মসজিদুল হারামজুড়ে রাখা জমজমের কুলার থেকে বিনামূল্যে পানি পান করা যায়।",
      "en": "Zamzam coolers are placed throughout Masjid al-Haram; drinking is free."
    },
    "alt": {
      "bn": "জমজমের পানি - আলোকচিত্র",
      "en": "Zamzam water - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/ce/Zamzamziad.jpg/960px-Zamzamziad.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "زياد0",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Zamzamziad.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "zamzam"
    ]
  },
  {
    "id": "p-zamzam-2",
    "type": "photo",
    "title": {
      "bn": "জমজমের পানি",
      "en": "Zamzam water"
    },
    "caption": {
      "bn": "মসজিদুল হারামজুড়ে রাখা জমজমের কুলার থেকে বিনামূল্যে পানি পান করা যায়।",
      "en": "Zamzam coolers are placed throughout Masjid al-Haram; drinking is free."
    },
    "alt": {
      "bn": "জমজমের পানি - আলোকচিত্র",
      "en": "Zamzam water - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3b/Mecca_zamzam.jpg/960px-Mecca_zamzam.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Yousefmadari at ml.wikipedia",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mecca_zamzam.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "zamzam"
    ]
  },
  {
    "id": "p-nabawi-1",
    "type": "photo",
    "title": {
      "bn": "মসজিদে নববী",
      "en": "Masjid an-Nabawi"
    },
    "caption": {
      "bn": "মদিনার মসজিদে নববী - মদিনা সফর উমরাহর অংশ নয়, তবে এখানে সালাতের বিশেষ ফজিলত আছে।",
      "en": "The Prophet's Mosque in Madinah - visiting is not part of Umrah, but prayer here has special virtue."
    },
    "alt": {
      "bn": "মসজিদে নববী - আলোকচিত্র",
      "en": "Masjid an-Nabawi - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e6/Masjid-Al-Nabawi_Madinah.jpg/960px-Masjid-Al-Nabawi_Madinah.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "HUTA Group photographer",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Masjid-Al-Nabawi_Madinah.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "madinah"
    ]
  },
  {
    "id": "p-nabawi-2",
    "type": "photo",
    "title": {
      "bn": "মসজিদে নববী",
      "en": "Masjid an-Nabawi"
    },
    "caption": {
      "bn": "মদিনার মসজিদে নববী - মদিনা সফর উমরাহর অংশ নয়, তবে এখানে সালাতের বিশেষ ফজিলত আছে।",
      "en": "The Prophet's Mosque in Madinah - visiting is not part of Umrah, but prayer here has special virtue."
    },
    "alt": {
      "bn": "মসজিদে নববী - আলোকচিত্র",
      "en": "Masjid an-Nabawi - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a0/Al_Masjid_an_Nabawi_3.jpg/960px-Al_Masjid_an_Nabawi_3.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Aymanzaid2",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Al_Masjid_an_Nabawi_3.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "madinah"
    ]
  },
  {
    "id": "p-dhul-hulayfah-1",
    "type": "photo",
    "title": {
      "bn": "যুল-হুলাইফা (আবইয়ার আলি) মিকাত",
      "en": "Dhul-Hulayfah (Abyar 'Ali) Miqat"
    },
    "caption": {
      "bn": "মদিনা থেকে মক্কাগামীদের মিকাত। মদিনা আগে গেলে এখানে ইহরাম বাঁধা হয়।",
      "en": "The Miqat for those travelling from Madinah to Makkah. If you visit Madinah first, you enter Ihram here."
    },
    "alt": {
      "bn": "যুল-হুলাইফা (আবইয়ার আলি) মিকাত - আলোকচিত্র",
      "en": "Dhul-Hulayfah (Abyar 'Ali) Miqat - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/06/Abiar_Ali.jpg/960px-Abiar_Ali.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Aiman titi",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Abiar_Ali.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "miqat",
      "ihram"
    ]
  },
  {
    "id": "p-dhul-hulayfah-2",
    "type": "photo",
    "title": {
      "bn": "যুল-হুলাইফা (আবইয়ার আলি) মিকাত",
      "en": "Dhul-Hulayfah (Abyar 'Ali) Miqat"
    },
    "caption": {
      "bn": "মদিনা থেকে মক্কাগামীদের মিকাত। মদিনা আগে গেলে এখানে ইহরাম বাঁধা হয়।",
      "en": "The Miqat for those travelling from Madinah to Makkah. If you visit Madinah first, you enter Ihram here."
    },
    "alt": {
      "bn": "যুল-হুলাইফা (আবইয়ার আলি) মিকাত - আলোকচিত্র",
      "en": "Dhul-Hulayfah (Abyar 'Ali) Miqat - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/07/Masjid_Dzulhulaifah_%28Umroh_Ramadhan_2023%29-2.jpg/960px-Masjid_Dzulhulaifah_%28Umroh_Ramadhan_2023%29-2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Indonesiagood",
      "license": "CC BY 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Masjid_Dzulhulaifah_(Umroh_Ramadhan_2023)-2.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "miqat",
      "ihram"
    ]
  },
  {
    "id": "p-train-1",
    "type": "photo",
    "title": {
      "bn": "হারামাইন হাই-স্পিড রেল",
      "en": "Haramain High-Speed Railway"
    },
    "caption": {
      "bn": "মক্কা, জেদ্দা (শহর ও বিমানবন্দর), কেএইসি ও মদিনার মধ্যে চলাচলকারী দ্রুতগতির ট্রেন।",
      "en": "The high-speed train linking Makkah, Jeddah (city and airport), KAEC and Madinah."
    },
    "alt": {
      "bn": "হারামাইন হাই-স্পিড রেল - আলোকচিত্র",
      "en": "Haramain High-Speed Railway - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/%D9%82%D8%B7%D8%A7%D8%B1_%D8%A7%D9%84%D8%AD%D8%B1%D9%85%D9%8A%D9%86_2023.jpg/960px-%D9%82%D8%B7%D8%A7%D8%B1_%D8%A7%D9%84%D8%AD%D8%B1%D9%85%D9%8A%D9%86_2023.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "وكالة الأنباء السعودية",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:%D9%82%D8%B7%D8%A7%D8%B1_%D8%A7%D9%84%D8%AD%D8%B1%D9%85%D9%8A%D9%86_2023.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "transport"
    ]
  },
  {
    "id": "p-train-2",
    "type": "photo",
    "title": {
      "bn": "হারামাইন হাই-স্পিড রেল",
      "en": "Haramain High-Speed Railway"
    },
    "caption": {
      "bn": "মক্কা, জেদ্দা (শহর ও বিমানবন্দর), কেএইসি ও মদিনার মধ্যে চলাচলকারী দ্রুতগতির ট্রেন।",
      "en": "The high-speed train linking Makkah, Jeddah (city and airport), KAEC and Madinah."
    },
    "alt": {
      "bn": "হারামাইন হাই-স্পিড রেল - আলোকচিত্র",
      "en": "Haramain High-Speed Railway - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Haramain_High_Speed_Railway_Station_Interior_2022.jpg/960px-Haramain_High_Speed_Railway_Station_Interior_2022.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "amanderson2",
      "license": "CC BY 2.0",
      "licenseUrl": "https://creativecommons.org/licenses/by/2.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Haramain_High_Speed_Railway_Station_Interior_2022.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "transport"
    ]
  },
  {
    "id": "p-ihram-1",
    "type": "photo",
    "title": {
      "bn": "ইহরামের কাপড়",
      "en": "Ihram garments"
    },
    "caption": {
      "bn": "পুরুষের ইহরাম: সেলাইবিহীন দুটি সাদা চাদর - একটি কোমরে (ইজার), একটি গায়ে (রিদা)।",
      "en": "Men's Ihram: two unstitched white sheets - one around the waist (izar), one over the upper body (rida')."
    },
    "alt": {
      "bn": "ইহরামের কাপড় - আলোকচিত্র",
      "en": "Ihram garments - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/Ihrams_for_Ukra_and_Hajj.jpg/960px-Ihrams_for_Ukra_and_Hajj.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Ashashyou",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ihrams_for_Ukra_and_Hajj.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "ihram"
    ]
  },
  {
    "id": "p-ihram-2",
    "type": "photo",
    "title": {
      "bn": "ইহরামের কাপড়",
      "en": "Ihram garments"
    },
    "caption": {
      "bn": "পুরুষের ইহরাম: সেলাইবিহীন দুটি সাদা চাদর - একটি কোমরে (ইজার), একটি গায়ে (রিদা)।",
      "en": "Men's Ihram: two unstitched white sheets - one around the waist (izar), one over the upper body (rida')."
    },
    "alt": {
      "bn": "ইহরামের কাপড় - আলোকচিত্র",
      "en": "Ihram garments - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d6/Ihram_for_umrah.JPG/960px-Ihram_for_umrah.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Rammaum",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ihram_for_umrah.JPG",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "ihram"
    ]
  },
  {
    "id": "p-jed-airport-1",
    "type": "photo",
    "title": {
      "bn": "জেদ্দা বিমানবন্দর - হজ টার্মিনাল",
      "en": "Jeddah airport - Hajj terminal"
    },
    "caption": {
      "bn": "জেদ্দার কিং আবদুল আজিজ আন্তর্জাতিক বিমানবন্দরের হজ টার্মিনাল। মনে রাখবেন: জেদ্দা বিমানবন্দর মিকাত নয়।",
      "en": "The Hajj terminal at King Abdulaziz International Airport, Jeddah. Remember: Jeddah airport is not a Miqat."
    },
    "alt": {
      "bn": "জেদ্দা বিমানবন্দর - হজ টার্মিনাল - আলোকচিত্র",
      "en": "Jeddah airport - Hajj terminal - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Haj_terminal.jpg/960px-Haj_terminal.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Yousefmadari at ml.wikipedia",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Haj_terminal.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "travel"
    ]
  },
  {
    "id": "p-jed-airport-2",
    "type": "photo",
    "title": {
      "bn": "জেদ্দা বিমানবন্দর - হজ টার্মিনাল",
      "en": "Jeddah airport - Hajj terminal"
    },
    "caption": {
      "bn": "জেদ্দার কিং আবদুল আজিজ আন্তর্জাতিক বিমানবন্দরের হজ টার্মিনাল। মনে রাখবেন: জেদ্দা বিমানবন্দর মিকাত নয়।",
      "en": "The Hajj terminal at King Abdulaziz International Airport, Jeddah. Remember: Jeddah airport is not a Miqat."
    },
    "alt": {
      "bn": "জেদ্দা বিমানবন্দর - হজ টার্মিনাল - আলোকচিত্র",
      "en": "Jeddah airport - Hajj terminal - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ee/Hajj_Terminal_01_Jeddah.jpg/960px-Hajj_Terminal_01_Jeddah.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Nomi887",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hajj_Terminal_01_Jeddah.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "travel"
    ]
  },
  {
    "id": "p-quba-1",
    "type": "photo",
    "title": {
      "bn": "মসজিদে কুবা",
      "en": "Masjid Quba"
    },
    "caption": {
      "bn": "মদিনার মসজিদে কুবা - ইসলামের প্রথম মসজিদ।",
      "en": "Masjid Quba in Madinah - the first mosque built in Islam."
    },
    "alt": {
      "bn": "মসজিদে কুবা - আলোকচিত্র",
      "en": "Masjid Quba - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Quba_Mosque_%282024%29.jpg/960px-Quba_Mosque_%282024%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Kaliper1",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Quba_Mosque_(2024).jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "madinah"
    ]
  },
  {
    "id": "p-quba-2",
    "type": "photo",
    "title": {
      "bn": "মসজিদে কুবা",
      "en": "Masjid Quba"
    },
    "caption": {
      "bn": "মদিনার মসজিদে কুবা - ইসলামের প্রথম মসজিদ।",
      "en": "Masjid Quba in Madinah - the first mosque built in Islam."
    },
    "alt": {
      "bn": "মসজিদে কুবা - আলোকচিত্র",
      "en": "Masjid Quba - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/98/Quba_Mosque_Full_Picture_%282024%29.jpg/960px-Quba_Mosque_Full_Picture_%282024%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Kaliper1",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Quba_Mosque_Full_Picture_(2024).jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "madinah"
    ]
  },
  {
    "id": "p-dac-1",
    "type": "photo",
    "title": {
      "bn": "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকা",
      "en": "Hazrat Shahjalal International Airport, Dhaka"
    },
    "caption": {
      "bn": "বাংলাদেশ থেকে অধিকাংশ উমরাহ যাত্রা এখান থেকে শুরু হয়। আন্তর্জাতিক ফ্লাইটের অন্তত ৩–৪ ঘণ্টা আগে পৌঁছান।",
      "en": "Most Umrah journeys from Bangladesh begin here. Arrive at least 3–4 hours before an international flight."
    },
    "alt": {
      "bn": "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকা - আলোকচিত্র",
      "en": "Hazrat Shahjalal International Airport, Dhaka - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/60/Hazrat_Shahjalal_International_Airport_Terminal_2_-_Dec_2019.jpg/960px-Hazrat_Shahjalal_International_Airport_Terminal_2_-_Dec_2019.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Tms masum",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hazrat_Shahjalal_International_Airport_Terminal_2_-_Dec_2019.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "travel"
    ]
  },
  {
    "id": "p-dac-2",
    "type": "photo",
    "title": {
      "bn": "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকা",
      "en": "Hazrat Shahjalal International Airport, Dhaka"
    },
    "caption": {
      "bn": "বাংলাদেশ থেকে অধিকাংশ উমরাহ যাত্রা এখান থেকে শুরু হয়। আন্তর্জাতিক ফ্লাইটের অন্তত ৩–৪ ঘণ্টা আগে পৌঁছান।",
      "en": "Most Umrah journeys from Bangladesh begin here. Arrive at least 3–4 hours before an international flight."
    },
    "alt": {
      "bn": "হযরত শাহজালাল আন্তর্জাতিক বিমানবন্দর, ঢাকা - আলোকচিত্র",
      "en": "Hazrat Shahjalal International Airport, Dhaka - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c7/Hazrat_Shahjalal_International_Airport%2C_Dhaka%2C_Bangladesh.jpg/960px-Hazrat_Shahjalal_International_Airport%2C_Dhaka%2C_Bangladesh.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "credit": {
      "author": "Md Shaifuzzaman Ayon",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Hazrat_Shahjalal_International_Airport,_Dhaka,_Bangladesh.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "travel"
    ]
  },
  {
    "id": "v-ihram",
    "type": "video",
    "title": {
      "bn": "সঠিকভাবে ইহরাম পরার পদ্ধতি",
      "en": "How to wear Ihram correctly"
    },
    "caption": {
      "bn": "হজ ও উমরাহ মন্ত্রণালয়ের অফিসিয়াল ভিডিও (আরবি)। পুরুষের ইহরামের দুই চাদর পরার পদ্ধতি দেখানো হয়েছে।",
      "en": "Official Ministry of Hajj and Umrah video (Arabic). Shows how men put on the two Ihram sheets."
    },
    "alt": {
      "bn": "সঠিকভাবে ইহরাম পরার পদ্ধতি",
      "en": "How to wear Ihram correctly"
    },
    "youtubeId": "Px7b5AGleAQ",
    "duration": 85,
    "credit": {
      "author": "Ministry of Hajj and Umrah",
      "license": "YouTube embed (official channel)",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=Px7b5AGleAQ",
      "sourceName": "@SaudiMOHU on YouTube"
    },
    "tags": [
      "ihram"
    ]
  },
  {
    "id": "v-idtiba",
    "type": "video",
    "title": {
      "bn": "ইযতিবার সঠিক পদ্ধতি",
      "en": "The correct way of Idtiba'"
    },
    "caption": {
      "bn": "অফিসিয়াল ভিডিও (আরবি)। তাওয়াফের সময় ডান কাঁধ খোলা রাখার পদ্ধতি।",
      "en": "Official video (Arabic). How to uncover the right shoulder during Tawaf."
    },
    "alt": {
      "bn": "ইযতিবার সঠিক পদ্ধতি",
      "en": "The correct way of Idtiba'"
    },
    "youtubeId": "3CtQ9rZkA3s",
    "duration": 23,
    "credit": {
      "author": "Ministry of Hajj and Umrah",
      "license": "YouTube embed (official channel)",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=3CtQ9rZkA3s",
      "sourceName": "@SaudiMOHU on YouTube"
    },
    "tags": [
      "tawaf"
    ]
  },
  {
    "id": "v-two-rakahs",
    "type": "video",
    "title": {
      "bn": "তাওয়াফের পর দুই রাকাত",
      "en": "The two rak'ahs after Tawaf"
    },
    "caption": {
      "bn": "অফিসিয়াল ভিডিও (আরবি)। ভিড়ের মধ্যে সহজে ও প্রশান্তভাবে দুই রাকাত আদায়ের নির্দেশনা।",
      "en": "Official video (Arabic). Guidance on praying the two rak'ahs calmly without blocking the crowds."
    },
    "alt": {
      "bn": "তাওয়াফের পর দুই রাকাত",
      "en": "The two rak'ahs after Tawaf"
    },
    "youtubeId": "5_KfHwvG2g4",
    "duration": 55,
    "credit": {
      "author": "Ministry of Hajj and Umrah",
      "license": "YouTube embed (official channel)",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=5_KfHwvG2g4",
      "sourceName": "@SaudiMOHU on YouTube"
    },
    "tags": [
      "prayer",
      "tawaf"
    ]
  },
  {
    "id": "v-etiquette",
    "type": "video",
    "title": {
      "bn": "প্রশান্ত উমরাহর জন্য সহজ পরামর্শ",
      "en": "Easy steps for a calm Umrah"
    },
    "caption": {
      "bn": "অফিসিয়াল ভিডিও (আরবি)। হারামে মালপত্র না নেওয়া, তাওয়াফে প্রবাহের দিক বজায় রাখা ইত্যাদি শিষ্টাচার।",
      "en": "Official video (Arabic). Etiquette: no luggage in the Haram, keep with the flow of Tawaf, and more."
    },
    "alt": {
      "bn": "প্রশান্ত উমরাহর জন্য সহজ পরামর্শ",
      "en": "Easy steps for a calm Umrah"
    },
    "youtubeId": "8BsCaPltTcw",
    "duration": 41,
    "credit": {
      "author": "Ministry of Hajj and Umrah",
      "license": "YouTube embed (official channel)",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=8BsCaPltTcw",
      "sourceName": "@SaudiMOHU on YouTube"
    },
    "tags": [
      "entry",
      "tawaf"
    ]
  },
  {
    "id": "v-sai-flow",
    "type": "video",
    "title": {
      "bn": "মাসআয় থেমে পথ আটকাবেন না",
      "en": "Don't stop and block the Mas'a"
    },
    "caption": {
      "bn": "অফিসিয়াল ভিডিও (আরবি)। সাঈর পথে দাঁড়িয়ে অন্যদের চলাচলে বাধা না দেওয়ার পরামর্শ।",
      "en": "Official video (Arabic). Avoid stopping in the walkway and blocking others during Sa'i."
    },
    "alt": {
      "bn": "মাসআয় থেমে পথ আটকাবেন না",
      "en": "Don't stop and block the Mas'a"
    },
    "youtubeId": "fkmmPT2VVqc",
    "duration": 25,
    "credit": {
      "author": "Ministry of Hajj and Umrah",
      "license": "YouTube embed (official channel)",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=fkmmPT2VVqc",
      "sourceName": "@SaudiMOHU on YouTube"
    },
    "tags": [
      "sai"
    ]
  }
]

/** Historical photographs (Wikimedia Commons, verified 2026-10-17) and official Alafasy videos. */
media.push(...([
  {
    "id": "h-haram-1880-pano",
    "type": "photo",
    "title": {
      "bn": "মক্কার হারামের প্যানোরামা, ১৮৮০",
      "en": "Panorama of the Meccan Sanctuary, 1880"
    },
    "caption": {
      "bn": "মুহাম্মদ সাদিক বে-র তোলা ও স্বাক্ষরিত মসজিদুল হারাম ও আশপাশের মক্কার প্যানোরামা (১২৯৭ হি. / ১৮৮০ খ্রি.)।",
      "en": "Panorama of Masjid al-Haram and the surrounding city, photographed and signed by Muhammad Sadiq Bey (1297 AH / 1880 CE)."
    },
    "alt": {
      "bn": "মক্কার হারামের প্যানোরামা, ১৮৮০ - ঐতিহাসিক/আলোকচিত্র",
      "en": "Panorama of the Meccan Sanctuary, 1880 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0f/Edited_Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_arc.pp_0211.02-Photo_of_Mecca_by_Muhammad_Sadiq_Bey_ca.1880-ccbysa3.0.png/960px-Edited_Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_arc.pp_0211.02-Photo_of_Mecca_by_Muhammad_Sadiq_Bey_ca.1880-ccbysa3.0.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "1880 (1297 AH)",
    "credit": {
      "author": "Muhammad Sadiq Bey (photograph); Khalili Collections (upload)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Edited_Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_arc.pp_0211.02-Photo_of_Mecca_by_Muhammad_Sadiq_Bey_ca.1880-ccbysa3.0.png",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "kaaba-haram-19c",
      "then"
    ]
  },
  {
    "id": "h-kaaba-1880",
    "type": "photo",
    "title": {
      "bn": "কাবা, ১৮৮০",
      "en": "The Kaaba, 1880"
    },
    "caption": {
      "bn": "মুহাম্মদ সাদিক বে-র তোলা কাবার ছবি (১৮৮০)।",
      "en": "The Kaaba photographed by Muhammad Sadiq Bey in 1880."
    },
    "alt": {
      "bn": "কাবা, ১৮৮০ - ঐতিহাসিক/আলোকচিত্র",
      "en": "The Kaaba, 1880 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/73/Edited_Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_arc.pp_0211.04_The_Kaaba_photo_by_M_Sadiq_Bey_ca._1880-ccbysa3.0.jpg/960px-Edited_Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_arc.pp_0211.04_The_Kaaba_photo_by_M_Sadiq_Bey_ca._1880-ccbysa3.0.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "1880 (1297 AH)",
    "credit": {
      "author": "Muhammad Sadiq Bey (photograph); Khalili Collections (upload)",
      "license": "CC BY-SA 3.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/3.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Edited_Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_arc.pp_0211.04_The_Kaaba_photo_by_M_Sadiq_Bey_ca._1880-ccbysa3.0.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "kaaba-haram-19c",
      "then"
    ]
  },
  {
    "id": "h-haram-1889",
    "type": "photo",
    "title": {
      "bn": "মসজিদুল হারাম, ১৮৮৯",
      "en": "The Holy Mosque in Mecca, 1889"
    },
    "caption": {
      "bn": "স্নুক হুরগ্রোঞ্জের “Bilder aus Mekka” (লাইডেন ১৮৮৯)-এর প্লেট: কাবা, হাতিম ও জমজম ভবনসহ চত্বর।",
      "en": "Plate from Snouck Hurgronje’s Bilder aus Mekka (Leiden, 1889): the courtyard with the Kaaba, the Hijr and the Zamzam building."
    },
    "alt": {
      "bn": "মসজিদুল হারাম, ১৮৮৯ - ঐতিহাসিক/আলোকচিত্র",
      "en": "The Holy Mosque in Mecca, 1889 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/27/Masjid_Haram_1889_Snouck_Hurgronje.jpg/960px-Masjid_Haram_1889_Snouck_Hurgronje.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "1889 (published; photographed c. 1885-1888)",
    "credit": {
      "author": "C. Snouck Hurgronje, Bilder aus Mekka (photo attributed to al-Sayyid Abd al-Ghaffar)",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Masjid_Haram_1889_Snouck_Hurgronje.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "kaaba-haram-19c",
      "then"
    ]
  },
  {
    "id": "h-haram-prayer-1880s",
    "type": "photo",
    "title": {
      "bn": "হারামে জামাতের সালাত, ১৮৮০-এর দশক",
      "en": "Congregational prayer in the Haram, 1880s"
    },
    "caption": {
      "bn": "মক্কার চিকিৎসক সাইয়িদ আবদুল গাফফারের তোলা ছবি (প্রায় ১৮৮৫–৮৯; লাইব্রেরি অব কংগ্রেস)।",
      "en": "Photograph by al-Sayyid Abd al-Ghaffar, a physician of Makkah (c. 1885–89; Library of Congress)."
    },
    "alt": {
      "bn": "হারামে জামাতের সালাত, ১৮৮০-এর দশক - ঐতিহাসিক/আলোকচিত্র",
      "en": "Congregational prayer in the Haram, 1880s - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e7/Ansicht_de_Moschee%2C_w%C3%A4hrend_darin_ein_gemeinschaftliches_%C3%87al%C3%A4t_abgehalten_wird_LCCN2013646214.jpg/960px-Ansicht_de_Moschee%2C_w%C3%A4hrend_darin_ein_gemeinschaftliches_%C3%87al%C3%A4t_abgehalten_wird_LCCN2013646214.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "c. 1885-1889",
    "credit": {
      "author": "al-Sayyid Abd al-Ghaffar, physician of Mecca",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Ansicht_de_Moschee,_w%C3%A4hrend_darin_ein_gemeinschaftliches_%C3%87al%C3%A4t_abgehalten_wird_LCCN2013646214.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "haram-early-20c",
      "then"
    ]
  },
  {
    "id": "h-kaaba-1910",
    "type": "photo",
    "title": {
      "bn": "ওপর থেকে কাবা, প্রায় ১৯১০",
      "en": "Bird's-eye view of the Kaaba, c. 1910"
    },
    "caption": {
      "bn": "ম্যাটসন সংগ্রহের কাচের নেগেটিভ থেকে কাবা ও চারপাশের চত্বর (লাইব্রেরি অব কংগ্রেস)।",
      "en": "Glass negative from the Matson Collection: the Kaaba and the surrounding courtyard (Library of Congress)."
    },
    "alt": {
      "bn": "ওপর থেকে কাবা, প্রায় ১৯১০ - ঐতিহাসিক/আলোকচিত্র",
      "en": "Bird's-eye view of the Kaaba, c. 1910 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Mecca%2C_ca._1910._Bird%27s-eye_view_of_uncrowded_Kaaba_LOC_matpc.04659.jpg/960px-Mecca%2C_ca._1910._Bird%27s-eye_view_of_uncrowded_Kaaba_LOC_matpc.04659.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "c. 1910",
    "credit": {
      "author": "G. Eric and Edith Matson Photograph Collection (American Colony, Jerusalem)",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mecca,_ca._1910._Bird%27s-eye_view_of_uncrowded_Kaaba_LOC_matpc.04659.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "haram-early-20c",
      "then"
    ]
  },
  {
    "id": "h-makkah-1880s",
    "type": "photo",
    "title": {
      "bn": "মসজিদের ওপারে মক্কা শহর, ১৮৮০-এর দশক",
      "en": "Mecca over the mosque's NW and SW sides, 1880s"
    },
    "caption": {
      "bn": "মসজিদের উত্তর-পশ্চিম ও দক্ষিণ-পশ্চিম দিকের শহর (আবদুল গাফফার, লাইব্রেরি অব কংগ্রেস)।",
      "en": "The city beyond the mosque’s north-west and south-west sides (Abd al-Ghaffar, Library of Congress)."
    },
    "alt": {
      "bn": "মসজিদের ওপারে মক্কা শহর, ১৮৮০-এর দশক - ঐতিহাসিক/আলোকচিত্র",
      "en": "Mecca over the mosque's NW and SW sides, 1880s - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Zweite_Ansicht_der_Stadt_Mekka_%C3%BCber_die_nordwestliche_%28rechts%29_und_die_s%C3%BCdwestliche_Seite_%28links%29_der_Moschee_hinaus_LCCN2012648181.jpg/960px-Zweite_Ansicht_der_Stadt_Mekka_%C3%BCber_die_nordwestliche_%28rechts%29_und_die_s%C3%BCdwestliche_Seite_%28links%29_der_Moschee_hinaus_LCCN2012648181.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "c. 1885-1889",
    "credit": {
      "author": "al-Sayyid Abd al-Ghaffar, physician of Mecca",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Zweite_Ansicht_der_Stadt_Mekka_%C3%BCber_die_nordwestliche_(rechts)_und_die_s%C3%BCdwestliche_Seite_(links)_der_Moschee_hinaus_LCCN2012648181.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "haram-early-20c",
      "then"
    ]
  },
  {
    "id": "h-zamzam-1888",
    "type": "photo",
    "title": {
      "bn": "কাবা ও জমজম ভবন, ১৮৮৮",
      "en": "The Kaaba and the Zamzam building, 1888"
    },
    "caption": {
      "bn": "কাবার পাশে গম্বুজওয়ালা জমজম কূপের ভবন - পরবর্তীতে মাতাফ সম্প্রসারণে সরিয়ে নেওয়া হয়।",
      "en": "The domed Zamzam well building beside the Kaaba - later removed when the Mataf was enlarged."
    },
    "alt": {
      "bn": "কাবা ও জমজম ভবন, ১৮৮৮ - ঐতিহাসিক/আলোকচিত্র",
      "en": "The Kaaba and the Zamzam building, 1888 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/1888_Ka%27aba_and_Zamzam.png/960px-1888_Ka%27aba_and_Zamzam.png?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "1888",
    "credit": {
      "author": "al-Sayyid Abd al-Ghaffar",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:1888_Ka%27aba_and_Zamzam.png",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "zamzam",
      "then"
    ]
  },
  {
    "id": "h-zamzam-1914",
    "type": "photo",
    "title": {
      "bn": "পূর্ব মিনার থেকে জমজম ভবন ও কাবা",
      "en": "Zamzam house and the Kaaba from the east minaret"
    },
    "caption": {
      "bn": "সামনে জমজম ভবন, পেছনে কাবা (বার্নহার্ড মরিটজ সংগ্রহ, ১৯১৪-এর আগে)।",
      "en": "The Zamzam house in front with the Kaaba behind (Bernhard Moritz collection, before 1914)."
    },
    "alt": {
      "bn": "পূর্ব মিনার থেকে জমজম ভবন ও কাবা - ঐতিহাসিক/আলোকচিত্র",
      "en": "Zamzam house and the Kaaba from the east minaret - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Mekka_Ansicht_der_heiligen_Moschee_vom_Ostminaret._Im_Vordergrund_das_Zemzemhaus%2C_dahinter_die_Ka%CA%BBba._LCCN2002714731.jpg/960px-Mekka_Ansicht_der_heiligen_Moschee_vom_Ostminaret._Im_Vordergrund_das_Zemzemhaus%2C_dahinter_die_Ka%CA%BBba._LCCN2002714731.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "before 1914 (print published 1914)",
    "credit": {
      "author": "Bernhard Moritz (1859-1939), collection/publisher",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mekka_Ansicht_der_heiligen_Moschee_vom_Ostminaret._Im_Vordergrund_das_Zemzemhaus,_dahinter_die_Ka%CA%BBba._LCCN2002714731.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "zamzam",
      "then"
    ]
  },
  {
    "id": "h-bab-ali-1914",
    "type": "photo",
    "title": {
      "bn": "মসজিদুল হারামের বাব আলি",
      "en": "Bab Ali gate of the Holy Mosque"
    },
    "caption": {
      "bn": "পূর্ব কোণের বাব আলি ফটক; সেকালে এটি মাসআর রাস্তার দিকে ছিল (১৯১৪-এর আগে)।",
      "en": "Bab Ali, the gate at the east corner, which then faced the Mas’a street (before 1914)."
    },
    "alt": {
      "bn": "মসজিদুল হারামের বাব আলি - ঐতিহাসিক/আলোকচিত্র",
      "en": "Bab Ali gate of the Holy Mosque - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Mekka_B%C3%A2b_%CA%BBAl%C4%AB%2C_Tor_der_heiligen_Moschee_an_der_Ostecke%3B_durch_das_mittlere_Portal_wird_das_Zemzemhaus_sichtbar._LCCN2002714730.jpg/960px-Mekka_B%C3%A2b_%CA%BBAl%C4%AB%2C_Tor_der_heiligen_Moschee_an_der_Ostecke%3B_durch_das_mittlere_Portal_wird_das_Zemzemhaus_sichtbar._LCCN2002714730.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "before 1914 (print published 1914)",
    "credit": {
      "author": "Bernhard Moritz (1859-1939), collection/publisher",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mekka_B%C3%A2b_%CA%BBAl%C4%AB,_Tor_der_heiligen_Moschee_an_der_Ostecke;_durch_das_mittlere_Portal_wird_das_Zemzemhaus_sichtbar._LCCN2002714730.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "haram-early-20c",
      "then"
    ]
  },
  {
    "id": "h-nabawi-1880s",
    "type": "photo",
    "title": {
      "bn": "মদিনার মসজিদে নববী, ১৮৮০-এর দশক",
      "en": "The Sanctuary at Medina, 1880s"
    },
    "caption": {
      "bn": "মুহাম্মদ সাদিক বে-র তোলা সবুজ গম্বুজসহ মসজিদে নববী।",
      "en": "The Prophet’s Mosque with the Green Dome, photographed by Muhammad Sadiq Bey."
    },
    "alt": {
      "bn": "মদিনার মসজিদে নববী, ১৮৮০-এর দশক - ঐতিহাসিক/আলোকচিত্র",
      "en": "The Sanctuary at Medina, 1880s - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/90/Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_Arc.pp-0254.11.jpg/960px-Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_Arc.pp-0254.11.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "1880s",
    "credit": {
      "author": "Muhammad Sadiq Bey (photograph); Khalili Collections (upload)",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Khalili_Collection_Hajj_and_Arts_of_Pilgrimage_Arc.pp-0254.11.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "nabawi-ottoman",
      "then"
    ]
  },
  {
    "id": "h-bab-salam-1916",
    "type": "photo",
    "title": {
      "bn": "মসজিদে নববীর বাবুস সালাম",
      "en": "Bab al-Salam, Prophet's Mosque"
    },
    "caption": {
      "bn": "দক্ষিণ-পশ্চিম কোণের প্রধান ফটক, উসমানীয় যুগের শেষভাগ (১৯১৬-এর আগে)।",
      "en": "Bab al-Salam, the main gate at the south-west corner, late Ottoman era (before 1916)."
    },
    "alt": {
      "bn": "মসজিদে নববীর বাবুস সালাম - ঐতিহাসিক/আলোকচিত্র",
      "en": "Bab al-Salam, Prophet's Mosque - photograph"
    },
    "src": "https://upload.wikimedia.org/wikipedia/commons/f/fe/Medina_-_Haupttot_%28B%C3%A2b_es_sal%C3%A2m%29_der_heiligen_Moschee_an_der_S%C3%BCdwestecke._LCCN2002715727.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "date": "before 1916 (print published 1916)",
    "credit": {
      "author": "Bernhard Moritz (1859-1939), collection/publisher",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Medina_-_Haupttot_(B%C3%A2b_es_sal%C3%A2m)_der_heiligen_Moschee_an_der_S%C3%BCdwestecke._LCCN2002715727.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "nabawi-ottoman",
      "then"
    ]
  },
  {
    "id": "h-green-dome-1910",
    "type": "photo",
    "title": {
      "bn": "পুরোনো মিনার ও সবুজ গম্বুজ, ১৯১০",
      "en": "Old minaret and the Green Dome, Medina, 1910"
    },
    "caption": {
      "bn": "মসজিদে নববীর পুরোনো মিনার ও নবী ﷺ-এর কবরের ওপর সবুজ গম্বুজ (মরিটজ সংগ্রহ)।",
      "en": "An old minaret of the Prophet’s Mosque and the Green Dome over the Prophet’s ﷺ grave (Moritz collection)."
    },
    "alt": {
      "bn": "পুরোনো মিনার ও সবুজ গম্বুজ, ১৯১০ - ঐতিহাসিক/আলোকচিত্র",
      "en": "Old minaret and the Green Dome, Medina, 1910 - photograph"
    },
    "src": "https://upload.wikimedia.org/wikipedia/commons/8/8b/Medina_Altes_Minaret_der_heiligen_Moschee%2C_erbaut_1483%3B_die_gr%C3%BCne_Kuppel_%C3%BCber_dem_Grabe_des_Propheten_erbaut_1840._1910._LCCN2002715728.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
    "date": "1910",
    "credit": {
      "author": "Bernhard Moritz (1859-1939), collection/publisher",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Medina_Altes_Minaret_der_heiligen_Moschee,_erbaut_1483;_die_gr%C3%BCne_Kuppel_%C3%BCber_dem_Grabe_des_Propheten_erbaut_1840._1910._LCCN2002715728.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "green-dome",
      "then"
    ]
  },
  {
    "id": "h-madinah-1913",
    "type": "photo",
    "title": {
      "bn": "সালা পাহাড় থেকে মদিনা, ১৯১৩",
      "en": "Medina from Mount Sela, 1913"
    },
    "caption": {
      "bn": "প্রাচীরঘেরা মদিনা ও মসজিদে নববী; হেজাজ রেলপথের শেষ স্টেশন।",
      "en": "The walled city and the Prophet’s Mosque; the terminus of the Hejaz Railway."
    },
    "alt": {
      "bn": "সালা পাহাড় থেকে মদিনা, ১৯১৩ - ঐতিহাসিক/আলোকচিত্র",
      "en": "Medina from Mount Sela, 1913 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/Medina_1302_km_von_Damaskus%2C_619_m_%C3%BC._M._Ansicht_der_Stadt_von_dem_Berge_Sela%CA%BB_im_Nordwesten._1913._LCCN90707093.jpg/960px-Medina_1302_km_von_Damaskus%2C_619_m_%C3%BC._M._Ansicht_der_Stadt_von_dem_Berge_Sela%CA%BB_im_Nordwesten._1913._LCCN90707093.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "1913",
    "credit": {
      "author": "Bernhard Moritz (1859-1939) / Library of Congress PPOC",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Medina_1302_km_von_Damaskus,_619_m_%C3%BC._M._Ansicht_der_Stadt_von_dem_Berge_Sela%CA%BB_im_Nordwesten._1913._LCCN90707093.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "hejaz-railway-medina",
      "then"
    ]
  },
  {
    "id": "h-hejaz-rail-1910s",
    "type": "photo",
    "title": {
      "bn": "মদিনায় হেজাজ রেলওয়ের মালবাহী স্টেশন",
      "en": "Hejaz Railway goods station, Medina"
    },
    "caption": {
      "bn": "উসমানীয় যুগের শেষভাগে হেজাজ রেলওয়ের স্টেশন ও কারখানা।",
      "en": "Goods station and workshops of the Hejaz Railway, late Ottoman era."
    },
    "alt": {
      "bn": "মদিনায় হেজাজ রেলওয়ের মালবাহী স্টেশন - ঐতিহাসিক/আলোকচিত্র",
      "en": "Hejaz Railway goods station, Medina - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/0e/Medina_G%C3%BCterbahnhof_und_Werkst%C3%A4tten._LCCN2002714727.jpg/960px-Medina_G%C3%BCterbahnhof_und_Werkst%C3%A4tten._LCCN2002714727.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "c. 1910s (print published 1916)",
    "credit": {
      "author": "Bernhard Moritz (1859-1939), collection/publisher",
      "license": "Public domain",
      "licenseUrl": "https://creativecommons.org/publicdomain/mark/1.0/",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Medina_G%C3%BCterbahnhof_und_Werkst%C3%A4tten._LCCN2002714727.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "hejaz-railway-medina",
      "then"
    ]
  },
  {
    "id": "h-haram-2012",
    "type": "photo",
    "title": {
      "bn": "ওপর থেকে মসজিদুল হারাম, ২০১২",
      "en": "Masjid al-Haram from above, 2012"
    },
    "caption": {
      "bn": "আবরাজ আল-বাইত থেকে রাতের মসজিদুল হারাম ও মাতাফ।",
      "en": "Night view of Masjid al-Haram and the Mataf from the Abraj al-Bait."
    },
    "alt": {
      "bn": "ওপর থেকে মসজিদুল হারাম, ২০১২ - ঐতিহাসিক/আলোকচিত্র",
      "en": "Masjid al-Haram from above, 2012 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cb/Masjidul-HaramAerialView_%28cropped%29.jpg/960px-Masjidul-HaramAerialView_%28cropped%29.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "2012-02-28",
    "credit": {
      "author": "Wurzelgnohm",
      "license": "CC0",
      "licenseUrl": "http://creativecommons.org/publicdomain/zero/1.0/deed.en",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Masjidul-HaramAerialView_(cropped).jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "haram-now",
      "now"
    ]
  },
  {
    "id": "h-nabawi-umbrellas",
    "type": "photo",
    "title": {
      "bn": "মসজিদে নববীর ছাতা, ২০২২",
      "en": "Umbrellas at the Prophet's Mosque, 2022"
    },
    "caption": {
      "bn": "চত্বরে ছায়া দেওয়ার স্বয়ংক্রিয় ছাতা।",
      "en": "The retractable umbrellas shading the piazza."
    },
    "alt": {
      "bn": "মসজিদে নববীর ছাতা, ২০২২ - ঐতিহাসিক/আলোকচিত্র",
      "en": "Umbrellas at the Prophet's Mosque, 2022 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/61/Retractable_umbrellas_in_the_courtyard_of_Al-Masjid_an-Nabawi_%28the_Prophet%27s_Mosque%29_in_Madinah%2C_Saudi.jpg/960px-Retractable_umbrellas_in_the_courtyard_of_Al-Masjid_an-Nabawi_%28the_Prophet%27s_Mosque%29_in_Madinah%2C_Saudi.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "2022-03-05",
    "credit": {
      "author": "AmanAgrahari01",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Retractable_umbrellas_in_the_courtyard_of_Al-Masjid_an-Nabawi_(the_Prophet%27s_Mosque)_in_Madinah,_Saudi.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "nabawi-now",
      "now"
    ]
  },
  {
    "id": "h-nabawi-2018",
    "type": "photo",
    "title": {
      "bn": "মসজিদে নববী ও সবুজ গম্বুজ, ২০১৮",
      "en": "Masjid an-Nabawi and the Green Dome, 2018"
    },
    "caption": {
      "bn": "হজের আগে তোলা মসজিদে নববী।",
      "en": "Masjid an-Nabawi with the Green Dome, 2018."
    },
    "alt": {
      "bn": "মসজিদে নববী ও সবুজ গম্বুজ, ২০১৮ - ঐতিহাসিক/আলোকচিত্র",
      "en": "Masjid an-Nabawi and the Green Dome, 2018 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Masjid_An-Nabawi_in_Madinah.jpg/960px-Masjid_An-Nabawi_in_Madinah.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "2018-08-16",
    "credit": {
      "author": "Adli Wahid",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Masjid_An-Nabawi_in_Madinah.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "nabawi-now",
      "now"
    ]
  },
  {
    "id": "h-masa-2019",
    "type": "photo",
    "title": {
      "bn": "আজকের মাসআ, ২০১৯",
      "en": "The Mas'a today, 2019"
    },
    "caption": {
      "bn": "সাফা ও মারওয়ার মাঝে শীতাতপ নিয়ন্ত্রিত বহুতল গ্যালারি।",
      "en": "The enclosed, multi-level Mas’a gallery between Safa and Marwah."
    },
    "alt": {
      "bn": "আজকের মাসআ, ২০১৯ - ঐতিহাসিক/আলোকচিত্র",
      "en": "The Mas'a today, 2019 - photograph"
    },
    "src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/Mas%27aa2.jpg/960px-Mas%27aa2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    "date": "2019-01-18",
    "credit": {
      "author": "Tahir mq",
      "license": "CC BY-SA 4.0",
      "licenseUrl": "https://creativecommons.org/licenses/by-sa/4.0",
      "sourceUrl": "https://commons.wikimedia.org/wiki/File:Mas%27aa2.jpg",
      "sourceName": "Wikimedia Commons"
    },
    "tags": [
      "history",
      "masa-now",
      "now"
    ]
  },
  {
    "id": "v-alafasy-talbiyah",
    "type": "video",
    "title": {
      "bn": "তালবিয়াহ - শাইখ মিশারি রাশিদ আলাফাসি",
      "en": "Talbiyah - Sheikh Mishary Rashid Alafasy"
    },
    "caption": {
      "bn": "আলাফাসির অফিসিয়াল চ্যানেল (৯২ সেকেন্ড)। মূল তালবিয়াহর পর কিছু অতিরিক্ত বাক্যও আছে (যেমন “লাব্বাইকা ওয়া সা‘দাইক”) - সেগুলো সাহাবিদের থেকে বর্ণিত বা প্রচলিত রূপ; মূল তালবিয়াহ সহিহ বুখারি ১৫৪৯-এ।",
      "en": "Alafasy’s official channel (92 s). After the standard Talbiyah it adds further phrases (e.g. “labbayka wa sa‘dayk”) - reported from Companions or common forms; the core Talbiyah is in Sahih al-Bukhari 1549."
    },
    "alt": {
      "bn": "আলাফাসির কণ্ঠে তালবিয়াহ",
      "en": "Talbiyah recited by Alafasy"
    },
    "youtubeId": "eWtzcjFi9IA",
    "duration": 92,
    "credit": {
      "author": "Mishary Rashid Alafasy (official channel)",
      "license": "YouTube embed",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=eWtzcjFi9IA",
      "sourceName": "@alafasy on YouTube"
    },
    "tags": [
      "ihram",
      "talbiyah",
      "alafasy"
    ]
  },
  {
    "id": "v-alafasy-masjid",
    "type": "video",
    "title": {
      "bn": "মসজিদে প্রবেশ ও বের হওয়ার দোয়া - আলাফাসি",
      "en": "Duas for entering and leaving the mosque - Alafasy"
    },
    "caption": {
      "bn": "আলাফাসির অফিসিয়াল চ্যানেল থেকে মসজিদে প্রবেশ ও বের হওয়ার দোয়া।",
      "en": "The supplications for entering and leaving the mosque, from Alafasy’s official channel."
    },
    "alt": {
      "bn": "আলাফাসির কণ্ঠে মসজিদের দোয়া",
      "en": "Mosque supplications by Alafasy"
    },
    "youtubeId": "8OfGws3NdM8",
    "credit": {
      "author": "Mishary Rashid Alafasy (official channel)",
      "license": "YouTube embed",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=8OfGws3NdM8",
      "sourceName": "@alafasy on YouTube"
    },
    "tags": [
      "entry",
      "alafasy"
    ]
  }
] as (MediaItem & { duration?: number; date?: string })[]))

/** Further official Alafasy recordings (channel verified via YouTube oEmbed, 2026-10-17). */
media.push(...([
  {
    "id": "v-alafasy-travel",
    "type": "video",
    "title": {
      "bn": "সফরের দোয়া - শাইখ মিশারি রাশিদ আলাফাসি",
      "en": "The travel dua - Sheikh Mishary Rashid Alafasy"
    },
    "caption": {
      "bn": "আলাফাসির অফিসিয়াল চ্যানেলের “দুআউস সাফার” (সফরের দোয়া) রেকর্ডিং।",
      "en": "“Du‘a’ al-safar” (the travel supplication) from Alafasy’s official channel."
    },
    "alt": {
      "bn": "সফরের দোয়া - শাইখ মিশারি রাশিদ আলাফাসি",
      "en": "The travel dua - Sheikh Mishary Rashid Alafasy"
    },
    "youtubeId": "jS8FF65I8yU",
    "credit": {
      "author": "Mishary Rashid Alafasy (official channel)",
      "license": "YouTube embed",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=jS8FF65I8yU",
      "sourceName": "@alafasy on YouTube"
    },
    "tags": [
      "travel",
      "alafasy"
    ]
  },
  {
    "id": "v-alafasy-transport",
    "type": "video",
    "title": {
      "bn": "যানবাহনে চড়ার দোয়া - আলাফাসি",
      "en": "The dua on boarding transport - Alafasy"
    },
    "caption": {
      "bn": "আলাফাসির অফিসিয়াল চ্যানেলের “দুআউ রুকুবিদ দাব্বাহ” রেকর্ডিং (যানবাহনে চড়ার দোয়া)।",
      "en": "“Du‘a’ rukub al-dabbah” (the dua on boarding a mount or vehicle) from Alafasy’s official channel."
    },
    "alt": {
      "bn": "যানবাহনে চড়ার দোয়া - আলাফাসি",
      "en": "The dua on boarding transport - Alafasy"
    },
    "youtubeId": "tsH13H_gfDQ",
    "credit": {
      "author": "Mishary Rashid Alafasy (official channel)",
      "license": "YouTube embed",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=tsH13H_gfDQ",
      "sourceName": "@alafasy on YouTube"
    },
    "tags": [
      "travel",
      "alafasy"
    ]
  },
  {
    "id": "v-alafasy-morning",
    "type": "video",
    "title": {
      "bn": "সকালের আজকার - আলাফাসি",
      "en": "Morning adhkar - Alafasy"
    },
    "caption": {
      "bn": "আলাফাসির অফিসিয়াল চ্যানেলের সকালের আজকারের সংকলন। এতে কোন কোন দোয়া আছে তা আমরা আলাদাভাবে যাচাই করতে পারিনি।",
      "en": "A collection of morning adhkar from Alafasy’s official channel. We could not separately verify which duas it contains."
    },
    "alt": {
      "bn": "সকালের আজকার - আলাফাসি",
      "en": "Morning adhkar - Alafasy"
    },
    "youtubeId": "OIWahnI8rSI",
    "credit": {
      "author": "Mishary Rashid Alafasy (official channel)",
      "license": "YouTube embed",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=OIWahnI8rSI",
      "sourceName": "@alafasy on YouTube"
    },
    "tags": [
      "dhikr",
      "alafasy"
    ]
  },
  {
    "id": "v-alafasy-evening",
    "type": "video",
    "title": {
      "bn": "সন্ধ্যার আজকার - আলাফাসি",
      "en": "Evening adhkar - Alafasy"
    },
    "caption": {
      "bn": "আলাফাসির অফিসিয়াল চ্যানেলের সন্ধ্যার আজকারের সংকলন (১৪৩৪ হি.)। এতে কোন কোন দোয়া আছে তা আমরা আলাদাভাবে যাচাই করতে পারিনি।",
      "en": "A collection of evening adhkar from Alafasy’s official channel (1434 AH). We could not separately verify which duas it contains."
    },
    "alt": {
      "bn": "সন্ধ্যার আজকার - আলাফাসি",
      "en": "Evening adhkar - Alafasy"
    },
    "youtubeId": "TGtdZmxsM5Q",
    "credit": {
      "author": "Mishary Rashid Alafasy (official channel)",
      "license": "YouTube embed",
      "licenseUrl": "",
      "sourceUrl": "https://www.youtube.com/watch?v=TGtdZmxsM5Q",
      "sourceName": "@alafasy on YouTube"
    },
    "tags": [
      "dhikr",
      "alafasy"
    ]
  }
] as MediaItem[]))

media.push(...makkahMedia, ...madinahMedia)

export const mediaById = new Map(media.map((m) => [m.id, m]))

export function mediaByTag(tag: string) {
  return media.filter((m) => m.tags.includes(tag))
}
