const Table = require('../../classes/table')

const updatingMask = ['customerId', 'productId']
const watchedTable = new Table('watched', updatingMask)

module.exports = watchedTable
