function resolveUpdatingMask(fieldsNames) {
  return fieldsNames.reduce((acc, item) => ({ ...acc, [item]: null }), {})
}

module.exports = { resolveUpdatingMask }
