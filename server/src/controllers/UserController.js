// const DisciplinaModel = require('../models/DisciplinaModel')
const UserModel = require('../models/UserModel')
const verifyToken = require('../bin/auth/verifyToken')

module.exports = {
  create: (req, res) => {
    const { body } = req
    UserModel.create(body)
      .then(data =>
        res.status(201).json({
          status: 201,
          message: `user ${data._id} created!`
        })
      )
      .catch(err => res.status(400).json({ status: 400, message: err.message }))
  },
  getAll: (_, res) => {
    UserModel.find()
      .then(data => res.status(200).json({ status: 200, data }))
      .catch(err => res.status(500).json({ status: 500, message: err.message }))
  },
  get: (req, res) => {
    const { id } = req.params
    UserModel.findById(id)
      .then(data => {
        if (!data) res.status(404).json({ status: 404, data: [] })
        res.status(200).json({ status: 200, data })
      })
      .catch(err => res.status(500).json({ status: 500, message: err.message }))
  },
  update: (req, res) => {
    const {
      params: { id },
      body,
      token
    } = req
    verifyToken(token, id)
      .then(() => {
        UserModel.findByIdAndUpdate(id, body)
          .then(data =>
            res.json({ status: 200, message: `user ${data._id} modified!` })
          )
          .catch(err =>
            res.status(500).json({ status: 500, message: err.message })
          )
      })
      .catch(() => {
        res.sendStatus(401)
      })
  },
  delete: (req, res) => {
    const {
      params: { id },
      token
    } = req
    verifyToken(token, id)
      .then(() => {
        UserModel.findByIdAndDelete(id)
          .then(data =>
            res.json({ status: 200, message: `user ${data._id} deleted!` })
          )
          .catch(err =>
            res.status(500).json({ status: 500, message: err.message })
          )
      })
      .catch(() => {
        res.sendStatus(401)
      })
  }
  /*,
  getDisciplina: (req, res) => {
    const { id } = req.params
    UserModel.findById(id)
      .then(data => res.json({ status: 200, data: data.grade }))
      .catch(err => res.status(400).json({ status: 400, message: err.message }))
  },
  addDisciplina: (req, res) => {
    const { idUser, idDisciplina } = req.params
    UserModel.findById(idUser)
      .then(user => {
        DisciplinaModel.findById(idDisciplina).then(disciplina => {
          user.grade.push(disciplina)
          user.save()
        })
        res.json({ status: 200, data: user.grade })
      })
      .catch(err => {
        res.json({ status: 200, message: err.message })
      })
  },
  removeDisciplina: (req, res) => {
    const { idUser, idDisciplina } = req.params
    UserModel.findById(idUser)
      .then(user => {
        DisciplinaModel.findById(idDisciplina).then(disciplina => {
          for (let i = 0; i < user.grade.lenght; i++) {
            if (user.grade[i].nome === disciplina.nome) {
              user.grade.splice(i)
            }
          }
        })
        res.json({ status: 200, data: user.grade })
      })
      .catch(err => {
        res.json({ status: 200, message: err.message })
      })
  }
  */
}
