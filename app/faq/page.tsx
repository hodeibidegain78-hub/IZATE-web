"use client"
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const DefaultFAQ = ({ question, answer }: { question: string, answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-stone-200 py-8 last:border-0 cursor-pointer group" onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center gap-6">
        <h3 className="text-xl font-light text-stone-900 group-hover:text-brand-500 transition-colors pr-8 relative">{question}</h3>
        <div className="text-stone-400 flex-shrink-0 group-hover:text-brand-500 transition-colors">
          {isOpen ? <Minus size={20} strokeWidth={1.5} /> : <Plus size={20} strokeWidth={1.5} />}
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-stone-500 text-lg leading-relaxed pt-6 pb-2 font-light">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};


export default function FAQPage() {
  const faqs = [
    {
      q: "¿Cuánto duran las sesiones?",
      a: "Nuestras sesiones tienen una duración de aproximadamente 50-60 minutos. Este tiempo es necesario para realizar una correcta valoración, aplicar el tratamiento adecuado y enseñarte pautas o ejercicios."
    },
    {
      q: "¿Necesito pedir cita previa?",
      a: "Sí, es imprescindible solicitar cita previa para poder asegurar la disponibilidad y dedicar el tiempo exclusivo que requiere cada paciente."
    },
    {
      q: "¿Qué debo llevar a mi primera sesión?",
      a: "Recomendamos traer ropa cómoda que permita evaluar el movimiento y tratar la zona afectada. Si tienes informes médicos o pruebas de imagen recientes relacionadas con tu lesión, tráelas contigo."
    },
    {
      q: "¿La fisioterapia es personalizada?",
      a: "Por supuesto. Cada persona es diferente, por lo que el tratamiento siempre se adapta a tus necesidades específicas, tu estilo de vida y tus objetivos."
    },
    {
      q: "¿Cuántas sesiones necesitaré para recuperarme?",
      a: "El número de sesiones depende enteramente de la patología, del tiempo de evolución de la lesión y de la respuesta de tu cuerpo al tratamiento. Tras la primera valoración, elaboraremos una propuesta de tratamiento y te daremos una estimación realista."
    }
  ];

  return (
    <div className="bg-stone-50 pt-32 pb-24 min-h-[80vh] border-b border-stone-200">
      <section className="px-6 lg:px-12 max-w-[800px] mx-auto mt-12">
        <div className="text-left md:text-center mb-24">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-500 mb-6 block">Consulta</span>
          <h1 className="text-5xl md:text-[64px] font-light text-stone-900 mb-8 leading-[1.05] tracking-tight">Preguntas <span className="font-serif italic text-brand-600">Frecuentes</span></h1>
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            Resolvemos las dudas más habituales sobre nuestra forma de trabajar y las sesiones en la clínica.
          </p>
        </div>

        <div className="bg-white p-12 lg:p-16 border border-stone-200">
          {faqs.map((faq, idx) => (
             <DefaultFAQ key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </section>
    </div>
  );
}
