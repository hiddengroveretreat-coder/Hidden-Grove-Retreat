import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'
import VillaImageSlider from '../layout/VillaImageSlider'
import { useBooking } from '../../context/BookingContext'

const villas = [
  {
    id: 'heritage',
    name: 'Heritage Villa',
    tagline: 'Grand Colonial Elegance',
    images: [
      '/Heritage villa/Heritage villa/Heritage Villa outlook.png',
      '/Heritage villa/Heritage villa/Heritge Villa Front lawn.png',
      '/Heritage villa/Heritage villa/Sitout area.png',
      '/Heritage villa/Heritage villa/Hall area.png'
    ],
    features: ['Grand Hall', 'Dining Area', 'Fully Functional Kitchen', '4 Bedrooms', 'Attached Bathrooms', 'Indoor Games Room'],
    guests: 'Up to 15 Guests',
    path: '/villas/heritage',
  },
  {
    id: 'hobbit',
    name: 'Hobbit Villa',
    tagline: 'Nature-Inspired Charm',
    images: [
      '/Hobbit Villa/Hobbit Villa/Hobbit Villa.png',
      '/Hobbit Villa/Hobbit Villa/Hobbit villa main entrance-1.png',
      '/Hobbit Villa/Hobbit Villa/hobbit villa back view.png',
      '/Hobbit Villa/Hobbit Villa/Hall-1.png'
    ],
    features: ['Nature-Inspired Architecture', 'Spacious Hall', 'Fully Equipped Kitchen', '2 Bedrooms', 'Common Bathroom', 'Green Covered Exterior'],
    guests: 'Up to 6 Guests',
    path: '/villas/hobbit',
  },
]

function useInView(ref) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref])
  return visible
}

function VillaCard({ villa, delay }) {
  const { openBooking } = useBooking()
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="luxury-card group relative overflow-hidden transition-all duration-500 border-l-4 border-l-transparent hover:border-l-[var(--gold)]"
    >
      {/* Slider Image component */}
      <VillaImageSlider 
        images={villa.images} 
        name={villa.name} 
        path={villa.path} 
        guests={villa.guests}
        aspectRatio="16/10"
      />

      {/* Content */}
      <div style={{ padding: '2rem' }}>
        <p className="section-label mb-1">{villa.tagline}</p>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>
          {villa.name}
        </h3>
        
        {/* Specs Grid instead of bullets */}
        <div className="grid grid-cols-2 gap-2 mb-6">
          {villa.features.map(f => (
            <span key={f} className="spec-tag rounded-sm">
              <span style={{ color: 'var(--gold)', fontSize: '0.65rem' }}>✦</span>
              {f}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between mt-6">
          <Link to={villa.path} className="btn-link-primary py-1">
            Explore Villa <span style={{ color: 'var(--gold)', marginLeft: '4px' }}>→</span>
          </Link>
          <button
            onClick={() => openBooking('Villa Stay', `Hi! I want to book the ${villa.name} at Hidden Grove Retreat. Please share availability and pricing.`, villa.id === 'heritage' ? 'Heritage Villa' : 'Turf Hobbit Villa')}
            className="btn-gold shimmer-badge text-xs py-2 cursor-pointer"
            style={{ padding: '0.75rem 1.5rem', border: 'none' }}
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default function VillasSection() {
  return (
    <section className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">Our Villas</p>
          <div className="gold-divider mb-5" />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)' }}>
            Two Distinct Villa Experiences
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '540px', margin: '0.75rem auto 0' }}>
            Each villa tells its own story - choose the experience that speaks to your soul.
          </p>
        </div>

        {/* Villa Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {villas.map((v, i) => <VillaCard key={v.id} villa={v} delay={i * 0.2} />)}
        </div>
      </div>
    </section>
  )
}
