import BoatTripsClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { getBoatTripsHubSeo } from '@/lib/seo-i18n';
import { getGeneralBoatTripFaqs } from '@/lib/faq-i18n';
import { getSiteLocale } from '@/lib/site-locale';

const locale = getSiteLocale();
const hubSeo = getBoatTripsHubSeo(locale);

export const metadata = pageMetadata({
  ...hubSeo,
  path: '/boat-trips',
  locale,
});

export default function BoatTripsPage() {
  const faqSchema = buildFaqPageSchema(getGeneralBoatTripFaqs(locale));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <BoatTripsClientPage />
    </>
  );
}
