export default function PageLoader() {
  return (
    <div className="page-loader">
      <img src="/images/logo.jpeg" alt="Hidden Grove Retreat" className="loader-logo" />
      <p style={{
        fontFamily: "'Playfair Display', serif",
        fontSize: '1.1rem',
        color: 'var(--primary)',
        fontStyle: 'italic',
        opacity: 0.85
      }}>
        Hidden Grove Retreat
      </p>
      <div className="loader-line">
        <div className="loader-line-fill" />
      </div>
      <p style={{
        fontFamily: "'Montserrat', sans-serif",
        fontSize: '0.65rem',
        letterSpacing: '0.25em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }}>
        Where Nature Meets Luxury
      </p>
    </div>
  )
}
