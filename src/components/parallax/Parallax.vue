<template>
    <section ref="parallaxRef" class="relative h-[400px] overflow-hidden">
        <!-- Фон -->
        <div class="absolute top-0 left-0 right-0 bottom-0 z-0 will-change-transform" :style="{
            backgroundImage: `url(${background})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '120%',
            transform: `translateY(${offset}px)`
        }">
        </div>
        <!-- Затемнение -->
        <div class="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

        <!-- Контент -->
        <div ref="counterContainer"
            class="relative z-20 h-full max-w-6xl mx-auto flex items-center justify-around px-4 text-white">
            <div class="text-center">
                <AnimatedCounter :targetNumber="100" label="MONTHLY VISITORS" :animate="shouldAnimate" />
            </div>
            <div class="text-center">
                <AnimatedCounter :targetNumber="45" label="AWARDS" :animate="shouldAnimate" />
            </div>
            <div class="text-center">
                <AnimatedCounter :targetNumber="98" suffix="%" label="POSITIVE REVIEWS" :animate="shouldAnimate" />
            </div>
            <div class="text-center">
                <AnimatedCounter :targetNumber="147000" suffix="k" label="HAPPY CLIENTS" :animate="shouldAnimate" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import AnimatedCounter from '@/components/ui/AnimatedCounter.vue'


const props = defineProps({
    background: {
        type: String,
        required: true
    }
})

const parallaxRef = ref(null)
const counterContainer = ref(null)
const offset = ref(0)
const shouldAnimate = ref(false)

const handleScroll = () => {
    if (!parallaxRef.value || !counterContainer.value) return

    const rect = parallaxRef.value.getBoundingClientRect()
    offset.value = rect.top * -0.2

    const container = counterContainer.value.getBoundingClientRect()
    const windowHeight = window.innerHeight
    const isVisible = container.top < windowHeight && container.bottom > 0
    const centerReached = container.top < windowHeight / 2

    shouldAnimate.value = isVisible && centerReached
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
    handleScroll()
})
onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll)
})
</script>
