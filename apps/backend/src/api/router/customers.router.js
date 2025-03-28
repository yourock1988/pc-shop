const Router = require('../../classes/router')
const customersController = require('../controller/customers.controller')

const customersRouter = new Router('customers', customersController)

module.exports = customersRouter
