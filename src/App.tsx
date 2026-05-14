import { useState } from 'react'
import { Phone, Mail, MapPin, Menu, X, Snowflake, Home, Wind, Hammer, DoorOpen, Warehouse } from 'lucide-react'

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const services = [
    {
      icon: Snowflake,
      title: 'Varmepumper',
      description: 'Profesjonelt vedlikehold og service av varmepumper for optimalisert energibruk'
    },
    {
      icon: Home,
      title: 'Etterisolering',
      description: 'Effektiv etterisolering av boliger for reduserte energikostnader'
    },
    {
      icon: Wind,
      title: 'Vindtetting',
      description: 'Profesjonell vindtetting som holder varmen inne og kulden ute'
    },
    {
      icon: Hammer,
      title: 'Kledning',
      description: 'Montering av kvalitetskledning som beskytter og forskjønner boligen din'
    },
    {
      icon: DoorOpen,
      title: 'Vinduer og Dører',
      description: 'Installasjon av energieffektive vinduer og dører'
    },
    {
      icon: Warehouse,
      title: 'Garasjeporter og Terrasser',
      description: 'Montering av garasjeporter og bygging av terrasser'
    }
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Forespørsel fra ${formData.name}`
    const body = `Navn: ${formData.name}%0D%0AEpost: ${formData.email}%0D%0ATelefon: ${formData.phone}%0D%0A%0D%0AMelding:%0D%0A${formData.message}`
    window.location.href = `mailto:kenneth@hoie-service.no?subject=${subject}&body=${body}`
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0A0E27] via-[#1a1f3a] to-[#0A0E27]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-[#0A0E27]/95 backdrop-blur-sm border-b-2 border-[#00D9FF]/20 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center">
              <img src="/hoie-logo.png" alt="Høie Service AS" className="h-24 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('hjem')} className="text-white hover:text-[#00D9FF] transition-colors text-lg font-medium">Hjem</button>
              <button onClick={() => scrollToSection('tjenester')} className="text-white hover:text-[#00D9FF] transition-colors text-lg font-medium">Tjenester</button>
              <button onClick={() => scrollToSection('om-oss')} className="text-white hover:text-[#00D9FF] transition-colors text-lg font-medium">Om Oss</button>
              <button onClick={() => scrollToSection('kontakt')} className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] text-white px-8 py-3 rounded-full hover:shadow-lg hover:shadow-[#00D9FF]/50 transition-all text-lg font-semibold">
                Kontakt Oss
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#0A0E27] border-t-2 border-[#00D9FF]/20">
            <div className="px-4 py-6 space-y-4">
              <button onClick={() => scrollToSection('hjem')} className="block w-full text-left text-white hover:text-[#00D9FF] py-3 text-lg font-medium">Hjem</button>
              <button onClick={() => scrollToSection('tjenester')} className="block w-full text-left text-white hover:text-[#00D9FF] py-3 text-lg font-medium">Tjenester</button>
              <button onClick={() => scrollToSection('om-oss')} className="block w-full text-left text-white hover:text-[#00D9FF] py-3 text-lg font-medium">Om Oss</button>
              <button onClick={() => scrollToSection('kontakt')} className="block w-full text-left bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] text-white px-8 py-4 rounded-full text-lg font-semibold">
                Kontakt Oss
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hjem" className="pt-40 pb-32 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto text-center w-full">
          <h1 className="text-6xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Energioppgradering av <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text text-transparent">Din Bolig</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-4xl mx-auto leading-relaxed">
            Profesjonelle tjenester innen varmepumper, isolering, vindtetting, kledning, vinduer, dører og mer
          </p>
          <button
            onClick={() => scrollToSection('kontakt')}
            className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] text-white px-12 py-5 rounded-full text-xl font-semibold hover:shadow-2xl hover:shadow-[#00D9FF]/50 transition-all transform hover:scale-105"
          >
            Be om Gratis Befaring
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="tjenester" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0E27]/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-6">
            Våre <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text text-transparent">Tjenester</span>
          </h2>
          <p className="text-center text-gray-400 mb-20 text-xl">
            Vi tilbyr profesjonelle løsninger for energioppgradering
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-[#1a1f3a] to-[#0A0E27] p-10 rounded-3xl border-2 border-[#00D9FF]/20 hover:border-[#00D9FF]/60 transition-all hover:shadow-2xl hover:shadow-[#00D9FF]/30 group cursor-pointer"
                >
                  <div className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] p-6 rounded-2xl inline-block mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-5">{service.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{service.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="om-oss" className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
                Om <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text text-transparent">Høie Service AS</span>
              </h2>
              <p className="text-gray-300 text-xl mb-8 leading-relaxed">
                Vi er et profesjonelt håndverkerfirma som spesialiserer oss på energioppgradering av boliger. Med lang erfaring og høy kompetanse leverer vi kvalitetsarbeid som reduserer energikostnader og øker verdien på boligen din.
              </p>
              <p className="text-gray-300 text-xl leading-relaxed">
                Fra varmepumper til kledning, fra vindtetting til nye vinduer - vi tar oss av hele prosessen med profesjonalitet og presisjon.
              </p>
            </div>

            <div className="bg-gradient-to-br from-[#1a1f3a] to-[#0A0E27] p-10 rounded-3xl border-2 border-[#00D9FF]/20">
              <h3 className="text-3xl font-bold text-white mb-8">Kontaktinformasjon</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-5">
                  <Phone className="w-8 h-8 text-[#00D9FF] mt-1" />
                  <div>
                    <p className="text-gray-400 text-base mb-1">Telefon</p>
                    <a href="tel:48118300" className="text-white text-2xl hover:text-[#00D9FF] transition-colors font-semibold">481 18 300</a>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <Mail className="w-8 h-8 text-[#00D9FF] mt-1" />
                  <div>
                    <p className="text-gray-400 text-base mb-1">E-post</p>
                    <a href="mailto:kenneth@hoie-service.no" className="text-white text-xl hover:text-[#00D9FF] transition-colors break-all">kenneth@hoie-service.no</a>
                  </div>
                </div>
                <div className="flex items-start space-x-5">
                  <MapPin className="w-8 h-8 text-[#00D9FF] mt-1" />
                  <div>
                    <p className="text-gray-400 text-base mb-1">Adresse</p>
                    <p className="text-white text-xl">Flatåsen 2, 5550 Sveio</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="py-32 px-4 sm:px-6 lg:px-8 bg-[#0A0E27]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-bold text-center text-white mb-6">
            <span className="bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] bg-clip-text text-transparent">Kontakt Oss</span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-xl">
            Be om gratis og uforpliktet befaring av din bolig
          </p>

          <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#1a1f3a] to-[#0A0E27] p-10 rounded-3xl border-2 border-[#00D9FF]/20 shadow-2xl">
            <div className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-white mb-3 font-semibold text-lg">Navn *</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0A0E27] border-2 border-[#00D9FF]/30 rounded-xl text-white text-lg focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Ditt navn"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white mb-3 font-semibold text-lg">E-post *</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0A0E27] border-2 border-[#00D9FF]/30 rounded-xl text-white text-lg focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="din@epost.no"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white mb-3 font-semibold text-lg">Telefon *</label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-[#0A0E27] border-2 border-[#00D9FF]/30 rounded-xl text-white text-lg focus:outline-none focus:border-[#00D9FF] transition-colors"
                  placeholder="Ditt telefonnummer"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white mb-3 font-semibold text-lg">Melding *</label>
                <textarea
                  id="message"
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={6}
                  className="w-full px-5 py-4 bg-[#0A0E27] border-2 border-[#00D9FF]/30 rounded-xl text-white text-lg focus:outline-none focus:border-[#00D9FF] transition-colors resize-none"
                  placeholder="Fortell oss om ditt prosjekt..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00D9FF] to-[#FF6B9D] text-white px-10 py-5 rounded-xl text-xl font-semibold hover:shadow-2xl hover:shadow-[#00D9FF]/50 transition-all transform hover:scale-[1.02]"
              >
                Send Forespørsel
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A0E27] border-t-2 border-[#00D9FF]/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <img src="/hoie-logo.png" alt="Høie Service AS" className="h-28 w-auto mb-6" />
              <p className="text-gray-400 text-lg">
                Profesjonell energioppgradering av boliger
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-2xl">Kontakt</h4>
              <div className="space-y-3 text-gray-400 text-lg">
                <p>Telefon: 481 18 300</p>
                <p>E-post: kenneth@hoie-service.no</p>
                <p>Flatåsen 2, 5550 Sveio</p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold mb-6 text-2xl">Tjenester</h4>
              <ul className="space-y-3 text-gray-400 text-lg">
                <li>Varmepumper</li>
                <li>Etterisolering</li>
                <li>Vindtetting</li>
                <li>Kledning</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-[#00D9FF]/20 text-center text-gray-400 text-lg">
            <p>&copy; 2026 Høie Service AS. Alle rettigheter reservert.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
