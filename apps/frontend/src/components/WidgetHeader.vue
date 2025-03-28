<script>
import UiLogo from '@/ui/UiLogo.vue'
import PickerSearchQuery from './PickerSearchQuery.vue'

export default {
  components: { PickerSearchQuery, UiLogo },

  props: ['modelValue'],

  emits: ['update:modelValue'],
}
</script>

<template>
  <div class="layout-header">
    <header class="wrapper-header layout-centralize">
      <div class="wrap-icon-menu">
        <i class="fa-solid fa-bars"></i>
      </div>

      <UiLogo />

      <div class="wrap-button-catalog">
        <button @click="$router.push('/products')">
          <i class="fa-solid fa-table-cells-large"></i>
          <span>Каталог</span>
        </button>
      </div>

      <PickerSearchQuery
        :model-value="modelValue"
        @update:model-value="$emit('update:modelValue', $event)"
      />

      <div class="wrap-select-lang">
        <select id="" name="">
          <option value="">EN</option>
          <option value="">RU</option>
          <option value="">UA</option>
        </select>
      </div>

      <div class="panel-icons">
        <div class="wrap-icon-auth">
          <i class="fa-solid fa-user"></i>
        </div>
        <div class="wrap-icon-orders">
          <i class="fa-solid fa-table-list"></i>
        </div>
        <div class="wrap-icon-notifications">
          <i class="fa-regular fa-bell"></i>
        </div>
        <div class="wrap-icon-compare">
          <i class="fa-solid fa-scale-balanced"></i>
        </div>
        <div class="wrap-icon-wishlist">
          <i class="fa-regular fa-heart"></i>
        </div>
        <div class="wrap-icon-cart">
          <i
            class="fa-solid fa-cart-shopping"
            @click="$router.push('/cart')"
          ></i>
        </div>
      </div>
    </header>
  </div>
</template>
