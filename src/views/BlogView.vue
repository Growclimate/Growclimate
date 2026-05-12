<template>
  <div class="blog-page">

    <!-- Hero -->
    <section class="bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-5xl font-black text-white mb-4">Technical Blog</h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">Expert insights on climate control, growing environments, and equipment selection for agricultural professionals.</p>
      </div>
    </section>

    <!-- Featured Post -->
    <section class="py-12 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RouterLink :to="`/blog/${featured.slug}`" class="group block bg-gradient-to-r from-brand-50 to-brand-100 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="aspect-video lg:aspect-auto bg-brand-200 flex items-center justify-center overflow-hidden">
              <img :src="featured.image" :alt="featured.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-2 mb-3">
                <span class="px-3 py-1 bg-brand-600 text-white text-xs font-bold rounded-full">{{ featured.category }}</span>
                <span class="text-gray-500 text-sm">{{ featured.date }}</span>
              </div>
              <h2 class="text-2xl lg:text-3xl font-bold text-dark-900 mb-3 group-hover:text-brand-700 transition-colors">{{ featured.title }}</h2>
              <p class="text-gray-600 leading-relaxed mb-6">{{ featured.excerpt }}</p>
              <span class="inline-flex items-center text-brand-600 font-semibold text-sm group-hover:text-brand-700">
                Read Article
                <svg class="ml-1.5 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </div>
          </div>
        </RouterLink>
      </div>
    </section>

    <!-- All Posts -->
    <section class="py-8 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <RouterLink
            v-for="post in posts"
            :key="post.slug"
            :to="`/blog/${post.slug}`"
            class="group bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all hover:border-brand-200"
          >
            <div class="aspect-video bg-brand-100 overflow-hidden">
              <img :src="post.image" :alt="post.title" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full">{{ post.category }}</span>
                <span class="text-gray-400 text-xs">{{ post.date }}</span>
              </div>
              <h3 class="font-bold text-dark-900 mb-2 group-hover:text-brand-700 transition-colors">{{ post.title }}</h3>
              <p class="text-gray-600 text-sm line-clamp-2">{{ post.excerpt }}</p>
              <span class="inline-flex items-center text-brand-600 font-semibold text-xs mt-3 group-hover:text-brand-700">
                Read More
                <svg class="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path stroke-linecap="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </div>
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const featured = {
  slug: 'greenhouse-humidity-management-guide',
  title: 'Complete Guide to Greenhouse Humidity Management',
  category: 'Growing Science',
  date: 'March 15, 2026',
  image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
  excerpt: 'Learn how to balance humidity levels throughout the day-night cycle in greenhouse environments. This guide covers VPD calculation, dehumidifier sizing, and climate automation strategies for commercial growers.'
}

const posts = [
  {
    slug: 'vpd-explained',
    title: 'VPD Explained: The Key to Optimizing Plant Transpiration',
    category: 'Growing Science',
    date: 'March 10, 2026',
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&q=80',
    excerpt: 'Vapor Pressure Deficit is the most important yet misunderstood climate variable in controlled-environment agriculture. Here\'s how to calculate and use it.'
  },
  {
    slug: 'desiccant-vs-compressor',
    title: 'Desiccant vs Compressor Dehumidifiers: How to Choose',
    category: 'Equipment Guide',
    date: 'February 28, 2026',
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80',
    excerpt: 'A detailed comparison of sorptive rotor dehumidifiers and compressor-based systems. Understanding dew point, ambient temperature, and energy efficiency trade-offs.'
  },
  {
    slug: 'mushroom-farming-climate',
    title: 'Climate Control for Mushroom Farms: Why RH Above 85% Matters',
    category: 'Case Studies',
    date: 'February 15, 2026',
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=600&q=80',
    excerpt: 'A walkthrough of the climate requirements for oyster, shiitake, and button mushroom cultivation, and how GrowClimate equipment achieves them.'
  },
  {
    slug: 'fruit-drying-science',
    title: 'The Science of Fruit Drying: How Controlled Climate Preserves Quality',
    category: 'Agricultural Applications',
    date: 'January 30, 2026',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    excerpt: 'Drying fruits and agricultural products requires precise control of temperature and humidity to achieve optimal moisture content, preserve nutrients, and prevent mold growth.'
  },
  {
    slug: 'seed-storage-humidity',
    title: 'The Science of Seed Storage: Keeping Viability for Decades',
    category: 'Technical',
    date: 'January 18, 2026',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&q=80',
    excerpt: 'Seed banks and germplasm libraries maintain seeds viable for 50+ years through precise temperature and humidity control. Here\'s the science and equipment behind it.'
  },
  {
    slug: 'modbus-integration',
    title: 'Integrating Dehumidifiers with Your Grow Automation System',
    category: 'Technical',
    date: 'January 5, 2026',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    excerpt: 'Step-by-step guide to connecting GrowClimate dehumidifiers to your BMS or grow controller via Modbus RS485. Includes register maps and sample code.'
  },
]
</script>
