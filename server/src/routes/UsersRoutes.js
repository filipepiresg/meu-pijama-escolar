const router = require('express').Router()

const ControllerUser = require('../controllers/UserController')
const loginMiddleware = require('../bin/auth/verifyTokenMiddleware')

router
  .route('/users')
  .get(ControllerUser.getAll)
  .post(ControllerUser.create)
router.get('/users/:id', ControllerUser.get)

router.use(loginMiddleware)

router
  .route('/users/:id')
  .put(ControllerUser.update)
  .delete(ControllerUser.delete)

// router.route('/users/:id/disciplinas').get(ControllerUser.getDisciplina)
/* router
  .route('/users/:idUser/disciplinas/idDisciplina')
  .get(ControllerUser.addDisciplina) */

module.exports = router
