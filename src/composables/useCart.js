import { ref, computed } from 'vue'

// Глобальное состояние корзины
const cartItems = ref([])
const isCartOpen = ref(false)

export function useCart() {
  // Добавить товар в корзину
  const addToCart = (product) => {
    const existingItem = cartItems.value.find(item => item.id === product.id)
    
    if (existingItem) {
      existingItem.quantity++
    } else {
      cartItems.value.push({
        ...product,
        quantity: 1
      })
    }
    
    // Показать уведомление
    showNotification(`${product.name} добавлен в корзину`)
  }

  // Удалить товар из корзины
  const removeFromCart = (productId) => {
    const index = cartItems.value.findIndex(item => item.id === productId)
    if (index > -1) {
      cartItems.value.splice(index, 1)
    }
  }

  // Увеличить количество
  const increaseQuantity = (productId) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item) {
      item.quantity++
    }
  }

  // Уменьшить количество
  const decreaseQuantity = (productId) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item && item.quantity > 1) {
      item.quantity--
    }
  }

  // Изменить количество напрямую
  const updateQuantity = (productId, quantity) => {
    const item = cartItems.value.find(item => item.id === productId)
    if (item && quantity > 0) {
      item.quantity = quantity
    }
  }

  // Очистить корзину
  const clearCart = () => {
    cartItems.value = []
  }

  // Открыть/закрыть корзину
  const toggleCart = () => {
    isCartOpen.value = !isCartOpen.value
  }

  const openCart = () => {
    isCartOpen.value = true
  }

  const closeCart = () => {
    isCartOpen.value = false
  }

  // Вычисляемые свойства
  const cartTotal = computed(() => {
    return cartItems.value.reduce((total, item) => {
      return total + (item.currentPrice * item.quantity)
    }, 0)
  })

  const cartCount = computed(() => {
    return cartItems.value.reduce((count, item) => count + item.quantity, 0)
  })

  const isEmpty = computed(() => cartItems.value.length === 0)

  // Уведомление (простая реализация)
  const showNotification = (message) => {
    // Можно заменить на toast library
    console.log('Уведомление:', message)
  }

  return {
    cartItems,
    isCartOpen,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    cartTotal,
    cartCount,
    isEmpty
  }
}

// Экспортируем isCartOpen для использования в других компонентах
export { isCartOpen }
