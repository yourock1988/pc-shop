const Router = require('../../classes/router')
const photosController = require('../controller/photos.controller')

const photosRouter = new Router('photos', photosController)

module.exports = photosRouter
