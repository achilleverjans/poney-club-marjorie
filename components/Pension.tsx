'use client'
import Image from 'next/image'
import { useInView } from '@/hooks/useInView'

const services = [
  { icon: '🌾', title: 'Alimentation complète',  desc: 'Foin, céréales et compléments adaptés à chaque poney, ajustés selon la saison et l\'activité.' },
  { icon: '🏠', title: 'Box individuels',        desc: 'Les poneys sont logés seuls ou à deux selon leurs affinités, dans des boxes spacieux, propres et confortables.' },
  { icon: '🌿', title: 'Paddock & pré',          desc: 'Accès aux paddocks et aux prés pour que votre poney puisse se dépenser et socialiser.' },
  { icon: '🩺', title: 'Suivi vétérinaire',      desc: 'Partenariat avec un vétérinaire équin. Suivi des vaccinations, vermifugations et soins courants.' },
  { icon: '✂️', title: 'Maréchalerie & toilette', desc: 'Soins des sabots par un maréchal-ferrant diplômé, brossage et entretien régulier.' },
  { icon: '👁️', title: 'Surveillance 7j/7',      desc: 'Votre poney est surveillé matin et soir, 365 jours par an. Vous êtes alertés en cas d\'anomalie.' },
]

export default function Pension() {
  const { ref, inView } = useInView()

  return (
    <section id="pension" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Content */}
          <div ref={ref} className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <span className="badge bg-earth-100 text-earth-700 mb-4">Pension & soins</span>
            <h2 className="section-title mb-5">
              Votre poney et chevaux<br />entre de bonnes mains
            </h2>
            <p className="text-earth-600 leading-relaxed mb-8">
              Le Poney Club Marjorie accueille également des poneys en pension complète.
              Nos installations modernes et notre équipe dévouée garantissent le bien-être
              et la santé de votre animal toute l'année.
            </p>

            {/* Services grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {services.map((s, i) => (
                <div
                  key={s.title}
                  className={`flex gap-3 p-4 rounded-xl bg-cream-50 border border-cream-100 hover:border-forest-200 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${200 + i * 80}ms` }}
                >
                  <span className="text-2xl flex-shrink-0">{s.icon}</span>
                  <div>
                    <div className="font-semibold text-earth-900 text-sm">{s.title}</div>
                    <div className="text-earth-500 text-xs leading-relaxed mt-1">{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" className="btn-primary mt-8">
              Demander un devis
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Images collage */}
          <div className={`relative transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/pension-box.jpg"
                    alt="Enfant avec un poulain en écurie"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/pension-soins.jpg"
                    alt="Préparation et sellage du cheval"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/pension-pre.jpg"
                    alt="Poneys dans le pré fleuri"
                    fill
                    className="object-cover object-center"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/images/pension-ecurie.jpg"
                    alt="Enfants qui câlinent un poney en écurie"
                    fill
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-forest-100 rounded-full opacity-60 -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-cream-200 rounded-full opacity-80 -z-10" />
          </div>
        </div>
      </div>
    </section>
  )
}
