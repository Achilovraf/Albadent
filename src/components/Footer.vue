<template>
  <footer class="bg-gray-900 text-white">
    <div class="max-w-7xl mx-auto px-4 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        <!-- About -->
        <div data-aos="fade-up">
          <h3 class="text-lg font-bold text-white mb-6">
            О компании
          </h3>
          <p class="text-gray-400 leading-relaxed text-sm mb-6">
            ALBADENT — ведущий поставщик стоматологических материалов, оборудования и препаратов в Узбекистане. 
            Мы работаем с клиниками по всей стране, обеспечивая высокие стандарты качества и сервиса.
          </p>

          <img 
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/albaaa-fZWuUj4zHerdhn8IzDXcPACzYdqMYK.png"
            alt="ALBADENT Logo" 
            class="h-10 opacity-80 hover:opacity-100 transition-opacity brightness-0 invert" 
          />
        </div>

        <!-- Quick Links -->
        <div data-aos="fade-up" data-aos-delay="100">
          <h3 class="text-lg font-bold text-white mb-6">
            Быстрые ссылки
          </h3>
          <ul class="space-y-3 text-sm">
            <li>
              <router-link to="/" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-blue-500 text-xs" />
                Главная
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-blue-500 text-xs" />
                О компании
              </router-link>
            </li>
            <li>
              <router-link to="/products" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-blue-500 text-xs" />
                Продукция
              </router-link>
            </li>
            <li>
              <router-link to="/blog" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-blue-500 text-xs" />
                Блог
              </router-link>
            </li>
            <li>
              <router-link to="/contacts" class="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                <font-awesome-icon :icon="['fas', 'chevron-right']" class="text-blue-500 text-xs" />
                Контакты
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div data-aos="fade-up" data-aos-delay="200">
          <h3 class="text-lg font-bold text-white mb-6">
            Наши услуги
          </h3>
          <ul class="space-y-3 text-sm text-gray-400">
            <li class="flex items-start gap-2">
              <font-awesome-icon :icon="['fas', 'tooth']" class="text-blue-500 text-xs mt-1" />
              <span>Стоматологические материалы</span>
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon :icon="['fas', 'microscope']" class="text-blue-500 text-xs mt-1" />
              <span>Медицинское оборудование</span>
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon :icon="['fas', 'pills']" class="text-blue-500 text-xs mt-1" />
              <span>Лекарственные препараты</span>
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon :icon="['fas', 'tools']" class="text-blue-500 text-xs mt-1" />
              <span>Стоматологические инструменты</span>
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon :icon="['fas', 'graduation-cap']" class="text-blue-500 text-xs mt-1" />
              <span>Обучение и консультации</span>
            </li>
            <li class="flex items-start gap-2">
              <font-awesome-icon :icon="['fas', 'tools']" />
              <span>В разработке...</span>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 class="text-lg font-bold text-white mb-6">
            Контакты
          </h3>
          <ul class="space-y-4 text-sm">
            <li class="flex items-start gap-3">
              <font-awesome-icon :icon="['fas', 'location-dot']" class="text-blue-500 mt-1" />
              <div>
                <span class="text-white font-medium block mb-1">Адрес:</span>
                <span class="text-gray-400">г. Ташкент, Hurshida Enter Delux</span>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <font-awesome-icon :icon="['fas', 'phone']" class="text-blue-500 mt-1" />
              <div>
                <span class="text-white font-medium block mb-1">Телефон:</span>
                <a href="tel:+998712345678" class="text-gray-400 hover:text-blue-500 transition-colors">
                  +998 (71) 234-56-78
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <font-awesome-icon :icon="['fas', 'envelope']" class="text-blue-500 mt-1" />
              <div>
                <span class="text-white font-medium block mb-1">Email:</span>
                <a href="mailto:info@albadent.uz" class="text-gray-400 hover:text-blue-500 transition-colors">
                  info@albadent.uz
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <font-awesome-icon :icon="['fas', 'clock']" class="text-blue-500 mt-1" />
              <div>
                <span class="text-white font-medium block mb-1">Время работы:</span>
                <span class="text-gray-400">Пн–Пт: 9:00 – 18:00</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 py-6">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <p class="text-gray-400">
            © {{ new Date().getFullYear() }} ALBADENT. Все права защищены.
          </p>

          <div class="flex gap-4">
            <a href="#" class="w-9 h-9 bg-gray-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all duration-300">
              <font-awesome-icon :icon="['fab', 'facebook-f']" class="text-gray-400 hover:text-white" />
            </a>
            <a href="#" class="w-9 h-9 bg-gray-800 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all duration-300">
              <font-awesome-icon :icon="['fab', 'twitter']" class="text-gray-400 hover:text-white" />
            </a>
            <a href="#" class="w-9 h-9 bg-gray-800 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-all duration-300">
    <font-awesome-icon :icon="['fab', 'linkedin-in']" class="text-gray-400 hover:text-white" />
</a>

            <a href="#" class="w-9 h-9 bg-gray-800 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-all duration-300">
              <font-awesome-icon :icon="['fab', 'instagram']" class="text-gray-400 hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
// Footer component
</script>