import { useMemo } from 'react'
import { calculateBudget } from '../lib/budget'
import { generateItinerary } from '../lib/itinerary'
import { useStore } from './store'

/**
 * The planner, calculator, itinerary and summary all read from one plan, so
 * changing the trip length in one place updates everything else.
 */
export function useDerived() {
  const { state, costConfig } = useStore()
  const itinerary = useMemo(() => generateItinerary(state.plan), [state.plan])
  const budget = useMemo(
    () =>
      calculateBudget(
        {
          ...state.trip,
          departureDate: state.plan.departureDate,
          makkahNights: itinerary.makkahNights,
          madinahNights: itinerary.madinahNights,
        },
        costConfig,
      ),
    [state.trip, state.plan.departureDate, itinerary, costConfig],
  )
  return { itinerary, budget }
}
