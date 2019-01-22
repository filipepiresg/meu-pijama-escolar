const routes = require('express')()

const UsersRoutes = require('./routes/UsersRoutes')
const DisciplinaRoutes = require('./routes/DisciplinaRoutes')
const LoginRoutes = require('./routes/LoginRoutes')

routes.use(LoginRoutes)

routes.use(UsersRoutes)
routes.use(DisciplinaRoutes)

module.exports = routes
