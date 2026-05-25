<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center space-x-2 flex-shrink-0" @click="closeMobile">
          <div class="w-9 h-9 bg-brand-600 rounded-lg flex items-center justify-center">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <!-- Sprout/Growing Plant Logo for GrowClimate -->
              <path d="M12 22V12" stroke="white" stroke-width="2" stroke-linecap="round"/>
              <path d="M12 12C12 12 8 8 7 5C6 2 8 0 11 1" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="white" fill-opacity="0.3"/>
              <path d="M12 12C12 12 16 8 17 5C18 2 16 0 13 1" stroke="white" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" fill="white" fill-opacity="0.3"/>
              <path d="M12 12C12 12 9 9 7 10" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="white" fill-opacity="0.25"/>
              <path d="M12 12C12 12 15 9 17 10" stroke="white" stroke-width="1.5" stroke-linecap="round" fill="white" fill-opacity="0.25"/>
            </svg>
          </div>
          <div>
            <span class="text-lg lg:text-xl font-bold text-dark-900 tracking-tight">GrowClimate</span>
          </div>
        </RouterLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center space-x-1">

          <!-- Products Dropdown -->
          <div class="relative" @mouseenter="openDropdown = 'products'" @mouseleave="openDropdown = null">
            <button
              class="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1"
              :class="isActive('/products') ? 'nav-link--active' : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'"
            >
              Products
              <svg class="w-4 h-4 transition-transform duration-200" :class="openDropdown === 'products' ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="openDropdown === 'products'" class="absolute top-full left-0 mt-1 w-60 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <!-- Dehumidifiers with sub-items -->
                <template v-for="item in productDropdown" :key="item.path">
                  <div v-if="item.sub">
                    <div class="px-4 py-2 text-xs font-bold text-gray-400 uppercase tracking-wider">{{ item.label }}</div>
                    <RouterLink
                      v-for="sub in item.sub"
                      :key="sub.path"
                      :to="sub.path"
                      class="flex items-center gap-3 pl-6 pr-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      @click="closeMobile"
                    >
                      <span class="w-6 h-6 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span class="text-xs">{{ sub.emoji }}</span>
                      </span>
                      <span class="font-medium">{{ sub.label }}</span>
                    </RouterLink>
                  </div>
                  <!-- Standalone items (Humidifiers, Fans & Ventilation) -->
                  <div v-else>
                    <RouterLink
                      :to="item.path"
                      class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                      @click="closeMobile"
                    >
                      <span class="w-7 h-7 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span class="text-sm">{{ item.emoji }}</span>
                      </span>
                      <span class="font-medium">{{ item.label }}</span>
                    </RouterLink>
                  </div>
                </template>
                <div class="mt-1 pt-2 border-t border-gray-100">
                  <RouterLink
                    to="/products"
                    class="flex items-center gap-2 px-4 py-2 text-xs text-brand-600 hover:bg-brand-50 font-semibold transition-colors"
                    @click="closeMobile"
                  >
                    View All Products →
                  </RouterLink>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Applications Dropdown -->
          <div class="relative" @mouseenter="openDropdown = 'applications'" @mouseleave="openDropdown = null">
            <button
              class="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 flex items-center gap-1"
              :class="isActive('/applications') ? 'nav-link--active' : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'"
            >
              Applications
              <svg class="w-4 h-4 transition-transform duration-200" :class="openDropdown === 'applications' ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <Transition name="dropdown">
              <div v-if="openDropdown === 'applications'" class="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-xl border border-gray-100 py-2 z-50">
                <RouterLink
                  v-for="item in applicationDropdown"
                  :key="item.id"
                  :to="'/applications#' + item.id"
                  class="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-brand-50 hover:text-brand-700 transition-colors"
                  @click="closeMobile"
                >
                  <span class="text-lg">{{ item.emoji }}</span>
                  <span class="font-medium">{{ item.label }}</span>
                </RouterLink>
                <div class="mt-1 pt-2 border-t border-gray-100">
                  <RouterLink
                    to="/applications"
                    class="flex items-center gap-2 px-4 py-2 text-xs text-brand-600 hover:bg-brand-50 font-semibold transition-colors"
                    @click="closeMobile"
                  >
                    All Applications →
                  </RouterLink>
                </div>
              </div>
            </Transition>
          </div>

          <!-- Blog -->
          <RouterLink
            to="/blog"
            class="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            :class="isActive('/blog') ? 'nav-link--active' : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'"
          >
            Blog
          </RouterLink>

          <!-- About -->
          <RouterLink
            to="/about"
            class="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            :class="isActive('/about') ? 'nav-link--active' : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'"
          >
            About
          </RouterLink>

          <!-- Contact -->
          <RouterLink
            to="/contact"
            class="nav-link px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            :class="isActive('/contact') ? 'nav-link--active' : 'text-gray-700 hover:text-brand-600 hover:bg-brand-50'"
          >
            Contact
          </RouterLink>
        </nav>

        <!-- Desktop CTA -->
        <div class="hidden lg:flex items-center space-x-3">
          <RouterLink to="/contact" class="cta-btn inline-flex items-center px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm">
            Get a Quote
          </RouterLink>
        </div>

        <!-- Mobile Hamburger -->
        <button
          @click="toggleMobile"
          class="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors"
          :aria-expanded="mobileOpen"
          aria-label="Toggle menu"
        >
          <svg v-if="!mobileOpen" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
          <svg v-else width="24" height="24" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" d="M6 18L18 6M6 6l12 12"/>
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="lg:hidden bg-white border-t border-gray-100 shadow-lg">
        <nav class="max-w-7xl mx-auto px-4 py-4 space-y-1">

          <!-- Mobile Products Accordion -->
          <div class="border-b border-gray-100 pb-1">
            <button
              @click="mobileProductsOpen = !mobileProductsOpen"
              class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors"
              :class="isActive('/products') ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'"
            >
              Products
              <svg class="w-4 h-4 transition-transform" :class="mobileProductsOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="mobileProductsOpen" class="pl-4 pb-2 space-y-1">
              <!-- Dehumidifiers sub-items -->
              <div class="pl-3 pb-1">
                <div class="text-xs font-bold text-gray-400 uppercase tracking-wider py-1">Dehumidifiers</div>
                <RouterLink
                  v-for="sub in dehumidifierSubs"
                  :key="sub.path"
                  :to="sub.path"
                  class="flex items-center gap-2 pl-4 pr-4 py-2 text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
                  @click="closeMobile"
                >
                  <span class="text-base">{{ sub.emoji }}</span>
                  {{ sub.label }}
                </RouterLink>
              </div>
              <!-- Humidifiers -->
              <RouterLink
                to="/products#humidifiers"
                class="flex items-center gap-2 pl-4 pr-4 py-2 text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
                @click="closeMobile"
              >
                <span class="text-base">🌫️</span>
                Humidifiers
              </RouterLink>
              <!-- Fans & Ventilation -->
              <RouterLink
                to="/products#ventilation"
                class="flex items-center gap-2 pl-4 pr-4 py-2 text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
                @click="closeMobile"
              >
                <span class="text-base">💨</span>
                Fans & Ventilation
              </RouterLink>
            </div>
          </div>

          <!-- Mobile Applications Accordion -->
          <div class="border-b border-gray-100 pb-1">
            <button
              @click="mobileAppsOpen = !mobileAppsOpen"
              class="flex items-center justify-between w-full px-4 py-3 text-sm font-medium rounded-lg transition-colors"
              :class="isActive('/applications') ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'"
            >
              Applications
              <svg class="w-4 h-4 transition-transform" :class="mobileAppsOpen ? 'rotate-180' : ''" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M19 9l-7 7-7-7"/>
              </svg>
            </button>
            <div v-if="mobileAppsOpen" class="pl-4 pb-2 space-y-1">
              <RouterLink
                v-for="item in applicationDropdown"
                :key="item.id"
                :to="'/applications#' + item.id"
                class="flex items-center gap-2 pl-4 pr-4 py-2 text-sm text-gray-600 hover:bg-brand-50 hover:text-brand-700 rounded-lg transition-colors"
                @click="closeMobile"
              >
                <span class="text-base">{{ item.emoji }}</span>
                {{ item.label }}
              </RouterLink>
            </div>
          </div>

          <!-- Blog -->
          <RouterLink
            to="/blog"
            class="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/blog') ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'"
            @click="closeMobile"
          >
            Blog
          </RouterLink>

          <!-- About -->
          <RouterLink
            to="/about"
            class="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/about') ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'"
            @click="closeMobile"
          >
            About
          </RouterLink>

          <!-- Contact -->
          <RouterLink
            to="/contact"
            class="block px-4 py-3 rounded-lg text-sm font-medium transition-colors"
            :class="isActive('/contact') ? 'bg-brand-50 text-brand-700' : 'text-gray-700 hover:bg-gray-50'"
            @click="closeMobile"
          >
            Contact
          </RouterLink>

          <div class="pt-3 border-t border-gray-100">
            <RouterLink to="/contact" class="block text-center px-4 py-3 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors" @click="closeMobile">
              Get a Quote
            </RouterLink>
          </div>
        </nav>
      </div>
    </Transition>
  </header>
  <!-- Spacer for fixed header -->
  <div class="h-16 lg:h-20"></div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const mobileOpen = ref(false)
