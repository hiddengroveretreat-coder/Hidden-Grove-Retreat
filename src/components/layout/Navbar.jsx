import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'

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

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

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
            <a
              href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20make%20a%20booking%20at%20Hidden%20Grove%20Retreat."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold text-[0.8rem] py-2 px-4 shadow-md font-bold tracking-wider"
            >
              Book Now
            </a>
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
          <a
            href="https://wa.me/919063999784?text=Hi!%20I%20want%20to%20make%20a%20booking%20at%20Hidden%20Grove%20Retreat."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold mt-4"
          >
            Book Now
          </a>
        </div>
      )}
    </>
  )
}
