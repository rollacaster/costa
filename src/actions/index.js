import uuid from 'uuid'

export const CREATE_COST = 'CREATE_COST'

export function createCost ({ category, cost }) {
  return {
    type: CREATE_COST,
    id: uuid.v1(),
    time: new Date(),
    category,
    cost: parseFloat(cost)
  }
}
