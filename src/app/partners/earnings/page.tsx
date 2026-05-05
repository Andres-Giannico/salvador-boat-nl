import React from 'react';
import { enPageMetadata } from '@/lib/page-meta';

export const metadata = enPageMetadata({
  title: 'Partner Earnings | Salvador Ibiza',
  description: 'Information about our partner earnings program.',
  path: '/partners/earnings',
  robots: { index: true, follow: true },
});

export default function PartnerEarningsPage() {
  return (
    <div className="container mx-auto py-20 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Partner Earnings</h1>
      <p className="text-center mb-16 text-lg text-gray-600">
        Coming soon - Information about our partner earnings program.
      </p>
    </div>
  );
}
