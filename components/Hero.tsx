import Image from 'next/image'
import { siteImages } from '@/config/images'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={siteImages.hero.src}
        alt={siteImages.hero.alt}
        fill
        className="object-cover object-top"
        priority
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-forest-900/40 to-transparent" />

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 80L1440 80L1440 40C1200 0 960 60 720 40C480 20 240 70 0 40L0 80Z" fill="#fdfaf4" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white/90 text-sm font-medium px-4 py-2 rounded-full mb-6 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-forest-400 animate-pulse"></span>
          Poney Club en Belgique · Ouvert toute l'année
        </div>

        {/* Main title */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up">
          Bienvenue au{' '}
          <span className="block text-cream-300">Poney Club Marjorie</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
          Des moments inoubliables pour petits et grands, au cœur de la nature.
          Cours d'équitation, stages de vacances et bien plus encore
          dans un cadre chaleureux et sécurisé.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
          <a href="#cours" className="btn-primary text-base">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            Découvrir nos cours
          </a>
          <a href="#contact" className="btn-secondary text-base">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Nous contacter
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-up delay-500">
          {[
            { value: 'Since 2025', label: "d'existence" },
            { value: '🤍', label: 'De nombreux enfants accueillis' },
            { value: '12', label: 'Poneys adorables' },
          ].map(stat => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-serif font-bold text-cream-300">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/70 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}
