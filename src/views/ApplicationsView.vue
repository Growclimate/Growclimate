<template>
  <div class="applications-page">

    <!-- Hero -->
    <section class="bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-5xl font-black text-white mb-4">Application Solutions</h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">Climate control isn't one-size-fits-all. Discover how GrowClimate systems are engineered for your specific growing environment.</p>
      </div>
    </section>

    <!-- Application Cards -->
    <section class="py-12 lg:py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        <div v-for="(app, index) in applications" :key="app.id" :id="app.id" class="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center scroll-mt-24" :class="index % 2 === 1 ? 'lg:grid-flow-dense' : ''">
          <div :class="index % 2 === 1 ? 'lg:col-start-2' : ''">
            <div class="flex items-center gap-3 mb-4">
              <span class="text-3xl">{{ app.emoji }}</span>
              <h2 class="text-2xl lg:text-3xl font-bold text-dark-900">{{ app.title }}</h2>
            </div>
            <p class="text-gray-600 leading-relaxed mb-6">{{ app.description }}</p>

            <div class="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 class="font-semibold text-dark-900 mb-3">Recommended Products</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="p in app.products" :key="p" class="px-3 py-1.5 bg-brand-50 text-brand-700 text-sm font-medium rounded-lg">{{ p }}</span>
              </div>
            </div>

            <div class="bg-gray-50 rounded-xl p-5">
              <h3 class="font-semibold text-dark-900 mb-3">Climate Targets</h3>
              <div class="grid grid-cols-2 gap-3">
                <div v-for="target in app.targets" :key="target.label" class="bg-white rounded-lg p-3 border border-gray-200">
                  <div class="text-xs text-gray-500 mb-1">{{ target.label }}</div>
                  <div class="font-bold text-dark-900 text-sm">{{ target.value }}</div>
                </div>
              </div>
            </div>
          </div>

          <div :class="index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''">
            <div class="rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-brand-50 to-brand-100 aspect-[4/3] flex items-center justify-center">
              <div class="text-center p-8">
                <div class="text-6xl mb-4">{{ app.emoji }}</div>
                <h3 class="text-xl font-bold text-dark-900">{{ app.title }}</h3>
                <p class="text-gray-600 text-sm mt-2">{{ app.subtitle }}</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- CTA -->
    <section class="py-12 bg-brand-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-3">Don't See Your Application?</h2>
        <p class="text-brand-100 mb-6">Tell us about your project — our engineering team will design a custom climate solution.</p>
        <RouterLink to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors">
          Get Custom Engineering Support
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
const applications = [
  {
    id: 'greenhouse',
    emoji: '🌿',
    title: 'Greenhouse Climate Control',
    subtitle: 'Precision humidity & temperature for glasshouse environments',
    description: 'Modern greenhouses face complex microclimate challenges — temperature stratification, high humidity during night cycles, and rapid evaporation in summer. GrowClimate systems provide 24/7 automated climate regulation, keeping canopy-level humidity between 60–80% RH regardless of outdoor conditions.',
    products: ['RYCM-90C', 'RYCM-138C', 'UH-6L', 'EH-12L'],
    targets: [
      { label: 'Target RH', value: '60–80%' },
      { label: 'Target Temp', value: '18–28°C' },
      { label: 'Air Exchange', value: '6–10 ACH' },
      { label: 'Control', value: 'Hygrostat + Modbus' },
    ]
  },
  {
    id: 'hydroponics',
    emoji: '💧',
    title: 'Hydroponics & Soilless Growing',
    subtitle: 'Stable root zone environment for maximum yield',
    description: 'Hydroponic systems demand exceptionally stable relative humidity — too high and you risk Pythium root rot; too low and transpiration stress reduces nutrient uptake. Our precision humidifiers maintain 65–75% RH with ±2% accuracy, ensuring consistent VPD (Vapor Pressure Deficit) for maximum photosynthetic efficiency.',
    products: ['UH-3L', 'UH-6L', 'RYCM-50C'],
    targets: [
      { label: 'Target RH', value: '65–75%' },
      { label: 'VPD Range', value: '0.4–0.8 kPa' },
      { label: 'Stability', value: '±2% RH' },
      { label: 'Control', value: 'VPD-Based Auto' },
    ]
  },
  {
    id: 'mushroom',
    emoji: '🍄',
    title: 'Mushroom Cultivation',
    subtitle: 'High humidity mycology climate systems',
    description: 'Mushrooms require sustained 80–95% RH across all growth phases — from spawn run through fruiting. Our heavy-capacity humidifiers combined with RYCM industrial dehumidifiers create a closed-loop humidity system that prevents condensation on walls and substrates while maximizing fruiting body development.',
    products: ['EH-12L', 'UH-6L', 'RYCM-138C'],
    targets: [
      { label: 'Target RH', value: '80–95%' },
      { label: 'Fruiting RH', value: '87–93%' },
      { label: 'Air Exchange', value: '4–6 ACH' },
      { label: 'CO₂ Target', value: '<800ppm fruiting' },
    ]
  },
  {
    id: 'seed-storage',
    emoji: '🌱',
    title: 'Seed Storage',
    subtitle: 'Long-term seed viability preservation',
    description: 'Maintaining seed viability for years requires strict control of both temperature and humidity. GrowClimate desiccant rotor dehumidifiers achieve and maintain RH below 35% in cold storage environments where compressor dehumidifiers fail. Our RY-100 and RY-200 series are the backbone of seed banks and germplasm libraries worldwide.',
    products: ['RY-100', 'RY-200'],
    targets: [
      { label: 'Target RH', value: '25–35%' },
      { label: 'Temp Range', value: '2–8°C' },
      { label: 'Dew Point', value: '<-5°C' },
      { label: 'Uptime', value: '99.5% Required' },
    ]
  },
  {
    id: 'fruit-drying',
    emoji: '🥭',
    title: 'Fruit Drying & Preservation',
    subtitle: 'Controlled drying for dried fruit and agricultural products',
    description: 'Drying fruits and agricultural products requires precise control of temperature and humidity to achieve optimal moisture content, preserve nutrients, and prevent mold growth. GrowClimate dehumidifiers with integrated heating provide consistent drying conditions across all climates — from tropical mangoes to temperate apples.',
    products: ['RY-100', 'RY-200', 'RYCM-138C'],
    targets: [
      { label: 'Drying RH', value: '30–45%' },
      { label: 'Drying Temp', value: '35–55°C' },
      { label: 'Final MC', value: '10–15% (fruit)' },
      { label: 'Airflow', value: '400–800 m³/h' },
    ]
  },
]
</script>
