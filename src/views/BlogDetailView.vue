<template>
  <div class="blog-detail-page">

    <!-- Hero -->
    <section class="bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900 py-16 lg:py-20">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <RouterLink to="/blog" class="inline-flex items-center text-gray-400 hover:text-white text-sm mb-6 transition-colors">
          <svg class="mr-1.5 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
          </svg>
          Back to Blog
        </RouterLink>
        <h1 class="text-3xl lg:text-5xl font-black text-white leading-tight mb-4">{{ post.title }}</h1>
        <div class="flex items-center gap-3 text-gray-400 text-sm">
          <span class="px-3 py-1 bg-brand-600/30 text-brand-300 rounded-full text-xs font-semibold">{{ post.category }}</span>
          <span>{{ post.date }}</span>
          <span>·</span>
          <span>{{ post.readTime }} min read</span>
        </div>
      </div>
    </section>

    <!-- Article -->
    <section class="py-12 bg-white">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Featured Image -->
        <div class="aspect-video rounded-2xl overflow-hidden mb-10 bg-gray-100">
          <img :src="post.image" :alt="post.title" class="w-full h-full object-cover" />
        </div>

        <!-- Article Content -->
        <div class="prose prose-lg max-w-none" v-html="post.content"></div>

        <!-- Author Box -->
        <div class="mt-12 pt-8 border-t border-gray-200">
          <div class="flex items-center gap-4">
            <div class="w-12 h-12 bg-brand-100 rounded-full flex items-center justify-center text-brand-700 font-bold text-lg">GC</div>
            <div>
              <div class="font-semibold text-dark-900">GrowClimate Editorial Team</div>
              <div class="text-sm text-gray-500">Technical content specialists — engineering and agricultural science</div>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <div class="mt-10 p-8 bg-brand-50 rounded-2xl text-center">
          <h3 class="text-xl font-bold text-dark-900 mb-2">Need Help with Climate Control?</h3>
          <p class="text-gray-600 mb-5">Get a free consultation from our application engineering team for your specific growing environment.</p>
          <RouterLink to="/contact" class="inline-flex items-center px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-lg transition-colors">
            Contact an Engineer
          </RouterLink>
        </div>

        <!-- Navigation -->
        <div class="mt-8 flex justify-between">
          <RouterLink to="/blog" class="text-brand-600 hover:text-brand-700 font-medium text-sm flex items-center">
            <svg class="mr-1.5 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
            </svg>
            Back to Blog
          </RouterLink>
          <RouterLink to="/products" class="text-brand-600 hover:text-brand-700 font-medium text-sm flex items-center">
            View Products
            <svg class="ml-1.5 w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const slug = route.params.slug

const allPosts = {
  'greenhouse-humidity-management-guide': {
    title: 'Complete Guide to Greenhouse Humidity Management',
    category: 'Growing Science',
    date: 'March 15, 2026',
    readTime: 12,
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
    excerpt: 'Learn how to balance humidity levels throughout the day-night cycle in greenhouse environments.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">Managing humidity in a greenhouse is one of the most critical — and most challenging — aspects of controlled-environment agriculture. Get it wrong and you face mold, fungal disease, poor pollination, and reduced yields. Get it right and your plants thrive.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Understanding the Day-Night Humidity Cycle</h2>
      <p class="text-gray-700 mb-4">Greenhouses naturally experience a dramatic humidity swing every 24 hours. During the day, solar radiation heats the air and plants transpire water vapor — raising relative humidity. At night, temperatures drop and the air's moisture-holding capacity decreases, causing RH to spike even with the same absolute amount of water vapor in the air.</p>
      <p class="text-gray-700 mb-4">This is why a greenhouse can be at 60% RH at noon and 95% RH by 2 AM without any change in irrigation — and why automatic dehumidification is essential for commercial operations.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">The Role of VPD in Climate Control</h2>
      <p class="text-gray-700 mb-4">Vapor Pressure Deficit (VPD) is the driving force behind plant transpiration. It represents the difference between the water vapor pressure inside the leaf (saturated) and the surrounding air. A VPD that's too high causes drought stress and stomatal closure; too low, and plants can't transpire efficiently, reducing nutrient uptake.</p>
      <p class="text-gray-700 mb-4">For most greenhouse crops, the optimal VPD range is 0.4–1.0 kPa during the day and 0.1–0.4 kPa at night. This translates to roughly 65–80% RH at 25°C (day) and 80–92% RH at 18°C (night) — a challenging band to maintain automatically.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Sizing Your Dehumidifier</h2>
      <p class="text-gray-700 mb-4">Proper dehumidifier sizing requires calculating the total moisture load from plant transpiration, infiltration from vents, and any irrigation evaporation. The formula:</p>
      <div class="bg-gray-100 rounded-xl p-5 my-6 font-mono text-sm">
        <p class="mb-2"><strong>Moisture Load (L/day) = Transpiration + Infiltration + Evaporation</strong></p>
        <p class="text-gray-500 text-xs">Rule of thumb: 1 kW of grow lighting generates ~3L/day of moisture</p>
      </div>
      <p class="text-gray-700 mb-4">For a 500m² greenhouse with 20kW of supplemental lighting, expect approximately 60L/day of moisture generation — plus infiltration depending on ventilation rate. Oversize by 20% for peak summer humidity events and equipment redundancy.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Recommended Equipment Configuration</h2>
      <p class="text-gray-700 mb-4">For commercial greenhouses, we recommend a combination approach:</p>
      <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>RYCM-138C</strong> (×2-4 units) for primary dehumidification, sized for peak summer load</li>
        <li><strong>Ventilation fans</strong> with motorized dampers for controlled air exchange during favorable outdoor conditions</li>
        <li><strong>Hygrostat controller</strong> with day/night setpoint programming (e.g., 70% RH day, 85% RH night)</li>
        <li><strong>Modbus BMS integration</strong> for data logging, remote monitoring, and integration with grow automation software</li>
      </ul>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Energy Efficiency Considerations</h2>
      <p class="text-gray-700 mb-4">Running dehumidifiers 24/7 consumes significant energy. Consider heat recovery ventilation (HRV) systems that exhaust moist air and bring in fresh air while recovering thermal energy. This can reduce dehumidification energy use by 30-50% in temperate climates.</p>
      <p class="text-gray-700">Contact GrowClimate's engineering team for a free climate load calculation and equipment specification for your greenhouse project.</p>
    `
  },
  'vpd-explained': {
    title: 'VPD Explained: The Key to Optimizing Plant Transpiration',
    category: 'Growing Science',
    date: 'March 10, 2026',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80',
    excerpt: 'Understanding VPD and how to use it for better growing results.',
    content: `<p class="text-xl text-gray-600 mb-6">Vapor Pressure Deficit (VPD) is the most important climate variable in controlled-environment agriculture.</p><p>Full article coming soon...</p>`
  },
  'desiccant-vs-compressor': {
    title: 'Desiccant vs Compressor Dehumidifiers: How to Choose',
    category: 'Equipment Guide',
    date: 'February 28, 2026',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80',
    excerpt: 'A detailed comparison of sorptive rotor dehumidifiers and compressor-based systems.',
    content: `<p class="text-xl text-gray-600 mb-6">Choosing the right dehumidification technology for your application.</p><p>Full article coming soon...</p>`
  }
}

const post = computed(() => allPosts[slug] || {
  title: 'Article Not Found',
  category: 'Blog',
  date: '',
  readTime: 0,
  image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80',
  content: `<p>The article you're looking for doesn't exist or has been moved.</p><p><RouterLink to="/blog">Return to the blog</RouterLink></p>`
})
</script>
