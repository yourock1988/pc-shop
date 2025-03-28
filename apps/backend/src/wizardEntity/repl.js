const readline = require('readline')
const { formatInput } = require('./utils')

function readNext(rl, keys, obj, callback) {
  const key = keys.shift()
  if (!key) {
    callback(obj)
    rl.close()
    return obj
  }

  rl.question(key + ':\n', line => {
    obj[key] = formatInput(line)
    rl.write(`\ncreated fields:\n${obj[key]}\n\n`)
    readNext(rl, keys, obj, callback)
  })
}

function fillObjectWithStdIn(obj, callback) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  console.log('INPUT fields_names WICH COMMA SEPARATED:\n')

  readNext(rl, Object.keys(obj), obj, callback)
}

module.exports = fillObjectWithStdIn
