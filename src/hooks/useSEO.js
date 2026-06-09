/**
 * useSEO - Custom hook for per-page SEO metadata management
 * Updates document title, meta description, canonical URL, and OpenGraph tags on route change.
 *
 * @param {object} options
 * @param {string} options.title       - Full browser tab title (e.g. "Villas | Hidden Grove Retreat")
 * @param {string} options.description - Meta description for search snippet (150-160 chars ideal)
 * @param {string} options.path        - Canonical URL path (e.g. "/villas/heritage")
 * @param {string} [options.image]     - Optional OG image override (absolute URL)
 */

const BASE_URL = 'https://www.hiddengroveretreat.com'

export default function useSEO({ title, description, path, image }) {
  const canonicalUrl = `${BASE_URL}${path}`
  const ogImage = image || `${BASE_URL}/images/logo.jpeg`

  // Helper: Get or create a <meta> tag by its attribute and value
  const setMeta = (attr, key, content) => {
    let el = document.querySelector(`meta[${attr}="${key}"]`)
    if (!el) {
      el = document.createElement('meta')
      el.setAttribute(attr, key)
      document.head.appendChild(el)
    }
    el.setAttribute('content', content)
  }

  // Helper: Get or create a <link> tag by rel attribute
  const setLink = (rel, href) => {
    let el = document.querySelector(`link[rel="${rel}"]`)
    if (!el) {
      el = document.createElement('link')
      el.setAttribute('rel', rel)
      document.head.appendChild(el)
    }
    el.setAttribute('href', href)
  }

  if (typeof window !== 'undefined') {
    // Page Title
    document.title = title

    // Meta description
    if (description) setMeta('name', 'description', description)

    // Canonical URL
    setLink('canonical', canonicalUrl)

    // OpenGraph
    setMeta('property', 'og:title', title)
    if (description) setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', ogImage)

    // Twitter Card
    setMeta('name', 'twitter:title', title)
    if (description) setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', ogImage)
  }
}
