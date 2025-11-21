<template>
    <section id="about" class="py-20 bg-gray-50">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-aos="fade-up">
                <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                    <i class="fas fa-info-circle"></i>
                    О компании
                </div>
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    ALBADENT — Ваш надежный партнер в стоматологии
                </h2>
                <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                    Более 15 лет опыта в поставке качественных стоматологических материалов,
                    оборудования и инновационных решений для профессионалов отрасли.
                </p>
            </div>

            <div class="grid lg:grid-cols-2 gap-12 items-center mb-20">
                <div class="space-y-6" data-aos="fade-right">
                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                <i class="fas fa-bullseye text-blue-600 text-xl"></i>
                            </div>
                            Наша миссия
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            Обеспечивать стоматологические клиники и частные практики
                            высококачественными материалами, современным оборудованием и
                            инновационными препаратами, соответствующими международным стандартам.
                        </p>
                    </div>

                    <div class="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300">
                        <h3 class="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center">
                                <i class="fas fa-eye text-blue-600 text-xl"></i>
                            </div>
                            Наше видение
                        </h3>
                        <p class="text-gray-600 leading-relaxed">
                            Стать ведущим дистрибьютором стоматологических решений,
                            которому доверяют профессионалы. Мы видим будущее, где каждая
                            стоматологическая клиника имеет доступ к передовым технологиям.
                        </p>
                    </div>
                </div>

                <div class="relative" data-aos="fade-left" data-aos-delay="100">
                    <div class="relative">
                        <img src="/src/assets/images/stom/hero1.png" alt="Medical Equipment"
                            class="w-full h-96 object-cover rounded-2xl shadow-xl" />

                        <div class="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-600">15+</div>
                                <div class="text-sm text-gray-600">лет опыта</div>
                            </div>
                        </div>

                        <div class="absolute -top-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                            <div class="text-center">
                                <div class="text-3xl font-bold text-blue-600">1000+</div>
                                <div class="text-sm text-gray-600">клиентов</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                <div v-for="(value, index) in values" :key="index" class="text-center" data-aos="fade-up"
                    :data-aos-delay="index * 100">
                    <div class="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4 hover:bg-blue-100 transition-colors duration-300">
                        <i :class="value.icon + ' text-2xl text-blue-600'"></i>
                    </div>
                    <h3 class="text-lg font-bold text-gray-900 mb-2">{{ value.title }}</h3>
                    <p class="text-gray-600 text-sm">{{ value.description }}</p>
                </div>
            </div>

            <div class="bg-white rounded-2xl p-8 lg:p-12 shadow-md" data-aos="fade-up">
                <div class="text-center mb-12">
                    <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                        Партнеры мирового уровня
                    </h3>
                    <p class="text-gray-600 max-w-2xl mx-auto">
                        Мы сотрудничаем с ведущими производителями стоматологического оборудования
                        и материалов, чтобы предложить вам только лучшие решения.
                    </p>
                </div>

                <div class="relative overflow-hidden">
                    <Swiper :modules="[Autoplay]" :slides-per-view="2" :space-between="16" :loop="true" :autoplay="{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }" :speed="3000" :breakpoints="{
                        640: { slidesPerView: 3, spaceBetween: 20 },
                        768: { slidesPerView: 4, spaceBetween: 24 },
                        1024: { slidesPerView: 5, spaceBetween: 32 },
                        1280: { slidesPerView: 6, spaceBetween: 40 }
                    }">
                        <SwiperSlide v-for="partner in partners" :key="partner.name">
                            <div class="group bg-gray-50 hover:bg-white h-20 lg:h-24 rounded-lg flex items-center justify-center hover:shadow-md transition-all duration-300">
                                <img :src="partner.logo" :alt="partner.name"
                                    class="h-8 lg:h-10 w-auto object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>

            <div class="mt-16 text-center" data-aos="fade-up">
                <div class="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-12 text-white relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div class="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

                    <div class="relative z-10">
                        <h3 class="text-3xl lg:text-4xl font-bold mb-4">
                            Готовы стать нашим партнером?
                        </h3>
                        <p class="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            Присоединяйтесь к сотням довольных клиентов, которые доверяют нам
                            свои потребности в стоматологических материалах и оборудовании.
                        </p>

                        <div class="flex flex-col sm:flex-row gap-4 justify-center">
                            <router-link to="/contacts"
                                class="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg">
                                <i class="fas fa-handshake"></i>
                                Связаться с нами
                            </router-link>

                            <button @click="handleDownloadCatalog"
                                class="inline-flex items-center gap-2 border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                                <i class="fas fa-download"></i>
                                Скачать каталог
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay } from 'swiper/modules'

const values = ref([
    {
        icon: 'fas fa-medal',
        title: 'Качество',
        description: 'Только сертифицированные материалы от проверенных производителей'
    },
    {
        icon: 'fas fa-shipping-fast',
        title: 'Скорость',
        description: 'Быстрая обработка заказов и доставка по всей стране'
    },
    {
        icon: 'fas fa-user-friends',
        title: 'Сервис',
        description: 'Индивидуальный подход и профессиональная поддержка'
    },
    {
        icon: 'fas fa-chart-line',
        title: 'Инновации',
        description: 'Постоянное внедрение новых технологий и решений'
    }
])

const partners = ref([
    { name: 'Planmeca', logo: new URL('@/assets/images/stom/partners/planmeca.png', import.meta.url).href },
    { name: '3Shape', logo: new URL('@/assets/images/stom/partners/3shape.png', import.meta.url).href },
    { name: 'Euronda', logo: new URL('@/assets/images/stom/partners/euronda.png', import.meta.url).href },
    { name: 'iTero', logo: new URL('@/assets/images/stom/partners/itero.png', import.meta.url).href },
    { name: 'W&H', logo: new URL('@/assets/images/stom/partners/W&H.png', import.meta.url).href },
    { name: 'J-Optik', logo: new URL('@/assets/images/stom/partners/j-optik.png', import.meta.url).href },
    { name: 'EMS', logo: new URL('@/assets/images/stom/partners/ems.png', import.meta.url).href },
    { name: 'Invisalign', logo: new URL('@/assets/images/stom/partners/invisaling.png', import.meta.url).href },
    { name: 'GC', logo: new URL('@/assets/images/stom/partners/gc.png', import.meta.url).href },
    { name: 'Straumann', logo: new URL('@/assets/images/stom/partners/straumann.png', import.meta.url).href }
])

const handleDownloadCatalog = () => {
    console.log('Downloading catalog...')
}
</script>

<style scoped>
.swiper-wrapper {
    transition-timing-function: linear;
}
</style>