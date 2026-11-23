import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import ProductImage from '../components/product/ProductImage'
import ProductCard from '../components/product/ProductCard'
import Badge from '../components/ui/Badge'
import { useCart } from '../context/useCart'
import { products } from '../data/product'
import { CATEGORIES, badgeFor, findProduct, sizeStatus } from '../lib/catalog'
import { naira } from '../lib/format'
import { WHATSAPP_NUMBER } from '../lib/config'

export default function Product() {
  const { slug } = useParams()
  const product = findProduct(products, slug)

  if (!product) {
    return (
      <div className="container-x py-24 text-center">
        <p className="mb-4 text-mute">We couldn't find that shoe.</p>
        <Link to="/shop" className="btn">Back to shop</Link>
      </div>
    )
  }
  // key resets the selections whenever you move to another product
  return <ProductView key={product.slug} product={product} />
}

function ProductView({ product }) {
  const { addItem } = useCart()
  const [colourIdx, setColourIdx] = useState(0)
  const [imageIdx, setImageIdx] = useState(0)
  const [size, setSize] = useState(null)
  const [qty, setQty] = useState(1)
  const [error, setError] = useState('')

  const colour = product.colours[colourIdx]
  const status = size ? sizeStatus(product, size) : null
  const badge = badgeFor(product)
  const category = CATEGORIES.find((c) => c.slug === product.category)
  const related = products.filter((p) => p.category === product.category && p.slug !== product.slug).slice(0, 4)

  const add = () => {
    if (!size) return setError('Please choose a size.')
    setError('')
    addItem(product, { colour, size, qty, made: status === 'made' })
  }

  const enquiry = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hello Stilebyb, I'm interested in the ${product.name} (${colour.name}).`
  )}`

  return (
    <div className="container-x pb-4">
      <nav className="py-4 text-[13px] text-mute" aria-label="Breadcrumb">
        <Link to="/">Home</Link> / <Link to={`/shop/${product.category}`}>{category?.name}</Link> /{' '}
        <span className="text-ink">{product.name}</span>
      </nav>

      <div className="grid gap-8 md:grid-cols-2 md:gap-14">
        {/* Gallery */}
        <div>
          <ProductImage
            product={product}
            colourIndex={colourIdx}
            imageIndex={imageIdx}
            className="aspect-square overflow-hidden rounded-md"
          />
          {colour.images.length > 1 && (
            <div className="mt-3 grid grid-cols-4 gap-3">
              {colour.images.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setImageIdx(i)}
                  aria-label={`Show photo ${i + 1}`}
                  className={`overflow-hidden rounded-md border-2 ${i === imageIdx ? 'border-ink' : 'border-transparent'}`}
                >
                  <ProductImage product={product} colourIndex={colourIdx} imageIndex={i} className="aspect-square" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div>
          <Badge type={badge.type}>{badge.label}</Badge>
          <h1 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{product.name}</h1>
          <div className="mb-4 mt-2 text-2xl font-bold">{naira(product.price)}</div>
          <p className="text-mute">{product.description}</p>

          {/* Colour */}
          <div className="mt-6">
            <div className="mb-2 text-sm font-semibold">Colour: {colour.name}</div>
            <div className="flex gap-3">
              {product.colours.map((c, i) => (
                <button
                  key={c.name}
                  type="button"
                  title={c.name}
                  aria-label={c.name}
                  aria-pressed={i === colourIdx}
                  onClick={() => { setColourIdx(i); setImageIdx(0) }}
                  className={`h-9 w-9 rounded-full border border-line ${i === colourIdx ? 'outline outline-2 outline-offset-2 outline-ink' : ''}`}
                  style={{ background: c.hex }}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="mt-6">
            <div className="mb-2 text-sm font-semibold">Size (EU)</div>
            <div role="radiogroup" aria-label="Size" className="flex flex-wrap gap-2.5">
              {product.sizes.map((s) => {
                const st = sizeStatus(product, s)
                const selected = size === s
                return (
                  <button
                    key={s}
                    type="button"
                    role="radio"
                    aria-checked={selected}
                    disabled={st === 'out'}
                    onClick={() => { setSize(s); setError('') }}
                    className={`h-11 min-w-12 rounded-md border px-3 text-sm ${
                      selected ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'
                    } ${st === 'out' ? 'cursor-not-allowed text-mute/50 line-through hover:border-line' : ''}`}
                  >
                    {s}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Availability note */}
          <div className="my-5 rounded-lg bg-fog px-4 py-3 text-sm" aria-live="polite">
            {!status && 'Choose a size to see availability.'}
            {status === 'ready' && <><b>Ready now.</b> This size is in stock.</>}
            {status === 'made' && <><b>Made for you.</b> Ready in about {product.leadTimeDays} days.</>}
          </div>

          {/* Quantity + add */}
          <div className="flex gap-3">
            <div className="flex items-center rounded-full border border-line">
              <button type="button" className="px-4 py-3" aria-label="Decrease quantity" onClick={() => setQty(Math.max(1, qty - 1))}>−</button>
              <span className="min-w-6 text-center" aria-live="polite">{qty}</span>
              <button type="button" className="px-4 py-3" aria-label="Increase quantity" onClick={() => setQty(Math.min(10, qty + 1))}>+</button>
            </div>
            <button type="button" onClick={add} className="btn flex-1">Add to bag</button>
          </div>
          {error && <p className="mt-2 text-sm text-red-600" role="alert">{error}</p>}

          <a href={enquiry} target="_blank" rel="noreferrer" className="btn btn-outline mt-3 w-full">
            Ask about this pair on WhatsApp
          </a>

          {/* Details */}
          <div className="mt-8 border-b border-line text-sm">
            <details open className="border-t border-line py-4">
              <summary className="cursor-pointer font-semibold">Details and materials</summary>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-mute">
                {product.details.map((d) => <li key={d}>{d}</li>)}
              </ul>
            </details>
            <details className="border-t border-line py-4">
              <summary className="cursor-pointer font-semibold">Delivery and returns</summary>
              <p className="mt-3 text-mute">
                Delivery fees and times are shown at checkout. For exchanges, message us on WhatsApp.
              </p>
            </details>
            <details className="border-t border-line py-4">
              <summary className="cursor-pointer font-semibold">Care guide</summary>
              <p className="mt-3 text-mute">
                Wipe with a soft cloth, condition the leather every few months, and store with shoe trees.
              </p>
            </details>
          </div>
        </div>
      </div>

      {related.length > 0 && (
        <section className="py-14">
          <h2 className="mb-6 text-2xl font-bold tracking-tight">You may also like</h2>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => <ProductCard key={p.slug} product={p} />)}
          </div>
        </section>
      )}
    </div>
  )
}