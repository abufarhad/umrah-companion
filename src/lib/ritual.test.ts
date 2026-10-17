import { describe, expect, it } from 'vitest'
import {
  completionRatio,
  emptyProgress,
  neighbours,
  nextIncomplete,
  saiInfo,
  saiNext,
  saiPosition,
  saiUndo,
  setStageComplete,
  tawafInfo,
  tawafNext,
  tawafUndo,
  toggleCheck,
} from './ritualProgress'

describe('tawaf counter', () => {
  it('counts to seven and stops', () => {
    let s = { completed: 0 }
    for (let i = 0; i < 10; i++) s = tawafNext(s)
    expect(s.completed).toBe(7)
    expect(tawafInfo(s).done).toBe(true)
    expect(tawafInfo(s).remaining).toBe(0)
  })
  it('marks raml only for the first three circuits', () => {
    const flags = [0, 1, 2, 3, 4, 5, 6].map((c) => tawafInfo({ completed: c }).ramlForMen)
    expect(flags).toEqual([true, true, true, false, false, false, false])
    expect(tawafInfo({ completed: 7 }).ramlForMen).toBe(false)
  })
  it('undo never goes below zero', () => {
    expect(tawafUndo({ completed: 0 }).completed).toBe(0)
    expect(tawafUndo({ completed: 3 }).completed).toBe(2)
  })
})

describe("sa'i counter", () => {
  it('alternates Safa → Marwah and ends at Marwah', () => {
    expect(saiPosition(0)).toBe('safa')
    expect(saiPosition(1)).toBe('marwah')
    expect(saiPosition(2)).toBe('safa')
    expect(saiPosition(7)).toBe('marwah')
    expect(saiInfo({ completed: 0 }).endsAt).toBe('marwah')
  })
  it('reports direction for the current journey', () => {
    expect(saiInfo({ completed: 0 })).toMatchObject({ from: 'safa', to: 'marwah', current: 1 })
    expect(saiInfo({ completed: 1 })).toMatchObject({ from: 'marwah', to: 'safa', current: 2 })
    expect(saiInfo({ completed: 6 })).toMatchObject({ from: 'safa', to: 'marwah', current: 7 })
  })
  it('stops at seven', () => {
    let s = { completed: 6 }
    s = saiNext(saiNext(s))
    expect(s.completed).toBe(7)
    expect(saiInfo(s).done).toBe(true)
    expect(saiUndo({ completed: 0 }).completed).toBe(0)
  })
})

describe('guide progression', () => {
  const ids = ['a', 'b', 'c']
  it('tracks completion and next step', () => {
    let p = emptyProgress()
    expect(nextIncomplete(p, ids)).toBe('a')
    p = setStageComplete(p, 'a', true)
    expect(nextIncomplete(p, ids)).toBe('b')
    expect(completionRatio(p, ids)).toBeCloseTo(1 / 3)
    p = setStageComplete(setStageComplete(p, 'b', true), 'c', true)
    expect(nextIncomplete(p, ids)).toBeNull()
  })
  it('toggles checklist items', () => {
    let p = toggleCheck(emptyProgress(), 'a', 2)
    p = toggleCheck(p, 'a', 0)
    expect(p.checks.a).toEqual([0, 2])
    p = toggleCheck(p, 'a', 2)
    expect(p.checks.a).toEqual([0])
  })
  it('finds neighbours', () => {
    expect(neighbours(ids, 'a')).toMatchObject({ prev: null, next: 'b' })
    expect(neighbours(ids, 'c')).toMatchObject({ prev: 'b', next: null })
  })
})