const openDropdown = ref(null)
const mobileProductsOpen = ref(false)
const mobileAppsOpen = ref(false)

const productDropdown = [
  {
    label: 'Dehumidifiers',
    path: '/products',
    sub: [
      { label: 'Portable Dehumidifiers', path: '/products#portable', emoji: '💧' },
      { label: 'Floor Standing Dehumidifiers', path: '/products#floor', emoji: '🏭' },
      { label: 'Ceiling & Duct Dehumidifiers', path: '/products#ceiling', emoji: '🏗️' },
      { label: 'Desiccant Dehumidifiers', path: '/products#desiccant', emoji: '⚙️' },
    ]
  },
  { label: 'Humidifiers', path: '/products#humidifiers', emoji: '🌫️', sub: null },
  { label: 'Fans & Ventilation', path: '/products#ventilation', emoji: '💨', sub: null },
]

const applicationDropdown = [
  { id: 'greenhouse', label: 'Greenhouse', emoji: '🌿' },
  { id: 'hydroponics', label: 'Hydroponics', emoji: '💧' },
  { id: 'mushroom', label: 'Mushroom Farming', emoji: '🍄' },
  { id: 'seed-storage', label: 'Seed Storage', emoji: '🌱' },
  { id: 'fruit-drying', label: 'Fruit Drying', emoji: '🥭' },
]

