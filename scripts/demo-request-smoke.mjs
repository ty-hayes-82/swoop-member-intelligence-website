import { validateDemoRequest } from '../lib/demo-request.js'

function assert(condition, message) {
  if (!condition) throw new Error(message)
}

async function run() {
  const validPayload = {
    name: 'Demo Tester',
    club: 'Oakmont Hills CC',
    email: 'tester@swoopgolf.com',
    phone: '555-123-4567',
    role: 'GM',
    source: 'ci-smoke',
  }

  const normalized = validateDemoRequest(validPayload)
  assert(normalized.name === 'Demo Tester', 'Name should be preserved')
  assert(normalized.source === 'ci-smoke', 'Source should be maintained')

  let errorCaught = false
  try {
    validateDemoRequest({ name: 'Missing Email', club: 'Oakmont', phone: '555' })
  } catch (err) {
    errorCaught = err.message.includes('Email is required')
  }
  assert(errorCaught, 'Invalid payload should throw an email error')

  console.log('✅ Demo request validation logic passed smoke test')
}

run().catch((err) => {
  console.error('❌ Demo request validation failed')
  console.error(err)
  process.exit(1)
})
