<template>
    <div>
        <h2 class="text-4xl font-bold">
            {{ displayValue }}<span v-if="suffix">{{ suffix }}</span>
        </h2>
        <p class="text-sm">{{ label }}</p>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
    targetNumber: Number,
    label: String,
    suffix: String,
    animate: Boolean
})

const displayValue = ref(0)
let frameId = null

const animateTo = (target) => {
    cancelAnimationFrame(frameId)

    const duration = 1000
    const start = performance.now()

    const from = displayValue.value
    const delta = target - from

    const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1)
        displayValue.value = Math.floor(from + delta * progress)
        if (progress < 1) frameId = requestAnimationFrame(tick)
        else displayValue.value = target
    }

    frameId = requestAnimationFrame(tick)
}

watch(() => props.animate, (newVal) => {
    if (newVal) {
        animateTo(props.targetNumber)
    } else {
        animateTo(0)
    }
})
</script>
