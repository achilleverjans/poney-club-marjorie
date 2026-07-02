'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

const stages = [
  {
    icon: '☀️',
    title: 'Stage été',
    period: 'Juillet & Août',
    desc: "Une immersion complète dans l'univers des poneys et des chevaux. Chaque journée est rythmée par les cours, les soins et des activités pleine nature.",
    items: [
      'Stage de 5 jours ou à la journée',
      'Minimum 2 cours par jour (1h chaque)',
      'Activités en lien avec les poneys, chevaux & nature',
      'Jeux d\'eau',
      'Soins & pansage',
      'Balade en forêt',
    ],
    color: 'border-cream-300',
    bg: 'bg-gradient-to-br from-cream-50 to-white',
    badgeColor: 'bg-cream-100 text-cream-700',
  },
  {
    icon: '🎭',
    title: 'Stage Carnaval',
    period: 'Vacances de carnaval',
    desc: "Stage festif aux couleurs du carnaval ! Jeux, déguisements et poneys pour une semaine pleine de joie et de bonne humeur.",
    items: [
      'Stage de 5 jours ou à la journée',
      'Minimum 2 cours par jour (1h chaque)',
      'Activités en lien avec les poneys, chevaux & nature',
      'Ambiance carnaval & jeux',
    ],
    color: 'border-cream-300',
    bg: 'bg-gradient-to-br from-cream-50 to-white',
    badgeColor: 'bg-cream-100 text-cream-700',
  },
  {
    icon: '🍂',
    title: 'Stage Toussaint',
    period: 'Vacances de novembre',
    desc: "Les feuilles tombent, les poneys adorent l'automne ! Stage pour continuer à progresser pendant les congés scolaires dans une ambiance chaleureuse.",
    items: [
      'Stage de 5 jours ou à la journée',
      'Minimum 2 cours par jour (1h chaque)',
      'Activités en lien avec les poneys, chevaux & nature',
      'Balades en plein air',
    ],
    color: 'border-forest-300',
    bg: 'bg-gradient-to-br from-forest-50 to-white',
    badgeColor: 'bg-forest-100 text-forest-700',
    featured: true,
  },
  {
    icon: '❄️',
    title: 'Stage Noël',
    period: 'Vacances de décembre',
    desc: 'Une magie particulière règne en hiver au club ! Terminez chaque journée avec une bonne soupe chaude et un chocolat chaud au coin du feu. Un stage inoubliable dans une ambiance de Noël.',
    items: [
      'Stage de 5 jours ou à la journée',
      'Minimum 2 cours par jour (1h chaque)',
      'Activités en lien avec les poneys, chevaux & nature',
      'Soupe & chocolat chaud',
    ],
    color: 'border-cream-300',
    bg: 'bg-gradient-to-br from-cream-50 to-white',
    badgeColor: 'bg-cream-100 text-cream-700',
  },
  {
    icon: '🌸',
    title: 'Stage Pâques',
    period: 'Vacances de printemps',
    desc: 'Le printemps est la saison idéale pour les balades ! Stage mêlant cours en manège et promenades à travers les champs en fleurs.',
    items: [
      'Stage de 5 jours ou à la journée',
      'Minimum 2 cours par jour (1h chaque)',
      'Activités en lien avec les poneys, chevaux & nature',
      'Chasse aux œufs à cheval',
      'Balades en nature',
    ],
    color: 'border-earth-200',
    bg: 'bg-gradient-to-br from-earth-50 to-white',
    badgeColor: 'bg-earth-100 text-earth-700',
  },
]

export default function Stages() {
  const { ref, inView } = useInView()

  return (
    <section id="stages" className="py-24 bg-cream-50 bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge bg-earth-100 text-earth-700 mb-4">Stages enfants</span>
          <h2 className="section-title mb-4">Des stages inoubliables<br />pendant les vacances</h2>
          <p className="section-subtitle mx-auto text-center">
            Chaque saison apporte son lot de surprises ! Nos stages de vacances accueillent
            les enfants de 4 à 16 ans dans une atmosphère de découverte et de convivialité.
          </p>
        </div>

        {/* Image banner */}
        <div className={`mb-16 transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-video max-w-3xl mx-auto">
            <Image
              src="/images/stages.jpg"
              alt="Enfant à cheval lors d'un stage au Poney Club Marjorie"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            <div className="absolute bottom-6 left-6 text-white">
              <div className="text-sm font-medium bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                🏅 Stage d'été — 5 jours en immersion
              </div>
            </div>
          </div>
        </div>

        {/* Stage cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {stages.map((stage, i) => (
            <div
              key={stage.title}
              className={`card border ${stage.color} ${stage.bg} p-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${stage.featured ? 'ring-2 ring-forest-400/30' : ''}`}
              style={{ transitionDelay: `${400 + i * 100}ms` }}
            >
              <div className="text-3xl mb-3">{stage.icon}</div>
              <span className={`badge ${stage.badgeColor} mb-3 text-xs`}>{stage.period}</span>
              <h4 className="text-lg font-serif font-bold text-earth-900 mb-2">{stage.title}</h4>
              <p className="text-sm text-earth-600 mb-4 leading-relaxed">{stage.desc}</p>
              <ul className="space-y-1.5">
                {stage.items.map(item => (
                  <li key={item} className="flex items-center gap-2 text-xs text-earth-600">
                    <span className="text-forest-500">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <a href="#contact" className="btn-primary">
            Réserver un stage
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
