import { Link } from 'react-router-dom'

const columns = [
  {
    title: 'Shop',
    links: [
      ['New in', '/shop'],
      ['Loafers', '/shop/loafers'],
      ['Oxfords', '/shop/oxfords'],
      ['Slippers', '/shop/slippers'],
      ['Boots', '/shop/boots'],
    ],
  },
  {
    title: 'Help',
    links: [
      ['Size guide', '/size-guide'],
      ['Delivery', '/delivery'],
      ['Returns', '/returns'],
      ['FAQs', '/faqs'],
    ],
  },
  {
    title: 'Account',
    links: [
      ['Sign in', '/account'],
      ['Orders', '/account/orders'],
      ['Wishlist', '/wishlist'],
    ],
  },
]

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-sm text-white/70">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 font-logo text-2xl font-bold italic text-paper">Stilebyb</div>
          <p className="max-w-xs">
            Premium handcrafted shoes, made in Lagos and worn globally.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="https://instagram.com/shop_stilebyb" target="_blank" rel="noreferrer" className="hover:text-paper">Instagram</a>
            <a href="https://wa.me/234XXXXXXXXXX" target="_blank" rel="noreferrer" className="hover:text-paper">WhatsApp</a>
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 font-semibold text-paper">{col.title}</h3>
            <ul className="space-y-2">
              {col.links.map(([label, to]) => (
                <li key={label}>
                  <Link to={to} className="hover:text-paper">{label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div>
          <h3 className="mb-3 font-semibold text-paper">Contact</h3>
          <ul className="space-y-2">
            <li>WhatsApp chat</li>
            <li>hello@stilebyb.com</li>
            <li>Lagos, Nigeria</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x flex flex-col justify-between gap-2 py-4 text-xs text-white/50 md:flex-row">
          <span>© {new Date().getFullYear()} Stilebyb. All rights reserved.</span>
          <span>Paystack · Cards · Bank transfer · USSD</span>
        </div>
      </div>
    </footer>
  )
}