const Controller = require('../../classes/controller')
const customersView = require('../view/customers.view')
const customersModel = require('../model/customers.model')

const customersController = new Controller(
  customersView,
  customersModel,
)

module.exports = customersController
