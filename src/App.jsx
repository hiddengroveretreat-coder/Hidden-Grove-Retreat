import { Routes, Route, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { BookingProvider } from './context/BookingContext'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingActions from './components/layout/FloatingActions'
import ScrollProgress from './components/layout/ScrollProgress'
import PageLoader from './components/layout/PageLoader'
import Home from './pages/Home'
import About from './pages/About'
import Villas from './pages/Villas'
import HeritageVilla from './pages/HeritageVilla'
import HobbitVilla from './pages/HobbitVilla'
import Events from './pages/Events'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import ScrollToTop from './components/layout/ScrollToTop'
import NotFound from './pages/NotFound'

export default function App() {
  const location = useLocation()
  const [loading, setLoading] = useState(true)
  const [isInitialLoad, setIsInitialLoad] = useState(true)

  useEffect(() => {
    // Initial load: 1.5 seconds loader
    const timer = setTimeout(() => {
      setLoading(false)
      setIsInitialLoad(false)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isInitialLoad) return

    // Route change: brief glimpse loader
    setLoading(true)
    const timer = setTimeout(() => setLoading(false), 800)
    return () => clearTimeout(timer)
  }, [location.pathname])

  return (
    <BookingProvider>
      <AnimatePresence mode="wait">
        {loading && (
          <PageLoader
            key={location.pathname + (isInitialLoad ? '-init' : '-glimpse')}
            isGlimpse={!isInitialLoad}
          />
        )}
      </AnimatePresence>
      <ScrollToTop />
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/villas" element={<Villas />} />
          <Route path="/villas/heritage" element={<HeritageVilla />} />
          <Route path="/villas/hobbit" element={<HobbitVilla />} />
          <Route path="/events" element={<Events />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
      <Analytics />
      <SpeedInsights />
    </BookingProvider>
  )
}

