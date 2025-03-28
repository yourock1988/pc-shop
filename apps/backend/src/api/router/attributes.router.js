const Router = require('../../classes/router')
const attributesController = require('../controller/attributes.controller')

const attributesRouter = new Router('attributes', attributesController)

module.exports = attributesRouter
