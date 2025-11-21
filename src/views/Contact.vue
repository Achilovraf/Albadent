<!-- src/views/Contact.vue -->
<template>
  <!-- Map Section -->
  <section class="relative">
    <div class="flex flex-col lg:flex-row min-h-[500px]">
      <!-- Interactive Map -->
      <div
        class="lg:w-1/2 h-[400px] lg:h-auto relative"
        data-aos="fade-right"
        data-aos-duration="800"
      >
        <iframe
          src="https://maps.google.com/maps?q=41.271676,69.279287+(AlbaDent+Стоматологические+материалы)&output=embed&z=16"
          width="100%"
          height="100%"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="absolute inset-0"
        ></iframe>
      </div>

      <!-- Contact Info -->
      <div
        class="lg:w-1/2 bg-white p-8 lg:p-16 flex items-center"
        data-aos="fade-left"
        data-aos-duration="800"
      >
        <div class="w-full max-w-md">
          <h2 class="text-3xl font-bold text-gray-800 mb-8">
            Как мы можем вам помочь?
          </h2>
          <p class="text-gray-600 mb-8">
            Мы здесь, чтобы помочь! Свяжитесь с нами любым удобным способом.
          </p>

          <!-- Contact Items -->
          <div class="space-y-6">
            <div
              class="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div
                class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <font-awesome-icon
                  :icon="['fas', 'map-marker-alt']"
                  class="w-5 h-5 text-blue-600"
                />
              </div>
              <div>
                <p class="font-semibold text-gray-800">Адрес</p>
                <p class="text-gray-600">г. Ташкент, Hurshida Enter Delux</p>
              </div>
            </div>

            <div
              class="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div
                class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <font-awesome-icon
                  :icon="['fas', 'envelope']"
                  class="w-5 h-5 text-blue-600"
                />
              </div>
              <div>
                <p class="font-semibold text-gray-800">Электронная почта</p>
                <a
                  href="mailto:contact@albadent.uz"
                  class="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  contact@albadent.uz
                </a>
              </div>
            </div>

            <div
              class="flex items-start gap-4"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div
                class="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0"
              >
                <font-awesome-icon
                  :icon="['fas', 'phone']"
                  class="w-5 h-5 text-blue-600"
                />
              </div>
              <div>
                <p class="font-semibold text-gray-800">Телефон</p>
                <a
                  href="tel:+998901234567"
                  class="text-blue-600 hover:text-blue-800 transition-colors font-bold"
                >
                  +998 (90) 123-45-67
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Section -->
  <section class="py-16 lg:py-20 bg-lightBlue">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div data-aos="fade-right" data-aos-duration="800">
          <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">
            Есть идея проекта?<br />
            Давайте поговорим.
          </h2>
          <p class="text-gray-600 mb-8 leading-relaxed">
            У нас готов профессиональный план сотрудничества в области
            стоматологических препаратов. Просто свяжитесь с нами прямо сейчас,
            чтобы получить лучшую помощь и создать наиболее подходящее решение
            для ваших потребностей.
          </p>

          <!-- Info Blocks -->
          <div class="space-y-6">
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 class="font-bold text-gray-800 mb-2">Карьера</h3>
              <p class="text-gray-600 text-sm">
                Хотели бы присоединиться к нашей растущей команде?
              </p>
              <a
                href="mailto:careers@albadent.uz"
                class="text-blue-600 hover:text-blue-800 transition-colors text-sm"
              >
                careers@albadent.uz
              </a>
            </div>

            <div data-aos="fade-up" data-aos-delay="200">
              <h3 class="font-bold text-gray-800 mb-2">Время работы</h3>
              <p class="text-gray-600 text-sm">
                Понедельник – Пятница: 9:00 – 18:00<br />
                Суббота: 9:00 – 15:00<br />
                Воскресенье: выходной
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="300">
              <h3 class="font-bold text-gray-800 mb-2">Обратная связь</h3>
              <p class="text-gray-600 text-sm">
                Есть вопросы о продукции? Отправьте нам сообщение.
              </p>
            </div>

            <div data-aos="fade-up" data-aos-delay="400">
              <h3 class="font-bold text-gray-800 mb-2">Следите за нами</h3>
              <div class="flex gap-3">
                <a
                  href="#"
                  class="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                >
                  <font-awesome-icon
                    :icon="['fab', 'facebook-f']"
                    class="text-xs"
                  />
                </a>
                <a
                  href="#"
                  class="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors"
                >
                  <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="text-xs"
                  />
                </a>
                <a
                  href="#"
                  class="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white hover:bg-red-700 transition-colors"
                >
                  <font-awesome-icon
                    :icon="['fab', 'youtube']"
                    class="text-xs"
                  />
                </a>
                <a
                  href="#"
                  class="w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center text-white hover:bg-pink-600 transition-colors"
                >
                  <font-awesome-icon
                    :icon="['fab', 'instagram']"
                    class="text-xs"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right Image -->
        <div data-aos="fade-left" data-aos-duration="800" class="relative">
          <div
            class="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-8 text-center"
          >
            <img
              src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Стоматолог"
              class="w-full max-w-sm mx-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-16 lg:py-20 bg-white">
    <div class="max-w-4xl mx-auto px-4">
      <div data-aos="fade-up" data-aos-duration="800">
        <h2
          class="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-4"
        >
          Свяжитесь с нами
        </h2>
        <p class="text-center text-gray-600 mb-12">
          Ваш email адрес не будет опубликован. Обязательные поля отмечены *
        </p>

        <!-- Contact Form -->
        <form
          @submit.prevent="submitForm"
          class="space-y-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div class="grid md:grid-cols-2 gap-6">
            <div>
              <label class="block text-gray-700 font-medium mb-2">
                Ваше имя *
              </label>
              <input
                type="text"
                v-model="form.name"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                placeholder="Введите ваше имя"
              />
            </div>
            <div>
              <label class="block text-gray-700 font-medium mb-2">
                Электронная почта *
              </label>
              <input
                type="email"
                v-model="form.email"
                required
                class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
                placeholder="Введите ваш email"
              />
            </div>
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">
              Телефон
            </label>
            <input
              type="tel"
              v-model="form.phone"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300"
              placeholder="Введите ваш телефон"
            />
          </div>

          <div>
            <label class="block text-gray-700 font-medium mb-2">
              Ваше сообщение *
            </label>
            <textarea
              v-model="form.message"
              required
              rows="6"
              class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all duration-300 resize-none"
              placeholder="Введите ваше сообщение"
            ></textarea>
          </div>

          <div class="text-center">
            <button
              type="submit"
              :disabled="isSubmitting"
              class="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="!isSubmitting">ОТПРАВИТЬ СООБЩЕНИЕ</span>
              <span v-else class="flex items-center gap-2">
                <div
                  class="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"
                ></div>
                Отправка...
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";

// Form data
const form = ref({
  name: "",
  email: "",
  phone: "",
  message: "",
});

const isSubmitting = ref(false);

// Methods
const submitForm = async () => {
  if (!form.value.name || !form.value.email || !form.value.message) {
    return;
  }

  isSubmitting.value = true;

  try {
    // Here you would typically send the form data to your API
    console.log("Форма отправлена:", form.value);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Reset form
    form.value = { name: "", email: "", phone: "", message: "" };

    // Show success message (you can add a toast notification here)
    alert("Сообщение успешно отправлено!");
  } catch (error) {
    console.error("Ошибка отправки формы:", error);
    alert("Произошла ошибка при отправке сообщения");
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<style scoped>
/* Custom scrollbar for textarea */
textarea::-webkit-scrollbar {
  width: 6px;
}

textarea::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 3px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* Animation for form inputs */
input:focus,
textarea:focus {
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
}

/* Social icons hover effect */
.fab {
  transition: transform 0.2s ease;
}

.fab:hover {
  transform: scale(1.1);
}
</style>
