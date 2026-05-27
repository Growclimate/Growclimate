<template>
  <div class="contact-page">

    <!-- Hero -->
    <section class="bg-gradient-to-br from-dark-900 via-dark-800 to-brand-900 py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl lg:text-5xl font-black text-white mb-4">Contact Us</h1>
        <p class="text-gray-300 text-lg max-w-2xl mx-auto">Tell us about your project. Our application engineers respond to all inquiries within 24 hours on business days.</p>
      </div>
    </section>

    <!-- Content -->
    <section class="py-12 lg:py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-12">

          <!-- Contact Info -->
          <div class="lg:col-span-2 space-y-8">
            <div>
              <h2 class="text-2xl font-bold text-dark-900 mb-4">Get in Touch</h2>
              <p class="text-gray-600 leading-relaxed">Whether you need a quick product quote, a full climate load calculation, or a custom OEM proposal — we're here to help.</p>
            </div>

            <div class="space-y-5">
              <div v-for="info in contactInfo" :key="info.label" class="flex items-start gap-4">
                <div class="w-10 h-10 bg-brand-100 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                  <component :is="info.icon" class="w-5 h-5 text-brand-600" />
                </div>
                <div>
                  <div class="font-semibold text-dark-900 mb-0.5">{{ info.label }}</div>
                  <div v-html="info.value" class="text-gray-600 text-sm leading-relaxed"></div>
                </div>
              </div>
            </div>

            <!-- Response Time -->
            <div class="bg-brand-50 rounded-xl p-5 border border-brand-100">
              <div class="flex items-center gap-2 mb-2">
                <span class="w-2 h-2 bg-brand-500 rounded-full animate-pulse"></span>
                <span class="font-semibold text-dark-900 text-sm">Response Time</span>
              </div>
              <p class="text-gray-600 text-sm">Our team typically responds within <strong>4 business hours</strong>. For urgent projects, please include "URGENT" in your message.</p>
            </div>

            <!-- Social -->
            <div>
              <p class="font-semibold text-dark-900 mb-3">Follow Us</p>
              <div class="flex gap-3">
                <a href="https://www.facebook.com/GrowClimateOfficial" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 hover:bg-brand-600 rounded-full flex items-center justify-center transition-colors">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/growclimate" target="_blank" rel="noopener noreferrer" class="w-10 h-10 bg-gray-800 hover:bg-brand-600 rounded-full flex items-center justify-center transition-colors">
                  <svg width="18" height="18" fill="white" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Inquiry Form -->
          <div class="lg:col-span-3">
            <div class="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 lg:p-8">
              <h2 class="text-xl font-bold text-dark-900 mb-1">Send Us an Inquiry</h2>
              <p class="text-gray-500 text-sm mb-6">Fill out the form below and our team will get back to you within 24 hours.</p>

              <form @submit.prevent="submitForm" class="space-y-5">

                <!-- Company Name -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                    Company Name <span class="text-red-500">*</span>
                  </label>
                  <input
                    v-model="form.company"
                    type="text"
                    placeholder="Your company or organization"
                    required
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    :class="errors.company ? 'border-red-400' : ''"
                  />
                  <p v-if="errors.company" class="text-red-500 text-xs mt-1">{{ errors.company }}</p>
                </div>

                <!-- Contact Name & Email -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                      Contact Name <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="Full name"
                      required
                      class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                      Email Address <span class="text-red-500">*</span>
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="work@company.com"
                      required
                      class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                    />
                  </div>
                </div>

                <!-- Phone -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                    Phone / WhatsApp <span class="text-gray-400 font-normal">(optional)</span>
                  </label>
                  <input
                    v-model="form.phone"
                    type="tel"
                    placeholder="+86 571 8888 8888"
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                  />
                </div>

                <!-- Application / Project Details -->
                <div>
                  <label class="block text-sm font-semibold text-gray-700 mb-1.5">
                    Application / Project Details <span class="text-red-500">*</span>
                  </label>
                  <textarea
                    v-model="form.application"
                    rows="5"
                    placeholder="Describe your project: application (greenhouse, mushroom farm, seed storage, etc.), space size, current humidity/temperature challenges, target climate, and any specific requirements (Modbus integration, certifications needed, etc.)"
                    required
                    class="w-full px-4 py-2.5 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors resize-none"
                  ></textarea>
                </div>

                <!-- Submit -->
                <button
                  type="submit"
                  :disabled="submitting"
                  class="w-full py-3.5 rounded-xl font-bold text-white text-base transition-all flex items-center justify-center gap-2"
                  :class="submitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand-600 hover:bg-brand-700 shadow-sm'"
                >
                  <span v-if="submitting">
                    <svg class="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
                    </svg>
                  </span>
                  <span v-if="submitting">Sending...</span>
                  <span v-else>Send Inquiry</span>
                </button>

                <!-- Success Message -->
                <div v-if="success" class="p-4 bg-green-50 border border-green-200 rounded-xl text-center">
                  <p class="text-green-700 font-semibold text-sm">Thank you! Your inquiry has been sent.</p>
                  <p class="text-green-600 text-xs mt-1">We will respond within 24 business hours.</p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import { h } from 'vue'
import { useSEO } from '@/composables/useSEO'

useSEO({
  title: 'Contact GrowClimate — Get a Quote for Climate Control Solutions',
  description: 'Contact GrowClimate for OEM dehumidifier quotes, climate control consulting, and technical support. Response within 24 hours. Serving greenhouse and indoor farming operations worldwide.',
  keywords: 'contact GrowClimate, dehumidifier quote, OEM dehumidifier inquiry, climate control consultation, greenhouse equipment supplier, industrial dehumidifier manufacturer',
  url: 'https://growclimate.com/contact',
})

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  application: ''
})

const errors = reactive({})
const submitting = ref(false)
const success = ref(false)

const contactInfo = [
  {
    label: 'Email',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' }, [h('path', { strokeLinecap: 'round', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })]) },
    value: '<a href="mailto:info@growclimate.com" class="text-brand-600 hover:text-brand-700 font-medium">info@growclimate.com</a>'
  },
  {
    label: 'Phone / WhatsApp',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' }, [h('path', { strokeLinecap: 'round', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })]) },
    value: '<a href="tel:+8657188888888" class="text-gray-600">+86 571 8888 8888</a>'
  },
  {
    label: 'Location',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' }, [h('path', { strokeLinecap: 'round', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }), h('path', { strokeLinecap: 'round', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })]) },
    value: 'Hangzhou, Zhejiang, China'
  },
  {
    label: 'Business Hours',
    icon: { render: () => h('svg', { fill: 'none', stroke: 'currentColor', strokeWidth: 2, viewBox: '0 0 24 24' }, [h('path', { strokeLinecap: 'round', d: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' })]) },
    value: 'Mon–Fri: 09:00–18:00 CST (UTC+8)'
  }
]

const submitForm = async () => {
  Object.keys(errors).forEach(k => delete errors[k])
  if (!form.company.trim()) errors.company = 'Company name is required'
  if (!form.name.trim()) errors.name = 'Contact name is required'
  if (!form.email.trim()) errors.email = 'Email is required'
  if (!form.application.trim()) errors.application = 'Please describe your project'

  if (Object.keys(errors).length > 0) return

  submitting.value = true
  // In production: connect to Netlify Forms, Formspree, or backend API
  await new Promise(resolve => setTimeout(resolve, 1500))
  submitting.value = false
  success.value = true

  Object.assign(form, { company: '', name: '', email: '', phone: '', application: '' })
  setTimeout(() => { success.value = false }, 8000)
}
</script>
