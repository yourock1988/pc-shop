<script>
import '@/assets/css/cart.css'
import CartItem from '~/CartItem.vue'

export default {
  components: { CartItem },

  computed: {
    cartProducts() {
      return this.$store.getters['cart/getCartProducts']
    },
  },

  mounted() {
    this.$store.dispatch('cart/readCartsProducts')
  },
}
</script>

<template>
  <div class="container-cart">
    <h1>Ваша корзина</h1>

    <div class="cart-items">
      <CartItem
        v-for="cartProduct of cartProducts"
        :key="cartProduct.id"
        :cart-product="cartProduct"
      />
    </div>

    <div class="confirmation">
      <div class="wrapper">
        <div class="total">4500₴</div>
        <div class="wrap-button">
          <button class="checkout-btn">Оформить заказ</button>
        </div>
      </div>
    </div>
  </div>
</template>
