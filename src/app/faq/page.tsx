import { Metadata } from "next";
import FAQClientPage from "./page.client";
import { pageAlternates } from "@/config/site";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Salvador Ibiza",
  description:
    "Find answers to common questions about our boat trips, services, and more. Plan your perfect Mediterranean adventure with Salvador Ibiza.",
  alternates: pageAlternates("/faq"),
  robots: {
    index: true,
    follow: true,
  },
};

// FAQ Schema for featured snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What kind of boat trips do you offer in Ibiza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We offer vibrant shared trips like our Mixed Daytime Tour and the magical Mixed Sunset Tour. We also specialize in fully customizable Private Trips. All trips include professional crew, equipment, and refreshments."
      }
    },
    {
      "@type": "Question", 
      "name": "How long do Salvador Ibiza boat trips last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our Day Trips and Sunset Trips usually last around 3 hours each. The duration of Private Charters can be tailored to your preferences with a minimum of 3 hours."
      }
    },
    {
      "@type": "Question",
      "name": "What routes do Salvador Ibiza boat trips take?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Our shared tours explore the stunning West Coast (towards Cala Conta) or North Coast (towards Sa Foradada), showcasing beautiful coves and beaches like Cala Gració and Cala Salada. The captain chooses the best route daily based on conditions. On Private Trips, the route is fully customizable."
      }
    },
    {
      "@type": "Question",
      "name": "Where is the meeting point for Salvador Ibiza boat trips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The usual meeting point is the port of San Antonio, Ibiza. The exact location and boarding time will be confirmed once your booking is confirmed."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in the price of Salvador Ibiza boat trips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Shared trips include captain, crew, fuel, unlimited open bar (soft drinks, beer, wine, cava, sangria, water), Spanish tapas & fresh fruit, and use of paddleboards, kayaks & snorkel gear. Private Trips have similar inclusions with upgrade options available."
      }
    },
    {
      "@type": "Question",
      "name": "Can we bring our own food and drinks on Salvador Ibiza boat trips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You can bring your own food onboard, especially on Private Trips. However, outside drinks are strictly not permitted as we provide a generous complimentary open bar with various beverages."
      }
    },
    {
      "@type": "Question",
      "name": "How can I book a Salvador Ibiza boat trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Booking online through our website is highly recommended. Use the secure booking widgets with live availability on our trip pages. After booking, you'll receive a confirmation voucher with all details including meeting point and time."
      }
    },
    {
      "@type": "Question",
      "name": "What's the maximum capacity of Salvador Ibiza boats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our boats can accommodate up to 35 passengers for shared trips. For specific capacity details, please check our individual trip pages or contact us directly."
      }
    },
    {
      "@type": "Question",
      "name": "Is there a toilet on Salvador Ibiza boats?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, our boats are equipped with marine toilets (WC) for your comfort during the trip."
      }
    },
    {
      "@type": "Question",
      "name": "Do Salvador Ibiza boat trips include watersports?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes! All our trips include the use of 15 paddleboards, 2 kayaks, and complete snorkeling equipment for everyone to enjoy during swim stops."
      }
    },
    {
      "@type": "Question",
      "name": "Are Salvador Ibiza boat trips safe for children?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely! Our boats are safe for families and children. We have life jackets in different sizes and our professional crew ensures safety. Just let us know children's ages when booking."
      }
    },
    {
      "@type": "Question",
      "name": "What should I bring on a Salvador Ibiza boat trip?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We recommend bringing swimwear, towel, sunscreen, hat, sunglasses, and camera. If prone to seasickness, consider preventive medication beforehand."
      }
    },
    {
      "@type": "Question",
      "name": "What happens if there's bad weather for Salvador Ibiza boat trips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Safety is our priority. If weather conditions are unsafe (captain's decision), we'll try to reschedule for another day. If not possible, we offer a full refund."
      }
    },
    {
      "@type": "Question",
      "name": "How much do Salvador Ibiza boat trips cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Day and Sunset trips cost €80 per adult, with discounted rates for children (6-12 years: €45) and free for infants (0-5 years). Private charters start from €1,350. All trips are all-inclusive."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to book Salvador Ibiza boat trips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We operate from May to October. Book in advance for peak summer months (July-August). Day trips depart at 2:00 PM, sunset trips at 6:30 PM during peak season."
      }
    }
  ]
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClientPage />
    </>
  );
}
