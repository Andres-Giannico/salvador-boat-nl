import React from 'react';
import { pageMetadata } from '@/lib/page-meta';

export const metadata = pageMetadata({
  title: 'Partneropbrengsten',
  description: 'Informatie over het partnerprogramma van Salvador Ibiza (binnenkort).',
  path: '/partners/earnings',
  robots: { index: true, follow: true },
});

export default function PartnerEarningsPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Partneropbrengsten</h1>
      <p className="text-center mb-16 text-lg text-gray-600">
        Binnenkort meer informatie over ons partnerprogramma.
      </p>
    </div>
  );
}
