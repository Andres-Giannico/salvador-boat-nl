import DayTripClientPage from './page.client';
import Script from 'next/script';
import { pageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { getDayTripSeo, getDayTripFaqs } from '@/lib/seo-i18n';
import { getSiteLocale } from '@/lib/site-locale';

const locale = getSiteLocale();
const dayTripSeo = getDayTripSeo(locale);

export const metadata = pageMetadata({
  ...dayTripSeo,
  path: '/boat-trips/day-trip',
  ogImage: '/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp',
  locale,
});

export default async function DayTripPage() {
  const dayTripJsonLd = await buildProductSchema({
    name: "All inclusive boat trip and tours in Ibiza - Salvador Ibiza",
    description:
      "All-inclusive day boat trip in Ibiza with captain. Enjoy 3 hours of navigation with catering, drinks, paddle surf and snorkel included.",
    path: "/boat-trips/day-trip",
    price: "80.00",
    image: "/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp",
    includeRating: true,
  });
  const faqSchema = buildFaqPageSchema(getDayTripFaqs(locale));

  return (
    <>
      <Script
        id="day-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dayTripJsonLd) }}
      />
      <Script
        id="day-trip-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <DayTripClientPage />
    </>
  );
}
