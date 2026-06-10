import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function VillaImageSlider({ images, name, path, guests, aspectRatio = '4/3' }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [isHovered, images.length])

  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const handleDotClick = (e, index) => {
    e.preventDefault()
    e.stopPropagation()
    setCurrentIndex(index)
  }

  return (
    <div
      className="relative w-full overflow-hidden group rounded-xl shadow-md hover:shadow-xl transition-shadow duration-500"
      style={{ aspectRatio }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Images */}
      <div className="w-full h-full relative">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-102 z-0'
            }`}
          >
            <img
              src={src}
              alt={`${name} - View ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Guest badge with shimmer */}
      {guests && (
        <div className="shimmer-badge z-20" style={{
          position: 'absolute',
          top: '1rem',
          right: '1rem',
          background: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(8px)',
          padding: '0.45rem 1rem',
          border: '1px solid rgba(212,175,55,0.45)',
        }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--primary)' }}>
            {guests}
          </span>
        </div>
      )}

      {/* Hover link overlay (if path is provided) */}
      {path && (
        <Link
          to={path}
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center pointer-events-none"
        >
          <span className="btn-outline-white text-xs pointer-events-auto">
            View Villa Details
          </span>
        </Link>
      )}

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 hover:scale-105 active:scale-95"
        style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
        aria-label="Previous image"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/70 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/10 hover:scale-105 active:scale-95"
        style={{ border: 'none', cursor: 'pointer', outline: 'none' }}
        aria-label="Next image"
      >
        <ChevronRight size={20} />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-1.5 bg-black/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={(e) => handleDotClick(e, index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-[var(--gold)] w-5' : 'bg-white/60 hover:bg-white'
            }`}
            style={{ border: 'none', padding: 0, cursor: 'pointer', outline: 'none' }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
