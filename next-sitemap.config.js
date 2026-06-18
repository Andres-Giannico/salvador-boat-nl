/** @type {import('next-sitemap').IConfig} */

function stripTrailingSlash(url) {
  return url.replace(/\/+$/, '');
}

const siteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'https://www.salvadoribiza.nl'
);

const englishSiteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL_EN || 'https://www.salvadoribiza.com'
);

const spanishSiteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL_ES || 'https://www.salvadoribiza.es'
);

const frenchSiteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL_FR || 'https://www.salvadoribiza.fr'
);

const xDefaultBase =
  process.env.NEXT_PUBLIC_HREFLANG_X_DEFAULT === 'nl'
    ? siteUrl
    : englishSiteUrl;

function absoluteForPath(base, pathname) {
  if (!pathname || pathname === '/') return `${base}/`;
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${p}`;
}

const LEGAL_PATHS = new Set([
  '/privacy-policy',
  '/terms-of-service',
  '/terms',
  '/cookie-policy',
  '/legal-notice',
]);

const PRIMARY_PRODUCT_PATHS = new Set([
  '/boat-trips/day-trip',
  '/boat-trips/sunset-trip',
  '/private-boat-trips',
]);

function sitemapMetaForPath(path) {
  const rel = !path || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;

  if (rel === '/') {
    return { priority: 1.0, changefreq: 'weekly' };
  }
  if (PRIMARY_PRODUCT_PATHS.has(rel)) {
    return { priority: 0.9, changefreq: 'weekly' };
  }
  if (LEGAL_PATHS.has(rel)) {
    return { priority: 0.3, changefreq: 'yearly' };
  }
  if (rel === '/blog' || rel.startsWith('/blog/')) {
    return { priority: 0.6, changefreq: 'monthly' };
  }
  return { priority: 0.8, changefreq: 'weekly' };
}

module.exports = {
  siteUrl,
  generateRobotsTxt: false,
  /** QR / flyer: noindex — no deben aparecer en sitemap */
  exclude: ['/book/trips', '/book/flyer'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${englishSiteUrl}/sitemap.xml`,
      `${spanishSiteUrl}/sitemap.xml`,
      `${frenchSiteUrl}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    const rel =
      !path || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
    const nl = absoluteForPath(siteUrl, rel);
    const en = absoluteForPath(englishSiteUrl, rel);
    const es = absoluteForPath(spanishSiteUrl, rel);
    const fr = absoluteForPath(frenchSiteUrl, rel);
    const xDefault = absoluteForPath(xDefaultBase, rel);
    const { priority, changefreq } = sitemapMetaForPath(rel);

    return {
      loc: nl,
      changefreq,
      priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: nl, hreflang: 'nl', hrefIsAbsolute: true },
        { href: en, hreflang: 'en', hrefIsAbsolute: true },
        { href: es, hreflang: 'es', hrefIsAbsolute: true },
        { href: fr, hreflang: 'fr', hrefIsAbsolute: true },
        { href: xDefault, hreflang: 'x-default', hrefIsAbsolute: true },
      ],
    };
  },
};
