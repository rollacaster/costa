const { createStore } = require('redux')
const rootReducer = require('./reducers')

module.exports = createStore(rootReducer)
