<script>
export default {
  props: ['cartProduct'],

  computed: {
    forId() {
      return `show-menu-${this.cartProduct.id}`
    },
  },
}
</script>

<template>
  <div class="cart-item">
    <input :id="forId" type="checkbox" />
    <div class="top">
      <div class="item-image">
        <img src="../assets/img/computer.webp" alt="Товар 1" />
      </div>
      <div class="item-details">
        <h2>{{ cartProduct.caption }}</h2>
        <p>Есть в наличии</p>
      </div>
      <div class="item-menu">
        <label :for="forId">:</label>
      </div>
    </div>

    <div class="bottom">
      <div class="item-counter">
        <button>-</button>
        <input type="text" size="2" value="1" />
        <button>+</button>
      </div>
      <div class="item-price">{{ cartProduct.priceUah }} ₴</div>
    </div>

    <div class="context-menu">
      <ul>
        <li>
          <i>🎉</i>
          <span>Добавить в желания</span>
        </li>
        <li>
          <i>🧨</i>
          <span>Удалить</span>
        </li>
      </ul>
    </div>
  </div>
</template>
