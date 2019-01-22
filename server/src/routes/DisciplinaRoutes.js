const router = require('express').Router()

const ControllerDisciplina = require('../controllers/DisciplinaController')

router.route('/disciplinas')
  .post(ControllerDisciplina.create)
  .get(ControllerDisciplina.getAll)
router.route('/disciplinas/:id')
  .get(ControllerDisciplina.get)
  .put(ControllerDisciplina.update)
  .delete(ControllerDisciplina.delete)

module.exports = router
