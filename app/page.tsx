import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Star, Calendar, ClipboardList, HandHeart, Footprints } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-stone-50">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-32 pb-12 lg:pt-40 bg-stone-50 overflow-hidden">
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-12 relative">
          
          {/* Left Column (Content) */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center gap-8 relative z-10 pt-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-medium tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
                Clínica de fisioterapia en Donostia
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl leading-[1.1] font-medium text-stone-900 tracking-tight max-w-[600px]">
                Cuidamos de tu cuerpo, <span className="text-brand-600 font-normal">recuperamos tu movimiento.</span>
              </h1>
              <p className="text-lg text-stone-600 leading-relaxed max-w-[480px] font-light">
                Un espacio dedicado a tu bienestar. Te ayudamos a aliviar el dolor y mejorar tu calidad de vida con un enfoque profesional y cercano.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <Link 
                href="/services" 
                className="flex items-center gap-3 px-8 py-4 bg-stone-900 text-white rounded-full group hover:bg-stone-800 transition-all"
              >
                <span className="text-[14px] font-medium tracking-wide">Explorar tratamientos</span>
                <div className="w-2 h-2 bg-white rounded-full group-hover:scale-150 transition-transform"></div>
              </Link>
              <a 
                href="tel:+34613920174" 
                className="text-[12px] uppercase tracking-widest font-semibold border-b border-stone-800 pb-1 hover:text-brand-500 hover:border-brand-500 transition-colors"
              >
                Llámanos
              </a>
            </div>
          </div>

          {/* Right Column (Visual Composition) */}
          <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-[600px] rounded-3xl overflow-hidden shadow-2xl shadow-stone-200/50">
            <Image
              src="/trabajador.jpg"
              alt="Interior de clínica de fisioterapia"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            
            {/* Review Overlay Card */}
            <div className="absolute bottom-6 left-6 right-6 lg:bottom-8 lg:left-8 lg:right-8 bg-white/95 backdrop-blur-md p-6 rounded-2xl z-20 shadow-lg shadow-stone-900/5 border border-stone-100">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                <div className="flex gap-1 text-brand-500 flex-shrink-0 pt-1">
                   <Star size={14} fill="currentColor" className="text-brand-500" />
                   <Star size={14} fill="currentColor" className="text-brand-500" />
                   <Star size={14} fill="currentColor" className="text-brand-500" />
                   <Star size={14} fill="currentColor" className="text-brand-500" />
                   <Star size={14} fill="currentColor" className="text-brand-500" />
                </div>
                <p className="text-sm leading-relaxed text-stone-700">
                  &quot;Profesionalidad y un trato inmejorable. Un espacio donde se respira calma y confianza. Totalmente recomendado.&quot;
                  <span className="block mt-2 font-medium text-xs text-stone-900">— Ane G.</span>
                </p>
              </div>
            </div>
          </div>
          
        </div>
      </section>

      {/* BOTTOM SERVICE BAR (From Design) */}
      <div className="bg-white border-b border-stone-200">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-8 lg:py-0 lg:h-[140px] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
          <div className="flex flex-col gap-1 pr-12 lg:border-r border-stone-200 lg:h-full lg:justify-center">
            <span className="text-[11px] uppercase tracking-widest text-stone-400 font-bold">Tratamientos</span>
            <span className="text-xl font-medium font-sans">Nuestra especialidad</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 flex-1 lg:px-12">
            {[
              { num: '01', title: 'Terapia Manual', desc: 'Enfoque manual para el alivio eficaz del dolor.' },
              { num: '02', title: 'Readaptación', desc: 'Vuelve a tu actividad con seguridad y fuerza.' },
              { num: '03', title: 'Movilidad', desc: 'Mejora tus rangos y optimiza tu bienestar.' }
            ].map((service) => (
              <div key={service.num} className="flex flex-col gap-2 w-full sm:w-[160px]">
                <span className="text-brand-500 font-mono text-xs">{service.num}.</span>
                <span className="text-sm font-semibold uppercase tracking-wider">{service.title}</span>
                <p className="text-[11px] text-stone-500 leading-tight">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 lg:border-l border-stone-200 lg:pl-12 lg:h-full lg:py-8 w-full lg:w-auto pt-8 border-t lg:border-t-0">
             <div className="flex -space-x-3">
               <div className="w-10 h-10 rounded-full bg-stone-200 border-2 border-white flex items-center justify-center text-[10px] font-bold uppercase text-stone-900">IZ</div>
               <div className="w-10 h-10 rounded-full bg-brand-500 border-2 border-white flex items-center justify-center text-[10px] font-bold text-white">+5</div>
             </div>
             <div className="flex flex-col leading-tight">
               <span className="text-xs font-bold font-sans">Reserva Online</span>
               <span className="text-[11px] text-brand-500">Disponibilidad hoy</span>
             </div>
          </div>
        </div>
      </div>

      {/* Services Preview Section */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-stone-50">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8 text-center md:text-left">
            <div className="max-w-2xl mx-auto md:mx-0">
              <h2 className="text-sm font-medium text-brand-600 mb-3 tracking-wide">Nuestros Servicios</h2>
              <h3 className="text-3xl md:text-4xl font-medium text-stone-900 leading-[1.2] tracking-tight">Enfoque clínico integral para tu bienestar y movimiento.</h3>
            </div>
            <Link href="/services" className="hidden md:flex items-center gap-2 text-sm font-medium text-brand-600 hover:text-brand-700 transition-colors">
              Ver todos los servicios
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: 'Terapia Manual', desc: 'Tratamiento especializado para aliviar el dolor y restaurar la movilidad.' },
              { title: 'Rehabilitación Integral', desc: 'Acompañamiento profesional en tu proceso de recuperación de lesiones.' },
              { title: 'Readaptación', desc: 'Vuelta a la actividad física con seguridad, fuerza y confianza.' }
            ].map((service, idx) => (
              <Link href={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`} key={idx} className="block bg-white rounded-3xl p-10 lg:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300">
                <div className="w-12 h-12 bg-brand-50 text-brand-600 flex items-center justify-center rounded-2xl mb-8 font-medium">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-medium text-stone-900 mb-3">{service.title}</h4>
                <p className="text-stone-600 leading-relaxed text-sm mb-8 font-light">{service.desc}</p>
                <div className="text-brand-600 text-sm font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Saber más <ArrowRight size={14} />
                </div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full text-sm font-medium text-stone-900 shadow-sm border border-stone-200 transition-colors">
              Ver todos los servicios
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Journey Section */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mb-16 lg:mb-20 justify-between items-center text-center lg:text-left">
            <div className="lg:w-1/2 max-w-xl mx-auto lg:mx-0">
              <h2 className="text-sm font-medium text-brand-600 mb-3 tracking-wide">Tu Camino</h2>
              <h3 className="text-3xl md:text-4xl font-medium text-stone-900 leading-[1.2] tracking-tight">El viaje de tu recuperación</h3>
            </div>
            <div className="lg:w-1/2 max-w-xl mx-auto lg:mx-0">
              <p className="text-lg text-stone-600 leading-relaxed font-light">
                Diseñamos un plan claro y estructurado. Desde tu primera visita hasta el momento en que vuelves a moverte sin limitaciones con la confianza de estar en buenas manos.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              {
                title: 'Primera Visita',
                desc: 'Comenzamos con una charla para entender tus síntomas, tu historial y qué objetivos deseas alcanzar con nosotros.',
                icon: <Calendar strokeWidth={1.5} size={28} className="text-brand-600" />
              },
              {
                title: 'Evaluación',
                desc: 'Examen exhaustivo de tu movilidad, biomecánica y zonas de dolor para identificar la raíz del problema.',
                icon: <ClipboardList strokeWidth={1.5} size={28} className="text-brand-600" />
              },
              {
                title: 'Tratamiento',
                desc: 'Aplicación de terapia manual y técnicas especializadas para reducir síntomas y restaurar los tejidos.',
                icon: <HandHeart strokeWidth={1.5} size={28} className="text-brand-600" />
              },
              {
                title: 'Readaptación',
                desc: 'Educación del movimiento y ejercicio progresivo para devolver la máxima capacidad a tu cuerpo.',
                icon: <Footprints strokeWidth={1.5} size={28} className="text-brand-600" />
              }
            ].map((step, idx) => (
              <div key={idx} className="p-8 lg:p-10 rounded-3xl bg-stone-50/80 border border-stone-100 group hover:shadow-lg hover:bg-white hover:-translate-y-1 transition-all duration-300">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-[0_2px_10px_rgb(0,0,0,0.04)] mb-8 border border-stone-100">
                  {step.icon}
                </div>
                <h4 className="text-lg font-medium text-stone-900 mb-3">{step.title}</h4>
                <p className="text-stone-600 text-sm leading-relaxed font-light">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Split Movement & Recovery */}
      <section className="py-20 md:py-32 px-6 lg:px-12 bg-stone-50 border-t border-stone-100">
        <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-3xl shadow-2xl shadow-stone-200/50 order-2 lg:order-1">
            <Image
              src="/resonancia.jpg"
              alt="Paciente en proceso de fisioterapia y recuperación"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="max-w-xl mx-auto lg:mx-0 order-1 lg:order-2">
            <h2 className="text-sm font-medium text-brand-600 mb-4 tracking-wide">Nuestro Enfoque</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-stone-900 mb-8 leading-[1.2] tracking-tight">Recupera tu movilidad,<br/><span className="text-brand-600 font-normal">recupera tu vida.</span></h3>
            
            <div className="space-y-8 mb-12">
              {[
                { title: 'Evaluación Personalizada', text: 'Estudiamos tu caso en profundidad para entender el origen del problema, no solo evaluar el síntoma aislado.' },
                { title: 'Tratamiento Activo', text: 'Combinamos la mejor terapia manual con ejercicio adaptado para asegurar resultados duraderos y prevenir dolor futuro.' }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center flex-shrink-0 mt-1">
                    <ArrowRight size={14} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-stone-900 mb-2">{item.title}</h4>
                    <p className="text-stone-600 text-sm leading-relaxed font-light">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <Link 
              href="/about" 
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-stone-900 rounded-full font-medium hover:bg-stone-100 shadow-sm border border-stone-100 transition-colors"
            >
              Conoce la clínica
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-50/30 rounded-[3rem] mx-4 lg:mx-8 my-4 lg:my-8"></div>
        <div className="max-w-[800px] mx-auto text-center relative z-10 py-12 md:py-20 px-6">
          <h2 className="text-sm font-medium text-brand-600 mb-6 tracking-wide">Nuestra Filosofía</h2>
          <p className="text-3xl md:text-4xl lg:text-5xl text-stone-900 leading-[1.2] mb-10 font-medium tracking-tight">
            &quot;Zaren bezala mugitu&quot;
          </p>
          <p className="text-stone-600 text-lg md:text-xl leading-relaxed font-light max-w-2xl mx-auto">
            Creemos en un movimiento libre de dolor. Abordamos cada lesión desde la raíz, escuchando tu cuerpo y diseñando una recuperación adaptada a tus objetivos y estilo de vida.
          </p>
        </div>
      </section>

      {/* Reviews & Trust */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-stone-900 text-stone-100 rounded-[3rem] mx-4 lg:mx-8 my-4 lg:my-8 relative overflow-hidden">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-stone-700 to-transparent"></div>
        <div className="max-w-[1000px] mx-auto flex flex-col items-center relative z-10">
          <div className="text-sm font-medium text-stone-400 mb-6 tracking-wide">Testimonios</div>
          <div className="flex justify-center items-center gap-2 mb-8 text-brand-400">
            {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
          </div>
          <h2 className="text-2xl md:text-4xl font-medium mb-10 leading-[1.4] text-center text-white max-w-4xl">
            &quot;Excelente profesional. Se nota que sabe de lo que habla y tiene un trato inmejorable. He notado muchísima mejora en mi recuperación.&quot;
          </h2>
          <div className="flex items-center justify-center gap-4 pt-4 px-12">
            <div className="text-center">
              <p className="font-medium text-stone-300 text-base">Ane G.</p>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-stone-800/50 w-full flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-white text-stone-900 flex items-center justify-center text-sm font-bold">G</span>
              <p className="text-sm text-stone-400">
                 Google Rating <strong className="text-white font-medium ml-1">5.0 / 5</strong>
              </p>
            </div>
            <Link href="/reviews" className="inline-flex items-center gap-2 px-6 py-3 bg-stone-800 hover:bg-stone-700 rounded-full text-white text-sm font-medium transition-colors">
              Leer más opiniones <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 md:py-32 px-6 lg:px-12 bg-white text-center">
        <div className="max-w-[800px] mx-auto bg-stone-50 rounded-[2.5rem] p-12 md:p-20 border border-stone-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <h2 className="text-sm font-medium text-brand-600 mb-6 tracking-wide">Tu recuperación</h2>
          <h3 className="text-3xl md:text-5xl font-medium mb-6 leading-[1.2] text-stone-900 tracking-tight">Empieza hoy tu camino <br/><span className="text-brand-600 font-normal">hacia el bienestar.</span></h3>
          <p className="text-stone-600 text-lg mb-10 font-light mx-auto max-w-xl">Agenda tu primera sesión en nuestra clínica de Donostia y descubre cómo podemos ayudarte con un trato honesto y profesional.</p>
          <div className="flex justify-center">
             <Link 
              href="/contact" 
              className="bg-stone-900 text-white px-8 py-4 rounded-full font-medium hover:bg-stone-800 transition-all duration-300 shadow-xl flex items-center gap-3"
            >
              Pedir cita ahora <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
