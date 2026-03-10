const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validateDemoRequest(body = {}) {
  const { name, email, phone, club } = body

  if (!name?.trim()) {
    const err = new Error('Name is required.')
    err.statusCode = 400
    throw err
  }
  if (!email?.trim()) {
    const err = new Error('Email is required.')
    err.statusCode = 400
    throw err
  }
  if (!EMAIL_RE.test(email.trim())) {
    const err = new Error('Invalid email format.')
    err.statusCode = 400
    throw err
  }
  if (!club?.trim()) {
    const err = new Error('Club is required.')
    err.statusCode = 400
    throw err
  }
  if (!phone?.trim()) {
    const err = new Error('Phone is required.')
    err.statusCode = 400
    throw err
  }

  return {
    name: name.trim(),
    email: email.trim(),
    club: club.trim(),
    phone: phone.trim(),
    role: body.role?.trim() || '',
    source: body.source?.trim() || 'book-demo',
    timestamp: new Date().toISOString(),
  }
}

export async function deliverDemoRequest(lead, { webhookUrl } = {}) {
  console.log('🎯 [DEMO REQUEST]', JSON.stringify(lead, null, 2))

  const target = webhookUrl || process.env.LEADS_WEBHOOK_URL
  if (!target) return

  try {
    const message = `**New Demo Request**\n• Name: ${lead.name}\n• Email: ${lead.email}\n• Club: ${lead.club}\n• Phone: ${lead.phone}\n• Role: ${lead.role || 'N/A'}\n• Time: ${lead.timestamp}`
    await fetch(target, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content: message }),
    })
  } catch (err) {
    console.error('⚠️ Webhook delivery failed:', err)
  }
}
