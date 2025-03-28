<script>
import PickerPageSize from '~/page-products/pickers/PickerPageSize.vue'
import PickerListType from '~/page-products/pickers/PickerListType.vue'
import PickerAttributes from '~/page-products/pickers/PickerAttributes.vue'
import PickerCurrentPage from '~/page-products/pickers/PickerCurrentPage.vue'
import PickerPriceRanges from '~/page-products/pickers/PickerPriceRanges.vue'
import PickerSortingType from '~/page-products/pickers/PickerSortingType.vue'
import PickerAttributesReset from '~/page-products/pickers/PickerAttributesReset.vue'
import PickerIsOffcanvasOpen from '~/page-products/pickers/PickerIsOffcanvasOpen.vue'

import ShowPaginatedProducts from '~/page-products/ShowPaginatedProducts.vue'
import ShowWatchedProducts from '~/page-products/ShowWatchedProducts.vue'
import ShowFiltratedCount from '~/page-products/ShowFiltratedCount.vue'

import OffCanvas from '~/page-products/OffCanvas.vue'
import CategoryNavigation from '~/CategoryNavigation.vue'

import state from '@/functions/state'
import { mapGetters } from 'vuex'

export default {
  components: {
    PickerPageSize,
    PickerListType,
    PickerAttributes,
    PickerCurrentPage,
    PickerPriceRanges,
    PickerSortingType,
    PickerAttributesReset,
    PickerIsOffcanvasOpen,

    ShowPaginatedProducts,
    ShowWatchedProducts,
    ShowFiltratedCount,

    OffCanvas,
    CategoryNavigation,
  },

  data() {
    return {
      listType: 'Pave',
      isOffcanvasOpen: false,
      isScrollingEnabled: false,
    }
  },

  computed: {
    sortingType: state('products', 'sortingType', 'SET_SORTING_TYPE'),
    currentPage: state('products', 'currentPage', 'SET_CURRENT_PAGE'),
    attributes: state('products', 'attributes', 'SET_ATTRIBUTES'),
    priceFrom: state('products', 'priceFrom', 'SET_PRICE_FROM'),
    pageSize: state('products', 'pageSize', 'SET_PAGE_SIZE'),
    priceTo: state('products', 'priceTo', 'SET_PRICE_TO'),

    ...mapGetters('watchedProducts', ['watchedProducts']),

    ...mapGetters('products', [
      'paginatedProducts',
      'filtratedCount',
      'pagesTotal',
      'priceMin',
      'priceMax',
    ]),
  },

  watch: {
    // eslint-disable-next-line vue/no-undef-properties
    paginatedProducts(newValue) {
      if (newValue.length > 0) this.isScrollingEnabled = true
    },

    attributes() {
      this.scrollToAsideBottom()
    },
  },

  mounted() {
    this.$store.dispatch('products/readProducts')
    this.$store.dispatch('watchedProducts/readWatchedProducts')
  },

  methods: {
    scrollToAsideBottom() {
      if (!this.isScrollingEnabled) return
      this.$refs.aside.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    },
  },
}
</script>

<template>
  <div class="layout-main">
    <div class="layout-centralize">
      <main>
        <CategoryNavigation />

        <div class="layout-verbose-filtration">
          <PickerIsOffcanvasOpen v-model="isOffcanvasOpen" />

          <ShowFiltratedCount :filtrated-count="filtratedCount" />

          <PickerAttributesReset v-model="attributes" />

          <PickerSortingType v-model="sortingType" />

          <PickerPageSize v-model="pageSize" />

          <PickerListType v-model="listType" />
        </div>

        <div class="layout-catalog">
          <aside ref="aside" class="catalog-filter">
            <PickerPriceRanges
              v-model:price-from="priceFrom"
              v-model:price-to="priceTo"
              :price-min="priceMin"
              :price-max="priceMax"
            />

            <PickerAttributes v-model="attributes" />
          </aside>

          <div class="catalog-content">
            <PickerCurrentPage
              v-model="currentPage"
              :pages-total="pagesTotal"
            />

            <ShowPaginatedProducts
              :paginated-products="paginatedProducts"
              :list-type="listType"
            />
          </div>
        </div>
      </main>

      <ShowWatchedProducts :products="watchedProducts" />
    </div>

    <OffCanvas
      v-model:attributes="attributes"
      v-model:price-from="priceFrom"
      v-model:price-to="priceTo"
      v-model="isOffcanvasOpen"
      :price-min="priceMin"
      :price-max="priceMax"
    />
  </div>
</template>
