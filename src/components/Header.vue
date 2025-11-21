<template>
  <nav class="w-full bg-[#ebf2fa] z-39">
    <div class="max-w-screen-xl mx-auto">
      <div class="flex flex-col">
        <!-- Top section: logo and contact info -->
        <div class="flex justify-between items-center">
          <router-link to="/" class="flex items-center">
            <img
              src="/src/assets/images/stom/albadent-logo.png"
              alt="Logo"
              class="w-[150px] h-auto"
            />
          </router-link>

          <!-- Контактная информация для десктопа -->
          <div class="hidden lg:flex flex-wrap gap-6 text-sm md:text-base">
            <div class="flex items-center gap-2 text-gray-700">
              <font-awesome-icon
                :icon="['fas', 'location-dot']"
                class="w-5 h-5 text-blue-600"
              />
              <div>
                <div class="font-semibold">Адрес</div>
                <div class="text-[15px]">
                  г. Ташкент, Hurshida Enter Delux
                </div>
              </div>
            </div>

            <div
              class="flex items-center gap-2 text-gray-700 border-l border-r px-4"
            >
              <font-awesome-icon
                :icon="['fas', 'phone']"
                class="w-5 h-5 text-blue-600"
              />
              <div>
                <div class="font-semibold">Телефон</div>
                <div class="text-[15px]">+998 (71) 234-56-78</div>
              </div>
            </div>

            <div class="flex items-center gap-2 text-gray-700">
              <font-awesome-icon
                :icon="['fas', 'clock']"
                class="w-5 h-5 text-blue-600"
              />
              <div>
                <div class="font-semibold">Мы открыты</div>
                <div class="text-[15px]">Пн–Пт: 9:00 – 18:00</div>
              </div>
            </div>
          </div>

          <!-- Mobile burger -->
          <button
            class="lg:hidden p-2 text-gray-700 focus:outline-none"
            @click="isMobileOpen = !isMobileOpen"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Line -->
        <div class="h-px bg-gray-200"></div>

        <!-- Spacer for sticky offset -->
        <div :style="{ height: isFixed ? '60px' : '0px' }"></div>
      </div>
    </div>

    <!-- Sticky nav -->
    <div
      ref="navInfoWrapper"
      :class="[
        'w-full bg-white transition-transform duration-500 ease-in-out',
        isFixed
          ? 'fixed top-0 left-0 shadow-md border-b border-gray-500 z-[39]'
          : 'relative',
        isHidden ? '-translate-y-full' : 'translate-y-0',
      ]"
    >
      <div class="max-w-screen-xl mx-auto px-0 lg:px-4">
        <div class="hidden lg:flex h-[60px] items-center justify-between">
          <!-- Desktop nav -->
          <ul class="hidden lg:flex gap-5 text-sm font-medium uppercase">
            <li>
              <router-link to="/" :class="linkClass('home')"
                >Главная</router-link
              >
            </li>
            <li>
              <router-link to="/about" :class="linkClass('about')"
                >О компании</router-link
              >
            </li>
            <li>
              <router-link to="/products" :class="linkClass('products')"
                >Продукция</router-link
              >
            </li>
            <li>
              <router-link to="/blog" :class="linkClass('blog')"
                >Блог</router-link
              >
            </li>
            <li>
              <router-link to="/contacts" :class="linkClass('contacts')"
                >Контакты</router-link
              >
            </li>
          </ul>
        </div>
      </div>

      <!-- Mobile dropdown -->
      <transition name="fade">
        <div
          v-if="isMobileOpen"
          class="lg:hidden absolute top-[60px] left-0 w-full bg-white border-t shadow-md"
        >
          <ul class="flex flex-col gap-4 p-4 text-blue-600 font-medium">
            <li>
              <router-link
                @click="closeMobile"
                to="/"
                :class="linkClass('home')"
                >Главная</router-link
              >
            </li>
            <li>
              <router-link
                @click="closeMobile"
                to="/about"
                :class="linkClass('about')"
                >О компании</router-link
              >
            </li>
            <li>
              <router-link
                @click="closeMobile"
                to="/products"
                :class="linkClass('products')"
                >Продукция</router-link
              >
            </li>
            <li>
              <router-link
                @click="closeMobile"
                to="/blog"
                :class="linkClass('blog')"
                >Блог</router-link
              >
            </li>
            <li>
              <router-link
                @click="closeMobile"
                to="/contacts"
                :class="linkClass('contacts')"
                >Контакты</router-link
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isFixed = ref(false);
const isHidden = ref(false);
const navInfoWrapper = ref(null);
const activeSection = ref("home");
const isMobileOpen = ref(false);

let navOffsetTop = 0;
let lastScroll = 0;

const linkClass = (id) => {
  const isActive = route.name === id || activeSection.value === id;
  return [
    "transition-colors hover:text-blue-600",
    isActive ? "text-blue-600 font-semibold" : "text-black",
  ];
};

const handleScroll = () => {
  const currentScroll = window.scrollY;
  isFixed.value = currentScroll >= navOffsetTop;

  if (currentScroll > lastScroll && currentScroll > 100) {
    isHidden.value = true;
  } else if (currentScroll < lastScroll) {
    isHidden.value = false;
  }
  lastScroll = currentScroll;

  const scrollY = window.scrollY + 150;
  const sections = document.querySelectorAll("section[id]");
  let current = "home";
  for (const section of sections) {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");
    if (scrollY >= top && scrollY < top + height) {
      current = id;
      break;
    }
  }
  activeSection.value = current;
};

const closeMobile = () => {
  isMobileOpen.value = false;
};

onMounted(() => {
  navOffsetTop = navInfoWrapper.value.offsetTop;
  window.addEventListener("scroll", handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>