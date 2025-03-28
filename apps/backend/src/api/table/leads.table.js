const Table = require('../../classes/table')

const updatingMask = ['advisorId']
const leadsTable = new Table('leads', updatingMask)

module.exports = leadsTable
