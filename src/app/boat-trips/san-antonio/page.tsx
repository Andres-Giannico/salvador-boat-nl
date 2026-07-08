import SanAntonioBoatTripsClientPage from './page.client';
import { enPageMetadata } from '@/lib/page-meta';
import { buildProductSchema } from '@/lib/product-schema';

export const metadata = enPageMetadata({
  title: 'Boat Trips San Antonio Ibiza | Departing from San Antonio Bay',
  description: 'Join our boat trips departing from San Antonio Ibiza. Explore the best of Ibiza\'s west coast with our premium boat tours from San Antonio Bay. Day and sunset trips available.',
  path: '/boat-trips/san-antonio',
  keywords: 'boat trips san antonio ibiza, boat trips in ibiza san antonio, ibiza boat trips from san antonio, boat trips from san antonio ibiza, san antonio boat trips ibiza, boat tour san antonio ibiza, sunset boat trip ibiza san antonio',
  ogTitle: 'Boat Trips San Antonio Ibiza | Premium Departures from San Antonio Bay',
  ogDescription: 'Discover the best boat trips departing from San Antonio Ibiza. Premium day and sunset cruises exploring Ibiza\'s stunning west coast.',
  ogImage: '/images/optimized/salvador-ibiza-boat-drone-view.webp',
  ogImageAlt: 'Salvador boat trip departing from San Antonio Ibiza',
});

export default async function SanAntonioBoatTripsPage() {
  const productSchema = await buildProductSchema({
    name: "Boat Trips from San Antonio Ibiza by Salvador",
    description:
      "Premium boat trips departing from San Antonio Ibiza. Explore the west coast with our day and sunset cruises including drinks, tapas, and water sports.",
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
