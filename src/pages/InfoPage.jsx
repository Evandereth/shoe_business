const content = {
  'size-guide': {
    title: 'Size guide',
    text: 'Our shoes use European (EU) sizing. For the closest fit, measure the length of both feet from heel to longest toe and use the larger measurement.',
  },
  delivery: {
    title: 'Delivery',
    text: 'Lagos delivery is free for eligible orders over 150,000. Delivery outside Lagos is calculated based on destination and will be confirmed before payment.',
  },
  returns: {
    title: 'Returns and exchanges',
    text: 'Contact us on WhatsApp before returning or exchanging an item. Ready stock should be unworn and in original packaging; made-to-order pairs may require a fit adjustment.',
  },
}

export default function InfoPage({ page }) {
  const pageContent = content[page] ?? content.delivery

  return (
    <div className="container-x max-w-3xl py-12">
      <h1 className="text-3xl font-bold">{pageContent.title}</h1>
      <p className="mt-4 text-mute">{pageContent.text}</p>
    </div>
  )
}
