import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false
  },
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    crittersOptions: {
      reduceInlineStyles: false
    },
    includedRoutes: () => [
      '/',
      '/products',
      '/products/dehumidifiers',
      '/products/humidifiers',
      '/products/ventilation',
      '/applications',
      '/blog',
      '/blog/tomato-greenhouse-humidity-control',
      '/blog/ultimate-guide-greenhouse-grow-room-humidity-control',
      '/blog/greenhouse-humidity-management-guide',
      '/blog/vpd-explained',
      '/blog/desiccant-vs-compressor',
      '/blog/mushroom-farming-climate',
      '/blog/mushroom-growing-humidity-control',
      '/blog/greenhouse-condensation-prevention',
      '/blog/fruit-drying-science',
      '/blog/seed-storage-humidity',
      '/blog/cannabis-drying-guide',
      '/blog/vertical-farming-humidity',
      '/blog/r290-refrigerant-guide',
      '/blog/energy-saving-dehumidification',
      '/about',
      '/contact',
    ],
    onBeforePageRender(_, __, appCtx) {
      // Ensure head tags are rendered into the HTML
    }
  }
})
