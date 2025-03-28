const generateContents = (template, codeUtils) => ({
  controller: template.writeCode`
const Controller = require('../../classes/controller')
const ${0}View = require('../view/${0}.view')
const ${0}Model = require('../model/${0}.model')

const ${0}Controller = new Controller(
  ${0}View,
  ${0}Model,
)

module.exports = ${0}Controller`,

  model: template.writeCode`
const Model = require('../../classes/model')
const ${0}Table = require('../table/${0}.table')

const ${0}Model = new Model(${0}Table)

module.exports = ${0}Model`,

  router: template.writeCode`
const Router = require('../../classes/router')
const ${0}Controller = require('../controller/${0}.controller')

const ${0}Router = new Router('${0}', ${0}Controller)

module.exports = ${0}Router`,

  table: template.writeCode`
const Table = require('../../classes/table')

const updatingMask = ${JSON.stringify(codeUtils.getAllCamelArray())}
const ${0}Table = new Table('${0}', updatingMask)

module.exports = ${0}Table`,

  view: template.writeCode`
const View = require('../../classes/view')

const ${0}View = new View()

module.exports = ${0}View`,

  test: template.writeCode`
GET http://localhost/pc-shop/api/v0/${0}/42/${0}/
cookie: session=ff0099aa
###

GET http://localhost/pc-shop/api/v0/${0}/42/${0}/101
cookie: session=ff0099aa
###

POST http://localhost/pc-shop/api/v0/${0}/42/${0}/
cookie: session=ff0099aa
content-type: application/json

${JSON.stringify(codeUtils.genTestPostObject())}
###

PATCH http://localhost/pc-shop/api/v0/${0}/42/${0}/101
cookie: session=ff0099aa
content-type: application/json

${JSON.stringify(codeUtils.genTestPatchObject())}
###

DELETE http://localhost/pc-shop/api/v0/${0}/42/${0}/101
cookie: session=ff0099aa
###`,

  sql_select: template.writeCode`
SELECT
  *
FROM
  ${0}
WHERE
  id = \${id}`,

  sql_select_by_id: template.writeCode`
SELECT
  *
FROM
  ${0}
WHERE
  parent_id = \${parentId} AND id = \${id}`,

  sql_insert: template.writeCode`
INSERT INTO ${0}
  (${codeUtils.getAllTableCols()})
VALUES
  (${codeUtils.getAllSqlVars()})
RETURNING
  *`,

  sql_update: template.writeCode`
UPDATE
  ${0}
SET
  ${codeUtils.getAllUpdatingClause()}
WHERE
  parent_id = \${parentId} AND id = \${id}
RETURNING
  *`,

  sql_delete: template.writeCode`
DELETE FROM ${0}
WHERE
  parent_id = \${parentId} AND id = \${id}
RETURNING
  *`,
})

module.exports = generateContents
