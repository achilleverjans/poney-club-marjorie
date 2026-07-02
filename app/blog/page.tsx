import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Blog Équitation | Conseils & Actualités",
  description:
    "Conseils d'équitation, vie du club, actualités des stages et portraits de chevaux. Le blog du Poney Club Marjorie en Brabant wallon.",
  alternates: { canonical: 'https://poneyclubmarjorie.be/blog' },
  openGraph: {
    title: "Blog | Poney Club Marjorie — Conseils & Actualités équitation",
    description:
      "Astuces d'équitation, portraits de nos chevaux, conseils pour débuter et actualités du Poney Club Marjorie en Brabant wallon.",
    url: 'https://poneyclubmarjorie.be/blog',
    type: 'website',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://poneyclubmarjorie.be/blog#webpage',
  url: 'https://poneyclubmarjorie.be/blog',
  name: 'Blog Équitation — Poney Club Marjorie',
  description: "Conseils d'équitation, vie du club et actualités des stages en Brabant wallon.",
  inLanguage: 'fr-BE',
  isPartOf: { '@id': 'https://poneyclubmarjorie.be/#website' },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://poneyclubmarjorie.be' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://poneyclubmarjorie.be/blog' },
    ],
  },
}

const categories = [
  {
    name: "Conseils équitation",
    slug: 'conseils',
    icon: '🏆',
    desc: "Astuces et conseils pour progresser en équitation, que vous soyez débutant ou confirmé.",
  },
  {
    name: "Vie du club",
    slug: 'vie-du-club',
    icon: '🐴',
    desc: "Actualités, événements et moments du quotidien au Poney Club Marjorie.",
  },
  {
    name: "Stages & vacances",
    slug: 'stages',
    icon: '☀️',
    desc: "Tout savoir sur nos stages de vacances pour enfants en Brabant wallon.",
  },
  {
    name: "Nos chevaux & poneys",
    slug: 'chevaux',
    icon: '🌿',
    desc: "Portraits de nos pensionnaires, soins et bien-être animal.",
  },
  {
    name: "Débuter l'équitation",
    slug: 'debuter',
    icon: '🌟',
    desc: "Guides pratiques pour les débutants : équipement, premier cours, conseils parents.",
  },
  {
    name: "Activités enfants",
    slug: 'activites-enfants',
    icon: '🎉',
    desc: "Idées d'activités avec les poneys : anniversaires, sorties scolaires, groupes.",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-cream-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* Header */}
      <div className="bg-earth-900 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <nav aria-label="Fil d'Ariane" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-cream-400">
              <li><Link href="/" className="hover:text-cream-200 transition-colors">Accueil</Link></li>
              <li aria-hidden="true" className="text-cream-600">›</li>
              <li className="text-cream-200" aria-current="page">Blog</li>
            </ol>
          </nav>
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full bg-forest-700 text-cream-200 mb-4">
            Blog & Actualités
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">
            Conseils, actualités<br />et vie du club
          </h1>
          <p className="text-cream-300 max-w-xl text-sm leading-relaxed">
            Astuces d'équitation, portraits de nos chevaux, conseils pour débuter et actualités
            du Poney Club Marjorie en Brabant wallon.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 py-14 space-y-14">

        {/* Categories */}
        <section>
          <h2 className="font-serif text-2xl font-bold text-earth-900 mb-8">Catégories</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {categories.map(cat => (
              <div
                key={cat.slug}
                className="bg-white rounded-2xl border border-cream-100 p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{cat.icon}</div>
                <h3 className="font-serif font-bold text-earth-900 mb-2">{cat.name}</h3>
                <p className="text-sm text-earth-500 leading-relaxed">{cat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Coming soon */}
        <section className="text-center bg-white rounded-3xl border border-cream-100 py-16 px-8 shadow-sm">
          <div className="text-5xl mb-5" aria-hidden="true">✍️</div>
          <h2 className="font-serif text-2xl font-bold text-earth-900 mb-3">Articles à venir</h2>
          <p className="text-earth-500 max-w-md mx-auto text-sm leading-relaxed mb-8">
            Notre blog est en cours de préparation. Des articles de conseils, portraits de
            chevaux et actualités du club seront publiés prochainement. En attendant,
            n'hésitez pas à nous contacter !
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-forest-600 hover:bg-forest-700 text-white font-semibold px-6 py-3 rounded-full transition-colors shadow-md"
          >
            Nous contacter
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </section>
      </div>

      {/* Footer bar */}
      <div className="border-t border-cream-200 bg-white">
        <div className="max-w-4xl mx-auto px-4 py-5 flex justify-between text-xs text-earth-400">
          <Link href="/" className="hover:text-earth-700 transition-colors">← Retour à l'accueil</Link>
          <Link href="/mentions-legales" className="hover:text-earth-700 transition-colors">Mentions légales</Link>
        </div>
      </div>
    </main>
  )
}
