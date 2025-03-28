function paginateProducts(products, currentPage, pageSize) {
  const fromIdx = currentPage * pageSize
  const toIdx = fromIdx + pageSize
  return products.slice(fromIdx, toIdx)
}

export default paginateProducts
