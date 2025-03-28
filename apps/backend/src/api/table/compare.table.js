const Table = require('../../classes/table')

const updatingMask = ['customerId', 'productId']
const compareTable = new Table('compare', updatingMask)

module.exports = compareTable
