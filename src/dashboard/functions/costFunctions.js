import R from 'ramda'
import moment from 'moment'

export const getCategories = R.compose(
  R.uniq,
  R.pluck('category'),
  R.values
)

export const getTotalCosts = R.compose(
  R.reduce((cost, total) => cost + total, 0),
  R.pluck('cost'),
  R.values
)

export const getCostsPerCategory = R.compose(
  R.map((groupedCosts) => ({
    category: groupedCosts[0]['category'],
    cost: getTotalCosts(groupedCosts)
  })),
  R.values,
  R.groupBy(({category}) => category),
  R.values
)

export const getCostsPerMonth = R.compose(
  R.groupBy(({time}) => moment(time).format('MMMM')),
  R.sort((cost1, cost2) => moment(cost2.time) - moment(cost1.time)),
  R.values,
  R.mapObjIndexed(({category, cost, time}, id) => ({id, category, cost, time}))
)

export const getCostsPerMonthAndCategory = R.compose(
  R.mapObjIndexed((costs) => getCostsPerCategory(costs)),
  getCostsPerMonth
)

export const getCostsPerYear = R.compose(
  R.groupBy((cost) => moment(cost.time).format('YYYY')),
  R.values
)
