import { useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

const links = [
  { to: '/shop', label: 'New in' },
  { to: '/shop/loafers', label: 'Loafers' },
  { to: '/shop/oxfords', label: 'Oxfords' },
  { to: '/shop/slippers', label: 'Slippers' },
  { to: '/shop/boots', label: 'Boots' },
  { to: '/shop/sandals', label: 'Sandals' },
  { to: '/size-guide', label: 'Measure your foot' },
]

const Icon = ({ d }) => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d={d} />
  </svg>
)

const icons = {
  menu: 'M4 7h16M4 12h16M4 17h16',
  close: 'M6 6l12 12M18 6L6 18',
  search: 'M11 4a7 7 0 100 14 7 7 0 000-14zM21 21l-4.3-4.3',
  heart: 'M12 20s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.4-7 10-7 10z',
  user: 'M12 12a4 4 0 100-8 4 4 0 000 8zM4 21a8 8 0 0116 0',
  bag: 'M6 8h12l1 12H5L6 8zM9 8V6a3 3 0 016 0v2',
}

export default function Header({ cartCount = 0, onCartClick }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    const q = query.trim()
    if (q) {
      navigate(`/shop?search=${encodeURIComponent(q)}`)
      setOpen(false)
    }
  }

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper">
      <div className="container-x flex h-16 items-center gap-4 md:gap-8">
        {/* Mobile menu button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <Icon d={open ? icons.close : icons.menu} />
        </button>

        <Link to="/" className="font-logo text-2xl font-bold italic">
          Stilebyb
        </Link>

        {/* Desktop search */}
        <form onSubmit={handleSearch} className="hidden flex-1 md:block">
          <label className="sr-only" htmlFor="site-search">Search</label>
          <input
            id="site-search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search loafers, slides, boots…"
            className="w-full rounded-full border border-line px-5 py-2.5 text-sm outline-none focus:border-ink"
          />
        </form>

        <div className="ml-auto flex items-center gap-5 text-sm md:ml-0">
          <Link to="/account" className="hidden items-center gap-1.5 md:flex" aria-label="Account">
            <Icon d={icons.user} /> Account
          </Link>
          <Link to="/wishlist" className="hidden items-center gap-1.5 md:flex" aria-label="Wishlist">
            <Icon d={icons.heart} /> Wishlist
          </Link>
          <button onClick={onCartClick} className="relative flex items-center gap-1.5 font-semibold" aria-label={`Bag, ${cartCount} items`}>
            <Icon d={icons.bag} />
            <span className="hidden md:inline">Bag</span>
            <span className="rounded-full bg-ink px-1.5 text-[11px] leading-5 text-paper">{cartCount}</span>
          </button>
        </div>
      </div>

      {/* Desktop category nav */}
      <nav className="hidden border-t border-line md:block" aria-label="Main">
        <ul className="container-x flex gap-8 py-3 text-sm">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                end={l.to === '/shop'}
                className={({ isActive }) =>
                  `pb-1 ${isActive ? 'border-b-2 border-ink font-semibold' : 'text-ink/80 hover:text-ink'}`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
          <li className="ml-auto">
            <NavLink to="/shop?sale=1" className="font-semibold">Sale</NavLink>
          </li>
        </ul>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-paper md:hidden">
          <form onSubmit={handleSearch} className="px-4 pt-4">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search shoes…"
              aria-label="Search"
              className="w-full rounded-full border border-line px-4 py-2.5 text-sm outline-none focus:border-ink"
            />
          </form>
          <ul className="px-4 py-3">
            {links.map((l) => (
              <li key={l.to} className="border-b border-line last:border-0">
                <NavLink to={l.to} onClick={() => setOpen(false)} className="block py-3 text-[15px]">
                  {l.label}
                </NavLink>
              </li>
            ))}
            <li className="flex gap-6 pt-4 text-sm">
              <Link to="/account" onClick={() => setOpen(false)}>Account</Link>
              <Link to="/wishlist" onClick={() => setOpen(false)}>Wishlist</Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}