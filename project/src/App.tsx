import { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { translations, Language } from './translations';

function App() {
  const [lang, setLang] = useState<Language>('de');
  const t = translations[lang];

  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
    document.documentElement.lang = newLang;
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50">
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center flex-shrink-0">
            <img src="/logo_t.png" alt="CarELBL Autopflege" className="h-16 sm:h-18 w-auto flex-shrink-0" />
          </div>

          <div className="flex items-center space-x-4 md:space-x-10">
            <button onClick={() => scrollToSection('services')} className="hidden md:block text-sm text-gray-600 hover:text-gray-900 transition">
              {t.nav.services}
            </button>
            <button onClick={() => scrollToSection('contact')} className="hidden md:block text-sm text-gray-600 hover:text-gray-900 transition">
              {t.nav.contact}
            </button>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => toggleLanguage('de')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition ${lang === 'de' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
              >
                DE
              </button>
              <span className="text-gray-300">|</span>
              <button
                onClick={() => toggleLanguage('en')}
                className={`px-2.5 py-1.5 rounded-md text-xs font-medium transition ${lang === 'en' ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'}`}
              >
                EN
              </button>
            </div>
          </div>
        </nav>
      </header>

      <main className="pt-20">
        <section className="relative bg-gray-900 text-white min-h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="/hero copy.jpg"
              alt="Professional car detailing"
              className="w-full h-full object-cover opacity-50"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/60 via-gray-900/50 to-gray-900/70"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative w-full py-24">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.2em] text-gray-300 mb-6 font-medium">
                {t.hero.subtitle}
              </p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light mb-8 leading-[1.1] tracking-tight">
                {t.hero.title}
              </h1>
              <p className="text-lg text-gray-300 mb-12 max-w-xl font-light leading-relaxed">
                Garage Posthöfe · Einfahrt Dominikanerbastei 11, 1010 Wien
              </p>
              <div>
                <a
                  href="https://booking.carelbl.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 rounded-full font-medium hover:bg-gray-100 transition"
                >
                  {t.hero.bookNow}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                  src="/interior copy.jpg"
                  alt="Premium car interior detailing"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h2 className="text-3xl sm:text-4xl font-light text-gray-900 mb-6 tracking-tight">
                  {t.about.title}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {t.about.desc1}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {t.about.desc2}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-16 bg-gray-50">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-12 text-center tracking-tight">
              {t.services.title}
            </h2>

            <div className="space-y-0 bg-white rounded-2xl overflow-hidden">
              <div className="border-b border-gray-100 p-8 hover:bg-gray-50/50 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {t.services.spa.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">{t.services.spa.desc}</p>
                  </div>
                  <div className="text-right ml-6 flex-shrink-0">
                    <div className="text-2xl font-light text-gray-900">{t.services.spa.price}</div>
                    <div className="text-sm text-gray-500 mt-1">{t.services.spa.time}</div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-100 p-8 hover:bg-gray-50/50 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {t.services.soft.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">{t.services.soft.desc}</p>
                  </div>
                  <div className="text-right ml-6 flex-shrink-0">
                    <div className="text-2xl font-light text-gray-900">{t.services.soft.price}</div>
                    <div className="text-sm text-gray-500 mt-1">{t.services.soft.time}</div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-100 p-8 hover:bg-gray-50/50 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {t.services.easy.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">{t.services.easy.desc}</p>
                  </div>
                  <div className="text-right ml-6 flex-shrink-0">
                    <div className="text-2xl font-light text-gray-900">{t.services.easy.price}</div>
                    <div className="text-sm text-gray-500 mt-1">{t.services.easy.time}</div>
                  </div>
                </div>
              </div>

              <div className="border-b border-gray-100 p-8 bg-gray-900 text-white hover:bg-gray-800 transition relative">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-medium">
                        {t.services.wellness.name}
                      </h3>
                      <span className="bg-white text-gray-900 px-2 py-0.5 rounded-full font-medium text-[10px] uppercase tracking-wider">
                        {t.services.wellness.popular}
                      </span>
                    </div>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-2xl">{t.services.wellness.desc}</p>
                  </div>
                  <div className="text-right ml-6 flex-shrink-0">
                    <div className="text-2xl font-light">{t.services.wellness.price}</div>
                    <div className="text-sm text-gray-400 mt-1">{t.services.wellness.time}</div>
                  </div>
                </div>
              </div>

              <div className="p-8 hover:bg-gray-50/50 transition">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 mb-2">
                      {t.services.intense.name}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-2xl">{t.services.intense.desc}</p>
                  </div>
                  <div className="text-right ml-6 flex-shrink-0">
                    <div className="text-2xl font-light text-gray-900">{t.services.intense.price}</div>
                    <div className="text-sm text-gray-500 mt-1">{t.services.intense.time}</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center max-w-2xl mx-auto">
              <p className="text-sm text-gray-500 leading-relaxed">
                {t.pricing.parking} {t.pricing.surcharge}
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-6 tracking-tight">
              {t.booking.title}
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              {t.booking.subtitle}
            </p>
            <a
              href="https://booking.carelbl.at/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition text-lg"
            >
              {t.booking.button}
            </a>
          </div>
        </section>

        <section id="contact" className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-12 tracking-tight">
                  {t.contact.title}
                </h2>
                <div className="space-y-8">
                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-medium">
                      {t.contact.address}
                    </h3>
                    <p className="text-lg text-gray-900">
                      {t.contact.addressLine1}<br />
                      <span className="font-semibold">
                        {t.contact.addressLine2}
                      </span>
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-medium">
                      {t.contact.phone}
                    </h3>
                    <a href="tel:+4317108625" className="text-lg text-gray-900 hover:text-gray-600 transition">
                      01 710 86 25
                    </a>
                  </div>

                  <div>
                    <h3 className="text-sm uppercase tracking-wider text-gray-500 mb-2 font-medium">
                      {t.contact.hours}
                    </h3>
                    <p className="text-lg text-gray-900">
                      {t.contact.hoursDetail}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">{t.contact.hoursNote}</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-200 rounded-2xl overflow-hidden h-[500px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.1!2d16.3738!3d48.2082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136cb9d%3A0x1e4ca5d8aebe8b83!2sPostgasse%2010%2C%201010%20Wien%2C%20Austria!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CAR SPA Location"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div className="flex items-center flex-shrink-0">
              <img src="/logo_t.png" alt="CarELBL Autopflege" className="h-16 sm:h-18 w-auto flex-shrink-0" />
            </div>
            <div className="text-sm text-gray-500">
              <p>© {new Date().getFullYear()} Parkhaus Elbl. {t.footer.rights}</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
