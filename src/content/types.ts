/**
 * Typed content model. Religious text, media metadata and travel data live in
 * `src/content/*` - never inside UI components - so they can be reviewed and
 * corrected independently of the interface.
 */

export type Lang = 'bn' | 'en'

/** A string in both interface languages. Arabic is stored separately and never translated. */
export interface L10n {
  bn: string
  en: string
}

export type L10nList = { bn: string[]; en: string[] }

/* ------------------------------------------------------------------ */
/* Religious references                                               */
/* ------------------------------------------------------------------ */

export type Topic = 'umrah' | 'kaaba' | 'tawaf' | 'safa-marwah' | 'zamzam' | 'ihram' | 'ibrahim' | 'prophet' | 'makkah' | 'madinah'

export type ReferenceKind = 'quran' | 'hadith' | 'athar' | 'scholarly'

/**
 * How the text relates to the ritual.
 * - `prophetic`  : authentically reported from the Prophet ﷺ for this situation
 * - `quran`      : a Qur'anic verse
 * - `companion`  : reported from a Companion (mawquf), not the Prophet ﷺ
 * - `general`    : an authentic general supplication; its use at this point is a personal choice
 */
export type Attribution = 'prophetic' | 'quran' | 'companion' | 'general'

export interface Grading {
  /** e.g. "Sahih", "Hasan" */
  grade: L10n
  /** who graded it, e.g. "al-Albani" - omitted for Bukhari/Muslim where the collection itself is authoritative */
  by?: string
}

export interface Reference {
  id: string
  kind: ReferenceKind
  attribution: Attribution
  title: L10n
  arabic?: string
  transliteration?: string
  meaning: L10n
  /** Human-readable source, e.g. "Sahih al-Bukhari 1773" or "Qur'an 2:196" */
  source: string
  /** Verse keys recited for this reference (enables Alafasy recitation audio) */
  ayahs?: string[]
  /** Topics for filtering the library */
  topics?: Topic[]
  /** Canonical online source (sunnah.com / quran.com). Only set when verified. */
  url?: string
  /** Additional collections that report the same text */
  alsoIn?: string[]
  grading?: Grading
  context: L10n
  /** Numbering differs between editions - state which numbering is used */
  numbering?: string
  /** Shown as a caution: e.g. "commonly recited, wording not established for this ritual" */
  note?: L10n
}

/* ------------------------------------------------------------------ */
/* Ritual guide                                                       */
/* ------------------------------------------------------------------ */

/** Ruling categories, always tied to the cited position (schools may differ). */
export type RulingLevel = 'pillar' | 'obligatory' | 'sunnah' | 'permissible' | 'prohibited' | 'practical'

export interface Ruling {
  level: RulingLevel
  text: L10n
  /** Optional: which school or scholars hold this position */
  position?: L10n
  refs?: string[]
}

export interface Difference {
  topic: L10n
  views: { holders: L10n; view: L10n }[]
  refs?: string[]
}

export type Audience = 'all' | 'men' | 'women'

export interface StepInstruction {
  text: L10n
  audience?: Audience
  refs?: string[]
}

export interface Mistake {
  mistake: L10n
  fix: L10n
}

export type AnimationId =
  | 'ihram'
  | 'miqat-map'
  | 'talbiyah'
  | 'masjid-entry'
  | 'tawaf'
  | 'prayer-maqam'
  | 'zamzam'
  | 'sai'
  | 'halq'
  | 'complete'
  | 'documents'
  | 'packing'
  | 'journey'
  | 'madinah'

export interface RitualStage {
  id: string
  /** 1-based order */
  order: number
  /** Whether the stage is part of the Umrah rites themselves (vs. preparation / after) */
  isRite: boolean
  icon: string
  title: L10n
  short: L10n
  meaning: L10n
  why: L10n
  steps: StepInstruction[]
  rulings: Ruling[]
  differences?: Difference[]
  forMen?: L10n[]
  forWomen?: L10n[]
  mistakes: Mistake[]
  refs: string[]
  animation: AnimationId
  /** Media ids from media.ts */
  media: string[]
  checklist: L10n[]
  /** Practical (non-religious) tips, clearly separated */
  practical?: L10n[]
}

/* ------------------------------------------------------------------ */
/* Media                                                              */
/* ------------------------------------------------------------------ */

export type MediaType = 'photo' | 'video' | 'illustration'

export interface MediaItem {
  id: string
  type: MediaType
  title: L10n
  caption: L10n
  alt: L10n
  /** Photo URL or YouTube id for video. Illustrations are rendered by components. */
  src?: string
  youtubeId?: string
  animation?: AnimationId
  credit?: {
    author: string
    license: string
    licenseUrl?: string
    sourceUrl: string
    sourceName: string
  }
  tags: string[]
}

/* ------------------------------------------------------------------ */
/* Travel sources                                                     */
/* ------------------------------------------------------------------ */

export interface SourceLink {
  title: L10n
  url: string
  /** ISO date the information was last checked */
  checked: string
  official: boolean
}

/* ------------------------------------------------------------------ */
/* History of the sacred places                                       */
/* ------------------------------------------------------------------ */

/**
 * How a historical statement is known. Every chapter and timeline event
 * carries one, and the UI labels it.
 */
