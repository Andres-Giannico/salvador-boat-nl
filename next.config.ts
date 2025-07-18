import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/book-now/3-hours-all-inclusive-boat-trip.html',
        destination: '/boat-trips',
        permanent: true,
      },
      {
        source: '/interna/salvador-ibiza-style-boat-trip.html',
        destination: '/private-boat-trips',
        permanent: true,
      },
      {
        source: '/book-now/sunset-mix-.html',
        destination: '/boat-trips',
        permanent: true,
      },
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
        destination: '/partners/turbookings',
        permanent: true,
      },
      {
        source: '/blog/the-boat/unlock-instant-earnings.html',
        destination: '/partners/earnings',
        permanent: true,
      },
      {
        source: '/blog/location/findes',
        destination: '/contact',
        permanent: true,
      },
      {
        source: '/blog/blog/descubre-el-amor-en-el-mar.html',
        destination: '/blog/discover-love-at-sea',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
