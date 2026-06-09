import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Users } from 'lucide-react'
import PageHero from '../components/layout/PageHero'

const events = [
  {
    id: 'weddings',
    title: 'Weddings & Receptions',
    icon: '💍',
    img: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.48 AM (2).jpeg',
    desc: 'Your perfect wedding deserves a perfect venue. Our Grand Lawn accommodates 350-400 guests with ample space for all your wedding traditions, ceremonies, and celebrations. The lush natural backdrop creates breathtaking photographs and lifelong memories.',
    capacity: '350 – 400',
    features: ['Bridal Suite', 'Floral Decoration Setup', 'Catering Area', 'Parking for 100+ Vehicles', 'Luxury Restrooms', 'Wedding Photography Spots'],
    whatsapp: 'I want to inquire about hosting my Wedding at Hidden Grove Retreat.',
  },
  {
    id: 'birthdays',
    title: 'Birthday Celebrations',
    icon: '🎂',
    img: '/images/Games/WhatsApp Image 2026-06-09 at 11.59.49 AM (1).jpeg',
    desc: 'Make your milestone birthday unforgettable with a celebration amidst nature. Our Garden Terrace is perfect for intimate birthday parties with family and friends, creating a warm, magical atmosphere for your special day.',
    capacity: '100 – 150',
    features: ['Customizable Decor', 'Cake Cutting Setup', 'DJ & Sound System', 'Catering Space', 'Pool Access', 'Photo Opportunities'],
    whatsapp: 'I want to plan a Birthday Celebration at Hidden Grove Retreat.',
  },
  {
    id: 'corporate',
    title: 'Corporate Events',
    icon: '💼',
    img: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.50 AM (1).jpeg',
    desc: 'Step away from the boardroom and into nature. Our retreat provides the perfect setting for team-building activities, corporate offsites, product launches, and client entertaining. A refreshing change that inspires creativity and connection.',
    capacity: '50 – 400',
    features: ['AV Equipment Available', 'Breakout Areas', 'Catering Services', 'Team Building Spaces', 'Villa Accommodation', 'Transportation Assistance'],
    whatsapp: 'I want to plan a Corporate Event at Hidden Grove Retreat.',
  },
  {
    id: 'photoshoots',
    title: 'Photoshoots & Films',
    icon: '📸',
    img: '/images/Swimming_Pool/WhatsApp Image 2026-06-09 at 11.59.51 AM (2).jpeg',
    desc: 'A photographer\'s paradise — our property offers diverse backdrops from colonial heritage architecture to lush tropical greenery, the sparkling pool, and artistic outdoor spaces. Perfect for pre-wedding shoots, fashion photography, and film production.',
    capacity: 'Custom',
    features: ['Multiple Backdrops', 'Heritage Architecture', 'Poolside Sessions', 'Garden Settings', 'Natural Lighting', 'Flexible Timing'],
    whatsapp: 'I want to book a Photoshoot session at Hidden Grove Retreat.',
  },
  {
    id: 'family',
    title: 'Family Gatherings',
    icon: '🏡',
    img: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.53 AM (1).jpeg',
    desc: 'Reunite with your loved ones in a beautiful, private setting. Whether it\'s a family reunion, a festive celebration, or simply quality time together — our retreat offers the space and warmth to bring families together in the most meaningful way.',
    capacity: '30 – 200',
    features: ['Private Property', 'Kids Play Areas', 'BBQ Setup', 'Pool Access', 'Indoor Games', 'Villa Accommodation'],
    whatsapp: 'I want to book Hidden Grove Retreat for a Family Gathering.',
  },
  {
    id: 'private',
    title: 'Private Parties',
    icon: '🥂',
    img: '/images/Property images/WhatsApp Image 2026-06-09 at 11.59.54 AM (2).jpeg',
    desc: 'Celebrate your milestones — anniversaries, engagements, retirements, and more — in an exclusive private setting. Our team ensures every detail is perfect for your intimate celebration.',
    capacity: '20 – 150',
    features: ['Exclusive Property Access', 'Custom Decor', 'Premium Bar Setup', 'Private Pool', 'Personalized Service', 'Flexible Timing'],
    whatsapp: 'I want to plan a Private Party at Hidden Grove Retreat.',
  },
]

export default function Events() {
  useEffect(() => {
    document.title = 'Host Private Events & Weddings | Hidden Grove Retreat'
  }, [])

  return (
    <>

      <PageHero
        title="Events & Celebrations"
        subtitle="Every Occasion, Extraordinarily Crafted"
        img="/images/Property images/WhatsApp Image 2026-06-09 at 11.59.48 AM (2).jpeg"
      />

      {/* Events List */}
      {events.map((ev, i) => (
        <section key={ev.id} className={i % 2 === 0 ? 'section-white py-20' : 'section-light py-20'}>
          <div className="max-w-7xl mx-auto px-6 lg:px-10">
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              {/* Image */}
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <div className="img-zoom-wrap" style={{ aspectRatio: '4/3' }}>
                  <img src={ev.img} alt={ev.title} className="w-full h-full object-cover" />
                </div>
              </motion.div>

              {/* Content */}
              <motion.div initial={{ opacity: 0, x: i % 2 === 0 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{ev.icon}</div>
                <p className="section-label mb-2">Event Type</p>
                <div className="gold-divider-left mb-5" />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.75rem' }}>
                  {ev.title}
                </h2>
                <div className="flex items-center gap-2 mb-4">
                  <Users size={14} style={{ color: 'var(--gold)' }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', letterSpacing: '0.08em', color: 'var(--primary)', fontWeight: 600 }}>
                    Capacity: {ev.capacity} Guests
                  </span>
                </div>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1.5rem' }}>
                  {ev.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {ev.features.map(f => (
                    <span key={f} style={{ background: 'var(--beige)', border: '1px solid rgba(212,175,55,0.2)', padding: '0.3rem 0.85rem', fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 500, color: 'var(--primary)', letterSpacing: '0.04em' }}>
                      {f}
                    </span>
                  ))}
                </div>
                <a
                  href={`https://wa.me/919063999784?text=Hi!%20${encodeURIComponent(ev.whatsapp)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold"
                >
                  Inquire Now <ArrowRight size={14} />
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section style={{ background: 'var(--primary)' }} className="py-20 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', letterSpacing: '0.3em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>Get in Touch</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 700, color: 'white', marginBottom: '1.25rem' }}>
            Let's Plan Your Perfect Event
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', lineHeight: 1.8 }}>
            Our event specialists are ready to help you create an unforgettable experience tailored exactly to your vision.
          </p>
          <a
            href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20plan%20an%20event%20at%20Hidden%20Grove%20Retreat.%20Please%20share%20details%20and%20packages."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Plan Your Event on WhatsApp <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </>
  )
}
