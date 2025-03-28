<script>
import state from '@/functions/state'
import WidgetHeader from '~/WidgetHeader.vue'
import UiCopyright from '@/ui/page-face-main/UiCopyright.vue'
import UiLinetop from '@/ui/page-face-main/UiLinetop.vue'
import UiTapbar from '@/ui/page-face-main/UiTapbar.vue'
import UiLinks from '@/ui/page-face-main/UiLinks.vue'
import UiTags from '@/ui/page-face-main/UiTags.vue'

export default {
  components: {
    WidgetHeader,
    UiCopyright,
    UiLinetop,
    UiTapbar,
    UiLinks,
    UiTags,
  },

  computed: {
    searchQuery: state('products', 'searchQuery', 'setSearchQuery', true),
  },
}
</script>

<template>
  <div class="layout-wrapper">
    <UiLinetop />

    <WidgetHeader v-model="searchQuery" />

    <RouterView v-slot="{ Component, route }">
      <Transition name="fade" mode="out-in">
        <KeepAlive>
          <Component :is="Component" :key="route.path" />
        </KeepAlive>
      </Transition>
    </RouterView>

    <div class="layout-footer">
      <div class="line-downloads"></div>

      <div class="layout-centralize">
        <footer>
          <UiLinks />

          <UiTags />

          <UiCopyright />
        </footer>
      </div>
    </div>
  </div>

  <UiTapbar />
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 150ms ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
