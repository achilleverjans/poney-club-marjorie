'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'
import { siteImages } from '@/config/images'

const values = [
  {
    icon: '🛡️',
    title: 'Sécurité avant tout',
    desc: "Casques homologués, matériel adapté et apprentissage dans un cadre sécurisé. Chaque enfant évolue à son rythme, avec bienveillance et dans le respect des poneys.",
  },
  {
    icon: '💚',
    title: 'Bienveillance & douceur',
    desc: "Un environnement chaleureux où chaque enfant progresse à son rythme, sans pression, avec Marjorie passionnée et à l'écoute.",
  },
  {
    icon: '🌿',
    title: 'Amour de la nature',
    desc: "Apprendre à prendre soin d'un animal, développer l'empathie et le respect de la nature : des valeurs que le poney club transmet chaque jour.",
  },
]

export default function About() {
  const { ref, inView } = useInView()

  return (
    <section id="apropos" className="py-24 bg-cream-50 bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge bg-forest-100 text-forest-700 mb-4">Notre histoire</span>
          <h2 className="section-title mb-4">Un club fondé avec passion,<br />porté par l'amour des poneys & chevaux</h2>
          <p className="section-subtitle mx-auto text-center">
            Depuis mars 2025
          </p>
          <p className="mt-3 text-forest-700 font-semibold text-base">Dès 4 ans</p>
        </div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-20">
          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src={siteImages.apropos.src}
                alt={siteImages.apropos.alt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest-900/30 to-transparent" />
            </div>
            {/* Decorative badge */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-5 shadow-xl border border-cream-100">
              <div className="text-3xl font-serif font-bold text-forest-600">🐴</div>
              <div className="text-sm text-earth-600 font-medium">Ouvert depuis 2025</div>
            </div>
            {/* Decorative dot */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-cream-200 rounded-full opacity-50" />
          </div>

          {/* Text */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-earth-900 mb-5">
              Marjorie, passionnée<br />d'équitation
            </h3>
            <p className="text-earth-600 leading-relaxed mb-5">
              Depuis toujours, Marjorie est passionnée par les poneys et les chevaux. Il y a un an,
              elle a réalisé son rêve en ouvrant son propre poney club afin de partager sa passion
              avec les enfants dans une ambiance familiale, bienveillante et conviviale.
            </p>
            <p className="text-earth-600 leading-relaxed mb-8">
              Aujourd'hui, Marjorie accueille les enfants de 4 à 16 ans et les accompagne avec
              patience, douceur et bonne humeur. Chaque enfant évolue à son rythme dans un
              environnement où le respect des animaux et le plaisir d'apprendre sont les priorités.
            </p>
            <a href="#cours" className="btn-primary">
              Voir nos cours
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <div
              key={v.title}
              className={`card p-7 border border-cream-100 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="text-4xl mb-4">{v.icon}</div>
              <h4 className="text-lg font-serif font-bold text-earth-900 mb-3">{v.title}</h4>
              <p className="text-earth-600 text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
