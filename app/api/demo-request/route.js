import { NextResponse } from 'next/server'
import { writeFile, readFile, mkdir } from 'fs/promises'
import { join } from 'path'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const DATA_DIR = join(process.cwd(), 'data')
const LEADS_FILE = join(DATA_DIR, 'demo-leads.json')

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

    // Ensure data directory exists
    try {
      await mkdir(DATA_DIR, { recursive: true })
    } catch (err) {
      // Directory may already exist
    }

    // Read existing leads or start fresh
    let leads = []
    try {
      const content = await readFile(LEADS_FILE, 'utf-8')
      leads = JSON.parse(content)
    } catch {
      // File doesn't exist yet
    }

    // Append new lead
    leads.push(lead)
    await writeFile(LEADS_FILE, JSON.stringify(leads, null, 2))

    console.log('[DEMO REQUEST SAVED]', lead)

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json({ error: 'Invalid request.' }, { status: 400 })
  }
}
