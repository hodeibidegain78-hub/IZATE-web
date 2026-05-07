import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="bg-stone-50 pt-32 pb-24 min-h-screen">
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mt-12 mb-24">
        
        <div className="text-left max-w-3xl mb-20 lg:mb-32">
          <span className="text-sm font-medium text-brand-600 mb-4 block tracking-wide">Estamos aquí</span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 mb-8 leading-[1.1] tracking-tight">Contacto <span className="text-brand-600 font-normal">y Citas</span></h1>
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            Estamos aquí para ayudarte. Contáctanos para solicitar una cita o resolver cualquier duda sobre nuestros tratamientos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <div className="w-full">
            <h2 className="text-sm tracking-widest text-stone-400 mb-10 font-medium block">Información de la clínica</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6 border border-stone-100 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                <div className="w-12 h-12 bg-brand-50 flex items-center justify-center rounded-2xl flex-shrink-0 text-brand-600">
                  <MapPin size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-2 tracking-tight">Dirección</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-4 font-light">Mad. Jauregiberri Ibilbidea, 4<br />BJ 1F, 20014<br />Donostia / San Sebastián, Gipuzkoa</p>
                  <a href="https://maps.google.com/?q=IZATE+Fisioterapia+Donostia" target="_blank" rel="noopener noreferrer" className="inline-flex text-[13px] font-medium text-brand-600 hover:text-brand-700 transition-colors">Ver en Google Maps →</a>
                </div>
              </div>

              <div className="flex items-start gap-6 border border-stone-100 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                 <div className="w-12 h-12 bg-brand-50 flex items-center justify-center rounded-2xl flex-shrink-0 text-brand-600">
                  <Phone size={24} strokeWidth={1.5} />
                </div>
                 <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-2 tracking-tight">Teléfono</h3>
                  <a href="tel:+34613920174" className="text-stone-600 hover:text-brand-600 transition-colors text-lg font-light mb-1 block">613 92 01 74</a>
                  <p className="text-[13px] text-stone-400 font-light">Llámanos o WhatsApp</p>
                </div>
              </div>

              <div className="flex items-start gap-6 border border-stone-100 bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                 <div className="w-12 h-12 bg-brand-50 flex items-center justify-center rounded-2xl flex-shrink-0 text-brand-600">
                  <Clock size={24} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-900 mb-2 tracking-tight">Horario</h3>
                  <p className="text-stone-600 text-sm leading-relaxed font-light mb-1">Lunes a Viernes</p>
                  <p className="text-[13px] text-stone-400 font-light">Atención con cita previa</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-[#1A1A1A] rounded-[2.5rem] shadow-2xl p-12 lg:p-16 text-stone-50 h-fit">
            <h2 className="text-sm tracking-widest text-brand-400 mb-10 font-medium block">Envíanos un mensaje</h2>
            <form className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-3" htmlFor="name">Nombre Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-stone-800/50 border border-stone-700/50 rounded-xl px-4 py-3 text-sm text-stone-50 focus:border-brand-500 focus:outline-none placeholder:text-stone-500 font-light transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-3" htmlFor="email">Teléfono o Email</label>
                <input 
                  type="text" 
                  id="email" 
                  className="w-full bg-stone-800/50 border border-stone-700/50 rounded-xl px-4 py-3 text-sm text-stone-50 focus:border-brand-500 focus:outline-none placeholder:text-stone-500 font-light transition-colors"
                  placeholder="Para poder contactarte"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-stone-300 mb-3" htmlFor="message">Mensaje / Motivo de consulta</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-stone-800/50 border border-stone-700/50 rounded-xl px-4 py-3 text-sm text-stone-50 focus:border-brand-500 focus:outline-none placeholder:text-stone-500 font-light resize-none transition-colors"
                  placeholder="¿En qué podemos ayudarte?"
                ></textarea>
              </div>
              <button 
                type="button" 
                className="inline-block mt-8 bg-brand-600 text-white rounded-full px-10 py-4 text-sm font-medium hover:bg-brand-700 transition-colors w-full"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* Map Section */}
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mt-12">
        <div className="relative w-full aspect-video md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-200 bg-stone-200">
          <iframe 
            width="100%" 
            height="100%" 
            frameBorder="0" 
            scrolling="no" 
            marginHeight={0} 
            marginWidth={0} 
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=es&amp;q=Mad.%20Jauregiberri%20Ibilbidea,%204,%2020014,%20Donostia,%20Gipuzkoa+(IZATE%20Fisioterapia)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            className="absolute inset-0 z-0 grayscale-[0.2] contrast-[1.05] opacity-90 mix-blend-multiply"
            title="Ubicación IZATE Fisioterapia en Donostia"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
