const Table = require('../../classes/table')

const updatingMask = ['productId', 'relatedProductId']
const products_similarTable = new Table('products_similar', updatingMask)

module.exports = products_similarTable
