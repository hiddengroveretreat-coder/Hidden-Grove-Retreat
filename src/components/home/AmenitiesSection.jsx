import { motion } from 'framer-motion'
import { Waves, Gamepad2, ParkingCircle, Bath, Flower2, Briefcase, Camera, Users, TreePine } from 'lucide-react'

const amenities = [
  { icon: Waves,        label: 'Swimming Pool',       desc: 'A private crystal oasis surrounded by lush lounge chairs.' },
  { icon: Gamepad2,     label: 'Indoor Games Room',   desc: 'Equipped with table tennis, board games, and recreation spaces.' },
  { icon: ParkingCircle,label: 'Parking Area',        desc: 'Spacious secure parking area within the retreat boundary.' },
  { icon: Bath,         label: 'Commercial Washrooms',desc: 'High-end fully equipped clean sanitary facilities for events.' },
  { icon: Flower2,      label: 'Wedding Venue',       desc: 'Dreamy backdrop lawns for pre-wedding & grand matrimonial events.' },
  { icon: Briefcase,    label: 'Corporate Events',    desc: 'Quiet natural ambience ideal for offsites, workshops & retreats.' },
  { icon: Camera,       label: 'Photoshoots',         desc: 'Scenic spots, rustic brickwork & greenery for photography.' },
  { icon: Users,        label: 'Family Gatherings',   desc: 'Celebrate milestones, reunions & dinners with absolute privacy.' },
  { icon: TreePine,     label: 'Nature Retreat',      desc: '1 acre of old trees, manicured grass & birds to escape city buzz.' },
]

export default function AmenitiesSection() {
  return (
    <section className="section-light py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label mb-2">Amenities</p>
          <div className="leaf-ornament my-4">
            <div className="leaf-line" />
            <span style={{ fontSize: '0.85rem' }}>🍃</span>
            <div className="leaf-line-right" />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)' }}>
            Everything You Need
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '480px', margin: '0.75rem auto 0' }}>
            World-class amenities to make your stay and events truly unforgettable.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {amenities.map((a, i) => {
            const Icon = a.icon
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative overflow-hidden p-8 flex flex-col items-center justify-center min-h-[160px] group cursor-pointer transition-all duration-500 rounded-2xl shadow-sm hover:shadow-xl"
                style={{ border: '1px solid rgba(212, 175, 55, 0.18)', background: 'white' }}
              >
                {/* Default State: Icon & Title */}
                <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:-translate-y-8 group-hover:opacity-0">
                  <Icon size={36} className="mb-4" style={{ color: 'var(--primary)', transition: 'color 0.35s ease' }} />
                  <p className="amenity-label" style={{ transition: 'color 0.35s ease' }}>{a.label}</p>
                </div>

                {/* Hover State: Short Description */}
                <div className="absolute inset-0 p-6 flex flex-col items-center justify-center text-center opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 bg-[var(--primary)] text-white">
                  <Icon size={24} style={{ color: 'var(--gold)', marginBottom: '0.5rem' }} />
                  <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'white', marginBottom: '0.5rem' }}>
                    {a.label}
                  </h4>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.78rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.5 }}>
                    {a.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
