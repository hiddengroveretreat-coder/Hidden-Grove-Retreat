import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [preSelectedType, setPreSelectedType] = useState('')
  const [preSelectedMessage, setPreSelectedMessage] = useState('')

  const openBooking = (type = '', message = '') => {
    setPreSelectedType(type)
    setPreSelectedMessage(message)
    setBookingOpen(true)
  }

  const closeBooking = () => {
    setBookingOpen(false)
  }

  return (
    <BookingContext.Provider value={{ bookingOpen, setBookingOpen, preSelectedType, preSelectedMessage, openBooking, closeBooking }}>
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  return useContext(BookingContext)
}
