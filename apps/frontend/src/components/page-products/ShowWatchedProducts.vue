<script>
import ListPave from './lists/ListPave.vue'

export default {
  components: { ListPave },

  props: ['products'],
}
</script>

<template>
  <div class="watched-products">
    <h3>Просмотренные товары</h3>

    <ListPave :products="products" />
  </div>
</template>
