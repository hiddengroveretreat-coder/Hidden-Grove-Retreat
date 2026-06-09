import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
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

export default function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <BrowserRouter>
      <AnimatePresence>
        {loading && <PageLoader key="loader" />}
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
        </Routes>
      </main>
      <Footer />
      <FloatingActions />
      <Analytics />
      <SpeedInsights />
    </BrowserRouter>
  )
}
