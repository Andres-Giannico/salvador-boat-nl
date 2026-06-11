import { absoluteUrl, publicAssetUrl } from "@/config/site";
import { pageMetadata } from "@/lib/page-meta";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { snorkelingBoatTripFaqs } from "@/lib/topic-faqs";
import SnorkelingBoatTripsClientPage from "./page.client";

export const metadata = pageMetadata({
  title: "Beste snorkelboottochten Ibiza (3 uur) | Uitrusting inbegrepen",
  description:
    "Ontdek de beste snorkelboottocht op Ibiza met Salvador. Professionele uitrusting, kristalheldere cala's, 2–3 zwemstops en all-inclusive dagtochten vanuit San Antonio.",
  path: "/boat-trips/snorkeling",
  keywords:
    "beste snorkelboottocht ibiza, snorkelen boot Ibiza, waar snorkelen ibiza, snorkeltour Ibiza, ibiza zee grotten snorkelen",
  ogTitle: "Beste snorkelboottochten Ibiza | Uitrusting inbegrepen",
  ogDescription:
    "Verken Ibiza's beste snorkelplekken per boot met Salvador. Volledige uitrusting, ervaren bemanning en all-inclusive trips vanuit San Antonio.",
  ogImage: "/images/boat/parejasnorkeling.webp",
  ogImageAlt: "Stel snorkelt in kristalhelder water tijdens boottocht Ibiza",
});

const snorkelingBoatTripsJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Snorkelboottochten Ibiza — Salvador",
  description:
    "Ontdek Ibiza's onderwaterwereld met professionele snorkeluitrusting en begeleiding. Geschikt voor alle niveaus in kristalhelder mediterrane water.",
  image: publicAssetUrl("/images/boat/parejasnorkeling.webp"),
  brand: {
    "@type": "Brand",
    name: "Salvador Ibiza",
  },
  offers: {
    "@type": "Offer",
    url: absoluteUrl("/boat-trips/snorkeling"),
    priceCurrency: "EUR",
    price: "80",
    priceSpecification: {
      "@type": "PriceSpecification",
      price: "80",
      priceCurrency: "EUR",
      valueAddedTaxIncluded: "true",
    },
    availability: "https://schema.org/InStock",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "278",
  },
  duration: "PT3H",
};

const faqSchema = buildFaqPageSchema(snorkelingBoatTripFaqs);

export default function SnorkelingBoatTripsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(snorkelingBoatTripsJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <SnorkelingBoatTripsClientPage />
    </>
  );
}
