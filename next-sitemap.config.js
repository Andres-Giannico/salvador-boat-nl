/** @type {import('next-sitemap').IConfig} */

function stripTrailingSlash(url) {
  return url.replace(/\/+$/, '');
}

/** NEXT_PUBLIC_* primero: en Vercel coincide con el HTML; SITE_URL del build a veces queda en apex */
const siteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    'https://www.salvadoribiza.com'
);

const spanishSiteUrl = stripTrailingSlash(
  process.env.NEXT_PUBLIC_SITE_URL_ES || 'https://www.salvadoribiza.es'
);

function absoluteForPath(base, pathname) {
  if (!pathname || pathname === '/') return `${base}/`;
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${p}`;
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  /** QR / flyer: noindex — no deben aparecer en sitemap */
  exclude: ['/book/trips', '/book/flyer'],
  robotsTxtOptions: {
    additionalSitemaps: [`${spanishSiteUrl}/sitemap.xml`],
  },
  transform: async (config, path) => {
    const rel = !path || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
    const en = absoluteForPath(siteUrl, rel);
    const es = absoluteForPath(spanishSiteUrl, rel);
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: en, hreflang: 'en', hrefIsAbsolute: true },
        { href: es, hreflang: 'es', hrefIsAbsolute: true },
        { href: en, hreflang: 'x-default', hrefIsAbsolute: true },
      ],
    };
  },
};
