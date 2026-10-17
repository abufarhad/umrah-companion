import i18n from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'
import type { Lang } from '../content/types'
import { readString, writeString } from '../lib/storage'
import { bn } from './bn'
import { en } from './en'

const LANG_KEY = 'umrah-companion:lang'

function initialLang(): Lang {
  const saved = readString(LANG_KEY)
  // Bangla is the default for first-time visitors; English is one tap away.
  return saved === 'en' || saved === 'bn' ? saved : 'bn'
}

const lng = initialLang()

void i18n.use(initReactI18next).init({
  resources: { bn: { translation: bn }, en: { translation: en } },
  lng,
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
  returnNull: false,
})

function applyLang(l: string) {
  document.documentElement.lang = l
  document.title = l === 'bn' ? 'উমরাহ সঙ্গী · উমরাহ শিখুন ও সফর পরিকল্পনা' : 'Umrah Companion · Learn Umrah and plan your trip'
}
applyLang(lng)

i18n.on('languageChanged', (l) => {
  writeString(LANG_KEY, l)
  applyLang(l)
})

/** Current language plus a typed `t`. */
export function useLang() {
  const { t, i18n: inst } = useTranslation()
  const lang = (inst.language === 'en' ? 'en' : 'bn') as Lang
  return { t, lang, setLang: (l: Lang) => void inst.changeLanguage(l) }
}

export default i18n
