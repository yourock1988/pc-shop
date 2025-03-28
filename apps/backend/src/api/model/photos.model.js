const Model = require('../../classes/model')
const photosTable = require('../table/photos.table')

const photosModel = new Model(photosTable)

module.exports = photosModel
