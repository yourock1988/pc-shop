import * as apiCarts from '@/api/carts'
import * as apiProducts from '@/api/products'
import convertProductsPrice from './utils/convertProductsPrice'

export default {
  namespaced: true,

  state() {
    return {
      carts: [],
      cartProducts: [],
      ccy: { usdUah: 42 },
    }
  },

  getters: {
    getCarts(state) {
      return state.carts
    },

    getCartProducts(state) {
      return state.cartProducts
    },
  },

  mutations: {
    SET_CARTS(state, carts) {
      state.carts = carts
    },

    SET_CART_PRODUCTS(state, cartProducts) {
      state.cartProducts = cartProducts
      convertProductsPrice(state.cartProducts, state.ccy)
    },
  },

  actions: {
    async readCarts({ commit }) {
      const readedCarts = await apiCarts.getCarts()
      commit('SET_CARTS', readedCarts)
    },

    async readCartsProducts({ getters, commit, dispatch }) {
      await dispatch('readCarts')

      const promises = getters.getCarts.map(cart =>
        apiProducts.getProductById(cart.productId)
      )

      const cartProducts = await Promise.all(promises)

      commit('SET_CART_PRODUCTS', cartProducts)
    },
  },
}
