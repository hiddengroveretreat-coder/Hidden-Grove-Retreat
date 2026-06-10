import { motion } from 'framer-motion'
import { Waves, Gamepad2, ParkingCircle, Bath, Flower2, Briefcase, Camera, Users, TreePine } from 'lucide-react'

const amenities = [
  { icon: Waves,         label: 'Swimming Pool',       desc: 'A private crystal oasis surrounded by lush lounge chairs and tropical greenery.' },
  { icon: Gamepad2,      label: 'Sports & Recreation', desc: 'Snooker, Foosball, Table Tennis, board games, plus outdoor Cricket and Badminton.' },
  { icon: ParkingCircle, label: 'Parking Area',        desc: 'Spacious, secure parking within the retreat boundary for all guests.' },
  { icon: Bath,          label: 'Commercial Washrooms',desc: 'Commercial outdoor washrooms for men and women available for all events.' },
  { icon: Flower2,       label: 'Wedding Venue',       desc: 'Dreamy backdrop lawns for pre-wedding shoots & grand matrimonial celebrations.' },
  { icon: Briefcase,     label: 'Corporate Events',    desc: 'Quiet natural ambience ideal for offsites, workshops & executive retreats.' },
  { icon: Camera,        label: 'Photoshoots',         desc: 'Scenic spots, rustic brickwork & lush greenery perfect for photography.' },
  { icon: Users,         label: 'Family Gatherings',   desc: 'Celebrate milestones, reunions & dinners with complete privacy.' },
  { icon: TreePine,      label: 'Nature Retreat',      desc: '1 acre of old trees, manicured grass & birdsong to escape the city buzz.' },
]

export default function AmenitiesSection() {
  return (
    <section style={{ background: 'linear-gradient(160deg, #0a2e1e 0%, #0d3b2a 55%, #0f4530 100%)', position: 'relative', overflow: 'hidden', padding: '6rem 0 7rem' }}>

      {/* ── Botanical leaf SVG tile texture ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120' viewBox='0 0 120 120'%3E%3Cg fill='none' stroke='rgba(212,175,55,0.09)' stroke-width='0.8'%3E%3Cpath d='M10 60 Q30 20 60 10 Q50 40 10 60Z'/%3E%3Cpath d='M10 60 Q30 100 60 110 Q50 80 10 60Z'/%3E%3Ccircle cx='10' cy='60' r='2' fill='rgba(212,175,55,0.12)'/%3E%3Cpath d='M70 30 Q90 10 110 20 Q95 40 70 30Z'/%3E%3Cpath d='M70 30 Q60 55 80 65 Q85 45 70 30Z'/%3E%3Ccircle cx='70' cy='30' r='1.5' fill='rgba(212,175,55,0.1)'/%3E%3Cpath d='M90 85 Q110 70 115 90 Q100 100 90 85Z'/%3E%3Cpath d='M90 85 Q75 95 70 115 Q88 105 90 85Z'/%3E%3Ccircle cx='90' cy='85' r='1.5' fill='rgba(212,175,55,0.1)'/%3E%3Cline x1='10' y1='60' x2='60' y2='10' stroke='rgba(212,175,55,0.05)' stroke-width='0.5'/%3E%3Cline x1='70' y1='30' x2='110' y2='20' stroke='rgba(212,175,55,0.05)' stroke-width='0.5'/%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '120px 120px',
      }} />

      {/* ── Grain / noise overlay ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.45,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E")`,
        backgroundSize: '256px 256px',
      }} />

      {/* ── Radial vignette darkening edges ── */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(5,18,12,0.55) 100%)',
      }} />

      {/* Glowing accent blobs */}
      <div style={{ position: 'absolute', top: '-6rem', left: '-4rem', width: '30rem', height: '30rem', background: 'radial-gradient(circle, rgba(212,175,55,0.07) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-6rem', right: '-4rem', width: '26rem', height: '26rem', background: 'radial-gradient(circle, rgba(37,211,102,0.06) 0%, transparent 65%)', borderRadius: '50%', pointerEvents: 'none', zIndex: 0 }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10" style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span style={{
            display: 'inline-block',
            fontFamily: "'Montserrat', sans-serif",
            fontSize: '0.7rem',
            fontWeight: 700,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '1rem',
          }}>
            ✦ &nbsp; Amenities &nbsp; ✦
          </span>

          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: 'clamp(2.2rem, 4.5vw, 3.2rem)',
            fontWeight: 700,
            color: '#fff',
            lineHeight: 1.15,
            marginBottom: '1rem',
          }}>
            Everything You <span style={{ color: 'var(--gold)' }}>Need</span>
          </h2>

          <div style={{ width: '60px', height: '2px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)', margin: '0 auto 1.25rem' }} />

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1rem',
            color: 'rgba(255,255,255,0.6)',
            maxWidth: '480px',
            margin: '0 auto',
            lineHeight: 1.7,
          }}>
            World-class amenities to make your stay and events truly unforgettable.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenities.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.55, delay: i * 0.07 }}
                className="relative overflow-hidden group cursor-pointer"
                style={{
                  borderRadius: '1.25rem',
                  border: '1px solid rgba(212,175,55,0.18)',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(8px)',
                  minHeight: '180px',
                  transition: 'border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease',
                }}
                whileHover={{ scale: 1.02, boxShadow: '0 20px 50px rgba(0,0,0,0.35)' }}
              >
                {/* Corner number */}
                <span style={{
                  position: 'absolute', top: '1rem', right: '1.1rem',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
                  color: 'rgba(212,175,55,0.35)',
                }}>
                  {String(i + 1).padStart(2, '0')}
                </span>

                {/* Default face */}
                <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-10 group-hover:opacity-0" style={{ padding: '2.5rem 2rem 2rem' }}>
                  {/* Icon badge */}
                  <div style={{
                    width: '64px', height: '64px', borderRadius: '50%',
                    background: 'rgba(212,175,55,0.1)',
                    border: '1px solid rgba(212,175,55,0.3)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1.1rem',
                    boxShadow: '0 0 20px rgba(212,175,55,0.12)',
                  }}>
                    <Icon size={26} style={{ color: 'var(--gold)' }} />
                  </div>
                  <p style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.85)',
                    textAlign: 'center',
                  }}>
                    {a.label}
                  </p>
                </div>

                {/* Hover reveal */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500"
                  style={{
                    background: 'linear-gradient(135deg, rgba(212,175,55,0.15) 0%, rgba(13,59,42,0.92) 100%)',
                    backdropFilter: 'blur(12px)',
                    padding: '2rem',
                    borderRadius: '1.25rem',
                  }}
                >
                  <div style={{
                    width: '42px', height: '42px', borderRadius: '50%',
                    background: 'rgba(212,175,55,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '0.75rem',
                    border: '1px solid rgba(212,175,55,0.5)',
                  }}>
                    <Icon size={20} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h4 style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--gold)', marginBottom: '0.6rem',
                  }}>
                    {a.label}
                  </h4>
                  <p style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '0.8rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6,
                  }}>
                    {a.desc}
                  </p>
                </div>

                {/* Bottom gold line on hover */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-500"
                  style={{ background: 'linear-gradient(90deg, var(--gold), rgba(212,175,55,0.3))' }} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
