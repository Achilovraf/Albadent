<template>
  <button 
    v-show="showScrollButton && !isCartOpen"
    @click="scrollToTop" 
    :class="[
      baseClasses,
      showScrollButton ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none',
      customClass
    ]">
    <i class="fas fa-tooth tooth-icon"></i>
    <i class="fas fa-chevron-up arrow-icon"></i>
  </button>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { isCartOpen } from '../composables/useCart'

const props = defineProps({
  customClass: { type: String, default: '' }
})

const showScrollButton = ref(false)

const handleScroll = () => { showScrollButton.value = window.scrollY > 300 }

const scrollToTop = () => { window.scrollTo({ top: 0, behavior: 'smooth' }) }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const baseClasses = `fixed w-14 h-14 bottom-4 right-6 flex items-center justify-center 
  bg-transparent transition-all duration-300 z-[1000] hover:scale-110 cursor-pointer`
</script>

<style scoped>
button {
  border: none;
  background: transparent;
  filter: drop-shadow(0 4px 8px rgba(14, 59, 206, 0.3));
}

.tooth-icon {
  font-size: 4rem;
  color: #2563eb;
  position: absolute;
  inset: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.arrow-icon {
  font-size: 2rem;
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  z-index: 1;
  transition: transform 0.3s ease;
}

button:hover .tooth-icon {
  color: transparent;
  transform: scale(1.05);
}

button:hover .arrow-icon {
  transform: translate(-50%, -60%);
  color: #0e3bce;
}

@keyframes pulse {
  0%, 100% {
    filter: drop-shadow(0 4px 8px rgba(14, 59, 206, 0.3));
  }
  50% {
    filter: drop-shadow(0 6px 12px rgba(14, 59, 206, 0.5));
  }
}

button:not(:hover) {
  animation: pulse 2s infinite;
}
</style>