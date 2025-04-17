'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

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
    { href: '/', label: 'Home' },
    { href: '/boat-trips', label: 'Boat Trips' },
    { href: '/private-charter', label: 'Private Charter' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ];

  // Clases Fijas para Navbar blanco (slightly adjusted padding)
  const navClass = `fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 bg-white shadow-lg py-2`;
  const linkColor = "text-gray-700";
  const activeBgColor = "bg-blue-100";
  const activeTextColor = "text-blue-600";
  const hoverBgColor = "hover:bg-blue-50";
  const hoverTextColor = "hover:text-blue-700";
  const ctaClass = `py-2 px-5 rounded-full text-sm font-semibold shadow-md bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 transform hover:scale-105`;
  const navHeight = "h-20 md:h-24";
  const logoHeight = "h-16 md:h-20";

  return (
    <nav className={`${navClass} ${navHeight}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between ${navHeight}`}> 
          {/* Logo */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link href={currentLocale === 'en' ? '/' : `/${currentLocale}`}> 
              <Image
                src="/images/logo-salvador.png"
                alt="Salvador Ibiza Logo"
                width={200}
                height={90}
                className={`object-contain ${logoHeight} w-auto`}
                priority
              />
            </Link>
          </motion.div>

          {/* Links Desktop & Language Switcher */}
          <div className="hidden md:flex md:items-center md:space-x-1 lg:space-x-2">
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
                      className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${linkColor}
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
            
            {/* Language Switcher Dropdown */}
            <div className="relative ml-4 border-l pl-4">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)} 
                className="flex items-center focus:outline-none"
              >
                <span className="cursor-pointer text-xl mr-1">{currentFlag}</span>
                <svg className={`w-4 h-4 text-gray-600 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute right-0 mt-2 w-auto bg-white rounded-md shadow-lg py-1 z-50"
                    onMouseLeave={() => setIsLangOpen(false)}
                  >
                    {locales.map((locale) => (
                      <Link 
                        key={locale.code}
                        href={changeLocale(pathname, locale.code)} 
                        locale={locale.code}
                        onClick={() => setIsLangOpen(false)}
                        className={`block px-4 py-2 text-sm ${linkColor} ${hoverBgColor} ${hoverTextColor} flex items-center space-x-2`}
                      >
                        <span>{locale.flag}</span> 
                        <span>{locale.code.toUpperCase()}</span>
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="ml-3"
            >
              <Link href={currentLocale === 'en' ? '/contact' : `/${currentLocale}/contact`}>
                <span className={ctaClass}>
                  Book Now
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center">
             {/* Mobile Language Switcher (kept simple - shows current) */}
             <div className="mr-2">
                <span className="text-xl">{currentFlag}</span>
             </div>
             {/* Hamburger Button */}
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

      {/* Mobile Menu (includes language links now) */}
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
              {/* Main Links */}
              {links.map((link) => {
                 const localizedHref = currentLocale === 'en' 
                 ? link.href 
                 : `/${currentLocale}${link.href === '/' ? '' : link.href}`; 
                const isActive = pathname === localizedHref;
                return (
                  <Link key={link.href} href={localizedHref} onClick={() => setIsOpen(false)}>
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
              
              {/* Language Links in Mobile Menu */}
              <div className="border-t mt-3 pt-3 space-y-1">
                 <p className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Language</p>
                 {locales.map(locale => (
                   <Link 
                     key={locale.code}
                     href={changeLocale(pathname, locale.code)} 
                     locale={locale.code}
                     onClick={() => setIsOpen(false)}
                     className={`block px-3 py-2 rounded-md text-base font-medium ${linkColor} ${hoverBgColor} ${hoverTextColor} flex items-center space-x-2 ${currentLocale === locale.code ? 'font-bold' : ''}`}
                   >
                    <span>{locale.flag}</span> 
                    <span>{locale.code.toUpperCase()}</span>
                   </Link>
                 ))}
              </div>

              {/* CTA Button Mobile */}
              <div className="mt-4 px-3">
                 <Link href={currentLocale === 'en' ? '/contact' : `/${currentLocale}/contact`} onClick={() => setIsOpen(false)}>
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