import './globals.css'
import StickyNav from '@/components/StickyNav'
import Footer from '@/components/Footer'
import { buildMetadata } from '@/lib/metadata'
import { PLAN_PRICING, PRICING_PLAN_ORDER, PRICING_SUMMARY } from '@/lib/pricing'

const defaultMetadata = buildMetadata({
  title: 'Swoop Golf — Club Intelligence for General Managers',
  description: 'AI-powered intelligence for private club General Managers. See what your club misses today and recover it tomorrow.',
  path: '/',
})

export const metadata = {
  ...defaultMetadata,
  title: {
    default: 'Swoop Golf — Club Intelligence for General Managers',
    template: '%s | Swoop Golf',
  },
  metadataBase: new URL('https://swoopgolf.com'),
}

export default function RootLayout({ children }) {
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Swoop Golf',
    url: 'https://swoopgolf.com',
    email: 'hello@swoopgolf.com',
    telephone: '+1-480-680-6234',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Scottsdale',
      addressRegion: 'AZ',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: 'hello@swoopgolf.com',
      telephone: '+1-480-680-6234',
      areaServed: 'US',
    },
  }

  const aggregatePricingOffer = {
    '@type': 'AggregateOffer',
    priceCurrency: PRICING_SUMMARY.currency,
    lowPrice: String(PLAN_PRICING.free.monthly),
    highPrice: String(PLAN_PRICING.club.monthly),
    offerCount: String(PRICING_SUMMARY.offerCount),
  }

  const structuredPricingOffers = PRICING_PLAN_ORDER.map((planKey) => ({
    '@type': 'Offer',
    name: PLAN_PRICING[planKey].label,
    price: String(PLAN_PRICING[planKey].monthly),
    priceCurrency: PRICING_SUMMARY.currency,
  }))

  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: 'Swoop Golf Member Intelligence Platform',
    brand: {
      '@type': 'Brand',
      name: 'Swoop Golf',
    },
    description: 'AI-powered club intelligence platform for private club General Managers.',
    url: 'https://swoopgolf.com/platform',
    image: 'https://swoopgolf.com/screenshots/member-intelligence.png',
    offers: aggregatePricingOffer,
  }

  const softwareApplicationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Swoop Golf',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered club intelligence platform for private club General Managers.',
    url: 'https://swoopgolf.com',
    offers: structuredPricingOffers,
  }

  return (
    <html lang="en">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationJsonLd) }} />
      </head>
      <body className="bg-swoop-bg text-swoop-text font-sans antialiased">
        <StickyNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
