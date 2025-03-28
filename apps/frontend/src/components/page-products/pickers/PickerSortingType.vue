<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      sortingTypes: {
        cheapFirst: 'Сначала дешевые',
        expensiveFirst: 'Сначала дорогие',
        idLowHight: 'По id от меньшего',
        idHightLow: 'По id от большего',
        randomize: 'Случайным образом',
      },
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
    validate(sortingType) {
      if (!Object.keys(this.sortingTypes).includes(sortingType))
        throw new Error(`${sortingType} is bad sorting type`)
    },
  },
}
</script>

<template>
  <div class="wrap-select-sorting-type">
    <select
      id="elSelectSortingType"
      class="select-sorting-type"
      :value="modelValue"
      @change="$emit('update:modelValue', $event.target.value)"
    >
      <option
        v-for="(sortingTypeValue, sortingTypeKey) in sortingTypes"
        :key="sortingTypeKey"
        :value="sortingTypeKey"
      >
        {{ sortingTypeValue }}
      </option>
    </select>
  </div>
</template>
