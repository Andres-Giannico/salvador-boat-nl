import SunsetTripClientPage from './page.client';
import Script from 'next/script';
import { pageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = pageMetadata({
  title: 'Zonsondergang boottrip (all-inclusive) | Salvador',
  description: '🌅 Ibiza’s legende zonsondergang vanaf zee — 3 uur all-inclusive met drankjes, tapas en paddleboards. Vanaf €80.',
  path: '/boat-trips/sunset-trip',
  ogTitle: 'Zonsondergang boottrip Ibiza',
  ogDescription: '🌅 All-inclusive avondtrip met open bar en tapas.',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
});

export default async function SunsetTripPage() {
  const sunsetTripJsonLd = await buildProductSchema({
    name: "Zonsondergang boottrip Ibiza — Salvador Ibiza",
    description:
      "All-inclusive zonsondergang-trip van 3 uur met kapitein, catering, drankjes, paddleboards en snorkelen.",
    path: "/boat-trips/sunset-trip",
    price: "80.00",
    image: "/images/boat/sunset.png",
    includeRating: true,
  });

  return (
    <>
      <Script
        id="sunset-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetTripJsonLd) }}
      />
      <SunsetTripClientPage />
    </>
  );
}
