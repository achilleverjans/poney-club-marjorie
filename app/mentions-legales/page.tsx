import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mentions légales | Poney Club Marjorie',
  description: 'Mentions légales du Poney Club Marjorie — éditeur, hébergeur, propriété intellectuelle et protection des données.',
  robots: { index: false, follow: false },
}

const sections = [
  {
    title: '1. Éditeur du site',
    content: [
      { label: 'Nom', value: 'Poney Club Marjorie' },
      { label: 'Adresse', value: 'Rue du Riquau 5, 1435 Mont-Saint-Guibert, Belgique' },
      { label: 'Téléphone', value: '0488 16 48 12' },
      { label: 'Email', value: 'poneyclubmarjorie@gmail.com' },
      { label: 'N° TVA', value: 'BE1022414741' },
      { label: 'Pays', value: 'Belgique' },
    ],
  },
  {
    title: '2. Hébergeur',
    content: [
      { label: 'Société', value: 'Vercel Inc.' },
      { label: 'Adresse', value: '340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis' },
      { label: 'Site web', value: 'https://vercel.com' },
    ],
  },
]

export default function MentionsLegales() {
  return (
    <main className="min-h-screen bg-cream-50">
      {/* Header */}
      <div className="bg-earth-900 text-white py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-cream-300 hover:text-white text-sm mb-8 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Retour au site
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold mb-3">Mentions légales</h1>
          <p className="text-cream-300 text-sm">Conformément à la loi belge du 11 mars 2003 sur les services de la société de l'information</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 py-12 space-y-10">

        {/* Éditeur & Hébergeur */}
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-serif text-xl font-bold text-earth-900 mb-5">{section.title}</h2>
            <div className="bg-white rounded-2xl border border-cream-100 divide-y divide-cream-100 shadow-sm">
              {section.content.map((row) => (
                <div key={row.label} className="flex gap-4 px-6 py-4">
                  <span className="w-32 flex-shrink-0 text-sm font-semibold text-earth-500">{row.label}</span>
                  <span className="text-sm text-earth-800">{row.value}</span>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Propriété intellectuelle */}
        <section>
          <h2 className="font-serif text-xl font-bold text-earth-900 mb-4">3. Propriété intellectuelle</h2>
          <div className="prose prose-sm text-earth-700 space-y-3">
            <p>
              L'ensemble des contenus présents sur ce site (textes, photographies, logos, illustrations) est la propriété exclusive du Poney Club Marjorie, sauf mention contraire.
            </p>
            <p>
              Toute reproduction, représentation, modification ou exploitation de ces contenus, totale ou partielle, sans autorisation écrite préalable est strictement interdite et constituerait une contrefaçon.
            </p>
          </div>
        </section>

        {/* Protection des données */}
        <section>
          <h2 className="font-serif text-xl font-bold text-earth-900 mb-4">4. Protection des données personnelles (RGPD)</h2>
          <div className="prose prose-sm text-earth-700 space-y-3">
            <p>
              Conformément au Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) et à la loi belge du 30 juillet 2018 relative à la protection des personnes physiques à l'égard des traitements de données à caractère personnel, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification des données inexactes</li>
              <li>Droit à l'effacement (« droit à l'oubli »)</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p>
              Pour exercer ces droits, contactez-nous par email à{' '}
              <a href="mailto:poneyclubmarjorie@gmail.com" className="text-forest-600 hover:underline font-medium">
                poneyclubmarjorie@gmail.com
              </a>.
            </p>
            <p>
              En cas de réclamation non résolue, vous pouvez introduire une plainte auprès de l'<strong>Autorité de protection des données (APD)</strong> — Rue de la Presse 35, 1000 Bruxelles —{' '}
              <a href="https://www.dataauthority.be" target="_blank" rel="noopener noreferrer" className="text-forest-600 hover:underline font-medium">
                www.dataauthority.be
              </a>.
            </p>
          </div>
        </section>

        {/* Données collectées */}
        <section>
          <h2 className="font-serif text-xl font-bold text-earth-900 mb-4">5. Données collectées via le formulaire de contact</h2>
          <div className="prose prose-sm text-earth-700 space-y-3">
            <p>
              Les données saisies dans le formulaire de contact (prénom, nom, adresse e-mail, message) sont utilisées uniquement pour répondre à votre demande et ne sont ni vendues, ni transmises à des tiers.
            </p>
            <p>
              Ces données sont conservées le temps nécessaire au traitement de votre demande, et au maximum 2 ans.
            </p>
          </div>
        </section>

        {/* Cookies */}
        <section>
          <h2 className="font-serif text-xl font-bold text-earth-900 mb-4">6. Cookies</h2>
          <p className="text-sm text-earth-700">
            Ce site n'utilise pas de cookies à des fins publicitaires ou de traçage. Des cookies techniques strictement nécessaires au bon fonctionnement du site peuvent être déposés sans votre consentement préalable, conformément à l'article 129 de la loi belge du 13 juin 2005 relative aux communications électroniques.
          </p>
        </section>

        {/* Responsabilité */}
        <section>
          <h2 className="font-serif text-xl font-bold text-earth-900 mb-4">7. Limitation de responsabilité</h2>
          <p className="text-sm text-earth-700">
            Le Poney Club Marjorie s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site, mais ne peut garantir leur exhaustivité. Il se réserve le droit de modifier les contenus à tout moment et sans préavis. Le club ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site.
          </p>
        </section>

        {/* Droit applicable */}
        <section>
          <h2 className="font-serif text-xl font-bold text-earth-900 mb-4">8. Droit applicable</h2>
          <p className="text-sm text-earth-700">
            Les présentes mentions légales sont régies par le droit belge. En cas de litige, et à défaut de résolution amiable, les tribunaux belges seront seuls compétents.
          </p>
        </section>

        {/* Last updated */}
        <p className="text-xs text-earth-400 pt-4 border-t border-cream-200">
          Dernière mise à jour : juin 2026
        </p>
      </div>
    </main>
  )
}
