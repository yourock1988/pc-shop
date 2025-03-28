const Controller = require('../../classes/controller')
const productsView = require('../view/products.view')
const productsModel = require('../model/products.model')

const productsController = new Controller(
  productsView,
  productsModel,
)

module.exports = productsController
