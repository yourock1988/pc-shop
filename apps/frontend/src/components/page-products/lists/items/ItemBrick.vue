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
  <li class="product-line" @click="$router.push(`/product/${product.id}`)">
    <div class="wrap-sale"><span>АКЦИЯ</span></div>
    <div class="box">
      <div class="left">
        <div class="wrap-img">
          <img :src="urlToPhoto + product.photos[0]" />
        </div>
      </div>

      <div class="center">
        <div class="wrap-title">
          <h3>{{ product.caption }}</h3>
        </div>
        <div class="wrap-leave-comment"><span>💬Оставить отзыв</span></div>
        <div class="wrap-is-available"><span>Есть в наличии</span></div>
      </div>

      <div class="right wrap-buy">
        <div class="icon-cart"><i class="fa-solid fa-cart-plus"></i></div>
        <div class="price">
          <span>{{ product.priceUah }}₴</span>
        </div>
      </div>
    </div>
  </li>
</template>
