'use client'
import { useInView } from '@/hooks/useInView'

const courses = [
  {
    emoji: '🌟',
    badge: 'Dès 4 ans',
    title: 'Poney Game',
    subtitle: 'Enfants & Ados',
    desc: 'Une première rencontre avec le monde des poneys. Jeux, câlins et promenades en main pour s\'initier en douceur et dans la bonne humeur.',
    features: ['Poney en main', 'Jeux éducatifs', 'Découverte des soins', 'Groupe de 4'],
    color: 'from-cream-100 to-cream-50',
    accent: 'bg-cream-100 text-cream-700',
    duration: '1h',
    price: 'sur demande',
  },
  {
    emoji: '🐴',
    badge: 'Populaire',
    title: 'Initiation',
    subtitle: '6 à 12 ans',
    desc: 'Premiers pas en selle pour apprendre à monter, guider et prendre soin de son poney. Un apprentissage solide dans la joie.',
    features: ['Monter & diriger', 'Équilibre en selle', 'Soins du poney', 'Max. 6 enfants/groupe'],
    color: 'from-forest-100 to-forest-50',
    accent: 'bg-forest-100 text-forest-700',
    duration: '1h',
    price: 'sur demande',
    featured: true,
  },
  {
    emoji: '🏆',
    badge: 'Perfectionnement',
    title: 'Perfectionnement',
    subtitle: 'Dès 10 ans',
    desc: 'Pour les cavaliers confirmés souhaitant progresser : travail en manège, extérieur et perfectionnement de la technique.',
    features: ['Travail en extérieur', 'Compétitions amicales'],
    color: 'from-earth-100 to-earth-50',
    accent: 'bg-earth-100 text-earth-700',
    duration: '1h',
    price: 'sur demande',
  },
  {
    emoji: '🌻',
    badge: 'Adultes',
    title: 'Cours adultes',
    subtitle: 'Adultes & ados',
    desc: 'Il n\'est jamais trop tard pour monter à cheval ! Cours spécialement adaptés aux adultes débutants ou confirmés.',
    features: ['Tous niveaux', 'Ambiance détendue', 'Flexibilité horaire', 'Petits groupes'],
    color: 'from-cream-100 to-cream-50',
    accent: 'bg-cream-200 text-earth-700',
    duration: '1h',
    price: 'sur demande',
  },
]

function CheckIcon() {
  return (
    <svg className="w-4 h-4 text-forest-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}

export default function Cours() {
  const { ref, inView } = useInView()

  return (
    <section id="cours" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge bg-forest-100 text-forest-700 mb-4">Nos cours</span>
          <h2 className="section-title mb-4">Des cours pour chaque âge,<br />chaque niveau</h2>
          <p className="section-subtitle mx-auto text-center">
            Tous nos cours sont encadrés par Marjorie avec passion et bienveillance.
            Les groupes sont volontairement petits pour garantir un suivi personnalisé.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {courses.map((course, i) => (
            <div
              key={course.title}
              className={`relative card bg-gradient-to-b ${course.color} border ${course.featured ? 'border-forest-300 ring-2 ring-forest-400/30 overflow-visible' : 'border-cream-100'} transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 100 + 200}ms` }}
            >
              {course.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-forest-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow">
                  ✨ Le plus populaire
                </div>
              )}

              <div className="p-6">
                <div className="text-4xl mb-3">{course.emoji}</div>
                <span className={`badge ${course.accent} mb-3`}>{course.badge}</span>
                <h3 className="text-xl font-serif font-bold text-earth-900 mb-1">{course.title}</h3>
                <p className="text-sm font-medium text-earth-500 mb-4">{course.subtitle}</p>
                <p className="text-sm text-earth-600 leading-relaxed mb-5">{course.desc}</p>

                <ul className="space-y-2 mb-6">
                  {course.features.map(f => (
                    <li key={f} className="flex items-center gap-2 text-sm text-earth-700">
                      <CheckIcon />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-cream-200 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-earth-500">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                    {course.duration}
                  </div>
                  <a href="#contact" className="text-forest-600 font-semibold hover:text-forest-700 transition-colors">
                    S'inscrire →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-sm text-earth-500 mt-8 bg-cream-50 rounded-xl py-4 px-6 max-w-2xl mx-auto border border-cream-100">
          📅 Les cours ont lieu tous les jours. Contactez-nous pour connaître
          les disponibilités et les tarifs.
        </p>
      </div>
    </section>
  )
}
