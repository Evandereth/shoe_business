// International format, no + or spaces
export const WHATSAPP_NUMBER = '234XXXXXXXXXX'

// Placeholder prices. Confirm the real delivery fees with the owner.
export const DELIVERY = { lagos: 3500, other: 6000, freeOver: 150000 }

export const deliveryFee = (subtotal, region) =>
  region === 'lagos' && subtotal >= DELIVERY.freeOver ? 0 : DELIVERY[region]