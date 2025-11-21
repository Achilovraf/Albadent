<template>
  <section id="services" class="py-20 bg-gray-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="text-center mb-16" data-aos="fade-up">
        <div class="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
          <i class="fas fa-tooth"></i>
          Наши услуги
        </div>
        <h2 class="text-3xl lg:text-4xl font-bold mb-4 text-gray-900">
          Полный спектр решений для стоматологии
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          От расходных материалов до современного оборудования — все, что нужно
          для эффективной работы вашей стоматологической практики.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        <div v-for="(service, index) in services" :key="index" class="flex" data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 w-full flex flex-col">
            <div class="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <font-awesome-icon :icon="service.icon" class="text-2xl text-blue-600" />
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-3">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed mb-4">
              {{ service.description }}
            </p>

            <ul class="space-y-2 mb-6 flex-grow">
              <li v-for="feature in service.features" :key="feature" class="flex items-center gap-2 text-sm text-gray-600">
                <font-awesome-icon icon="['fas', 'check']" class="text-blue-600 text-xs" />
                {{ feature }}
              </li>
            </ul>

            <button class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-300 mt-auto">
              В разработке...
            </button>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        <div v-for="(stat, index) in stats" :key="index" class="text-center" data-aos="fade-up" :data-aos-delay="index * 100">
          <div class="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300">
            <div class="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-4">
              <font-awesome-icon :icon="stat.icon" class="text-blue-600 text-xl" />
            </div>
            <div class="text-3xl font-bold text-gray-900 mb-2">
              {{ stat.number }}
            </div>
            <div class="text-gray-600 text-sm">{{ stat.label }}</div>
          </div>
        </div>
      </div>

      <div class="bg-white rounded-2xl p-12 shadow-md" data-aos="fade-up">
        <div class="text-center mb-12">
          <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Как мы работаем</h3>
          <p class="text-gray-600 max-w-2xl mx-auto">
            Простой и прозрачный процесс сотрудничества, направленный на ваш успех
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="(step, index) in processSteps" :key="index" class="relative text-center" data-aos="fade-up" :data-aos-delay="index * 100">
            <div class="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-white">
              {{ index + 1 }}
            </div>

            <div v-if="index < processSteps.length - 1" class="hidden lg:block absolute top-8 left-full w-full">
              <div class="flex items-center justify-center">
                <font-awesome-icon icon="['fas', 'arrow-right']" class="text-gray-400 text-2xl" />
              </div>
            </div>

            <h4 class="text-lg font-bold text-gray-900 mb-2">{{ step.title }}</h4>
            <p class="text-gray-600 text-sm">{{ step.description }}</p>
          </div>
        </div>
      </div>

      <div class="text-center mt-16" data-aos="fade-up">
        <h3 class="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
          Готовы начать сотрудничество?
        </h3>
        <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Свяжитесь с нами сегодня и получите персональную консультацию по
          выбору оптимальных решений для вашей клиники.
        </p>

        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/contacts"
            class="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg">
            <font-awesome-icon icon="['fas', 'phone']" />
            Заказать звонок
          </router-link>

          <router-link to="/"
            class="inline-flex items-center gap-2 border-2 border-gray-300 hover:border-blue-600 text-gray-900 hover:text-blue-600 px-6 py-3 rounded-lg font-semibold transition-all duration-300">
            <font-awesome-icon icon="['fas', 'calendar']" />
            Записаться на встречу
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

const services = ref([
  {
    icon: ["fas", "tooth"],
    title: "Стоматологические материалы",
    description: "Широкий ассортимент пломбировочных материалов, композитов, адгезивов и других расходных материалов.",
    features: ["Композитные материалы", "Пломбировочные материалы", "Адгезивные системы", "Временные материалы"],
  },
  {
    icon: ["fas", "microscope"],
    title: "Медицинское оборудование",
    description: "Современное стоматологическое оборудование от ведущих мировых производителей.",
    features: ["Стоматологические установки", "Рентген оборудование", "Хирургические инструменты", "Диагностическое оборудование"],
  },
  {
    icon: ["fas", "pills"],
    title: "Лекарственные препараты",
    description: "Полный спектр препаратов для анестезии, антибиотикотерапии и профилактики.",
    features: ["Анестетики местного действия", "Антибиотики", "Противовоспалительные", "Профилактические средства"],
  },
  {
    icon: ["fas", "tools"],
    title: "Инструменты",
    description: "Высококачественные стоматологические инструменты для всех видов вмешательств.",
    features: ["Хирургические инструменты", "Эндодонтические файлы", "Пародонтологические кюреты", "Ортопедические инструменты"],
  },
  {
    icon: ["fas", "shield-virus"],
    title: "Дезинфекция и стерилизация",
    description: "Средства для обеспечения безопасности и стерильности в стоматологическом кабинете.",
    features: ["Дезинфицирующие растворы", "Стерилизаторы", "Индикаторы стерилизации", "Барьерные средства"],
  },
  {
    icon: ["fas", "graduation-cap"],
    title: "Обучение и консультации",
    description: "Профессиональное обучение работе с новым оборудованием и материалами.",
    features: ["Мастер-классы", "Техническая поддержка", "Обучающие материалы", "Сертификация специалистов"],
  },
]);

const stats = ref([
  { icon: ["fas", "users"], number: "1000+", label: "Довольных клиентов" },
  { icon: ["fas", "box"], number: "5000+", label: "Товаров в наличии" },
  { icon: ["fas", "shipping-fast"], number: "24ч", label: "Средняя доставка" },
  { icon: ["fas", "medal"], number: "15+", label: "Лет на рынке" },
]);

const processSteps = ref([
  { title: "Консультация", description: "Обсуждаем ваши потребности и подбираем оптимальные решения" },
  { title: "Предложение", description: "Предоставляем детальное коммерческое предложение с ценами" },
  { title: "Заказ", description: "Оформляем заказ и согласовываем условия поставки" },
  { title: "Доставка", description: "Быстро доставляем товар с полным сервисным сопровождением" },
]);
</script>