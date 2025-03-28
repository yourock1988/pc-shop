import * as api from '@/api/watchedProducts'
import convertProductsPrice from './utils/convertProductsPrice'

export default {
  namespaced: true,

  state() {
    return {
      watchedProducts: [],
      ccy: { usdUah: 42 },
    }
  },

  getters: {
    watchedProducts(state) {
      return state.watchedProducts
    },
  },

  mutations: {
    ADD_WATCHED_PRODUCT(state, watchedProduct) {
      state.watchedProducts.push(watchedProduct)
    },

    SET_WATCHED_PRODUCTS(state, watchedProducts) {
      state.watchedProducts = watchedProducts
      convertProductsPrice(state.watchedProducts, state.ccy)
    },

    UPDATE_WATCHED_PRODUCT_BY_ID(state, id, updatableData) {
      const findedProduct = state.watchedProducts.find(
        product => product.id === id
      )
      if (findedProduct) Object.assign(findedProduct, updatableData)
    },

    REMOVE_WATCHED_PRODUCT_BY_ID(state, id) {
      state.watchedProducts = state.watchedProducts.filter(
        product => product.id !== id
      )
    },
  },

  actions: {
    async createWatchedProduct({ commit }, product) {
      const createdProduct = await api.postWatchedProduct(product)
      commit('ADD_WATCHED_PRODUCT', createdProduct)
    },

    async readWatchedProducts({ commit }) {
      const readedProducts = await api.getWatchedProducts()
      commit('SET_WATCHED_PRODUCTS', readedProducts)
    },

    async updateWatchedProductById({ commit }, { id, product }) {
      const updatedProduct = await api.patchWatchedProductById(id, product)
      commit('UPDATE_WATCHED_PRODUCT_BY_ID', id, updatedProduct)
    },

    async deleteWatchedProductById({ commit }, id) {
      await api.deleteWatchedProductById(id)
      commit('REMOVE_WATCHED_PRODUCT_BY_ID', id)
    },
  },
}
