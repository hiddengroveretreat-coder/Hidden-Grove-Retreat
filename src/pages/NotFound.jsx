import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Home, Phone, ArrowRight } from 'lucide-react'
import useSEO from '../hooks/useSEO'

export default function NotFound() {
  useSEO({
    title: 'Page Not Found | Hidden Grove Retreat',
    description: 'The page you are looking for does not exist. Return to Hidden Grove Retreat and explore our luxury villas and event spaces near Hyderabad.',
    path: '/404',
  })

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a2a1c 0%, #0d3b2a 50%, #1a4a35 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Decorative background blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '5%',
        width: 400, height: 400,
        background: 'radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(212,175,55,0.06) 0%, transparent 70%)',
        borderRadius: '50%', pointerEvents: 'none',
      }} />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ textAlign: 'center', maxWidth: 560, position: 'relative', zIndex: 1 }}
      >
        {/* Logo / Leaf icon */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ marginBottom: '1.5rem' }}
        >
          <span style={{ fontSize: '4rem' }}>🌿</span>
        </motion.div>

        {/* 404 Number */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(5rem, 15vw, 9rem)',
            fontWeight: 800,
            lineHeight: 1,
            marginBottom: '0.5rem',
            background: 'linear-gradient(135deg, var(--gold) 0%, #f0d060 50%, var(--gold) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            width: 80, height: 2,
            background: 'var(--gold)',
            margin: '0 auto 1.5rem',
            borderRadius: 2,
          }}
        />

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(1.4rem, 4vw, 2rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '1rem',
          }}
        >
          Oops! Page Not Found
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.65)',
            lineHeight: 1.8,
            marginBottom: '2.5rem',
          }}
        >
          The page you're looking for has wandered off into the nature trails. Let us guide you back to the retreat.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link
            to="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.8rem',
              background: 'var(--gold)',
              color: '#0d3b2a',
              borderRadius: '0.5rem',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '0.95rem',
              textDecoration: 'none',
              transition: 'opacity 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <Home size={18} />
            Back to Home
          </Link>

          <Link
            to="/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.85rem 1.8rem',
              background: 'transparent',
              color: '#fff',
              border: '1px solid rgba(255,255,255,0.3)',
              borderRadius: '0.5rem',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: '0.95rem',
              textDecoration: 'none',
              backdropFilter: 'blur(8px)',
              transition: 'border-color 0.2s, transform 0.2s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <Phone size={18} />
            Contact Us
          </Link>
        </motion.div>

        {/* Quick nav links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{ marginTop: '3rem' }}
        >
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.8rem',
            color: 'rgba(255,255,255,0.4)',
            marginBottom: '1rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}>
            Explore
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            {[
              { label: 'Villas', to: '/villas' },
              { label: 'Events', to: '/events' },
              { label: 'Gallery', to: '/gallery' },
              { label: 'About', to: '/about' },
            ].map(link => (
              <Link
                key={link.to}
                to={link.to}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.88rem',
                  color: 'rgba(255,255,255,0.55)',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.25rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.55)' }}
              >
                <ArrowRight size={12} />
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
