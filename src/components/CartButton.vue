<template>
  <transition name="fade">
    <button
      v-if="showCart && isProductsPage"
      @click="goToCart"
      class="fixed bottom-8 right-8 z-50 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 group"
      :class="{ 'animate-bounce': hasItemsInCart }"
    >
      <font-awesome-icon :icon="['fas', 'shopping-cart']" class="text-xl" />
      
      <!-- Badge с количеством товаров -->
      <span
        v-if="cartItemsCount > 0"
        class="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white text-xs font-bold rounded-full flex items-center justify-center"
      >
        {{ cartItemsCount }}
      </span>
    </button>
  </transition>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const showCart = ref(false)
const cartItemsCount = ref(0) // Это нужно будет связать с вашим store корзины

const isProductsPage = computed(() => {
  return route.path === '/products' || route.path.startsWith('/products/')
})

const hasItemsInCart = computed(() => {
  return cartItemsCount.value > 0
})

let lastScrollPosition = 0
let productsSection = null

const handleScroll = () => {
  if (!isProductsPage.value) {
    showCart.value = false
    return
  }

  const currentScrollPosition = window.scrollY

  // Найти секцию с продуктами (если есть)
  if (!productsSection) {
    productsSection = document.querySelector('.products-grid') || 
                      document.querySelector('[data-products]') ||
                      document.querySelector('.product-cards')
  }

  if (productsSection) {
    const rect = productsSection.getBoundingClientRect()
    const isOverProducts = rect.top < window.innerHeight && rect.bottom > 0
    
    // Показываем корзину если:
    // 1. Мы на странице продуктов
    // 2. Мы проскроллили хотя бы 300px
    // 3. Мы находимся над секцией продуктов
    showCart.value = isOverProducts && currentScrollPosition > 300
  } else {
    // Если секция не найдена, показываем при скролле > 300px
    showCart.value = currentScrollPosition > 300
  }

  lastScrollPosition = currentScrollPosition
}

const goToCart = () => {
  router.push('/cart') // Или ваш маршрут корзины
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll() // Проверяем сразу при монтировании
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.8) translateY(20px);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

.animate-bounce {
  animation: bounce 1s ease-in-out infinite;
}
</style>