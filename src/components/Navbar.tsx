'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { toast } from 'sonner';

// Helper function to change locale in path
const changeLocale = (pathname: string, locale: string) => {
  const segments = pathname.split('/').filter(Boolean);
  // Check if the first segment is a locale
  if (/^[a-z]{2}$/.test(segments[0])) {
    segments[0] = locale; // Replace existing locale
  } else {
    segments.unshift(locale); // Add locale prefix
  }
  return `/${segments.join('/')}`;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const pathname = usePathname();

  // Determine current locale
  const currentLocale = pathname.split('/')[1] === 'es' || pathname.split('/')[1] === 'fr' || pathname.split('/')[1] === 'de' 
    ? pathname.split('/')[1] 
    : 'en';

  const locales = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'es', flag: '🇪🇸' },
    { code: 'fr', flag: '🇫🇷' },
    { code: 'de', flag: '🇩🇪' },
  ];

  const currentFlag = locales.find(l => l.code === currentLocale)?.flag || '🇬🇧';

  const links = [
    { href: '/', label: 'HOME' },
    { href: '/boat-trips', label: 'BOAT TRIPS' },
    { href: '/private-boat-trips', label: 'PRIVATE TRIPS' },
    { href: '/gallery', label: 'GALLERY' },
    { href: '/faq', label: 'FAQ' },
  ];

  // Updated styles with more modern look
  const navClass = `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white/90 backdrop-blur-md shadow-lg py-2`;
  const linkColor = "text-gray-700";
  const activeBgColor = "bg-gradient-to-r from-blue-500/20 to-cyan-500/20";
  const activeTextColor = "text-blue-600 font-semibold";
  const hoverBgColor = "hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-cyan-500/10";
  const hoverTextColor = "hover:text-blue-600";
  const ctaClass = `py-2.5 px-6 rounded-full text-sm font-semibold shadow-lg bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl`;
  const navHeight = "h-20 md:h-24";
  const logoHeight = "h-16 md:h-20";

  const handleLanguageClick = (e: React.MouseEvent, lang: string) => {
    e.preventDefault();
    toast.info(
      lang === 'es' 
        ? "Lo sentimos, estamos trabajando en la versión en español." 
        : "Sorry, we are working on other language versions.",
      {
        duration: 3000,
      }
    );
    
    // Redirect to English version after 3 seconds
    setTimeout(() => {
      window.location.href = '/';
    }, 3000);
  };

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav className={`${navClass} ${navHeight}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${navHeight}`}> 
          {/* Logo with enhanced animation */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <Link href={currentLocale === 'en' ? '/' : `/${currentLocale}`}> 
              <Image
                src="/images/logo-salvador.png"
                alt="Salvador Ibiza Logo"
                width={200}
                height={90}
                className={`object-contain ${logoHeight} w-auto hover:scale-105 transition-transform duration-300`}
                priority
              />
            </Link>
          </motion.div>

          {/* Desktop Links & Language Switcher with enhanced styling */}
          <div className="hidden md:flex md:items-center md:space-x-2 lg:space-x-3">
            {links.map((link, i) => {
              const localizedHref = currentLocale === 'en' 
                ? link.href 
                : `/${currentLocale}${link.href === '/' ? '' : link.href}`; 
              const isActive = pathname === localizedHref;
              return (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i, duration: 0.5 }}
                >
                  <Link href={localizedHref}>
                    <span
                      className={`px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${linkColor}
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

            {/* Enhanced CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="ml-4"
            >
              <Link href={currentLocale === 'en' ? '/book-now' : `/${currentLocale}/book-now`}>
                <span className={ctaClass}>
                  BOOK NOW
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Trigger with enhanced styling */}
          <div className="flex md:hidden items-center space-x-3">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="p-2 rounded-full hover:bg-gray-50 transition-colors duration-300 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={{
                  open: { rotate: 90 },
                  closed: { rotate: 0 }
                }}
                transition={{ duration: 0.3 }}
              >
                <svg 
                  className="h-6 w-6 text-gray-700" 
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
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white/95 backdrop-blur-md shadow-lg overflow-hidden"
            id="mobile-menu"
          >
            <div className="px-4 pt-3 pb-4 space-y-2">
              {links.map((link) => {
                const localizedHref = currentLocale === 'en' 
                  ? link.href 
                  : `/${currentLocale}${link.href === '/' ? '' : link.href}`; 
                const isActive = pathname === localizedHref;
                return (
                  <Link key={link.href} href={localizedHref} onClick={() => setIsOpen(false)}>
                    <motion.span
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className={`block px-4 py-2.5 rounded-xl text-base font-medium
                        ${isActive
                          ? `${activeBgColor} ${activeTextColor}` 
                          : `${linkColor} ${hoverBgColor} ${hoverTextColor}`
                        }`}
                    >
                      {link.label}
                    </motion.span>
                  </Link>
                );
              })}
              
              {/* Language Links in Mobile Menu */}
              <div className="border-t border-gray-100 mt-4 pt-4 space-y-2">
                <p className="px-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">Language</p>
                {locales.map(locale => (
                  <Link 
                    key={locale.code}
                    href={changeLocale(pathname, locale.code)} 
                    locale={locale.code}
                    onClick={(e) => handleLanguageClick(e, locale.code)}
                    className={`block px-4 py-2.5 rounded-xl text-base transition-colors duration-300
                      ${currentLocale === locale.code 
                        ? 'bg-gradient-to-r from-blue-50 to-cyan-50 font-medium' 
                        : 'hover:bg-gradient-to-r hover:from-blue-50/50 hover:to-cyan-50/50'
                      }
                    `}
                  >
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center space-x-3"
                    >
                      <span className="text-lg">{locale.flag}</span>
                      <span>{locale.code.toUpperCase()}</span>
                    </motion.div>
                  </Link>
                ))}
              </div>

              {/* CTA Button Mobile */}
              <div className="mt-6 px-4">
                <Link 
                  href={currentLocale === 'en' ? '/book-now' : `/${currentLocale}/book-now`} 
                  onClick={() => setIsOpen(false)}
                >
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
};

export default Navbar; 