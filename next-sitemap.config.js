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

const xDefaultBase =
  process.env.NEXT_PUBLIC_HREFLANG_X_DEFAULT === 'nl'
    ? siteUrl
    : englishSiteUrl;

function absoluteForPath(base, pathname) {
  if (!pathname || pathname === '/') return `${base}/`;
  const p = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return `${base}${p}`;
}

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  /** QR / flyer: noindex */
  exclude: ['/book/trips', '/book/flyer'],
  robotsTxtOptions: {
    additionalSitemaps: [
      `${englishSiteUrl}/sitemap.xml`,
      `${spanishSiteUrl}/sitemap.xml`,
    ],
  },
  transform: async (config, path) => {
    const rel =
      !path || path === '' ? '/' : path.startsWith('/') ? path : `/${path}`;
    const nl = absoluteForPath(siteUrl, rel);
    const en = absoluteForPath(englishSiteUrl, rel);
    const es = absoluteForPath(spanishSiteUrl, rel);
    const xDefault = absoluteForPath(xDefaultBase, rel);
    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: config.autoLastmod ? new Date().toISOString() : undefined,
      alternateRefs: [
        { href: nl, hreflang: 'nl', hrefIsAbsolute: true },
        { href: en, hreflang: 'en', hrefIsAbsolute: true },
        { href: es, hreflang: 'es', hrefIsAbsolute: true },
        { href: xDefault, hreflang: 'x-default', hrefIsAbsolute: true },
      ],
    };
  },
};
