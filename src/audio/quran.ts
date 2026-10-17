/**
 * Qur'an recitation by Sheikh Mishary Rashid Alafasy, streamed per ayah.
 *
 * Sources (verified 2026-10-17, all serve the same 128 kbps recording):
 *  1. Islamic Network CDN (AlQuran.cloud) - its terms allow free streaming for
 *     personal and educational non-commercial use; reciters retain copyright.
 *  2. Quran.com CDN (Quran Foundation) - also provides word timings.
 *  3. EveryAyah.com - mirror.
 * The <audio> element is used without `crossOrigin`, so mirrors without CORS still play.
 */

/** Verses per surah (Hafs), used to compute global ayah numbers for the Islamic Network CDN. */
export const SURAH_LENGTHS = [
  7, 286, 200, 176, 120, 165, 206, 75, 129, 109, 123, 111, 43, 52, 99, 128, 111, 110, 98, 135, 112, 78, 118, 64, 77, 227, 93, 88, 69, 60, 34, 30, 73,
  54, 45, 83, 182, 88, 75, 85, 54, 53, 89, 59, 37, 35, 38, 29, 18, 45, 60, 49, 62, 55, 78, 96, 29, 22, 24, 13, 14, 11, 11, 18, 12, 12, 30, 52, 52, 44,
  28, 28, 20, 56, 40, 31, 50, 40, 46, 42, 29, 19, 36, 25, 22, 17, 19, 26, 30, 20, 15, 21, 11, 8, 8, 19, 5, 8, 8, 11, 11, 8, 3, 9, 5, 4, 7, 3, 6, 3, 5,
  4, 5, 6,
]

export function parseKey(key: string): [number, number] {
  const [s, a] = key.split(':').map(Number)
  if (!Number.isInteger(s) || !Number.isInteger(a) || s < 1 || s > 114 || a < 1 || a > SURAH_LENGTHS[s - 1]) throw new Error(`Invalid verse key ${key}`)
  return [s, a]
}

export function globalAyah(key: string): number {
  const [s, a] = parseKey(key)
  return SURAH_LENGTHS.slice(0, s - 1).reduce((x, y) => x + y, 0) + a
}

const pad = (n: number) => String(n).padStart(3, '0')

export function recitationUrls(key: string): string[] {
  const [s, a] = parseKey(key)
  const file = `${pad(s)}${pad(a)}.mp3`
  return [
    `https://cdn.islamic.network/quran/audio/128/ar.alafasy/${globalAyah(key)}.mp3`,
    `https://verses.quran.com/Alafasy/mp3/${file}`,
    `https://everyayah.com/data/Alafasy_128kbps/${file}`,
  ]
}

export interface WordTiming {
  position: number
  text: string
  /** ms; null when the word has no timing (e.g. ayah-end marker) */
  start: number | null
  end: number | null
}

const cache = new Map<string, Promise<WordTiming[] | null>>()

/**
 * Word text and timings for Alafasy (Quran.com recitation id 7). Words and
 * segments come from the same response, so positions always line up. Returns
 * null on any failure; the UI then falls back to ayah-level highlighting.
 */
export function fetchWordTimings(key: string): Promise<WordTiming[] | null> {
  if (!cache.has(key)) {
    const url = `https://api.quran.com/api/v4/verses/by_key/${key}?audio=7&words=true&word_fields=text_uthmani`
    cache.set(
      key,
      fetch(url)
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => {
          const words: { position: number; text_uthmani?: string; char_type_name?: string }[] = j?.verse?.words ?? []
          const segs: number[][] = j?.verse?.audio?.segments ?? []
          if (!words.length || !segs.length) return null
          const byPos = new Map(segs.filter((s) => s.length >= 4).map((s) => [s[1], s]))
          return words
            .filter((w) => w.char_type_name !== 'end')
            .map((w) => ({ position: w.position, text: w.text_uthmani ?? '', start: byPos.get(w.position)?.[2] ?? null, end: byPos.get(w.position)?.[3] ?? null }))
        })
        .catch(() => null),
    )
  }
  return cache.get(key)!
}
