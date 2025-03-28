<script>
import ItemTile from './items/ItemTile.vue'

export default {
  components: { ItemTile },

  props: ['products'],
}
</script>

<template>
  <ul class="products">
    <ItemTile
      v-for="product of products"
      :key="product.id"
      :product="product"
    />
  </ul>
</template>
