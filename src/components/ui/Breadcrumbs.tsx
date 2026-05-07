'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiChevronRight } from 'react-icons/fi';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

// Mapeo de rutas a nombres más amigables
const routeLabels: Record<string, string> = {
  'boat-trips': 'Boottochten',
  'day-trip': 'Dagtrip',
  'sunset-trip': 'Zonsondergangtrip',
  'private-boat-trips': 'Privétochten',
  'private-charter': 'Privé charter',
  'corporate-events': 'Zakelijke events',
  'about': 'Over ons',
  'contact': 'Contact',
  'partners': 'Partners',
  'weddings': 'Bruiloften',
  'gallery': 'Galerij',
  'blog': 'Blog',
  'faq': 'FAQ',
  'book-now': 'Boek nu',
  'san-antonio': 'San Antonio',
  'day': 'Dagtocht',
  'sunset': 'Zonsondergang',
  'family': 'Gezinnen',
  'paddle': 'SUP / paddle',
  'snorkeling': 'Snorkelen',
  'groups': 'Groepen',
  'all-inclusive': 'All-inclusive',
  'earnings': 'Verdiensten',
  'turbookings': 'Turbookings',
  'flyer': 'Flyer',
  'trips': 'QR-boeken',
  'hidden-coves-ibiza': 'Verborgen cala’s',
  'sunset-sailing-ibiza': 'Sunset zeilen Ibiza',
  'ibiza-midday-magic-boat-trip': 'Midday magic',
};

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Si se proporcionan items custom, usarlos
  if (items) {
    return (
      <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
        <Link
          href="/"
          className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          aria-label="Startpagina"
        >
          <FiHome className="w-4 h-4" />
        </Link>
        {items.map((item, index) => (
          <div key={item.href} className="flex items-center space-x-2">
            <FiChevronRight className="w-4 h-4 text-gray-400" />
            {index === items.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="text-gray-500 hover:text-blue-600 transition-colors"
              >
                {item.label}
              </Link>
            )}
          </div>
        ))}
      </nav>
    );
  }

  // Auto-generar breadcrumbs basado en la ruta actual
  const pathSegments = pathname.split('/').filter(Boolean);
  
  // Si estamos en home, no mostrar breadcrumbs
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbItems: BreadcrumbItem[] = [];
  let currentPath = '';

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label = routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbItems.push({
      label,
      href: currentPath,
    });
  });

  return (
    <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
      <Link
        href="/"
        className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
        aria-label="Startpagina"
      >
        <FiHome className="w-4 h-4" />
      </Link>
      {breadcrumbItems.map((item, index) => (
        <div key={item.href} className="flex items-center space-x-2">
          <FiChevronRight className="w-4 h-4 text-gray-400" />
          {index === breadcrumbItems.length - 1 ? (
            <span className="text-gray-900 font-medium" aria-current="page">
              {item.label}
            </span>
          ) : (
            <Link
              href={item.href}
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
} 