import { Link } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import ShoeArt from '../components/product/ShoeArt'
import { products } from '../data/product'
import { CATEGORIES } from '../lib/catalog'

const trust = [
  ['7-day exchange', 'On uworn pairs'],
  ['Made to your size', 'Ready in about a week'],
  ['Secure checkout', 'Paystack, cards, transfer'],
  ['Smooth Communication', 'Message us on WhatsApp'],
]


const reviews = [
  ['Fits like I was measured in person. The leather is beautiful.', 'Customer, Lagos'],
  ['Arrived on time and well packed. Definitely ordering again.', 'Customer, Abuja'],
  ['Great quality for the price.', 'Customer, Port Harcourt'],
]

function Row({ title, subtitle, items }) {
  return (
    <section className="container-x py-12">
      <div className="mb-6 flex items-end justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">{title}</h2>
          <p className="mt-1 text-mute">{subtitle}</p>
        </div>
        <Link to="/shop" className="text-sm underline">View all</Link>
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {items.map((p) => <ProductCard key={p.slug} product={p} />)}
      </div>
    </section>
  )
}

export default function Home() {
  const hero = products[0]
  const newIn = products.filter((p) => p.isNew).slice(0, 4)
  const best = products.filter((p) => p.isBestSeller).slice(0, 4)

  return (
    <>
      {/* Hero */}
      <section className="bg-fog">
        <div className="container-x grid items-center gap-8 py-10 md:grid-cols-2 md:gap-10 md:py-16">
          <div>
            <h1 className="text-[40px] font-bold leading-[1.05] tracking-tighter md:text-6xl">
              Handcrafted shoes, made for your foot.
            </h1>
            <p className="mb-7 mt-4 max-w-md text-mute md:text-[17px]">
              Premium leather shoes made in Lagos. Buy a pair that's ready now, or order yours made to size in about a week.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/shop" className="btn">Shop new arrivals</Link>
              <a href="#made-for-you" className="btn btn-outline">How it works</a>
            </div>
          </div>
          <div className="grid aspect-4/3 place-items-center rounded-md bg-stone md:aspect-square">
            <ShoeArt hex={hero.colours[0].hex} category={hero.category} className="w-4/5" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <ul className="container-x grid grid-cols-2 gap-5 border-b border-line py-6 text-[13px] md:grid-cols-4">
        {trust.map(([t, s]) => (
          <li key={t}><b className="block text-sm">{t}</b><span className="text-mute">{s}</span></li>
        ))}
      </ul>

      {/* Categories */}
      <section className="container-x py-12">
        <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">Shop by category</h2>
        <p className="mb-6 mt-1 text-mute">Find your style</p>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
          {CATEGORIES.map((c, i) => {
            const sample = products.find((p) => p.category === c.slug)
            return (
              <li key={c.slug} className={i === 4 ? 'col-span-2 md:col-span-1' : ''}>
                <Link to={`/shop/${c.slug}`} className="group block text-center font-semibold">
                  <div className="mb-2 grid aspect-4/3 place-items-center rounded-md bg-stone transition group-hover:opacity-90">
                    {sample && <ShoeArt hex={sample.colours[0].hex} category={c.slug} className="w-3/5" />}
                  </div>
                  {c.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </section>

      <Row title="New arrivals" subtitle="Fresh from the workshop" items={newIn} />

      {/* Made for your foot */}
      <section id="made-for-you" className="bg-ink text-paper py-10 flex flex-wrap justify-center items-center">
        <div className="container-x py-14 md:py-16">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Made for your foot</h2>
          <p className="mb-8 mt-3 max-w-lg text-white/70">
            Every pair is cut and stitched by hand. Choose your size, and if it isn't in stock we'll make it for you.
          </p>
          <ol className="grid gap-6 text-sm md:max-w-2xl md:grid-cols-3">
            {[['1. Choose', 'Pick your style, colour and size'], ['2. We make it', 'Cut and stitched by hand in Lagos'], ['3. Delivered', 'To your door, in Nigeria or abroad']].map(([t, s]) => (
              <li key={t}><b className="block">{t}</b><span className="text-white/60">{s}</span></li>
            ))}
          </ol>
        </div>

        {/* <div className='w-90 h-80 rounded-2xl bg-white'>
          <img src="" alt="an image for measuring your foot" />
        </div> */}
      </section>

      <Row title="Best sellers" subtitle="The pairs customers order again" items={best} />

      {/* Reviews (sample text) */}
      <section className="bg-fog py-12 md:py-14">
        <div className="container-x">
          <h2 className="mb-6 text-2xl font-bold tracking-tight md:text-[28px]">What customers say</h2>
          <ul className="grid gap-5 md:grid-cols-3">
            {reviews.map(([text, who]) => (
              <li key={who} className="rounded-xl border border-line bg-paper p-6">
                <span className="tracking-widest" aria-label="5 out of 5 stars">★★★★★</span>
                <p className="my-2.5">{text}</p>
                <small className="text-mute">{who}</small>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}