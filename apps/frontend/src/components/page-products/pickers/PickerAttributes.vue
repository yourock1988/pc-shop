<script>
import InputCheckboxAttribute from './inputs/InputCheckboxAttribute.vue'

export default {
  components: { InputCheckboxAttribute },

  props: ['modelValue'],

  emits: ['update:modelValue'],

  data() {
    return {
      availableAttributes: [],
      forId: `forId-${(Math.random() * 0xff ** 4).toFixed()}`,
    }
  },

  watch: {
    modelValue(newValue) {
      const clone = JSON.parse(JSON.stringify(newValue))
      this.availableAttributes = clone
    },

    availableAttributes: {
      deep: true,
      handler(newValue, oldValue) {
        // omg magic !!
        if (newValue === oldValue) {
          const clone = JSON.parse(JSON.stringify(newValue))
          this.$emit('update:modelValue', clone)
        }
      },
    },
  },

  mounted() {
    this.availableAttributes = this.modelValue
  },
}
</script>

<template>
  <div class="filter-attributes">
    <h3>Атрибуты</h3>
    <dl
      v-for="(filter, idx) of availableAttributes"
      :key="idx"
      class="filter-attribute"
    >
      <dt>
        <h4>{{ filter.attrName }}</h4>
      </dt>
      <dd>
        <ul>
          <InputCheckboxAttribute
            v-for="(attrValue, subIdx) of filter.attrValues"
            :key="subIdx"
            v-model="attrValue.isChecked"
            :attr-value="attrValue"
            :for-id="`${forId}-${idx}-${subIdx}`"
          />
        </ul>
      </dd>
    </dl>
  </div>
</template>
