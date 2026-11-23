const styles = {
  ready: 'bg-paper text-ink',
  made: 'bg-paper text-ink',
  soldout: 'bg-stone text-mute',
}

export default function Badge({ type = 'ready', children }) {
  return (
    <span className={`inline-block rounded-full px-2.5 py-0.5 text-[11px] font-semibold ${styles[type]}`}>
      {children}
    </span>
  )
}