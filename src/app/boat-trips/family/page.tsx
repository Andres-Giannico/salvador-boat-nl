import { pageMetadata } from "@/lib/page-meta";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { familyBoatTripFaqs } from "@/lib/topic-faqs";
import FamilyBoatTripsClientPage from "./page.client";

export const metadata = pageMetadata({
  title: "Beste gezinsboottochten Ibiza (3 uur) | Kinderen & alle leeftijden",
  description:
    "Op zoek naar de beste gezinsboottocht op Ibiza? Salvador biedt veilige, all-inclusive 3 uur cruises met paddleboards, snorkelen, reddingsvesten en kindvriendelijke tapas vanuit San Antonio.",
  path: "/boat-trips/family",
  keywords:
    "beste gezinsboottocht ibiza, gezinsboottochten Ibiza, boottocht ibiza met kinderen, gezinsvriendelijke boottocht ibiza, boottocht kinderen Ibiza, wat te doen ibiza met kinderen",
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
