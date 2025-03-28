const Controller = require('../../classes/controller')
const favoritesView = require('../view/favorites.view')
const favoritesModel = require('../model/favorites.model')

const favoritesController = new Controller(
  favoritesView,
  favoritesModel,
)

module.exports = favoritesController
