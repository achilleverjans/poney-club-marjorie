import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Poney Club Marjorie | Cours d'équitation pour enfants en Belgique",
  description:
    "Découvrez le Poney Club Marjorie, un club d'équitation chaleureux pour enfants en Belgique. Cours, stages de vacances et pension de poneys dans un cadre naturel exceptionnel.",
  keywords: [
    'poney club',
    "cours équitation enfants",
    'stage équitation',
    'poney club Belgique',
    'équitation enfants',
    'poney club Marjorie',
    'leçons équitation',
    'stage poney enfants',
  ],
  openGraph: {
    title: "Poney Club Marjorie | Cours d'équitation pour enfants",
    description:
      "Un club d'équitation chaleureux pour enfants, au cœur de la nature belge. Cours, stages et pension de poneys.",
    type: 'website',
    locale: 'fr_BE',
  },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SportsActivityLocation',
  name: 'Poney Club Marjorie',
  image: 'https://poneyclubmarjorie.be/images/cadre%20du%20poney%20club.webp',
  url: 'https://poneyclubmarjorie.be',
  telephone: '+32488164812',
  email: 'poneyclubmarjorie@gmail.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rue du Riquau 5',
    postalCode: '1435',
    addressLocality: 'Mont-Saint-Guibert',
    addressCountry: 'BE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 50.6089,
    longitude: 4.6172,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens: '09:00',
      closes: '18:00',
    },
  ],
  priceRange: '€€',
  description: "Centre équestre et poney club pour enfants et adultes à Mont-Saint-Guibert. Cours d'équitation, stages de vacances et pension de poneys et chevaux dans un cadre naturel bienveillant.",
  sameAs: [
    'https://www.facebook.com/p/Poney-Club-Marjorie-61574694204608/',
    'https://www.instagram.com/poneyclubmarjorie/',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
