<!-- src/components/Breadcrumb.vue -->
<template>
    <section class="relative bg-gradient-to-r from-blue-600 to-blue-800 py-20">
        <!-- Background decorative elements -->
        <div class="absolute inset-0 overflow-hidden">
            <div class="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full"></div>
            <div class="absolute bottom-20 left-20 w-24 h-24 bg-white/5 rounded-full"></div>
            <div class="absolute top-1/2 right-1/4 w-16 h-16 bg-white/10 rounded-full"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                {{ pageTitle }}
            </h1>

            <!-- Breadcrumb -->
            <nav class="flex justify-center items-center space-x-2 text-white/80" aria-label="Breadcrumb">
                <router-link to="/" class="hover:text-black transition-colors flex items-center">
                    <font-awesome-icon :icon="['fas', 'home']" class="mr-2" />
                    Home
                </router-link>

                <!-- Dynamic breadcrumb items -->
                <template v-for="(crumb, index) in breadcrumbs" :key="index">
                    <span>/</span>

                    <router-link v-if="crumb.path && index < breadcrumbs.length - 1" :to="crumb.path"
                        class="hover:text-white transition-colors">
                        {{ crumb.name }}
                    </router-link>

                    <span v-else class="text-white font-medium">
                        {{ crumb.name }}
                    </span>
                </template>
            </nav>
        </div>

        <!-- Medical illustration -->
        <div class="absolute right-10 top-1/2 transform -translate-y-1/2 opacity-20">
            <div class="w-64 h-64 bg-white/10 rounded-full flex items-center justify-center">
                <font-awesome-icon :icon="['fas', 'stethoscope']" class="text-8xl text-white/30" />
            </div>
        </div>
    </section>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

// Mapping route names to display names and page titles
const routeConfig = {
    'home': {
        title: 'Home',
        breadcrumbs: []
    },
    'about': {
        title: 'About Us',
        breadcrumbs: [{ name: 'About Us', path: null }]
    },
    'contacts': {
        title: 'Contact',
        breadcrumbs: [{ name: 'Contact', path: null }]
    },
    'services': {
        title: 'Services',
        breadcrumbs: [{ name: 'Services', path: null }]
    },
    'products': {
        title: 'Products',
        breadcrumbs: [{ name: 'Products', path: null }]
    },
    'catalog': {
        title: 'Catalog',
        breadcrumbs: [{ name: 'Catalog', path: null }]
    },
    'team': {
        title: 'Our Team',
        breadcrumbs: [{ name: 'Our Team', path: null }]
    },
    'news': {
        title: 'News',
        breadcrumbs: [{ name: 'News', path: null }]
    },
    'dentists': {
        title: 'Dentists',
        breadcrumbs: [{ name: 'Dentists', path: null }]
    },
    'pages': {
        title: 'Pages',
        breadcrumbs: [{ name: 'Pages', path: null }]
    },
    'blog': {
        title: 'Blog',
        breadcrumbs: [{ name: 'Blog', path: null }]
    },
    'gallery': {
        title: 'Gallery',
        breadcrumbs: [{ name: 'Gallery', path: null }]
    },
}

// Computed properties for dynamic title and breadcrumbs
const pageTitle = computed(() => {
    const config = routeConfig[route.name] || routeConfig['home']
    return config.title
})

const breadcrumbs = computed(() => {
    const config = routeConfig[route.name] || routeConfig['home']
    return config.breadcrumbs
})
</script>

<style scoped>
/* Smooth transitions */
nav a {
    transition: color 0.3s ease;
}

/* Focus states for accessibility */
nav a:focus {
    outline: 2px solid #3b82f6;
    outline-offset: 2px;
    border-radius: 4px;
}
</style>