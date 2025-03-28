const Controller = require('../../classes/controller')
const photosView = require('../view/photos.view')
const photosModel = require('../model/photos.model')

const photosController = new Controller(
  photosView,
  photosModel,
)

module.exports = photosController
