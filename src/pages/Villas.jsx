import useSEO from '../hooks/useSEO'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import PageHero from '../components/layout/PageHero'
import VillaImageSlider from '../components/layout/VillaImageSlider'
import { useBooking } from '../context/BookingContext'

const villas = [
  {
    id: 'heritage',
    name: 'Heritage Villa',
    tagline: 'Grand Colonial Elegance',
    desc: 'The Heritage Villa is a grand colonial-inspired retreat that seamlessly blends timeless architecture with modern luxury. With its spacious interiors and premium finishes, it is the perfect choice for larger groups and families seeking an unforgettable experience.',
    img: '/Heritage villa/Heritage villa/Heritage Villa outlook.png',
    guests: 'Up to 15 Guests',
    bedrooms: '4',
    path: '/villas/heritage',
    features: ['Grand Hall', 'Dining Area', 'Fully Functional Kitchen', '4 Bedrooms', 'Attached Bathrooms', 'Indoor Games Room', 'Private Entrance', 'Premium Furnishings'],
    images: ['/Heritage villa/Heritage villa/Heritage Villa outlook.png', '/Heritage villa/Heritage villa/Heritge Villa Front lawn.png', '/Heritage villa/Heritage villa/Sitout area.png', '/Heritage villa/Heritage villa/Hall area.png'],
  },
  {
    id: 'hobbit',
    name: 'Hobbit Villa',
    tagline: 'Nature-Inspired Hideaway',
    desc: 'Inspired by the whimsical architecture of nature, the Hobbit Villa is a charming and intimate retreat. Its green-covered exterior and cozy interiors make it a magical escape for couples, small families, and those who seek a closer connection with nature.',
    img: '/Hobbit Villa/Hobbit Villa/Hobbit Villa.png',
    guests: 'Up to 6 Guests',
    bedrooms: '2',
    path: '/villas/hobbit',
    features: ['Nature-Inspired Architecture', 'Spacious Hall', 'Fully Equipped Kitchen', '2 Bedrooms', 'Common Bathroom', 'Attached Bathroom', 'Green Covered Exterior', 'Cozy Garden View'],
    images: ['/Hobbit Villa/Hobbit Villa/Hobbit Villa.png', '/Hobbit Villa/Hobbit Villa/Hobbit villa main entrance-1.png', '/Hobbit Villa/Hobbit Villa/hobbit villa back view.png', '/Hobbit Villa/Hobbit Villa/Hall-1.png'],
  },
]

export default function Villas() {
  const { openBooking } = useBooking()
  useSEO({
    title: 'Luxury Villas & Private Pool Stays | Hidden Grove Retreat Hyderabad',
    description: 'Choose between the Grand Heritage Villa and the Turf Hobbit Villa at Hidden Grove Retreat. Both feature private pool access, curated interiors, and serene 1-acre nature grounds near Hyderabad.',
    path: '/villas',
  })

  return (
    <>
      <PageHero title="Our Premium Villas" subtitle="Two unique experiences, one extraordinary retreat" img="/Heritage villa/Heritage villa/Heritage Villa outlook.png" />


      {villas.map((villa, i) => (
        <section key={villa.id} className={i % 2 === 0 ? 'section-white py-20 lg:py-28' : 'section-light py-20 lg:py-28'}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Image Slider */}
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <VillaImageSlider
                  images={villa.images}
                  name={villa.name}
                  guests={villa.guests}
                  path={villa.path}
                  aspectRatio="16/10"
                />
              </motion.div>

              {/* Content */}
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <p className="section-label mb-2">{villa.tagline}</p>
                <div className="gold-divider-left mb-5" />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '1rem' }}>
                  {villa.name}
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1.5rem' }}>
                  {villa.desc}
                </p>

                {/* Quick info */}
                <div className="flex gap-6 mb-6">
                  <div style={{ textAlign: 'center', padding: '1rem 1.5rem', background: 'var(--beige)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: 'var(--primary)' }}>{villa.bedrooms}</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase' }}>Bedrooms</p>
                  </div>
                  <div style={{ textAlign: 'center', padding: '1rem 1.5rem', background: 'var(--beige)', border: '1px solid rgba(212,175,55,0.2)' }}>
                    <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1rem', fontWeight: 700, color: 'var(--primary)' }}>{villa.guests}</p>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'var(--accent)', textTransform: 'uppercase' }}>Max Guests</p>
                  </div>
                </div>

                {/* Features */}
                <div className="grid grid-cols-2 gap-2 mb-7">
                  {villa.features.map(f => (
                    <div key={f} className="flex items-center gap-2">
                      <Check size={13} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.87rem', color: 'var(--text-body)' }}>{f}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link to={villa.path} className="btn-primary text-xs">
                    View Full Details
                  </Link>
                  <button
                    onClick={() => openBooking('Villa Stay', `Hi! I want to book the ${villa.name} at Hidden Grove Retreat. Please share availability and pricing.`, villa.id === 'heritage' ? 'Heritage Villa' : 'Turf Hobbit Villa')}
                    className="btn-gold text-xs cursor-pointer"
                    style={{ border: 'none' }}
                  >
                    Book This Villa <ArrowRight size={13} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}
