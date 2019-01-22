const mongoose = require('mongoose')
// const Disciplina = require('./DisciplinaModel')

const Schema = mongoose.Schema

const UserSchema = new Schema({
  login: {
    type: String,
    required: true,
    unique: true,
    set: v => v.toLowerCase()
  },
  password: {
    type: String,
    select: false,
    required: true
  },
  name: { type: String, set: v => v.toUpperCase() },
  curso: { type: String, set: v => v.toUpperCase() },
  grade: [{ type: Schema.Types.ObjectId, ref: 'Disciplina' }]
})

module.exports = mongoose.model('User', UserSchema, 'Users')
