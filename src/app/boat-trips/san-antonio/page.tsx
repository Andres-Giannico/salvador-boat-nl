import SanAntonioBoatTripsClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = pageMetadata({
  title: 'Boottochten San Antonio Ibiza',
  description: 'Vertrek vanuit de baai van San Antonio: premium dag- en zonsondergangtrips langs de westkust van Ibiza.',
  path: '/boat-trips/san-antonio',
  keywords: 'boottocht san antonio ibiza, sunset san antonio, haven san antonio boot',
  ogTitle: 'Boottochten vanuit San Antonio',
  ogDescription: 'Dag- en avondtrips vanuit San Antonio met Salvador.',
  ogImage: '/images/optimized/salvador-ibiza-boat-drone-view.webp',
  ogImageAlt: 'Boot Salvador vertrekkend in San Antonio',
});

export default async function SanAntonioBoatTripsPage() {
  const productSchema = await buildProductSchema({
    name: "Boottochten vanuit San Antonio — Salvador",
    description:
      "Premium boottochten vanuit San Antonio Ibiza. Verken de westkust met onze dag- en zonsondergangcruises inclusief drankjes, tapas en watersport.",
    path: "/boat-trips/san-antonio",
    price: "80",
    image: "/images/barcodesdedron.jpg",
    duration: "PT3H",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SanAntonioBoatTripsClientPage />
    </>
  );
}
