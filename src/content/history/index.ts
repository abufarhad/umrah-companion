import type { SacredPlace } from '../types'
import { kaaba } from './kaaba'
import { haram, madinah, miqat } from './mosques'
import { hajar, hills, zamzam } from './valley'

/** History of the Sacred Places, in reading order. */
export const places: SacredPlace[] = [kaaba, hajar, zamzam, hills, haram, miqat, madinah]
export const placeById = new Map(places.map((p) => [p.id, p]))
