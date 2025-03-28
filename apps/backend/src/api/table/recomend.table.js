const Table = require('../../classes/table')

const updatingMask = ['customerId', 'productId']
const recomendTable = new Table('recomend', updatingMask)

module.exports = recomendTable
