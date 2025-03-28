const Router = require('../../classes/router')
const productsController = require('../controller/products.controller')

const productsRouter = new Router('products', productsController)

module.exports = productsRouter
