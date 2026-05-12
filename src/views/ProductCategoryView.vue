<template>
  <div class="product-category-page">
    <!-- Page Header -->
    <section class="bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="flex items-center gap-2 text-sm text-gray-400 mb-4">
          <RouterLink to="/products" class="hover:text-white transition-colors">Products</RouterLink>
          <span>/</span>
          <span class="text-white">{{ categoryName }}</span>
        </nav>
        <h1 class="text-4xl lg:text-5xl font-black text-white mb-4">{{ categoryName }}</h1>
        <p class="text-gray-300 text-lg max-w-2xl">{{ categoryDesc }}</p>
      </div>
    </section>

    <!-- Products -->
    <section class="py-12 lg:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>

        <div class="mt-12 text-center">
          <RouterLink to="/contact" class="inline-flex items-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors">
            Request a Quote for {{ categoryName }}
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import ProductCard from '@/components/product/ProductCard.vue'
import { productCategories, dehumidifierProducts, humidifierProducts, ventilationProducts } from '@/data/products.js'

const route = useRoute()
const catId = route.params.category

const catMap = {
  dehumidifiers: { name: 'Dehumidifiers', desc: 'Industrial dehumidification solutions for agriculture, cold storage, and controlled environments.', products: dehumidifierProducts },
  humidifiers: { name: 'Humidifiers', desc: 'Precision humidification systems for hydroponics, greenhouse, and tissue culture labs.', products: humidifierProducts },
  ventilation: { name: 'Fans & Ventilation', desc: 'Air circulation and ventilation solutions for vertical farms, grow rooms, and container farms.', products: ventilationProducts },
}

const categoryName = computed(() => catMap[catId]?.name || 'Products')
const categoryDesc = computed(() => catMap[catId]?.desc || '')
const products = computed(() => catMap[catId]?.products || [])
</script>
