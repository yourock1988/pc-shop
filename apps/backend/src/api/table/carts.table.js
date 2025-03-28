const Table = require('../../classes/table')

const updatingMask = ['productId', 'customerId']
const cartsTable = new Table('carts', updatingMask)

module.exports = cartsTable
