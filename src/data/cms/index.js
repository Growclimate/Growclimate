// CMS Data Loader
// Loads product data from CMS JSON files (synced from GitHub via Netlify CMS)

import dehumidifiersData from './products/dehumidifiers.json'
import humidifiersData from './products/humidifiers.json'
import ventilationData from './products/ventilation.json'
import contactData from './company/contact.json'
import aboutData from './company/about.json'

// Products by category
export const dehumidifiers = dehumidifiersData
export const humidifiers = humidifiersData
export const ventilation = ventilationData

// All products combined
export const allProducts = [
  ...dehumidifiersData,
  ...humidifiersData,
  ...ventilationData
]

// Get product by ID
export function getProductById(id) {
  return allProducts.find(p => p.id === id) || null
}

// Get products by category
export function getProductsByCategory(category) {
  switch (category) {
    case 'dehumidifiers':
      return dehumidifiersData
    case 'humidifiers':
      return humidifiersData
    case 'ventilation':
      return ventilationData
    default:
      return allProducts
  }
}

// Company info
export const contact = contactData
export const about = aboutData
