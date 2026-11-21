import { useState } from 'react'
import { Link } from 'react-router-dom'
import Badge from '../ui/Badge'
import { naira } from '../../lib/format'

const swatchColours = {
  Black: '#111111',
  Brown: '#7a4a28',
  Oxblood: '#4a1f14',
  Olive: '#5d5f36',
  Tan: '#b8713a',
}

export default function ProductCard({ product }) {
  const [liked, setLiked] = useState(false)
  const { slug, name, price, images = [], made_to_order, colours = [], sold_out } = product

  return (
    <article className="group">
      <div className="relative overflow-hidden rounded-md bg-stone">
        <Link to={`/product/${slug}`} aria-label={name}>
          {images[0] ? (
            <img
              src={images[0]}
              alt={name}
              loading="lazy"
              className="aspect-square w-full object-cover transition duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="grid aspect-square place-items-center text-xs text-mute">
              No photo yet
            </div>
          )}
        </Link>

        <div className="absolute left-2.5 top-2.5">
          {sold_out ? (
            <Badge type="soldout">Sold out</Badge>
          ) : made_to_order ? (
            <Badge type="made">Made in 7 days</Badge>
          ) : (
            <Badge type="ready">Ready now</Badge>
          )}
        </div>

        <button
          type="button"
          onClick={() => setLiked(!liked)}
          aria-label={liked ? 'Remove from wishlist' : 'Add to wishlist'}
          aria-pressed={liked}
          className="absolute right-2.5 top-2.5 grid h-8 w-8 place-items-center rounded-full bg-paper/90"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" strokeWidth="1.8" stroke="currentColor"
               fill={liked ? 'currentColor' : 'none'}>
            <path d="M12 20s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.4-7 10-7 10z" />
          </svg>
        </button>
      </div>

      <Link to={`/product/${slug}`} className="mt-3 block text-[15px] font-semibold leading-snug">
        {name}
      </Link>
      <div className="font-semibold">{naira(price)}</div>

      {colours.length > 0 && (
        <div className="mt-1.5 flex gap-1.5">
          {colours.map((c) => (
            <span
              key={c}
              title={c}
              className="h-3.5 w-3.5 rounded-full border border-line"
              style={{ background: swatchColours[c] || '#ccc' }}
            />
          ))}
        </div>
      )}
    </article>
  )
}