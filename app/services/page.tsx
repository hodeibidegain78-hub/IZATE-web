import Image from 'next/image';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      id: 'general',
      title: 'Fisioterapia General',
      description: 'Tratamiento integral de lesiones osteoarticulares y musculares. Abordamos la raíz del problema mediante técnicas basadas en la evidencia científica.',
      includes: ['Valoración inicial exhaustiva', 'Razonamiento clínico', 'Diseño de tratamiento personalizado'],
      image: '/resonancia.jpg',
    },
    {
      id: 'terapia-manual',
      title: 'Terapia Manual',
      description: 'Conjunto de técnicas específicas aplicadas manualmente para tratar alteraciones neuromusculoesqueléticas, recuperar el movimiento y reducir el dolor.',
      includes: ['Movilizaciones articulares', 'Tratamiento del tejido blando', 'Neurodinámica'],
      image: '/resonancia.jpg'
    },
    {
      id: 'rehabilitacion',
      title: 'Rehabilitación Integral',
      description: 'Proceso de recuperación tras cirugías, traumatismos o inmovilizaciones prolongadas para restaurar la funcionalidad óptima.',
      includes: ['Recuperación post-operatoria', 'Planificación progresiva', 'Acompañamiento continuo'],
      image: '/resonancia.jpg'
    },
    {
      id: 'readaptacion',
      title: 'Readaptación & Movilidad',
      description: 'Fase final de la recuperación orientada a devolver al cuerpo su capacidad de someterse a esfuerzos deportivos o actividades del día a día.',
      includes: ['Ejercicio terapéutico', 'Control motor', 'Prevención de recaídas'],
      image: '/resonancia.jpg'
    }
  ];

  return (
    <div className="bg-stone-50 pt-32 pb-24">
      {/* Header */}
      <section className="px-6 lg:px-12 mb-20 lg:mb-24 max-w-[1400px] mx-auto text-center mt-12">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 mb-6 leading-[1.1] tracking-tight">Servicios y <span className="text-brand-600 font-normal">Tratamientos</span></h1>
        <p className="text-lg text-stone-600 leading-relaxed font-light max-w-2xl mx-auto">
          Enfoques terapéuticos especializados para tratar el dolor, restaurar el movimiento y mejorar tu calidad de vida en Donostia.
        </p>
      </section>

      {/* Services List */}
      <section className="px-6 lg:px-12 max-w-[1000px] mx-auto">
        <div className="flex flex-col gap-12 lg:gap-16">
        {services.map((service, index) => (
          <div key={service.id} id={service.id} className="flex flex-col lg:flex-row items-center border border-stone-100 bg-white rounded-3xl p-8 lg:p-12 gap-10 lg:gap-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] transition-all duration-300">
            
            <div className={`w-full lg:w-1/2 flex flex-col ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="w-12 h-12 bg-brand-50 text-brand-600 flex items-center justify-center rounded-2xl mb-6 font-medium">0{index + 1}</div>
              <h2 className="text-2xl md:text-3xl font-medium text-stone-900 mb-4 tracking-tight group-hover:text-brand-600 transition-colors">{service.title}</h2>
              <p className="text-stone-600 leading-relaxed mb-8 font-light">
                {service.description}
              </p>
              
              <ul className="space-y-4 mb-10">
                {service.includes.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-stone-600 text-sm font-light">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-500 mt-1.5"></span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center gap-2 bg-stone-100 text-stone-900 px-6 py-3 rounded-full font-medium hover:bg-stone-200 transition-colors text-sm"
                >
                  Pedir información <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </Link>
              </div>
            </div>

            <div className={`w-full lg:w-1/2 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div className="relative aspect-square lg:aspect-[4/3] overflow-hidden rounded-2xl bg-stone-100">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
          </div>
        ))}
        </div>
      </section>

    </div>
  );
}
