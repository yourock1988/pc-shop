const Model = require('../../classes/model')
const cartsTable = require('../table/carts.table')

const cartsModel = new Model(cartsTable)

module.exports = cartsModel
