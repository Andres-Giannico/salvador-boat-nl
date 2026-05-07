import { Metadata } from "next";
import FAQClientPage from "./page.client";
import { pageAlternates } from "@/config/site";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op veelgestelde vragen over boottochten, boekingen en service van Salvador Ibiza op Ibiza.",
  alternates: pageAlternates("/faq"),
  robots: {
    index: true,
    follow: true,
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Welke boottochten bieden jullie op Ibiza aan?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "We bieden gedeelde dag- en zonsondergangtrips en volledig aanpasbare privétochten. Alle trips hebben professionele bemanning, materiaal en versnaperingen."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe lang duren de boottochten van Salvador Ibiza?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dag- en zonsondergangtrips duren ongeveer 3 uur. Privécharters zijn op maat, minimaal 3 uur."
      }
    },
    {
      "@type": "Question",
      "name": "Welke routes varen jullie?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Westkust (richting Cala Conta) of noordkust (richting Sa Foradada) met cala’s zoals Cala Gració en Cala Salada. De kapitein kiest de beste route. Privé: route in overleg."
      }
    },
    {
      "@type": "Question",
      "name": "Waar is het meetingpoint?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "De haven van San Antonio, Ibiza. Exacte locatie en instaptijd na bevestiging van je boeking."
      }
    },
    {
      "@type": "Question",
      "name": "Wat zit er in de prijs?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Gedeelde trips: kapitein, bemanning, brandstof, open bar, tapas & fruit, paddleboards, kajaks & snorkelen. Privé: vergelijkbaar met upgrade-opties."
      }
    },
    {
      "@type": "Question",
      "name": "Mag ik eigen eten en drinken meenemen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Eigen eten kan, vooral bij privé. Eigen drank niet toegestaan vanwege de open bar."
      }
    },
    {
      "@type": "Question",
      "name": "Hoe boek ik?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Boek online via de website met live beschikbaarheid. Je ontvangt een bevestiging met alle details."
      }
    },
    {
      "@type": "Question",
      "name": "Wat is de maximale capaciteit?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tot 35 passagiers op gedeelde trips; zie de specifieke trip-pagina’s."
      }
    },
    {
      "@type": "Question",
      "name": "Is er een toilet op de boot?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja, scheepstoiletten (WC) zijn aan boord."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn watersporten inbegrepen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja: paddleboards, kajaks en snorkelspullen tijdens zwemstops."
      }
    },
    {
      "@type": "Question",
      "name": "Zijn de trips veilig voor kinderen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ja; reddingsvesten en professionele bemanning. Geef leeftijden door bij boeking."
      }
    },
    {
      "@type": "Question",
      "name": "Wat moet ik meenemen?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Zwemkleding, handdoek, zonnebrand, pet, zonnebril, camera. Bij zeeziekte: preventief middel."
      }
    },
    {
      "@type": "Question",
      "name": "Wat bij slecht weer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Bij onveilige omstandigheden wordt geprobeerd te verzetten; anders volledige terugbetaling."
      }
    },
    {
      "@type": "Question",
      "name": "Wat kosten de trips?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Dag- en zonsondergang €80 per volwassene; kinderen 6–12 €45; 0–5 gratis. Privé vanaf €1.350. All-inclusive."
      }
    },
    {
      "@type": "Question",
      "name": "Wanneer het beste boeken?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Seizoen mei–oktober; voor juli–augustus ruim vooraf boeken."
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
