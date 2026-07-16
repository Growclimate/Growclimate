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
import { useSEO } from '@/composables/useSEO'

useSEO({
  title: 'Climate Control Blog — GrowClimate',
  description: 'Expert insights on greenhouse humidity, VPD optimization, and dehumidifier selection for commercial growers. Growing science and equipment guides.',
  keywords: 'greenhouse humidity management, VPD explained, dehumidifier guide, climate control blog, growing environment, commercial dehumidifier, hydroponics humidity',
  url: 'https://growclimate.com/blog',
})
const featured = {
  slug: 'ultimate-guide-greenhouse-grow-room-humidity-control',
  title: 'The Ultimate Guide to Greenhouse & Grow Room Humidity Control',
  category: 'Growing Science',
  date: 'May 27, 2026',
  image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80',
  excerpt: 'Master humidity control in your greenhouse or grow room. Learn optimal RH levels by growth stage, prevent mold and root rot, and discover how to choose the right dehumidifier for healthier plants and higher yields.'
}

const posts = [
  {
    slug: 'mushroom-growing-humidity-control',
    title: 'Mushroom Growing Humidity Control: The Complete Guide to Maximizing Yield',
    category: 'Crop Science',
    date: 'July 16, 2026',
    image: '/images/blog/Commercial_mushroom_grow_room__2026-07-16T05-37-59.png',
  },
  {
    slug: 'tomato-greenhouse-humidity-control',
    title: 'Tomato Greenhouse Humidity Control: Why It Matters & How to Get It Right',
    category: 'Crop Science',
    date: 'June 25, 2026',
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=600&q=80',
    excerpt: 'Humidity makes or breaks a tomato crop. Learn optimal RH levels by growth stage, how to prevent blight and blossom end rot, and how to choose the right dehumidifier for your tomato greenhouse.'
  },
  {
    slug: 'greenhouse-humidity-management-guide',
    title: 'Complete Guide to Greenhouse Humidity Management',
    category: 'Growing Science',
    date: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&q=80',
    excerpt: 'Learn how to balance humidity levels throughout the day-night cycle in greenhouse environments. This guide covers VPD calculation, dehumidifier sizing, and climate automation strategies for commercial growers.'
  },
  {
    slug: 'ultimate-guide-greenhouse-grow-room-humidity-control',
    title: 'The Ultimate Guide to Greenhouse & Grow Room Humidity Control',
    category: 'Growing Science',
    date: 'May 27, 2026',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    excerpt: 'Master humidity control in your greenhouse or grow room. Learn optimal RH levels by growth stage, prevent mold and root rot, and discover how to choose the right dehumidifier for healthier plants and higher yields.'
  },
  {
    slug: 'vpd-explained',
    title: 'VPD Explained: The Key to Optimizing Plant Transpiration',
    category: 'Growing Science',
    date: 'May 18, 2026',
    image: 'https://images.unsplash.com/photo-1520412099551-62b6bafeb5bb?w=600&q=80',
    excerpt: 'Vapor Pressure Deficit is the most important yet misunderstood climate variable in controlled-environment agriculture. Here\'s how to calculate and use it for healthier plants and higher yields.'
  },
  {
    slug: 'desiccant-vs-compressor',
    title: 'Desiccant vs Compressor Dehumidifiers: How to Choose',
    category: 'Equipment Guide',
    date: 'May 15, 2026',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80',
    excerpt: 'A detailed comparison of sorptive rotor dehumidifiers and compressor-based systems — understanding dew point, ambient temperature, and energy efficiency trade-offs.'
  },
  {
    slug: 'mushroom-farming-climate',
    title: 'Climate Control for Mushroom Farms: Why RH Above 85% Matters',
    category: 'Case Studies',
    date: 'May 10, 2026',
    image: '/images/blog/Modern_smart_mushroom_greenhou_2026-07-16T05-37-58.png',
    excerpt: 'A walkthrough of the climate requirements for oyster, shiitake, and button mushroom cultivation, and how GrowClimate equipment achieves them at commercial scale.'
  },
  {
    slug: 'fruit-drying-science',
    title: 'The Science of Fruit Drying: Controlled Climate for Premium Quality',
    category: 'Agricultural Applications',
    date: 'May 5, 2026',
    image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&q=80',
    excerpt: 'Drying fruits and agricultural products needs precise temperature and humidity control. Learn how modern dehumidification technology preserves nutrients and prevents spoilage.'
  },
  {
    slug: 'seed-storage-humidity',
    title: 'Seed Storage Science: Maintaining Viability for Decades',
    category: 'Technical',
    date: 'April 28, 2026',
    image: 'https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=600&q=80',
    excerpt: 'Seed banks maintain seeds viable for 50+ years through precise temperature and humidity control. Here\'s the science and equipment behind long-term seed preservation.'
  },
  {
    slug: 'cannabis-drying-guide',
    title: 'Cannabis Drying Room Design: Temperature, Humidity & Airflow Guide',
    category: 'Industry Guide',
    date: 'April 22, 2026',
    image: 'https://images.unsplash.com/photo-1589244159943-460088ed5c92?w=600&q=80',
    excerpt: 'Post-harvest drying is where many cultivators lose quality. Learn the optimal drying room parameters, equipment sizing, and climate control strategies for premium flower preservation.'
  },
  {
    slug: 'vertical-farming-humidity',
    title: 'Vertical Farming Humidity: Challenges & Solutions for Multi-Layer Growing',
    category: 'Growing Science',
    date: 'April 15, 2026',
    image: 'https://images.unsplash.com/photo-1595841696677-6489ff3f8cd1?w=600&q=80',
    excerpt: 'Multi-layer indoor farms face unique humidity challenges — heat stratification, microclimate variance between racks, and high planting density. Discover proven climate control strategies.'
  },
  {
    slug: 'r290-refrigerant-guide',
    title: 'Why R290 Is the Future of Greenhouse Dehumidification',
    category: 'Sustainability',
    date: 'April 8, 2026',
    image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80',
    excerpt: 'R290 (propane) refrigerant has a GWP of just 3 — 675× lower than R410A. Learn why European and North American growers are switching to R290 dehumidifiers for compliance and performance.'
  },
  {
    slug: 'energy-saving-dehumidification',
    title: '5 Ways Commercial Growers Cut Dehumidification Energy Costs by 40%',
    category: 'Energy Efficiency',
    date: 'March 30, 2026',
    image: 'https://images.unsplash.com/photo-1548337138-e87d889cc369?w=600&q=80',
    excerpt: 'Dehumidification is often the second-largest energy cost in greenhouses. These five strategies — from VPD-based control to heat recovery — deliver real savings without compromising crop quality.'
  },
]
</script>
