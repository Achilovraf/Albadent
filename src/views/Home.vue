<template>
    <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <Parallax :background="bgImage" />
    </main>
</template>

<script setup>
import { onMounted } from 'vue'
import Parallax from '@/components/parallax/Parallax.vue'
import bgImage from '@/assets/images/stom/image.png'
import HeroSection from '@/components/home/HeroSection.vue'
import AboutSection from '@/components/home/AboutSection.vue'
import ServicesSection from '@/components/home/ServicesSection.vue'

onMounted(() => {
    setTimeout(() => {
        if (window.AOS) {
            window.AOS.refresh()
        }
    }, 100)
})
</script>