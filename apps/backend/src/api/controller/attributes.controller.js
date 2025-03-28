const Controller = require('../../classes/controller')
const attributesView = require('../view/attributes.view')
const attributesModel = require('../model/attributes.model')

const attributesController = new Controller(
  attributesView,
  attributesModel,
)

module.exports = attributesController
