const { Router } = require('express')
const controller = require('../../controllers/products.controller')

const router = Router()

router.route('/')
  .get(controller.getProducts)

module.exports = router