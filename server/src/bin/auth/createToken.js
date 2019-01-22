const jwt = require('jsonwebtoken')
const { SECRET_KEY } = require('../../config/auth.json')

module.exports = (userId = String) => {
  const token = jwt.sign({ userId }, SECRET_KEY, { expiresIn: '2 days' })
  console.log(userId)
  return token
}
