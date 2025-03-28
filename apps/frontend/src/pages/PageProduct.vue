<script>
import CategoryNavigation from '~/CategoryNavigation.vue'
import ShowWatchedProducts from '~/page-products/ShowWatchedProducts.vue'

import store from '@/store'
import { mapGetters } from 'vuex'
import '@/assets/css/product-card.css'

const { APP_ORIGIN } = process.env
const PATH_TO_PHOTO = `${APP_ORIGIN}/static/photos/products/computers/`

export default {
  components: { CategoryNavigation, ShowWatchedProducts },

  beforeRouteEnter() {
    store.dispatch('watchedProducts/readWatchedProducts')
  },

  beforeRouteLeave() {
    setTimeout(() => this.$store.commit('product/SET_PRODUCT', null), 150)
  },

  props: ['id'],

  computed: {
    ...mapGetters('product', ['product']),

    ...mapGetters('watchedProducts', ['watchedProducts']),

    mainPhoto() {
      return this.product ? PATH_TO_PHOTO + this.product.photos[0] : ''
    },

    photos() {
      return this.product?.photos.map(photo => PATH_TO_PHOTO + photo) ?? []
    },
  },

  activated() {
    this.updateProduct(this.id)
  },

  methods: {
    updateProduct(id) {
      this.$store.commit('product/SET_PRODUCT', null)
      this.$store.dispatch('product/readProductById', +id)
      this.scrollToMainTop()
    },

    scrollToMainTop() {
      document.body.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
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
        <div class="product-card">
          <div class="slider-photos">
            <div class="photo">
              <img :src="mainPhoto" alt="" />
            </div>
            <div class="photos">
              <div v-for="(photo, idx) of photos" :key="idx">
                <img :src="photo" alt="" height="50" />
              </div>
            </div>
          </div>
          <div class="about-text">
            <div class="caption">
              <h2>{{ product?.caption }}</h2>
            </div>
            <div class="feedback">
              <span> Оставить отзыв </span>
            </div>
            <div class="available">
              <span> Есть в наличии </span>
            </div>
            <div class="price">
              <span> {{ product?.priceUah }}₴ </span>
            </div>
            <div class="buy">
              <button>Купить</button>
            </div>
            <div class="delivery">
              <span> Доставка </span>
              <div>
                <span> в <b> Киев </b> </span>
                <div>
                  <span> Курьером </span>
                </div>
                <div>
                  <span> Самовывоз </span>
                </div>
              </div>
            </div>
            <div class="payment">
              <span> Оплата </span>
              <p>
                Картой онлайн, Оплата при получении товара, Оплата картой в
                отделении, Google Pay
              </p>
            </div>
            <div class="varranty">
              <span> Гарантия </span>
              <p>Гарантия. 38 месяцев Обмен/возврат товара в течение 14 дней</p>
            </div>
          </div>
        </div>
      </main>
      <ShowWatchedProducts :products="watchedProducts" />
    </div>
  </div>
</template>
