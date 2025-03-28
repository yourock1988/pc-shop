<script>
import InputRangePrice from './inputs/InputRangePrice.vue'

export default {
  components: { InputRangePrice },

  props: ['priceMin', 'priceMax', 'priceFrom', 'priceTo'],

  emits: ['update:price-from', 'update:price-to'],

  watch: {
    priceMin(newValue) {
      if (newValue > this.priceFrom) this.$emit('update:price-from', newValue)
      this.$nextTick(() => {
        if (newValue === this.priceTo) {
          this.$emit('update:price-to', this.priceMax)
        }
      })
    },

    priceMax(newValue) {
      if (newValue < this.priceTo) this.$emit('update:price-to', newValue)
      this.$nextTick(() => {
        if (newValue === this.priceFrom) {
          this.$emit('update:price-from', this.priceMin)
        }
      })
    },

    priceFrom(newValue) {
      if (newValue > this.priceTo) this.$emit('update:price-to', newValue)
      this.$emit('update:price-from', this.priceFrom)
    },

    priceTo(newValue) {
      if (newValue < this.priceFrom) this.$emit('update:price-from', newValue)
      this.$emit('update:price-to', this.priceTo)
    },
  },
}
</script>

<template>
  <div class="price-ranges">
    <h3>Цена</h3>

    <InputRangePrice
      text="От"
      :price-min="priceMin"
      :price-max="priceMax"
      :model-value="priceFrom"
      @update:model-value="$emit('update:price-from', $event)"
    />

    <InputRangePrice
      text="До"
      :price-min="priceMin"
      :price-max="priceMax"
      :model-value="priceTo"
      @update:model-value="$emit('update:price-to', $event)"
    />
  </div>
</template>
