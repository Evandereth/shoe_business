import { useState } from 'react'
import ProductCard from '../components/product/ProductCard'
import SizePicker from '../components/product/SizePicker'
import { products } from '../data/products'

export default function Shop() {
  const [size, setSize] = useState(null)

  return (
    <div className="container-x py-10">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Shop</h1>

      <div className="mb-8">
        <SizePicker available={[41, 42, 43]} value={size} onChange={setSize} />
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
        {products.map((p) => (
          <ProductCard key={p.slug} product={p} />
        ))}
      </div>
    </div>
  )
}