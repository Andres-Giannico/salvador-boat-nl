/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://salvadoribiza.com', // Sin www - redirects 301 configurados
  generateRobotsTxt: true, // Genera robots.txt automáticamente
  // Optional:
  // robotsTxtOptions: {
  //   policies: [
  //     { userAgent: '*' },
  //     { userAgent: 'black-listed-bot', disallow: ['/'] },
  //   ],
  //   additionalSitemaps: [
  //     'https://www.example.com/my-custom-sitemap-1.xml',
  //     'https://www.example.com/my-custom-sitemap-2.xml',
  //     'https://www.example.com/my-custom-sitemap-3.xml',
  //   ],
  // },
  // exclude: ['/server-sitemap.xml'], // <= exclude here
  // robotsTxtOptions: {
  //    additionalSitemaps: [
  //      'https://example.com/server-sitemap.xml', // <==== Add here
  //   ],
  // },
}; 