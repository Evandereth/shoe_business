export default function ShoeArt({ hex = '#111111', category = 'loafers', className = '' }) {
  const slide = category === 'slippers' || category === 'sandals'
  return (
    <svg viewBox="0 0 200 90" className={className} role="img" aria-label="Shoe illustration, photo coming soon">
      {slide ? (
        <>
          <path d="M10 66c0-8 6-12 16-14l112-22c20-4 44 6 50 22 3 8-2 14-12 14H22c-8 0-12-3-12-8z" fill={hex} />
          <path d="M60 40c30-6 60 0 90 16" stroke="#0006" strokeWidth="12" fill="none" />
        </>
      ) : (
        <>
          <path d="M8 64C8 42 28 32 58 30l40-3c20-2 34-12 52-5 20 8 40 20 42 36v8c0 6-6 8-12 8H22c-10 0-14-4-14-10z" fill={hex} />
          <path d="M70 30c14 8 36 10 58 2" stroke="#0006" strokeWidth="3" fill="none" />
        </>
      )}
      <rect x="8" y="76" width="184" height="6" rx="3" fill="#000" opacity=".3" />
    </svg>
  )
}