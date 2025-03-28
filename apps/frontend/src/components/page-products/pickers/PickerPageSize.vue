<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      availablePageSizes: [10, 20, 30],
    }
  },

  watch: {
    modelValue(newValue) {
      this.validate(newValue)
    },
  },

  mounted() {
    this.validate(this.modelValue)
  },

  methods: {
    validate(pageSize) {
      if (!this.availablePageSizes.includes(pageSize))
        throw new Error(`${pageSize} is bad pageSize`)
    },
  },
}
</script>

<template>
  <div class="wrap-select-items-on-page">
    <select
      id="elSelectItemsOnPage"
      class="select-items-on-page"
      :value="modelValue"
      @change="$emit('update:modelValue', +$event.target.value)"
    >
      <option v-for="(pageSize, idx) of availablePageSizes" :key="idx">
        {{ pageSize }}
      </option>
    </select>
  </div>
</template>
