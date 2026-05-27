<template>
  <div class="about-page">

    <!-- Hero -->
    <section class="bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-5xl font-black text-white mb-4">About GrowClimate</h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">Engineering precision climate control for the world's most demanding growing environments since 2013.</p>
      </div>
    </section>

    <!-- Story -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-3xl lg:text-4xl font-bold text-dark-900 mb-6">Our Story</h2>
            <div class="space-y-4 text-gray-600 leading-relaxed">
              <p>GrowClimate began as a small engineering team obsessed with a single question: why do so many greenhouse and indoor growing operations struggle with humidity control when the underlying physics are well understood?</p>
              <p>The answer, we discovered, was that commercial dehumidification equipment was being designed for buildings and archives — not for the intense moisture loads, fluctuating temperatures, and aggressive air composition of active growing environments.</p>
              <p>In 2013, we started designing dehumidifiers specifically for agricultural use. Today, our equipment serves greenhouse operators, vertical farms, seed storage facilities, mushroom cultivators, and fruit drying facilities in over 40 countries.</p>
              <p>We remain an engineering-first company. Every product decision starts with the application requirements — not the other way around.</p>
            </div>
          </div>
          <div class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl p-8 lg:p-12">
            <img src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&q=80" alt="GrowClimate greenhouse climate control engineering" class="rounded-xl shadow-lg w-full" loading="lazy" />
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Values -->
    <section class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-dark-900 mb-10 text-center">Our Values</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="val in values" :key="val.title" class="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-lg transition-shadow">
            <div class="w-14 h-14 bg-brand-100 rounded-xl flex items-center justify-center mb-5">
              <span class="text-2xl">{{ val.emoji }}</span>
            </div>
            <h3 class="text-xl font-bold text-dark-900 mb-3">{{ val.title }}</h3>
            <p class="text-gray-600 leading-relaxed">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Capabilities -->
    <section class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-dark-900 mb-10 text-center">What We Do</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div v-for="cap in capabilities" :key="cap.title" class="bg-gray-50 rounded-2xl p-8">
            <h3 class="text-lg font-bold text-dark-900 mb-3">{{ cap.title }}</h3>
            <p class="text-gray-600 text-sm leading-relaxed mb-4">{{ cap.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="item in cap.items" :key="item" class="px-3 py-1 bg-brand-50 text-brand-700 text-xs font-medium rounded-full">{{ item }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team / Location -->
    <section class="py-16 bg-dark-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 class="text-3xl font-bold text-white mb-6">Headquarters & Manufacturing</h2>
            <div class="space-y-4 text-gray-400 leading-relaxed">
              <p>GrowClimate Global Trade Co., Ltd. is headquartered in Hangzhou, China — one of Asia's leading manufacturing and export hubs. Our production facility spans 5,000m² with full assembly, testing, and quality control capabilities.</p>
              <div class="bg-dark-800 rounded-xl p-5 space-y-2">
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path stroke-linecap="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span class="text-gray-300 text-sm">Hangzhou, Zhejiang Province, China</span>
                </div>
                <div class="flex items-center gap-2">
                  <svg class="w-4 h-4 text-brand-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                    <path stroke-linecap="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                  <span class="text-gray-300 text-sm">info@growclimate.com</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 class="text-3xl font-bold text-white mb-6">Certifications & Compliance</h2>
            <div class="grid grid-cols-2 gap-3">
              <div v-for="cert in certs" :key="cert" class="bg-dark-800 rounded-xl p-4 text-center border border-gray-700">
                <div class="font-bold text-brand-400 text-lg">{{ cert }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { useSEO } from '@/composables/useSEO'

useSEO({
  title: 'About GrowClimate — Engineering Climate Control Since 2013',
  description: 'GrowClimate is an engineering-first manufacturer of industrial dehumidifiers and climate control systems for greenhouse, hydroponics, and indoor farming. CE/ISO certified, 40+ countries.',
  keywords: 'about GrowClimate, dehumidifier manufacturer China, OEM dehumidifier, climate control engineering, greenhouse equipment manufacturer, CE certified dehumidifier',
  url: 'https://growclimate.com/about',
})
const values = [
  { emoji: '🔬', title: 'Engineering First', desc: 'Every product decision starts with real-world application requirements, not cost optimization. We design for performance, then refine for efficiency.' },
  { emoji: '🌍', title: 'Sustainability', desc: 'R290 propane refrigerants, energy-efficient designs, and long product lifespans are core to our environmental commitment.' },
  { emoji: '🤝', title: 'Long-Term Partnership', desc: 'We view every customer as a partner. Our support doesn\'t end at shipping — we provide ongoing technical collaboration for the life of the equipment.' },
]

const capabilities = [
  {
    title: 'OEM / ODM Customization',
    desc: 'Full customization from industrial design and firmware to branding and packaging. We have a dedicated engineering team for custom builds.',
    items: ['Custom Aesthetics', 'Firmware Development', 'BMS Integration', 'Private Label']
  },
  {
    title: 'Standard Product Catalog',
    desc: 'Off-the-shelf dehumidifiers, humidifiers, and ventilation systems ready for immediate dispatch with full documentation packages.',
    items: ['Same-Day Quote', 'CE/UL/ETL Certified', 'Global Shipping', 'FOB / CIF / DDP']
  },
  {
    title: 'Application Engineering',
    desc: 'Our technical team provides full climate load calculations, equipment sizing, and system design for complex multi-unit projects.',
    items: ['Climate Load Calculation', 'Ducting Design', 'Cascade Systems', 'BMS Integration']
  },
]

const certs = ['ISO 9001', 'CE', 'UL', 'ETL', 'RoHS', 'REACH', 'EPA SNAP', 'EU F-Gas']
</script>
