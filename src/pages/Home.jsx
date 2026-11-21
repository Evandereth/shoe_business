import { Link } from 'react-router-dom'
import Hero from '../components/home/Hero'
import TrustStrip from '../components/home/TrustStrip'
import CategoryTiles from '../components/home/CategoryTiles'
import MadeForYourFoot from '../components/home/MadeForYourFoot'
import Reviews from '../components/home/Reviews'
import Newsletter from '../components/home/Newsletter'
import ProductCard from '../components/product/ProductCard'
import { products } from '../data/products'

function ProductRow({ title, subtitle, items }) {
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
        {items.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <CategoryTiles />
      <ProductRow title="New arrivals" subtitle="Fresh from the workshop" items={products} />
      <MadeForYourFoot />
      <ProductRow title="Best sellers" subtitle="The pairs customers order again" items={[...products].reverse()} />
      <Reviews />
      <Newsletter />
    </>
  )
}