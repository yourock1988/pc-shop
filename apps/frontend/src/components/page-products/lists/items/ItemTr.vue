<script>
const { APP_ORIGIN } = process.env

export default {
  props: ['product'],

  data() {
    return {
      urlToPhoto: `${APP_ORIGIN}/static/photos/products/computers/`,
    }
  },
}
</script>

<template>
  <tr class="product-row" @click="$router.push(`/product/${product.id}`)">
    <th>{{ product.id }}</th>
    <td><img height="50" :src="urlToPhoto + product.photos[0]" /></td>
    <td class="td-caption">
      {{ product.caption }}
    </td>
    <td class="td-available">Есть в наличии</td>
    <td>{{ product.priceUah }}₴</td>
    <td>
      <div class="icon-cart"><i class="fa-solid fa-cart-plus"></i></div>
    </td>
  </tr>
</template>
