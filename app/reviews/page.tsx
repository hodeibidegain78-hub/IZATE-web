"use client";

import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export default function ReviewsPage() {
  const reviews = [
    {
      name: "Mikel A.",
      text: "Trato excepcional y muy profesional. Me explicaron el porqué de mi dolor y empezamos a trabajar con terapia manual y ejercicios. A día de hoy estoy recuperado al 100%.",
      date: "Hace 2 meses"
    },
    {
      name: "Laura S.",
      text: "La clínica transmite muchísima paz y el tratamiento es de 10. Se toman el tiempo de escucharte y evaluar bien. Muy recomendable si buscas readaptación.",
      date: "Hace 3 meses"
    },
    {
      name: "Jon E.",
      text: "Gran profesional y mejor persona. Después de una cirugía de rodilla, me acompañó en todo el proceso de rehabilitación con absoluta confianza.",
      date: "Hace 5 meses"
    },
    {
      name: "Maite B.",
      text: "Lo que más valoro es que te dan herramientas y ejercicios para no depender de ellos. Una filosofía de trabajo excelente y trato humano.",
      date: "Hace 6 meses"
    }
  ];

  return (
    <div className="bg-stone-50 pt-32 pb-24 min-h-screen">
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto text-center mt-12 mb-24">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium text-stone-900 mb-8 leading-[1.1] tracking-tight">Lo que dicen <span className="text-brand-600 font-normal">nuestros pacientes</span></h1>
        <p className="text-lg text-stone-600 leading-relaxed font-light max-w-2xl mx-auto">
          Nuestra mejor carta de presentación es la confianza y los resultados obtenidos por quienes nos visitan. Valoración de <strong className="font-medium text-stone-900">5.0 en Google.</strong>
        </p>
      </section>

      {/* Featured Review */}
      <section className="px-6 lg:px-12 max-w-[1200px] mx-auto mb-24 md:mb-32">
        <div className="bg-[#1A1A1A] text-stone-100 p-12 md:p-24 text-center rounded-[2.5rem] shadow-2xl shadow-stone-200/50">
          <div className="text-sm tracking-widest text-brand-400 mb-10 font-medium">Reseña Destacada</div>
          <div className="flex justify-center items-center gap-1.5 mb-8 text-brand-400">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" strokeWidth={1} />)}
          </div>
          <p className="text-2xl md:text-3xl lg:text-4xl font-medium mb-12 leading-tight max-w-5xl mx-auto text-center text-white">
            &quot;Excelente profesional. Se nota que sabe de lo que habla y tiene un trato inmejorable. He notado muchísima mejora. Sin duda, mi clínica de confianza en Donostia.&quot;
          </p>
          <div className="flex items-center justify-center gap-4 pt-10 px-12 border-t border-stone-800">
            <div className="text-center">
              <p className="font-medium text-stone-300 text-lg tracking-wide">— Ane G. </p>
            </div>
          </div>
        </div>
      </section>

      {/* Other Reviews Grid */}
      <section className="px-6 lg:px-12 max-w-[1200px] mx-auto pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {reviews.map((review, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: 'easeOut' }}
              className="bg-white rounded-3xl hover:-translate-y-1 p-10 lg:p-12 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-stone-100 flex flex-col"
            >
              <div className="flex gap-1 text-brand-500 mb-8">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" strokeWidth={1} />)}
              </div>
              <p className="text-stone-600 text-lg leading-relaxed mb-10 font-light italic">
                &quot;{review.text}&quot;
              </p>
              <div className="flex justify-between items-center mt-auto border-t border-stone-100 pt-6">
                <p className="font-medium text-stone-900 text-base">{review.name}</p>
                <span className="text-sm text-stone-500">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
}
