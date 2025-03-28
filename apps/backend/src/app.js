const express = require('express')
const routes = require('./routes')

const app = express()
const PORT = process.env.APP_BE_PORT || 5000
const APP_NAME = 'pc-shop'

global.console.log(process.env.APP_BE_COMMENT)

app.use(routes)

app.listen(PORT, () => global.console.log(`${APP_NAME} start at PORT: ${PORT}`))

if (process.argv[2] === '--check') {
  global.console.log('!!!STARTED_IN_CHECK_MODE!!!')
  setTimeout(() => process.exit(0), 7000)
}
