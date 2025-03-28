<script>
import ItemTr from './items/ItemTr.vue'

export default {
  components: { ItemTr },

  props: ['products'],
}
</script>

<template>
  <table class="products-table">
    <thead>
      <tr>
        <th>id</th>
        <th>photo</th>
        <th>caption</th>
        <th class="td-available">available</th>
        <th>price</th>
        <th>cart</th>
      </tr>
    </thead>
    <tbody>
      <ItemTr
        v-for="product of products"
        :key="product.id"
        :product="product"
      />
    </tbody>
  </table>
</template>
