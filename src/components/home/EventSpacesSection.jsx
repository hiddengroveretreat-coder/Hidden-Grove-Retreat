import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Users, Star, Heart, ChevronLeft, ChevronRight, Check } from 'lucide-react'

const spaces = [
  {
    id: 'lawn1',
    name: 'Lawn 1',
    subtitle: 'The Grand Lawn',
    desc: 'The Grand Lawn is our premier outdoor event venue, offering an expansive 1-acre manicured green setting. Flanked by lush foliage and tropical trees, it is the perfect canvas for grand weddings, receptions, and large corporate events.',
    images: [
      '/Lawn area/Lawn area/ChatGPT Image Jun 9, 2026 at 08_29_21 PM.png',
      '/Lawn area/Lawn area/ChatGPT Image Jun 9, 2026 at 08_27_40 PM.png',
      '/Lawn area/Lawn area/ChatGPT Image Jun 9, 2026 at 08_25_00 PM.png',
      '/Lawn area/Lawn area/ChatGPT Image Jun 9, 2026 at 08_20_58 PM.png',
      '/Lawn area/Lawn area/ChatGPT Image Jun 9, 2026 at 08_15_40 PM.png',
      '/Lawn area/Lawn area/ChatGPT Image Jun 9, 2026 at 08_13_17 PM.png',
      '/Lawn area/Lawn area/ChatGPT Image Jun 9, 2026 at 08_11_43 PM.png'
    ],
    capacity: '350 – 400',
    capacityNum: 400,
    features: ['Bridal Dressing Suite', 'Dedicated Catering Setup Space', 'Parking for 100+ Vehicles', 'Luxury Event Restrooms', 'Stage & Sound Friendly Layout'],
    occasions: ['Weddings', 'Receptions', 'Corporate Events', 'Large Gatherings'],
    icon: Star,
    color: 'var(--primary)',
  },
  {
    id: 'lawn2',
    name: 'Lawn 2',
    subtitle: 'The Garden Terrace',
    desc: 'The Garden Terrace offers an intimate, forest-like atmosphere surrounded by lush green backdrops. Highlighted by our signature Treehouse, it is an ideal spot for cozy birthday gatherings, cocktails, and private family dinners.',
    images: [
      '/Lawn area/Lawn area/IMG_8071.PNG',
      '/Lawn area/Lawn area/IMG_8075.PNG',
      '/Lawn area/Lawn area/IMG_8070.PNG',
      '/Lawn area/Lawn area/Tree house.PNG'
    ],
    capacity: '100 – 150',
    capacityNum: 150,
    features: ['Signature Treehouse Backdrop', 'Interactive Poolside Access', 'Festoon & Fairy Lighting Setup', 'Cozy Gazebo Seating', 'Intimate Green Enclave'],
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

function EventSpaceImageSlider({ images, name, subtitle }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4500)
    return () => clearInterval(interval)
  }, [isHovered, images.length])

  const handlePrev = (e) => {
    e.preventDefault()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.preventDefault()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handleDotClick = (e, index) => {
    e.preventDefault()
    setCurrentIndex(index)
  }

  return (
    <div 
      className="relative w-full h-full min-h-[350px] lg:min-h-[450px] overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img}
            alt={`${name} preview ${index + 1}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-103"
          />
        </div>
      ))}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%)', zIndex: 12 }} />

      {/* Label and Subtitle */}
      <div style={{ position: 'absolute', bottom: '1.5rem', left: '1.5rem', zIndex: 20 }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.85rem', fontWeight: 700, color: 'white', textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{name}</h3>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>{subtitle}</p>
      </div>

      {/* Left Chevron */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10"
        style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
        aria-label="Previous image"
      >
        <ChevronLeft size={18} />
      </button>

      {/* Right Chevron */}
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10"
        style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
        aria-label="Next image"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-1.5 bg-black/30 px-2.5 py-1.5 rounded-full backdrop-blur-sm">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => handleDotClick(e, index)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[var(--gold)] w-3.5' : 'bg-white/60 hover:bg-white'
            }`}
            style={{ border: 'none', padding: 0, cursor: 'pointer', outline: 'none' }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function EventSpaceCard({ sp, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.9, delay: i * 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="luxury-card overflow-hidden shadow-lg border border-[rgba(212,175,55,0.1)] hover:border-[rgba(212,175,55,0.25)] transition-colors"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Image Container - 7 columns */}
        <div className={`lg:col-span-7 relative overflow-hidden ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
          <EventSpaceImageSlider images={sp.images} name={sp.name} subtitle={sp.subtitle} />
        </div>

        {/* Content Container - 5 columns */}
        <div className="lg:col-span-5 p-8 lg:p-10 flex flex-col justify-between bg-white border-t lg:border-t-0 border-[rgba(212,175,55,0.15)]">
          <div className="space-y-5">
            {/* Capacity */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Users size={15} style={{ color: 'var(--gold)' }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--primary)' }}>
                  CAPACITY
                </span>
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700, color: 'var(--primary)' }}>
                {sp.capacity} <span style={{ fontSize: '0.72rem', fontFamily: "'Montserrat', sans-serif", color: 'var(--text-muted)' }}>guests</span>
              </span>
            </div>
            
            <CapacityBar max={400} value={sp.capacityNum} />

            {/* Description */}
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', lineHeight: 1.75, color: 'var(--text-body)' }}>
              {sp.desc}
            </p>

            {/* Highlights checklist */}
            <div className="space-y-2 pt-2">
              {sp.features.map(f => (
                <div key={f} className="flex items-center gap-2">
                  <Check size={12} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.82rem', color: 'var(--text-muted)' }}>{f}</span>
                </div>
              ))}
            </div>

            {/* Occasions */}
            <div className="pt-2">
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.50rem' }}>
                Perfect For
              </p>
              <div className="flex flex-wrap gap-1.5">
                {sp.occasions.map(o => (
                  <span key={o} style={{
                    background: 'var(--beige)',
                    border: '1px solid rgba(212,175,55,0.15)',
                    padding: '0.3rem 0.75rem',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    color: 'var(--primary)',
                    letterSpacing: '0.02em',
                  }}>
                    {o}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={`https://wa.me/919063999784?text=Hi!%20I%20want%20to%20inquire%20about%20${encodeURIComponent(sp.subtitle)}%20at%20Hidden%20Grove%20Retreat%20for%20my%20event.`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-xs py-3.5 w-full justify-center shimmer-badge"
              style={{ fontWeight: 700 }}
            >
              Inquire About {sp.subtitle}
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
