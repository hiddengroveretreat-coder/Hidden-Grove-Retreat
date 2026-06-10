import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// Hero slides using actual property images
const slides = [
  { img: '/Heritage villa/Heritage villa/Heritage Villa outlook.png',  label: 'Private Villas'  },
  { img: '/Lawn area/Lawn area/ChatGPT Image Jun 9, 2026 at 08_29_21 PM.png',  label: 'Lush Grounds'    },
  { img: '/Hobbit Villa/Hobbit Villa/Hobbit Villa.png', label: 'Luxury Amenities' },
  { img: '/Swimming pool/Swimming pool/ChatGPT Image Jun 9, 2026 at 08_08_09 PM.png', label: 'Elegant Events'  },
  { img: '/Lawn area/Lawn area/Tree house.PNG', label: 'Nature Retreat'  },
]

// Floating gold particles
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 12}s`,
    duration: `${14 + Math.random() * 14}s`,
    size: Math.random() > 0.5 ? 2.5 : 3.5,
  }))

  return (
    <div className="hero-dots" aria-hidden="true">
      {particles.map(p => (
        <div
          key={p.id}
          className="hero-dot"
          style={{
            left: p.left,
            animationDelay: p.delay,
            animationDuration: p.duration,
            width: p.size,
            height: p.size,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length)
    }, 5500)
    return () => clearInterval(timerRef.current)
  }, [])

  const goTo = (i) => {
    clearInterval(timerRef.current)
    setCurrent(i)
    timerRef.current = setInterval(() => setCurrent(c => (c + 1) % slides.length), 5500)
  }

  return (
    <section className="hero-section" id="home">
      {/* Slideshow */}
      <div className="hero-slideshow">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1.0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="hero-slide"
            style={{ backgroundImage: `url("${slides[current].img}")` }}
          />
        </AnimatePresence>
      </div>

      {/* Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Floating Particles */}
      <Particles />

      {/* Double Editorial Viewport Frame */}
      <div className="absolute top-28 bottom-6 left-6 right-6 pointer-events-none border border-[rgba(255,255,255,0.12)] z-10 hidden md:block">
        <div className="absolute inset-1 border border-[rgba(212,175,55,0.25)] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="hero-content">
        {/* Top Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center mb-6"
        >
          <span className="hero-badge shimmer-badge" style={{ border: '1px solid rgba(212, 175, 55, 0.45)', borderRadius: '999px', padding: '0.45rem 1.25rem' }}>
            <span style={{ color: 'var(--gold)', fontSize: '0.5rem', marginRight: '0.25rem' }}>✦</span>
            Luxury Retreat · Near Chilkur Balaji Temple
            <span style={{ color: 'var(--gold)', fontSize: '0.5rem', marginLeft: '0.25rem' }}>✦</span>
          </span>
        </motion.div>

        {/* Main Headline with staggered word entry */}
        {/* Title & Subtitle Wrapper */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.3 }
            }
          }}
        >
          {/* Main Headline */}
          <motion.h1
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.2rem, 5.5vw, 4.4rem)',
              fontWeight: 700,
              color: 'white',
              lineHeight: 1.15,
              marginBottom: '0.25rem',
              textShadow: '0 4px 30px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.4)',
            }}
          >
            {/* Masked reveal container for "Hidden" */}
            <div className="overflow-hidden inline-block mr-4">
              <motion.span
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="inline-block tracking-[0.18em] uppercase"
              >
                Hidden
              </motion.span>
            </div>

            {/* Masked reveal container for "Grove" */}
            <div className="overflow-hidden inline-block">
              <motion.span
                variants={{
                  hidden: { y: '100%', opacity: 0 },
                  visible: { y: 0, opacity: 1, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="inline-block tracking-[0.18em] uppercase"
              >
                Grove
              </motion.span>
            </div>
          </motion.h1>

          {/* Sub-headline */}
          <div className="overflow-hidden block mt-0.5">
            <motion.p
              variants={{
                hidden: { y: '100%', opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 1.3, ease: [0.16, 1, 0.3, 1] } }
              }}
              className="inline-block text-[var(--gold)] font-serif text-2xl md:text-3xl"
              style={{
                fontStyle: 'italic',
                textTransform: 'none',
                letterSpacing: '0.05em',
                textShadow: '0 2px 10px rgba(0,0,0,0.85)'
              }}
            >
              -  Retreat -
            </motion.p>
          </div>
        </motion.div>

        {/* Horizontal Gold Line Divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 1.0, duration: 1.0, ease: 'easeOut' }}
          style={{
            width: '80px',
            height: '1.5px',
            background: 'linear-gradient(90deg, transparent, var(--gold), transparent)',
            margin: '0.65rem auto 0.9rem',
            transformOrigin: 'center'
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: '#ffffff',
            marginBottom: '1rem',
            fontWeight: 300,
            letterSpacing: '0.03em',
            textShadow: '0 2px 12px rgba(0,0,0,0.85), 0 0 4px rgba(0,0,0,0.3)',
          }}
        >
          Where Nature Meets Luxury
        </motion.p>

        {/* Services line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="flex items-center justify-center gap-2 flex-wrap mb-6"
        >
          {['Private Villas', 'Weddings', 'Events', 'Photoshoots', 'Celebrations'].map((s, i) => (
            <span key={s} className="flex items-center gap-2">
              <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ffffff', fontWeight: 500, textShadow: '0 2px 10px rgba(0,0,0,0.85)' }}>
                {s}
              </span>
              {i < 4 && <span style={{ color: 'var(--gold)', opacity: 0.9, fontSize: '0.5rem', filter: 'drop-shadow(0 2px 6px rgba(0,0,0,0.8))' }}>◆</span>}
            </span>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-2"
        >
          <a
            href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20book%20a%20villa%20stay%20at%20Hidden%20Grove%20Retreat.%20Please%20share%20availability%20and%20pricing."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shimmer-badge"
            style={{ minWidth: '190px', justifyContent: 'center' }}
          >
            Book Your Stay
            <ArrowRight size={14} />
          </a>
          <a
            href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20plan%20an%20event%20at%20Hidden%20Grove%20Retreat.%20Please%20share%20event%20package%20details."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link-white py-2"
          >
            Plan Your Event
            <ArrowRight size={14} />
          </a>
        </motion.div>
      </div>


      <div
        style={{ position: 'absolute', bottom: '5rem', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', gap: '0.5rem' }}
      >
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: current === i ? '28px' : '8px',
              height: '3px',
              borderRadius: '2px',
              background: current === i ? 'var(--gold)' : 'rgba(255,255,255,0.4)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.4s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-mouse" />
        <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
          Scroll
        </span>
      </div>

      {/* Slide Label (bottom left) */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '2rem',
            zIndex: 2,
          }}
        >
          <span style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.62rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')} - {slides[current].label}
          </span>
        </motion.div>
      </AnimatePresence>
    </section>
  )
}
