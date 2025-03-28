<script>
export default {}
</script>

<template>
  <div class="layout-category-navigation">
    <div class="category-path">
      <span class="short-path">
        <i class="fa-solid fa-arrow-left"></i>
        <span @click="$router.push('/products')">Собранные компьютеры</span>
      </span>
      <span class="long-path">
        <i class="fa-solid fa-house"></i>
        <span>/ Компьютеры и ноутбуки / Собранные компьютеры</span>
      </span>
    </div>
    <div class="category-caption">
      <h2>Собранные компьютеры</h2>
    </div>
  </div>
</template>
