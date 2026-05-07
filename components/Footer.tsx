import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-stone-50 text-stone-900 pt-24 pb-12 px-6 lg:px-12 mt-auto border-t border-stone-200">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 pb-20 border-b border-stone-200">
        
        <div className="col-span-1 md:col-span-1 lg:col-span-2">
          <Link href="/" className="flex items-center gap-3 mb-8">
            <Image src="/logo.jpg" alt="IZATE Logo" width={48} height={48} className="rounded-full object-cover border border-stone-200" />
            <div className="flex flex-col">
              <span className="font-sans text-2xl tracking-tighter text-stone-900 font-bold">
                IZATE
              </span>
              <span className="text-[10px] tracking-[0.2em] text-stone-500 uppercase mt-1 font-light">
                Fisioterapia
              </span>
            </div>
          </Link>
          <p className="text-stone-600 text-sm max-w-sm leading-relaxed mb-8 font-light">
            Zaren bezala mugitu | Muévete como eres.<br />
            Premium physiotherapy and movement clinic in Donostia / San Sebastián.
          </p>
          <div className="flex gap-4">
            <a href="https://instagram.com/izatefisioterapia" target="_blank" rel="noopener noreferrer" className="text-[11px] uppercase tracking-widest text-stone-900 font-semibold hover:text-brand-500 transition-colors pb-1 border-b border-stone-900 hover:border-brand-500">
              Instagram
            </a>
          </div>
        </div>

        <div className="col-span-1">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-8 font-semibold">Navegación</h4>
          <ul className="space-y-4">
            <li><Link href="/" className="text-stone-600 hover:text-brand-500 transition-colors text-sm">Inicio</Link></li>
            <li><Link href="/services" className="text-stone-600 hover:text-brand-500 transition-colors text-sm">Servicios</Link></li>
            <li><Link href="/about" className="text-stone-600 hover:text-brand-500 transition-colors text-sm">Nuestra Clínica</Link></li>
            <li><Link href="/reviews" className="text-stone-600 hover:text-brand-500 transition-colors text-sm">Opiniones</Link></li>
            <li><Link href="/faq" className="text-stone-600 hover:text-brand-500 transition-colors text-sm">Preguntas Frecuentes</Link></li>
          </ul>
        </div>

        <div className="col-span-1">
          <h4 className="text-[10px] uppercase tracking-[0.2em] text-stone-400 mb-8 font-semibold">Contacto</h4>
          <ul className="space-y-4 text-sm text-stone-600">
            <li className="leading-relaxed">
              Mad. Jauregiberri Ibilbidea, 4<br />
              BJ 1F, 20014<br />
              Donostia / San Sebastián<br />
              Gipuzkoa, Spain
            </li>
            <li className="pt-2">
              <a href="tel:+34613920174" className="text-lg font-medium text-stone-900 hover:text-brand-500 transition-colors">613 92 01 74</a>
            </li>
            <li className="pt-4">
              <Link href="/contact" className="text-[11px] font-semibold uppercase tracking-widest text-stone-900 hover:text-brand-500 transition-colors border-b border-stone-900 hover:border-brand-500 pb-1">
                Cómo llegar
              </Link>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-[1400px] mx-auto mt-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[11px] text-stone-500 uppercase tracking-wider">
          © {new Date().getFullYear()} IZATE Fisioterapia Mugimendua.
        </p>
        <p className="text-[11px] text-stone-400 uppercase tracking-wider">
          Aviso Legal | Política de Privacidad
        </p>
      </div>
    </footer>
  );
}
