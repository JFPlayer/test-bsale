const { Router } = require('express')
const controller = require('../../controllers/categories.controller')

const router = Router()

router.route('/')
  .get(controller.getCategories)

module.exports = router