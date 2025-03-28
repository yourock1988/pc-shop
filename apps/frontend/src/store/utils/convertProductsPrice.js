function convertProductsPrice(products, ccy) {
  products.forEach(product => {
    Object.defineProperty(product, 'priceUah', {
      get() {
        return Math.round((this.price * ccy.usdUah) / 100) * 100
      },
    })
  })
}

export default convertProductsPrice
