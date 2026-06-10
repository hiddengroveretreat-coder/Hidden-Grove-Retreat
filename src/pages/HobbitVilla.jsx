import { useState } from 'react'
import useSEO from '../hooks/useSEO'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import { useBooking } from '../context/BookingContext'

const BASE = '/Hobbit Villa/Hobbit Villa'

const features = [
  'Nature-Inspired Architecture', 'Spacious Hall', 'Fully Equipped Kitchen',
  '2 Bedrooms', 'Common Bathroom', 'Attached Bathroom',
  'Green Covered Exterior', 'Garden Views', 'Outdoor Sitting Area', 'Cricket & Badminton Sets'
]

// ── Room sections with their images & descriptions ───────────────────
const roomSections = [
  {
    id: 'exterior',
    label: 'Exterior',
    title: 'Charming Turf-Covered Hideaway',
    desc: 'Inspired by the whimsical aesthetics of nature, the Hobbit Villa features a unique grass-covered exterior structure that blends seamlessly into the surrounding 1-acre property. Features a beautiful private bridge and pathway.',
    highlights: ['Unique Turf Roof', 'Private Bridge & Pond', 'Forest Setting', 'Garden Deck Sitout'],
    images: [
      { src: `${BASE}/Hobbit Villa.png`,                 alt: 'Hobbit Villa Outlook' },
      { src: `${BASE}/Hobbit villa main entrance-1.png`,  alt: 'Main Entrance' },
      { src: `${BASE}/Hobbit villa entrance-2.jpg`,       alt: 'Entrance Path' },
      { src: `${BASE}/hobbit villa back view.png`,        alt: 'Back View' },
    ],
  },
  {
    id: 'living',
    label: 'Hall & Kitchen',
    title: 'Cozy Sitting Room & Kitchen',
    desc: 'Step into a warm and cozy living hall featuring nature-inspired decor, a fully equipped open kitchen, and a comfortable seating layout ideal for small groups and couples.',
    highlights: ['Cozy Lounge Space', 'Open Kitchen Layout', 'Natural Lighting', 'Coffee Bar Setup'],
    images: [
      { src: `${BASE}/Hall-1.png`,    alt: 'Living Hall' },
      { src: `${BASE}/Hall-1.1.png`,  alt: 'Hall View 2' },
      { src: `${BASE}/Hall-1.2.png`,  alt: 'Hall View 3' },
      { src: `${BASE}/Kitchen.png`,   alt: 'Kitchen' },
    ],
  },
  {
    id: 'bedrooms',
    label: 'Bedrooms',
    title: 'Comfortable Garden-View Bedrooms',
    desc: 'Two beautifully designed, nature-themed bedrooms offering complete privacy and peace. Equipped with premium mattresses, air conditioning, and views of the surrounding grounds.',
    highlights: ['Air Conditioning', 'Garden Outlooks', 'Nature-Themed Decor', 'Plush Bedding'],
    images: [
      { src: `${BASE}/Bedroom-1.png`, alt: 'Bedroom 1' },
      { src: `${BASE}/Bedroom-2.png`, alt: 'Bedroom 2' },
    ],
  },
  {
    id: 'bathrooms',
    label: 'Bathrooms',
    title: 'Clean & Modern Restrooms',
    desc: 'Equipped with premium en-suite bathrooms containing modern fittings, clean towels, and essential luxury bath amenities.',
    highlights: ['Attached En-suite', 'Modern Fittings', 'Essential Toiletries', 'Spacious Layouts'],
    images: [
      { src: `${BASE}/Bathroom/Bathroom-1.png`,   alt: 'Bathroom' },
      { src: `${BASE}/Bathroom/Bathroom-1.1.png`, alt: 'Bathroom View 2' },
      { src: `${BASE}/Bathroom/Bathroom-1.2.png`, alt: 'Bathroom View 3' },
    ],
  },
]

// Flatten all images for lightbox navigation
const allImages = roomSections.flatMap(s => s.images)

export default function HobbitVilla() {
  const [activeRoom, setActiveRoom] = useState('exterior')
  const [lightbox, setLightbox]     = useState(null)   // { src, alt }
  const [lbIndex, setLbIndex]       = useState(0)
  const { openBooking } = useBooking()

  useSEO({
    title: 'Turf Hobbit Villa | Nature-Inspired Private Stay | Hidden Grove Retreat',
    description: 'Experience the unique Turf Hobbit Villa at Hidden Grove Retreat - a nature-inspired 2-bedroom retreat with garden views, outdoor sitting area, and private pool access near Chilkur Balaji Temple, Hyderabad.',
    path: '/villas/hobbit',
    image: 'https://www.hiddengroveretreat.com/Hobbit%20Villa/Hobbit%20Villa/Hobbit%20Villa.png',
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
        title="Nature-Inspired Hideaway"
        img={`${BASE}/Hobbit Villa.png`}
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex gap-4 mt-4 flex-wrap">
          {['2 Bedrooms', 'Up to 6 Guests', 'Green Exterior'].map(b => (
            <span key={b} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', letterSpacing: '0.15em', padding: '0.4rem 1rem', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)', color: 'white' }}>
              {b}
            </span>
          ))}
        </motion.div>
      </PageHero>

      {/* ── Overview + Booking Sidebar ───────────────────────── */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <p className="section-label mb-3">Overview</p>
            <div className="gold-divider-left mb-6" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>
              A Magical Retreat in Nature's Embrace
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1rem' }}>
              The Hobbit Villa is inspired by nature's whimsy - a charming, intimate hideaway with a unique green-covered exterior that blends seamlessly with the lush surroundings. It's the perfect escape for couples, small families, and nature enthusiasts.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Step inside to find a cozy, fully equipped space with a spacious hall, modern kitchen, and two comfortable bedrooms. Step outside and find yourself surrounded by greenery, birdsong, and the tranquility of nature.
            </p>
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
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>Book Hobbit Villa</p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.15em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Contact for Pricing</p>
              <div style={{ borderTop: '1px solid var(--beige-dark)', borderBottom: '1px solid var(--beige-dark)', padding: '1.25rem 0', marginBottom: '1.5rem' }}>
                {[['Bedrooms', '2'], ['Max Guests', '6'], ['Bathrooms', '2'], ['Style', 'Nature-Inspired']].map(([k, v]) => (
                  <div key={k} className="flex justify-between items-center py-1.5">
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', color: 'var(--text-muted)' }}>{k}</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', fontWeight: 600, color: 'var(--primary)' }}>{v}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => openBooking('Villa Stay', 'Hi! I want to book the Hobbit Villa at Hidden Grove Retreat. Please share availability and pricing.', 'Turf Hobbit Villa')}
                className="btn-gold w-full justify-center mb-3 cursor-pointer"
                style={{ border: 'none' }}
              >
                Book via WhatsApp <ArrowRight size={14} />
              </button>
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
              Take a walk through each corner of the Hobbit Villa
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
