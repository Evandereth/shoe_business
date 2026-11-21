import { Link } from 'react-router-dom'

const steps = [
  { title: '1. Trace', text: 'Foot on paper' },
  { title: '2. Measure', text: 'Heel to toe' },
  { title: '3. Order', text: 'Delivered to you' },
]

export default function MadeForYourFoot({ image = '' }) {
  return (
    <section className="bg-ink text-paper">
      <div className="grid md:grid-cols-2">
        <div className="px-4 py-12 md:px-14 md:py-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Made for your foot</h2>
          <p className="mb-6 mt-3 max-w-md text-white/70">
            Every pair is cut and stitched by hand. Trace your foot, send us the measurement,
            and we'll make your pair.
          </p>

          <ol className="mb-7 grid grid-cols-3 gap-4 text-sm">
            {steps.map((s) => (
              <li key={s.title}>
                <b className="block">{s.title}</b>
                <span className="text-white/60">{s.text}</span>
              </li>
            ))}
          </ol>

          <Link to="/size-guide" className="btn bg-paper text-ink">
            Read the size guide
          </Link>
        </div>

        <div className="min-h-64 bg-[#222]">
          {image && (
            <img src={image} alt="Stilebyb workshop" loading="lazy" className="h-full w-full object-cover" />
          )}
        </div>
      </div>
    </section>
  )
}