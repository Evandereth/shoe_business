import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | done

  const handleSubmit = async (e) => {
    e.preventDefault()
    const valid = /^\S+@\S+\.\S+$/.test(email.trim())
    if (!valid) return setStatus('error')

    // TODO: save to Supabase (subscribers table) when we connect the backend
    setStatus('done')
    setEmail('')
  }

  return (
    <section className="bg-fog px-4 py-12 text-center md:py-14">
      <h2 className="text-2xl font-bold tracking-tight md:text-[28px]">Get first access to new drops</h2>
      <p className="mb-5 mt-1 text-mute">Join the list for restocks and offers</p>

      {status === 'done' ? (
        <p className="font-semibold" role="status">Thanks! You're on the list.</p>
      ) : (
        <form onSubmit={handleSubmit} noValidate className="mx-auto flex max-w-md flex-col gap-2 sm:flex-row">
          <label htmlFor="newsletter-email" className="sr-only">Email address</label>
          <input
            id="newsletter-email"
            type="email"
            value={email}
            onChange={(e) => { setEmail(e.target.value); setStatus('idle') }}
            placeholder="Email address"
            aria-invalid={status === 'error'}
            className="flex-1 rounded-full border border-line bg-paper px-5 py-3 text-sm outline-none focus:border-ink"
          />
          <button type="submit" className="btn">Subscribe</button>
        </form>
      )}

      {status === 'error' && (
        <p className="mt-2 text-sm text-red-600" role="alert">Please enter a valid email address.</p>
      )}
    </section>
  )
}