export type ClaimKind = 'quran' | 'hadith' | 'documented' | 'scholarly' | 'disputed'

export interface HistorySource {
  title: string
  url: string
}

export interface TimelineEvent {
  id: string
  /** Display date, e.g. { en: '8 AH / 630 CE', bn: '৮ হিজরি / ৬৩০ খ্রি.' } */
  when: L10n
  /** Sort key: CE year (negative/approximate allowed); null = undated */
  year: number | null
  title: L10n
  text: L10n
  kind: ClaimKind
  refs?: string[]
  sources?: HistorySource[]
  /** Scene stage to show when this event is selected */
  stage?: string
}

export interface StoryChapter {
  id: string
  title: L10n
  body: L10n
  kind: ClaimKind
  refs?: string[]
  sources?: HistorySource[]
  /** Scene stage illustrated while this chapter is on screen */
  stage?: string
}

export interface QuizQuestion {
  q: L10n
  options: L10n[]
  answer: number
  explain: L10n
}

export interface ThenNow {
  then: { mediaId?: string; text: L10n }
  now: { mediaId?: string; text: L10n }
}

export type SceneId = 'kaaba' | 'hajar' | 'zamzam' | 'hills' | 'haram' | 'miqat' | 'madinah'

export interface SacredPlace {
  id: string
  order: number
  scene: SceneId
  title: L10n
  subtitle: L10n
  /** Visiting this place is not part of the Umrah rites */
  optional?: boolean
  intro: L10n
  beginning: StoryChapter
  story: StoryChapter[]
  timeline: TimelineEvent[]
  umrah: { text: L10n; stageId: string }
  refs: string[]
  thenNow: ThenNow
  /** Audio track ids (src/audio/tracks.ts) */
  audio: string[]
  quiz: QuizQuestion[]
}

/* ------------------------------------------------------------------ */
/* Dua and Ibadah guide                                               */
/* ------------------------------------------------------------------ */

/**
 * How a supplication relates to the moment it is listed under.
 * - sunnah          : the Prophet ﷺ said/did this at this point (authentic)
 * - general         : an authentic supplication; saying it here is optional
 * - companion       : reported from a Companion, not the Prophet ﷺ
 * - personal        : no fixed wording - supplicate in your own words
 * - not-established : a popular wording whose specific attribution is not established
 */
export type DuaStatus = 'sunnah' | 'general' | 'companion' | 'personal' | 'not-established'

export type DuaCategoryId =
  | 'travel'
  | 'ihram'
  | 'mosque'
  | 'kaaba'
  | 'tawaf'
  | 'sai'
  | 'zamzam'
  | 'prayer'
  | 'dhikr'
  | 'personal'
  | 'madinah'

export interface Dua {
  id: string
  category: DuaCategoryId
  title: L10n
  /** Library reference supplying Arabic, meaning, source and grading */
  refId?: string
  /** Overrides when the dua isn't a library reference */
  arabic?: string
  transliteration?: string
  meaning?: L10n
  /** Bengali-script pronunciation (a learning aid) */
  bnPron?: string
  when: L10n
  where: L10n
  how: L10n
  status: DuaStatus
  /** e.g. "The intention itself is obligatory; these words are not" */
  statusNote?: L10n
  virtue?: { text: L10n; refs: string[]; kind: 'established' | 'interpretation' }
  mistakes: L10n[]
  tips?: L10n[]
  /** Extra references (e.g. evidence for "not established") */
  refs?: string[]
  /** Official recordings of this exact dua (media ids), e.g. Alafasy's Talbiyah video */
  videoIds?: string[]
  stageIds?: string[]
}

export interface VirtueTopic {
  id: string
  title: L10n
  summary: L10n
  /** established = stated in Qur'an/authentic hadith; interpretation = scholars' explanation */
  points: { text: L10n; kind: 'established' | 'interpretation' | 'general'; refs: string[] }[]
}

/* ------------------------------------------------------------------ */
/* Holy cities tour                                                   */
/* ------------------------------------------------------------------ */

/** How a site relates to Umrah - shown on every card so nobody mistakes a historical visit for a rite. */
export type SiteRelation = 'umrah-rite' | 'hajj-site' | 'miqat' | 'mosque-visit' | 'historical'

export interface TourSite {
  id: string
  city: 'makkah' | 'madinah'
  name: L10n
  relation: SiteRelation
  /** Coordinates from Wikidata (P625) or an official source - never estimated */
  lat: number
  lng: number
  coordSource: { label: string; url: string }
  /** Inside another site (e.g. the Kaaba inside Masjid al-Haram): shares its map pin */
  within?: string
  intro: L10n
  timeline: TimelineEvent[]
  media: string[]
  visitor: { text: L10n; sources: HistorySource[]; checked: string; status: 'verified' | 'partial' | 'unverified' }
  refs: string[]
  /** Suggested time on site in minutes - a planning suggestion, not a travel time */
  suggestMinutes?: number
  /** Related history chapter (/history/:id) */
  historyId?: string
  /** Related guide page (/guide/:id) */
  guideId?: string
  /** Optional animated scene */
  scene?: { id: SceneId; stage: string }
}

export interface TourPreset {
  id: string
  city: 'makkah' | 'madinah'
  title: L10n
  description: L10n
  siteIds: string[]
}
