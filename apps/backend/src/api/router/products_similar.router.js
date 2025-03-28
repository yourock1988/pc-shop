const Router = require('../../classes/router')
const products_similarController = require('../controller/products_similar.controller')

const products_similarRouter = new Router('similar', products_similarController)

module.exports = products_similarRouter
