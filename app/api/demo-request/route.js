import { NextResponse } from 'next/server'
import { validateDemoRequest, deliverDemoRequest } from '@/lib/demo-request'

const WEBHOOK_URL = process.env.LEADS_WEBHOOK_URL

export async function POST(request) {
  try {
    const body = await request.json()
    const lead = validateDemoRequest(body)
    await deliverDemoRequest(lead, { webhookUrl: WEBHOOK_URL })
    return NextResponse.json({ success: true })
  } catch (error) {
    const status = error.statusCode || 400
    return NextResponse.json({ error: error.message || 'Invalid request.' }, { status })
  }
}
