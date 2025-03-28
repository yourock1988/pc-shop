const Model = require('../../classes/model')
const productsTable = require('../table/products.table')

const productsModel = new Model(productsTable)

module.exports = productsModel
