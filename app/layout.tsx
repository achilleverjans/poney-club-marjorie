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

const BASE_URL = 'https://poneyclubmarjorie.be'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Poney Club Marjorie | Cours d'équitation Brabant wallon — Mont-Saint-Guibert",
    template: '%s | Poney Club Marjorie',
  },
  description:
    "Cours d'équitation dès 4 ans, stages de vacances et anniversaires au Poney Club Marjorie à Mont-Saint-Guibert, Brabant wallon. Ouvert 7j/7 — proche de Louvain-la-Neuve, Ottignies et Wavre.",
  keywords: [
    'poney club Brabant wallon',
    'centre équestre Brabant wallon',
    'équitation Brabant wallon',
    "cours d'équitation enfants",
    "cours d'équitation débutants",
    'stage équitation',
    'stage poney',
    'balade à poney',
    'anniversaire avec poneys',
    'activité enfants chevaux',
    "école d'équitation",
    'cours de poney',
    'poney club Mont-Saint-Guibert',
    'équitation Louvain-la-Neuve',
    'équitation Ottignies',
    'équitation Wavre',
    'poney club Marjorie',
    'cours équitation enfants Belgique',
    'stage poney enfants Belgique',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: "Poney Club Marjorie | Équitation en Brabant wallon",
    description:
      "Cours d'équitation dès 4 ans, stages de vacances et anniversaires à Mont-Saint-Guibert. Un club chaleureux au cœur de la nature belge.",
    type: 'website',
    locale: 'fr_BE',
    url: BASE_URL,
    siteName: 'Poney Club Marjorie',
    images: [
      {
        url: '/images/logo.jpg',
        width: 673,
        height: 673,
        alt: 'Logo Poney Club Marjorie — Équitation en Brabant wallon',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Poney Club Marjorie | Équitation en Brabant wallon",
    description:
      "Cours d'équitation dès 4 ans, stages de vacances et anniversaires. Mont-Saint-Guibert, Brabant wallon.",
    images: ['/images/logo.jpg'],
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'SportsActivityLocation'],
      '@id': `${BASE_URL}/#business`,
      name: 'Poney Club Marjorie',
      image: [
        `${BASE_URL}/images/cadre%20du%20poney%20club.webp`,
        `${BASE_URL}/images/logo.jpg`,
      ],
      logo: {
        '@type': 'ImageObject',
        url: `${BASE_URL}/images/logo.jpg`,
        width: 673,
        height: 673,
      },
      url: BASE_URL,
      telephone: '+32488164812',
      email: 'poneyclubmarjorie@gmail.com',
      vatID: 'BE1022414741',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Rue du Riquau 5',
        postalCode: '1435',
        addressLocality: 'Mont-Saint-Guibert',
        addressRegion: 'Brabant wallon',
        addressCountry: 'BE',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 50.6089,
        longitude: 4.6172,
      },
      hasMap: 'https://maps.google.com/?q=Rue+du+Riquau+5+1435+Mont-Saint-Guibert+Belgique',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
          opens: '09:00',
          closes: '18:00',
        },
      ],
      priceRange: '€€',
      description:
        "Centre équestre et poney club pour enfants et adultes à Mont-Saint-Guibert, en Brabant wallon. Cours d'équitation dès 4 ans, stages de vacances, anniversaires et pension de poneys et chevaux.",
      slogan: "L'équitation pour tous, dès 4 ans",
      foundingDate: '2025',
      areaServed: [
        'Mont-Saint-Guibert',
        'Corbais',
        'Louvain-la-Neuve',
        'Ottignies',
        'Wavre',
        'Chaumont-Gistoux',
        'Perwez',
        'Gembloux',
        'Jodoigne',
        'Waterloo',
        'Rixensart',
        'Court-Saint-Étienne',
        'Grez-Doiceau',
        'Brabant wallon',
      ],
      sameAs: [
        'https://www.facebook.com/p/Poney-Club-Marjorie-61574694204608/',
        'https://www.instagram.com/poneyclubmarjorie/',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Poney Club Marjorie',
      description:
        "Poney club et centre équestre à Mont-Saint-Guibert en Brabant wallon. Cours d'équitation pour enfants et adultes, stages de vacances.",
      inLanguage: 'fr-BE',
      publisher: { '@id': `${BASE_URL}/#business` },
    },
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
      <body>
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        {children}
      </body>
    </html>
  )
}
