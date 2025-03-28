const Model = require('../../classes/model')
const products_similarTable = require('../table/products_similar.table')

const products_similarModel = new Model(products_similarTable)

module.exports = products_similarModel
