<template>
  <div class="not-found-page min-h-screen bg-gray-50 flex items-center justify-center px-4">
    <div class="text-center max-w-lg">
      <div class="text-8xl font-black text-brand-400 mb-4">404</div>
      <h1 class="text-2xl font-bold text-dark-900 mb-3">Page Not Found</h1>
      <p class="text-gray-600 mb-8">The page you're looking for doesn't exist or has been moved. Let's get you back on track.</p>
      <div class="flex flex-col sm:flex-row gap-3 justify-center">
        <RouterLink to="/" class="inline-flex items-center justify-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors">
          Go to Homepage
        </RouterLink>
        <RouterLink to="/contact" class="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 font-semibold rounded-xl border border-gray-300 transition-colors">
          Contact Us
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'

useSEO({
  title: '404 — Page Not Found | GrowClimate',
  description: 'The page you are looking for does not exist. Visit the GrowClimate homepage for climate control solutions.',
  url: 'https://growclimate.com',
})
</script>
