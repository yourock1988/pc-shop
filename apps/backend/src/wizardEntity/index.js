const createResource = require('./createResource')
const fillObjectWithStdIn = require('./repl')

const resourceName = process.argv.slice(2)[0]?.trim()
if (!resourceName) {
  console.log('write entity name...')
  process.exit(0)
}

const fieldsMask = {
  REQUIRED: [],
  // FROZEN: [],
  // VALID: [],
}

fillObjectWithStdIn(fieldsMask, obj => createResource(resourceName, obj))
