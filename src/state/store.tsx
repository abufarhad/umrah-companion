import { createContext, useContext, useEffect, useMemo, useReducer, useState, type ReactNode } from 'react'
import { defaultCostConfig, type CostConfig } from '../content/costConfig'
import { defaultTripInputs, type TripInputs } from '../lib/budget'
import type { Airport, Order } from '../lib/itinerary'
import { fetchRemoteCostConfig } from '../lib/remoteConfig'
import { emptyProgress, type GuideProgress } from '../lib/ritualProgress'
import { readJson, writeJson } from '../lib/storage'

/**
 * Everything the user enters lives here and is saved to localStorage on every
 * change. The interface language is stored separately (i18n), so switching
 * language never touches progress or trip details.
 */

export interface PlanInputs {
  departureDate: string
  totalDays: number
  order: Order
  arrival: Airport
  madinahNights: number | null
}

export interface Settings {
  textScale: number
  motion: 'system' | 'reduce' | 'full'
  showTransliteration: boolean
}

export interface TourState {
  city: 'makkah' | 'madinah'
  /** Ordered list of selected site ids (the user's own tour) */
  selected: string[]
  visited: Record<string, boolean>
  mode: 'driving' | 'walking' | 'transit'
}

export interface AppState {
  version: 1
  progress: GuideProgress
  plan: PlanInputs
  trip: TripInputs
  /** Per-day user edits: day index → note / custom title */
  dayNotes: Record<number, string>
  dayTitles: Record<number, string>
  /** Pre-departure checklist: deadline key → done */
  prep: Record<string, boolean>
  /** User overrides of cost assumptions (e.g. exchange rate) */
  costOverrides: Partial<CostConfig>
  settings: Settings
  tour: TourState
  updatedAt: string
}

const STORAGE_KEY = 'umrah-companion:v1'

export function initialState(): AppState {
  return {
    version: 1,
    progress: emptyProgress(),
    plan: { departureDate: '', totalDays: 10, order: 'makkah-first', arrival: 'JED', madinahNights: null },
    trip: defaultTripInputs(),
    dayNotes: {},
    dayTitles: {},
    prep: {},
    costOverrides: {},
    settings: { textScale: 1, motion: 'system', showTransliteration: true },
    tour: { city: 'makkah', selected: [], visited: {}, mode: 'driving' },
    updatedAt: new Date().toISOString(),
  }
}

/** Merge saved/remote data over defaults so new fields always exist. */
export function hydrate(saved: Partial<AppState> | null): AppState {
  const base = initialState()
  if (!saved || saved.version !== 1) return base
  return {
    ...base,
    ...saved,
    progress: { ...base.progress, ...saved.progress },
    plan: { ...base.plan, ...saved.plan },
    trip: { ...base.trip, ...saved.trip, inclusions: { ...base.trip.inclusions, ...saved.trip?.inclusions } },
    settings: { ...base.settings, ...saved.settings },
    tour: { ...base.tour, ...saved.tour },
  }
}

type Action =
  | { type: 'progress'; value: GuideProgress }
  | { type: 'plan'; value: Partial<PlanInputs> }
  | { type: 'trip'; value: Partial<TripInputs> }
  | { type: 'dayNote'; index: number; value: string }
  | { type: 'dayTitle'; index: number; value: string }
  | { type: 'resetDays' }
  | { type: 'prep'; key: string; value: boolean }
  | { type: 'cost'; value: Partial<CostConfig> }
  | { type: 'resetCost' }
  | { type: 'settings'; value: Partial<Settings> }
  | { type: 'tour'; value: Partial<TourState> }
  | { type: 'replace'; value: AppState }
  | { type: 'resetAll' }

function reducer(state: AppState, a: Action): AppState {
  const next = (s: Partial<AppState>): AppState => ({ ...state, ...s, updatedAt: new Date().toISOString() })
  switch (a.type) {
    case 'progress':
      return next({ progress: a.value })
    case 'plan':
      return next({ plan: { ...state.plan, ...a.value } })
    case 'trip':
      return next({ trip: { ...state.trip, ...a.value } })
    case 'dayNote':
      return next({ dayNotes: { ...state.dayNotes, [a.index]: a.value } })
    case 'dayTitle':
      return next({ dayTitles: { ...state.dayTitles, [a.index]: a.value } })
    case 'resetDays':
      return next({ dayNotes: {}, dayTitles: {} })
    case 'prep':
      return next({ prep: { ...state.prep, [a.key]: a.value } })
    case 'cost':
      return next({ costOverrides: { ...state.costOverrides, ...a.value } })
    case 'resetCost':
      return next({ costOverrides: {} })
    case 'settings':
      return next({ settings: { ...state.settings, ...a.value } })
    case 'tour':
      return next({ tour: { ...state.tour, ...a.value } })
    case 'replace':
      return hydrate(a.value)
    case 'resetAll':
      return initialState()
  }
}

interface Store {
  state: AppState
  dispatch: (a: Action) => void
  /** Defaults ← remote (Supabase) ← user overrides */
  costConfig: CostConfig
  remoteConfigLoaded: boolean
}

const Ctx = createContext<Store | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, null, () => hydrate(readJson<AppState>(STORAGE_KEY)))
  const [remote, setRemote] = useState<Partial<CostConfig> | null>(null)
  const [remoteConfigLoaded, setLoaded] = useState(false)

  useEffect(() => {
    writeJson(STORAGE_KEY, state)
  }, [state])

  useEffect(() => {
    fetchRemoteCostConfig().then((c) => {
      setRemote(c)
      setLoaded(true)
    })
  }, [])

  // Apply display settings globally.
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--text-scale', String(state.settings.textScale))
    if (state.settings.motion === 'system') delete root.dataset.motion
    else root.dataset.motion = state.settings.motion
  }, [state.settings])

  const costConfig = useMemo<CostConfig>(
    () => ({ ...defaultCostConfig, ...remote, ...state.costOverrides }),
    [remote, state.costOverrides],
  )

  const value = useMemo(() => ({ state, dispatch, costConfig, remoteConfigLoaded }), [state, costConfig, remoteConfigLoaded])
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function useStore(): Store {
  const s = useContext(Ctx)
  if (!s) throw new Error('useStore outside StoreProvider')
  return s
}
