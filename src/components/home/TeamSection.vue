<template>
    <section class="py-20 bg-white">
        <div class="max-w-7xl mx-auto px-4">
            <div class="text-center mb-16" data-aos="fade-up">
                <h2 class="text-3xl font-bold text-gray-900 mb-4">Познакомьтесь с нашей командой</h2>
                <div class="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div class="flex flex-col items-center text-center" data-aos="fade-up" :data-aos-delay="index * 100" v-for="(member, index) in teamMembers" :key="index">
                    <div class="relative overflow-hidden rounded-lg mb-6">
                        <img :src="member.image" :alt="member.name"
                            class="w-full h-auto transition-transform duration-300 hover:scale-110" 
                            @error="handleImageError" />
                    </div>
                    <h3 class="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors duration-300">
                        {{ member.name }}
                    </h3>
                    <p class="text-gray-600">{{ member.position }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'

const teamMembers = ref([
    {
        name: 'Dr. Brian King',
        position: 'Head Doctor, Neurology',
        image: new URL('@/assets/img/team-medical-1-418x315.jpg', import.meta.url).href
    },
    {
        name: 'Dr. Amanda Smith',
        position: 'Diagnostics',
        image: new URL('@/assets/img/team-medical-2-418x315.jpg', import.meta.url).href
    },
    {
        name: 'Dr. George Nelson',
        position: 'Ophthalmology',
        image: new URL('@/assets/img/team-medical-3-418x315.jpg', import.meta.url).href
    },
    {
        name: 'Dr. Sam Wilson',
        position: 'Traumatology',
        image: new URL('@/assets/img/team-medical-4-418x315.jpg', import.meta.url).href
    }
])

const handleImageError = (event) => {
    event.target.src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face'
}
</script>