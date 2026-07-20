'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { getNavbarCopy } from '@/lib/seo-i18n';
import { getClientSiteLocale, type SiteLocale } from '@/lib/site-locale';

const EN_SITE_BASE = (
  process.env.NEXT_PUBLIC_SITE_URL_EN || 'https://www.salvadoribiza.com'
).replace(/\/+$/, '');

const ES_SITE_BASE = (
  process.env.NEXT_PUBLIC_SITE_URL_ES || 'https://www.salvadoribiza.es'
).replace(/\/+$/, '');

const NL_SITE_BASE = (
  process.env.NEXT_PUBLIC_SITE_URL_NL || 'https://www.salvadoribiza.nl'
).replace(/\/+$/, '');

const FR_SITE_BASE = (
  process.env.NEXT_PUBLIC_SITE_URL_FR || 'https://www.salvadoribiza.fr'
).replace(/\/+$/, '');

const LOCALE_BASES: Record<SiteLocale, string> = {
  en: EN_SITE_BASE,
  es: ES_SITE_BASE,
  nl: NL_SITE_BASE,
  fr: FR_SITE_BASE,
};

const LOCALE_FLAGS: Record<SiteLocale, string> = {
  en: '🇬🇧',
  es: '🇪🇸',
  nl: '🇳🇱',
  fr: '🇫🇷',
};

const LOCALE_ORDER: SiteLocale[] = ['en', 'nl', 'es', 'fr'];

function absoluteOnBase(base: string, pathname: string): string {
  if (!pathname || pathname === '/') return `${base}`;
  return `${base}${pathname}`;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const locale = getClientSiteLocale();
  const copy = getNavbarCopy(locale);

  const links = [
    { href: '/', label: copy.home },
    { href: '/boat-trips', label: copy.boatTrips },
    { href: '/private-boat-trips', label: copy.privateTrips },
    { href: '/gallery', label: copy.gallery },
    { href: '/faq', label: copy.faq },
  ];

  const navClass = `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/90 backdrop-blur-md shadow-lg py-2`;
  const linkColor = 'text-gray-700';
  const activeBgColor = 'bg-gradient-to-r from-blue-500/20 to-cyan-500/20';
  const activeTextColor = 'text-blue-600 font-semibold';
  const hoverBgColor = 'hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10';
  const hoverTextColor = 'hover:text-blue-600';
  const ctaClass = `whitespace-nowrap shrink-0 py-2.5 px-4 xl:px-6 rounded-full text-sm font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`;
  const navHeight = 'h-20 md:h-24';
  const logoHeight = 'h-16 md:h-20';

  const langSwitcherClass = (wrap: boolean) =>
    `flex items-center justify-end gap-1 border border-gray-200 rounded-full px-2 py-1 bg-white/80 ${
      wrap ? 'flex-wrap max-w-[220px] sm:max-w-none' : 'flex-nowrap shrink-0'
    }`;

  const langSwitcher = (wrap = false) => (
    <div className={langSwitcherClass(wrap)}>
      {LOCALE_ORDER.map((code) => {
        const label = code.toUpperCase();
        const itemClass =
          'text-xs sm:text-sm px-2 py-1 rounded-full font-medium transition-colors';
        const hostname = new URL(`${LOCALE_BASES[code]}/`).hostname;

        if (code === locale) {
          return (
            <span
              key={code}
              className={`${itemClass} bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-900`}
              title={copy.langSiteTitle[code]}
            >
              <span aria-hidden>{LOCALE_FLAGS[code]}</span> {label}
            </span>
          );
        }

        return (
          <a
            key={code}
            href={absoluteOnBase(LOCALE_BASES[code], pathname)}
            className={`${itemClass} hover:bg-gray-50 text-gray-700`}
            title={`${copy.langSiteTitle[code]} — ${hostname}`}
            rel="alternate"
            hrefLang={code}
          >
            <span aria-hidden>{LOCALE_FLAGS[code]}</span> {label}
          </a>
        );
      })}
    </div>
  );

  const alternateLocales = LOCALE_ORDER.filter((code) => code !== locale);

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

          <div className="hidden xl:flex xl:items-center xl:space-x-2 flex-nowrap shrink-0">
            {links.map((link, i) => {
              const isActive =
                pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                  className="shrink-0"
                >
                  <Link href={link.href}>
                    <span
                      className={`whitespace-nowrap px-3 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${linkColor}
                        ${isActive ? `${activeBgColor} ${activeTextColor}` : `${hoverBgColor} ${hoverTextColor}`}
                      `}
                    >
                      {link.label}
                    </span>
                  </Link>
                </motion.div>
              );
            })}
            <div className="ml-2 flex items-center gap-2 shrink-0">{langSwitcher(false)}</div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="ml-2 shrink-0"
            >
              <Link href="/book-now">
                <span className={ctaClass}>{copy.bookNow}</span>
              </Link>
            </motion.div>
          </div>

          <div className="flex xl:hidden items-center space-x-3">
            <div className="scale-90 origin-right">{langSwitcher(true)}</div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">{copy.openMenu}</span>
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
            className="xl:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-4 space-y-2">
              <p className="px-4 text-xs text-gray-600 pb-1">
                {copy.mobileLangPrefix}{' '}
                {alternateLocales.map((code, index) => (
                  <span key={code}>
                    {index > 0 && (
                      <>
                        {index < alternateLocales.length - 1 ? ', ' : ` ${copy.conjunction} `}
                      </>
                    )}
                    <a
                      href={absoluteOnBase(LOCALE_BASES[code], pathname)}
                      className="text-blue-600 font-medium underline"
                      hrefLang={code}
                      rel="alternate"
                    >
                      {copy.langNames[code]}
                    </a>
                  </span>
                ))}
                .
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
                    {copy.bookNow}
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
