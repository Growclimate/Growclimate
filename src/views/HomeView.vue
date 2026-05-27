<template>
  <div class="growclimate-home">

    <!-- ===== HERO SECTION ===== -->
    <section class="hero-section relative overflow-hidden" style="min-height: 600px;">
      <!-- Real photo background -->
      <div class="absolute inset-0">
        <img src="/images/hero-bg.jpg" alt="Greenhouse" class="w-full h-full object-cover object-center" />
        <!-- Dark overlay for text readability -->
        <div class="absolute inset-0 bg-gradient-to-r from-black/65 via-black/40 to-transparent"></div>
      </div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div class="max-w-3xl">
          <div class="inline-flex items-center px-4 py-1.5 bg-white/15 border border-white/40 rounded-full text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <span class="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Climate Control for Growing Excellence
          </div>
          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6 drop-shadow-lg">
            Precision Climate.<br />
            <span class="text-green-300">Maximum Yield.</span>
          </h1>
          <p class="text-lg lg:text-xl text-white/90 leading-relaxed mb-8 max-w-2xl drop-shadow-md">
            Industrial-grade dehumidifiers, humidifiers, and ventilation systems engineered for greenhouse, hydroponics, and controlled-environment agriculture. Trusted by growers in 40+ countries.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <RouterLink to="/products" class="inline-flex items-center justify-center px-8 py-4 bg-brand-600 hover:bg-brand-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-black/30 text-base">
              Explore Products
              <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path stroke-linecap="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </RouterLink>
            <RouterLink to="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white/20 hover:bg-white/30 border border-white/60 text-white font-semibold rounded-xl transition-all text-base backdrop-blur-sm">
              Request a Quote
            </RouterLink>
          </div>
        </div>

        <!-- Stats -->
        <div class="mt-16 lg:mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl">
          <div v-for="stat in stats" :key="stat.label" class="bg-black/30 backdrop-blur-sm border border-white/20 rounded-xl p-5">
            <div class="text-3xl font-black text-green-300 mb-1">{{ stat.value }}</div>
            <div class="text-sm text-white/80">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== WHY CHOOSE US ===== -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-dark-900 mb-6">
              Why Growers Choose <span class="text-brand-600">GrowClimate</span>
            </h2>
            <p class="text-gray-600 text-lg leading-relaxed mb-8">
              Every GrowClimate unit is engineered for reliability in demanding agricultural environments. We combine rigorous quality standards with decades of climate control expertise to deliver equipment that performs when it matters most.
            </p>
            <div class="space-y-5">
              <div v-for="feature in whyUs" :key="feature.title" class="flex gap-4">
                <div class="w-10 h-10 bg-brand-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                  <component :is="feature.icon" class="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <h3 class="font-semibold text-dark-900 mb-1">{{ feature.title }}</h3>
                  <p class="text-gray-600 text-sm leading-relaxed">{{ feature.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <div class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-3xl p-8 lg:p-12">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80"
                alt="Greenhouse climate control"
                class="rounded-2xl shadow-lg w-full"
                loading="lazy"
              />
              <div class="mt-6 bg-white rounded-xl p-5 shadow-sm">
                <div class="flex items-center justify-between mb-3">
                  <span class="text-sm font-semibold text-gray-700">Active Deployments</span>
                  <span class="text-xs text-brand-600 bg-brand-50 px-2 py-0.5 rounded-full">Live</span>
                </div>
                <div class="flex items-end gap-3">
                  <span class="text-3xl font-black text-dark-900">2,400+</span>
                  <span class="text-gray-500 text-sm mb-1">units deployed globally</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== APPLICATION SCENARIOS ===== -->
    <section class="py-16 lg:py-24 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">Industries We Serve</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">From small-scale herb gardens to industrial seed storage facilities, our equipment adapts to any growing environment.</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div v-for="industry in industries" :key="industry.name" class="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-brand-200 hover:shadow-md transition-all cursor-pointer group">
            <div class="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-brand-100 transition-colors">
              <span class="text-2xl">{{ industry.emoji }}</span>
            </div>
            <h3 class="font-semibold text-sm text-gray-800">{{ industry.name }}</h3>
            <p class="text-xs text-gray-500 mt-1">{{ industry.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CERTIFICATIONS ===== -->
    <section class="py-12 bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col md:flex-row items-center justify-between gap-8">
          <p class="text-gray-400 text-sm font-medium">Certified & Compliant With</p>
          <div class="flex flex-wrap items-center justify-center gap-8">
            <div v-for="cert in certifications" :key="cert" class="px-6 py-2 border border-gray-700 rounded-lg text-gray-400 text-sm font-semibold tracking-wider">
              {{ cert }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ===== CASE STUDY PREVIEW ===== -->
    <section class="py-16 lg:py-24 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl lg:text-4xl font-bold text-dark-900 mb-4">Success Stories</h2>
          <p class="text-gray-600 max-w-2xl mx-auto text-lg">Real deployments delivering measurable results for growers worldwide.</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div v-for="cs in caseStudies" :key="cs.id" class="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
            <div class="aspect-[16/9] overflow-hidden bg-gray-100">
              <img :src="cs.image" :alt="cs.title" class="w-full h-full object-cover" loading="lazy" />
            </div>
            <div class="p-5">
              <div class="flex items-center gap-2 mb-2">
                <span class="px-2 py-0.5 bg-brand-50 text-brand-700 text-xs font-semibold rounded-full">{{ cs.industry }}</span>
              </div>
              <h3 class="font-bold text-dark-900 mb-1">{{ cs.title }}</h3>
              <p class="text-gray-600 text-sm">{{ cs.location }}</p>
              <p class="text-gray-700 text-sm mt-3 font-medium">Equipment: {{ cs.equipment }}</p>
              <p class="text-gray-600 text-sm mt-1">Result: {{ cs.result }}</p>
            </div>
          </div>
        </div>
        <div class="text-center mt-10">
          <RouterLink to="/applications" class="inline-flex items-center px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white font-semibold rounded-xl transition-colors text-base">
            View All Applications
            <svg class="ml-2 w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path stroke-linecap="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
            </svg>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- ===== CTA BANNER ===== -->
    <section class="py-16 lg:py-20 bg-brand-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Optimize Your Growing Environment?</h2>
        <p class="text-brand-100 text-lg mb-8">Get a custom climate solution designed for your specific crop, space, and scale. Our engineers are ready to help.</p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <RouterLink to="/contact" class="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors text-base">
            Request Free Consultation
          </RouterLink>
          <RouterLink to="/products" class="inline-flex items-center justify-center px-8 py-4 bg-brand-700 text-white font-semibold rounded-xl hover:bg-brand-800 transition-colors text-base border border-brand-500">
            Browse Product Catalog
          </RouterLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'
import { h } from 'vue'
import { applicationCases } from '@/data/products.js'

useSEO({
  title: 'GrowClimate — Precision Climate. Maximum Yield.',
  description: 'Industrial-grade dehumidifiers, humidifiers, and ventilation systems engineered for greenhouse, hydroponics, and controlled-environment agriculture. OEM/ODM manufacturer. Trusted in 40+ countries.',
  keywords: 'greenhouse dehumidifier, commercial dehumidifier, grow room climate control, industrial humidifier, OEM dehumidifier manufacturer, hydroponics equipment, climate control solutions',
  url: 'https://growclimate.com',
})

const stats = [
  { value: '12+', label: 'Years Experience' },
  { value: '40+', label: 'Countries Served' },
  { value: '2,400+', label: 'Units Deployed' },
  { value: '98%', label: 'Client Satisfaction' },
]

const whyUs = [
  {
    title: 'OEM & ODM Capability',
    desc: 'Full customization from aesthetics to firmware. We build to your exact specifications.',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' }, [h('path', { strokeLinecap: 'round', d: 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z' })]) }
  },
  {
    title: 'Multi-Protocol Integration',
    desc: 'Modbus RS485, RS232, and BACnet standard. Full BMS compatibility for automated growing systems.',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' }, [h('path', { strokeLinecap: 'round', d: 'M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z' })]) }
  },
  {
    title: 'Eco Refrigerants',
    desc: 'R290 propane and R410A options. Compliant with EU F-Gas regulations and EPA SNAP program.',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' }, [h('path', { strokeLinecap: 'round', d: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' })]) }
  },
  {
    title: 'Global Certifications',
    desc: 'CE, UL, ETL, and ISO 9001 certified. Shipping documentation packages ready for customs worldwide.',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' }, [h('path', { strokeLinecap: 'round', d: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' })]) }
  },
]

const industries = [
  { name: 'Greenhouse', emoji: '🌿', desc: 'Controlled growing climate' },
  { name: 'Hydroponics', emoji: '💧', desc: 'Soilless cultivation' },
  { name: 'Mushroom', emoji: '🍄', desc: 'High-humidity mycology' },
  { name: 'Seed Storage', emoji: '🌱', desc: 'Long-term viability' },
  { name: 'Fruit Drying', emoji: '🥭', desc: 'Dried fruit production' },
  { name: 'Vertical Farm', emoji: '🏗️', desc: 'Multi-layer growing' },
  { name: 'Pharma Storage', emoji: '💊', desc: 'GMP environments' },
  { name: 'Container Farm', emoji: '🚛', desc: 'Mobile growing units' },
  { name: 'Herb Garden', emoji: '🌿', desc: 'Medicinal & culinary' },
  { name: 'Flood Restore', emoji: '💦', desc: 'Water damage repair' },
]

const certifications = ['CE', 'UL', 'ETL', 'ISO 9001', 'RoHS', 'REACH']

const caseStudies = applicationCases.slice(0, 3)
</script>
