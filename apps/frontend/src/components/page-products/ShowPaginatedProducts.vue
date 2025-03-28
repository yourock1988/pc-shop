<script>
import ListPave from './lists/ListPave.vue'
import ListWall from './lists/ListWall.vue'
import ListTable from './lists/ListTable.vue'

export default {
  components: { ListPave, ListWall, ListTable },

  props: ['paginatedProducts', 'listType'],

  data() {
    return {
      canShowHint: false,
      availableListTypes: ['Pave', 'Table', 'Wall'],
    }
  },

  computed: {
    listComponent() {
      if (!this.availableListTypes.includes(this.listType)) {
        throw new Error(`Bad listComponent Name: ${this.listType}`)
      }
      return `List${this.listType}`
    },
  },

  watch: {
    paginatedProducts(newValue) {
      if (newValue.length > 0) this.canShowHint = true
    },
  },
}
</script>

<template>
  <Component
    :is="listComponent"
    v-if="paginatedProducts.length"
    :products="paginatedProducts"
  ></Component>

  <div v-else class="no-goods">
    <h2 v-if="canShowHint">
      <i>
        К сожалению, ни один наш товар не соответствует вашим высоким
        требованиям!
      </i>
    </h2>
  </div>
</template>
