const Table = require('../../classes/table')

const updatingMask = ['password', 'phone', 'email', 'firstName', 'secondName']
const customersTable = new Table('customers', updatingMask)

module.exports = customersTable
