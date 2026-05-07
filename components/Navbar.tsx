"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  const links = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Clínica', path: '/about' },
    { name: 'Opiniones', path: '/reviews' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contacto', path: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled ? 'bg-stone-50/90 backdrop-blur-md border-stone-200' : 'bg-stone-50 border-transparent'
      }`}
    >
      {/* PRE-HEADER / TRUST BAR */}
      <div className="hidden lg:flex justify-between items-center px-6 lg:px-12 py-3 bg-stone-100 border-b border-stone-200 text-[11px] uppercase tracking-[0.12em] font-medium text-stone-700 opacity-80">
        <span>Donostia / San Sebastián · Gipuzkoa</span>
        <div className="flex gap-6">
          <span>5.0 ★ Google Rating (28 Reseñas)</span>
          <span>613 92 01 74</span>
        </div>
      </div>

      <div className={`max-w-[1400px] mx-auto px-6 lg:px-12 flex flex-col lg:flex-row lg:items-center justify-between transition-all duration-500 ${scrolled ? 'py-4' : 'py-8'}`}>
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link href="/" className="flex items-center gap-3 leading-none" onClick={closeMenu}>
            <Image src="/logo.jpg" alt="IZATE Logo" width={40} height={40} className="rounded-full object-cover border border-stone-200" />
            <div className="flex flex-col">
              <span className="font-sans text-xl tracking-tight text-stone-900 font-bold">
                IZATE
              </span>
              <span className="text-[10px] tracking-[0.2em] text-stone-900 font-light mt-1 uppercase">
                Fisioterapia
              </span>
            </div>
          </Link>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden relative z-20 text-stone-900 p-2 -mr-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link 
              key={link.name} 
              href={link.path}
              className="text-[13px] font-medium tracking-wide text-stone-900 hover:text-brand-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="/contact"
            className="ml-6 bg-brand-600 text-white px-7 py-3 rounded-full text-sm font-medium hover:bg-brand-700 transition-colors shadow-sm hover:shadow-md"
          >
            Pedir Cita
          </Link>
        </nav>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="absolute top-0 left-0 w-full h-screen bg-stone-50 flex flex-col items-center justify-center gap-8 z-10"
            >
              {links.map((link) => (
                <Link
                  key={link.name}
                  href={link.path}
                  onClick={closeMenu}
                  className="font-heading text-3xl tracking-tight text-stone-900 hover:text-brand-600 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact"
                onClick={closeMenu}
                className="mt-8 bg-brand-600 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-brand-700 transition-colors"
              >
                Pedir Cita
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
