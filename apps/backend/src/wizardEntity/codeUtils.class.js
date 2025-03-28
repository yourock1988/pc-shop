const { objToCamel, rand4BytesHex } = require('./utils')

class CodeUtils {
  constructor(fields) {
    this.snake_fields = fields
    this.camelFields = objToCamel(fields)
  }

  getAllCamelArray() {
    return Object.values(this.camelFields).flat()
  }

  getAllSnakeArray() {
    return Object.values(this.snake_fields).flat()
  }

  getAllSqlVars() {
    return this.getAllCamelArray()
      .map(f => `\${${f}}`)
      .join(', ')
  }

  getAllTableCols() {
    return this.getAllSnakeArray().join(', ')
  }

  getAllUpdatingClause() {
    return this.getAllSnakeArray()
      .reduce(
        (acc, item, idx) =>
          `${item} = COALESCE(\${${this.getAllCamelArray()[idx]}}, ${item}),
  ` + acc,
        ''
      )
      .trimEnd()
      .slice(0, -1)
  }

  genDataObject(val) {
    return Object.values(this.camelFields)
      .flat()
      .reduce((acc, item) => {
        acc[item] = val === undefined ? rand4BytesHex() : val
        return acc
      }, {})
  }

  genTestPostObject() {
    return {
      bad: 'bad',
      ...this.genDataObject('ooooooo'),
    }
  }

  genTestPatchObject() {
    return {
      bad: 'bad',
      ...this.genDataObject('xxxxxxx'),
    }
  }
}

module.exports = CodeUtils
