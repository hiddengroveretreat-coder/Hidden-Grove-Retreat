import { useState } from 'react'
import useSEO from '../hooks/useSEO'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'

const BASE = '/Heritage villa/Heritage villa'

const features = [
  'Grand Hall', 'Dining Area', 'Fully Functional Kitchen',
  '4 Bedrooms', 'Attached Bathrooms', 'Indoor Games Room',
  'Private Entrance', 'Premium Furnishings', 'Air Conditioning',
  'Smart TV', 'High-speed WiFi', 'Dedicated Parking',
]

// ── Room sections with their images & descriptions ───────────────────
const roomSections = [
  {
    id: 'exterior',
    label: 'Exterior',
    title: 'Grand Colonial Architecture',
    desc: 'The Heritage Villa stands as a masterpiece of colonial-inspired design. Surrounded by 1 acre of manicured gardens, it features a spacious sitout area, private gated entrance, and beautiful views of the front lawn.',
    highlights: ['Colonial Architecture', 'Lush Gardens', 'Private Entrance', 'Sit-out Gazebo'],
    images: [
      { src: `${BASE}/Heritage Villa outlook.png`,     alt: 'Heritage Villa Outlook - Main View' },
      { src: `${BASE}/Heritge Villa Front lawn.png`,   alt: 'Heritage Villa Front Lawn' },
      { src: `${BASE}/Sitout area.png`,                alt: 'Heritage Villa Sitout Area' },
    ],
  },
  {
    id: 'living',
    label: 'Hall & Dining',
    title: 'Spacious Common Spaces',
    desc: 'Designed for family gatherings and celebrations, the villa offers a grand double-height hall, an elegant formal dining area, and a fully functional kitchen equipped for custom catering.',
    highlights: ['Grand Reception Hall', 'Double-Height Ceiling', 'Formal Dining Table', 'Functional Kitchen'],
    images: [
      { src: `${BASE}/Hall area.png`,    alt: 'Heritage Villa Grand Hall' },
      { src: `${BASE}/Dinning area.png`, alt: 'Heritage Villa Dining Area' },
      { src: `${BASE}/Kitchen.png`,      alt: 'Heritage Villa Kitchen' },
    ],
  },
  {
    id: 'bedrooms',
    label: 'Bedrooms',
    title: 'Colonial Luxury Suites',
    desc: 'Four palatial, air-conditioned suites offering ultimate comfort. Each bedroom is styled with premium linens, custom furniture, large wardrobes, and modern en-suite en-suite en-suite en-suite en-suite bathrooms.',
    highlights: ['Air Conditioning', 'Attached Bathrooms', 'Plush Bedding', 'Vintage Furnishings'],
    images: [
      { src: `${BASE}/Bedroom-1.PNG`,    alt: 'Bedroom 1' },
      { src: `${BASE}/Bedroom-1.2.png`,  alt: 'Bedroom 1 - View 2' },
      { src: `${BASE}/Bedroom-2.png`,    alt: 'Bedroom 2' },
      { src: `${BASE}/bedroom-2.1.png`,  alt: 'Bedroom 2 - View 2' },
      { src: `${BASE}/Bedroom-3.png`,    alt: 'Bedroom 3' },
      { src: `${BASE}/bedroom-3.1.png`,  alt: 'Bedroom 3 - View 2' },
      { src: `${BASE}/Bedroom-3.2.png`,  alt: 'Bedroom 3 - View 3' },
      { src: `${BASE}/Bedroom-4.png`,    alt: 'Bedroom 4' },
      { src: `${BASE}/Bedroom-4.1.png`,  alt: 'Bedroom 4 - View 2' },
    ],
  },
  {
    id: 'bathrooms',
    label: 'Bathrooms',
    title: 'Premium En-Suites',
    desc: 'Four en-suite bathrooms styled with modern tiles, premium sanity ware, clean fixtures, and warm lighting to ensure a relaxing experience.',
    highlights: ['En-suite Layout', 'Premium Sanitaryware', 'Modern Fittings', 'Essential Amenities'],
    images: [
      { src: `${BASE}/Bathrooms/Bathroom-1.png`,  alt: 'Bathroom 1' },
      { src: `${BASE}/Bathrooms/bathroom-2.png`,  alt: 'Bathroom 2' },
      { src: `${BASE}/Bathrooms/Bathroom-3.png`,  alt: 'Bathroom 3' },
      { src: `${BASE}/Bathrooms/Bathroom-4.png`,  alt: 'Bathroom 4' },
    ],
  },
  {
    id: 'games',
    label: 'Games Room',
    title: 'Indoor Recreation Zone',
    desc: 'A dedicated entertainment area featuring a professional snooker table, foosball, and indoor board games for late-night entertainment and team bonding.',
    highlights: ['Snooker Table', 'Foosball Table', 'Lounge Seating', 'Recreation Equipment'],
    images: [
      { src: `${BASE}/Games room.png`,    alt: 'Indoor Games Room' },
      { src: `${BASE}/snooker area.png`,  alt: 'Snooker Table' },
      { src: `${BASE}/foosball.png`,      alt: 'Foosball Table' },
    ],
  },
]

