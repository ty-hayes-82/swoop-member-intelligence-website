import { NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const WEBHOOK_URL = process.env.LEADS_WEBHOOK_URL

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, club, phone } = body

    if (!name?.trim()) return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    if (!email?.trim()) return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    if (!club?.trim()) return NextResponse.json({ error: 'Club is required.' }, { status: 400 })
    if (!phone?.trim()) return NextResponse.json({ error: 'Phone is required.' }, { status: 400 })
    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })

    const lead = {
      name: name.trim(),
      email: email.trim(),
      club: club.trim(),
      phone: phone.trim(),
      role: body.role?.trim() || '',
      timestamp: new Date().toISOString(),
    }

    // Always log to Vercel logs (persistent)
    console.log('🎯 [DEMO REQUEST]', JSON.stringify(lead, null, 2))

    // Send to webhook if configured (Discord/Slack)
    if (WEBHOOK_URL) {
      try {
        const message = `**New Demo Request**\n• Name: ${lead.name}\n• Email: ${lead.email}\n• Club: ${lead.club}\n• Phone: ${lead.phone}\n• Role: ${lead.role || 'N/A'}\n• Time: ${lead.timestamp}`
        
        await fetch(WEBHOOK_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ content: message })
        })
      } catch (webhookErr) {
        console.error('⚠️ Webhook delivery failed:', webhookErr)
        // Don't fail the request if webhook fails
      }
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}
