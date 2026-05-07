import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-stone-50 pt-32 pb-24">
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mt-12">
        {/* Intro */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 mb-32 relative items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-sm font-medium text-brand-600 mb-4 block tracking-wide">Nuestra Historia</span>
            <h1 className="text-4xl md:text-5xl leading-[1.1] font-medium text-stone-900 mb-8 tracking-tight">
              Nuestra filosofía de <span className="text-brand-600 font-normal">trabajo</span>
            </h1>
            <p className="text-xl md:text-2xl text-stone-900 leading-relaxed mb-8 font-medium">
              &quot;Zaren bezala mugitu&quot; no es solo un lema, es nuestra manera de entender el cuerpo humano y la fisioterapia.
            </p>
            <p className="text-stone-600 leading-relaxed mb-6 font-light text-lg max-w-lg">
              IZATE Fisioterapia Mugimendua nace en Donostia con el objetivo de ofrecer un espacio de calma, profesionalidad y confianza. Creemos que la recuperación no es un proceso pasivo, sino un camino que recorremos juntos.
            </p>
            <p className="text-stone-600 leading-relaxed font-light text-lg max-w-lg">
              Trabajamos desde la evidencia científica, con una escucha activa y un trato cercano, asegurándonos de que cada paciente reciba el tiempo y la atención que merece su caso.
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-square overflow-hidden rounded-[2.5rem] shadow-2xl shadow-stone-200/50">
               <Image
                src="/trabajador.jpg"
                alt="Instalaciones de IZATE Fisioterapia en Donostia"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* Details / Values */}
        <div className="w-full py-16 lg:py-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-sm font-medium text-brand-600 mb-4 tracking-wide">Por qué nosotros</h2>
            <h3 className="text-3xl md:text-4xl font-medium text-stone-900 tracking-tight">Confianza y Calidad</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 flex items-center justify-center rounded-2xl mb-8 font-medium">01</div>
              <h3 className="text-xl font-medium text-stone-900 mb-4">Trato Personalizado</h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                Sesiones individuales donde tú eres el centro. Sin prisas y con dedicación exclusiva.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 flex items-center justify-center rounded-2xl mb-8 font-medium">02</div>
              <h3 className="text-xl font-medium text-stone-900 mb-4">Entorno de Calma</h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                Instalaciones diseñadas para transmitir paz y confort, alejadas del concepto de clínica fría.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 hover:-translate-y-1 transition-all duration-300">
              <div className="w-12 h-12 bg-brand-50 text-brand-600 flex items-center justify-center rounded-2xl mb-8 font-medium">03</div>
              <h3 className="text-xl font-medium text-stone-900 mb-4">Movimiento Activo</h3>
              <p className="text-stone-600 text-sm leading-relaxed font-light">
                No solo tratamos el dolor en la camilla, te enseñamos a moverte mejor para prevenir recaídas.
              </p>
            </div>
          </div>
        </div>

      </section>
    </div>
  );
}
