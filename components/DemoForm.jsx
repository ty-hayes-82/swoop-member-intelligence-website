'use client'
import { useMemo, useState } from 'react'
import { getSchedulerUrl } from '@/lib/scheduler'

export default function DemoForm({ origin = 'book-demo' }) {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const schedulerUrl = useMemo(() => getSchedulerUrl(), [])

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = new FormData(e.target)
    if (!form.get('source')) {
      form.set('source', origin)
    }
    const data = Object.fromEntries(form)

    try {
      const res = await fetch('/api/demo-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || 'Submission failed')
      setStatus('success')
      e.target.reset()
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <p className="text-2xl font-bold text-swoop-dark mb-2">Thanks!</p>
        <p className="text-swoop-muted text-sm">
          A confirmation email is on the way with your calendar link and next steps.
        </p>
        <a
          href={schedulerUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 inline-flex min-h-[44px] items-center justify-center rounded-lg border border-swoop-border px-4 py-2 text-sm font-semibold"
        >
          Open scheduler
        </a>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="source" value={origin} />
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor={`name-${origin}`}>Full name</label>
        <input
          id={`name-${origin}`}
          name="name"
          type="text"
          required
          autoComplete="name"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-dark focus:border-transparent outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor={`club-${origin}`}>Club name</label>
        <input
          id={`club-${origin}`}
          name="club"
          type="text"
          required
          autoComplete="organization"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-dark focus:border-transparent outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor={`email-${origin}`}>Email</label>
        <input
          id={`email-${origin}`}
          name="email"
          type="email"
          inputMode="email"
          required
          autoComplete="email"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-dark focus:border-transparent outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor={`phone-${origin}`}>Phone</label>
        <input
          id={`phone-${origin}`}
          name="phone"
          type="tel"
          inputMode="tel"
          pattern="[0-9+() -]*"
          required
          autoComplete="tel"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-dark focus:border-transparent outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1" htmlFor={`role-${origin}`}>Role (optional)</label>
        <input
          id={`role-${origin}`}
          name="role"
          type="text"
          placeholder="e.g., General Manager"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-dark focus:border-transparent outline-none"
        />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 bg-swoop-dark text-white font-semibold rounded-lg hover:bg-swoop-dark/90 transition disabled:opacity-50"
      >
        {status === 'submitting' ? 'Submitting…' : 'Submit'}
      </button>
      <p className="text-xs text-swoop-muted text-center">
        We send a confirmation email + calendar invite within minutes.
      </p>
    </form>
  )
}
