const col = (name, hex) => ({ name, hex, images: [] })
const ALL = [40, 41, 42, 43, 44, 45]
const LEATHER = ['Full-grain leather upper', 'Leather lining', 'Hand-stitched in Lagos']
const SAMPLE = 'Handcrafted premium leather footwear, finished and stitched locally in Lagos.'

const BLACK = '#111111', OXBLOOD = '#4a1f14', BROWN = '#7a4a28', TAN = '#b8713a', OLIVE = '#5d5f36'

export const products = [
  // ---- Loafers ----
  {
    slug: 'monk-strap-loafer', name: 'Monk Strap Loafer', category: 'loafers', price: 95000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Black', BLACK), col('Oxblood', OXBLOOD), col('Brown', BROWN)],
    sizes: ALL, readySizes: [41, 42, 43, 44], madeToOrder: true, leadTimeDays: 7, isNew: true, isBestSeller: true,
  },
  {
    slug: 'penny-loafer', name: 'Penny Loafer', category: 'loafers', price: 88000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Oxblood', OXBLOOD), col('Black', BLACK)],
    sizes: ALL, readySizes: [40, 42, 45], madeToOrder: true, leadTimeDays: 7, isNew: true, isBestSeller: false,
  },
  {
    slug: 'tassel-loafer', name: 'Tassel Loafer', category: 'loafers', price: 92000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Tan', TAN), col('Black', BLACK)],
    sizes: ALL, readySizes: [], madeToOrder: true, leadTimeDays: 10, isNew: false, isBestSeller: true,
  },
  // ---- Oxfords ----
  {
    slug: 'brogue-oxford', name: 'Brogue Oxford', category: 'oxfords', price: 110000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Black', BLACK), col('Brown', BROWN)],
    sizes: ALL, readySizes: [42, 43], madeToOrder: true, leadTimeDays: 7, isNew: true, isBestSeller: true,
  },
  {
    slug: 'cap-toe-oxford', name: 'Cap-toe Oxford', category: 'oxfords', price: 105000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Black', BLACK)],
    sizes: ALL, readySizes: [41, 42, 43, 44], madeToOrder: false, leadTimeDays: 0, isNew: false, isBestSeller: false,
  },
  {
    slug: 'derby-shoe', name: 'Derby Shoe', category: 'oxfords', price: 98000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Brown', BROWN), col('Black', BLACK)],
    sizes: ALL, readySizes: [43, 44], madeToOrder: true, leadTimeDays: 7, isNew: true, isBestSeller: false,
  },
  // ---- Boots ----
  {
    slug: 'chelsea-boot', name: 'Chelsea Boot', category: 'boots', price: 125000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Black', BLACK), col('Brown', BROWN)],
    sizes: ALL, readySizes: [41, 42, 43], madeToOrder: true, leadTimeDays: 10, isNew: false, isBestSeller: true,
  },
  {
    slug: 'chukka-boot', name: 'Chukka Boot', category: 'boots', price: 115000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Tan', TAN), col('Olive', OLIVE)],
    sizes: ALL, readySizes: [], madeToOrder: true, leadTimeDays: 10, isNew: false, isBestSeller: false,
  },
  // ---- Slippers ----
  {
    slug: 'cross-strap-slide', name: 'Cross-strap Slide', category: 'slippers', price: 45000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Tan', TAN), col('Black', BLACK), col('Brown', BROWN)],
    sizes: ALL, readySizes: [41, 42, 43, 44, 45], madeToOrder: true, leadTimeDays: 5, isNew: true, isBestSeller: true,
  },
  {
    slug: 'woven-slide', name: 'Woven Slide', category: 'slippers', price: 58000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Tan', TAN), col('Black', BLACK)],
    sizes: ALL, readySizes: [40, 41, 42], madeToOrder: true, leadTimeDays: 5, isNew: true, isBestSeller: false,
  },
  {
    slug: 'suede-slide', name: 'Suede Slide', category: 'slippers', price: 52000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Olive', OLIVE), col('Black', BLACK)],
    sizes: ALL, readySizes: [42, 43], madeToOrder: true, leadTimeDays: 5, isNew: false, isBestSeller: false,
  },
  // ---- Sandals ----
  {
    slug: 'leather-sandal', name: 'Leather Sandal', category: 'sandals', price: 48000,
    description: SAMPLE, details: LEATHER,
    colours: [col('Tan', TAN), col('Brown', BROWN)],
    sizes: ALL, readySizes: [41, 42, 43, 44], madeToOrder: false, leadTimeDays: 0, isNew: false, isBestSeller: false,
  },
]