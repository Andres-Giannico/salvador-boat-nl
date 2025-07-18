/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  async redirects() {
    return [
      // SEO: Redirect from old /private-charter to new /private-boat-trips
      {
        source: '/private-charter',
        destination: '/private-boat-trips',
        permanent: true,
      },
      // Redirección permanente para la antigua página AI
      {
        source: '/salvador-ibiza/salvadorai.html',
        destination: '/boat-trips',
        permanent: true,
      },
      {
        source: '/book-now/sunset-mix-.html',
        destination: '/boat-trips/sunset-trip',
        permanent: true,
      },
      // Boat Trips redirects
      {
        source: '/book-now/3-hours-all-inclusive-boat-trip.html',
        destination: '/boat-trips',
        permanent: true,
      },
      {
        source: '/interna/salvador-ibiza-style-boat-trip.html',
        destination: '/boat-trips',
        permanent: true,
      },
      // Blog redirects
      {
        source: '/blog/the-boat/salvador.html',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/blog/the-boat/Partners.html',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/blog/the-boat/turbookings.html',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/blog/the-boat/unlock-instant-earnings.html',
        destination: '/partners',
        permanent: true,
      },
      // TODO: Blog section needs to be implemented
      {
        source: '/blog/location/findes',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog/blog/descubre-el-amor-en-el-mar.html',
        destination: '/blog',
        permanent: true,
      },
      // Redirect for old general excursions page (using 303)
      {
        source: '/book-now/salvador-ibiza-excursiones-en-barco-inolvidables-en-ibiza.html',
        destination: '/boat-trips/',
        statusCode: 303, 
      },
      // Redirect for old ads page (using 303)
      {
        source: '/interna/ads.html',
        destination: '/partners',
        statusCode: 303, 
      },
      // Redirect old blog booking page to main booking page (using 303)
      {
        source: '/blog/booknow/book.htm',
        destination: '/book-now',
        statusCode: 303,
      },
      // Redirect for mix-check page (using 303)
      {
        source: '/interna/mix-check',
        destination: '/boat-trips',
        statusCode: 303,
      },
      // Additional 301 redirects from spreadsheet
      {
        source: '/blog/what-we-do/salvadoribiza.com/blog/what-we-do/weddings.html',
        destination: '/weddings',
        permanent: true,
      },
      {
        source: '/blog/what-we-do/weddings.html',
        destination: '/weddings',
        permanent: true,
      },
      {
        source: '/www.salvadoribiza.com/index.php/book-now/salvador-ibiza-style-boat-trip.html',
        destination: '/book-now',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/www.nautilsibiza.com/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/www.salvadoribiza.com/search',
        destination: '/',
        permanent: true,
      },
      {
        source: '/www.salvadoribiza.com/index.php/blog/what-we-do/weddings.html',
        destination: '/weddings',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/book-now.html',
        destination: '/book-now',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/interna/mixto-day-trip.html',
        destination: '/boat-trips/day-trip',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/booknow/book.html',
        destination: '/book-now',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/what-we-do/henstag-parties-in-ibiza.html',
        destination: '/corporate-events',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/interna/salvadoribiza.com/interna/ads.html',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/what-we-do/corporate-events-ibiza.html',
        destination: '/corporate-events',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/interna/salvadoribiza.com/interna/checkp.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/mix-trips-groups/trips.html',
        destination: '/boat-trips',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/interna.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/www.salvadoribiza.com/interna/m.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/contact/us.html',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/mix-trips-groups/salvadoribiza.com/blog/mix-trips-groups/trips.html',
        destination: '/boat-trips',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/location/findes.html',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/salvadoribiza.com/book-now.html',
        destination: '/book-now',
        permanent: true,
      },
      {
        source: '/www.salvadoribiza.com/blog/the-boat/salvadoribiza.com/blog/the-boat/unlock-instant-earnings.html',
        destination: '/partners/earnings',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/book-now/salvador-ibiza-style-boat-trip.html',
        destination: '/book-now',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/not-listed/private-boat-charter-full-day.html',
        destination: '/private-charter',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/blog/salvadoribiza.com/blog/blog/descubre-el-amor-en-el-mar.html',
        destination: '/blog/discover-love-at-sea',
        permanent: true,
      },
      {
        source: '/www.salvadoribiza.com/index.php/blog/what-we-do/henstag-parties-in-ibiza.html',
        destination: '/corporate-events',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/book-now/private-boat-charter-full-day.html',
        destination: '/private-charter',
        permanent: true,
      },
      {
        source: '/www.salvadoribiza.com/blog/what-we-do/corporate-events-ibiza.html',
        destination: '/corporate-events',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/book-now/3-hours-all-inclusive-boat-t',
        destination: '/boat-trips/day-trip',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/interna/mix-check.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/book-now/salvador-ibiza-style-boat-tripold.html',
        destination: '/book-now',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/index.php/blog/mix-trips-groups/trips.html',
        destination: '/boat-trips',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/blog/the-boat/salvadoribiza.com/blog/the-boat/Partners.html',
        destination: '/partners',
        permanent: true,
      },
      {
        source: '/salvadoribiza.com/salvadoribiza.com/',
        destination: '/',
        permanent: true,
      },
      {
        source: '/cookie-policy-eu',
        destination: '/privacy-policy',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig 