import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Cours from '@/components/Cours'
import Stages from '@/components/Stages'
import Pension from '@/components/Pension'
import Events from '@/components/Events'
import GalerieAccueil from '@/components/GalerieAccueil'
import Galerie from '@/components/Galerie'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Cours />
      <Stages />
      <Pension />
      <Events />
      <GalerieAccueil />
      <Galerie />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
