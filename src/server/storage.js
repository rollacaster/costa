const { MongoClient } = require('mongodb')

const config = require('../config')

const connection = new Promise((resolve, reject) => {
  MongoClient.connect(config.db, (err, connection) => {
    if (err) { reject(`Could not connect to mongo: ${err}`) }
    resolve(connection)
  })
})

exports.getConnection = connection

exports.storeDocument = ({ collection, document }) => connection
  .then((con) => getCollection(collection))
  .then((col) => col.insert(document))

exports.findDocuments = ({ collection }) => connection
  .then((con) => getCollection(collection))
  .then((col) => col.find({}).toArray())

const getCollection = (collection) =>
        connection.then((con) => con.collection(collection))
        .catch((err) => console.log(`Could not connect to collection ${collection} due to ${err}`))
