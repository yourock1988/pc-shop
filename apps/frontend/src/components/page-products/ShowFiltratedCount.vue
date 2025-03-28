<script>
export default {
  props: ['filtratedCount'],
}
</script>

<template>
  <div class="wrap-span-filtrated-items-count">
    <span id="elSpanFiltratedItemsCount">
      <span>Найдено </span>
      <b>{{ filtratedCount }}</b>
      <span> товаров</span>
    </span>
  </div>
</template>
