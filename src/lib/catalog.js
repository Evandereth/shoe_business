export const CATEGORIES = [
  { slug: 'loafers', name: 'Loafers' },
  { slug: 'oxfords', name: 'Oxfords' },
  { slug: 'slippers', name: 'Slippers' },
  { slug: 'boots', name: 'Boots' },
  { slug: 'sandals', name: 'Sandals' },
]

// 'ready' = in stock now, 'made' = can be made to order, 'out' = unavailable
export const sizeStatus = (product, size) => {
  if (product.readySizes.includes(size)) return 'ready'
  if (product.madeToOrder && product.sizes.includes(size)) return 'made'
  return 'out'
}

export const hasReadyStock = (p) => p.readySizes.length > 0

export const badgeFor = (p) => {
  if (hasReadyStock(p)) return { type: 'ready', label: 'Ready now' }
  if (p.madeToOrder) return { type: 'made', label: `Made in ${p.leadTimeDays} days` }
  return { type: 'soldout', label: 'Sold out' }
}

export const cardImage = (p) => p.colours[0]?.images[0] ?? ''

export const findProduct = (products, slug) => products.find((p) => p.slug === slug)