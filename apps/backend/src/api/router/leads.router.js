const Router = require('../../classes/router')
const leadsController = require('../controller/leads.controller')

const leadsRouter = new Router('leads', leadsController)

module.exports = leadsRouter
