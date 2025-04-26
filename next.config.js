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
      // Google redirect with 303 status code (See Other)
      {
        source: '/salvador-ibiza/salvadorai.html',
        destination: '/boat-trips',
        permanent: false,
      },
      {
        source: '/book-now/sunset-mix-.html',
        destination: '/boat-trips/sunset-trip',
        permanent: false,
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
      {
        source: '/book-now/sunset-mix-.html',
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
    ]
  },
}

module.exports = nextConfig 