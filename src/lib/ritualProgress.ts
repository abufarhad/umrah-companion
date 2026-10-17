/**
 * Ritual counters and guide progression. Pure functions so they can be tested
 * and so the UI can never drift from the counting rules.
 *
 * Tawaf: 7 circuits, each starting and ending at the Black Stone line, Kaaba on the left.
 * Sa'i : 7 one-way journeys. Safa → Marwah is 1, Marwah → Safa is 2 … the 7th ends at Marwah.
 */

export const TAWAF_CIRCUITS = 7
export const SAI_LAPS = 7

export interface TawafState {
  completed: number
}

export function tawafNext(s: TawafState): TawafState {
  return { completed: Math.min(TAWAF_CIRCUITS, s.completed + 1) }
}

export function tawafUndo(s: TawafState): TawafState {
  return { completed: Math.max(0, s.completed - 1) }
}

export function tawafInfo(s: TawafState) {
  const current = Math.min(TAWAF_CIRCUITS, s.completed + 1)
  return {
    done: s.completed >= TAWAF_CIRCUITS,
    /** The circuit currently being walked (1-7), or 7 when done */
    current,
    /** Raml (brisk walking) is Sunnah for men in the first three circuits only */
    ramlForMen: !(s.completed >= TAWAF_CIRCUITS) && current <= 3,
    remaining: TAWAF_CIRCUITS - s.completed,
  }
}

export type Hill = 'safa' | 'marwah'

export interface SaiState {
  completed: number
}

export function saiNext(s: SaiState): SaiState {
  return { completed: Math.min(SAI_LAPS, s.completed + 1) }
}

export function saiUndo(s: SaiState): SaiState {
  return { completed: Math.max(0, s.completed - 1) }
}

/** Where the pilgrim stands after `completed` journeys. */
export function saiPosition(completed: number): Hill {
  return completed % 2 === 0 ? 'safa' : 'marwah'
}

export function saiInfo(s: SaiState) {
  const done = s.completed >= SAI_LAPS
  const from = saiPosition(s.completed)
  return {
    done,
    current: Math.min(SAI_LAPS, s.completed + 1),
    from,
    to: (from === 'safa' ? 'marwah' : 'safa') as Hill,
    /** Sa'i always ends at Marwah */
    endsAt: saiPosition(SAI_LAPS),
    remaining: SAI_LAPS - s.completed,
  }
}

/* ------------------------------------------------------------------ */
/* Guide progression                                                  */
/* ------------------------------------------------------------------ */

export interface GuideProgress {
  /** stageId → completed */
  completed: Record<string, boolean>
  /** stageId → indexes of ticked checklist items */
  checks: Record<string, number[]>
  tawaf: number
  sai: number
}

export const emptyProgress = (): GuideProgress => ({ completed: {}, checks: {}, tawaf: 0, sai: 0 })

export function toggleCheck(p: GuideProgress, stageId: string, index: number): GuideProgress {
  const cur = new Set(p.checks[stageId] ?? [])
  if (cur.has(index)) cur.delete(index)
  else cur.add(index)
  return { ...p, checks: { ...p.checks, [stageId]: [...cur].sort((a, b) => a - b) } }
}

export function setStageComplete(p: GuideProgress, stageId: string, done: boolean): GuideProgress {
  return { ...p, completed: { ...p.completed, [stageId]: done } }
}

export function completionRatio(p: GuideProgress, stageIds: string[]): number {
  if (stageIds.length === 0) return 0
  return stageIds.filter((id) => p.completed[id]).length / stageIds.length
}

/** First stage not yet completed, or null when all are done. */
export function nextIncomplete(p: GuideProgress, stageIds: string[]): string | null {
  return stageIds.find((id) => !p.completed[id]) ?? null
}

export function neighbours(stageIds: string[], id: string) {
  const i = stageIds.indexOf(id)
  return {
    prev: i > 0 ? stageIds[i - 1] : null,
    next: i >= 0 && i < stageIds.length - 1 ? stageIds[i + 1] : null,
    index: i,
  }
}
