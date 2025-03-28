<script>
import imgLogo from '@/assets/img/logo.png'
import imgLogoFull from '@/assets/img/logo-full.png'

export default {
  data() {
    return {
      imgLogo,
      imgLogoFull,
    }
  },
}
</script>

<template>
  <div class="wrap-logo">
    <span class="logo-small">
      <img :src="imgLogo" width="50px" alt="" />
    </span>
    <span class="logo-large">
      <img :src="imgLogoFull" height="50px" alt="" />
    </span>
  </div>
</template>
