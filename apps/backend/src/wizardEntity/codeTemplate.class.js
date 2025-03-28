class CodeTemplate {
  constructor(resourceName) {
    this.resourceName = resourceName
  }

  writeCode(strings, ...values) {
    let result = ''
    for (const idx in strings) {
      const value = values[idx] === 0 ? this.resourceName : values[idx]
      result = result + strings[idx] + (value ?? '')
    }
    return result.trim() + '\n'
  }
}

module.exports = CodeTemplate
