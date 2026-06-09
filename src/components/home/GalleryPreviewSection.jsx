import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X } from 'lucide-react'

const previewImages = [
  { src: '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.53 AM (1).jpeg', category: 'Property' },
  { src: '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.54 AM (1).jpeg', category: 'Villa' },
  { src: '/images/Swimming_Pool/WhatsApp Image 2026-06-09 at 11.53.55 AM (1).jpeg', category: 'Pool' },
  { src: '/images/Swimming_Pool/WhatsApp Image 2026-06-09 at 11.53.56 AM.jpeg', category: 'Events' },
  { src: '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.58 AM (3).jpeg', category: 'Weddings' },
  { src: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.45 AM (2).jpeg', category: 'Property' },
  { src: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.47 AM (2).jpeg', category: 'Villa' },
  { src: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.50 AM (1).jpeg', category: 'Events' },
  { src: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.53 AM (1).jpeg', category: 'Property' },
]

export default function GalleryPreviewSection() {
  const [lightbox, setLightbox] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredImages = selectedCategory === 'All'
    ? previewImages
    : previewImages.filter(img => img.category === selectedCategory)

  return (
    <section className="section-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="section-label mb-2">Gallery</p>
          <div className="leaf-ornament my-4">
            <div className="leaf-line" />
            <span style={{ fontSize: '0.85rem' }}>🍃</span>
            <div className="leaf-line-right" />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)' }}>
            A Glimpse of Paradise
          </h2>
        </div>

        {/* Filter Category Bar */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 border-b border-[rgba(212,175,55,0.15)] pb-4">
          {['All', 'Property', 'Villa', 'Pool', 'Events', 'Weddings'].map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Uniform Grid Preview with Layout Animations */}
        <motion.div layout className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.div
                layout
                key={img.src}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.45 }}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-500"
                style={{ aspectRatio: '4/3' }}
                onClick={() => setLightbox(img.src)}
              >
                <img src={img.src} alt={img.category} loading="lazy" decoding="async" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[rgba(13,59,42,0.55)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
                  <ZoomIn size={24} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'white', textTransform: 'uppercase' }}>
                    {img.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="text-center mt-4">
          <Link to="/gallery" className="btn-link-primary">
            View Full Gallery <span style={{ color: 'var(--gold)', marginLeft: '4px' }}>→</span>
          </Link>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.5rem' }}
            >
              <X size={28} />
            </button>
            <motion.img
              src={lightbox}
              alt="Gallery"
              className="lightbox-img"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={e => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
