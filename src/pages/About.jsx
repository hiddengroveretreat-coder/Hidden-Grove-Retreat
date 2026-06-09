import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, Leaf, Heart, Star } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import BookingCTASection from '../components/home/BookingCTASection'

const reasons = [
  { icon: Leaf,  title: '1 Acre of Nature',    text: 'Immersed in lush greenery, our property provides a true escape from city life.' },
  { icon: Star,  title: 'Premium Amenities',   text: 'From private pool to indoor games, every facility is curated for your comfort.' },
  { icon: Heart, title: 'Personal Service',    text: 'Our dedicated team ensures every detail of your stay or event is flawless.' },
  { icon: Check, title: 'Versatile Spaces',    text: 'Two villas and two event lawns — perfect for any occasion, any size.' },
]

export default function About() {
  useEffect(() => {
    document.title = 'Our Story | Hidden Grove Retreat'
  }, [])

  return (
    <>
      <PageHero title="Our Story" subtitle="Where every corner tells a tale of nature and luxury" img="/images/Property images/WhatsApp Image 2026-06-09 at 11.53.54 AM (3).jpeg" />


      {/* Story */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <div className="img-zoom-wrap" style={{ aspectRatio: '4/5' }}>
              <img src="/images/Swimming_Pool/WhatsApp Image 2026-06-09 at 11.53.56 AM (1).jpeg" alt="Hidden Grove Retreat grounds" className="w-full h-full object-cover" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
            <p className="section-label mb-3">Our Story</p>
            <div className="gold-divider-left mb-6" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1.25rem' }}>
              Born from a Love of Nature & Celebration
            </h2>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1rem' }}>
              Hidden Grove Retreat was born from a simple vision: to create a place where the beauty of nature and the warmth of celebration come together seamlessly. Nestled on a private 1-acre estate near the sacred Chilkur Balaji Temple, we set out to craft an experience unlike any other in Hyderabad.
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '2rem' }}>
              Every element of our retreat — from the two beautifully designed villas to the lush event lawns and sparkling private pool — has been carefully curated to offer our guests the perfect blend of natural serenity and sophisticated luxury.
            </p>
            <div style={{ padding: '1.5rem', background: 'var(--beige)', borderLeft: '3px solid var(--gold)' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontStyle: 'italic', color: 'var(--primary)', lineHeight: 1.7 }}>
                "We don't just offer a venue. We offer an experience — one that becomes a cherished memory for every guest who walks through our gates."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-light py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Our Mission', icon: '🌿', text: 'To provide an unparalleled luxury retreat experience that combines the tranquility of nature with world-class hospitality — creating a space where every celebration becomes extraordinary and every stay becomes a cherished memory.' },
              { title: 'Our Vision',  icon: '✨', text: "To become Hyderabad's most sought-after luxury retreat destination — a name synonymous with elegance, nature, and unforgettable experiences for stays, weddings, events, and everything in between." },
            ].map(item => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="luxury-card p-8">
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', lineHeight: 1.85, color: 'var(--text-body)' }}>{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <p className="section-label mb-3">Why Choose Us</p>
          <div className="gold-divider mb-5" />
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '3rem' }}>
            The Hidden Grove Difference
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((r, i) => {
              const Icon = r.icon
              return (
                <motion.div key={r.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: i * 0.12 }} className="luxury-card p-7 text-center">
                  <div className="w-14 h-14 bg-[var(--beige)] flex items-center justify-center mx-auto mb-4">
                    <Icon size={24} style={{ color: 'var(--primary)' }} />
                  </div>
                  <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.1rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.6rem' }}>{r.title}</h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--text-muted)' }}>{r.text}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      <BookingCTASection />
    </>
  )
}
