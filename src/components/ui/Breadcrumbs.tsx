'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FiHome, FiChevronRight } from 'react-icons/fi';
import { buildBreadcrumbListSchema } from '@/lib/breadcrumb-schema';
import { getBreadcrumbLabels } from '@/lib/seo-i18n';
import { getClientSiteLocale } from '@/lib/site-locale';

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

function BreadcrumbJsonLd({ pathname }: { pathname: string }) {
  const segments = pathname.split('/').filter(Boolean);
  if (segments.length === 0) return null;

  const locale = getClientSiteLocale();

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(buildBreadcrumbListSchema(pathname, locale)),
      }}
    />
  );
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();
  const locale = getClientSiteLocale();
  const routeLabels = getBreadcrumbLabels(locale);

  if (items) {
    return (
      <>
        <BreadcrumbJsonLd pathname={pathname} />
        <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
          <Link
            href="/"
            className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
            aria-label="Home"
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
      </>
    );
  }

  const pathSegments = pathname.split('/').filter(Boolean);
  if (pathSegments.length === 0) {
    return null;
  }

  const breadcrumbItems: BreadcrumbItem[] = [];
  let currentPath = '';

  pathSegments.forEach((segment) => {
    currentPath += `/${segment}`;
    const label =
      routeLabels[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);
    breadcrumbItems.push({
      label,
      href: currentPath,
    });
  });

  return (
    <>
      <BreadcrumbJsonLd pathname={pathname} />
      <nav aria-label="Breadcrumb" className={`flex items-center space-x-2 text-sm ${className}`}>
        <Link
          href="/"
          className="flex items-center text-gray-500 hover:text-blue-600 transition-colors"
          aria-label="Home"
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
    </>
  );
}
