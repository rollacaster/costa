import fs from 'fs'
import _ from 'highland'

import { CREDATE_COSTS } from '../actions'

export default path => {
  const splitLinesByComma = line => line.split(',')
  const validCosts = costArray => !isNaN(costArray[1])
  const costShape = costArray => ({
    type: CREDATE_COSTS,
    category: costArray[0],
    cost: parseFloat(costArray[1], 2)
  })

  return _(fs.createReadStream(path))
    .split()
    .map(splitLinesByComma)
    .filter(validCosts)
    .map(costShape)
}
