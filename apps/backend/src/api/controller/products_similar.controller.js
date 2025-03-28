const Controller = require('../../classes/controller')
const products_similarView = require('../view/products_similar.view')
const products_similarModel = require('../model/products_similar.model')

const products_similarController = new Controller(
  products_similarView,
  products_similarModel,
)

module.exports = products_similarController
