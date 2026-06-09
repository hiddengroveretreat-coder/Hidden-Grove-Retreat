import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Trees, Home, Waves, Users } from 'lucide-react'

const stats = [
  { value: 1,   suffix: ' Acre',  label: 'Private Property'    },
  { value: 30,  suffix: '+',      label: 'Guest Accommodation' },
  { value: 2,   suffix: '',       label: 'Premium Villas'      },
  { value: 2,   suffix: '',       label: 'Event Lawns'         },
  { value: 1,   suffix: '',       label: 'Private Pool'        },
  { value: 400, suffix: '+',      label: 'Event Capacity'      },
]

function CountUp({ target, suffix, inView }) {
  const [count, setCount] = useState(0)
  const frameRef = useRef(null)

  useEffect(() => {
    if (!inView) return
    const duration = 1600
    const start = performance.now()
    const step = (now) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) frameRef.current = requestAnimationFrame(step)
    }
    frameRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frameRef.current)
  }, [inView, target])

  return <>{count}{suffix}</>
}

function useInView(ref, threshold = 0.2) {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [ref, threshold])
  return visible
}

export default function AboutSection() {
  const sectionRef = useRef(null)
  const inView = useInView(sectionRef)
  const statsRef = useRef(null)
  const statsInView = useInView(statsRef, 0.1)

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  }
  const itemVariants = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  }

  return (
    <section ref={sectionRef} className="section-white py-24 lg:py-32 relative">
      {/* Hero Overlapping Stats Banner */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[90%] max-w-5xl hidden md:block">
        <div className="hero-stats-banner py-6 px-8 flex items-center justify-around text-white">
          {[
            { icon: Trees, label: 'Private Property', value: '1 Acre of Nature' },
            { icon: Home, label: 'Luxury Villas', value: '2 Distinct Spaces' },
            { icon: Waves, label: 'Private Pool', value: '1 Crystal Oasis' },
            { icon: Users, label: 'Event Capacity', value: '400+ Guests' },
          ].map((stat, idx) => {
            const Icon = stat.icon
            return (
              <div key={idx} className="flex flex-col items-center text-center px-4">
                <Icon size={22} style={{ color: 'var(--gold)', marginBottom: '0.5rem' }} />
                <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.25rem' }}>
                  {stat.label}
                </span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.25rem', fontWeight: 700, color: 'white' }}>
                  {stat.value}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left — Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="relative max-w-[440px] mx-auto w-full"
          >
            {/* Main image with double luxury frame */}
            <div className="picture-double-frame shadow-2xl" style={{ aspectRatio: '4/5', background: 'var(--beige)' }}>
              <div className="img-zoom-wrap w-full h-full">
                <img src="/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.53 AM (2).jpeg" alt="Hidden Grove Retreat property" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Floating accent image with double luxury frame */}
            <div
              className="picture-double-frame absolute -bottom-10 -right-10 hidden lg:block shadow-2xl z-10"
              style={{ position: 'absolute', width: '220px', aspectRatio: '1', background: 'var(--beige)' }}
            >
              <div className="img-zoom-wrap w-full h-full">
                <img src="/images/Property images/WhatsApp Image 2026-06-09 at 11.53.54 AM (2).jpeg" alt="Villa detail" className="w-full h-full object-cover" />
              </div>
            </div>
            {/* Gold badge */}
            <motion.div
              initial={{ scale: 0, opacity: 0, rotate: -15 }}
              animate={inView ? { scale: 1, opacity: 1, rotate: 0 } : {}}
              transition={{ delay: 0.4, type: 'spring', stiffness: 120, damping: 14 }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              style={{
                position: 'absolute',
                top: '-1.5rem',
                left: '-1.5rem',
                background: 'var(--gold)',
                padding: '1.25rem',
                textAlign: 'center',
                width: '110px',
                height: '110px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(212,175,55,0.35)',
                zIndex: 20,
                borderRadius: '16px',
                cursor: 'pointer'
              }}
            >
              <motion.p
                animate={{ 
                  scale: [1, 1.1, 1],
                  y: [0, -2, 0] 
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut" 
                }}
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, color: '#111', lineHeight: 1 }}
              >
                1
              </motion.p>
              <motion.p
                animate={{ 
                  opacity: [0.9, 1, 0.9],
                  y: [0, 1, 0]
                }}
                transition={{ 
                  repeat: Infinity, 
                  duration: 3, 
                  ease: "easeInOut",
                  delay: 0.5 
                }}
                style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.55rem', fontWeight: 700, letterSpacing: '0.15em', color: '#111', textTransform: 'uppercase', marginTop: '0.25rem' }}
              >
                Acre of Pure Luxury
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right — Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p variants={itemVariants} className="section-label mb-2">About Us</motion.p>
            
            {/* Leaf divider ornament */}
            <motion.div variants={itemVariants} className="leaf-ornament my-4 justify-start">
              <div className="leaf-line" />
              <span style={{ fontSize: '0.85rem' }}>🍃</span>
              <div className="leaf-line-right" />
            </motion.div>

            <motion.h2
              variants={itemVariants}
              style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem', lineHeight: 1.15 }}
            >
              A Private Sanctuary<br />
              <em>Crafted for Memories</em>
            </motion.h2>
            <motion.p
              variants={itemVariants}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1rem' }}
            >
              Welcome to <strong>Hidden Grove Retreat</strong> — a private 1-acre destination designed for stays, events, private celebrations, photoshoots, and memorable gatherings amidst nature.
            </motion.p>
            <motion.p
              variants={itemVariants}
              style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2.5rem' }}
            >
              Nestled near the sacred Chilkur Balaji Temple, our retreat blends lush greenery with sophisticated luxury — two premium villas, expansive event lawns, a private pool, and impeccable hospitality await you.
            </motion.p>

            {/* Stats Grid */}
            <motion.div ref={statsRef} variants={itemVariants} className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="border-l-2 border-[rgba(212,175,55,0.5)] pl-4 hover:bg-[rgba(212,175,55,0.03)] transition-colors py-2 rounded-r-md">
                  <p className="stat-number">
                    <CountUp target={s.value} suffix={s.suffix} inView={statsInView} />
                  </p>
                  <p className="stat-label">{s.label}</p>
                </div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <a
                href="/about"
                className="btn-link-primary py-2"
                onClick={e => { e.preventDefault(); window.location.href = '/about' }}
              >
                Our Story <span style={{ color: 'var(--gold)', marginLeft: '4px' }}>→</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
