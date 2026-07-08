import { enPageMetadata } from "@/lib/page-meta";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { snorkelingBoatTripFaqs } from "@/lib/topic-faqs";
import { buildProductSchema } from "@/lib/product-schema";
import SnorkelingBoatTripsClientPage from "./page.client";

export const metadata = enPageMetadata({
  title: "Best Snorkeling Boat Trips Ibiza (3 hours) | Equipment Included",
  description:
    "Discover the best snorkelling boat trip in Ibiza with Salvador. Professional equipment, crystal-clear coves, 2–3 swim stops and all-inclusive day trips from San Antonio.",
  path: "/boat-trips/snorkeling",
  keywords:
    "best snorkeling boat trip ibiza, snorkeling boat trips Ibiza, where to snorkel ibiza, snorkel tour Ibiza, ibiza sea caves snorkeling",
  ogTitle: "Best Snorkeling Boat Trips Ibiza | Equipment Included",
  ogDescription:
    "Explore Ibiza's best snorkelling spots by boat with Salvador. Full equipment, expert crew and all-inclusive trips from San Antonio.",
  ogImage: "/images/boat/parejasnorkeling.webp",
  ogImageAlt: "Couple snorkeling in crystal clear waters during Ibiza boat trip",
});

const faqSchema = buildFaqPageSchema(snorkelingBoatTripFaqs);

export default async function SnorkelingBoatTripsPage() {
  const productSchema = await buildProductSchema({
    name: "Snorkeling Boat Trips Ibiza by Salvador",
    description:
      "Discover Ibiza's underwater world with professional snorkeling equipment and expert guidance. Perfect for all skill levels in crystal-clear Mediterranean waters.",
    path: "/boat-trips/snorkeling",
    price: "80",
    image: "/images/boat/parejasnorkeling.webp",
    duration: "PT3H",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SnorkelingBoatTripsClientPage />
    </>
  );
}
