<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  watch: {
    modelValue() {},
  },
}
</script>

<template>
  <div class="wrap-button-show-filters">
    <button id="elButtonShowFilters" @click="$emit('update:modelValue', true)">
      Фильтры
    </button>
  </div>
</template>
