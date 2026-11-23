import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import ProductImage from './ProductImage'
import { naira } from '../../lib/format'
import { badgeFor } from '../../lib/catalog'

export default function ProductCard({ product }) {
  const badge = badgeFor(product)

  return (
    <article className="group">
      <Link to={`/product/${product.slug}`} className="block">
        <div className="relative">
          <ProductImage
            product={product}
            className="aspect-square overflow-hidden rounded-md transition group-hover:opacity-90"
          />
          <span className="absolute left-2.5 top-2.5">
            <Badge type={badge.type}>{badge.label}</Badge>
          </span>
        </div>
        <h3 className="mt-3 text-[15px] font-semibold leading-snug">{product.name}</h3>
      </Link>
      <div className="font-semibold">{naira(product.price)}</div>
      <div className="mt-1.5 flex gap-1.5">
        {product.colours.map((c) => (
          <span key={c.name} title={c.name} className="h-3.5 w-3.5 rounded-full border border-line" style={{ background: c.hex }} />
        ))}
      </div>
    </article>
  )
}