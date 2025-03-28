const Controller = require('../../classes/controller')
const cartsView = require('../view/carts.view')
const cartsModel = require('../model/carts.model')

const cartsController = new Controller(
  cartsView,
  cartsModel,
)

module.exports = cartsController
