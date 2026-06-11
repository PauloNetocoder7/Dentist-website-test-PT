import { Phone, Menu, X, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'INÍCIO', href: '#' },
    { name: 'SERVIÇOS', href: '#services' },
    { name: 'SOBRE NÓS', href: '#about' },
    { name: 'CONTACTOS', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white shadow-sm border-b border-slate-200">
      {/* Top Branding Bar */}
      <div className="bg-sky-900 text-white py-2 px-8 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-xs font-medium">
          <div className="flex gap-6">
            <span className="flex items-center gap-1.5 font-medium">📍 Rua da Saúde 123, Cidade do Sorriso</span>
            <a href="tel:5551234567" className="flex items-center gap-1.5 font-medium hover:text-sky-200 transition-colors">
              📞 (555) 123-4567
            </a>
          </div>
          <div className="flex gap-6 items-center">
            <span>Seg - Qui: 8:00 - 17:00</span>
            <span className="opacity-70 text-[10px] uppercase font-bold tracking-wider">Serviço de Urgência Disponível</span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-sky-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-sky-100">
              <svg 
                viewBox="0 0 24 24" 
                fill="currentColor" 
                className="w-6 h-6"
              >
                <path d="M18.601 8.253c0-2.316-1.579-3.95-4.14-4.225-1.536-.165-2.222.42-2.46.42-.24 0-.925-.585-2.46-.42-2.56.275-4.141 1.909-4.141 4.225 0 2.213.415 3.01.815 3.993.4 1 2.28 5.706 2.28 6.703 0 .762.341 1.051 1.052 1.051.71 0 1.052-.289 1.052-1.051 0-.997 1.402-1.402 1.402-1.402s1.402.405 1.402 1.402c0 .762.341 1.051 1.052 1.051.711 0 1.052-.289 1.052-1.051 0-.997 1.881-5.703 2.281-6.703.4-.983.815-1.78.815-3.993z" />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight text-sky-900 leading-none uppercase">DENTISTA</h1>
              <p className="text-[10px] text-sky-600 font-bold uppercase tracking-[0.2em]">Clínica & Estética</p>
              <div className="flex gap-1.5 mt-1 items-center">
                <img src="https://flagcdn.com/w40/pt.png" alt="Portugal" className="h-3 w-5 object-cover rounded-[1px] shadow-xs border border-slate-200/50" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex gap-8 text-sm font-semibold text-slate-600 uppercase tracking-wide">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-sky-600 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="bg-sky-600 text-white px-5 py-2.5 rounded text-sm font-bold shadow-lg shadow-sky-200 hover:bg-sky-700 transition-all uppercase"
            >
              Marcar Consulta
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sky-900 p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block px-3 py-4 text-base font-medium text-gray-700 hover:text-sky-600 hover:bg-sky-50 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 px-3">
                <a
                  href="#contact"
                  className="block w-full text-center bg-sky-600 text-white px-6 py-3 rounded-xl text-base font-bold shadow-lg shadow-sky-200"
                  onClick={() => setIsOpen(false)}
                >
                  Marcar Consulta
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
