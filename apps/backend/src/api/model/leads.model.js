const Model = require('../../classes/model')
const leadsTable = require('../table/leads.table')

const leadsModel = new Model(leadsTable)

module.exports = leadsModel
