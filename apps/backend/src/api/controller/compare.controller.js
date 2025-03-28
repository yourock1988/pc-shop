const Controller = require('../../classes/controller')
const compareView = require('../view/compare.view')
const compareModel = require('../model/compare.model')

const compareController = new Controller(
  compareView,
  compareModel,
)

module.exports = compareController
