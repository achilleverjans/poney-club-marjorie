'use client'
import { useInView } from '@/hooks/useInView'

const events = [
  {
    emoji: '🎂',
    title: 'Anniversaire',
    desc: 'Offrez à votre enfant un anniversaire mémorable au milieu des poneys ! Un moment de bonheur partagé avec les amis, dans un cadre verdoyant et plein de vie.',
    features: [
      'Balade ou cours de poney inclus',
      'Accueil personnalisé',
      'Espace pique-nique disponible',
      'Pour les enfants dès 4 ans',
      'Sur réservation',
    ],
    color: 'from-cream-100 to-cream-50',
    accent: 'bg-cream-100 text-cream-700',
    badge: 'Fêtes & célébrations',
  },
  {
    emoji: '👨‍👩‍👧‍👦',
    title: 'Groupes',
    desc: 'Associations, groupes de loisirs, centres aérés… Organisez une sortie originale au poney club pour votre groupe. Une activité nature et bien-être accessible à tous.',
    features: [
      'Accueil sur mesure',
      'Cours ou balades adaptés',
      'Activités de soin & pansage',
      'Contact avec les chevaux & poneys',
      'Devis personnalisé',
    ],
    color: 'from-forest-100 to-forest-50',
    accent: 'bg-forest-100 text-forest-700',
    badge: 'Sorties & loisirs',
    featured: true,
  },
  {
    emoji: '🏫',
    title: 'Écoles',
    desc: "Une sortie scolaire hors du commun ! Les enfants découvrent l'univers équestre, apprennent à prendre soin des animaux et développent empathie et respect de la nature.",
    features: [
      'Adapté aux programmes scolaires',
      'Encadrement par Marjorie',
      'Découverte des poneys & chevaux',
      'Sensibilisation au bien-être animal',
      'Groupes de toutes tailles acceptés',
    ],
    color: 'from-earth-100 to-earth-50',
    accent: 'bg-earth-100 text-earth-700',
    badge: 'Sorties scolaires',
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-forest-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Events() {
  const { ref, inView } = useInView()

  return (
    <section id="events" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge bg-forest-100 text-forest-700 mb-4">Événements</span>
          <h2 className="section-title mb-4">Une expérience unique<br />pour chaque occasion</h2>
          <p className="section-subtitle mx-auto text-center">
            Anniversaires, sorties de groupe ou visites scolaires : le Poney Club Marjorie
            accueille vos événements dans un cadre verdoyant et chaleureux.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
          {events.map((event, i) => (
            <div
              key={event.title}
              className={`relative card bg-gradient-to-b ${event.color} border ${event.featured ? 'border-forest-300 ring-2 ring-forest-400/30 overflow-visible' : 'border-cream-100'} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {event.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forest-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  ✨ Le plus demandé
                </div>
              )}

              <div className="p-6">
                <div className="text-4xl mb-3">{event.emoji}</div>
                <span className={`badge ${event.accent} mb-3`}>{event.badge}</span>
                <h3 className="text-xl font-serif font-bold text-earth-900 mb-3">{event.title}</h3>
                <p className="text-sm text-earth-600 leading-relaxed mb-5">{event.desc}</p>

                <ul className="space-y-2 mb-6">
                  {event.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-earth-700">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-cream-200">
                  <a href="#contact" className="text-forest-600 font-semibold hover:text-forest-700 transition-colors text-sm">
                    Nous contacter →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-earth-500 mt-10 bg-cream-50 rounded-xl py-4 px-6 max-w-2xl mx-auto border border-cream-100">
          📞 Toutes nos formules événementielles sont sur devis. Contactez-nous pour organiser votre événement !
        </p>
      </div>
    </section>
  )
}
