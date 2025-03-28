<script>
export default {
  props: ['modelValue', 'pagesTotal'],

  emits: ['update:modelValue'],

  computed: {
    availablePages() {
      return Array.from(Array(this.pagesTotal), (_, idx) => idx + 1)
    },
  },

  watch: {
    pagesTotal() {
      this.$emit('update:modelValue', 0)
    },

    modelValue(newValue) {
      this.validate(newValue)
    },
  },

  mounted() {
    this.validate(this.modelValue)
  },

  methods: {
    validate(currentPage) {
      if (currentPage > this.availablePages.length)
        throw new Error(`${currentPage} is bad current page`)
    },
  },
}
</script>

<template>
  <div class="wrap-paginator">
    <ul class="paginator">
      <li
        v-for="(page, idx) of availablePages"
        :key="idx"
        :class="{ selected: modelValue === idx }"
        @click="$emit('update:modelValue', idx)"
      >
        {{ page }}
      </li>
    </ul>
  </div>
</template>
