import useSEO from '../hooks/useSEO'
import HeroSection from '../components/home/HeroSection'
import AboutSection from '../components/home/AboutSection'
import VillasSection from '../components/home/VillasSection'
import EventSpacesSection from '../components/home/EventSpacesSection'
import AmenitiesSection from '../components/home/AmenitiesSection'
import GalleryPreviewSection from '../components/home/GalleryPreviewSection'
import TestimonialsSection from '../components/home/TestimonialsSection'
import BookingCTASection from '../components/home/BookingCTASection'

export default function Home() {
  useSEO({
    title: 'Hidden Grove Retreat | Luxury Villas & Private Events in Hyderabad',
    description: 'Hidden Grove Retreat - A private 1-acre luxury destination near Chilkur Balaji Temple, Hyderabad. Premium Heritage & Hobbit villas, private pool, wedding lawns, and corporate event spaces.',
    path: '/',
  })

  return (
    <>
      <HeroSection />
      <AboutSection />
      <VillasSection />
      <EventSpacesSection />
      <AmenitiesSection />
      <GalleryPreviewSection />
      <TestimonialsSection />
      <BookingCTASection />
    </>
  )
}

