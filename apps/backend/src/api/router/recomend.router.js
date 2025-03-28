const Router = require('../../classes/router')
const recomendController = require('../controller/recomend.controller')

const recomendRouter = new Router('recomend', recomendController)

module.exports = recomendRouter
