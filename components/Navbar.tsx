'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'

const links = [
  { href: '#accueil',  label: 'Accueil' },
  { href: '#apropos',  label: 'À propos' },
  { href: '#cours',    label: 'Cours' },
  { href: '#stages',   label: 'Stages' },
  { href: '#pension',  label: 'Pension' },
  { href: '#events',   label: 'Événements' },
  { href: '#galerie',  label: 'Galerie' },
  { href: '#contact',  label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = scrolled
    ? 'bg-white/95 backdrop-blur-md shadow-md'
    : 'bg-transparent'

  const linkColor = scrolled ? 'text-earth-700 hover:text-forest-600' : 'text-white/90 hover:text-white'
  const logoColor = scrolled ? 'text-forest-800' : 'text-white'
  const subColor  = scrolled ? 'text-earth-500'  : 'text-cream-200'

  return (
    <nav className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'py-5'}`}>

          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2">
            <Image
              src="/images/logo.jpg"
              alt="Logo Poney Club Marjorie"
              width={52}
              height={52}
              className="rounded-full object-cover"
            />
            <div className="leading-none">
              <div className={`font-serif font-bold text-lg ${logoColor} transition-colors duration-300`}>
                Poney Club
              </div>
              <div className={`font-serif text-sm tracking-wide ${subColor} transition-colors duration-300`}>
                Marjorie
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-7">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors duration-200 ${linkColor}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              className="ml-2 bg-forest-600 hover:bg-forest-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Nous contacter
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
            className={`lg:hidden p-2 rounded-lg ${scrolled ? 'text-earth-700' : 'text-white'}`}
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="bg-white rounded-2xl mb-4 py-2 shadow-xl border border-cream-100">
            {links.map(l => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-5 py-3.5 text-earth-700 hover:text-forest-600 hover:bg-cream-50 font-medium transition-colors"
              >
                {l.label}
              </a>
            ))}
            <div className="px-5 pt-2 pb-3">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-forest-600 hover:bg-forest-700 text-white font-semibold px-5 py-3 rounded-full transition-colors"
              >
                Nous contacter
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
