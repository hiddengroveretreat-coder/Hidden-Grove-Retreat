import { useState, useEffect, useRef } from 'react'
import { Send, X, Bot, Sparkles } from 'lucide-react'

// Pre-programmed keyword matches and their corresponding bot responses
const RESPONSES = [
  {
    keywords: ['villa', 'villas', 'stay', 'room', 'rooms', 'accommodation', 'heritage', 'hobbit'],
    text: "We offer two distinct, ultra-premium villas on our 1-acre private sanctuary:\n\n1. **Heritage Villa**: Classic traditional elegance featuring 3 luxury bedrooms, rich wooden ceilings, and a spacious private courtyard.\n2. **Hobbit Villa**: Hyderabad's first subterranean turf-roof villa, featuring circular doors, cozy organic curves, and a private lawn.\n\nBoth villas include access to the private pool and event lawns. Which villa would you like to know more about?"
  },
  {
    keywords: ['price', 'pricing', 'cost', 'rate', 'rates', 'tariff', 'tariffs', 'charge', 'charges', 'fee', 'how much'],
    text: "Hidden Grove Retreat stay tariffs depend on the day of the week and the villa selected:\n\n- **Stays (Weekdays)**: Stays start from Rs. 15,000/night.\n- **Stays (Weekends/Holidays)**: Stays start from Rs. 20,000/night.\n- **Events & Celebrations**: Custom pricing based on guest count and layout.\n\nWould you like me to connect you with our booking host on WhatsApp for availability?"
  },
  {
    keywords: ['book', 'booking', 'reserve', 'reservation', 'contact', 'number', 'phone', 'call', 'mobile', 'host', 'whatsapp'],
    text: "To check availability or secure a booking, you can call or WhatsApp our host directly at **+91 90639 99784**.\n\nYou can also click the Call or WhatsApp buttons in the floating menu. We look forward to hosting you!"
  },
  {
    keywords: ['event', 'events', 'lawn', 'lawns', 'wedding', 'weddings', 'party', 'parties', 'capacity', 'guest', 'guests', 'birthday', 'photoshoot'],
    text: "Our private 1-acre property is designed for stays and premium events! We feature:\n\n- **2 Distinct Lawns**: Ideal for weddings, receptions, birthdays, corporate getaways, and fashion shoots.\n- **Event Capacity**: Can comfortably host up to 400+ guests.\n- **Private Pool Area**: A gorgeous backdrop for sundowners or cocktail tables.\n\nWould you like details on event rates?"
  },
  {
    keywords: ['location', 'address', 'direction', 'directions', 'where', 'map', 'route', 'reach', 'far', 'chilkur'],
    text: "We are located at:\n**Chilkur Balaji Temple Rd, Chilkoor, Telangana 500029**.\n\nNestled in a peaceful, lush green sanctuary near the sacred Chilkur Balaji Temple, we are just a short drive from Hyderabad's main city. Search 'Hidden Grove Retreat' on Google Maps for direct navigation!"
  },
  {
    keywords: ['pool', 'swimming', 'water'],
    text: "Yes, we feature a spectacular private swimming pool (our 'Crystal Oasis') surrounded by greenery, complete with elegant poolside lounging chairs. Perfect for a refreshing dip during your stay or as a backdrop for evening celebrations!"
  }
]

const DEFAULT_BOT_RESPONSE = "Thank you for asking! I can help you with details about our **villas** (Heritage & Hobbit), **pricing**, **event bookings**, **location**, and **contact details**. What would you like to explore?"

