const Table = require('../../classes/table')

const updatingMask = ['caption', 'description', 'price']
const productTable = new Table('products', updatingMask)

module.exports = productTable
