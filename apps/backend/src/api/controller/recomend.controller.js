const Controller = require('../../classes/controller')
const recomendView = require('../view/recomend.view')
const recomendModel = require('../model/recomend.model')

const recomendController = new Controller(
  recomendView,
  recomendModel,
)

module.exports = recomendController
