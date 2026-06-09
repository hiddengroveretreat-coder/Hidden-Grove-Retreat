import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

const villas = [
  {
    id: 'heritage',
    name: 'Heritage Villa',
    tagline: 'Grand Colonial Elegance',
    img: '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.55 AM (2).jpeg',
    hoverImg: '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.55 AM (3).jpeg',
    features: ['Grand Hall', 'Dining Area', 'Fully Functional Kitchen', '4 Bedrooms', 'Attached Bathrooms', 'Indoor Games Room'],
    guests: 'Up to 15 Guests',
    path: '/villas/heritage',
  },
  {
    id: 'hobbit',
    name: 'Hobbit Villa',
    tagline: 'Nature-Inspired Charm',
    img: '/images/Property images/WhatsApp Image 2026-06-09 at 11.53.59 AM.jpeg',
    hoverImg: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.45 AM (1).jpeg',
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
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className="luxury-card group relative overflow-hidden transition-all duration-500 border-l-4 border-l-transparent hover:border-l-[var(--gold)]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <div className="img-zoom-wrap relative" style={{ height: '320px', overflow: 'hidden' }}>
        <img
          src={hovered ? villa.hoverImg : villa.img}
          alt={villa.name}
          className="w-full h-full object-cover transition-all duration-700"
        />
        {/* Guest badge with shimmer */}
        <div className="shimmer-badge" style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(8px)',
          padding: '0.45rem 1rem',
          border: '1px solid rgba(212,175,55,0.45)',
        }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--primary)' }}>
            {villa.guests}
          </span>
        </div>
        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.35 }}
          style={{ position: 'absolute', inset: 0, background: 'rgba(13,59,42,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        >
          <Link to={villa.path} className="btn-outline-white text-xs">
            View Villa Details
          </Link>
        </motion.div>
      </div>

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
          <a
            href={`https://wa.me/919063999784?text=Hi!%20I%20want%20to%20book%20the%20${encodeURIComponent(villa.name)}%20at%20Hidden%20Grove%20Retreat.`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shimmer-badge text-xs py-2"
            style={{ padding: '0.75rem 1.5rem' }}
          >
            Book Now
          </a>
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
            Each villa tells its own story — choose the experience that speaks to your soul.
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
