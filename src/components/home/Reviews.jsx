const reviews = [
  { text: 'Fits like I was measured in person. The leather is beautiful.', who: 'Verified buyer, Lagos' },
  { text: 'Arrived in 6 days with a dust bag. Ordering the oxfords next.', who: 'Verified buyer, Abuja' },
  { text: 'Delivered to London without a scuff. Worth the wait.', who: 'Verified buyer, London' },
]

const Stars = ({ n = 5 }) => (
  <span className="tracking-widest" role="img" aria-label={`${n} out of 5 stars`}>
    {'★'.repeat(n)}
  </span>
)

export default function Reviews() {
  return (
    <section className="bg-fog py-12 md:py-14">
      <div className="container-x">
        <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">What customers say</h2>
        <p className="mb-6 mt-1 text-mute">4.9 average from 120+ reviews</p>

        <ul className="grid gap-5 md:grid-cols-3 md:gap-6">
          {reviews.map((r) => (
            <li key={r.who} className="rounded-xl border border-line bg-paper p-5 md:p-6">
              <Stars />
              <p className="my-2.5">{r.text}</p>
              <small className="text-mute">{r.who}</small>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}