const DisciplinaModel = require('../models/DisciplinaModel')

module.exports = {
  create: (req, res) => {
    const { body } = req
    DisciplinaModel.create(body)
      .then(data =>
        res.json({ status: 200, message: `user ${data._id} created!` })
      )
      .catch(err => res.status(400).json({ status: 400, message: err.message }))
  },
  getAll: (_, res) => {
    DisciplinaModel.find()
      .then(data => res.json({ status: 200, data }))
      .catch(err => res.status(400).json({ status: 400, message: err.message }))
  },
  get: (req, res) => {
    const { id } = req.params
    DisciplinaModel.findById(id)
      .then(data => {
        if (!data) res.sendStatus(404).json({ status: 404, data: [] })
        res.json({ status: 200, data })
      })
      .catch(err => res.status(400).json({ status: 400, message: err.message }))
  },
  update: (req, res) => {
    const {
      params: { id },
      body
    } = req
    DisciplinaModel.findByIdAndUpdate(id, body)
      .then(data =>
        res.json({ status: 200, message: `user ${data._id} modified!` })
      )
      .catch(err => res.status(400).json({ status: 400, message: err.message }))
  },
  delete: (req, res) => {
    const { id } = req.params
    DisciplinaModel.findByIdAndDelete(id)
      .then(data =>
        res.json({ status: 200, message: `user ${data._id} deleted!` })
      )
      .catch(err => res.status(400).json({ status: 400, message: err.message }))
  }
}
