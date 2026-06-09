import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, X, ZoomIn } from 'lucide-react'
import PageHero from '../components/layout/PageHero'

const features = ['Grand Hall', 'Dining Area', 'Fully Functional Kitchen', '4 Bedrooms', 'Attached Bathrooms', 'Indoor Games Room', 'Private Entrance', 'Premium Furnishings', 'Air Conditioning', 'Smart TV', 'High-speed WiFi', 'Dedicated Parking']

const galleryImgs = [
  '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.55 AM (2).jpeg', '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.55 AM (3).jpeg', '/images/Games/WhatsApp Image 2026-06-09 at 11.53.55 AM.jpeg',
  '/images/Swimming_Pool/WhatsApp Image 2026-06-09 at 11.53.56 AM (1).jpeg', '/images/Swimming_Pool/WhatsApp Image 2026-06-09 at 11.53.56 AM (2).jpeg', '/images/Swimming_Pool/WhatsApp Image 2026-06-09 at 11.53.56 AM (3).jpeg',
  '/images/Swimming_Pool/WhatsApp Image 2026-06-09 at 11.53.56 AM.jpeg', '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.57 AM (1).jpeg', '/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.57 AM (2).jpeg',
]

export default function HeritageVilla() {
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    document.title = 'The Heritage Villa | Hidden Grove Retreat'
  }, [])

  return (
    <>

      <PageHero
        title="Grand Colonial Elegance"
        img="/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.55 AM (2).jpeg"
      >
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="flex gap-4 mt-4 flex-wrap">
          {['4 Bedrooms', 'Up to 15 Guests', 'Private Entrance'].map(b => (
            <span key={b} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', letterSpacing: '0.15em', padding: '0.4rem 1rem', background: 'rgba(212,175,55,0.2)', border: '1px solid rgba(212,175,55,0.5)', color: 'white' }}>
              {b}
            </span>
          ))}
        </motion.div>
      </PageHero>

      {/* Overview */}
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
              The Heritage Villa is our flagship accommodation — a grand colonial-inspired estate that blends timeless architectural elegance with modern luxury. With 4 spacious bedrooms, each with attached bathrooms, it comfortably hosts up to 15 guests.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              The grand hall is perfect for family gatherings, the fully equipped kitchen lets you cook and celebrate, and the indoor games room ensures entertainment for all ages. This villa is ideal for large family stays, bachelor/bachelorette celebrations, and corporate retreats.
            </p>

            {/* Features grid */}
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>Villa Features</h3>
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
                {[['Bedrooms', '4'], ['Max Guests', '15+'], ['Bathrooms', '4 Attached'], ['Common Areas', 'Hall, Kitchen, Games']].map(([k, v]) => (
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

      {/* Gallery */}
      <section className="section-light py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '2rem', textAlign: 'center' }}>Villa Gallery</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {galleryImgs.map((img, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="relative group overflow-hidden cursor-pointer" style={{ aspectRatio: '4/3' }} onClick={() => setLightbox(img)}>
                <img src={img} alt={`Heritage Villa ${i + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-[rgba(13,59,42,0.5)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn size={28} style={{ color: 'var(--gold)' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="lightbox-overlay" onClick={() => setLightbox(null)}>
            <button onClick={() => setLightbox(null)} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'rgba(255,255,255,0.1)', border: 'none', cursor: 'pointer', color: 'white', padding: '0.5rem' }}>
              <X size={28} />
            </button>
            <motion.img src={lightbox} alt="" className="lightbox-img" initial={{ scale: 0.85 }} animate={{ scale: 1 }} exit={{ scale: 0.85 }} onClick={e => e.stopPropagation()} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
