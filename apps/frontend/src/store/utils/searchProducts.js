function searchProducts(products, query) {
  const preparedQuery = query.trim().toLowerCase()

  if (preparedQuery === '') return products

  return products.filter(p => p.caption.toLowerCase().includes(preparedQuery))
}

export default searchProducts
