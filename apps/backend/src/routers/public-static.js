const express = require('express')
const path = require('path')

const app = express()

const baseDir = path.join(__dirname, '..', '..')
const isDevDir = baseDir.includes('backend')

const publicStatic = isDevDir
  ? path.join(baseDir, 'static')
  : path.join(baseDir, 'server', 'static')

global.console.log(publicStatic)
app.use('/static', express.static(publicStatic, { index: 'index.html' }))

if (!isDevDir) {
  const clientDir = path.join(baseDir, 'client')
  global.console.log(clientDir)
  app.use('/assets', express.static(path.join(clientDir, 'assets')))
  app.use('/products', express.static(clientDir, { index: 'index.html' }))
  app.use('/product', express.static(clientDir, { index: 'index.html' }))
  app.use('/cart', express.static(clientDir, { index: 'index.html' }))
}

module.exports = app
