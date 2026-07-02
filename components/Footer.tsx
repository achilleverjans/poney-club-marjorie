import Image from 'next/image'

const links = {
  Club: [
    { label: 'Accueil', href: '#accueil' },
    { label: 'À propos', href: '#apropos' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Blog', href: '/blog' },
    { label: 'Contact', href: '#contact' },
  ],
  Services: [
    { label: 'Cours d\'équitation', href: '#cours' },
    { label: 'Stages enfants', href: '#stages' },
    { label: 'Événements', href: '#events' },
    { label: 'Pension & soins', href: '#pension' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-earth-900 text-cream-100">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.jpg"
                alt="Logo Poney Club Marjorie"
                width={56}
                height={56}
                className="rounded-full object-cover flex-shrink-0"
              />
              <div>
                <div className="font-serif font-bold text-xl text-white">Poney Club Marjorie</div>
                <div className="text-cream-400 text-sm">Mont-Saint-Guibert, Belgique</div>
              </div>
            </div>
            <p className="text-cream-300 text-sm leading-relaxed max-w-sm mb-6">
              Un club d'équitation chaleureux pour enfants, au cœur de la nature belge.
              Cours, stages de vacances et pension de poneys dans un cadre sécurisé et familial.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <a href="https://www.facebook.com/p/Poney-Club-Marjorie-61574694204608/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#1877F2] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/poneyclubmarjorie/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white/10 hover:bg-gradient-to-br hover:from-[#f09433] hover:to-[#bc1888] flex items-center justify-center transition-colors">
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path strokeLinecap="round" d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeLinecap="round" />
                </svg>
              </a>
              <a
                href="https://wa.me/32488164812"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
              >
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation links */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">{title}</h4>
              <ul className="space-y-2.5">
                {items.map(item => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-cream-300 hover:text-white text-sm transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-cream-400 text-xs">
            © {new Date().getFullYear()} Poney Club Marjorie · Tous droits réservés
          </p>
          <div className="flex gap-5 text-xs text-cream-400">
            <a href="/mentions-legales" className="hover:text-cream-200 transition-colors">Mentions légales</a>
            <a href="/mentions-legales#rgpd" className="hover:text-cream-200 transition-colors">Politique de confidentialité</a>
            <a href="/blog" className="hover:text-cream-200 transition-colors">Blog</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
