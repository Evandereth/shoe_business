export default function SizePicker({
  sizes = [40, 41, 42, 43, 44, 45],
  available = [],          // sizes currently in stock
  allAvailable = false,    // true for made-to-order products
  value,
  onChange,
}) {
  return (
    <div role="radiogroup" aria-label="Size (EU)" className="flex flex-wrap gap-2.5">
      {sizes.map((size) => {
        const inStock = allAvailable || available.includes(size)
        const selected = value === size
        return (
          <button
            key={size}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={!inStock}
            onClick={() => onChange(size)}
            className={`h-11 min-w-12 rounded-md border px-3 text-sm transition
              ${selected ? 'border-ink bg-ink text-paper' : 'border-line hover:border-ink'}
              ${!inStock ? 'cursor-not-allowed text-mute/50 line-through hover:border-line' : ''}`}
          >
            {size}
          </button>
        )
      })}
    </div>
  )
}