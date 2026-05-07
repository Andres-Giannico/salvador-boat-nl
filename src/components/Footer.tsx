import Link from 'next/link';
import Image from 'next/image';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaTripadvisor, FaYoutube } from 'react-icons/fa';
import { FiMail, FiMapPin, FiPhone, FiArrowRight } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  // Updated phone numbers
  const phone1 = "+34 871 181 393"; 
  const phone2 = "+34 681 611 598";
  const whatsappNumber = "34871181393"; // Number for wa.me link

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/boatstripsinibiza/', icon: FaInstagram },
    { name: 'Facebook', href: 'https://www.facebook.com/SalvadoIbizaBoat', icon: FaFacebookF },
    { name: 'TripAdvisor', href: 'https://www.tripadvisor.com/Attraction_Review-g652116-d6835309-Reviews-Salvador_Ibiza-Sant_Antoni_de_Portmany_Ibiza_Balearic_Islands.html', icon: FaTripadvisor },
    { name: 'YouTube', href: 'https://www.youtube.com/watch?v=0SN3YMMwUEk', icon: FaYoutube },
  ];

  return (
    <footer className="relative">
      {/* Subtle wave separator */}
      <div className="absolute top-0 left-0 right-0 h-16 overflow-hidden">
        <svg className="absolute bottom-0 w-full h-24 text-white" viewBox="0 0 1440 74" preserveAspectRatio="none">
          <path
            d="M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z"
            fill="currentColor"
          ></path>
        </svg>
      </div>

      {/* Main Footer */}
      <div className="pt-20 pb-12 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-6 lg:px-8">
          {/* Top section with logo and socials */}
          <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-8 border-b border-gray-200">
            <Link href="/" className="mb-6 md:mb-0">
              <Image
                src="/images/optimized/salvador-ibiza-footer-logo-alt.webp"
                alt="Salvador Ibiza footerlogo"
                width={60}
                height={18}
                loading="lazy"
              />
            </Link>
            <div className="flex items-center space-x-5">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="bg-white p-3 rounded-full shadow-sm hover:shadow-md transition duration-300 hover:transform hover:scale-110 text-gray-600 hover:text-blue-500"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Main footer grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
            {/* About column */}
            <div className="lg:pr-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Over ons</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                Beleef Ibiza vanaf het water met onze premium boottochten. Onvergetelijke momenten, helder water en de magie van de Middellandse Zee.
              </p>
              <Link href="/about" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group">
                Meer over ons <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Explore column */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Ontdek</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/boat-trips" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Boottochten
                  </Link>
                </li>
                <li>
                  <Link href="/private-boat-trips" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Privétochten
                  </Link>
                </li>
                <li>
                  <Link href="/corporate-events" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Zakelijke events
                  </Link>
                </li>
                <li>
                  <Link href="/weddings" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Bruiloften
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Galerij
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal/Company column - ADD Contact Link Here */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Bedrijf</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Over ons
                  </Link>
                </li>
                <li>
                  <Link href="/partners" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Partners
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Contact
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Privacybeleid
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service" className="text-gray-600 hover:text-blue-600 transition duration-300">
                    ⟡ Algemene voorwaarden
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact column */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-600">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <FiMapPin className="w-4 h-4 text-blue-600" />
                  </div>
                  <span>Avinguda del Doctor Fleming, 07820 Sant Antoni de Portmany, Illes Balears</span>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <FiPhone className="w-4 h-4 text-blue-600" />
                  </div>
                  <a href={`tel:${phone1.replace(/\s/g, '')}`} className="hover:text-blue-600 transition duration-300">
                    {phone1}
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <FiPhone className="w-4 h-4 text-blue-600" />
                  </div>
                  <a href={`tel:${phone2.replace(/\s/g, '')}`} className="hover:text-blue-600 transition duration-300">
                    {phone2}
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-blue-50 p-2 rounded-full mr-3">
                    <FiMail className="w-4 h-4 text-blue-600" />
                  </div>
                  <a href="mailto:info@salvadoribiza.com" className="hover:text-blue-600 transition duration-300">
                    info@salvadoribiza.com
                  </a>
                </li>
                <li className="flex items-center text-gray-600">
                  <div className="bg-green-50 p-2 rounded-full mr-3">
                    <FaWhatsapp className="w-4 h-4 text-green-600" />
                  </div>
                  <a 
                    href={`https://wa.me/${whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-green-600 transition duration-300"
                  >
                    WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar - REMOVE Contact Link from Here */}
      <div className="py-4 bg-white border-t border-gray-100">
        <div className="container mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            &copy; {year} <span className="font-medium">Salvador Ibiza</span>. Alle rechten voorbehouden.
          </p>
          <div className="flex space-x-8">
            <a href="#top" className="text-sm text-gray-500 hover:text-blue-600 transition duration-300">
              Naar boven
            </a>
            <span className="text-sm text-gray-500">
              Made with ❤️ from MDQ & IBZ 
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 