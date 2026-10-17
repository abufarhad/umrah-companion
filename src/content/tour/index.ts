import type { TourPreset, TourSite } from '../types'
import { madinahSites } from './madinah'
import { makkahSites } from './makkah'

export const tourSites: TourSite[] = [...makkahSites, ...madinahSites]
export const siteById = new Map(tourSites.map((s) => [s.id, s]))
export const sitesIn = (city: 'makkah' | 'madinah') => tourSites.filter((s) => s.city === city)

/**
 * Editable example tours. They are suggestions for historical learning, not
 * religious requirements; the visit order is the user's to change.
 */
export const presets: TourPreset[] = [
  {
    id: 'makkah-short',
    city: 'makkah',
    title: { bn: 'মক্কা: সংক্ষিপ্ত ঐতিহাসিক ভ্রমণ', en: 'Makkah: short historical tour' },
    description: { bn: 'হেরা ও সাওর পাহাড় দূর থেকে দেখা এবং তানঈম মসজিদ - কয়েক ঘণ্টা।', en: 'Views of Jabal al-Nour and Jabal Thawr, and Masjid Aisha - a few hours.' },
    siteIds: ['jabal-al-nour-hira', 'jabal-thawr', 'masjid-aisha-tanim'],
  },
  {
    id: 'makkah-full',
    city: 'makkah',
    title: { bn: 'মক্কা: পূর্ণ দিনের ভ্রমণ', en: 'Makkah: full-day exploration' },
    description: { bn: 'হজের স্থানগুলো (মিনা, মুজদালিফা, আরাফাত) সহ ঐতিহাসিক পাহাড় ও কবরস্থান।', en: 'The Hajj sites (Mina, Muzdalifah, Arafat) with the historical mountains and cemetery.' },
    siteIds: ['jannat-al-mualla', 'jabal-al-nour-hira', 'mina', 'muzdalifah', 'arafat', 'masjid-namirah', 'jabal-thawr'],
  },
  {
    id: 'madinah-short',
    city: 'madinah',
    title: { bn: 'মদিনা: সংক্ষিপ্ত ঐতিহাসিক ভ্রমণ', en: 'Madinah: short historical tour' },
    description: { bn: 'কুবা, কিবলাতাইন ও উহুদ - সকালের কয়েক ঘণ্টা।', en: 'Quba, Qiblatayn and Uhud - a few morning hours.' },
    siteIds: ['quba', 'qiblatayn', 'uhud-martyrs', 'jabal-rumat'],
  },
  {
    id: 'madinah-full',
    city: 'madinah',
    title: { bn: 'মদিনা: পূর্ণ দিনের ভ্রমণ', en: 'Madinah: full-day exploration' },
    description: { bn: 'মসজিদে নববীর আশপাশ থেকে উহুদ ও খন্দক পর্যন্ত।', en: 'From around the Prophet’s Mosque out to Uhud and the Trench.' },
    siteIds: ['masjid-nabawi', 'baqi', 'ghamamah', 'quba', 'qiblatayn', 'khandaq', 'uhud', 'uhud-martyrs', 'jabal-rumat'],
  },
]
