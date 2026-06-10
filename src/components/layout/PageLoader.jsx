import { motion } from 'framer-motion'

export default function PageLoader({ isGlimpse = false }) {
  return (
    <motion.div
      initial={isGlimpse ? { opacity: 0 } : { opacity: 1 }}
      animate={isGlimpse ? { opacity: 1 } : { opacity: 1 }}
      exit={{ y: '-100%', transition: { duration: isGlimpse ? 0.6 : 0.85, ease: [0.76, 0, 0.24, 1] } }}
      className="page-loader"
      style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--primary, #0D3B2A)', // Premium dark forest green background
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isGlimpse ? '1rem' : '1.5rem',
      }}
    >
      {/* Animated Logo Mark */}
      <motion.div
        initial={isGlimpse ? { opacity: 0, scale: 0.9 } : { opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: isGlimpse ? 0.45 : 0.9, ease: 'easeOut' }}
        style={{
          width: isGlimpse ? '70px' : '90px',
          height: isGlimpse ? '70px' : '90px',
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(212,175,55,0.35)',
          padding: '4px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
        }}
      >
        <img
          src="/images/logo_mark.png"
          alt="Hidden Grove Retreat Mark"
          className="w-full h-full object-contain"
          style={{ borderRadius: '50%' }}
        />
      </motion.div>

      {/* Animated Brand Title */}
      <div className="text-center">
        <motion.h2
          initial={isGlimpse ? { opacity: 0, y: 8 } : { opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: isGlimpse ? 0.05 : 0.2, duration: isGlimpse ? 0.4 : 0.8 }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: isGlimpse ? '1.5rem' : '1.8rem',
            color: 'white',
            fontWeight: 600,
            letterSpacing: '0.05em',
            lineHeight: 1.2,
          }}
        >
          Hidden Grove
        </motion.h2>
        {!isGlimpse && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '1.05rem',
              fontStyle: 'italic',
              color: 'var(--gold, #D4AF37)',
              marginTop: '0.1rem',
            }}
          >
            - Retreat -
          </motion.p>
        )}
      </div>

      {/* Expanding Loader Line */}
      <div
        className="loader-line"
        style={{
          width: isGlimpse ? '100px' : '140px',
          height: '2px',
          background: 'rgba(255, 255, 255, 0.12)',
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: isGlimpse ? 0.1 : 0.4, duration: isGlimpse ? 0.45 : 1.4, ease: 'easeInOut' }}
          className="loader-line-fill"
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--gold, #D4AF37)',
            transformOrigin: 'left',
          }}
        />
      </div>

      {/* Tagline */}
      {!isGlimpse && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.62rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 0.6)',
            marginTop: '0.5rem',
          }}
        >
          Where Nature Meets Luxury
        </motion.p>
      )}
    </motion.div>
  )
}

