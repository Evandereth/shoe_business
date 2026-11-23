import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../context/useCart'
import ShoeArt from '../product/ShoeArt'
import { naira } from '../../lib/format'

export default function CartDrawer() {
  const { items, open, setOpen, setQty, removeItem, subtotal, count } = useCart()
  const close = () => setOpen(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, setOpen])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-label="Shopping bag">
      <div className="absolute inset-0 bg-ink/50" onClick={close} />

      <div className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col bg-paper">
        <div className="flex items-center justify-between border-b border-line px-5 py-4">
          <b>Your bag ({count})</b>
          <button type="button" onClick={close} aria-label="Close bag">✕</button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 p-6 text-center">
            <p className="text-mute">Your bag is empty.</p>
            <Link to="/shop" onClick={close} className="btn">Start shopping</Link>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto px-5">
              {items.map((i) => (
                <li key={i.key} className="flex gap-3 border-b border-line py-4 text-sm">
                  <div className="grid h-20 w-20 flex-none place-items-center overflow-hidden rounded-md bg-stone">
                    {i.image ? (
                      <img src={i.image} alt="" className="h-full w-full object-cover" />
                    ) : (
                      <ShoeArt hex={i.hex} category={i.category} className="w-4/5" />
                    )}
                  </div>

                  <div className="flex-1">
                    <Link to={`/product/${i.slug}`} onClick={close} className="font-semibold">{i.name}</Link>
                    <div className="text-mute">{i.colour} · EU {i.size}{i.made && ' · Made to order'}</div>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center rounded-full border border-line">
                        <button type="button" className="px-3 py-1" aria-label="Decrease quantity" onClick={() => setQty(i.key, i.qty - 1)}>−</button>
                        <span className="min-w-6 text-center">{i.qty}</span>
                        <button type="button" className="px-3 py-1" aria-label="Increase quantity" onClick={() => setQty(i.key, i.qty + 1)}>+</button>
                      </div>
                      <b>{naira(i.price * i.qty)}</b>
                    </div>
                    <button type="button" onClick={() => removeItem(i.key)} className="mt-1 text-xs text-mute underline">Remove</button>
                  </div>
                </li>
              ))}
            </ul>

            <div className="border-t border-line p-5">
              <div className="mb-1 flex justify-between"><span>Subtotal</span><b>{naira(subtotal)}</b></div>
              <p className="mb-4 text-xs text-mute">Delivery is calculated at checkout.</p>
              <Link to="/checkout" onClick={close} className="btn w-full">Checkout</Link>
              <button type="button" onClick={close} className="mt-2 w-full py-2 text-sm underline">Continue shopping</button>
            </div>
          </>
        )}
      </div>
    </div>
  )
}