// Flatten all images for lightbox navigation
const allImages = roomSections.flatMap(s => s.images)

export default function HeritageVilla() {
  const [activeRoom, setActiveRoom] = useState('exterior')
  const [lightbox, setLightbox]     = useState(null)   // { src, alt }
  const [lbIndex, setLbIndex]       = useState(0)

  useSEO({
    title: 'Grand Heritage Villa | 4-Bedroom Colonial Stay | Hidden Grove Retreat',
    description: 'Stay at the Grand Heritage Villa - a 4-bedroom colonial-style luxury villa with grand hall, dining area, fully equipped kitchen, indoor games room, and stunning garden views at Hidden Grove Retreat near Hyderabad.',
    path: '/villas/heritage',
    image: 'https://www.hiddengroveretreat.com/Heritage%20villa/Heritage%20villa/Heritage%20Villa%20outlook.png',
  })

  const openLightbox = (img) => {
    const idx = allImages.findIndex(i => i.src === img.src)
    setLbIndex(idx >= 0 ? idx : 0)
    setLightbox(img)
  }

  const prevImg = (e) => {
    e.stopPropagation()
    const newIdx = (lbIndex - 1 + allImages.length) % allImages.length
    setLbIndex(newIdx)
    setLightbox(allImages[newIdx])
  }

  const nextImg = (e) => {
    e.stopPropagation()
    const newIdx = (lbIndex + 1) % allImages.length
    setLbIndex(newIdx)
    setLightbox(allImages[newIdx])
  }

  const currentSection = roomSections.find(s => s.id === activeRoom)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <PageHero
        title="Grand Colonial Elegance"
        img={`${BASE}/Heritage Villa outlook.png`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 mt-4 flex-wrap"
        >
          {['4 Bedrooms', 'Up to 15 Guests', 'Private Entrance', 'Games Room'].map(b => (
            <span
              key={b}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                padding: '0.4rem 1rem',
                background: 'rgba(212,175,55,0.2)',
                border: '1px solid rgba(212,175,55,0.5)',
                color: 'white',
              }}
            >
              {b}
            </span>
          ))}
        </motion.div>
      </PageHero>

      {/* ── Overview + Booking Sidebar ───────────────────────── */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Description */}
          <div className="lg:col-span-2">
            <p className="section-label mb-3">Overview</p>
            <div className="gold-divider-left mb-6" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>
              An Estate Steeped in Grandeur
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1rem' }}>
              The Heritage Villa is our flagship accommodation - a grand colonial-inspired estate that blends timeless architectural elegance with modern luxury. With 4 spacious bedrooms, each with attached bathrooms, it comfortably hosts up to 15 guests.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              The grand hall is perfect for family gatherings, the fully equipped kitchen lets you cook and celebrate, and the indoor games room (snooker + foosball) ensures entertainment for all ages. Ideal for large family stays, bachelor/bachelorette celebrations, and corporate retreats.
            </p>

            {/* Features */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
              Villa Features
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {features.map(f => (
                <div key={f} className="flex items-center gap-2">
                  <Check size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-body)' }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Booking Sidebar */}
          <div>
            <div style={{ position: 'sticky', top: '6rem', background: 'white', border: '1px solid rgba(212,175,55,0.25)', padding: '2rem', boxShadow: '0 20px 60px rgba(0,0,0,0.08)' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>Book Heritage Villa</p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Contact for Pricing</p>
              <div style={{ borderTop: '1px solid var(--beige-dark)', borderBottom: '1px solid var(--beige-dark)', padding: '1.25rem 0', marginBottom: '1.5rem' }}>
                {[
                  ['Bedrooms', '4'],
                  ['Max Guests', '15+'],
                  ['Bathrooms', '4 Attached'],
                  ['Games Room', 'Snooker + Foosball'],
                  ['Common Areas', 'Hall, Kitchen, Dining'],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center py-1.5">
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>{k}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', fontWeight: 600, color: 'var(--primary)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20book%20the%20Heritage%20Villa%20at%20Hidden%20Grove%20Retreat.%20Please%20share%20availability%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center mb-3"
              >
                Book via WhatsApp <ArrowRight size={14} />
              </a>
              <a href="tel:+919063999784" className="btn-outline w-full justify-center">
                Call to Inquire
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Room-by-Room Showcase ──────────────────────────────── */}
      <section className="section-light py-24 border-t border-[rgba(212,175,55,0.15)]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <p className="section-label">Interactive Tour</p>
            <div className="gold-divider mb-5" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)' }}>
              Explore the Spaces
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', color: 'var(--text-muted)', maxWidth: '500px', margin: '0.75rem auto 0' }}>
              Take a walk through each corner of the Heritage Villa
            </p>
          </div>

          {/* Room tab pills */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {roomSections.map(s => (
              <button
                key={s.id}
                onClick={() => setActiveRoom(s.id)}
                className={`filter-btn ${activeRoom === s.id ? 'active' : ''}`}
                style={{
                  padding: '0.65rem 1.6rem',
                  borderRadius: '0px',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Active section showcase - Split Screen */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeRoom}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
            >
              {/* Text Description - 5 columns */}
              <div className="lg:col-span-5 space-y-6">
                <p className="section-label" style={{ color: 'var(--gold)' }}>{currentSection.label} Description</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.75rem, 3vw, 2.2rem)', fontWeight: 700, color: 'var(--primary)' }}>
                  {currentSection.title}
                </h3>
                <div className="gold-divider-left" />
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.85, color: 'var(--text-body)' }}>
                  {currentSection.desc}
                </p>
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[rgba(212,175,55,0.15)]">
                  {currentSection.highlights && currentSection.highlights.map(h => (
                    <div key={h} className="flex items-center gap-2">
                      <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>✦</span>
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 600, color: 'var(--primary)' }}>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Gallery Grid/Slider - 7 columns */}
              <div className="lg:col-span-7">
                <div className="grid grid-cols-6 gap-3">
                  {/* First main image */}
                  <div 
                    className="col-span-6 md:col-span-4 img-zoom-wrap relative cursor-pointer" 
                    style={{ aspectRatio: '4/3', border: '1px solid rgba(212,175,55,0.2)' }}
                    onClick={() => openLightbox(currentSection.images[0])}
                  >
                    <img 
                      src={currentSection.images[0].src} 
                      alt={currentSection.images[0].alt} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-103" 
                    />
                    <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                      <ZoomIn size={24} style={{ color: 'var(--gold)' }} />
                    </div>
                  </div>

                  {/* Rest of the images */}
                  <div className="col-span-6 md:col-span-2 grid grid-cols-2 md:grid-cols-1 gap-3">
                    {currentSection.images.slice(1, 3).map((img) => (
                      <div 
                        key={img.src} 
                        className="img-zoom-wrap relative cursor-pointer" 
                        style={{ aspectRatio: '4/3', border: '1px solid rgba(212,175,55,0.2)' }}
                        onClick={() => openLightbox(img)}
                      >
                        <img 
                          src={img.src} 
                          alt={img.alt} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-103" 
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
                          <ZoomIn size={18} style={{ color: 'var(--gold)' }} />
                        </div>
                      </div>
                    ))}
                    {currentSection.images.length > 3 && (
                      <div 
                        className="relative cursor-pointer overflow-hidden flex items-center justify-center bg-[#0D3B2A] text-white border border-[rgba(212,175,55,0.3)] hover:bg-[#124b36] transition-colors"
                        style={{ aspectRatio: '4/3' }}
                        onClick={() => openLightbox(currentSection.images[3])}
                      >
                        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', letterSpacing: '0.1em', fontWeight: 600 }}>
                          +{currentSection.images.length - 3} MORE PHOTOS
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── Lightbox with prev/next ───────────────────────────── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={() => setLightbox(null)}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.5rem', borderRadius: '0.25rem' }}
            >
              <X size={28} />
            </button>

            {/* Prev */}
            <button
              onClick={prevImg}
              style={{ position: 'absolute', left: '1rem', background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.75rem', borderRadius: '50%' }}
            >
              <ChevronLeft size={28} />
            </button>

            {/* Image */}
            <motion.div
              key={lightbox.src}
              initial={{ scale: 0.88, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.88, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={e => e.stopPropagation()}
              style={{ maxWidth: '90vw', maxHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="lightbox-img"
                style={{ maxHeight: '80vh', objectFit: 'contain' }}
              />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', letterSpacing: '0.15em', color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' }}>
                {lightbox.alt} - {lbIndex + 1} / {allImages.length}
              </p>
            </motion.div>

            {/* Next */}
            <button
              onClick={nextImg}
              style={{ position: 'absolute', right: '1rem', background: 'rgba(255,255,255,0.12)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.75rem', borderRadius: '50%' }}
            >
              <ChevronRight size={28} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
