const Router = require('../../classes/router')
const cartsController = require('../controller/carts.controller')

const cartsRouter = new Router('carts', cartsController)

module.exports = cartsRouter
