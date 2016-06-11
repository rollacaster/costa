const { MongoClient } = require('mongodb')

const config = require('../config')

const connection = new Promise((resolve, reject) => {
  MongoClient.connect(config.db, (err, connection) => {
    if (err) {
      reject(`Could not connect to mongo: ${err}`)
    }

    resolve(connection)
  })
})

const getConnection = () => {
  return connection
}

exports.getConnection = getConnection

exports.storeDocument = ({ collection, document }) => {
  return getConnection()
    .then((con) => getCollection(collection))
    .then((col) => col.insert(document))
}

exports.findDocuments = ({ collection }) => {
  return getConnection()
    .then((con) => getCollection(collection))
    .then((col) => col.find({}).toArray())
}

function getCollection (collection) {
  return getConnection().then((con) => con.collection(collection))
    .catch((err) => console.log(`Could not connect to collection ${collection} due to ${err}`))
}
