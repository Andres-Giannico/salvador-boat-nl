import DayTripClientPage from './page.client';
import Script from 'next/script';
import { pageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = pageMetadata({
  title: 'All-inclusive dagtrip Ibiza | Salvador',
  description: '⛵ 3 uur all-inclusive dagtrip: paddleboards, snorkelen, unlimited drankjes & Spaanse tapas. Vanaf €80.',
  path: '/boat-trips/day-trip',
  ogTitle: 'All-inclusive dagtrip Ibiza',
  ogDescription: '⛵ Dagtrip met 15 paddleboards, snorkelen, open bar en tapas.',
  ogImage: '/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp',
});

export default async function DayTripPage() {
  const dayTripJsonLd = await buildProductSchema({
    name: "All-inclusive dagboottocht Ibiza — Salvador Ibiza",
    description:
      "All-inclusive dagboottocht van 3 uur met kapitein, catering, drankjes, paddleboards en snorkelen.",
    path: "/boat-trips/day-trip",
    price: "80.00",
    image: "/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp",
    includeRating: true,
  });

  return (
    <>
      <Script
        id="day-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dayTripJsonLd) }}
      />
      <DayTripClientPage />
    </>
  );
}
