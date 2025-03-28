import extractSelectedAttributes from './extractSelectedAttributes'

function attributeProducts(products, availableAttributes) {
  const selectedAttributes = extractSelectedAttributes(availableAttributes)
  return products.filter(({ attributes }) =>
    selectedAttributes.every(({ attrName, attrValues }) =>
      attrValues.some(attrValue => attributes[attrName] === attrValue.caption)
    )
  )
}

export default attributeProducts
