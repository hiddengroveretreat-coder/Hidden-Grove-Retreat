import { useState } from 'react'
import useSEO from '../hooks/useSEO'
import { motion, AnimatePresence } from 'framer-motion'
import { ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'

const categories = ['All', 'Heritage Villa', 'Hobbit Villa', 'Lawn', 'Pool', 'Games', 'Events']

const images = [
  // ── Heritage Villa ──
  { src: '/Heritage villa/Heritage villa/Heritage Villa outlook.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Heritge Villa Front lawn.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Hall area.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Dinning area.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Kitchen.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bedroom-1.PNG', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bedroom-1.2.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bedroom-2.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/bedroom-2.1.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bedroom-3.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/bedroom-3.1.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bedroom-3.2.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bedroom-4.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bedroom-4.1.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Games room.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/snooker area.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/foosball.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Sitout area.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bathrooms/Bathroom-1.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bathrooms/bathroom-2.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bathrooms/Bathroom-3.png', cat: 'Heritage Villa' },
  { src: '/Heritage villa/Heritage villa/Bathrooms/Bathroom-4.png', cat: 'Heritage Villa' },

  // ── Hobbit Villa ──
  { src: '/Hobbit Villa/Hobbit Villa/Hobbit Villa.png', cat: 'Hobbit Villa' },
  { src: '/Hobbit Villa/Hobbit Villa/Hobbit villa main entrance-1.png', cat: 'Hobbit Villa' },
  { src: '/Hobbit Villa/Hobbit Villa/hobbit villa back view.png', cat: 'Hobbit Villa' },
  { src: '/Hobbit Villa/Hobbit Villa/Hall-1.png', cat: 'Hobbit Villa' },
  { src: '/Hobbit Villa/Hobbit Villa/Hall-1.1.png', cat: 'Hobbit Villa' },
  { src: '/Hobbit Villa/Hobbit Villa/Hall-1.2.png', cat: 'Hobbit Villa' },
  { src: '/Hobbit Villa/Hobbit Villa/Bedroom-1.png', cat: 'Hobbit Villa' },
  { src: '/Hobbit Villa/Hobbit Villa/Bedroom-2.png', cat: 'Hobbit Villa' },
  { src: '/Hobbit Villa/Hobbit Villa/Kitchen.png', cat: 'Hobbit Villa' },

  { src: '/Lawn area/Lawn area/Lawn-1/Lawn-1.png', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-1/Lawn-1.1.png', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-1/Lawn-1.2.png', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-1/Lawn-1.3.png', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-1/Lawn-1.4.png', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-1/Lawn-1.5.PNG', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-1/Lawn-1.6.PNG', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-2/Lawn-2.png', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-2/Lawn-2.1.png', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-2/Lawn-2.2.PNG', cat: 'Lawn' },
  { src: '/Lawn area/Lawn area/Lawn-2/Lawn2.3-Tree house.PNG', cat: 'Lawn' },

  // ── Swimming Pool ──
  { src: '/Swimming pool/Swimming pool/ChatGPT Image Jun 9, 2026 at 08_06_38 PM.png', cat: 'Pool' },
  { src: '/Swimming pool/Swimming pool/ChatGPT Image Jun 9, 2026 at 08_08_09 PM.png', cat: 'Pool' },
  { src: '/Swimming pool/Swimming pool/ChatGPT Image Jun 9, 2026 at 08_09_31 PM.png', cat: 'Pool' },

  { src: '/Heritage villa/Heritage villa/Games room.png', cat: 'Games' },
  { src: '/Heritage villa/Heritage villa/snooker area.png', cat: 'Games' },
  { src: '/Heritage villa/Heritage villa/foosball.png', cat: 'Games' },

  { src: '/Events/Event-1.png', cat: 'Events' },
  { src: '/Events/Event-2.png', cat: 'Events' },
  { src: '/Events/Event-3.png', cat: 'Events' },
  { src: '/Events/Event-4.jpeg', cat: 'Events' },
  { src: '/Events/Event-5.png', cat: 'Events' },
  { src: '/Events/Event-6.jpeg', cat: 'Events' },
  { src: '/Events/Event-7.jpeg', cat: 'Events' },
]

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useSEO({
    title: 'Gallery | Hidden Grove Retreat | Villas, Pool & Lawns in Hyderabad',
    description: 'Browse the photo gallery of Hidden Grove Retreat - stunning views of the Heritage Villa, Hobbit Villa, private swimming pool, event lawns, gardens, and more near Hyderabad.',
    path: '/gallery',
  })


  const filtered = activeCategory === 'All' ? images : images.filter(img => img.cat === activeCategory)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const prevImg = () => setLightboxIndex(i => (i - 1 + filtered.length) % filtered.length)
  const nextImg = () => setLightboxIndex(i => (i + 1) % filtered.length)

  return (
    <>
      <PageHero
        title="Moments Captured in Paradise"
        subtitle="Explore the beauty of our private oasis"
        img="/Lawn area/Lawn area/Lawn-1/Lawn-1.png"
      />

      {/* Gallery */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '0.55rem 1.25rem',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? 'var(--gold)' : 'rgba(13,59,42,0.2)',
                  background: activeCategory === cat ? 'var(--gold)' : 'transparent',
                  color: activeCategory === cat ? '#111' : 'var(--primary)',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <motion.div layout className="columns-2 md:columns-3 lg:columns-4 gap-3 space-y-3" style={{ columnGap: '12px' }}>
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.src}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  className="relative group overflow-hidden cursor-pointer mb-3 break-inside-avoid"
                  onClick={() => openLightbox(i)}
                >
                  <img
                    src={img.src}
                    alt={img.cat}
                    loading="lazy"
                    className="w-full block transition-transform duration-500 group-hover:scale-105"
                    style={{ display: 'block' }}
                  />
                  <div className="absolute inset-0 bg-[rgba(13,59,42,0.55)] opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                    <ZoomIn size={24} style={{ color: 'var(--gold)' }} />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', color: 'white', textTransform: 'uppercase' }}>{img.cat}</span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button onClick={closeLightbox} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.5rem' }}>
              <X size={28} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); prevImg() }} style={{ position: 'absolute', left: '1rem', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.75rem' }}>
              <ChevronLeft size={28} />
            </button>
            <motion.img
              key={lightboxIndex}
              src={filtered[lightboxIndex].src}
              alt=""
              className="lightbox-img"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              onClick={e => e.stopPropagation()}
            />
            <button onClick={(e) => { e.stopPropagation(); nextImg() }} style={{ position: 'absolute', right: '1rem', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.75rem' }}>
              <ChevronRight size={28} />
            </button>
            <div style={{ position: 'absolute', bottom: '1.5rem', left: '50%', transform: 'translateX(-50%)', fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', letterSpacing: '0.2em', color: 'rgba(255,255,255,0.6)' }}>
              {lightboxIndex + 1} / {filtered.length} - {filtered[lightboxIndex].cat}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
