const Table = require('../../classes/table')

const updatingMask = ['customerId', 'productId']
const favoritesTable = new Table('favorites', updatingMask)

module.exports = favoritesTable
