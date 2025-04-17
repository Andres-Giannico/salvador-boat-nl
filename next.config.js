/** @type {import('next').NextConfig} */
const nextConfig = {
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
        destination: '/blog',
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