import { useHead } from '@unhead/vue'

export function useSEO(options = {}) {
  const {
    title = 'GrowClimate — Climate Solutions for Growing',
    description = 'Professional climate control solutions for greenhouse, hydroponics, and indoor farming. Dehumidifiers, humidifiers, and ventilation systems.',
    keywords = 'dehumidifier, humidifier, greenhouse climate, grow room, indoor farming, hydroponics, climate control',
    image = 'https://growclimate.com/images/logo.png',
    url = 'https://growclimate.com',
    type = 'website',
    publishedTime = null,
    modifiedTime = null,
  } = options

  const fullTitle = title.includes('GrowClimate') ? title : `${title} | GrowClimate`
  const safeTitle = fullTitle.length > 60 ? fullTitle.substring(0, 57) + '...' : fullTitle

  useHead({
    title: safeTitle,
    meta: [
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'robots', content: 'index, follow' },
      { name: 'author', content: 'GrowClimate Global Trade Co., Ltd.' },
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'GrowClimate' },
      { property: 'og:locale', content: 'en_US' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:site', content: '@GrowClimate' },
      // Article specific
      ...(publishedTime ? [{ property: 'article:published_time', content: publishedTime }] : []),
      ...(modifiedTime ? [{ property: 'article:modified_time', content: modifiedTime }] : []),
      { property: 'article:author', content: 'GrowClimate' },
      // Additional
      { name: 'language', content: 'en' },
      { name: 'revisit-after', content: '7 days' },
    ],
    link: [
      { rel: 'canonical', href: url },
    ],
  })
}
