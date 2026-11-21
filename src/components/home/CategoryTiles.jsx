import { Link } from 'react-router-dom'

const categories = [
  { name: 'Loafers', slug: 'loafers', image: '' },
  { name: 'Oxfords', slug: 'oxfords', image: '' },
  { name: 'Slippers', slug: 'slippers', image: '' },
  { name: 'Boots', slug: 'boots', image: '' },
  { name: 'Sandals', slug: 'sandals', image: '' },
]

export default function CategoryTiles() {
  return (
    <section className="container-x py-12 md:py-14">
      <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">Shop by category</h2>
      <p className="mb-6 mt-1 text-mute">Find your style</p>

      <ul className="grid grid-cols-2 gap-3 md:grid-cols-5 md:gap-4">
        {categories.map((c, i) => (
          <li key={c.slug} className={i === 4 ? 'col-span-2 md:col-span-1' : ''}>
            <Link to={`/shop/${c.slug}`} className="group block text-center font-semibold">
              <div className="mb-2 overflow-hidden rounded-md bg-stone">
                {c.image ? (
                  <img
                    src={c.image}
                    alt=""
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-300 group-hover:scale-105"
                  />
                ) : (
                  <div className="aspect-[4/3]" />
                )}
              </div>
              {c.name}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  )
}