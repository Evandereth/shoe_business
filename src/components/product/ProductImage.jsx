import ShoeArt from './ShoeArt'

export default function ProductImage({ product, colourIndex = 0, imageIndex = 0, className = '' }) {
  const colour = product.colours[colourIndex] ?? product.colours[0]
  const src = colour.images[imageIndex]

  return (
    <div className={`bg-stone ${className}`}>
      {src ? (
        <img src={src} alt={`${product.name} in ${colour.name}`} loading="lazy" className="h-full w-full object-cover" />
      ) : (
        <div className="grid h-full w-full place-items-center">
          <ShoeArt hex={colour.hex} category={product.category} className="w-4/5" />
        </div>
      )}
    </div>
  )
}