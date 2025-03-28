const Controller = require('../../classes/controller')
const watchedView = require('../view/watched.view')
const watchedModel = require('../model/watched.model')

const watchedController = new Controller(
  watchedView,
  watchedModel,
)

module.exports = watchedController
