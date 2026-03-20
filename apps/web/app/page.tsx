import type { Metadata } from 'next'
import { PageClient } from './page-client'

export const metadata: Metadata = {
  title: "SanaBalance Massagen Grabs – Massage Grabs, St. Gallen",
  alternates: {
    canonical: 'https://www.sanabalance.ch',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': 'https://www.sanabalance.ch',
  name: 'SanaBalance Massagen',
  description: 'Professionelle Massagen in Grabs: Klassische Massage, Wellness, Dorn & Breuss, Sportmassage und Mobile Massage bei Ihnen zu Hause.',
  url: 'https://www.sanabalance.ch',
  telephone: '+41794895018',
  email: 'service.sanabalance@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rossweidstrasse 4',
    addressLocality: 'Grabs',
    postalCode: '9472',
    addressCountry: 'CH',
    addressRegion: 'St. Gallen',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 47.1733,
    longitude: 9.4433,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '09:00',
    closes: '19:00',
  },
  priceRange: '$$',
  image: 'https://www.sanabalance.ch/sana_massage.png',
  hasMap: 'https://www.google.com/maps/search/?api=1&query=Rossweidstrasse+4,+9472+Grabs,+Schweiz',
  sameAs: [
    'https://www.facebook.com/thomas.grobler.3',
    'https://www.instagram.com/oldscoultom/',
  ],
  founder: {
    '@type': 'Person',
    name: 'Thomas Grobler',
  },
  areaServed: [
    { '@type': 'City', name: 'Grabs' },
    { '@type': 'City', name: 'Buchs' },
    { '@type': 'City', name: 'Sargans' },
    { '@type': 'State', name: 'St. Gallen' },
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Klassische Massage' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Wellness Massage' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Dorn & Breuss Massage' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Sportmassage' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Mobile Massage' } },
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageClient />
    </>
  )
}
