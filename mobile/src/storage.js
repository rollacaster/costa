import Realm from 'realm'

const Cost = {
  schema: {
    name: 'Cost',
    properties: {
      category: 'string',
      cost: 'double',
      date: {type: 'date', default: new Date()}
    }
  }
}

const realm = new Realm({schema: [Cost]})

export const createCost = ({category, cost}) =>
  realm.write(() => realm.create('Cost', {category, cost}))

export const deleteCosts = () =>
  realm.write(() => realm.delete(realm.objects('Cost')))

export const listCosts = () => realm.objects('Cost')
