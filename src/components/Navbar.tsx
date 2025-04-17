'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'Home' },
    { href: '/boat-trips', label: 'Boat Trips' },
    { href: '/private-charter', label: 'Private Charter' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  // Efecto para detectar scroll y cambiar estilo del navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Clases condicionales para el navbar
  const navClass = `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white shadow-soft py-3`;

  // Clases para los links
  const linkColor = "text-gray-700";
  const activeBgColor = "bg-blue-100";
  const activeTextColor = "text-blue-600";
  const hoverBgColor = "hover:bg-blue-50";
  const hoverTextColor = "hover:text-blue-700";

  // Clases para el botón CTA
  const ctaClass = `py-2 px-4 rounded-full text-sm font-medium shadow-md bg-blue-600 text-white hover:bg-blue-700`;

  return (
    <nav className={navClass}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <Image
                src="/images/logo-salvador.png"
                alt="Salvador Ibiza Logo"
                width={180}
                height={60}
                className="object-contain h-12 md:h-16 w-auto"
                priority
              />
            </Link>
          </motion.div>

          {/* Links Desktop */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
            {links.map((link, i) => {
              const isActive = pathname === link.href;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`px-3 py-2 rounded-md text-sm font-medium transition duration-300 ${linkColor}
                        ${isActive
                          ? `${activeBgColor} ${activeTextColor}`
                          : `${hoverBgColor} ${hoverTextColor}`
                        }
                      `}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="ml-3"
            >
              <Link href="/contact">
                <span className={ctaClass}>
                  Book Now
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Botón Hamburguesa Móvil */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition duration-300 text-gray-600 hover:bg-gray-100`}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <svg 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú Móvil Desplegable con Animación */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                    <span
                      className={`block px-3 py-2 rounded-md text-base font-medium
                                ${isActive
                                  ? `${activeBgColor} ${activeTextColor}`
                                  : `${linkColor} ${hoverBgColor} ${hoverTextColor}`
                                }`}
                    >
                      {link.label}
                    </span>
                  </Link>
                );
              })}
              
              {/* CTA Button Mobile */}
              <div className="mt-4 px-3">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <span className="bg-blue-600 w-full block text-center py-3 px-4 rounded-md text-white font-medium hover:bg-blue-700">
                    Book Now
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar; 