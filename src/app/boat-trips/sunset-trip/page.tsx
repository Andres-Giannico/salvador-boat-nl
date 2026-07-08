import SunsetTripClientPage from './page.client';
import Script from 'next/script';
import { pageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { getSunsetTripSeo, getSunsetTripFaqs } from '@/lib/seo-i18n';
import { getSiteLocale } from '@/lib/site-locale';

const locale = getSiteLocale();
const sunsetTripSeo = getSunsetTripSeo(locale);

export const metadata = pageMetadata({
  ...sunsetTripSeo,
  path: '/boat-trips/sunset-trip',
  ogImage: '/images/optimized/sunset-sailing-cruise-ibiza.webp',
  locale,
});

export default async function SunsetTripPage() {
  const sunsetTripJsonLd = await buildProductSchema({
    name: "Sunset Boat Trip in Ibiza - Salvador Ibiza",
    description:
      "All-inclusive sunset boat trip in Ibiza with captain. Enjoy 3 hours of navigation with catering, drinks, paddle surf and snorkel included.",
    path: "/boat-trips/sunset-trip",
    price: "80.00",
    image: "/images/boat/sunset.png",
    includeRating: true,
  });
  const faqSchema = buildFaqPageSchema(getSunsetTripFaqs(locale));

  return (
    <>
      <Script
        id="sunset-trip-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sunsetTripJsonLd) }}
      />
      <Script
        id="sunset-trip-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SunsetTripClientPage />
    </>
  );
}
