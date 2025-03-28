const Table = require('../../classes/table')

const updatingMask = ['key', 'value', 'productId']
const attributesTable = new Table('attributes', updatingMask)

module.exports = attributesTable
