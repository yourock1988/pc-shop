const path = require('path')
const pgp = require('pg-promise')

const dbConnect = pgp()
const db = dbConnect('postgres://postgres:postgres1@localhost:5432/pc_shop_v0')

const sqlChache = {}

function sql(file) {
  const fullPath = path.join(__dirname, 'sql', `${file}.sql`)
  if (file in sqlChache) {
    return sqlChache[file]
  }
  sqlChache[file] = new pgp.QueryFile(fullPath, { minify: true })
  return sqlChache[file]
}

module.exports = { db, sql }
