<script>
export default {
  props: ['attrValue', 'forId', 'modelValue'],

  emits: ['update:modelValue'],
}
</script>

<template>
  <li>
    <div class="wrap-checkbox-fa">
      <input
        :id="forId"
        type="checkbox"
        :checked="modelValue"
        @change="$emit('update:modelValue', $event.target.checked)"
      />
      <label :for="forId">
        <i class="fa-solid fa-square-check"></i>
        <i class="fa-solid fa-square"></i>
        <span>
          {{ attrValue.caption }}<sup>({{ attrValue.count }})</sup></span
        >
      </label>
    </div>
  </li>
</template>
