import fs from 'fs'
import _ from 'highland'

export default path => {
  const splitLinesByComma = line => line.split(',')
  const validCosts = costArray => !isNaN(costArray[1])
  const costShape = costArray => ({
    type: 'ADD_COSTS',
    category: costArray[0],
    cost: costArray[1]
  })

  return _(fs.createReadStream(path))
    .split()
    .map(splitLinesByComma)
    .filter(validCosts)
    .map(costShape)
    .reduce([], (a, b) => a.concat([b]))
}
