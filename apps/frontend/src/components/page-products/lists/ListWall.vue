<script>
import ItemBrick from './items/ItemBrick.vue'

export default {
  components: { ItemBrick },

  props: ['products'],
}
</script>

<template>
  <ul class="products-line">
    <ItemBrick
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
