import * as apiProducts from '@/api/products'
import convertProductsPrice from './utils/convertProductsPrice'
import harvestAttributes from './utils/harvestAttributes'

import searchProducts from './utils/searchProducts'
import rangeProducts from './utils/rangeProducts'
import attributeProducts from './utils/attributeProducts'
import sortProducts from './utils/sortProducts'
import paginateProducts from './utils/paginateProducts'

export default {
  namespaced: true,

  state() {
    return {
      searchQuery: '',
      priceFrom: 0,
      priceTo: 0,
      attributes: [],
      sortingType: 'expensiveFirst',
      currentPage: 0,
      pageSize: 10,

      products: [],
      ccy: { usdUah: 42 },
    }
  },

  getters: {
    searchedProducts(s) {
      return searchProducts(s.products, s.searchQuery)
    },

    rangedProducts(s, g) {
      return rangeProducts(g.searchedProducts, s.priceFrom, s.priceTo)
    },

    attributedProducts(s, g) {
      return attributeProducts(g.rangedProducts, s.attributes)
    },

    sortedProducts(s, g) {
      return sortProducts(g.attributedProducts, s.sortingType)
    },

    paginatedProducts(s, g) {
      return paginateProducts(g.sortedProducts, s.currentPage, s.pageSize)
    },

    filtratedCount(_, g) {
      return g.sortedProducts.length
    },

    pagesTotal(s, g) {
      return Math.ceil(g.filtratedCount / s.pageSize)
    },

    priceMin(_, g) {
      const min = Math.min(...g.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(min) ? min : 0
    },

    priceMax(_, g) {
      const max = Math.max(...g.searchedProducts.map(sp => sp.priceUah))
      return Number.isFinite(max) ? max : Number.MAX_SAFE_INTEGER
    },
  },

  mutations: {
    SET_SEARCH_QUERY(state, newValue) {
      state.searchQuery = newValue
    },

    SET_PRICE_FROM(state, newValue) {
      state.priceFrom = newValue
    },

    SET_PRICE_TO(state, newValue) {
      state.priceTo = newValue
    },

    SET_ATTRIBUTES(state, newValue) {
      state.attributes = newValue
    },

    SET_SORTING_TYPE(state, newValue) {
      state.sortingType = newValue
    },

    SET_CURRENT_PAGE(state, newValue) {
      state.currentPage = newValue
    },

    SET_PAGE_SIZE(state, newValue) {
      state.pageSize = newValue
    },

    ADD_PRODUCT(state, product) {
      state.products.push(product)
    },

    SET_PRODUCTS(state, products) {
      state.products = products
      convertProductsPrice(state.products, state.ccy)
    },

    UPDATE_PRODUCT_BY_ID(state, id, updatableData) {
      const findedProduct = state.products.find(product => product.id === id)
      if (findedProduct) Object.assign(findedProduct, updatableData)
    },

    REMOVE_PRODUCT_BY_ID(state, id) {
      state.products = state.products.filter(product => product.id !== id)
    },
  },

  actions: {
    setSearchQuery({ commit, getters }, searchQuery) {
      commit('SET_SEARCH_QUERY', searchQuery)
      commit('SET_ATTRIBUTES', harvestAttributes(getters.searchedProducts))
    },

    async createProduct({ commit }, product) {
      const createdProduct = await apiProducts.postProduct(product)
      commit('ADD_PRODUCT', createdProduct)
    },

    async readProducts({ commit, dispatch }) {
      const readedProducts = await apiProducts.getProducts()
      commit('SET_PRODUCTS', readedProducts)
      dispatch('setSearchQuery', '')
    },

    async updateProductById({ commit }, { id, product }) {
      const updatedProduct = await apiProducts.patchProductById(id, product)
      commit('UPDATE_PRODUCT_BY_ID', id, updatedProduct)
    },

    async deleteProductById({ commit }, id) {
      await apiProducts.deleteProductById(id)
      commit('REMOVE_PRODUCT_BY_ID', id)
    },
  },
}
