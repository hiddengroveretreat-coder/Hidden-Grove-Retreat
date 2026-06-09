import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Star, Heart } from 'lucide-react'

const spaces = [
  {
    id: 'lawn1',
    name: 'Lawn 1',
    subtitle: 'The Grand Lawn',
    img: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.47 AM.jpeg',
    gallery: ['/images/Property images/WhatsApp Image 2026-06-09 at 11.59.47 AM.jpeg', '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.48 AM (1).jpeg', '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.48 AM (2).jpeg', '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.48 AM (3).jpeg'],
    capacity: '350 – 400',
    capacityNum: 400,
    occasions: ['Weddings', 'Receptions', 'Corporate Events', 'Large Gatherings'],
    icon: Star,
    color: 'var(--primary)',
  },
  {
    id: 'lawn2',
    name: 'Lawn 2',
    subtitle: 'The Garden Terrace',
    img: '/images/Games/WhatsApp Image 2026-06-09 at 11.59.49 AM (1).jpeg',
    gallery: ['/images/Games/WhatsApp Image 2026-06-09 at 11.59.49 AM (1).jpeg', '/images/Games/WhatsApp Image 2026-06-09 at 11.59.49 AM (2).jpeg', '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.49 AM (3).jpeg', '/images/Games/WhatsApp Image 2026-06-09 at 11.59.49 AM (4).jpeg'],
    capacity: '100 – 150',
    capacityNum: 150,
    occasions: ['Birthday Parties', 'Family Events', 'Small Celebrations', 'Intimate Gatherings'],
    icon: Heart,
    color: 'var(--accent)',
  },
]

function CapacityBar({ max, value }) {
  return (
    <div style={{ width: '100%', height: '4px', background: 'rgba(212,175,55,0.2)', borderRadius: '2px', marginTop: '0.5rem' }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${(value / 400) * 100}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut', delay: 0.3 }}
        style={{ height: '100%', background: 'linear-gradient(90deg, var(--gold), var(--primary))', borderRadius: '2px' }}
      />
    </div>
  )
}

function EventSpaceCard({ sp, i }) {
  const [activeImg, setActiveImg] = useState(sp.img)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="luxury-card overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image Container - 7 columns */}
        <div className={`lg:col-span-7 relative min-h-[320px] lg:min-h-[400px] overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
          <img
            src={activeImg}
            alt={sp.name}
            className="w-full h-full object-cover transition-all duration-700 absolute inset-0"
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 60%)' }} />
          
          <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.75rem', fontWeight: 700, color: 'white' }}>{sp.name}</h3>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'var(--gold)' }}>{sp.subtitle}</p>
          </div>

          {/* Interactive Thumbnail Gallery Strip */}
          <div className="thumb-strip absolute bottom-4 right-4 z-10 bg-[rgba(13,59,42,0.72)] backdrop-blur-md p-1.5 rounded-sm">
            {sp.gallery.map((gImg) => (
              <div
                key={gImg}
                className={`thumb-item ${activeImg === gImg ? 'active' : ''}`}
                onClick={() => setActiveImg(gImg)}
              >
                <img src={gImg} alt="Thumbnail preview" />
              </div>
            ))}
          </div>
        </div>

        {/* Content Container - 5 columns */}
        <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-center bg-white border-t lg:border-t-0 border-[rgba(212,175,55,0.15)]">
          {/* Capacity */}
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Users size={15} style={{ color: 'var(--gold)' }} />
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--primary)' }}>
                CAPACITY
              </span>
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)' }}>
              {sp.capacity} <span style={{ fontSize: '0.75rem', fontFamily: "'Montserrat', sans-serif", color: 'var(--text-muted)' }}>guests</span>
            </span>
          </div>
          
          <CapacityBar max={400} value={sp.capacityNum} />

          {/* Occasions */}
          <div className="mt-6">
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
              Perfect For
            </p>
            <div className="flex flex-wrap gap-2">
              {sp.occasions.map(o => (
                <span key={o} style={{
                  background: 'var(--beige)',
                  border: '1px solid rgba(212,175,55,0.2)',
                  padding: '0.35rem 0.85rem',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: 500,
                  color: 'var(--primary)',
                  letterSpacing: '0.05em',
                }}>
                  {o}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a
              href={`https://wa.me/919063999784?text=Hi!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(sp.name)}%20at%20Hidden%20Grove%20Retreat%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xs py-3 w-full justify-center shimmer-badge"
            >
              Inquire About {sp.name}
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function EventSpacesSection() {
  return (
    <section className="section-white py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Venues</p>
          <div className="leaf-ornament my-4">
            <div className="leaf-line" />
            <span style={{ fontSize: '0.85rem' }}>🍃</span>
            <div className="leaf-line-right" />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)' }}>
            Magnificent Event Spaces
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
            Two beautifully designed outdoor lawns perfect for every celebration.
          </p>
        </div>

        <div className="space-y-12">
          {spaces.map((sp, i) => (
            <EventSpaceCard key={sp.id} sp={sp} i={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