export default function AIChatbot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! Welcome to Hidden Grove Retreat. I am your virtual assistant. How can I help you today?",
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  if (!isOpen) return null

  const getBotResponse = (userText) => {
    const text = userText.toLowerCase()
    for (const item of RESPONSES) {
      if (item.keywords.some(k => text.includes(k))) {
        return item.text
      }
    }
    return DEFAULT_BOT_RESPONSE
  }

  const handleSendMessage = (textToSend) => {
    if (!textToSend.trim()) return

    // Add user message
    const userMsg = {
      sender: 'user',
      text: textToSend,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
    setMessages(prev => [...prev, userMsg])
    setInputValue('')

    // Show typing status and delay reply
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      const botReplyText = getBotResponse(textToSend)
      const botMsg = {
        sender: 'bot',
        text: botReplyText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages(prev => [...prev, botMsg])
    }, 700)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSendMessage(inputValue)
    }
  }

  const quickReplies = [
    { label: 'Explore Villas', query: 'Tell me about the villas' },
    { label: 'View Tariffs', query: 'What is the pricing?' },
    { label: 'Event Lawns', query: 'Can I host an event with 200 guests?' },
    { label: 'Location Map', query: 'Where is Hidden Grove Retreat located?' },
    { label: 'Book Now', query: 'How do I contact you to book?' }
  ]

  // Helper to format bot responses with basic markdown (bold text)
  const formatMessageText = (text) => {
    return text.split('\n').map((line, lineIdx) => {
      // Parse bold tags **text**
      const parts = line.split(/\*\*([\s\S]*?)\*\*/g)
      return (
        <span key={lineIdx} className="block mb-1">
          {parts.map((part, partIdx) => {
            // odd indices are inside the ** tags
            if (partIdx % 2 === 1) {
              return <strong key={partIdx} className="font-semibold text-emerald-950">{part}</strong>
            }
            return part
          })}
        </span>
      )
    })
  }

  return (
    <div
      className="fixed bottom-24 right-6 w-[360px] max-w-[calc(100vw-2rem)] h-[480px] max-h-[80vh] bg-stone-50 rounded-2xl shadow-2xl flex flex-col z-[9000] overflow-hidden border border-[rgba(212,175,55,0.25)] animate-fade-in-up"
      style={{
        boxShadow: '0 20px 50px rgba(13, 59, 42, 0.15)',
        animationDuration: '0.4s'
      }}
    >
      {/* Header */}
      <div className="bg-[#0D3B2A] text-white p-4 flex items-center justify-between border-b border-[var(--gold)]">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-[rgba(255,255,255,0.08)] flex items-center justify-center border border-[rgba(212,175,55,0.4)] relative">
            <Bot size={20} className="text-[var(--gold)] animate-pulse" />
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 border-2 border-[#0D3B2A] rounded-full"></span>
          </div>
          <div>
            <div className="flex items-center gap-1">
              <span className="font-semibold text-sm tracking-wide" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                Hidden Grove Bot
              </span>
              <Sparkles size={11} className="text-[var(--gold)]" />
            </div>
            <span className="text-[0.68rem] text-emerald-300 font-medium">Online & Ready to Help</span>
          </div>
        </div>
        <button
          onClick={onClose}
          className="text-stone-300 hover:text-white p-1 rounded-full hover:bg-[rgba(255,255,255,0.05)] transition-colors"
        >
          <X size={18} />
        </button>
      </div>

      {/* Messages area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs leading-relaxed shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-[#0D3B2A] text-white rounded-tr-none'
                  : 'bg-white text-stone-700 border border-stone-200/80 rounded-tl-none'
              }`}
            >
              <div className="break-words font-medium">
                {formatMessageText(msg.text)}
              </div>
              <span
                className={`block text-[0.62rem] mt-1 text-right ${
                  msg.sender === 'user' ? 'text-emerald-300/80' : 'text-stone-400'
                }`}
              >
                {msg.time}
              </span>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white text-stone-700 border border-stone-200/80 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
              <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
              <span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick replies */}
      <div className="px-4 py-2 border-t border-stone-100 bg-white/50 flex gap-2 overflow-x-auto scrollbar-none flex-shrink-0">
        {quickReplies.map((qr, idx) => (
          <button
            key={idx}
            onClick={() => handleSendMessage(qr.query)}
            className="flex-shrink-0 bg-stone-100 hover:bg-[var(--beige)] hover:border-[rgba(212,175,55,0.4)] text-[var(--primary)] border border-stone-200 rounded-full px-3 py-1.5 text-[0.68rem] font-semibold tracking-wide transition-all"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {qr.label}
          </button>
        ))}
      </div>

      {/* Input bar */}
      <div className="p-3 bg-white border-t border-stone-200 flex items-center gap-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about staying, pricing, location..."
          className="flex-1 bg-stone-100 text-stone-700 text-xs px-3.5 py-2.5 rounded-full outline-none focus:ring-1 focus:ring-[var(--gold)] border border-stone-200"
        />
        <button
          onClick={() => handleSendMessage(inputValue)}
          disabled={!inputValue.trim()}
          className="w-9 h-9 rounded-full bg-[#0D3B2A] hover:bg-[#124b36] disabled:bg-stone-200 disabled:text-stone-400 text-white flex items-center justify-center transition-colors shadow-md flex-shrink-0"
        >
          <Send size={14} className={inputValue.trim() ? 'text-[var(--gold)]' : ''} />
        </button>
      </div>
    </div>
  )
}
