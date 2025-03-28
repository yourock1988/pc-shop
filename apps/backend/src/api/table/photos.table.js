const Table = require('../../classes/table')

const updatingMask = ['fileName', 'productId']
const photosTable = new Table('photos', updatingMask)

module.exports = photosTable
