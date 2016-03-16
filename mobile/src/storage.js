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

const Category = {
  schema: {
    name: 'Category',
    properties: {
      name: 'string'
    }
  }
}

const realm = new Realm({schema: [Cost, Category]})

export const createCost = ({category, cost}) =>
  realm.write(() => realm.create('Cost', {category, cost}))

export const deleteCosts = () =>
  realm.write(() => realm.delete(realm.objects('Cost')))

export const listCosts = () => realm.objects('Cost')

export const createCategory = ({name}) =>
  realm.write(() => realm.create('Category', {name}))

export const deleteCategorys = () =>
  realm.write(() => realm.delete(realm.objects('Category')))

export const listCategorys = () => realm.objects('Category')
