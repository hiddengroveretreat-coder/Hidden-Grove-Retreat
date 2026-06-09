import { motion } from 'framer-motion'

export default function PageHero({ title, subtitle, img, children }) {
  return (
    <div className="relative flex items-end justify-start" style={{ height: '50vh', minHeight: '380px' }}>
      {/* Background Image */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url("${img}")`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
      
      {/* Premium Forest Green Vignette Overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(13, 59, 42, 0.78) 25%, rgba(13, 59, 42, 0.3) 100%)' }} />
      
      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pb-14 w-full text-left">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="section-label mb-2"
          style={{ color: 'var(--gold)', letterSpacing: '0.25em' }}
        >
          Hidden Grove Retreat
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.7 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: 'white',
            lineHeight: 1.15,
            textShadow: '0 2px 20px rgba(0,0,0,0.15)'
          }}
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.05rem',
              color: 'rgba(255,255,255,0.85)',
              marginTop: '0.5rem',
              fontWeight: 300
            }}
          >
            {subtitle}
          </motion.p>
        )}
        {children}
      </div>
    </div>
  )
}
