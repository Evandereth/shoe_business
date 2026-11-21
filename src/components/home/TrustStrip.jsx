const items = [
  { title: 'Free Lagos delivery', text: 'On orders over ₦150,000' },
  { title: 'Made to your size', text: 'Ready in about 7 days' },
  { title: 'Secure checkout', text: 'Paystack, cards, transfer' },
  { title: '7-day exchange', text: 'On unworn pairs' },
]

export default function TrustStrip() {
  return (
    <section aria-label="Why shop with us" className="border-b border-line">
      <ul className="container-x grid grid-cols-2 gap-5 py-6 text-[13px] md:grid-cols-4">
        {items.map((i) => (
          <li key={i.title}>
            <b className="block text-sm">{i.title}</b>
            <span className="text-mute">{i.text}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}