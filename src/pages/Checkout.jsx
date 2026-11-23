import { Link } from 'react-router-dom'
import { useCart } from '../context/useCart'
import { naira } from '../lib/format'

export default function Checkout() {
  const { items, subtotal, clear } = useCart()

  if (items.length === 0) {
    return (
      <div className="container-x py-24 text-center">
        <h1 className="text-3xl font-bold">Your bag is empty</h1>
        <Link to="/shop" className="btn mt-6">Continue shopping</Link>
      </div>
    )
  }

  return (
    <div className="container-x py-10">
      <h1 className="text-3xl font-bold">Checkout</h1>
      <div className="mt-6 rounded-lg border border-line p-6">
        <p className="text-mute">Online payment checkout is not configured yet.</p>
        <p className="mt-2">Bag subtotal: <b>{naira(subtotal)}</b></p>
        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={clear} className="btn">Clear bag</button>
          <Link to="/shop" className="btn btn-outline">Continue shopping</Link>
        </div>
      </div>
    </div>
  )
}
