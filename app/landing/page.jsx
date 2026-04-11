import { buildMetadata } from '@/lib/metadata'
import LandingClient from './LandingClient'

export const metadata = buildMetadata({
  title: 'Swoop Golf — The Operating System for Private Clubs',
  description: 'AI agents that work both sides of the club relationship. Members get a concierge. Your GM gets a command center.',
  path: '/landing',
})

export default function LandingPage() {
  return <LandingClient />
}