const dehumidifierSubs = [
  { label: 'Portable Dehumidifiers', path: '/products#portable', emoji: '💧' },
  { label: 'Floor Standing Dehumidifiers', path: '/products#floor', emoji: '🏭' },
  { label: 'Ceiling & Duct Dehumidifiers', path: '/products#ceiling', emoji: '🏗️' },
  { label: 'Desiccant Dehumidifiers', path: '/products#desiccant', emoji: '⚙️' },
]

const isActive = (path) => {
  if (path === '/') return route.path === '/'
  return route.path.startsWith(path)
}

const toggleMobile = () => {
  mobileOpen.value = !mobileOpen.value
  if (!mobileOpen.value) {
    mobileProductsOpen.value = false
    mobileAppsOpen.value = false
  }
}

const closeMobile = () => {
  mobileOpen.value = false
  mobileProductsOpen.value = false
  mobileAppsOpen.value = false
}
</script>

<style scoped>
/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

/* Mobile menu animation */
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.2s ease, max-height 0.25s ease;
  overflow: hidden;
  max-height: 600px;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  max-height: 0;
}

/* Nav link styles */
.nav-link {
  color: #374151;
}
.nav-link:hover {
  color: #4d7c0f;
  background-color: #f0f9eb;
}
.nav-link--active {
  color: #4d7c0f;
  background-color: #f0f9eb;
}
.cta-btn {
  background-color: #67a20e;
}
.cta-btn:hover {
  background-color: #4e8308;
}
</style>
