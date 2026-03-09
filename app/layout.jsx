import './globals.css'
import StickyNav from '@/components/StickyNav'
import Footer from '@/components/Footer'
import { buildMetadata } from '@/lib/metadata'

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
    offers: {
      '@type': 'AggregateOffer',
      priceCurrency: 'USD',
      lowPrice: '0',
      highPrice: '1499',
      offerCount: '3',
    },
  }

  const softwareApplicationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Swoop Golf',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: 'AI-powered club intelligence platform for private club General Managers.',
    url: 'https://swoopgolf.com',
    offers: [
      { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Pro', price: '499', priceCurrency: 'USD' },
      { '@type': 'Offer', name: 'Club', price: '1499', priceCurrency: 'USD' },
    ],
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
