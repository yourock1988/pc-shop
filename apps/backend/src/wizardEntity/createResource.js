const makeDir = require('./makeDir')
const makeFile = require('./makeFile')
const CodeUtils = require('./codeUtils.class')
const CodeTemplate = require('./codeTemplate.class')
const generateContents = require('./generateContents')

function createResource(resourceName, fields) {
  const codeUtils = new CodeUtils(fields)
  const template = new CodeTemplate(resourceName)
  const contents = generateContents(template, codeUtils)

  for (const key in contents) {
    if (key.startsWith('sql_')) {
      let sqlName = key.replace('sql_', '')
      makeDir(resourceName, () => {
        makeFile(resourceName, `${sqlName}.sql`, contents[key], 'sql')
      })
      continue
    }

    let x = ['data', 'schema'].includes(key)
      ? 'json'
      : key === 'test'
      ? 'http'
      : 'js'

    if (['test', 'data', 'schema'].includes(key)) {
      makeFile(key, `${resourceName}.${key}.${x}`, contents[key], '')
    } else {
      makeFile(key, `${resourceName}.${key}.${x}`, contents[key])
    }
  }
}

module.exports = createResource
