'use client'
import { useState } from 'react'
import { useInView } from '@/hooks/useInView'

const faqs = [
  {
    q: 'À partir de quel âge peut-on monter à poney ?',
    a: "Le Poney Club Marjorie accueille les enfants dès 4 ans. Nos activités Poney Game sont spécialement conçues pour les tout-petits, avec des poneys adaptés à leur taille. Les cours progressent ensuite jusqu'aux adolescents et aux adultes, selon le niveau de chacun.",
  },
  {
    q: 'Comment réserver un cours ou un stage ?',
    a: 'Contactez-nous par téléphone au 0488 16 48 12, via notre formulaire de contact, par e-mail à poneyclubmarjorie@gmail.com ou directement sur WhatsApp. Nous vous répondons généralement sous 24 heures.',
  },
  {
    q: 'Les débutants sont-ils acceptés ?',
    a: "Absolument. Nous accueillons tous les niveaux, des grands débutants aux cavaliers confirmés. Nos cours d'Initiation et de Poney Game sont spécialement conçus pour ceux qui n'ont jamais monté. Marjorie adapte chaque séance au rythme de chacun.",
  },
  {
    q: 'Quel équipement est nécessaire pour venir monter ?',
    a: "Un casque d'équitation homologué est obligatoire — il peut être fourni lors des premières séances. Prévoyez une tenue confortable (pantalon long ou jodhpurs) et des chaussures fermées à petit talon. Nous vous communiquerons la liste complète lors de votre réservation.",
  },
  {
    q: "Peut-on faire un cours d'essai avant de s'inscrire ?",
    a: "Oui ! Nous proposons des séances découverte pour visiter le club, rencontrer les poneys et tester une première activité avant de vous inscrire. Contactez-nous pour connaître les disponibilités.",
  },
  {
    q: 'Les adultes sont-ils acceptés au club ?',
    a: "Oui, nous proposons des cours spécialement adaptés aux adultes, débutants ou confirmés. Il n'est jamais trop tard pour apprendre l'équitation ! Nos séances se déroulent dans une ambiance détendue, en petits groupes pour un suivi personnalisé.",
  },
  {
    q: 'Les stages sont-ils adaptés aux enfants débutants ?',
    a: "Oui, nos stages de vacances sont ouverts à tous les niveaux dès 4 ans. Que votre enfant soit grand débutant ou déjà expérimenté, nous adaptons le programme à son niveau. Des stages ont lieu pendant toutes les vacances scolaires : été, carnaval, Toussaint, Noël et Pâques.",
  },
  {
    q: 'Organisez-vous des anniversaires avec des poneys ?',
    a: "Oui ! Le Poney Club Marjorie organise des anniversaires et événements privés pour les enfants. Votre enfant et ses amis profiteront d'une balade ou d'un cours de poney, d'un accueil personnalisé et d'un espace pique-nique. Contactez-nous pour organiser cet événement mémorable.",
  },
  {
    q: 'Comment contacter le Poney Club Marjorie ?',
    a: "Vous pouvez nous joindre par téléphone au 0488 16 48 12, par e-mail à poneyclubmarjorie@gmail.com, via notre formulaire de contact ou sur WhatsApp. Nous sommes situés Rue du Riquau 5 à Mont-Saint-Guibert, en Brabant wallon, à proximité de Louvain-la-Neuve, Ottignies et Wavre.",
  },
  {
    q: "Le club est-il ouvert toute l'année ?",
    a: "Oui, le Poney Club Marjorie est ouvert tous les jours de 9h à 18h, toute l'année, vacances scolaires comprises. En cas de météo défavorable, les activités peuvent se tenir en manège couvert.",
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      className={`w-5 h-5 text-forest-600 transition-transform duration-300 flex-shrink-0 ${open ? 'rotate-180' : ''}`}
      fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export default function FAQ() {
  const { ref, inView } = useInView()
  const [openIdx, setOpenIdx] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={ref} className={`text-center mb-14 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge bg-forest-100 text-forest-700 mb-4">Questions fréquentes</span>
          <h2 className="section-title mb-4">Tout ce que vous souhaitez savoir</h2>
          <p className="section-subtitle mx-auto text-center">
            Retrouvez les réponses aux questions les plus posées avant votre première visite au club.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`card border border-cream-100 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${i * 40 + 200}ms` }}
            >
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left"
                aria-expanded={openIdx === i}
                aria-controls={`faq-answer-${i}`}
                id={`faq-question-${i}`}
              >
                <h3 className="font-serif font-semibold text-earth-900 text-base leading-snug">{faq.q}</h3>
                <ChevronIcon open={openIdx === i} />
              </button>
              <div
                id={`faq-answer-${i}`}
                role="region"
                aria-labelledby={`faq-question-${i}`}
                className={`overflow-hidden transition-all duration-300 ${openIdx === i ? 'max-h-60' : 'max-h-0'}`}
              >
                <p className="px-5 pb-5 text-sm text-earth-600 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-earth-500 mb-4">Vous ne trouvez pas votre réponse ?</p>
          <a href="#contact" className="btn-primary">
            Posez-nous votre question
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
