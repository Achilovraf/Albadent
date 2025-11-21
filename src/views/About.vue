<template>
    <!-- Hero Section -->
    <section class="relative bg-white min-h-[70vh] py-20 flex items-center">
        <div class="max-w-7xl mx-auto px-4 w-full">
            <div class="grid lg:grid-cols-2 gap-12 items-center">

                <!-- Left Content -->
                <div class="space-y-6" data-aos="fade-right">
                    <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold">
                        <font-awesome-icon icon="['fas', 'shield-alt']" />
                        Сертифицированное качество
                    </div>

                    <h1 class="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                        Ваш источник для
                        <span class="text-blue-600">медицинского оборудования</span>
                        и материалов
                    </h1>

                    <p class="text-lg text-gray-600 leading-relaxed">
                        Предоставляем стоматологическим клиникам качественные материалы, современное оборудование и
                        инновационные препараты для эффективной работы
                    </p>

                    <button class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg">
                        <font-awesome-icon icon="['fas', 'shopping-cart']" />
                        Смотреть каталог
                    </button>
                </div>

                <!-- Right Image -->
                <div class="relative" data-aos="fade-left" data-aos-delay="200">
                    <img src="@/assets/images/stom/hero1.png" alt="Medical Team"
                        class="w-full h-[500px] object-cover rounded-2xl shadow-xl" />
                </div>
            </div>
        </div>
    </section>

    <!-- Mission Section -->
    <section class="py-20 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Наша миссия: Предоставить медицинское оборудование высокого качества для улучшения здравоохранения
                </h2>
                <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div class="grid md:grid-cols-3 gap-8">
                <!-- Product Selection -->
                <div class="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up">
                    <div class="relative mb-6 overflow-hidden rounded-lg">
                        <img src="@/assets/images/stom/shop-categories/h6_categori_01.jpg"
                            alt="Unmatched Product Selection"
                            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Непревзойденный выбор продукции</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Широкий ассортимент высококачественных стоматологических материалов,
                        инструментов и оборудования от ведущих мировых производителей
                    </p>
                </div>

                <!-- Company Story -->
                <div class="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="100">
                    <div class="relative mb-6 overflow-hidden rounded-lg">
                        <img src="@/assets/images/stom/hero2.png" alt="Since 2009: Medicine's Story"
                            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">С 2009 года: История медицины</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Более 15 лет опыта в области поставок медицинского оборудования,
                        построение доверительных отношений с клиниками по всей стране
                    </p>
                </div>

                <!-- Product Specialists -->
                <div class="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300" data-aos="fade-up" data-aos-delay="200">
                    <div class="relative mb-6 overflow-hidden rounded-lg">
                        <img src="@/assets/images/stom/hero3.png" alt="In-House Product Specialists"
                            class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-3">Собственные специалисты по продуктам</h3>
                    <p class="text-gray-600 leading-relaxed">
                        Наша команда экспертов предоставляет профессиональные консультации
                        и техническую поддержку для оптимального выбора оборудования
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid lg:grid-cols-2 gap-12 items-center">

                <!-- Left Image -->
                <div class="relative" data-aos="fade-right">
                    <div class="bg-blue-50 rounded-full p-12 w-80 h-80 mx-auto flex items-center justify-center">
                        <div class="bg-white rounded-full p-8 shadow-xl">
                            <img src="@/assets/images/stom/albadent-logo.png" alt="Medical Equipment"
                                class="w-32 h-32 object-contain" />
                        </div>
                    </div>
                </div>

                <!-- Right Content -->
                <div class="space-y-6" data-aos="fade-left">
                    <div>
                        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                            <font-awesome-icon icon="['fas', 'quote-left']" />
                            Что говорят наши клиенты
                        </div>
                        <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
                            Качественные продукты с безупречным обслуживанием
                        </h2>
                    </div>

                    <blockquote class="text-lg text-gray-600 leading-relaxed pl-6 border-l-4 border-blue-600">
                        "ALBADENT предоставляет нам высококачественные материалы и оборудование,
                        которые значительно улучшили качество нашего обслуживания пациентов.
                        Их профессиональная поддержка и быстрая доставка делают их незаменимым партнером."
                    </blockquote>

                    <div class="flex items-center gap-4">
                        <img src="@/assets/img/testimonials-3-120x120.jpg" alt="Dr. Elena Petrov"
                            class="w-16 h-16 rounded-full object-cover" />
                        <div>
                            <div class="font-semibold text-gray-900">Доктор Елена Петрова</div>
                            <div class="text-sm text-gray-600">Главный врач, Стоматологическая клиника "Улыбка"</div>
                        </div>
                    </div>

                    <div class="flex gap-1">
                        <font-awesome-icon v-for="i in 5" :key="i" icon="['fas', 'star']" class="text-yellow-400 text-lg" />
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="py-16 bg-gray-50">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                <div data-aos="fade-up" data-aos-delay="0">
                    <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">300+</div>
                    <div class="text-gray-600">Клиники</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="100">
                    <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">24/7</div>
                    <div class="text-gray-600">Поддержка</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="200">
                    <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">1М+</div>
                    <div class="text-gray-600">Пациентов</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">45+</div>
                    <div class="text-gray-600">Специалистов</div>
                </div>
                <div data-aos="fade-up" data-aos-delay="400">
                    <div class="text-4xl lg:text-5xl font-bold text-blue-600 mb-2">50+</div>
                    <div class="text-gray-600">Городов</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                    Познакомьтесь с командой, стоящей за нашими великими проектами
                </h2>
                <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <div v-for="(member, index) in teamMembers" :key="index"
                    class="text-center group bg-gray-50 rounded-xl p-6 hover:shadow-xl transition-all duration-300"
                    data-aos="fade-up" :data-aos-delay="index * 100">

                    <div class="relative mb-6 overflow-hidden rounded-full w-32 h-32 mx-auto">
                        <img :src="member.image" :alt="member.name"
                            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            @error="handleImageError" />
                    </div>

                    <h3 class="text-xl font-bold text-gray-900 mb-2">{{ member.name }}</h3>
                    <p class="text-blue-600 font-medium">{{ member.position }}</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Promo Banner -->
    <section class="py-20 bg-gradient-to-r from-blue-600 to-blue-700 relative overflow-hidden">
        <div class="absolute inset-0 opacity-10">
            <div class="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
            <div class="absolute bottom-10 right-10 w-32 h-32 border-2 border-white rounded-full"></div>
            <div class="absolute top-1/2 left-1/4 w-12 h-12 bg-white rounded-full"></div>
        </div>

        <div class="max-w-4xl mx-auto px-4 text-center relative z-10" data-aos="fade-up">
            <div class="text-sm text-blue-100 font-semibold mb-4 uppercase tracking-wide">Специальное предложение для клиник</div>
            <h2 class="text-3xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Сэкономьте 50% на медицинских устройствах и технологиях
            </h2>
            <button class="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl">
                <font-awesome-icon icon="['fas', 'tag']" />
                Узнать больше
            </button>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const teamMembers = ref([
    {
        name: 'Алишер Смит',
        position: 'Главный врач',
        image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face'
    },
    {
        name: 'Уильям Джон',
        position: 'Кардиохирург',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face'
    },
    {
        name: 'Амина Николь',
        position: 'Анестезиолог',
        image: 'https://images.unsplash.com/photo-1594824047330-3c1cfecece02?w=400&h=400&fit=crop&crop=face'
    },
    {
        name: 'Тамара Мерфи',
        position: 'Медсестра',
        image: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?w=400&h=400&fit=crop&crop=face'
    }
])

const handleImageError = (event) => {
    event.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
}

onMounted(() => {
    setTimeout(() => {
        if (typeof window !== 'undefined' && window.AOS) {
            window.AOS.refresh()
        }
    }, 100)
})
</script>

<style scoped>
.group:hover {
    transform: translateY(-4px);
}

button:hover {
    transform: translateY(-2px);
}
</style>