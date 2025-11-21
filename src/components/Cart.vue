<template>
  <div>
    <!-- Кнопка корзины -->
    <button @click="toggleCart" 
      class="fixed top-24 right-8 z-50 bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-all">
      <i class="fas fa-shopping-cart text-xl"></i>
      <span v-if="cartCount > 0" 
        class="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
        {{ cartCount }}
      </span>
    </button>

    <!-- Оверлей -->
    <transition name="fade">
      <div v-if="isCartOpen" 
        @click="closeCart"
        class="fixed inset-0 bg-black bg-opacity-50 z-40">
      </div>
    </transition>

    <!-- Панель корзины -->
    <transition name="slide">
      <div v-if="isCartOpen" 
        class="fixed top-0 right-0 h-full w-full md:w-[480px] bg-white shadow-2xl z-50 flex flex-col">
        
        <!-- Заголовок -->
        <div class="bg-blue-600 text-white p-6 flex items-center justify-between">
          <div>
            <h2 class="text-2xl font-bold">Корзина</h2>
            <p class="text-blue-100 text-sm mt-1">{{ cartCount }} товар(ов)</p>
          </div>
          <button @click="closeCart" class="text-white hover:text-gray-200 text-2xl">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <!-- Пустая корзина -->
        <div v-if="isEmpty" class="flex-1 flex flex-col items-center justify-center p-8 text-center">
          <i class="fas fa-shopping-cart text-gray-300 text-6xl mb-4"></i>
          <h3 class="text-xl font-semibold text-gray-700 mb-2">Корзина пуста</h3>
          <p class="text-gray-500 mb-6">Добавьте товары для оформления заказа</p>
          <button @click="closeCart" 
            class="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Продолжить покупки
          </button>
        </div>

        <!-- Товары в корзине -->
        <div v-else class="flex-1 overflow-y-auto p-6">
          <div v-for="item in cartItems" :key="item.id" 
            class="bg-white border rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
            
            <div class="flex gap-4">
              <!-- Изображение -->
              <div class="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                <img :src="item.image" :alt="item.name" class="w-full h-full object-cover">
              </div>

              <!-- Информация -->
              <div class="flex-1 min-w-0">
                <h4 class="font-semibold text-gray-900 mb-1 line-clamp-2">{{ item.name }}</h4>
                <p class="text-blue-600 font-bold text-lg">{{ item.currentPrice }} UZS</p>
                
                <!-- Количество -->
                <div class="flex items-center gap-2 mt-3">
                  <button @click="decreaseQuantity(item.id)"
                    :disabled="item.quantity <= 1"
                    class="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                    <i class="fas fa-minus text-sm"></i>
                  </button>
                  
                  <input 
                    type="number" 
                    :value="item.quantity"
                    @input="updateQuantity(item.id, parseInt($event.target.value) || 1)"
                    class="w-16 text-center border rounded-lg py-1 px-2"
                    min="1"
                  >
                  
                  <button @click="increaseQuantity(item.id)"
                    class="w-8 h-8 bg-gray-200 rounded-lg hover:bg-gray-300 flex items-center justify-center">
                    <i class="fas fa-plus text-sm"></i>
                  </button>
                </div>
              </div>

              <!-- Удалить -->
              <div class="flex flex-col items-end justify-between">
                <button @click="removeFromCart(item.id)" 
                  class="text-red-500 hover:text-red-700">
                  <i class="fas fa-trash"></i>
                </button>
                <div class="text-right">
                  <p class="text-sm text-gray-500">Сумма:</p>
                  <p class="font-bold text-gray-900">{{ (item.currentPrice * item.quantity).toFixed(2) }} UZS</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Футер с итогом -->
        <div v-if="!isEmpty" class="border-t bg-gray-50 p-6">
          <!-- Итого -->
          <div class="space-y-3 mb-6">
            <div class="flex justify-between text-gray-600">
              <span>Товары ({{ cartCount }})</span>
              <span>{{ cartTotal.toFixed(2) }} UZS</span>
            </div>
            <div class="flex justify-between text-gray-600">
              <span>Доставка</span>
              <span class="text-green-600">Бесплатно</span>
            </div>
            <div class="h-px bg-gray-300"></div>
            <div class="flex justify-between text-xl font-bold text-gray-900">
              <span>Итого:</span>
              <span class="text-blue-600">{{ cartTotal.toFixed(2) }} UZS</span>
            </div>
          </div>

          <!-- Кнопки -->
          <div class="space-y-3">
            <button @click="checkout" 
              class="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
              <i class="fas fa-check-circle"></i>
              Оформить заказ
            </button>
            
            <button @click="clearCart" 
              class="w-full bg-red-50 text-red-600 py-3 rounded-lg font-semibold hover:bg-red-100 transition-colors flex items-center justify-center gap-2">
              <i class="fas fa-trash"></i>
              Очистить корзину
            </button>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useCart } from '../composables/useCart'

const {
  cartItems,
  isCartOpen,
  cartCount,
  cartTotal,
  isEmpty,
  toggleCart,
  closeCart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  updateQuantity,
  clearCart
} = useCart()

const checkout = () => {
  alert(`Оформление заказа на сумму $${cartTotal.value.toFixed(2)}`)
  // Здесь можно добавить логику оформления заказа
  clearCart()
  closeCart()
}
</script>

<style scoped>
/* Анимация появления оверлея */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}

/* Анимация выезда корзины */
.slide-enter-active, .slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  transform: translateX(100%);
}

/* Ограничение текста */
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Убираем стрелки у input type number */
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  -moz-appearance: textfield;
}
</style>