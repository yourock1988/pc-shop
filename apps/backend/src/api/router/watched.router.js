const Router = require('../../classes/router')
const watchedController = require('../controller/watched.controller')

const watchedRouter = new Router('watched', watchedController)

module.exports = watchedRouter
