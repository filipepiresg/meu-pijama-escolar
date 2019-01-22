const router = require('express').Router()

const UserModel = require('../models/UserModel')
const createToken = require('../bin/auth/createToken')

router.post('/login', async (req, res) => {
  const { login, password } = req.body
  UserModel.find({ login, password }, (err, user) => {
    if (err) {
      res.status(400).json({ status: 400, err })
    }
    if (!user[0]) {
      res.status(404).json({ status: 404, error: `User not found` })
    } else {
      const token = createToken(user[0]._id)
      res.status(200).json({ token })
    }
  })
})

router.get('/login/:login/:password', (req, res) => {
  const { login, password } = req.params
  UserModel.find({ login, password })
    .then(user => {
      // console.log(user)
      res.json(user)
    })
    .catch(err => res.send(err))
})

module.exports = router
