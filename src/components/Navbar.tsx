'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const ES_SITE_BASE = (
  process.env.NEXT_PUBLIC_SITE_URL_ES || 'https://www.salvadoribiza.es'
).replace(/\/+$/, '');

/** Misma ruta que la página EN actual, en el dominio español */
function spanishAlternateHref(pathname: string): string {
  if (!pathname || pathname === '/') return `${ES_SITE_BASE}/`;
  return `${ES_SITE_BASE}${pathname}`;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/boat-trips', label: 'BOAT TRIPS' },
    { href: '/private-boat-trips', label: 'PRIVATE TRIPS' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/faq', label: 'FAQ' },
  ];

  const navClass = `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/90 backdrop-blur-md shadow-lg py-2`;
  const linkColor = 'text-gray-700';
  const activeBgColor = 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20';
  const activeTextColor = 'text-blue-600 font-semibold';
  const hoverBgColor = 'hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10';
  const hoverTextColor = 'hover:text-blue-600';
  const ctaClass = `py-2.5 px-6 rounded-full text-sm font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`;
  const navHeight = 'h-20 md:h-24';
  const logoHeight = 'h-16 md:h-20';

  const langSwitcher = (
    <div className="flex items-center gap-2 border border-gray-200 rounded-full px-2 py-1 bg-white/80">
      <span
        className="text-sm px-2 py-1 rounded-full bg-gradient-to-r from-blue-50 to-cyan-50 font-medium text-gray-900"
        title="You are on the English site"
      >
        <span aria-hidden>🇬🇧</span> EN
      </span>
      <a
        href={spanishAlternateHref(pathname)}
        className="text-sm px-2 py-1 rounded-full hover:bg-gray-50 text-gray-700 font-medium transition-colors"
        title={`Spanish version of this page — ${new URL(spanishAlternateHref(pathname)).hostname}`}
        rel="alternate"
        hrefLang="es"
      >
        <span aria-hidden>🇪🇸</span> ES
      </a>
    </div>
  );

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`${navClass} ${navHeight}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${navHeight}`}>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <Link href="/">
              <Image
                src="/images/optimized/salvador-ibiza-boat-trips-logo.webp"
                alt="Salvador Ibiza Logo"
                width={200}
                height={90}
                className={`object-contain ${logoHeight} w-auto hover:scale-105 transition-transform duration-300`}
                priority
              />
            </Link>
          </motion.div>

          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-3">
            {links.map((link, i) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link href={link.href}>
                    <span
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${linkColor}
                        ${isActive ? `${activeBgColor} ${activeTextColor}` : `${hoverBgColor} ${hoverTextColor}`}
                      `}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
            <div className="ml-2 flex items-center gap-2">{langSwitcher}</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="ml-2"
            >
              <Link href="/book-now">
                <span className={ctaClass}>BOOK NOW</span>
              </Link>
            </motion.div>
          </div>

          <div className="flex md:hidden items-center space-x-3">
            <div className="scale-90 origin-right">{langSwitcher}</div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-300 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={isOpen ? 'open' : 'closed'}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 },
                }}
                transition={{ duration: 0.3 }}
              >
                <svg className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                  )}
                </svg>
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-4 space-y-2">
              <p className="px-4 text-xs text-gray-600 pb-1">
                Prefer Spanish? Open the same page on{' '}
                <a href={spanishAlternateHref(pathname)} className="text-blue-600 font-medium underline">
                  {new URL(`${ES_SITE_BASE}/`).hostname}
                </a>
              </p>
              {links.map((link) => {
                const isActive =
                  pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
                return (
                  <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className={`block px-4 py-2.5 rounded-xl text-base font-medium
                        ${isActive ? `${activeBgColor} ${activeTextColor}` : `${linkColor} ${hoverBgColor} ${hoverTextColor}`}
                      `}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                );
              })}
              <div className="mt-6 px-4">
                <Link href="/book-now" onClick={() => setIsOpen(false)}>
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    className="block text-center py-3 px-4 rounded-xl font-medium bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    BOOK NOW
                  </motion.span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
