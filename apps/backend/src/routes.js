const { Router } = require('express')

const welcomeRouter = require('./routers/welcome')
const publicStatic = require('./routers/public-static')
const apiV0 = require('./routers/api-v0')

const routes = Router()

routes.use('/', welcomeRouter)
routes.use('/', publicStatic)
routes.use('/', apiV0)

module.exports = routes
