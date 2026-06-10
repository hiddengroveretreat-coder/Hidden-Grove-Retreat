import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useBooking } from '../../context/BookingContext'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  {
    label: 'Villas', path: '/villas',
    children: [
      { label: 'Heritage Villa', path: '/villas/heritage' },
      { label: 'Hobbit Villa', path: '/villas/hobbit' },
    ]
  },
  { label: 'Events', path: '/events' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
]

const eventTypes = ['Villa Stay', 'Wedding', 'Reception', 'Birthday Party', 'Corporate Event', 'Photoshoot', 'Family Gathering', 'Private Party', 'Other']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const { bookingOpen, setBookingOpen, preSelectedType, preSelectedMessage, preSelectedVilla } = useBooking()
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    villaOption: '',
    venueOption: '',
    guests: '',
    checkInDate: '',
    checkOutDate: '',
    eventDate: '',
    message: ''
  })
  const [sent, setSent] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (bookingOpen) {
      setForm(p => ({
        ...p,
        eventType: preSelectedType || p.eventType || '',
        message: preSelectedMessage || p.message || '',
        villaOption: preSelectedVilla || p.villaOption || ''
      }))
    }
  }, [bookingOpen, preSelectedType, preSelectedMessage, preSelectedVilla])

  useEffect(() => setMobileOpen(false), [location])

  const handleFormChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const handleFormSubmit = (e) => {
    e.preventDefault()
    let msg = ''
    if (form.eventType === 'Villa Stay') {
      msg = `Hi! I want to make a booking at Hidden Grove Retreat. Here are my details:

*Name:* ${form.name}
*Email:* ${form.email || 'N/A'}
*Phone:* ${form.phone}
*Inquiry Type:* Villa Stay
*Selected Villa:* ${form.villaOption || 'N/A'}
*Check-in Date:* ${form.checkInDate || 'N/A'}
*Check-out Date:* ${form.checkOutDate || 'N/A'}
*Number of Guests:* ${form.guests || 'N/A'}

*Message:* ${form.message || 'N/A'}`
    } else if (form.eventType && form.eventType !== 'Other') {
      msg = `Hi! I want to make a booking at Hidden Grove Retreat. Here are my details:

*Name:* ${form.name}
*Email:* ${form.email || 'N/A'}
*Phone:* ${form.phone}
*Inquiry Type:* ${form.eventType}
*Event Date:* ${form.eventDate || 'N/A'}
*Venue Area:* ${form.venueOption || 'N/A'}
*Number of Guests:* ${form.guests || 'N/A'}

*Message:* ${form.message || 'N/A'}`
    } else {
      msg = `Hi! I want to make a booking at Hidden Grove Retreat. Here are my details:

*Name:* ${form.name}
*Email:* ${form.email || 'N/A'}
*Phone:* ${form.phone}
*Inquiry Type:* ${form.eventType || 'N/A'}
*Preferred Date:* ${form.checkInDate || 'N/A'}
*Number of Guests:* ${form.guests || 'N/A'}

*Message:* ${form.message || 'N/A'}`
    }

    const encoded = encodeURIComponent(msg)
    window.open(`https://wa.me/919063999784?text=${encoded}`, '_blank')
    setSent(true)
    setForm({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      villaOption: '',
      venueOption: '',
      guests: '',
      checkInDate: '',
      checkOutDate: '',
      eventDate: '',
      message: ''
    })
    setTimeout(() => {
      setSent(false)
      setBookingOpen(false)
    }, 2000)
  }

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const linkColor = 'text-[var(--primary)]'
  const logoFilter = ''

  return (
    <>
      <nav className={`fixed left-0 right-0 z-[8000] transition-all duration-500 w-[92%] max-w-6xl mx-auto rounded-full navbar-glass shadow-2xl ${
        scrolled
          ? 'top-3 py-2 px-6 lg:px-10 border border-[rgba(212,175,55,0.35)]'
          : 'top-6 py-3 px-6 lg:px-10 border border-[rgba(212,175,55,0.25)]'
      }`}>
        <div className="w-full flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src="/images/logo_mark.png"
              alt="Hidden Grove Retreat Logo"
              className="h-14 w-auto object-contain transition-all duration-300"
            />
            <img
              src="/images/logo_text.png"
              alt="Hidden Grove Retreat"
              className="h-9 w-auto object-contain transition-all duration-300"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.path} className="relative group"
                onMouseEnter={() => link.children && setDropdownOpen(link.label)}
                onMouseLeave={() => setDropdownOpen(null)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 font-semibold transition-colors duration-300 hover:text-[var(--gold)] nav-link-item pb-1 ${
                    isActive(link.path) ? 'text-[var(--gold)] active-link-item' : linkColor
                  }`}
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '0.86rem',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    transition: 'all 0.3s'
                  }}
                >
                  {link.label}
                  {link.children && <ChevronDown size={12} />}
                </Link>
                {/* Dropdown */}
                {link.children && dropdownOpen === link.label && (
                  <div className="absolute top-full left-0 mt-3 w-48 bg-white shadow-xl border border-[rgba(212,175,55,0.15)] py-2 z-50 rounded-lg">
                    {link.children.map(child => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className={`block px-5 py-3 transition-colors first:rounded-t-lg last:rounded-b-lg ${
                          location.pathname === child.path
                            ? 'text-[var(--gold)] bg-[var(--beige)] font-semibold'
                            : 'text-[var(--primary)] hover:text-[var(--gold)] hover:bg-[var(--beige)]'
                        }`}
                        style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.85rem', letterSpacing: '0.05em' }}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <button
              onClick={() => setBookingOpen(true)}
              className="btn-gold text-[0.8rem] py-2 px-4 shadow-md font-bold tracking-wider cursor-pointer"
            >
              Book Now
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 ${linkColor}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div className="mobile-nav-overlay">
          <button
            className="absolute top-6 right-6 text-[var(--primary)]"
            onClick={() => setMobileOpen(false)}
          >
            <X size={28} />
          </button>
          <img src="/images/logo_mark.png" alt="Hidden Grove Retreat" className="h-16 w-auto object-contain mb-4" />
          {navLinks.map(link => (
            <div key={link.path} className="text-center">
              <Link
                to={link.path}
                className={`transition-colors ${
                  isActive(link.path) ? 'text-[var(--gold)] font-bold' : 'text-[var(--primary)] hover:text-[var(--gold)]'
                }`}
                style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.4rem', fontWeight: 600 }}
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="mt-1 space-y-1">
                  {link.children.map(c => (
                    <Link key={c.path} to={c.path}
                      className={`block transition-colors ${
                        location.pathname === c.path ? 'text-[var(--gold)] font-semibold' : 'text-[var(--accent)] hover:text-[var(--gold)]'
                      }`}
                      style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', letterSpacing: '0.1em' }}
                    >
                      {c.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <button
            onClick={() => {
              setMobileOpen(false)
              setBookingOpen(true)
            }}
            className="btn-gold mt-4 cursor-pointer"
          >
            Book Now
          </button>
        </div>
      )}

      {/* Booking Form Modal */}
      <AnimatePresence>
        {bookingOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-[rgba(5,20,12,0.65)] backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
            onClick={() => setBookingOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="bg-white border border-[rgba(212,175,55,0.25)] p-6 md:p-8 w-full max-w-lg relative shadow-2xl rounded-2xl my-8"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-[var(--primary)] hover:text-[var(--gold)] transition-colors p-1 cursor-pointer"
                onClick={() => setBookingOpen(false)}
              >
                <X size={20} />
              </button>

              <div className="text-center mb-6">
                <span className="section-label" style={{ fontSize: '0.62rem', letterSpacing: '0.2em' }}>Book Your Stay</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.6rem', fontWeight: 700, color: 'var(--primary)', marginTop: '0.25rem' }}>
                  Inquire & Reserve
                </h3>
                <div className="gold-divider mt-2" />
              </div>

              {sent && (
                <div style={{ background: '#f0fdf4', border: '1px solid #86efac', padding: '1rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem', borderRadius: '8px' }}>
                  <span style={{ fontSize: '1.1rem' }}>✅</span>
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: '#166534', fontWeight: 500 }}>
                    Opening WhatsApp to send your inquiry!
                  </p>
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4 max-h-[70vh] overflow-y-auto pr-1">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handleFormChange} required placeholder="Your name" className="luxury-input" />
                  </div>
                  <div>
                    <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Phone Number *</label>
                    <input name="phone" value={form.phone} onChange={handleFormChange} required placeholder="+91 XXXXX XXXXX" className="luxury-input" />
                  </div>
                </div>

                <div>
                  <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Email Address</label>
                  <input name="email" value={form.email} onChange={handleFormChange} type="email" placeholder="your@email.com" className="luxury-input" />
                </div>

                <div>
                  <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Event / Stay Type *</label>
                  <select name="eventType" value={form.eventType} onChange={handleFormChange} required className="luxury-input" style={{ cursor: 'pointer' }}>
                    <option value="">Select type...</option>
                    {eventTypes.map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>

                {/* Conditional Fields for Villa Stay */}
                {form.eventType === 'Villa Stay' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Select Villa *</label>
                        <select name="villaOption" value={form.villaOption} onChange={handleFormChange} required className="luxury-input" style={{ cursor: 'pointer' }}>
                          <option value="">Select villa...</option>
                          <option value="Heritage Villa">Heritage Villa (4 BR, up to 15 guests)</option>
                          <option value="Turf Hobbit Villa">Turf Hobbit Villa (2 BR, up to 6 guests)</option>
                          <option value="Both Villas (Full Property)">Both Villas (Full 1-Acre Property)</option>
                        </select>
                      </div>
                      <div>
                        <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Number of Guests *</label>
                        <input name="guests" value={form.guests} onChange={handleFormChange} required placeholder="e.g. 8" className="luxury-input" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Check-in Date *</label>
                        <input name="checkInDate" value={form.checkInDate} onChange={handleFormChange} type="date" required className="luxury-input" />
                      </div>
                      <div>
                        <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Check-out Date *</label>
                        <input name="checkOutDate" value={form.checkOutDate} onChange={handleFormChange} type="date" required className="luxury-input" />
                      </div>
                    </div>
                  </>
                )}

                {/* Conditional Fields for Event Celebrations */}
                {form.eventType && form.eventType !== 'Villa Stay' && form.eventType !== 'Other' && (
                  <>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Select Venue Area *</label>
                        <select name="venueOption" value={form.venueOption} onChange={handleFormChange} required className="luxury-input" style={{ cursor: 'pointer' }}>
                          <option value="">Select venue...</option>
                          <option value="Lawn Area">Event Lawns</option>
                          <option value="Pool Side Area">Private Pool Side</option>
                          <option value="Whole Retreat (Villas + Lawns + Pool)">Whole Retreat (Villas + Lawns + Pool)</option>
                        </select>
                      </div>
                      <div>
                        <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Estimated Guests *</label>
                        <input name="guests" value={form.guests} onChange={handleFormChange} required placeholder="e.g. 150" className="luxury-input" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Event Date *</label>
                        <input name="eventDate" value={form.eventDate} onChange={handleFormChange} type="date" required className="luxury-input" />
                      </div>
                    </div>
                  </>
                )}

                {/* Generic Fields for Other / Default */}
                {(!form.eventType || form.eventType === 'Other') && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Preferred Date *</label>
                      <input name="checkInDate" value={form.checkInDate} onChange={handleFormChange} type="date" required className="luxury-input" />
                    </div>
                    <div>
                      <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Estimated Guests</label>
                      <input name="guests" value={form.guests} onChange={handleFormChange} placeholder="e.g. 20" className="luxury-input" />
                    </div>
                  </div>
                )}

                <div>
                  <label className="luxury-label" style={{ fontSize: '0.65rem' }}>Message</label>
                  <textarea name="message" value={form.message} onChange={handleFormChange} rows={3} placeholder="Describe your stay or event requirements..." className="luxury-input" style={{ resize: 'none', fontFamily: "'Inter', sans-serif" }} />
                </div>

                <button type="submit" className="btn-gold w-full justify-center mt-2 cursor-pointer" style={{ fontSize: '0.78rem', padding: '0.8rem 1.5rem' }}>
                  Send Booking Request via WhatsApp
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
