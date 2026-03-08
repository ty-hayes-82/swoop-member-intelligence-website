import { NextResponse } from 'next/server'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, club, phone } = body

    if (!name?.trim()) return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    if (!email?.trim()) return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    if (!club?.trim()) return NextResponse.json({ error: 'Club is required.' }, { status: 400 })
    if (!phone?.trim()) return NextResponse.json({ error: 'Phone is required.' }, { status: 400 })
    if (!EMAIL_RE.test(email)) return NextResponse.json({ error: 'Invalid email format.' }, { status: 400 })

    // Log for now — wire to webhook/CRM later
    console.log('[DEMO REQUEST]', { name: name.trim(), email: email.trim(), club: club.trim(), phone: phone.trim(), role: body.role?.trim() || '', ts: new Date().toISOString() })

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}
