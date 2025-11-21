<template>
    <div v-if="!isMobile" class="cursor-container">
        <!-- Основной круг курсора -->
        <div ref="follower" 
            class="cursor-follower"
            :style="followerStyle">
            <div class="cursor-follower-inner" 
                :class="cursorStateClass"></div>
        </div>

        <!-- Точка курсора -->
        <div ref="cursor" 
            class="cursor-dot"
            :style="cursorStyle">
            <div class="cursor-dot-inner"
                :class="{ 'cursor-dot-hidden': isHovering }"></div>
        </div>

        <!-- Текст при наведении (опционально) -->
        <div v-if="hoverText" 
            class="cursor-text"
            :style="textStyle">
            {{ hoverText }}
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const cursor = ref(null)
const follower = ref(null)
const isMobile = ref(false)
const isHovering = ref(false)
const isClicking = ref(false)
const cursorState = ref('default') // default, link, button, text, drag
const hoverText = ref('')

const mouseX = ref(0)
const mouseY = ref(0)
const followerX = ref(0)
const followerY = ref(0)

// Стили для точки
const cursorStyle = computed(() => ({
    left: `${mouseX.value}px`,
    top: `${mouseY.value}px`
}))

// Стили для круга
const followerStyle = computed(() => ({
    left: `${followerX.value}px`,
    top: `${followerY.value}px`,
    transform: ` scale(${getScale()})`,
}))

// Стили для текста
const textStyle = computed(() => ({
    left: `${followerX.value + 30}px`,
    top: `${followerY.value}px`
}))

// Классы состояния курсора
const cursorStateClass = computed(() => ({
    'cursor-hover-link': cursorState.value === 'link',
    'cursor-hover-button': cursorState.value === 'button',
    'cursor-hover-text': cursorState.value === 'text',
    'cursor-hover-drag': cursorState.value === 'drag',
    'cursor-clicking': isClicking.value
}))

// Вычисляем масштаб в зависимости от состояния
function getScale() {
    if (isClicking.value) return 0.8
    switch (cursorState.value) {
        case 'link': return 1.5
        case 'button': return 1.3
        case 'text': return 0.7
        case 'drag': return 1.2
        default: return 1
    }
}

// Карта элементов и их состояний
const elementStates = {
    'a, .link': 'link',
    'button, .btn, [role="button"]': 'button',
    'input, textarea, [contenteditable]': 'text',
    '[draggable="true"], .draggable': 'drag',
    'h1, h2, h3, h4, h5, h6': 'text'
}

// Проверка мобильного устройства
const checkMobile = () => {
    isMobile.value = window.innerWidth < 768 || 'ontouchstart' in window
}

// Анимационный цикл
let animationId = null
const animate = () => {
    // Точка следует мгновенно
    mouseX.value = window.mouseX || 0
    mouseY.value = window.mouseY || 0

    // Круг следует с задержкой
    const speed = isHovering.value ? 0.15 : 0.12
    followerX.value += (mouseX.value - followerX.value) * speed
    followerY.value += (mouseY.value - followerY.value) * speed

    animationId = requestAnimationFrame(animate)
}

// Обработчик движения мыши
const handleMouseMove = (e) => {
    window.mouseX = e.clientX
    window.mouseY = e.clientY

    // Определяем элемент под курсором
    const element = document.elementFromPoint(e.clientX, e.clientY)
    
    // Проверяем тип элемента
    let newState = 'default'
    let newHoverText = ''
    isHovering.value = false

    for (const [selector, state] of Object.entries(elementStates)) {
        if (element?.closest(selector)) {
            newState = state
            isHovering.value = true
            
            // Специальная логика для некоторых элементов
            if (state === 'link') {
                const link = element.closest('a')
                if (link?.getAttribute('data-cursor-text')) {
                    newHoverText = link.getAttribute('data-cursor-text')
                }
            }
            break
        }
    }

    cursorState.value = newState
    hoverText.value = newHoverText

    // Добавляем класс для body
    document.body.classList.toggle('cursor-hovering', isHovering.value)
}

// Обработчик клика
const handleMouseDown = () => {
    isClicking.value = true
    
    // Добавляем ripple эффект
    if (isHovering.value) {
        createRipple()
    }
}

const handleMouseUp = () => {
    setTimeout(() => {
        isClicking.value = false
    }, 150)
}

// Создание ripple эффекта при клике
const createRipple = () => {
    const ripple = document.createElement('div')
    ripple.className = 'cursor-ripple'
    ripple.style.left = `${mouseX.value}px`
    ripple.style.top = `${mouseY.value}px`
    document.body.appendChild(ripple)
    
    setTimeout(() => {
        ripple.remove()
    }, 1000)
}

