import BoatTripsClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { generalBoatTripFaqs } from '@/lib/topic-faqs';

export const metadata = pageMetadata({
  title: 'Beste boottochten Ibiza — dag- & zonsondergangtrips',
  description:
    'Ontdek de beste boottochten op Ibiza met Salvador. All-inclusive dag- en zonsondergangtochten met paddleboards, snorkelen, open bar en tapas. Vergelijk opties en boek vanuit San Antonio.',
  path: '/boat-trips',
});

const faqSchema = buildFaqPageSchema(generalBoatTripFaqs);

export default function BoatTripsPage() {
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
