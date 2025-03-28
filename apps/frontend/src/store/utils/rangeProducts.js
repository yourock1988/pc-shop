function rangeProducts(products, priceFrom, priceTo) {
  return products.filter(p => priceFrom <= p.priceUah && p.priceUah <= priceTo)
}

export default rangeProducts
