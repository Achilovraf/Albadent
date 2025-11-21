<!-- src/App.vue -->
<template>
  <AnimatedCursor />
  <div class="flex flex-col min-h-screen">

    <HeaderComponent />

    <!-- Breadcrumb - показывается только не на главной странице -->
    <Breadcrumb v-if="showBreadcrumb" />

    <main class="flex-1 relative">
      <RouterView />
      <ScrollButton customClass="" />

    </main>
    <FooterComponent />
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import HeaderComponent from '@/components/Header.vue'
import FooterComponent from '@/components/Footer.vue'
import ScrollButton from '@/components/ScrollButton.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import AnimatedCursor from './components/AnimatedCursor.vue'

export default {
  components: {
    HeaderComponent,
    FooterComponent,
    ScrollButton,
    Breadcrumb,
    AnimatedCursor
  },
  setup() {
    const route = useRoute()

    // Показывать breadcrumb на всех страницах кроме главной
    const showBreadcrumb = computed(() => {
      return route.name !== 'home'
    })

    return {
      showBreadcrumb
    }
  }
}
</script>