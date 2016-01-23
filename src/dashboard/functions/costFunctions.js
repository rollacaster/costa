import R from 'ramda'

export const getTotalCosts = R.compose(
  R.reduce((cost, total) => cost + total, 0),
  R.pluck('cost'),
  R.values
)

export const getCostsPerCategory = R.compose(
  R.map(groupedCosts => ({
    category: groupedCosts[0]['category'],
    costs: getTotalCosts(groupedCosts)
  })),
  R.values,
  R.groupBy(({category, cost}) => category),
  R.values
)

export const getCategories = R.compose(
  R.uniq,
  R.pluck('category'),
  R.values
)
