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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  )
}
