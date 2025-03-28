const CodeUtils = require('./codeUtils.class')
const CodeTemplate = require('./codeTemplate.class')
const generateContents = require('./generateContents')

const resourceName = 'qqqqq'
const fields = {
  REQUIRED: ['qwe_asd', 'rty_fgh', 'uio_jkl'],
  // FROZEN: [],
  // VALID: [],
}

const codeUtils = new CodeUtils(fields)
const template = new CodeTemplate(resourceName)
const contents = generateContents(template, codeUtils)

console.log(contents.controller, '\n\n')
console.log(contents.model, '\n\n')
console.log(contents.router, '\n\n')
console.log(contents.table, '\n\n')
console.log(contents.test, '\n\n')
console.log(contents.sql_select, '\n\n')
console.log(contents.sql_select_by_id, '\n\n')
console.log(contents.sql_insert, '\n\n')
console.log(contents.sql_update, '\n\n')
console.log(contents.sql_delete, '\n\n')
