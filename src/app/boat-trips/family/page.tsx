import { enPageMetadata } from "@/lib/page-meta";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { familyBoatTripFaqs } from "@/lib/topic-faqs";
import FamilyBoatTripsClientPage from "./page.client";

export const metadata = enPageMetadata({
  title: "Best Family Boat Trips Ibiza (3 hours) | Kids & All Ages",
  description:
    "Looking for the best family boat trip in Ibiza? Salvador offers safe, all-inclusive 3-hour cruises with paddleboards, snorkelling, life jackets and kid-friendly tapas from San Antonio.",
  path: "/boat-trips/family",
  keywords:
    "best family boat trip ibiza, family boat trips Ibiza, boat trip ibiza with kids, family friendly boat trip ibiza, kids boat tour Ibiza, things to do ibiza with children",
});

const faqSchema = buildFaqPageSchema(familyBoatTripFaqs);

export default function FamilyBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FamilyBoatTripsClientPage />
    </>
  );
}
