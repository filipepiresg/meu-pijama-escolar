'use strict'

const mongoose = require('mongoose')

const MONGODB_URI = 'mongo:27017'

// CONNECT TO DATABASE
mongoose.connect(
  `mongodb://${MONGODB_URI}/meu-pijama`,
  { useNewUrlParser: true }
)

mongoose.connection.on('connected', () =>
  console.log('Mongoose default connection open to ' + MONGODB_URI)
)

mongoose.connection.on('error', err =>
  console.log('Mongoose default connection error: ' + err)
)

mongoose.connection.on('disconnected', () =>
  console.log('Mongoose default connection disconnected')
)

mongoose.connection.once('open', () =>
  console.log('Mongoose default connection is open')
)

process.on('SIGINT', () =>
  mongoose.connection.close(function () {
    console.log(
      'Mongoose default connection disconnected through app termination'
    )
    process.exit(0)
  })
)

module.exports = mongoose
