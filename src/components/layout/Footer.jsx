import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, Clock, Instagram, Facebook } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0a2d1f', color: 'rgba(255,255,255,0.85)' }}>
      {/* Top gold band */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, var(--gold), transparent)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img
              src="/images/logo_mark.png"
              alt="Hidden Grove Retreat Logo"
              className="h-14 w-auto object-contain opacity-95"
            />
            <img
              src="/images/logo_text.png"
              alt="Hidden Grove Retreat"
              className="h-9 w-auto object-contain opacity-95"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', lineHeight: 1.8, color: 'rgba(255,255,255,0.6)', marginBottom: '1.25rem' }}>
            A private 1-acre luxury destination for stays, weddings, events, and celebrations amidst nature.
          </p>
          <div className="flex items-center gap-3">
            <a href="https://www.instagram.com/hiddengroveretreat" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300">
              <Instagram size={15} />
            </a>
            <a href="https://www.facebook.com/share/1CYbm4qtJT/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300">
              <Facebook size={15} />
            </a>
            <a href="https://wa.me/919063999784" target="_blank" rel="noopener noreferrer"
              className="w-9 h-9 border border-[rgba(212,175,55,0.3)] flex items-center justify-center text-[var(--gold)] hover:bg-[var(--gold)] hover:text-black transition-all duration-300">
              <svg viewBox="0 0 24 24" width="15" height="15" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: 'Home', path: '/' },
              { label: 'About Us', path: '/about' },
              { label: 'Heritage Villa', path: '/villas/heritage' },
              { label: 'Hobbit Villa', path: '/villas/hobbit' },
              { label: 'Events & Weddings', path: '/events' },
              { label: 'Photo Gallery', path: '/gallery' },
              { label: 'Contact Us', path: '/contact' },
            ].map(l => (
              <li key={l.path}>
                <Link to={l.path}
                  className="text-[rgba(255,255,255,0.6)] hover:text-[var(--gold)] transition-colors"
                  style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem' }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Our Services
          </h4>
          <ul className="space-y-2">
            {['Villa Stays', 'Weddings & Receptions', 'Birthday Celebrations', 'Corporate Events', 'Photoshoots', 'Family Gatherings', 'Private Parties', 'Nature Retreats'].map(s => (
              <li key={s} style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', color: 'rgba(255,255,255,0.6)' }}>
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Contact Us
          </h4>
          <div className="space-y-4">
            <a href="tel:+919063999784" className="flex items-start gap-3 text-[rgba(255,255,255,0.65)] hover:text-[var(--gold)] transition-colors">
              <Phone size={15} className="mt-0.5 flex-shrink-0 text-[var(--gold)]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem' }}>+91 90639 99784</span>
            </a>
            <a href="mailto:hiddengroveretreat@gmail.com" className="flex items-start gap-3 text-[rgba(255,255,255,0.65)] hover:text-[var(--gold)] transition-colors">
              <Mail size={15} className="mt-0.5 flex-shrink-0 text-[var(--gold)]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.85rem' }}>hiddengroveretreat@gmail.com</span>
            </a>
            <div className="flex items-start gap-3 text-[rgba(255,255,255,0.65)]">
              <MapPin size={15} className="mt-0.5 flex-shrink-0 text-[var(--gold)]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem', lineHeight: 1.6 }}>
                Chilkur Balaji Temple Rd,<br />Chilkoor, Telangana 500029
              </span>
            </div>
            <div className="flex items-start gap-3 text-[rgba(255,255,255,0.65)]">
              <Clock size={15} className="mt-0.5 flex-shrink-0 text-[var(--gold)]" />
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.88rem' }}>
                Mon–Sun: 9:00 AM – 8:00 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(212,175,55,0.15)', padding: '1.25rem 0' }}>
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.4)' }}>
            © {new Date().getFullYear()} Hidden Grove Retreat. All rights reserved.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.7rem', color: 'rgba(212,175,55,0.5)' }}>
            Where Nature Meets Luxury
          </p>
        </div>
      </div>
    </footer>
  )
}
