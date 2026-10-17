# Umrah Companion · উমরাহ সঙ্গী

A bilingual (বাংলা / English) Umrah guide and travel planner for pilgrims travelling from Bangladesh.

- **Step-by-step guide.** 12 stages from preparation to completion, each with meaning, steps, rulings, differences of opinion, guidance for men and women, common mistakes, a checklist and a next step.
- **Reference library.** Qur'an, hadith and supplications in Arabic, with transliteration, Bangla and English meanings, source, grading and context. Each is labelled *Prophetic*, *Companion report*, *Qur'an* or *General dua*.
- **Visual learning.** Original animated tutorials for Ihram, Miqat, Tawaf, Sa'i and Halq/Taqsir. Interactive Tawaf (7 circuits) and Sa'i (7 journeys) counters. Official Ministry of Hajj and Umrah videos (click-to-load). Licensed Wikimedia Commons photos.
- **Bangladesh travel planner.** Route steps, Makkah-first vs Madinah-first, Ihram point per route, and travel facts. Every fact shows its sources, whether they are official, a confidence level and the date checked.
- **Budget calculator.** BDT/SAR totals, per person, daily, subtotals, contingency, savings target and three scenarios. Package inclusions can be marked *included*, *not included* or *not sure*, so nothing is counted twice. Exports to CSV or print.
- **Itinerary.** A day-by-day plan with rest buffers, a calendar view, editable day titles and notes, a countdown and preparation deadlines.
- **Summary.** A printable plan, downloadable as text.

The app works fully offline-first: everything is saved in `localStorage`. Supabase is optional.

## Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Motion · React Router · i18next · Lucide · Vitest · Supabase (optional)

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # budget, itinerary, ritual-counter and translation tests
npm run build      # typecheck + production build → dist/
```

## Where things live

| Path | What |
| --- | --- |
| `src/content/references.ts` | Qur'an / hadith / dua entries. **Every entry needs a traceable source.** |
| `src/content/rituals.ts` | The 12 guide stages (bilingual) |
| `src/content/media.ts` | Photo/video metadata with author, licence and source |
| `src/content/travel.ts` | Time-sensitive travel facts with sources, confidence and the date checked |
| `src/content/costConfig.ts` | **Cost assumptions** (exchange rate, hotel rates, fares…). Edit here, or override remotely via Supabase |
| `src/lib/budget.ts` | Pure budget calculation (tested) |
| `src/lib/itinerary.ts` | Itinerary and deadline generation (tested) |
| `src/lib/ritualProgress.ts` | Tawaf/Sa'i counting and guide progression (tested) |
| `src/i18n/{bn,en}.ts` | Interface strings. `bn` is type-checked against `en`, and a test checks the keys match |

## Religious content policy

- Hadith numbers follow **sunnah.com** numbering. They were checked against the live source on 2026-10-17, and each entry links to its page.
- Gradings for collections outside Bukhari/Muslim name who graded them (e.g. al-Albani, or Darussalam as shown on sunnah.com).
- No specific supplication is presented as required for each Tawaf or Sa'i circuit. Companion reports (e.g. *Rabbighfir warham…*) are labelled as such.
- Rulings state their position (majority vs Hanafi etc.). Disagreements are shown under *Difference of opinion*.

Please have a qualified scholar review `src/content/references.ts` and `src/content/rituals.ts` before a public launch.

## Guide, quick mode and duas

- **Guide (`/guide/:page`):** 8 focused steps (`src/content/guidePages.ts`).
  - Each step has compact tabs: Overview, What to do, Duas, Rulings, Mistakes, Photos & videos.
  - Navigation: a step navigator, overall progress, and a one-handed Previous / Complete / Next bar.
  - Progress is saved per stage. Old `/guide/<stage>` links redirect to the right step.
- **Quick mode (`/guide/quick`):** one screen per step with large text, the essentials, the key dua and the Tawaf/Sa'i counters. It remembers where you are.
- **Dua and Ibadah guide (`/duas`, `/duas/:id`):** organised by situation (`src/content/duas*.ts`).
  - Each dua shows: when, where, how, Arabic, Bangla pronunciation, English transliteration, both meanings, audio, reference and grading, virtue and common mistakes.
  - Labels: *Sunnah here*, *Authentic - optional here*, *From a Companion*, *Your own words* and *Not established*. For example, "seeing the Kaaba" is honestly marked not established.
  - Audio is Alafasy for Qur'anic duas and his official videos for the Talbiyah and mosque duas. Everything else uses labelled device speech, with a repeat mode.
- **Fazilat (`/virtues`):** each point is tagged *established*, *scholarly interpretation* or *general benefit*, with expandable evidence.

## Holy cities tour (`/explore`, `/explore/:site`)

- **Sites:** 12 in Makkah and 11 in Madinah (`src/content/tour/*`, generated from research JSON).
  - Coordinates come from Wikidata P625. The Kaaba, Mas'a and Zamzam share Masjid al-Haram's pin.
  - Each site is labelled *Umrah rite*, *Hajj site*, *Miqat*, *Mosque visit* or *Historical*.
  - Visitor notes carry a verified / partly verified / not verified status and the date checked.
- **Site pages:** hero photo, map, timeline (Qur'an / hadith / documented / disputed, each with a source), gallery, synthetic-voice narration and references.
- **Tour planner:** pick places, reorder them, start from editable example tours, and mark places visited.
  - The route opens in Google Maps with waypoints, so Google computes the real roads and travel times; the app never estimates them. Google Maps links take at most 9 waypoints.
  - "Suggested time on site" is a planning suggestion only.
- **Maps:** by default the interactive map is free OpenStreetMap via Leaflet (no key, no account, no billing; tiles © OpenStreetMap contributors). Places and directions open in Google Maps through plain links, which are also free. Setting `VITE_GOOGLE_MAPS_API_KEY` is optional and swaps in the Google Maps JavaScript API instead; see `.env.example`.

## Audio

- **Qur'an recitation:** Sheikh Mishary Rashid Alafasy, streamed per ayah from three mirrors, all serving the same recording (`src/audio/quran.ts`):
  1. Islamic Network / AlQuran.cloud. Its terms allow free educational, non-commercial streaming, and the reciter keeps copyright.
  2. Quran.com.
  3. EveryAyah.
- **Word sync:** word-by-word highlighting uses Quran.com word timings (recitation id 7), fetched at runtime. If they fail to load, the whole ayah is highlighted instead.
- **Hadith and duas:** no verified Alafasy recording of these hadith exists. They are offered through the device's text-to-speech in Arabic, Bangla or English, always labelled *synthetic voice*. No voice is cloned or imitated, and no recording is attributed to a reciter unless the source verifies it.
- **Official videos:** embeds from Alafasy's official channel (@alafasy, verified via oEmbed): the Talbiyah and the mosque-entry duas.
- **Player:** one global player above the router (`src/audio/AudioProvider.tsx`). Playback survives navigation, and a mini-player appears on every page. Controls: play/pause, seek, 0.75–1.5× speed, replay, volume/mute, previous/next part, synced transcript, lock-screen metadata, and loading/error states.

## History of the Sacred Places

`/history` has seven chapters: the Kaaba, Hajar and Sa'i, Zamzam, Safa and Marwah, Masjid al-Haram, the Miqat, and Madinah (marked optional, not part of Umrah). Content lives in `src/content/history/*`.

Each chapter contains:
- an intro and the story, with a pinned scene that changes as you read;
- a timeline scrubber;
- the connection to the Umrah guide;
- Qur'an and hadith references;
- then/now photos;
- recitations plus a synthetic-voice narration;
- a quiz.

Every statement is classified as *Qur'anic*, *Authentic hadith*, *Documented*, *Scholarly interpretation* or *Disputed*. Documented claims cite sources: Britannica, Saudipedia, SPA, Arab News and sunnah.com. Illustrations are symbolic SVG, with no people, prophets or angels depicted and no invented ancient architecture. Historical photos are public-domain or CC images from Wikimedia Commons. `src/content/history.test.ts` checks that every reference, photo, track and guide step a chapter points to exists.

## Optional: Supabase

1. Create a project and run `supabase/migrations/0001_init.sql` in the SQL editor. It creates:
   - `trips` - one saved plan per user, with row-level security so users only see their own row.
   - `app_config` - public read-only key/value config.
2. Enable **Email** auth (magic link) and add your site URL to the redirect URLs.
3. Copy `.env.example` to `.env.local` and set `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

What it enables:

- **Settings → Sync across devices.** Sign in with an email link, then save or restore the plan.
- **Remote cost assumptions.** Insert a row with key `cost_config` holding any partial `CostConfig` JSON, for example `{"sarToBdt": 33.1, "reviewed": "2026-11-01"}`. Every visitor picks it up without a redeploy.

No passport numbers or identity documents are collected or stored.

## Known gaps / to connect later

- **Live prices.** There is no flight, hotel or exchange-rate API. All prices are labelled, editable assumptions (calibrated against non-official package listings in Jul 2026). The exchange rate is derived from the Bangladesh Bank USD rate and the SAR peg.
- **Videos.** No official full step-by-step Umrah walkthrough video was found. The 5 embedded official clips are short, in Arabic, and the Bangla/English captions explain them. The original animated tutorials cover the full rites.
- **Travel facts.** Several official sites (nusuk.sa, Biman, the e-passport fee page, HHR fares) could not be read automatically. Those facts are marked *partly confirmed* and link to the official page for verification.
- **Polio vaccine.** Whether Bangladesh is on Saudi Arabia's polio list could not be confirmed. The app says so and points to the MoH document.
