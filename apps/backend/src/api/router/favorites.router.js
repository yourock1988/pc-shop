const Router = require('../../classes/router')
const favoritesController = require('../controller/favorites.controller')

const favoritesRouter = new Router('favorites', favoritesController)

module.exports = favoritesRouter
