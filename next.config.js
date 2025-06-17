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
    ]
  },
}

module.exports = nextConfig 