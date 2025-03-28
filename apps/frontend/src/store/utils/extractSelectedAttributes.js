function extractSelectedAttributes(attributes) {
  const selectedAttributes = attributes
    .filter(f => f.attrValues.some(av => av.isChecked))
    .map(f => ({ ...f, attrValues: f.attrValues.filter(av => av.isChecked) }))
  return selectedAttributes
}

export default extractSelectedAttributes
