<template>
    <section class="relative min-h-screen w-full bg-cover bg-center bg-no-repeat"
        :style="{ 'background-image': `url(${bgImage})` }">
        <div class="absolute inset-0 bg-black/50"></div>

        <div class="relative z-20 w-full h-full min-h-screen flex items-center">
            <div class="w-full max-w-7xl mx-auto px-4 py-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">

                    <!-- Left Content -->
                    <div class="text-white space-y-6" data-aos="fade-right">
                        <div class="space-y-4">
                            <div class="inline-block">
                                <span class="bg-blue-600/20 text-blue-300 px-4 py-2 text-sm font-semibold border border-blue-400/30 rounded-full">
                                    <font-awesome-icon icon="['fas', 'shield-alt']" class="mr-2" />
                                    Сертифицированное качество
                                </span>
                            </div>

                            <h1 class="text-4xl lg:text-5xl font-bold leading-tight text-white">
                                Профессиональные решения для стоматологии
                            </h1>

                            <p class="text-lg text-gray-200 leading-relaxed">
                                Поставляем качественные стоматологические материалы, современное оборудование и
                                инновационные препараты для клиник и частных практик по всей стране.
                            </p>
                        </div>

                        <!-- Features Grid -->
                        <div class="grid grid-cols-2 gap-4" data-aos="fade-up" data-aos-delay="200">
                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <font-awesome-icon :icon="['fas', 'check']" class="text-white text-sm" />
                                </div>
                                <span class="text-gray-200 text-sm">Европейские стандарты</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <font-awesome-icon :icon="['fas', 'truck']" class="text-white text-sm" />
                                </div>
                                <span class="text-gray-200 text-sm">Быстрая доставка</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <font-awesome-icon :icon="['fas', 'headset']" class="text-white text-sm" />
                                </div>
                                <span class="text-gray-200 text-sm">24/7 поддержка</span>
                            </div>

                            <div class="flex items-center gap-3">
                                <div class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <font-awesome-icon :icon="['fas', 'users']" class="text-white text-sm" />
                                </div>
                                <span class="text-gray-200 text-sm">1000+ клиентов</span>
                            </div>
                        </div>

                        <!-- CTA Buttons -->
                        <div class="flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
                            <router-link to="/products"
                                class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                                <font-awesome-icon icon="['fas', 'shopping-cart']" />
                                Смотреть каталог
                            </router-link>
                            <router-link to="/contacts"
                                class="border-2 border-white/30 hover:border-white text-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                                Связаться с нами
                            </router-link>
                        </div>
                    </div>

                    <!-- Right Form -->
                    <div class="w-full max-w-lg mx-auto lg:mx-0 lg:ml-auto" data-aos="fade-left" data-aos-delay="200">
                        <div class="bg-white/10 backdrop-blur-md p-8 rounded-xl border border-white/20 shadow-2xl">
                            <div class="text-center mb-8">
                                <h3 class="text-2xl font-bold text-white mb-2">
                                    Получить консультацию
                                </h3>
                                <p class="text-gray-300">
                                    Оставьте заявку и наши специалисты свяжутся с вами
                                </p>
                            </div>

                            <form @submit.prevent="submitForm" class="space-y-4">
                                <div class="relative">
                                    <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <font-awesome-icon icon="['fas', 'user']" />
                                    </div>
                                    <input v-model="form.name" type="text" placeholder="Ваше имя" required
                                        class="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300" />
                                </div>

                                <div class="relative">
                                    <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <font-awesome-icon icon="['fas', 'envelope']" />
                                    </div>
                                    <input v-model="form.email" type="email" placeholder="Email адрес" required
                                        class="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300" />
                                </div>

                                <div class="relative">
                                    <div class="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                                        <font-awesome-icon icon="['fas', 'phone']" />
                                    </div>
                                    <input v-model="form.phone" type="tel" placeholder="Номер телефона"
                                        class="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300" />
                                </div>

                                <div class="relative">
                                    <div class="absolute left-4 top-4 text-gray-400">
                                        <font-awesome-icon icon="['fas', 'comment']" />
                                    </div>
                                    <textarea v-model="form.message" rows="3" placeholder="Ваше сообщение"
                                        class="w-full pl-12 pr-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white placeholder-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-transparent outline-none transition-all duration-300 resize-none"></textarea>
                                </div>

                                <button type="submit" :disabled="isSubmitting"
                                    class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg">
                                    <span v-if="!isSubmitting" class="flex items-center justify-center gap-2">
                                        <font-awesome-icon icon="['fas', 'paper-plane']" />
                                        Отправить заявку
                                    </span>
                                    <span v-else class="flex items-center justify-center gap-2">
                                        <div class="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                        Отправка...
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white animate-bounce" data-aos="fade-up" data-aos-delay="600">
            <font-awesome-icon icon="['fas', 'chevron-down']" class="text-2xl opacity-70" />
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import bgImage from '@/assets/img/brighton-benefits-2048x1365.jpeg'

const form = ref({
    name: '',
    email: '',
    phone: '',
    message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
    if (!form.value.name || !form.value.email) return
    isSubmitting.value = true
    try {
        await new Promise(resolve => setTimeout(resolve, 2000))
        form.value = { name: '', email: '', phone: '', message: '' }
        alert('Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.')
    } catch (error) {
        console.error('Error:', error)
        alert('Произошла ошибка. Попробуйте еще раз.')
    } finally {
        isSubmitting.value = false
    }
}
</script>

<style scoped>
input:focus,
textarea:focus {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(59, 130, 246, 0.2);
}

.backdrop-blur-md {
    backdrop-filter: blur(16px);
}
</style>