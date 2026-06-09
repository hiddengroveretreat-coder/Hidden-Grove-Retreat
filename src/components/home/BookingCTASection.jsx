import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function BookingCTASection() {
  return (
    <section className="relative py-28 lg:py-36 overflow-hidden">
      {/* Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'url("/images/Lawn/WhatsApp Image 2026-06-09 at 11.53.57 AM (2).jpeg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(5, 20, 12, 0.72)' }} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-5"
        >
          <span style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
          }}>
            ✦ Book Your Experience ✦
          </span>
          <div className="leaf-ornament my-3 w-full">
            <div className="leaf-line" />
            <span style={{ fontSize: '0.85rem' }}>🍃</span>
            <div className="leaf-line-right" />
          </div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.15,
            marginBottom: '1.25rem',
          }}
        >
          Ready to Create<br />
          <em style={{ color: 'var(--gold-light, #e8cb5c)' }}>Unforgettable Memories?</em>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.05rem', color: 'rgba(255,255,255,0.75)', marginBottom: '2.5rem', lineHeight: 1.8 }}
        >
          Whether it's a tranquil villa stay, a grand wedding, or an intimate celebration — Hidden Grove Retreat is your perfect canvas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8"
        >
          <a
            href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20book%20a%20villa%20stay%20at%20Hidden%20Grove%20Retreat."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold shimmer-badge"
            style={{ minWidth: '190px', justifyContent: 'center' }}
          >
            Book Your Stay <ArrowRight size={14} />
          </a>
          <a
            href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20plan%20an%20event%20at%20Hidden%20Grove%20Retreat."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-link-white py-2"
          >
            Plan Your Event <ArrowRight size={14} />
          </a>
        </motion.div>

        {/* Contact quick info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex items-center justify-center gap-6 flex-wrap"
        >
          <a href="tel:+919063999784" className="flex items-center gap-2 text-[rgba(255,255,255,0.65)] hover:text-white transition-colors" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem' }}>
            📞 +91 90639 99784
          </a>
          <span style={{ color: 'rgba(212,175,55,0.4)' }}>|</span>
          <a href="mailto:hiddengroveretreat@gmail.com" className="flex items-center gap-2 text-[rgba(255,255,255,0.65)] hover:text-white transition-colors" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem' }}>
            ✉ hiddengroveretreat@gmail.com
          </a>
          <span style={{ color: 'rgba(212,175,55,0.4)' }}>|</span>
          <span className="text-[rgba(255,255,255,0.5)]" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem' }}>
            Mon–Sun: 9AM – 8PM
          </span>
        </motion.div>
      </div>
    </section>
  )
}
