import * as apiProducts from '@/api/products'
import convertProductsPrice from './utils/convertProductsPrice'

export default {
  namespaced: true,

  state() {
    return {
      product: null,
      ccy: { usdUah: 42 },
    }
  },

  getters: {
    product(s) {
      return s.product
    },
  },

  mutations: {
    SET_PRODUCT(state, product) {
      state.product = product
      if (state.product) convertProductsPrice([state.product], state.ccy)
    },
  },

  actions: {
    async readProductById({ commit }, id) {
      const readedProduct = await apiProducts.getProductById(id)
      commit('SET_PRODUCT', readedProduct)
    },
  },
}
