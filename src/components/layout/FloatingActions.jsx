import { useState, useEffect } from 'react'
import { Phone, ArrowUp, ChevronUp, Bot, MessageCircle } from 'lucide-react'
import AIChatbot from './AIChatbot'

const PHONE = '919063999784'
const DEFAULT_MSG = encodeURIComponent('Hi! I\'d like to know more about Hidden Grove Retreat. Please share details about availability and pricing.')

export default function FloatingActions() {
  const [isOpen, setIsOpen] = useState(false)
  const [chatbotOpen, setChatbotOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = (e) => {
    if (e) e.stopPropagation()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const toggleMenu = (e) => {
    if (e) e.stopPropagation()
    setIsOpen(!isOpen)
  }

  const openChatbot = (e) => {
    if (e) e.stopPropagation()
    setChatbotOpen(true)
    setIsOpen(false)
  }

  return (
    <>
      <div className="fixed bottom-6 right-6 z-[8900] flex flex-col items-center gap-3">
        {/* Scroll to Top button (visible when scrolled down) */}
        <button
          onClick={scrollToTop}
          className={`w-14 h-14 rounded-full bg-white text-[var(--primary)] border-2 border-[rgba(212,175,55,0.3)] shadow-2xl flex items-center justify-center hover:bg-[var(--beige)] hover:border-[var(--gold)] transition-all duration-500 cubic-bezier(0.25, 0.8, 0.25, 1) group scroll-top-btn ${
            showScrollTop
              ? 'opacity-100 scale-100 pointer-events-auto'
              : 'opacity-0 scale-75 pointer-events-none h-0 w-0 border-none shadow-none overflow-hidden'
          }`}
          style={{
            boxShadow: showScrollTop ? '0 10px 30px rgba(13, 59, 42, 0.15)' : 'none'
          }}
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="scroll-top-icon group-hover:text-[var(--gold)] transition-colors" />
        </button>

        {/* Expanded Stack of Floating Icons */}
        <div
          className={`flex flex-col items-center gap-3 transition-all duration-300 transform origin-bottom ${
            isOpen
              ? 'opacity-100 translate-y-0 scale-100 h-auto'
              : 'opacity-0 translate-y-10 scale-95 pointer-events-none h-0 overflow-hidden'
          }`}
        >
          {/* Call Host */}
          <a
            href={`tel:+${PHONE}`}
            onClick={(e) => e.stopPropagation()}
            className="w-12 h-12 rounded-full bg-[#0D3B2A] text-white border border-[rgba(212,175,55,0.4)] shadow-lg flex items-center justify-center hover:bg-[#124b36] hover:-translate-y-1 transition-all duration-300 group"
            aria-label="Call Host"
          >
            <Phone size={18} className="text-[var(--gold)] group-hover:scale-110 transition-transform" />
          </a>

          {/* WhatsApp */}
          <a
            href={`https://wa.me/${PHONE}?text=${DEFAULT_MSG}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-12 h-12 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:bg-[#20ba5a] hover:-translate-y-1 transition-all duration-300 group"
            aria-label="Chat on WhatsApp"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </a>

          {/* AI Chatbot trigger */}
          <button
            onClick={openChatbot}
            className="w-12 h-12 rounded-full bg-stone-900 text-white border border-[rgba(212,175,55,0.4)] shadow-lg flex items-center justify-center hover:bg-stone-850 hover:-translate-y-1 transition-all duration-300 group"
            aria-label="Open AI Assistant"
          >
            <Bot size={20} className="text-[var(--gold)] group-hover:scale-110 transition-transform" />
          </button>
        </div>

        {/* Collapsible Menu Trigger FAB */}
        <button
          onClick={toggleMenu}
          className={`w-14 h-14 rounded-full bg-[#0D3B2A] text-white border-2 border-[var(--gold)] shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 ${
            isOpen ? 'rotate-180 bg-[var(--gold)] text-stone-900 border-[#0D3B2A]' : ''
          }`}
          style={{
            boxShadow: '0 10px 30px rgba(13, 59, 42, 0.35)'
          }}
          aria-label="Toggle floating shortcuts"
        >
          <ChevronUp
            size={24}
            className={`transition-colors duration-300 ${isOpen ? 'text-[#0D3B2A]' : 'text-[var(--gold)]'}`}
          />
        </button>
      </div>

      {/* Interactive AI Chatbot Window */}
      <AIChatbot isOpen={chatbotOpen} onClose={() => setChatbotOpen(false)} />
    </>
  )
}
