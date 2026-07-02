'use client'
import { useState, useRef } from 'react'
import { useInView } from '@/hooks/useInView'

const WHATSAPP_NUMBER = '32488164812'

const infos = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Adresse',
    value: 'Rue du Riquau 5, 1435 Mont-Saint-Guibert, Belgique',
    link: 'https://maps.google.com/?q=Rue+du+Riquau+5+1435+Mont-Saint-Guibert+Belgique',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Téléphone',
    value: '0488 16 48 12',
    link: 'tel:+32488164812',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'poneyclubmarjorie@gmail.com',
    link: 'mailto:poneyclubmarjorie@gmail.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
      </svg>
    ),
    label: 'Horaires',
    value: 'Tous les jours · 9h00–18h00',
    link: null,
  },
]

export default function Contact() {
  const { ref, inView } = useInView()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const formRef = useRef<HTMLFormElement>(null)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData(e.currentTarget)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prenom: formData.get('prenom'),
          nom: formData.get('nom'),
          email: formData.get('email'),
          sujet: formData.get('sujet'),
          message: formData.get('message'),
        }),
      })
      if (res.ok) {
        setStatus('sent')
        formRef.current?.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-cream-50 bg-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="badge bg-forest-100 text-forest-700 mb-4">Contact</span>
          <h2 className="section-title mb-4">Parlons de votre enfant !</h2>
          <p className="section-subtitle mx-auto text-center">
            Une question ? Envie d'inscrire votre enfant ? Nous sommes là pour vous.
            Répondons généralement dans les 24 heures.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — form + infos */}
          <div className={`transition-all duration-700 delay-100 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>

            {/* Contact form */}
            <div className="card border border-cream-100 p-7 mb-6">
              <h3 className="text-xl font-serif font-bold text-earth-900 mb-6">Envoyez-nous un message</h3>

              {status === 'error' && (
                <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-red-700">
                  Une erreur est survenue. Réessaie ou contacte-nous directement par WhatsApp.
                </div>
              )}

              {status === 'sent' ? (
                <div className="text-center py-10">
                  <div className="text-5xl mb-4">🎉</div>
                  <h4 className="text-lg font-serif font-bold text-earth-900 mb-2">Message envoyé !</h4>
                  <p className="text-earth-600">Nous vous répondrons très vite. À bientôt au club !</p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-5 text-sm text-forest-600 hover:text-forest-700 font-medium underline underline-offset-2"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1.5">Votre prénom *</label>
                      <input
                        type="text"
                        name="prenom"
                        required
                        placeholder="Marie"
                        className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-earth-700 mb-1.5">Votre nom *</label>
                      <input
                        type="text"
                        name="nom"
                        required
                        placeholder="Dupont"
                        className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="marie.dupont@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">Sujet *</label>
                    <select
                      name="sujet"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-earth-900 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all text-sm"
                      defaultValue=""
                    >
                      <option value="" disabled>Choisissez un sujet</option>
                      <option>Inscription aux cours</option>
                      <option>Stage de vacances</option>
                      <option>Pension de poney</option>
                      <option>Renseignements généraux</option>
                      <option>Autre</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-earth-700 mb-1.5">Votre message *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      placeholder="Dites-nous l'âge de votre enfant et ce qui vous intéresse…"
                      className="w-full px-4 py-3 rounded-xl border border-cream-200 bg-cream-50 text-earth-900 placeholder-earth-400 focus:outline-none focus:ring-2 focus:ring-forest-400 focus:border-transparent transition-all resize-none text-sm"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Envoi en cours…
                      </>
                    ) : (
                      <>
                        Envoyer le message
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact infos */}
            <div className="grid sm:grid-cols-2 gap-3">
              {infos.map(info => (
                <div key={info.label} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-cream-100 shadow-sm">
                  <span className="w-9 h-9 rounded-lg bg-forest-100 flex items-center justify-center text-forest-600 flex-shrink-0">
                    {info.icon}
                  </span>
                  <div>
                    <div className="text-xs font-semibold text-earth-500 uppercase tracking-wide">{info.label}</div>
                    {info.link ? (
                      <a href={info.link} className="text-sm font-medium text-earth-800 hover:text-forest-600 transition-colors mt-0.5 block">
                        {info.value}
                      </a>
                    ) : (
                      <div className="text-sm font-medium text-earth-800 mt-0.5">{info.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=Bonjour%20Poney%20Club%20Marjorie%2C%20je%20voudrais%20avoir%20des%20renseignements`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] hover:bg-[#1eb155] text-white font-semibold rounded-2xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Écrire sur WhatsApp
            </a>
          </div>

          {/* Right — Google Maps */}
          <div className={`transition-all duration-700 delay-300 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="card border border-cream-100 overflow-hidden h-full min-h-[500px]">
              <div className="p-5 border-b border-cream-100 bg-white flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-forest-100 flex items-center justify-center text-forest-600">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </span>
                <div>
                  <div className="font-semibold text-earth-900 text-sm">Nous trouver</div>
                  <div className="text-xs text-earth-500">Rue du Riquau 5, 1435 Mont-Saint-Guibert</div>
                </div>
              </div>
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=4.5972%2C50.5989%2C4.6372%2C50.6189&layer=mapnik&marker=50.6089%2C4.6172"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '440px' }}
                allowFullScreen
                loading="lazy"
                title="Localisation du Poney Club Marjorie — OpenStreetMap"
                className="block"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
