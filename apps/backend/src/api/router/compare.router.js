const Router = require('../../classes/router')
const compareController = require('../controller/compare.controller')

const compareRouter = new Router('compare', compareController)

module.exports = compareRouter
