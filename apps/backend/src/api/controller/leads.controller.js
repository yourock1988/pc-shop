const Controller = require('../../classes/controller')
const leadsView = require('../view/leads.view')
const leadsModel = require('../model/leads.model')

const leadsController = new Controller(
  leadsView,
  leadsModel,
)

module.exports = leadsController
