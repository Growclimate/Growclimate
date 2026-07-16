<template>
  <div class="products-page">

    <!-- Page Header -->
    <section class="bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-5xl font-black text-white mb-4">Product Center</h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">Professional-grade climate control equipment for every growing application. Scroll down to explore our full product lineup.</p>
      </div>
    </section>

    <!-- Sticky Section Navigation -->
    <div class="sticky top-16 lg:top-20 z-40 bg-white border-b border-gray-200 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center gap-1 overflow-x-auto py-1 scrollbar-hide">
          <a
            v-for="sec in sections"
            :key="sec.id"
            :href="'#' + sec.id"
            class="flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg whitespace-nowrap transition-colors flex-shrink-0"
            :class="activeSection === sec.id ? 'bg-brand-600 text-white' : 'text-gray-600 hover:bg-gray-100'"
            @click.prevent="scrollToSection(sec.id)"
          >
            <span class="text-base">{{ sec.emoji }}</span>
            <span>{{ sec.name }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- ═══════════════════════════════════════════════════ -->
    <!-- SECTION 1: PORTABLE DEHUMIDIFIER                 -->
    <!-- ═══════════════════════════════════════════════════ -->
    <section id="portable" class="py-12 lg:py-16 bg-white" ref="section-portable">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <span class="text-2xl">💧</span>
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark-900">Portable Dehumidifiers</h2>
            <p class="text-gray-500 text-sm">Compact, mobile units for small-to-medium spaces</p>
          </div>
        </div>
        <p class="text-gray-600 max-w-4xl leading-relaxed">
          Portable dehumidifiers are designed for easy mobility and quick deployment. Ideal for small grow rooms, propagation chambers, and localized humidity control. Equipped with eco-friendly R290 refrigerant for sustainable operation.
        </p>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Dynamic Product Cards for Portable -->
        <div v-if="portableProducts.length > 0" class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl overflow-hidden mb-6">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="bg-gray-50 flex items-center justify-center min-h-[260px] p-6">
              <img
                :src="portableProducts[0].image"
                :alt="portableProducts[0].model"
                class="max-h-64 max-w-full object-contain rounded-xl shadow-sm"
                loading="lazy"
                @error="$event.target.style.display='none'"
              />
            </div>
            <div class="p-6 lg:p-8">
              <h3 class="text-lg font-bold text-dark-900 mb-4">Specifications</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-sm">
                  <thead>
                    <tr class="border-b border-brand-200">
                      <th class="py-2 pr-4 text-left font-semibold text-dark-900">Parameter</th>
                      <th v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-semibold text-dark-900">{{ product.model }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr><td class="py-2 pr-4 text-gray-600">Capacity</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900">{{ product.capacity }}</td></tr>
                    <tr><td class="py-2 pr-4 text-gray-600">Power</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900">{{ product.power }}</td></tr>
                    <tr><td class="py-2 pr-4 text-gray-600">Power Supply</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900">{{ product.powerSupply }}</td></tr>
                    <tr><td class="py-2 pr-4 text-gray-600">Refrigerant</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900">{{ product.refrigerant }}</td></tr>
                    <tr><td class="py-2 pr-4 text-gray-600">Max. Current</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900">{{ product.maxCurrent }}</td></tr>
                    <tr><td class="py-2 pr-4 text-gray-600">Airflow</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900">{{ product.airflow }}</td></tr>
                    <tr><td class="py-2 pr-4 text-gray-600">Water Tank</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900 text-xs">{{ product.waterTank }}</td></tr>
                    <tr><td class="py-2 pr-4 text-gray-600">Dimensions</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900 text-xs">{{ product.dimensions }}</td></tr>
                    <tr><td class="py-2 pr-4 text-gray-600">Weight</td><td v-for="product in portableProducts" :key="product.id" class="py-2 px-2 text-center font-medium text-dark-900">{{ product.weight }}</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Eco-Friendly R290 Refrigerant</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Zero ODP, ultra-low GWP. Compliant with EU F-Gas and EPA SNAP program.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Auto Drain Pump Built-In</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Continuous condensate drainage. No manual emptying required for unattended operation.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">CE & UL Certified</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Fully certified for North America, Europe, and Asia-Pacific markets.</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-xs font-semibold text-gray-500 self-center mr-1">Typical Applications:</span>
          <span v-for="scene in portableScenes" :key="scene" class="px-3 py-1 bg-brand-50 border border-brand-100 text-brand-700 text-xs rounded-full">{{ scene }}</span>
        </div>

        <a
          v-if="portableDatasheet"
          :href="portableDatasheet"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Download Datasheet
        </a>
        <span v-else class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-400 text-sm font-semibold rounded-lg cursor-not-allowed">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Datasheet Coming Soon
        </span>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-4"><div class="border-t border-gray-200"></div></div>

    <!-- ═══════════════════════════════════════════════════ -->
    <!-- SECTION 2: FLOOR STANDING DEHUMIDIFIER           -->
    <!-- ═══════════════════════════════════════════════════ -->
    <section id="floor" class="py-12 lg:py-16 bg-gray-50" ref="section-floor">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-12 h-12 bg-gray-800 rounded-xl flex items-center justify-center flex-shrink-0">
            <span class="text-2xl">🏭</span>
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark-900">Floor Standing Dehumidifiers</h2>
            <p class="text-gray-500 text-sm">High-capacity units for large-scale commercial and industrial environments</p>
          </div>
        </div>
        <p class="text-gray-600 max-w-4xl leading-relaxed">
          Floor standing dehumidifiers deliver industrial-grade capacity in a compact floor-mount form factor. Designed for large greenhouses, warehouse-scale growing operations, and commercial cultivation facilities where maximum moisture removal per day is critical.
        </p>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Dynamic Floor Product -->
        <div v-if="floorProducts.length > 0" class="bg-white rounded-2xl overflow-hidden mb-6 shadow-sm border border-gray-100">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="bg-gray-50 flex items-center justify-center min-h-[260px] p-6">
              <img
                :src="floorProducts[0].image"
                :alt="floorProducts[0].model"
                class="max-h-64 max-w-full object-contain rounded-xl shadow-sm"
                loading="lazy"
                @error="$event.target.style.display='none'"
              />
            </div>
            <div class="p-6 lg:p-8">
              <h3 class="text-lg font-bold text-dark-900 mb-4">Specifications — GRO Floor Series</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-xs">
                  <thead>
                    <tr class="border-b border-gray-200">
                      <th class="py-2 pr-3 text-left font-semibold text-dark-900 whitespace-nowrap">Model</th>
                      <th v-for="p in floorProducts" :key="p.id" class="py-2 px-1.5 text-center font-semibold text-dark-900 whitespace-nowrap">{{ p.model }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Capacity</td>
                      <td v-for="p in floorProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.capacity }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Power Supply</td>
                      <td v-for="p in floorProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.powerSupply }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Refrigerant</td>
                      <td v-for="p in floorProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.refrigerant }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Max. Power</td>
                      <td v-for="p in floorProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.power }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Airflow</td>
                      <td v-for="p in floorProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.airflow }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Dimensions</td>
                      <td v-for="p in floorProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.dimensions }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Weight</td>
                      <td v-for="p in floorProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.weight }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Industrial Scroll Compressor</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Engineered for 24/7 continuous operation in demanding agricultural environments.</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Modbus/RS485 Built-In</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Full BMS integration. Remote monitoring and automated climate control for multi-unit installations.</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">CE, UL & ETL Certified</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Triple certified for global markets with complete customs documentation.</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-xs font-semibold text-gray-500 self-center mr-1">Typical Applications:</span>
          <span v-for="scene in floorScenes" :key="scene" class="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full">{{ scene }}</span>
        </div>

        <a
          v-if="floorDatasheet"
          :href="floorDatasheet"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-800 hover:bg-gray-900 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Download Datasheet
        </a>
        <span v-else class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-400 text-sm font-semibold rounded-lg cursor-not-allowed">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Datasheet Coming Soon
        </span>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-4"><div class="border-t border-gray-200"></div></div>

    <!-- ═══════════════════════════════════════════════════ -->
    <!-- SECTION 3: CEILING & DUCT DEHUMIDIFIER           -->
    <!-- ═══════════════════════════════════════════════════ -->
    <section id="ceiling" class="py-12 lg:py-16 bg-white" ref="section-ceiling">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-12 h-12 bg-brand-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <span class="text-2xl">🏗️</span>
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark-900">Ceiling & Duct Dehumidifiers</h2>
            <p class="text-gray-500 text-sm">Hidden installation for seamless climate control</p>
          </div>
        </div>
        <p class="text-gray-600 max-w-4xl leading-relaxed">
          Ceiling-mounted and ducted dehumidifiers are installed out of sight, delivering conditioned air through ductwork to maintain uniform humidity across large growing areas. Ideal for facilities where floor space is at a premium.
        </p>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <!-- Product Image + Specs Card -->
        <div v-if="ceilingProducts.length > 0" class="bg-gradient-to-br from-brand-50 to-brand-100 rounded-2xl overflow-hidden mb-6">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <!-- Product Image -->
            <div class="bg-gray-50 flex items-center justify-center min-h-[280px] p-6">
              <img
                :src="ceilingProducts[0].image"
                :alt="ceilingProducts[0].model"
                class="max-h-64 max-w-full object-contain rounded-xl shadow-sm"
                loading="lazy"
                @error="$event.target.style.display='none'"
              />
            </div>
            <!-- Full Spec Table: all ceiling models -->
            <div class="p-6 lg:p-8">
              <h3 class="text-lg font-bold text-dark-900 mb-4">Specifications — GD Series</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-xs">
                  <thead>
                    <tr class="border-b border-brand-200">
                      <th class="py-2 pr-3 text-left font-semibold text-dark-900 whitespace-nowrap">Model</th>
                      <th v-for="p in ceilingProducts" :key="p.id" class="py-2 px-1.5 text-center font-semibold text-dark-900 whitespace-nowrap">{{ p.model }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Capacity</td>
                      <td v-for="p in ceilingProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.capacity }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Power Supply</td>
                      <td v-for="p in ceilingProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.powerSupply }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Refrigerant</td>
                      <td v-for="p in ceilingProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.refrigerant }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Max. Power</td>
                      <td v-for="p in ceilingProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.power }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Airflow</td>
                      <td v-for="p in ceilingProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.airflow }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Dimensions</td>
                      <td v-for="p in ceilingProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.dimensions }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-600 whitespace-nowrap">Weight</td>
                      <td v-for="p in ceilingProducts" :key="p.id" class="py-2 px-1.5 text-center font-medium text-dark-900 whitespace-nowrap">{{ p.weight }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Space-Saving Ceiling Installation</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Installed overhead, GD series units keep the entire growing floor free — no footprint, no obstruction to plant canopy access.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Duct Integration Ready</h4>
            <p class="text-gray-600 text-xs leading-relaxed">All models support ducted air distribution for uniform humidity across multi-zone growing areas. Custom duct configurations available.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Modbus / Controller</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Every GD model includes integrated Modbus RS485 for BMS integration and centralized multi-unit climate automation.</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-xs font-semibold text-gray-500 self-center mr-1">Typical Applications:</span>
          <span v-for="scene in ceilingScenes" :key="scene" class="px-3 py-1 bg-brand-50 border border-brand-100 text-brand-700 text-xs rounded-full">{{ scene }}</span>
        </div>

        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
        >
          Request a Quote
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </RouterLink>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-4"><div class="border-t border-gray-200"></div></div>

    <!-- ═══════════════════════════════════════════════════ -->
    <!-- SECTION 4: DESICCANT DEHUMIDIFIER                -->
    <!-- ═══════════════════════════════════════════════════ -->
    <section id="desiccant" class="py-12 lg:py-16 bg-gray-50" ref="section-desiccant">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-12 h-12 bg-dark-900 rounded-xl flex items-center justify-center flex-shrink-0">
            <span class="text-2xl">⚙️</span>
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark-900">Desiccant Dehumidifiers</h2>
            <p class="text-gray-500 text-sm">Ultra-low humidity control — effective below 0°C</p>
          </div>
        </div>
        <p class="text-gray-600 max-w-4xl leading-relaxed">
          Desiccant rotor dehumidifiers use a silica gel rotor to adsorb moisture, making them the only technology that operates effectively below 0°C. Essential for cold storage, seed drying rooms, pharmaceutical environments, and any application requiring sustained RH below 30%.
        </p>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Dynamic Desiccant Products -->
        <div v-if="desiccantProducts.length > 0" class="bg-gradient-to-br from-gray-900 to-dark-800 rounded-2xl overflow-hidden mb-6 text-white">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="bg-gray-800 flex items-center justify-center min-h-[260px] p-6">
              <img
                :src="desiccantProducts[0].image"
                :alt="desiccantProducts[0].model"
                class="max-h-64 max-w-full object-contain rounded-xl"
                loading="lazy"
                @error="$event.target.style.display='none'"
              />
            </div>
            <div class="p-6 lg:p-8">
              <h3 class="text-lg font-bold mb-4">Specifications — GROW Desiccant Series</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-xs">
                  <thead>
                    <tr class="border-b border-gray-700">
                      <th class="py-2 pr-3 text-left font-semibold text-gray-300 whitespace-nowrap">Model</th>
                      <th v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-semibold text-gray-300 whitespace-nowrap">{{ product.model }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-700">
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Rated Power</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.ratedPower }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Power Supply</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.powerSupply }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Rated Current</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.ratedCurrent }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Process Airflow</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.processAirflow }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Static Pressure</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.processStaticPressure }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Regen Airflow</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.regenAirflow }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Operating Temp</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.operatingTemp }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Dimensions</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.dimensions }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-3 text-gray-400 whitespace-nowrap">Weight</td>
                      <td v-for="product in desiccantProducts" :key="product.id" class="py-2 px-1.5 text-center font-medium text-white whitespace-nowrap">{{ product.weight }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Works Below 0°C</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Unlike compressor units, desiccant rotors operate effectively in cold storage where compressor dehumidifiers fail completely.</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Ultra-Low RH Control</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Achieves and maintains humidity below 30% RH. Ideal for seed banks, pharmaceutical storage, and museum archives.</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">PLC Touchscreen Control</h4>
            <p class="text-gray-600 text-xs leading-relaxed">RY-200 features full touchscreen PLC with Modbus RS485, alarm history, and multi-language support.</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-xs font-semibold text-gray-500 self-center mr-1">Typical Applications:</span>
          <span v-for="scene in desiccantScenes" :key="scene" class="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full">{{ scene }}</span>
        </div>

        <a
          v-if="desiccantDatasheet"
          :href="desicnantDatasheet"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-dark-900 hover:bg-dark-800 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
        >
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Download Datasheet
        </a>
        <span v-else class="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-100 text-gray-400 text-sm font-semibold rounded-lg cursor-not-allowed">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
          </svg>
          Datasheet Coming Soon
        </span>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-4"><div class="border-t border-gray-200"></div></div>

    <!-- ═══════════════════════════════════════════════════ -->
    <!-- SECTION 5: HUMIDIFIERS                           -->
    <!-- ═══════════════════════════════════════════════════ -->
    <section id="humidifiers" class="py-12 lg:py-16 bg-white" ref="section-humidifiers">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <span class="text-2xl">🌫️</span>
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark-900">Humidifiers</h2>
            <p class="text-gray-500 text-sm">Ultrasonic and evaporative systems for precise moisture control</p>
          </div>
        </div>
        <p class="text-gray-600 max-w-4xl leading-relaxed">
          Our humidifier lineup includes compact ultrasonic units for small grow tents and high-capacity evaporative systems for large-scale greenhouse operations. All units feature adjustable humidity control and automatic water management for unattended operation.
        </p>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Single Image + Full Spec Table -->
        <div v-if="humidifiersData.length > 0" class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl overflow-hidden mb-6">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="bg-gray-50 flex items-center justify-center min-h-[260px] p-6">
              <img
                :src="humidifiersData[0].image"
                :alt="humidifiersData[0].model"
                class="max-h-64 max-w-full object-contain rounded-xl shadow-sm"
                loading="lazy"
                @error="$event.target.style.display='none'"
              />
            </div>
            <div class="p-4 lg:p-6">
              <h3 class="text-lg font-bold text-dark-900 mb-4">Specifications — GROW Humidifier Series</h3>
              <div class="overflow-x-auto">
                <table class="w-full text-xs">
                  <thead>
                    <tr class="border-b border-blue-200">
                      <th class="py-2 pr-2 text-left font-semibold text-dark-900 whitespace-nowrap">Model</th>
                      <th v-for="product in humidifiersData" :key="product.id" class="py-2 px-1 text-center font-semibold text-dark-900 whitespace-nowrap">{{ product.model }}</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-gray-100">
                    <tr>
                      <td class="py-2 pr-2 text-gray-600 whitespace-nowrap">Capacity</td>
                      <td v-for="product in humidifiersData" :key="product.id" class="py-2 px-1 text-center font-medium text-dark-900 whitespace-nowrap">{{ product.capacity }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-2 text-gray-600 whitespace-nowrap">Power</td>
                      <td v-for="product in humidifiersData" :key="product.id" class="py-2 px-1 text-center font-medium text-dark-900 whitespace-nowrap">{{ product.power }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-2 text-gray-600 whitespace-nowrap">Voltage</td>
                      <td v-for="product in humidifiersData" :key="product.id" class="py-2 px-1 text-center font-medium text-dark-900 whitespace-nowrap">{{ product.voltage }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-2 text-gray-600 whitespace-nowrap">Air Volume</td>
                      <td v-for="product in humidifiersData" :key="product.id" class="py-2 px-1 text-center font-medium text-dark-900 whitespace-nowrap">{{ product.airVolume }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-2 text-gray-600 whitespace-nowrap">Steam Vent</td>
                      <td v-for="product in humidifiersData" :key="product.id" class="py-2 px-1 text-center font-medium text-dark-900 whitespace-nowrap">{{ product.steamVent }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-2 text-gray-600 whitespace-nowrap">Coverage</td>
                      <td v-for="product in humidifiersData" :key="product.id" class="py-2 px-1 text-center font-medium text-dark-900 whitespace-nowrap">{{ product.coverage }}</td>
                    </tr>
                    <tr>
                      <td class="py-2 pr-2 text-gray-600 whitespace-nowrap">Weight</td>
                      <td v-for="product in humidifiersData" :key="product.id" class="py-2 px-1 text-center font-medium text-dark-900 whitespace-nowrap">{{ product.weight }}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Precision Humidity Control</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Built-in hygrostat automatically modulates output to maintain target RH levels without overshooting.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Multiple Mist Options</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Ultrasonic for fine mist in sensitive environments; evaporative for large-area coverage and cooling effect.</p>
          </div>
          <div class="bg-gray-50 rounded-xl p-4">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Auto Water Management</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Direct water inlet connection for continuous operation. Float valve prevents overflow. Low-water shutoff protects the unit.</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-xs font-semibold text-gray-500 self-center mr-1">Typical Applications:</span>
          <span v-for="scene in humidifierScenes" :key="scene" class="px-3 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-xs rounded-full">{{ scene }}</span>
        </div>

        <RouterLink
          to="/contact"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
        >
          Request a Quote
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </RouterLink>
      </div>
    </section>

    <!-- Divider -->
    <div class="max-w-7xl mx-auto px-4"><div class="border-t border-gray-200"></div></div>

    <!-- ═══════════════════════════════════════════════════ -->
    <!-- SECTION 6: FANS & VENTILATION                     -->
    <!-- ═══════════════════════════════════════════════════ -->
    <section id="ventilation" class="py-12 lg:py-16 bg-gray-50" ref="section-ventilation">

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div class="flex items-center gap-4 mb-3">
          <div class="w-12 h-12 bg-cyan-600 rounded-xl flex items-center justify-center flex-shrink-0">
            <span class="text-2xl">💨</span>
          </div>
          <div>
            <h2 class="text-2xl lg:text-3xl font-bold text-dark-900">Fans & Ventilation</h2>
            <p class="text-gray-500 text-sm">Air circulation and climate control for controlled-environment agriculture</p>
          </div>
        </div>
        <p class="text-gray-600 max-w-4xl leading-relaxed">
          Our ventilation and air conditioning solutions ensure uniform temperature, CO₂ distribution, and air exchange in vertical farms, grow rooms, and container farms. Designed for 24/7 operation with precise temperature control.
        </p>
      </div>

      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <!-- Dynamic Ventilation Product -->
        <div v-if="ventilationData.length > 0" class="bg-gradient-to-br from-gray-900 to-dark-800 rounded-2xl overflow-hidden mb-6 text-white">
          <div class="grid grid-cols-1 lg:grid-cols-2">
            <div class="bg-gray-800 aspect-square lg:aspect-auto flex items-center justify-center min-h-[260px]">
              <div class="text-center p-8">
                <div class="text-5xl mb-3">❄️</div>
                <p class="text-gray-400 text-sm">{{ ventilationData[0]?.model }} Industrial</p>
              </div>
            </div>
            <div class="p-6 lg:p-8">
              <h3 class="text-lg font-bold mb-4">{{ ventilationData[0]?.model }} {{ ventilationData[0]?.series }}</h3>
              <table class="w-full text-sm">
                <tbody class="divide-y divide-gray-700">
                  <tr><td class="py-2.5 pr-4 text-gray-400 font-medium">Cooling Capacity</td><td class="py-2.5 pl-4 text-center font-medium text-white">{{ ventilationData[0]?.cooling }}</td></tr>
                  <tr><td class="py-2.5 pr-4 text-gray-400 font-medium">Power Input</td><td class="py-2.5 pl-4 text-center font-medium text-white">{{ ventilationData[0]?.power }}</td></tr>
                  <tr><td class="py-2.5 pr-4 text-gray-400 font-medium">Refrigerant</td><td class="py-2.5 pl-4 text-center font-medium text-white">{{ ventilationData[0]?.refrigerant }}</td></tr>
                  <tr><td class="py-2.5 pr-4 text-gray-400 font-medium">Airflow</td><td class="py-2.5 pl-4 text-center font-medium text-white">{{ ventilationData[0]?.airflow }}</td></tr>
                  <tr><td class="py-2.5 pr-4 text-gray-400 font-medium">Noise Level</td><td class="py-2.5 pl-4 text-center font-medium text-white">{{ ventilationData[0]?.noise }}</td></tr>
                  <tr><td class="py-2.5 pr-4 text-gray-400 font-medium">Dimensions</td><td class="py-2.5 pl-4 text-center font-medium text-white">{{ ventilationData[0]?.dimensions }}</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Precision Temperature Control</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Maintains temperature within ±0.5°C of setpoint. Essential for climate-sensitive crops and research environments.</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">Eco-Friendly R410A</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Zero ODP refrigerant with low GWP. Compliant with EU F-Gas Regulation and EPA SNAP program requirements.</p>
          </div>
          <div class="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h4 class="font-bold text-dark-900 mb-1.5 text-sm">CE Certified</h4>
            <p class="text-gray-600 text-xs leading-relaxed">Full CE certification for European markets. Remote control and alarm outputs for BMS integration.</p>
          </div>
        </div>

        <div class="flex flex-wrap gap-2 mb-4">
          <span class="text-xs font-semibold text-gray-500 self-center mr-1">Typical Applications:</span>
          <span v-for="scene in ventilationScenes" :key="scene" class="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs rounded-full">{{ scene }}</span>
        </div>

        <RouterLink
          to="/products/ventilation"
          class="inline-flex items-center gap-2 px-5 py-2.5 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold rounded-lg transition-colors shadow-sm"
        >
          View All Ventilation Products
          <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path stroke-linecap="round" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
          </svg>
        </RouterLink>
      </div>
    </section>

    <!-- Inquiry CTA -->
    <section class="py-12 bg-brand-600">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-2xl lg:text-3xl font-bold text-white mb-3">Need a Custom Solution?</h2>
        <p class="text-brand-100 mb-6">Tell us your space dimensions, target humidity, and application — our engineers will specify the right model or design a custom OEM unit.</p>
        <RouterLink to="/contact" class="inline-flex items-center px-8 py-4 bg-white text-brand-700 font-bold rounded-xl hover:bg-brand-50 transition-colors">
          Get a Custom Quote
        </RouterLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useSEO } from '@/composables/useSEO'
import { dehumidifiers, humidifiers, ventilation } from '../data/cms/index.js'

useSEO({
  title: 'Dehumidifiers & Humidifiers — GrowClimate',
  description: 'Portable, floor-standing, ceiling duct, and desiccant dehumidifiers plus industrial humidifiers. R290/R32, Modbus, CE/UL certified. OEM/ODM.',
  keywords: 'industrial dehumidifier, greenhouse dehumidifier, desiccant dehumidifier, portable dehumidifier commercial, ceiling duct dehumidifier, industrial humidifier, R290 dehumidifier, Modbus dehumidifier',
  url: 'https://growclimate.com/products',
})

// Load CMS data
const dehumidifiersData = dehumidifiers
const humidifiersData = humidifiers
const ventilationData = ventilation

// Filter products by category
const portableProducts = computed(() => 
  dehumidifiersData.filter(p => p.category === 'portable')
)

const floorProducts = computed(() => 
  dehumidifiersData.filter(p => p.category === 'floor')
)

const ceilingProducts = computed(() => 
  dehumidifiersData.filter(p => p.category === 'ceiling')
)

const desiccantProducts = computed(() => 
  dehumidifiersData.filter(p => p.category === 'desiccant')
)

const sections = [
  { id: 'portable', name: 'Portable', emoji: '💧' },
  { id: 'floor', name: 'Floor Standing', emoji: '🏭' },
  { id: 'ceiling', name: 'Ceiling & Duct', emoji: '🏗️' },
  { id: 'desiccant', name: 'Desiccant', emoji: '⚙️' },
  { id: 'humidifiers', name: 'Humidifiers', emoji: '🌫️' },
  { id: 'ventilation', name: 'Ventilation', emoji: '💨' },
]

const activeSection = ref('portable')

const scrollToSection = (id) => {
  const el = document.getElementById(id)
  if (el) {
    const offset = 80
    const top = el.getBoundingClientRect().top + window.scrollY - offset
    window.scrollTo({ top, behavior: 'smooth' })
    activeSection.value = id
  }
}

// Intersection Observer to highlight active section on scroll
let observer = null

onMounted(() => {
  // Check for hash in URL on load
  const hash = window.location.hash.replace('#', '')
  if (hash && sections.find(s => s.id === hash)) {
    setTimeout(() => scrollToSection(hash), 100)
  }

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          activeSection.value = entry.target.id
        }
      })
    },
    {
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    }
  )

  sections.forEach(sec => {
    const el = document.getElementById(sec.id)
    if (el) observer.observe(el)
  })
})

onUnmounted(() => {
  if (observer) observer.disconnect()
})

const portableScenes = ['Indoor Grow Room', 'Small Greenhouse', 'Propagation Chamber', 'Herb Garden']
const floorScenes = ['Large Greenhouse', 'Warehouse Growing', 'Vertical Farm', 'Commercial Mushroom Farm']
const ceilingScenes = ['Commercial Greenhouse', 'Cannabis Grow Facility', 'Vertical Farm', 'Large Mushroom House']
const desiccantScenes = ['Seed Storage', 'Cold Storage', 'Fruit Drying Room', 'Pharmaceutical Storage']
const humidifierScenes = ['Hydroponics', 'Tissue Culture Lab', 'Greenhouse', 'Grow Tent', 'Herb Garden']
const ventilationScenes = ['Climate-Controlled Grow Room', 'Container Farm', 'Vertical Farm', 'Indoor Farm']

const portableDatasheet = null
const floorDatasheet = null
const desiccantDatasheet = null
</script>
