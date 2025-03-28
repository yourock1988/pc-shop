const cookieParser = require('cookie-parser')
const cors = require('cors')
const express = require('express')
const { authentication, notFound } = require('../middleware')

const productsRouter = require('../api/router/products.router')
const photosRouter = require('../api/router/photos.router')
const attributesRouter = require('../api/router/attributes.router')
const products_similarRouter = require('../api/router/products_similar.router')
const customersRouter = require('../api/router/customers.router')
const cartsRouter = require('../api/router/carts.router')
const favoritesRouter = require('../api/router/favorites.router')
const compareRouter = require('../api/router/compare.router')
const recomendRouter = require('../api/router/recomend.router')
const watchedRouter = require('../api/router/watched.router')
const leadsRouter = require('../api/router/leads.router')

const Router = express.Router
const app = express()
const apiPath = '/api/v0'

productsRouter.sub(photosRouter.mount())
productsRouter.sub(attributesRouter.mount())
productsRouter.sub(products_similarRouter.mount())

customersRouter.sub(cartsRouter.mount())
customersRouter.sub(compareRouter.mount())
customersRouter.sub(favoritesRouter.mount())
customersRouter.sub(recomendRouter.mount())
customersRouter.sub(watchedRouter.mount())

const ntfd = Router().use('*', notFound)
const auth = Router().use('/auth', authentication)
const apis = Router().use('/', [
  productsRouter.mount(),
  customersRouter.auth().mount(),
  leadsRouter.auth().mount(),
])

// const corsOptions = function (req, callback) {
//   callback(null, { origin: req.header('Origin') || '*', credentials: true })
// }

const corsOptions = { origin: true, credentials: true }

app.use(apiPath, [
  cors(corsOptions),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: true }),
  apis,
  auth,
  ntfd,
])

module.exports = app
