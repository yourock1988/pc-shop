const Model = require('../../classes/model')
const favoritesTable = require('../table/favorites.table')

const favoritesModel = new Model(favoritesTable)

module.exports = favoritesModel
