import { Link } from 'react-router-dom'
import { CATEGORIES } from '../../lib/catalog'
import { WHATSAPP_NUMBER } from '../../lib/config'

export default function Footer() {
  return (
    <footer className="mt-20 bg-ink text-sm text-white/70">
      <div className="container-x grid gap-10 py-12 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-3 font-logo text-2xl font-bold italic text-paper">Stilebyb</div>
          <p className="max-w-xs">Premium handcrafted shoes, made in Lagos and worn globally.</p>
          <div className="mt-4 flex gap-4">
            <a href="https://instagram.com/shop_stilebyb" target="_blank" rel="noreferrer" className="hover:text-paper">Instagram</a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="hover:text-paper">WhatsApp</a>
          </div>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-paper">Shop</h3>
          <ul className="space-y-2">
            <li><Link to="/shop" className="hover:text-paper">New in</Link></li>
            {CATEGORIES.map((c) => (
              <li key={c.slug}><Link to={`/shop/${c.slug}`} className="hover:text-paper">{c.name}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-paper">Help</h3>
          <ul className="space-y-2">
            <li><Link to="/size-guide" className="hover:text-paper">Size guide</Link></li>
            <li><Link to="/delivery" className="hover:text-paper">Delivery</Link></li>
            <li><Link to="/returns" className="hover:text-paper">Returns</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="mb-3 font-semibold text-paper">Contact</h3>
          <ul className="space-y-2">
            <li>WhatsApp chat</li>
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