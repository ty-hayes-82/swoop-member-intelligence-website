'use client'
import { useState } from 'react'

export default function DemoForm() {
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('submitting')
    setError('')

    const form = new FormData(e.target)
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
    } catch (err) {
      setError(err.message)
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <p className="text-2xl font-bold text-swoop-green mb-2">Thanks!</p>
        <p className="text-swoop-muted">We&apos;ll reach out within 24 hours to schedule your walkthrough.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium mb-1">First Name</label>
        <input name="name" type="text" required autoComplete="given-name"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-green focus:border-transparent outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Club Name</label>
        <input name="club" type="text" required autoComplete="organization"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-green focus:border-transparent outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email</label>
        <input name="email" type="email" required autoComplete="email"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-green focus:border-transparent outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input name="phone" type="tel" required autoComplete="tel"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-green focus:border-transparent outline-none" />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Role (optional)</label>
        <input name="role" type="text" placeholder="e.g., General Manager"
          className="w-full border border-swoop-border rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-swoop-green focus:border-transparent outline-none" />
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3 bg-swoop-green text-swoop-dark font-semibold rounded-lg hover:bg-swoop-green-hover transition disabled:opacity-50"
      >
        {status === 'submitting' ? 'Submitting...' : 'Book Your Demo'}
      </button>
      <p className="text-xs text-swoop-muted text-center">No credit card required · 30-minute walkthrough · Cancel anytime</p>
    </form>
  )
}
