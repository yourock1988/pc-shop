const Model = require('../../classes/model')
const watchedTable = require('../table/watched.table')

const watchedModel = new Model(watchedTable)

module.exports = watchedModel
