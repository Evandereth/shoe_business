import { Link, useParams, useSearchParams } from 'react-router-dom'
import ProductCard from '../components/product/ProductCard'
import { products } from '../data/product'
import { CATEGORIES, sizeStatus } from '../lib/catalog'

const SIZES = [40, 41, 42, 43, 44, 45]
const SORTS = [
  ['newest', 'Newest'],
  ['price-asc', 'Price: low to high'],
  ['price-desc', 'Price: high to low'],
  ['name', 'Name: A–Z'],
]

export default function Shop() {
  const { category } = useParams()
  const [params, setParams] = useSearchParams()

  const size = Number(params.get('size')) || null
  const sort = params.get('sort') || 'newest'
  const search = (params.get('search') || '').trim().toLowerCase()

  const setParam = (key, value) => {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next)
  }

  const list = products.filter(
    (p) =>
      (!category || p.category === category) &&
      (!search || p.name.toLowerCase().includes(search)) &&
      (!size || sizeStatus(p, size) !== 'out')
  )
  if (sort === 'price-asc') list.sort((a, b) => a.price - b.price)
  if (sort === 'price-desc') list.sort((a, b) => b.price - a.price)
  if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name))
  if (sort === 'newest') list.sort((a, b) => Number(b.isNew) - Number(a.isNew))

  const title = CATEGORIES.find((c) => c.slug === category)?.name ?? 'All shoes'
  const pill = (active) =>
    `rounded-full border px-4 py-2 text-sm ${active ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'}`

  return (
    <div className="container-x pb-4">
      <nav className="py-4 text-[13px] text-mute" aria-label="Breadcrumb">
        <Link to="/">Home</Link> / <span className="text-ink">{title}</span>
      </nav>

      <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
      <p className="mb-5 mt-1 text-sm text-mute">
        {list.length} {list.length === 1 ? 'product' : 'products'}
        {search && <> matching “{params.get('search')}”</>}
      </p>

      <div className="mb-4 flex flex-wrap gap-2">
        <Link to="/shop" className={pill(!category)}>All</Link>
        {CATEGORIES.map((c) => (
          <Link key={c.slug} to={`/shop/${c.slug}`} className={pill(category === c.slug)}>{c.name}</Link>
        ))}
      </div>

      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-line py-4 text-sm">
        <div className="flex flex-wrap items-center gap-2">
          <span className="font-semibold">Size (EU)</span>
          {SIZES.map((s) => (
            <button
              key={s}
              type="button"
              aria-pressed={size === s}
              onClick={() => setParam('size', size === s ? '' : s)}
              className={`h-9 min-w-10 rounded-md border px-2.5 ${size === s ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'}`}
            >
              {s}
            </button>
          ))}
        </div>

        <label className="flex items-center gap-2 text-mute">
          Sort:
          <select
            value={sort}
            onChange={(e) => setParam('sort', e.target.value === 'newest' ? '' : e.target.value)}
            className="rounded-md border border-line bg-paper px-3 py-2 text-ink outline-none focus:border-ink"
          >
            {SORTS.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
          </select>
        </label>
      </div>

      {list.length === 0 ? (
        <div className="py-20 text-center">
          <p className="mb-4 text-mute">No shoes match that.</p>
          <Link to="/shop" className="btn">See all shoes</Link>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {list.map((p) => <ProductCard key={p.slug} product={p} />)}
        </div>
      )}
    </div>
  )
}