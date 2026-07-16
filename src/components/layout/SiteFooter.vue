<template>
  <footer class="bg-dark-900 text-white">
    <!-- Main Footer -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">

        <!-- Brand Column -->
        <div class="lg:col-span-1">
          <RouterLink to="/" class="inline-block mb-4">
            <img src="/images/logo.png" alt="GrowClimate" class="h-20 w-auto" loading="lazy" />
          </RouterLink>
          <p class="text-gray-400 text-sm leading-relaxed mb-6">
            Precision climate control solutions for greenhouse, hydroponics, and indoor farming. Engineering reliability since day one.
          </p>
          <!-- Social Links -->
          <div class="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/GrowClimateOfficial"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/growclimate"
              target="_blank"
              rel="noopener noreferrer"
              class="w-9 h-9 rounded-full bg-gray-800 hover:bg-brand-600 flex items-center justify-center transition-colors"
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Products -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Products</h3>
          <ul class="space-y-2.5">
            <li class="text-gray-400 text-sm font-semibold">Dehumidifiers</li>
            <ul class="pl-3 space-y-1.5 mb-2">
              <li><RouterLink to="/products#portable" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Portable</RouterLink></li>
              <li><RouterLink to="/products#floor" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Floor Standing</RouterLink></li>
              <li><RouterLink to="/products#ceiling" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Ceiling & Duct</RouterLink></li>
              <li><RouterLink to="/products#desiccant" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Desiccant</RouterLink></li>
            </ul>
            <li><RouterLink to="/products?cat=humidifiers" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Humidifiers</RouterLink></li>
            <li><RouterLink to="/products?cat=ventilation" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Fans & Ventilation</RouterLink></li>
          </ul>
        </div>

        <!-- Applications -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Applications</h3>
          <ul class="space-y-2.5">
            <li><RouterLink to="/applications#greenhouse" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Greenhouse</RouterLink></li>
            <li><RouterLink to="/applications#hydroponics" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Hydroponics</RouterLink></li>
            <li><RouterLink to="/applications#mushroom" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Mushroom Farming</RouterLink></li>
            <li><RouterLink to="/applications#seed-storage" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Seed Storage</RouterLink></li>
            <li><RouterLink to="/applications#fruit-drying" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Fruit Drying</RouterLink></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-sm font-semibold text-white uppercase tracking-wider mb-4">Company</h3>
          <ul class="space-y-2.5">
            <li><RouterLink to="/about" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">About Us</RouterLink></li>
            <li><RouterLink to="/blog" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Blog</RouterLink></li>
            <li><RouterLink to="/contact" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Contact</RouterLink></li>
            <li><RouterLink to="/contact" class="text-gray-400 hover:text-brand-400 text-sm transition-colors">Get a Quote</RouterLink></li>
          </ul>
          <div class="mt-6">
            <p class="text-gray-500 text-xs">Email</p>
            <a href="mailto:info@growclimate.com" class="text-brand-400 hover:text-brand-300 text-sm transition-colors">info@growclimate.com</a>
          </div>
        </div>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="border-t border-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p class="text-gray-500 text-xs">
          &copy; {{ currentYear }} GrowClimate Global Trade Co., Ltd. All rights reserved.
        </p>
        <div class="flex items-center space-x-4">
          <a href="#" class="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</a>
          <span class="text-gray-700">|</span>
          <a href="#" class="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>
