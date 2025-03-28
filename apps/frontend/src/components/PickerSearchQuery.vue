<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      searchQuery: '',
      isUpdated: false,
    }
  },

  watch: {
    modelValue(newValue) {
      this.searchQuery = newValue
    },

    searchQuery(newValue) {
      this.isUpdated = true
      if (newValue === '') {
        this.$emit('update:modelValue', newValue)
      }
    },
  },

  mounted() {
    this.searchQuery = this.modelValue
  },

  methods: {
    handleClick() {
      if (this.isUpdated && this.searchQuery !== '') {
        this.$emit('update:modelValue', this.searchQuery)
        this.isUpdated = false
      }
    },
  },
}
</script>

<template>
  <div class="wrap-search">
    <input
      v-model.trim="searchQuery"
      type="search"
      @keypress.enter="handleClick"
    />
    <button @click="handleClick">Найти</button>
  </div>
</template>
