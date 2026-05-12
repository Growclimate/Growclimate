<template>
  <div class="product-card bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-brand-200 group">
    <!-- Image Area -->
    <div class="aspect-[4/3] bg-gray-100 relative overflow-hidden">
      <img
        v-if="product.image && !imageError"
        :src="product.image"
        :alt="product.model"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        @error="imageError = true"
        loading="lazy"
      />
      <div v-else class="w-full h-full flex items-center justify-center bg-gradient-to-br from-brand-50 to-brand-100">
        <svg class="w-16 h-16 text-brand-300" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24">
          <path stroke-linecap="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707"/>
        </svg>
      </div>
      <!-- Series badge -->
      <div class="absolute top-3 left-3 px-2.5 py-1 bg-dark-900/80 backdrop-blur-sm text-white text-xs font-semibold rounded-lg">
        {{ product.series }}
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <div class="flex items-start justify-between gap-2 mb-2">
        <h3 class="text-lg font-bold text-dark-900">{{ product.model }}</h3>
        <span class="px-2 py-0.5 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full whitespace-nowrap flex-shrink-0">{{ product.capacity }}</span>
      </div>
      <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ product.tagline }}</p>

      <!-- Key Specs -->
      <div class="grid grid-cols-2 gap-2 mb-4">
        <div class="bg-gray-50 rounded-lg p-2.5">
          <div class="text-xs text-gray-500 mb-0.5">Capacity</div>
          <div class="text-sm font-semibold text-dark-900">{{ product.capacity }}</div>
        </div>
        <div class="bg-gray-50 rounded-lg p-2.5">
          <div class="text-xs text-gray-500 mb-0.5">Power</div>
          <div class="text-sm font-semibold text-dark-900">{{ product.power }}</div>
        </div>
        <div class="bg-gray-50 rounded-lg p-2.5">
          <div class="text-xs text-gray-500 mb-0.5">Refrigerant</div>
          <div class="text-sm font-semibold text-dark-900">{{ product.refrigerant }}</div>
        </div>
        <div class="bg-gray-50 rounded-lg p-2.5">
          <div class="text-xs text-gray-500 mb-0.5">Airflow</div>
          <div class="text-sm font-semibold text-dark-900">{{ product.airflow }}</div>
        </div>
      </div>

      <!-- Features -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span v-for="feat in product.features.slice(0,3)" :key="feat" class="px-2 py-0.5 bg-gray-100 text-gray-600 text-xs rounded-md">{{ feat }}</span>
        <span v-if="product.features.length > 3" class="px-2 py-0.5 bg-gray-100 text-gray-500 text-xs rounded-md">+{{ product.features.length - 3 }} more</span>
      </div>

      <!-- Scenes -->
      <div class="flex flex-wrap gap-1.5 mb-5">
        <span v-for="scene in product.scenes.slice(0,3)" :key="scene" class="px-2 py-0.5 bg-brand-50 text-brand-700 text-xs rounded-full">{{ scene }}</span>
      </div>

      <!-- Actions -->
      <div class="flex gap-2">
        <RouterLink to="/contact" class="flex-1 inline-flex items-center justify-center px-4 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors">
          Inquire Now
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  product: {
    type: Object,
    required: true
  }
})

const imageError = ref(false)
</script>
