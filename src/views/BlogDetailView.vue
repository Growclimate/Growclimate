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
import { useSEO } from '@/composables/useSEO'

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
        <li><strong>GRO-385L</strong> (×2-4 units) for primary dehumidification, sized for peak summer load</li>
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
    date: 'May 18, 2026',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1200&q=80',
    excerpt: 'Vapor Pressure Deficit is the most important yet misunderstood climate variable in controlled-environment agriculture.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">Vapor Pressure Deficit (VPD) may sound complex, but it\'s actually the single most useful number for managing your grow room climate. Unlike relative humidity alone, VPD tells you exactly how hard your plants are working — and whether they\'re stressed.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">What Is VPD, Really?</h2>
      <p class="text-gray-700 mb-4">VPD is the difference between how much water vapor the air <em>can</em> hold at saturation and how much it <em>currently</em> holds. Think of it as the air\'s "thirst" for water. A high VPD means the air is thirsty — it pulls moisture aggressively from plant leaves, driving high transpiration. A low VPD means the air is nearly saturated — plants can barely transpire.</p>
      <p class="text-gray-700 mb-4">The magic of VPD is that it combines temperature AND humidity into one actionable number. 70% RH at 30°C is a completely different growing environment than 70% RH at 20°C — even though "relative humidity" is identical. VPD captures this difference.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">VPD Ranges by Growth Stage</h2>
      <p class="text-gray-700 mb-4">Different growth stages demand different VPD targets. Here are the research-backed optimal ranges for most crops:</p>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-sm border-collapse">
          <thead><tr class="bg-brand-50"><th class="p-3 text-left font-semibold">Growth Stage</th><th class="p-3 text-left font-semibold">VPD (kPa)</th><th class="p-3 text-left font-semibold">Effect</th></tr></thead>
          <tbody class="divide-y">
            <tr><td class="p-3">Propagation / Clones</td><td class="p-3 font-mono">0.4–0.8</td><td class="p-3 text-gray-600">Low VPD prevents cuttings from drying out before roots form</td></tr>
            <tr><td class="p-3">Vegetative Growth</td><td class="p-3 font-mono">0.8–1.2</td><td class="p-3 text-gray-600">Moderate VPD drives nutrient uptake and vigorous growth</td></tr>
            <tr><td class="p-3">Early Flowering</td><td class="p-3 font-mono">1.0–1.5</td><td class="p-3 text-gray-600">Higher VPD encourages generative development</td></tr>
            <tr><td class="p-3">Late Flowering</td><td class="p-3 font-mono">1.2–1.5</td><td class="p-3 text-gray-600">Highest VPD to prevent mold while finishing</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Common VPD Mistakes</h2>
      <p class="text-gray-700 mb-4"><strong>Mistake #1: Chasing a single VPD number all day.</strong> VPD naturally fluctuates with temperature. A well-designed climate strategy uses a VPD <em>range</em>, not a fixed point. Use day/night setpoint programming on your controller.</p>
      <p class="text-gray-700 mb-4"><strong>Mistake #2: Ignoring leaf temperature.</strong> Leaf surface temperature is typically 1–3°C cooler than air temperature due to transpiration. For precise VPD, measure leaf temperature with an IR sensor and use it in your calculation — not air temperature.</p>
      <p class="text-gray-700 mb-4"><strong>Mistake #3: Over-correcting too fast.</strong> Rapid humidity swings stress plants more than slightly-off setpoints. Program your dehumidifier and humidifier with gradual ramp rates — aim for <5% RH change per hour.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Equipment for VPD-Based Control</h2>
      <p class="text-gray-700 mb-4">To run a VPD-controlled grow room, you need equipment that responds to both temperature and humidity readings simultaneously. The GrowClimate GRO-165L and GRO-288L floor-standing dehumidifiers include integrated temperature/humidity sensors with Modbus output — allowing your climate controller to calculate real-time VPD and adjust dehumidification output accordingly.</p>
    `
  },
  'desiccant-vs-compressor': {
    title: 'Desiccant vs Compressor Dehumidifiers: How to Choose',
    category: 'Equipment Guide',
    date: 'May 15, 2026',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1200&q=80',
    excerpt: 'A detailed comparison of sorptive rotor dehumidifiers and compressor-based systems.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">Choosing between desiccant and compressor dehumidification is one of the most consequential equipment decisions for any controlled-environment agriculture facility. The wrong choice means wasted energy, unreliable humidity control, or equipment failure at critical moments.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">How Each Technology Works</h2>
      <p class="text-gray-700 mb-4"><strong>Compressor (Refrigerant) Dehumidifiers</strong> work like an air conditioner — they cool air below its dew point, causing water vapor to condense on cold coils. The now-dry air is reheated and returned to the space. This is the most common technology for ambient-temperature applications.</p>
      <p class="text-gray-700 mb-4"><strong>Desiccant Rotor Dehumidifiers</strong> use a slowly rotating wheel impregnated with silica gel or molecular sieve material. Moist air passes through the rotor, where water vapor is physically adsorbed onto the desiccant surface. A separate hot air stream then "regenerates" the rotor, expelling captured moisture outside.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">When to Use Each Technology</h2>
      <div class="bg-gray-50 rounded-xl p-6 my-6">
        <h3 class="font-bold text-brand-700 mb-3">✅ Choose Compressor When:</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>Ambient temperature is above 15°C (59°F)</li>
          <li>Target RH is above 45%</li>
          <li>Energy efficiency is a priority (COP of 2–3 vs 1 for desiccant)</li>
          <li>Application: greenhouses, grow rooms, mushroom farms, fruit drying above 15°C</li>
        </ul>
      </div>
      <div class="bg-gray-50 rounded-xl p-6 my-6">
        <h3 class="font-bold text-brand-700 mb-3">✅ Choose Desiccant When:</h3>
        <ul class="list-disc pl-6 space-y-2 text-gray-700">
          <li>Ambient temperature is below 10°C (50°F) — compressors ice up</li>
          <li>Target RH is below 35% — compressors can\'t achieve this efficiently</li>
          <li>Dew point below 0°C is required</li>
          <li>Application: seed banks, cold storage, pharmaceutical, archival preservation</li>
        </ul>
      </div>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">GrowClimate Product Recommendations</h2>
      <p class="text-gray-700 mb-4">For compressor applications, the <strong>GRO-165L through GRO-960L</strong> floor-standing series covers 165–960 L/day with R410A/R32 refrigerant options. All models support Modbus integration for automated climate management.</p>
      <p class="text-gray-700 mb-4">For desiccant applications, the <strong>GROW-320 through GROW-1550M</strong> series handles 320–1,550 m³/h process airflow, operating effectively from -10°C to +50°C. The GROW-1100M and GROW-1550M are our most popular units for seed bank and pharmaceutical installations.</p>
    `
  },
  'mushroom-farming-climate': {
    title: 'Climate Control for Mushroom Farms: Why RH Above 85% Matters',
    category: 'Case Studies',
    date: 'May 10, 2026',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1504753793650-d4a2b783c15e?w=1200&q=80',
    excerpt: 'Climate requirements for oyster, shiitake, and button mushroom cultivation at commercial scale.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">Mushroom cultivation is perhaps the most humidity-intensive form of agriculture. Unlike green plants, mushrooms don\'t have stomata to regulate water loss — their entire fruiting body is exposed to ambient air. Maintaining 85–95% RH is not optional; it\'s the difference between harvest and crop failure.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Why Mushrooms Need Extreme Humidity</h2>
      <p class="text-gray-700 mb-4">Mushroom fruiting bodies are 85–95% water by weight. In dry air, they lose moisture faster than the mycelium can replace it, resulting in stunted growth, cracked caps, and brown discoloration. Sustained high humidity ensures the mushroom can expand its cell walls and develop full size, shape, and commercial weight.</p>
      <p class="text-gray-700 mb-4">However, stagnant high-humidity air is equally dangerous — it promotes bacterial blotch and competitor molds like Trichoderma. The key is high humidity <em>with</em> adequate air exchange: 4–6 air changes per hour for button mushrooms, and 6–10 for oyster varieties.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Climate Parameters by Mushroom Type</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-sm border-collapse">
          <thead><tr class="bg-brand-50"><th class="p-3 text-left font-semibold">Variety</th><th class="p-3 text-left font-semibold">Spawn Run RH</th><th class="p-3 text-left font-semibold">Fruiting RH</th><th class="p-3 text-left font-semibold">Temp</th><th class="p-3 text-left font-semibold">CO₂ Limit</th></tr></thead>
          <tbody class="divide-y">
            <tr><td class="p-3">Button (Agaricus)</td><td class="p-3 font-mono">85–90%</td><td class="p-3 font-mono">87–93%</td><td class="p-3">16–18°C</td><td class="p-3"><1,000 ppm</td></tr>
            <tr><td class="p-3">Oyster (Pleurotus)</td><td class="p-3 font-mono">90–95%</td><td class="p-3 font-mono">88–95%</td><td class="p-3">18–24°C</td><td class="p-3"><800 ppm</td></tr>
            <tr><td class="p-3">Shiitake (Lentinula)</td><td class="p-3 font-mono">60–70%</td><td class="p-3 font-mono">85–92%</td><td class="p-3">16–20°C</td><td class="p-3"><1,200 ppm</td></tr>
            <tr><td class="p-3">Lion\'s Mane</td><td class="p-3 font-mono">85–90%</td><td class="p-3 font-mono">90–95%</td><td class="p-3">18–22°C</td><td class="p-3"><800 ppm</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Recommended Equipment</h2>
      <p class="text-gray-700 mb-4">For commercial mushroom operations, we recommend a paired humidification + dehumidification system:</p>
      <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>GROW-24D or GROW-15D</strong> industrial humidifiers for sustained 80–95% RH output during fruiting phases</li>
        <li><strong>GRO-288L or GRO-385L</strong> dehumidifiers to create the controlled dry-down during spawn run and to prevent condensation during cool night cycles</li>
        <li>Separate controllers for day/night cycling — mushrooms need distinct climate phases, not constant conditions</li>
      </ul>
    `
  },
  'fruit-drying-science': {
    title: 'The Science of Fruit Drying: Controlled Climate for Premium Quality',
    category: 'Agricultural Applications',
    date: 'May 5, 2026',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    excerpt: 'How modern dehumidification technology preserves nutrients and prevents spoilage in fruit drying operations.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">Dried fruit is a $12 billion global market, and quality differentiation comes down to one thing: how well you control the drying environment. Too fast and the fruit case-hardens — dry outside, wet inside. Too slow and mold or fermentation destroys the batch. Precision climate control is the difference between premium export-grade product and livestock feed.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">The Three Phases of Fruit Drying</h2>
      <p class="text-gray-700 mb-4"><strong>Phase 1 — Constant Rate (First 30%):</strong> Surface moisture evaporates freely. Maintain 40–45°C and 35–45% RH with high airflow (>1,000 m³/h per ton). The GRO-720L or GRO-960L floor-standing dehumidifier provides the massive moisture removal capacity needed at this stage.</p>
      <p class="text-gray-700 mb-4"><strong>Phase 2 — Falling Rate (Middle 50%):</strong> Internal moisture migrates to the surface. Reduce temperature to 35–40°C and RH to 25–35%. Reduce airflow to prevent case hardening. This is where most operators lose quality by running too hot.</p>
      <p class="text-gray-700 mb-4"><strong>Phase 3 — Final Moisture (Last 20%):</strong> Target final moisture content (MC) of 10–18% depending on fruit type. Mango: 12–15%, apple: 15–18%, tomato: 10–12%. At this stage, desiccant dehumidifiers like the GROW-1100M can achieve the ultra-low RH needed to remove the last bound moisture without raising temperature.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Equipment Sizing Rule of Thumb</h2>
      <p class="text-gray-700 mb-4">For every 1,000 kg of fresh fruit loaded, expect to remove 700–850 kg of water over the drying cycle. A 7-day mango drying operation processing 5 tons needs to remove roughly 3,750 kg of water — or 535 L/day average. Size your dehumidifier for the peak Phase 1 rate, which is approximately 2× the average.</p>
    `
  },
  'seed-storage-humidity': {
    title: 'Seed Storage Science: Maintaining Viability for Decades',
    category: 'Technical',
    date: 'April 28, 2026',
    readTime: 7,
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=1200&q=80',
    excerpt: 'How seed banks maintain seeds viable for 50+ years through precise temperature and humidity control.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">Seeds are living embryos in suspended animation. Keep them at the right temperature and humidity, and they can remain viable for decades — even centuries. Get it wrong, and germination rates plummet within months. The science of seed storage is fundamentally about controlling two variables: temperature and relative humidity.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Harrington\'s Rule: The Golden Formula</h2>
      <p class="text-gray-700 mb-4">Dr. James Harrington\'s research established the foundational principle: for every 1% reduction in seed moisture content (or every 5°C reduction in storage temperature), seed lifespan <em>doubles</em>. This exponential relationship means that small improvements in climate control yield dramatic gains in longevity.</p>
      <p class="text-gray-700 mb-4">The international standard for long-term seed storage (orthodox seeds) is 3–7% moisture content at -18°C, which requires a storage environment of 15–25% RH at cold temperatures. At these conditions, seeds of many species remain viable for 50–100+ years.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Why Desiccant Dehumidifiers Are Essential</h2>
      <p class="text-gray-700 mb-4">Compressor dehumidifiers fail in cold storage because their coils freeze below 15°C. Desiccant rotor technology has no such limitation — it removes moisture through physical adsorption, which actually becomes <em>more</em> efficient at lower temperatures. The GrowClimate GROW-580, GROW-1100M, and GROW-1550M desiccant series operate effectively from -10°C to +50°C.</p>
      <p class="text-gray-700 mb-4"><strong>Recommended configuration for a 200m² seed vault:</strong> One GROW-1100M primary unit with a GROW-580 backup, maintaining 22% ±3% RH at 4°C. Modbus integration for 24/7 monitoring with alert thresholds at 30% RH.</p>
    `
  },
  'cannabis-drying-guide': {
    title: 'Cannabis Drying Room Design: Temperature, Humidity & Airflow Guide',
    category: 'Industry Guide',
    date: 'April 22, 2026',
    readTime: 10,
    image: 'https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e?w=1200&q=80',
    excerpt: 'Optimal drying room parameters, equipment sizing, and climate control strategies for premium flower preservation.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">Post-harvest processing is where the real value of a cannabis crop is determined. A perfect grow can be ruined in 72 hours of poor drying conditions. Conversely, masterful drying can elevate average flower to premium status. The difference is climate control.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">The Optimal Drying Window</h2>
      <p class="text-gray-700 mb-4">The gold standard for cannabis drying is a <strong>10–14 day</strong> slow dry at:</p>
      <div class="bg-gray-100 rounded-xl p-5 my-6 font-mono text-sm">
        <p class="mb-2"><strong>Temperature:</strong> 15.5–21°C (60–70°F)</p>
        <p class="mb-2"><strong>Relative Humidity:</strong> 50–55%</p>
        <p><strong>Air Exchange:</strong> 10–15 room volumes per hour (gentle, indirect airflow)</p>
      </div>
      <p class="text-gray-700 mb-4">Drying faster than 7 days traps chlorophyll and produces a harsh "green" taste. Drying slower than 16 days risks mold, especially with dense colas. The 10–14 day window is the sweet spot where chlorophyll degrades, terpenes are preserved, and moisture content reaches the ideal 10–12% for curing.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Dehumidifier Sizing for Drying Rooms</h2>
      <p class="text-gray-700 mb-4">Fresh harvested cannabis is approximately 75–80% water by weight. A room processing 50 kg of fresh flower needs to remove roughly 37–40 liters of water over the 10–14 day drying period. The peak moisture release occurs in the first 48–72 hours.</p>
      <p class="text-gray-700 mb-4">For a commercial drying room processing 100 kg per cycle, we recommend the <strong>GRO-165L</strong> or <strong>GRO-288L</strong> floor-standing dehumidifier — sized to handle the peak moisture load in the first 3 days while precisely maintaining 50–55% RH. The GD-240L ceiling-mounted unit is ideal when floor space is at a premium.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Common Drying Mistakes</h2>
      <p class="text-gray-700 mb-4"><strong>Direct airflow on hanging plants.</strong> Fans should circulate room air without blowing directly on flowers. Direct airflow causes uneven drying — crispy outside, wet inside.</p>
      <p class="text-gray-700 mb-4"><strong>Dehumidifier short-cycling.</strong> Oversized dehumidifiers that cycle on/off frequently create RH swings of 10–15%. Size your unit to run 60–80% duty cycle during peak moisture release for stable RH control.</p>
      <p class="text-gray-700"><strong>No temperature control.</strong> Dehumidifiers add heat to the room. In a well-insulated drying room, a GRO-288L adds approximately 4.6 kW of sensible heat — factor this into your cooling load or the room temperature will drift above 21°C.</p>
    `
  },
  'vertical-farming-humidity': {
    title: 'Vertical Farming Humidity: Challenges & Solutions for Multi-Layer Growing',
    category: 'Growing Science',
    date: 'April 15, 2026',
    readTime: 8,
    image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=1200&q=80',
    excerpt: 'Multi-layer indoor farms face unique humidity challenges. Proven climate control strategies for vertical growing.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">Vertical farming multiplies your growing area — and your climate control challenges. When you stack 5–15 layers of plants in a single room, you\'re not just dealing with more transpiration. You\'re dealing with heat stratification, microclimate variance between racks, and humidity gradients that can differ by 20% RH from top to bottom.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">The Stack Effect: Why Humidity Stratifies</h2>
      <p class="text-gray-700 mb-4">Warm, moist air rises. In a vertical farm with LED lighting on every tier, the top racks receive heat from all the racks below — typically 3–5°C warmer than the bottom tier. Because warmer air holds more moisture, the top tier often measures 10–15% lower RH than the bottom tier, even though absolute humidity is uniform. This creates two completely different VPD environments in the same room.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">The 3-Zone Approach</h2>
      <p class="text-gray-700 mb-4">The most effective strategy for vertical farms is to treat the room as 3 climate zones:</p>
      <ul class="list-disc pl-6 space-y-2 text-gray-700 mb-6">
        <li><strong>Bottom Zone (Racks 1–3):</strong> Highest RH, coolest temperatures. Place humidity sensors at plant canopy level. Use small circulation fans to push moist air toward return ducts.</li>
        <li><strong>Middle Zone (Racks 4–8):</strong> Most stable conditions. This is where you want your primary climate sensors. Target VPD of 0.8–1.2 kPa for vegetative crops.</li>
        <li><strong>Top Zone (Racks 9+):</strong> Hottest and driest. May need supplemental humidification from GROW-06D or GROW-09D units with ducted mist distribution.</li>
      </ul>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Equipment Recommendations</h2>
      <p class="text-gray-700 mb-4">For vertical farms, ceiling-mounted dehumidifiers like the <strong>GD-160L through GD-720L</strong> series are ideal — they remove moisture at the top of the room (where it accumulates) while keeping the growing floor completely clear. Pair with GROW-03L or GROW-06D humidifiers at mid and upper levels for zone-specific humidity boosting.</p>
      <p class="text-gray-700">The key metric for vertical farms is <strong>humidity uniformity</strong> — aim for less than 8% RH variance between top and bottom tiers. If your variance exceeds this, you need more air mixing, not more dehumidification capacity.</p>
    `
  },
  'r290-refrigerant-guide': {
    title: 'Why R290 Is the Future of Greenhouse Dehumidification',
    category: 'Sustainability',
    date: 'April 8, 2026',
    readTime: 6,
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&q=80',
    excerpt: 'R290 (propane) refrigerant has GWP of 3 — 675× lower than R410A. Why growers are switching.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">The refrigerant inside your dehumidifier matters — for regulatory compliance, for energy costs, and for your environmental footprint. R290 (propane) is rapidly becoming the standard for greenhouse climate equipment in Europe and North America. Here\'s why.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">The GWP Comparison</h2>
      <div class="overflow-x-auto my-6">
        <table class="w-full text-sm border-collapse">
          <thead><tr class="bg-brand-50"><th class="p-3 text-left font-semibold">Refrigerant</th><th class="p-3 text-left font-semibold">GWP (100yr)</th><th class="p-3 text-left font-semibold">Regulatory Status</th><th class="p-3 text-left font-semibold">Energy Efficiency</th></tr></thead>
          <tbody class="divide-y">
            <tr><td class="p-3 font-semibold">R290 (Propane)</td><td class="p-3 font-mono">3</td><td class="p-3 text-green-700">✅ No phase-out</td><td class="p-3">Excellent</td></tr>
            <tr><td class="p-3 font-semibold">R32</td><td class="p-3 font-mono">675</td><td class="p-3 text-yellow-700">⚠️ Phase-down from 2025</td><td class="p-3">Good</td></tr>
            <tr><td class="p-3 font-semibold">R410A</td><td class="p-3 font-mono">2,088</td><td class="p-3 text-red-700">❌ Phasing out (EU F-Gas)</td><td class="p-3">Good</td></tr>
            <tr><td class="p-3 font-semibold">R134a</td><td class="p-3 font-mono">1,430</td><td class="p-3 text-red-700">❌ Banned new equipment EU 2025</td><td class="p-3">Moderate</td></tr>
          </tbody>
        </table>
      </div>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Why European Growers Are Leading the Switch</h2>
      <p class="text-gray-700 mb-4">The EU F-Gas Regulation (EU 2024/573) mandates an aggressive phasedown of HFC refrigerants. By 2030, the EU must reduce HFC consumption to just 21% of 2015 baseline levels. For greenhouse operators, this means equipment using R410A or R134a will become increasingly expensive to service — and eventually impossible to replace.</p>
      <p class="text-gray-700 mb-4">R290 is classified as A3 (flammable) but with a charge limit of ~500g per circuit in most jurisdictions. GrowClimate\'s GROW-60, GROW-90, and GROW-120 portable dehumidifiers use R290A with charges well within safety limits, achieving the same dehumidification performance as larger R410A units with dramatically lower environmental impact.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Bottom Line</h2>
      <p class="text-gray-700">If you\'re specifying new dehumidification equipment for a greenhouse project in Europe or North America, R290 is the future-proof choice. It delivers equivalent or better energy efficiency, complies with current and upcoming regulations, and carries a GWP of just 3 — effectively zero climate impact from refrigerant leakage over the equipment lifecycle.</p>
    `
  },
  'energy-saving-dehumidification': {
    title: '5 Ways Commercial Growers Cut Dehumidification Energy Costs by 40%',
    category: 'Energy Efficiency',
    date: 'March 30, 2026',
    readTime: 9,
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&q=80',
    excerpt: 'Dehumidification is often the second-largest energy cost in greenhouses. Five proven strategies that deliver real savings.',
    content: `
      <p class="lead text-xl text-gray-600 mb-6 font-medium">For most commercial greenhouses, dehumidification is the second-largest energy consumer after lighting — and in winter months in northern climates, it can be #1. The good news: most facilities can reduce dehumidification energy by 30–50% through smarter control strategies and equipment selection.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">1. VPD-Based Control Instead of Fixed RH Setpoints</h2>
      <p class="text-gray-700 mb-4">Running a dehumidifier to maintain "60% RH" ignores temperature. At 30°C, 60% RH is a VPD of 1.7 kPa — dangerously high. At 18°C, 60% RH is a VPD of 0.8 kPa — perfectly comfortable. VPD-based control allows the dehumidifier to relax when conditions are naturally favorable, reducing runtime by an estimated 15–25% annually.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">2. Heat Recovery Ventilation (HRV) Pre-Treatment</h2>
      <p class="text-gray-700 mb-4">Instead of dehumidifying 100% of the moisture load mechanically, use an HRV system to exhaust moist air and bring in drier outside air — while recovering 70–85% of the thermal energy. In climates where outdoor dew point is below your target, this can reduce dehumidifier runtime by 30–50%. The GRO-385L and GD-240L units integrate with HRV control systems via Modbus for coordinated operation.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">3. Variable-Speed Compressors</h2>
      <p class="text-gray-700 mb-4">Fixed-speed dehumidifiers operate at 100% or 0% — cycling on and off. Variable-speed (inverter) compressors modulate output to match the actual moisture load, running at 30–60% capacity most of the time. This eliminates the energy-wasting startup surge and provides more stable humidity control. GrowClimate\'s floor-standing series (GRO-165L and above) supports variable-speed configurations for custom OEM projects.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">4. Night-Purge Strategy with Free Cooling</h2>
      <p class="text-gray-700 mb-4">In many climates, outdoor air between 2–6 AM is both cool and relatively dry. A night-purge cycle that ventilates the greenhouse with outside air for 2–4 hours can remove 20–30% of the daily moisture load using fan energy alone — no dehumidifier needed. Program your climate controller to activate purge ventilation when outdoor dew point is at least 3°C below your target growing dew point.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">5. Right-Sized Equipment with Staging</h2>
      <p class="text-gray-700 mb-4">A single oversized dehumidifier short-cycles and wastes energy. Two or three smaller units in a staged configuration run more efficiently: one base-load unit runs continuously at optimal efficiency while additional units cycle on only during peak moisture events (post-irrigation, summer afternoons). This approach typically saves 15–20% in energy versus a single oversized unit while providing N+1 redundancy.</p>

      <h2 class="text-2xl font-bold text-dark-900 mt-8 mb-4">Real-World Results</h2>
      <p class="text-gray-700">A Dutch tomato greenhouse implementing strategies 1, 2, and 4 with GRO-385L dehumidifiers reduced annual dehumidification energy from 185,000 kWh to 112,000 kWh — a 39% reduction — while maintaining tighter RH control (±3% vs ±7% previously). The HRV system paid for itself in 14 months of energy savings.</p>
    `
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

// Dynamic SEO for blog posts
useSEO({
  title: post.value.title,
  description: post.value.excerpt || post.value.title,
  image: post.value.image,
  url: `https://growclimate.com/blog/${slug}`,
  type: 'article',
  publishedTime: post.value.date,
  keywords: `${post.value.category}, greenhouse blog, climate control, dehumidifier guide, growing science`,
})
</script>
