<script>
export default {
  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      availableListTypes: {
        Pave: 'fa-brands fa-microsoft',
        Table: 'fa-solid fa-table',
        Wall: 'fa-solid fa-water',
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
    validate(listType) {
      if (!Object.keys(this.availableListTypes).includes(listType))
        throw new Error(`${listType} is bad list type`)
    },
  },
}
</script>

<template>
  <div class="wrap-picker-tile-style">
    <div id="elPickerTileStyle" class="picker-tile-style">
      <span v-for="(icon, type) in availableListTypes" :key="type">
        <input
          :id="type"
          type="radio"
          name="tile-style"
          :value="type"
          :checked="type === modelValue"
          @change="$emit('update:modelValue', $event.target.value)"
        />
        <label :for="type">
          <i :class="icon"></i>
        </label>
      </span>
    </div>
  </div>
</template>
