export const CREDATE_COSTS = 'CREDATE_COSTS'

export function credateCosts ({ category, cost }) {
  return {
    type: CREDATE_COSTS,
    category,
    cost
  }
}
