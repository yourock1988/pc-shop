const Model = require('../../classes/model')
const customersTable = require('../table/customers.table')

const customersModel = new Model(customersTable)

module.exports = customersModel
