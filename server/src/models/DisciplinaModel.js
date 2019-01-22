const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DisciplinaSchema = new Schema({
  cod: {
    type: Number,
    required: [true, 'É necessario o código da disciplina'],
    unique: true
  },
  nome: {
    type: String,
    required: [true, 'É necessario o nome da disciplina'],
    set: v => v.toUpperCase()
  },
  turma: {
    type: Number,
    default: 1,
    min: 1,
    max: 6
  },
  creditos: {
    type: Number,
    default: 4,
    enum: ['01', '02', '04', '06', '22'],
    set: v => parseInt(v)
  },
  cargaHoraria: {
    type: Number,
    default: 60
  },
  horarios: [
    {
      dia: {
        type: String,
        enum: ['2', '3', '4', '5', '6'],
        required: [true, 'É necessario o dia da disciplina']
      },
      hora: {
        type: String,
        required: [true, 'É necessario a hora da disciplina']
      },
      sala: {
        type: String,
        required: [true, 'É necessario a sala da disciplina'],
        set: v => v.toUpperCase()
      },
      _id: false
    }
  ],
  cursosOfertados: {
    type: String,
    default: ['Nenhum curso cadastrado'],
    set: v => v.toUpperCase()
  },
  professor: {
    type: String,
    default: 'Sem Professor',
    set: v => v.toUpperCase()
  }
})

module.exports = mongoose.model('Disciplina', DisciplinaSchema, 'Disciplina')
