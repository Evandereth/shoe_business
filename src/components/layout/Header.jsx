import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../lib/catalog'

const links = [
  { to: '/shop', label: 'New in' },
  ...CATEGORIES.map((c) => ({ to: `/shop/${c.slug}`, label: c.name })),
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
  bag: 'M6 8h12l1 12H5L6 8zM9 8V6a3 3 0 016 0v2',
}

export default function Header({ cartCount = 0, onCartClick }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const menuButtonRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (!open) return

    const closeOnOutsideClick = (event) => {
      if (
        !menuButtonRef.current?.contains(event.target) &&
        !mobileMenuRef.current?.contains(event.target)
      ) {
        setOpen(false)
      }
    }
    const closeOnScroll = () => setOpen(false)

    document.addEventListener('pointerdown', closeOnOutsideClick)
    window.addEventListener('scroll', closeOnScroll, { passive: true })
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      window.removeEventListener('scroll', closeOnScroll)
    }
  }, [open])

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
        <button
          ref={menuButtonRef}
          type="button"
          className="md:hidden cursor-pointer"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="mobile-navigation"
        >
          <Icon d={open ? icons.close : icons.menu} />
        </button>

        <Link to="/" className="font-logo text-2xl font-bold italic">Stilebyb</Link>

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
          <button
            onClick={onCartClick}
            className="flex items-center gap-1.5 font-semibold"
            aria-label={`Bag, ${cartCount} items`}
          >
            <Icon d={icons.bag} />
            <span className="hidden md:inline">Bag</span>
            <span className="rounded-full bg-ink px-1.5 text-[11px] leading-5 text-paper">{cartCount}</span>
          </button>
        </div>
      </div>

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
        </ul>
      </nav>

      {open && (
        <div ref={mobileMenuRef} id="mobile-navigation" className="border-t border-line bg-paper md:hidden">
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
          </ul>
        </div>
      )}
    </header>
  )
}