// Скрытие курсора при выходе из окна
const handleMouseLeave = () => {
    document.querySelector('.cursor-dot')?.classList.add('cursor-hidden')
    document.querySelector('.cursor-follower')?.classList.add('cursor-hidden')
}

const handleMouseEnter = () => {
    document.querySelector('.cursor-dot')?.classList.remove('cursor-hidden')
    document.querySelector('.cursor-follower')?.classList.remove('cursor-hidden')
}

onMounted(() => {
    checkMobile()
    
    if (!isMobile.value) {
        // Скрываем стандартный курсор
        document.documentElement.style.cursor = 'none'
        
        // Добавляем глобальные стили
        const style = document.createElement('style')
        style.textContent = `
            * { cursor: none !important; }
            a, button, input, textarea, select, [role="button"] { cursor: none !important; }
        `
        document.head.appendChild(style)
        
        // Инициализация позиции
        followerX.value = window.innerWidth / 2
        followerY.value = window.innerHeight / 2
        mouseX.value = followerX.value
        mouseY.value = followerY.value
        
        // События
        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mousedown', handleMouseDown)
        document.addEventListener('mouseup', handleMouseUp)
        document.addEventListener('mouseleave', handleMouseLeave)
        document.addEventListener('mouseenter', handleMouseEnter)
        window.addEventListener('resize', checkMobile)
        
        animate()
    }
})

onUnmounted(() => {
    if (animationId) {
        cancelAnimationFrame(animationId)
    }
    
    // Восстанавливаем курсор
    document.documentElement.style.cursor = 'auto'
    
    // Удаляем события
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mousedown', handleMouseDown)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mouseleave', handleMouseLeave)
    document.removeEventListener('mouseenter', handleMouseEnter)
    window.removeEventListener('resize', checkMobile)
})
</script>

<style>
/* Глобальные стили для курсора */
.cursor-dot {
    position: fixed;
    pointer-events: none;
    z-index: 9999;
    mix-blend-mode: difference;
    transition: opacity 0.3s ease;
}

.cursor-dot-inner {
    width: 6px;
    height: 6px;
    background: #3b82f6;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.15s ease;
}

.cursor-dot-hidden {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0);
}

.cursor-follower {
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    transition: transform 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.cursor-follower-inner {
    width: 70px;
    height: 70px;
    border: 1.5px solid rgba(59, 130, 246, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    background: transparent;
}

/* Состояния курсора */
.cursor-hover-link {
    width: 100px !important;
    height: 100px !important;
    border-color: rgba(59, 130, 246, 0.8) !important;
    background: rgba(59, 130, 246, 0.05) !important;
}

.cursor-hover-button {
    width: 40px !important;
    height: 40px !important;
    border-color: rgba(59, 130, 246, 0.6) !important;
    border-width: 2px !important;
    background: rgba(59, 130, 246, 0.08) !important;
}

.cursor-hover-text {
    width: 30px !important;
    height: 30px !important;
    border-style: dashed !important;
    animation: rotate 8s linear infinite;
}

.cursor-hover-drag {
    border-style: dotted !important;
    border-width: 2px !important;
    animation: pulse 2s ease infinite;
}

.cursor-clicking {
    transform: translate(-50%, -50%) scale(0.8) !important;
    border-width: 3px !important;
}

.cursor-hidden {
    opacity: 0 !important;
}

/* Текст курсора */
.cursor-text {
    position: fixed;
    pointer-events: none;
    z-index: 9998;
    color: #3b82f6;
    font-size: 12px;
    font-weight: 500;
    padding: 4px 8px;
    background: white;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    white-space: nowrap;
    opacity: 0;
    animation: fadeIn 0.3s forwards;
}

/* Ripple эффект */
.cursor-ripple {
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid rgba(59, 130, 246, 0.5);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9997;
    transform: translate(-50%, -50%);
    animation: ripple 1s ease-out forwards;
}

/* Анимации */
@keyframes rotate {
    from { transform: translate(-50%, -50%) rotate(0deg); }
    to { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes pulse {
    0%, 100% { 
        border-color: rgba(59, 130, 246, 0.5);
        transform: translate(-50%, -50%) scale(1);
    }
    50% { 
        border-color: rgba(59, 130, 246, 0.8);
        transform: translate(-50%, -50%) scale(1.1);
    }
}

@keyframes ripple {
    to {
        width: 80px;
        height: 80px;
        border-color: transparent;
        opacity: 0;
    }
}

@keyframes fadeIn {
    to { opacity: 1; }
}

/* Отключаем курсор на мобильных */
@media (max-width: 768px) {
    .cursor-container {
        display: none !important;
    }
}
</style>