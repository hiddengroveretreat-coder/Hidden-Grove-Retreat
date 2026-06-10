import { useState } from 'react'
import useSEO from '../hooks/useSEO'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowRight, Send } from 'lucide-react'
import PageHero from '../components/layout/PageHero'

const eventTypes = ['Villa Stay', 'Wedding', 'Reception', 'Birthday Party', 'Corporate Event', 'Photoshoot', 'Family Gathering', 'Private Party', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', eventType: '', guests: '', date: '', message: '' })
  const [sent, setSent] = useState(false)

  useSEO({
    title: 'Contact & Book Your Stay | Hidden Grove Retreat Hyderabad',
    description: 'Contact Hidden Grove Retreat to book a luxury villa stay, inquire about weddings, events, corporate offsites, or photoshoots. Call +91 9063999784 or send us a message.',
    path: '/contact',
  })

  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))


  const handleSubmit = (e) => {
    e.preventDefault()
    const msg = `Hi! I'm reaching out from the Hidden Grove Retreat website.

*Name:* ${form.name}
*Email:* ${form.email}
*Phone:* ${form.phone}
*Event Type:* ${form.eventType}
*Number of Guests:* ${form.guests}
*Preferred Date:* ${form.date}

*Message:* ${form.message}`

    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/919063999784?text=${encoded}`, '_blank')
    setSent(true)
    setForm({ name: '', email: '', phone: '', eventType: '', guests: '', date: '', message: '' })
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      <PageHero
        title="We'd Love to Hear From You"
        subtitle="Plan your visit and reach out to our team"
        img="/Lawn area/Lawn area/Lawn-1/WhatsApp Image 2026-06-10 at 3.23.47 PM.jpeg"
      />

      {/* Main Content */}
      <section className="section-light py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Left - Contact Info + Map */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Contact Details Card */}
              <div style={{ background: 'white', border: '1px solid rgba(212,175,55,0.15)', padding: '2rem' }}>
                <p className="section-label mb-3">Contact Details</p>
                <div className="gold-divider-left mb-6" />
                <div className="space-y-5">
                  <a href="tel:+919063999784" className="flex items-start gap-4 group">
                    <div style={{ width: '40px', height: '40px', background: 'var(--beige)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Phone size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.98rem', color: 'var(--primary)', fontWeight: 500 }} className="group-hover:text-[var(--gold)] transition-colors">+91 90639 99784</p>
                    </div>
                  </a>
                  <a href="mailto:hiddengroveretreat@gmail.com" className="flex items-start gap-4 group">
                    <div style={{ width: '40px', height: '40px', background: 'var(--beige)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Mail size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 500 }} className="group-hover:text-[var(--gold)] transition-colors">hiddengroveretreat@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div style={{ width: '40px', height: '40px', background: 'var(--beige)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <MapPin size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Address</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', color: 'var(--primary)', lineHeight: 1.6 }}>
                        Chilkur Balaji Temple Rd,<br />Chilkoor, Telangana 500029
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div style={{ width: '40px', height: '40px', background: 'var(--beige)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Clock size={16} style={{ color: 'var(--primary)' }} />
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Hours</p>
                      <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.92rem', color: 'var(--primary)' }}>Mon–Sun: 9:00 AM – 8:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Social */}
                <div style={{ borderTop: '1px solid var(--beige-dark)', marginTop: '1.5rem', paddingTop: '1.5rem' }}>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--text-muted)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Follow Us</p>
                  <div className="flex gap-3">
                    <a href="https://www.instagram.com/hiddengroveretreat" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--gold)] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem', fontWeight: 600 }}>
                      <Instagram size={16} /> Instagram
                    </a>
                    <a href="https://www.facebook.com/share/1CYbm4qtJT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2 text-[var(--primary)] hover:text-[var(--gold)] transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.78rem', fontWeight: 600 }}>
                      <Facebook size={16} /> Facebook
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20inquire%20about%20Hidden%20Grove%20Retreat."
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#25D366', padding: '1.25rem 1.5rem', color: 'white', textDecoration: 'none', transition: 'all 0.3s' }}
                className="hover:bg-[#20ba5a]"
              >
                <svg viewBox="0 0 24 24" width="28" height="28" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.05rem', fontWeight: 600 }}>Chat on WhatsApp</p>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', opacity: 0.9 }}>Quick response guaranteed</p>
                </div>
              </a>

              {/* Map */}
              <div style={{ overflow: 'hidden', border: '1px solid rgba(212,175,55,0.2)' }}>
                <iframe
                  title="Hidden Grove Retreat Location"
                  src="https://maps.google.com/maps?q=Chilkur+Balaji+Temple+Road+Chilkoor+Telangana+500029&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="240"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen=""
                  loading="lazy"
                />
              </div>
            </motion.div>

            {/* Right - Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9 }}
              className="lg:col-span-3"
            >
              <div style={{ background: 'white', border: '1px solid rgba(212,175,55,0.15)', padding: '2.5rem' }}>
                <p className="section-label mb-3">Send an Inquiry</p>
                <div className="gold-divider-left mb-5" />
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem' }}>
                  Plan Your Visit
                </h2>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '2rem' }}>
                  Fill out the form below and we'll respond via WhatsApp within minutes.
                </p>

                {sent && (
                  <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.25rem' }}>✅</span>
                    <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9rem', color: '#166534', fontWeight: 500 }}>
                      Your inquiry has been sent via WhatsApp! We'll be in touch shortly.
                    </p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="luxury-label">Full Name *</label>
                      <input name="name" value={form.name} onChange={handleChange} required placeholder="Your full name" className="luxury-input" />
                    </div>
                    <div>
                      <label className="luxury-label">Phone Number *</label>
                      <input name="phone" value={form.phone} onChange={handleChange} required placeholder="+91 XXXXX XXXXX" className="luxury-input" />
                    </div>
                  </div>
                  <div>
                    <label className="luxury-label">Email Address</label>
                    <input name="email" value={form.email} onChange={handleChange} type="email" placeholder="your@email.com" className="luxury-input" />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="luxury-label">Event / Stay Type *</label>
                      <select name="eventType" value={form.eventType} onChange={handleChange} required className="luxury-input" style={{ cursor: 'pointer' }}>
                        <option value="">Select type...</option>
                        {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="luxury-label">Number of Guests</label>
                      <input name="guests" value={form.guests} onChange={handleChange} placeholder="e.g. 50" className="luxury-input" />
                    </div>
                  </div>
                  <div>
                    <label className="luxury-label">Preferred Date</label>
                    <input name="date" value={form.date} onChange={handleChange} type="date" className="luxury-input" />
                  </div>
                  <div>
                    <label className="luxury-label">Message</label>
                    <textarea name="message" value={form.message} onChange={handleChange} rows={4} placeholder="Tell us about your event, requirements, or any questions..." className="luxury-input" style={{ resize: 'vertical', fontFamily: "'Inter', sans-serif" }} />
                  </div>
                  <button type="submit" className="btn-gold w-full justify-center" style={{ fontSize: '0.82rem' }}>
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" style={{ marginRight: '4px' }}>
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Send Inquiry via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
