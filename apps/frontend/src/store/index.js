import { createStore } from 'vuex'

import product from './product'
import products from './products'
import watchedProducts from './watchedProducts'
import cart from './cart'

export default createStore({
  modules: {
    cart,
    product,
    products,
    watchedProducts,
  },
})
