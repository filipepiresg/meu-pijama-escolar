const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../../config/auth.json')

module.exports = (token = String, userId = String) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, SECRET_KEY, (err, res) => {
      if (err || res.userId !== userId) return reject(err)
      return resolve(res)
    })
  })
}
