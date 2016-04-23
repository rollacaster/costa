import R from 'ramda'
import moment from 'moment'

const flattenCosts = R.compose(
  R.values,
  R.mapObjIndexed(({category, cost, time}, id) => ({id, category, cost, time}))
)

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

export const sortCosts = ({sortBy = 'time', desc = true}) => {
  let sorter = R.sort((cost1, cost2) => desc
                      ? moment(cost2.time) - moment(cost1.time)
                      : moment(cost1.time) - moment(cost2.time)
                     )

  switch (sortBy) {
    case 'cost':
      sorter = R.sort((cost1, cost2) => desc
                    ? cost2.cost - cost1.cost
                    : cost1.cost - cost2.cost
                   )
      break
    case 'category':
      sorter = R.sort((cost1, cost2) => desc
                    ? cost2.category > cost1.category ? -1 : 1
                    : cost2.category < cost1.category ? -1 : 1
                   )
      break
  }

  return R.compose(
    sorter,
    flattenCosts
  )
}

export const getCostsPerMonth = R.compose(
  R.groupBy(({time}) => moment(time).format('MMMM')),
  flattenCosts
)

export const getCostsPerMonthAndCategory = R.compose(
  R.mapObjIndexed((costs) => getCostsPerCategory(costs)),
  getCostsPerMonth,
  flattenCosts
)

export const getCostsPerYear = R.compose(
  R.groupBy((cost) => moment(cost.time).format('YYYY')),
  R.values
)
