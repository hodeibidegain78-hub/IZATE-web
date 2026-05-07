import Image from 'next/image';
import Link from 'next/link';

export default function BlogPage() {
  const posts = [
    {
      title: "La importancia de la movilidad en el día a día",
      category: "Movilidad",
      date: "12 Octubre, 2023",
      image: "/resonancia.jpg",
      slug: "importancia-movilidad"
    },
    {
      title: "Mitos sobre la postura que deberías olvidar",
      category: "Postura",
      date: "28 Septiembre, 2023",
      image: "/resonancia.jpg",
      slug: "mitos-postura"
    },
    {
      title: "Cómo prevenir lesiones en corredores amateurs",
      category: "Prevención",
      date: "15 Septiembre, 2023",
      image: "/resonancia.jpg",
      slug: "prevencion-lesiones-corredores"
    },
    {
      title: "Entendiendo el dolor: Por qué ocurre y cómo abordarlo",
      category: "Educación",
      date: "02 Septiembre, 2023",
      image: "/resonancia.jpg",
      slug: "entendiendo-dolor"
    }
  ];

  return (
    <div className="bg-stone-50 pt-32 pb-24 min-h-screen border-b border-stone-200">
      <section className="px-6 lg:px-12 max-w-[1400px] mx-auto mt-12 mb-32">
        <div className="mb-20 max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.2em] font-semibold text-brand-500 mb-6 block">Nuestro Blog</span>
          <h1 className="text-5xl md:text-[64px] font-light text-stone-900 mb-8 leading-[1.05] tracking-tight">Recursos y <span className="font-serif italic text-brand-600">Artículos</span></h1>
          <p className="text-lg text-stone-600 leading-relaxed font-light">
            Información clínica, consejos y reflexiones sobre movimiento, recuperación y salud general para ayudarte a entender mejor tu cuerpo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16 lg:gap-y-24 border-t border-stone-200 pt-16">
          {posts.map((post, idx) => (
            <article key={idx} className="group cursor-pointer">
              <div className="relative aspect-[16/10] overflow-hidden mb-8 border border-stone-200">
                 <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] uppercase tracking-widest text-brand-500 font-bold">{post.category}</span>
                <span className="text-[10px] uppercase tracking-widest text-stone-400 font-bold">{post.date}</span>
              </div>
              <h2 className="text-3xl font-light text-stone-900 group-hover:text-brand-500 transition-colors mb-6 tracking-tight">
                {post.title}
              </h2>
              <div className="text-[11px] uppercase tracking-[0.15em] font-bold text-stone-900 pb-1 border-b border-stone-900 inline-block group-hover:text-brand-500 group-hover:border-brand-500 transition-colors">
                Leer artículo
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
