import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Priya & Rahul Sharma',
    event: 'Wedding Reception',
    rating: 5,
    text: 'Our wedding at Hidden Grove Retreat was an absolute dream! The venue was breathtaking, the staff was impeccable, and every detail was perfect. We couldn\'t have asked for a more magical day.',
    avatar: '👰',
  },
  {
    name: 'Anil Reddy',
    event: 'Corporate Retreat',
    rating: 5,
    text: 'We hosted our annual team retreat here and the experience exceeded all expectations. The tranquil environment, beautiful lawns, and premium facilities made it a productive and rejuvenating experience.',
    avatar: '💼',
  },
  {
    name: 'Meera Krishnan',
    event: 'Birthday Celebration',
    rating: 5,
    text: 'Celebrated my milestone birthday here and it was beyond perfect. The private pool, the lush greenery, and the amazing service created memories I\'ll cherish forever. Highly recommend!',
    avatar: '🎂',
  },
  {
    name: 'Sanjay & Family',
    event: 'Family Gathering',
    rating: 5,
    text: 'An incredible property! The Heritage Villa accommodated our entire family with ease. Kids loved the pool and indoor games, while adults enjoyed the peaceful nature setting. Will definitely return.',
    avatar: '🏡',
  },
  {
    name: 'Kavitha Photography',
    event: 'Photoshoot Session',
    rating: 5,
    text: 'As a professional photographer, I\'ve shot at many luxury venues. Hidden Grove Retreat stands out with its diverse backdrops - from the heritage architecture to the lush greenery. Stunning results every time.',
    avatar: '📸',
  },
]

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0)

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(c => (c + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <section className="section-light py-24 lg:py-32 relative overflow-hidden">
      {/* Background graphic details */}
      <div className="absolute top-10 left-10 text-[10rem] text-primary/5 select-none pointer-events-none font-serif">“</div>
      <div className="absolute bottom-10 right-10 text-[10rem] text-primary/5 select-none pointer-events-none font-serif">”</div>

      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Testimonials</p>
          <div className="leaf-ornament my-4">
            <div className="leaf-line" />
            <span style={{ fontSize: '0.85rem' }}>🍃</span>
            <div className="leaf-line-right" />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)' }}>
            Cherished Memories, Shared Stories
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.5 }}
              className="testimonial-card shadow-xl rounded-sm"
              style={{ background: '#fdfcf9', border: '1px solid rgba(212,175,55,0.22)' }}
            >
              {/* Inner double border decorative line */}
              <div style={{ position: 'absolute', inset: '10px', border: '1px solid rgba(212,175,55,0.15)', pointerEvents: 'none', borderRadius: '2px' }} />

              {/* Card content wrapper */}
              <div className="relative z-10">
                {/* Stars */}
                <div className="flex gap-1 mb-5">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={15} fill="var(--gold)" style={{ color: 'var(--gold)' }} />
                  ))}
                </div>

                {/* Quote */}
                <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', fontStyle: 'italic', color: 'var(--text-body)', lineHeight: 1.95, marginBottom: '2rem' }}>
                  "{t.text}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Elegant avatar double ring */}
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'var(--beige)',
                    border: '1px solid var(--gold)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.6rem',
                    borderRadius: '50%',
                    padding: '2px',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.06)'
                  }}>
                    <div style={{
                      width: '100%',
                      height: '100%',
                      background: 'white',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid rgba(212,175,55,0.2)'
                    }}>
                      {t.avatar}
                    </div>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 650, color: 'var(--primary)' }}>{t.name}</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.18em', color: 'var(--gold)', textTransform: 'uppercase', fontWeight: 600 }}>{t.event}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <button onClick={prev} className="w-11 h-11 border border-[rgba(13,59,42,0.25)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300 rounded-sm">
              <ChevronLeft size={18} />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? '32px' : '8px',
                    height: '4px',
                    background: i === current ? 'var(--gold)' : 'rgba(13,59,42,0.2)',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: '2px',
                    transition: 'all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                    padding: 0,
                  }}
                />
              ))}
            </div>

            <button onClick={next} className="w-11 h-11 border border-[rgba(13,59,42,0.25)] flex items-center justify-center text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white hover:border-[var(--primary)] transition-all duration-300 rounded-sm">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
