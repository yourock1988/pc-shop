<script>
const { APP_ORIGIN } = process.env

export default {
  props: ['product'],

  data() {
    return {
      urlToPhoto: `${APP_ORIGIN}/static/photos/products/computers/`,
    }
  },
}
</script>

<template>
  <li class="product" @click="$router.push(`/product/${product.id}`)">
    <div class="wrap-sale"><span>АКЦИЯ</span></div>
    <div class="box">
      <div class="top">
        <div class="wrap-img">
          <img :src="urlToPhoto + product.photos[0]" />
        </div>
      </div>
      <div class="bottom">
        <div class="wrap-colors"></div>
        <div class="wrap-title">
          <span>{{ product.caption }}</span>
        </div>
        <div class="wrap-leave-comment"><span>💬Оставить отзыв</span></div>
        <div class="wrap-is-available"><span>Есть в наличии</span></div>
        <div class="wrap-buy">
          <div class="price">{{ product.priceUah }}₴</div>
          <div class="icon-cart"><i class="fa-solid fa-cart-plus"></i></div>
        </div>
      </div>
    </div>
  </li>
</template>
