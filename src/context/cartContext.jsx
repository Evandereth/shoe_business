import { useEffect, useState } from 'react'
import { CartContext } from './cartState'
const STORAGE_KEY = 'stilebyb-cart'

const load = () => {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY))
    return Array.isArray(stored) ? stored : []
  }
  catch { return [] }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(items)) } catch { /* ignore */ }
  }, [items])

  const addItem = (product, { colour, size, qty = 1, made = false }) => {
    const key = `${product.slug}|${colour.name}|${size}`
    setItems((prev) => {
      const found = prev.find((i) => i.key === key)
      if (found) return prev.map((i) => (i.key === key ? { ...i, qty: i.qty + qty } : i))
      return [
        ...prev,
        {
          key,
          slug: product.slug,
          name: product.name,
          category: product.category,
          price: product.price,
          colour: colour.name,
          hex: colour.hex,
          image: colour.images[0] ?? '',
          size,
          qty,
          made,
        },
      ]
    })
    setOpen(true)
  }

  const setQty = (key, qty) =>
    setItems((prev) =>
      qty < 1 ? prev.filter((i) => i.key !== key) : prev.map((i) => (i.key === key ? { ...i, qty } : i))
    )
  const removeItem = (key) => setItems((prev) => prev.filter((i) => i.key !== key))
  const clear = () => setItems([])

  const value = {
    items, addItem, setQty, removeItem, clear, open, setOpen,
    count: items.reduce((n, i) => n + i.qty, 0),
    subtotal: items.reduce((n, i) => n + i.price * i.qty, 0),
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}