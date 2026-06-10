import { createContext, useContext, useState } from 'react'

const BookingContext = createContext()

export function BookingProvider({ children }) {
  const [bookingOpen, setBookingOpen] = useState(false)
  const [preSelectedType, setPreSelectedType] = useState('')
  const [preSelectedMessage, setPreSelectedMessage] = useState('')
  const [preSelectedVilla, setPreSelectedVilla] = useState('')

  const openBooking = (type = '', message = '', villa = '') => {
    setPreSelectedType(type)
    setPreSelectedMessage(message)
    setPreSelectedVilla(villa)
    setBookingOpen(true)
  }

  const closeBooking = () => {
    setBookingOpen(false)
  }

  return (
    <BookingContext.Provider
      value={{
        bookingOpen,
        setBookingOpen,
        preSelectedType,
        preSelectedMessage,
        preSelectedVilla,
        openBooking,
        closeBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  )
}

export function useBooking() {
  return useContext(BookingContext)
}
