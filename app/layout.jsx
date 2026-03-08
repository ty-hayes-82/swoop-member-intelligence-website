import './globals.css'
import StickyNav from '@/components/StickyNav'
import Footer from '@/components/Footer'

export const metadata = {
  title: {
    default: 'Swoop Golf — The Five Lenses GM Platform',
    template: '%s | Swoop Golf',
  },
  description: 'AI-powered intelligence for private club General Managers. See what your club misses today and recover it tomorrow.',
  metadataBase: new URL('https://swoopgolf.com'),
  openGraph: {
    type: 'website',
    siteName: 'Swoop Golf',
    title: 'Swoop Golf — The Five Lenses GM Platform',
    description: 'AI-powered intelligence for private club General Managers.',
    url: 'https://swoopgolf.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Swoop Golf — The Five Lenses GM Platform',
    description: 'AI-powered intelligence for private club General Managers.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareApplication',
              name: 'Swoop Golf',
              applicationCategory: 'BusinessApplication',
              operatingSystem: 'Web',
              description: 'AI-powered Five Lenses intelligence platform for private club General Managers.',
              url: 'https://swoopgolf.com',
              offers: [
                { '@type': 'Offer', name: 'Free', price: '0', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Pro', price: '99', priceCurrency: 'USD' },
                { '@type': 'Offer', name: 'Club', price: '1499', priceCurrency: 'USD' },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-swoop-bg text-swoop-text font-sans antialiased">
        <StickyNav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
