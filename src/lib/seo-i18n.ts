import type { PlainFaq } from "@/lib/faq-schema";
import type { SiteLocale } from "@/lib/site-locale";

export type PageSeoFields = {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
};

const OG_LOCALES: Record<
  SiteLocale,
  { locale: string; alternateLocale: string[] }
> = {
  en: { locale: "en_GB", alternateLocale: ["es_ES", "nl_NL", "fr_FR"] },
  es: { locale: "es_ES", alternateLocale: ["en_GB", "nl_NL", "fr_FR"] },
  nl: { locale: "nl_NL", alternateLocale: ["en_GB", "es_ES", "fr_FR"] },
  fr: { locale: "fr_FR", alternateLocale: ["en_GB", "es_ES", "nl_NL"] },
};

function pick<T>(record: Record<SiteLocale, T>, locale: SiteLocale): T {
  return record[locale] ?? record.en;
}

export function getOpenGraphLocales(locale: SiteLocale) {
  return pick(OG_LOCALES, locale);
}

// ─── Layout defaults ─────────────────────────────────────────────────────────

const LAYOUT_SEO: Record<SiteLocale, PageSeoFields> = {
  en: {
    title: "Salvador Ibiza - Boat Trips & Private Charter",
    description:
      "Experience the best boat trips and private charters in Ibiza with Salvador. All-inclusive excursions, stunning sunsets, and unforgettable memories.",
    keywords:
      "Salvador Ibiza, boat trips, private charter, Ibiza excursions, Ibiza trips, things to do in Ibiza, sunset cruise, Es Vedrà, boat rental",
  },
  es: {
    title: "Salvador Ibiza - Excursiones en Barco y Charter Privado",
    description:
      "Las mejores excursiones en barco y charters privados en Ibiza con Salvador. Paseos todo incluido, atardeceres únicos y recuerdos inolvidables.",
    keywords:
      "Salvador Ibiza, excursiones ibiza, paseo en barco ibiza, charter privado ibiza, excursiones en barco ibiza, viajes ibiza, qué hacer en ibiza, crucero atardecer, Es Vedrà",
  },
  nl: {
    title: "Salvador Ibiza - Boottochten & Privé Charter",
    description:
      "Beleef de beste boottochten en privé charters op Ibiza met Salvador. All-inclusive excursies, adembenemende zonsondergangen en onvergetelijke herinneringen.",
    keywords:
      "Salvador Ibiza, boottocht ibiza, boottrip ibiza, privé charter ibiza, excursies ibiza, dingen om te doen ibiza, zonsondergang cruise, Es Vedrà",
  },
  fr: {
    title: "Salvador Ibiza - Excursions en Bateau & Charter Privé",
    description:
      "Vivez les meilleures excursions en bateau et charters privés à Ibiza avec Salvador. Croisières tout inclus, couchers de soleil magiques et souvenirs inoubliables.",
    keywords:
      "Salvador Ibiza, excursion bateau ibiza, bateau ibiza, charter privé ibiza, excursions ibiza, que faire à ibiza, croisière coucher de soleil, Es Vedrà",
  },
};

export function getLayoutSeo(locale: SiteLocale): PageSeoFields {
  return pick(LAYOUT_SEO, locale);
}

// ─── Homepage ────────────────────────────────────────────────────────────────

const HOME_SEO: Record<SiteLocale, PageSeoFields> = {
  en: {
    title: "Salvador Ibiza - Boat Trips & Private Charter",
    description:
      "Experience the best boat trips and private charters in Ibiza with Salvador. All-inclusive excursions, stunning sunsets, and unforgettable memories.",
    keywords: LAYOUT_SEO.en.keywords,
  },
  es: {
    title: "Salvador Ibiza - Excursiones en Barco y Charter Privado",
    description:
      "Descubre las mejores excursiones en barco y charters privados en Ibiza con Salvador. Paseos todo incluido, atardeceres espectaculares y experiencias inolvidables.",
    keywords: LAYOUT_SEO.es.keywords,
  },
  nl: {
    title: "Salvador Ibiza - Boottochten & Privé Charter",
    description:
      "Beleef de beste boottochten en privé charters op Ibiza met Salvador. All-inclusive excursies, prachtige zonsondergangen en onvergetelijke momenten.",
    keywords: LAYOUT_SEO.nl.keywords,
  },
  fr: {
    title: "Salvador Ibiza - Excursions en Bateau & Charter Privé",
    description:
      "Découvrez les meilleures excursions en bateau et charters privés à Ibiza avec Salvador. Croisières tout inclus, couchers de soleil et souvenirs inoubliables.",
    keywords: LAYOUT_SEO.fr.keywords,
  },
};

export function getHomeSeo(locale: SiteLocale): PageSeoFields {
  return pick(HOME_SEO, locale);
}

export type HeroCopy = {
  h1Line1: string;
  h1Line2: string;
  subtitle: string;
  dayTripCta: string;
  sunsetCta: string;
};

const HERO_COPY: Record<SiteLocale, HeroCopy> = {
  en: {
    h1Line1: "Salvador Ibiza",
    h1Line2: "Boat Trips & Private Charter",
    subtitle:
      "All-inclusive day and sunset boat trips from San Antonio — paddleboards, snorkelling, open bar and tapas on a traditional wooden boat",
    dayTripCta: "Book Day Trip — from €80",
    sunsetCta: "Sunset Cruise — from €80",
  },
  es: {
    h1Line1: "Salvador Ibiza",
    h1Line2: "Excursiones en Barco y Charter Privado",
    subtitle:
      "Excursiones en barco de día y atardecer todo incluido desde San Antonio — paddle surf, snorkel, barra libre y tapas en un barco de madera tradicional",
    dayTripCta: "Reservar excursión de día — desde 80 €",
    sunsetCta: "Crucero al atardecer — desde 80 €",
  },
  nl: {
    h1Line1: "Salvador Ibiza",
    h1Line2: "Boottochten & Privé Charter",
    subtitle:
      "All-inclusive dag- en zonsondergangboottochten vanuit San Antonio — paddleboards, snorkelen, open bar en tapas op een traditionele houten boot",
    dayTripCta: "Dagtocht boeken — vanaf €80",
    sunsetCta: "Zonsondergang cruise — vanaf €80",
  },
  fr: {
    h1Line1: "Salvador Ibiza",
    h1Line2: "Excursions en Bateau & Charter Privé",
    subtitle:
      "Excursions en bateau de jour et au coucher du soleil tout inclus depuis San Antonio — paddle, snorkel, open bar et tapas sur un bateau en bois traditionnel",
    dayTripCta: "Réserver excursion de jour — dès 80 €",
    sunsetCta: "Croisière coucher de soleil — dès 80 €",
  },
};

export function getHeroCopy(locale: SiteLocale): HeroCopy {
  return pick(HERO_COPY, locale);
}

export type IntroCopy = {
  badge: string;
  h2Before: string;
  h2Brand: string;
  paragraph: string;
  planningLead: string;
  planningLink: string;
  planningTail: string;
  bookCta: string;
};

const INTRO_COPY: Record<SiteLocale, IntroCopy> = {
  en: {
    badge: "DISCOVER PARADISE",
    h2Before: "Welcome to",
    h2Brand: "Salvador Ibiza",
    paragraph:
      "Join us for unforgettable adventures on the crystal-clear waters of Ibiza. Our all-inclusive boat trips offer the perfect way to explore this magical island.",
    planningLead: "Planning your visit?",
    planningLink: "Discover the best things to do in Ibiza",
    planningTail: ", including our day and sunset boat trips.",
    bookCta: "Book Online",
  },
  es: {
    badge: "DESCUBRE EL PARAÍSO",
    h2Before: "Bienvenido a",
    h2Brand: "Salvador Ibiza",
    paragraph:
      "Vive aventuras inolvidables en las aguas cristalinas de Ibiza. Nuestras excursiones en barco todo incluido son la mejor forma de descubrir la isla.",
    planningLead: "¿Organizas tu viaje?",
    planningLink: "Descubre qué hacer en Ibiza",
    planningTail: ", incluidas nuestras excursiones de día y atardecer.",
    bookCta: "Reservar online",
  },
  nl: {
    badge: "ONTDEK HET PARADIJS",
    h2Before: "Welkom bij",
    h2Brand: "Salvador Ibiza",
    paragraph:
      "Beleef onvergetelijke avonturen op het kristalheldere water van Ibiza. Onze all-inclusive boottochten zijn de perfecte manier om dit magische eiland te ontdekken.",
    planningLead: "Je bezoek plannen?",
    planningLink: "Ontdek de beste dingen om te doen op Ibiza",
    planningTail: ", inclusief onze dag- en zonsondergangboottochten.",
    bookCta: "Online boeken",
  },
  fr: {
    badge: "DÉCOUVREZ LE PARADIS",
    h2Before: "Bienvenue chez",
    h2Brand: "Salvador Ibiza",
    paragraph:
      "Vivez des aventures inoubliables sur les eaux cristallines d'Ibiza. Nos excursions en bateau tout inclus sont la meilleure façon de découvrir cette île magique.",
    planningLead: "Vous préparez votre séjour ?",
    planningLink: "Découvrez les meilleures choses à faire à Ibiza",
    planningTail: ", y compris nos excursions de jour et au coucher du soleil.",
    bookCta: "Réserver en ligne",
  },
};

export function getIntroCopy(locale: SiteLocale): IntroCopy {
  return pick(INTRO_COPY, locale);
}

// ─── Day trip ────────────────────────────────────────────────────────────────

const DAY_TRIP_SEO: Record<SiteLocale, PageSeoFields> = {
  en: {
    title: "All-Inclusive Day Boat Trip Ibiza | Salvador",
    description:
      "⛵ Ultimate Ibiza day adventure! 3-hour all-inclusive boat trip with 15 paddle boards, snorkeling, unlimited drinks & Spanish tapas. From €80 - Book now!",
    ogTitle: "All-Inclusive Day Boat Trip Ibiza | Salvador",
    ogDescription:
      "⛵ Ultimate Ibiza day adventure! 3-hour all-inclusive boat trip with paddle boards, snorkeling, unlimited drinks & Spanish tapas.",
  },
  es: {
    title: "Excursión en Barco Día Todo Incluido Ibiza | Salvador",
    description:
      "⛵ ¡La mejor aventura diurna en Ibiza! Excursión en barco de 3 horas todo incluido con 15 paddle surf, snorkel, bebidas ilimitadas y tapas. Desde 80 € — ¡Reserva ya!",
    ogTitle: "Excursión en Barco Día Todo Incluido Ibiza | Salvador",
    ogDescription:
      "Excursión en barco de 3 horas todo incluido con paddle surf, snorkel, barra libre y tapas españolas en Ibiza.",
  },
  nl: {
    title: "All-Inclusive Dag Boottocht Ibiza | Salvador",
    description:
      "⛵ Ultieme dagervaring op Ibiza! 3 uur all-inclusive boottocht met 15 paddleboards, snorkelen, onbeperkt drinken en Spaanse tapas. Vanaf €80 — Boek nu!",
    ogTitle: "All-Inclusive Dag Boottocht Ibiza | Salvador",
    ogDescription:
      "3 uur all-inclusive boottocht met paddleboards, snorkelen, open bar en tapas op Ibiza.",
  },
  fr: {
    title: "Excursion Bateau Journée Tout Inclus Ibiza | Salvador",
    description:
      "⛵ L'aventure idéale à Ibiza ! Excursion en bateau de 3 h tout inclus avec 15 paddleboards, snorkel, boissons illimitées et tapas. Dès 80 € — Réservez !",
    ogTitle: "Excursion Bateau Journée Tout Inclus Ibiza | Salvador",
    ogDescription:
      "Excursion en bateau de 3 h tout inclus avec paddle, snorkel, open bar et tapas espagnoles à Ibiza.",
  },
};

export function getDayTripSeo(locale: SiteLocale): PageSeoFields {
  return pick(DAY_TRIP_SEO, locale);
}

export type TripHeroCopy = {
  h1Main: string;
  h1Accent: string;
  subtitle: string;
};

const DAY_TRIP_HERO: Record<SiteLocale, TripHeroCopy> = {
  en: {
    h1Main: "All-Inclusive Day",
    h1Accent: "Boat Trip Ibiza",
    subtitle:
      "Experience the authentic Mediterranean vibes aboard our traditional Balearic wooden boat",
  },
  es: {
    h1Main: "Excursión en Barco Día",
    h1Accent: "Todo Incluido Ibiza",
    subtitle:
      "Vive la auténtica experiencia mediterránea a bordo de nuestro barco de madera tradicional balear",
  },
  nl: {
    h1Main: "All-Inclusive Dag",
    h1Accent: "Boottocht Ibiza",
    subtitle:
      "Beleef de authentieke mediterrane sfeer aan boord van onze traditionele Balearen houten boot",
  },
  fr: {
    h1Main: "Excursion Bateau Journée",
    h1Accent: "Tout Inclus Ibiza",
    subtitle:
      "Vivez l'authenticité méditerranéenne à bord de notre bateau en bois traditionnel des Baléares",
  },
};

export function getDayTripHeroCopy(locale: SiteLocale): TripHeroCopy {
  return pick(DAY_TRIP_HERO, locale);
}

const DAY_TRIP_FAQS: Record<SiteLocale, PlainFaq[]> = {
  en: [
    {
      question: "What time does the day boat trip depart?",
      answer:
        "The all-inclusive day boat trip departs at 14:00 (2:00 PM) from San Antonio Port. Please arrive at least 30 minutes before departure. Times may vary slightly by month.",
    },
    {
      question: "What's included in the day boat trip price?",
      answer:
        "Unlimited drinks (sangria, beer, wine, cava, soft drinks, water), Spanish tapas, fresh fruit, paddleboards, kayaks, snorkelling gear, lounge beds, shaded areas and a premium sound system.",
    },
    {
      question: "What are the prices and age policies for the day trip?",
      answer:
        "Adults: €80. Children aged 6–12: €45. Children under 6 travel free. Life jackets are provided in all sizes.",
    },
    {
      question: "What should I bring on the day boat trip?",
      answer:
        "Bring swimwear, a towel, sunscreen, sunglasses and a hat. Outside food and drinks are not allowed as everything is included onboard.",
    },
    {
      question: "What is the day boat trip route?",
      answer:
        "The captain chooses the best route based on weather, typically exploring Ibiza's west coast including Cala Bassa and Cala Comte.",
    },
  ],
  es: [
    {
      question: "¿A qué hora sale la excursión en barco de día?",
      answer:
        "La excursión en barco de día todo incluido sale a las 14:00 desde el puerto de San Antonio. Llega al menos 30 minutos antes. El horario puede variar ligeramente según el mes.",
    },
    {
      question: "¿Qué incluye el precio de la excursión de día?",
      answer:
        "Bebidas ilimitadas (sangría, cerveza, vino, cava, refrescos, agua), tapas españolas, fruta fresca, paddle surf, kayaks, equipo de snorkel, tumbonas, zonas de sombra y sistema de sonido premium.",
    },
    {
      question: "¿Cuáles son los precios y política de edades?",
      answer:
        "Adultos: 80 €. Niños de 6 a 12 años: 45 €. Menores de 6 años gratis. Chalecos salvavidas en todas las tallas.",
    },
    {
      question: "¿Qué debo llevar a la excursión de día?",
      answer:
        "Traje de baño, toalla, protector solar, gafas de sol y gorra. No se permite comida ni bebida externa porque todo está incluido a bordo.",
    },
    {
      question: "¿Cuál es la ruta de la excursión de día?",
      answer:
        "El capitán elige la mejor ruta según el tiempo, normalmente por la costa oeste de Ibiza incluyendo Cala Bassa y Cala Comte.",
    },
  ],
  nl: [
    {
      question: "Hoe laat vertrekt de dagboottocht?",
      answer:
        "De all-inclusive dagboottocht vertrekt om 14:00 uur vanuit de haven van San Antonio. Kom minstens 30 minuten van tevoren. Tijden kunnen per maand iets variëren.",
    },
    {
      question: "Wat is inbegrepen in de prijs?",
      answer:
        "Onbeperkt drinken (sangria, bier, wijn, cava, frisdrank, water), Spaanse tapas, vers fruit, paddleboards, kajaks, snorkelspullen, ligbedden, schaduwplekken en premium geluidssysteem.",
    },
    {
      question: "Wat zijn de prijzen en leeftijdsregels?",
      answer:
        "Volwassenen: €80. Kinderen 6–12 jaar: €45. Kinderen onder 6 gratis. Zwemvesten in alle maten.",
    },
    {
      question: "Wat moet ik meenemen?",
      answer:
        "Zwemkleding, handdoek, zonnebrand, zonnebril en hoed. Eigen eten en drinken is niet toegestaan — alles is inbegrepen.",
    },
    {
      question: "Welke route vaart de dagtocht?",
      answer:
        "De kapitein kiest de beste route op basis van het weer, meestal langs de westkust van Ibiza met Cala Bassa en Cala Comte.",
    },
  ],
  fr: [
    {
      question: "À quelle heure part l'excursion de jour ?",
      answer:
        "L'excursion en bateau tout inclus part à 14h00 du port de San Antonio. Arrivez au moins 30 minutes avant. L'horaire peut varier légèrement selon le mois.",
    },
    {
      question: "Qu'est-ce qui est inclus dans le prix ?",
      answer:
        "Boissons illimitées (sangria, bière, vin, cava, softs, eau), tapas espagnoles, fruits frais, paddleboards, kayaks, équipement de snorkel, transats, zones ombragées et son premium.",
    },
    {
      question: "Quels sont les tarifs et règles d'âge ?",
      answer:
        "Adultes : 80 €. Enfants 6–12 ans : 45 €. Moins de 6 ans gratuit. Gilets de sauvetage toutes tailles.",
    },
    {
      question: "Que dois-je apporter ?",
      answer:
        "Maillot, serviette, crème solaire, lunettes de soleil et chapeau. Nourriture et boissons extérieures interdites — tout est inclus à bord.",
    },
    {
      question: "Quel est l'itinéraire de l'excursion ?",
      answer:
        "Le capitaine choisit la meilleure route selon la météo, en général la côte ouest d'Ibiza avec Cala Bassa et Cala Comte.",
    },
  ],
};

export function getDayTripFaqs(locale: SiteLocale): PlainFaq[] {
  return pick(DAY_TRIP_FAQS, locale);
}

// ─── Sunset trip ─────────────────────────────────────────────────────────────

const SUNSET_TRIP_SEO: Record<SiteLocale, PageSeoFields> = {
  en: {
    title: "Ibiza Sunset Boat Trip (All-Inclusive) | Salvador",
    description:
      "🌅 Experience Ibiza's legendary sunset from the sea! 3-hour all-inclusive cruise with unlimited drinks, Spanish tapas & paddle boards. Book now from €80!",
    ogTitle: "Ibiza Sunset Boat Trip (All-Inclusive) | Salvador",
    ogDescription:
      "🌅 Experience Ibiza's legendary sunset from the sea! 3-hour all-inclusive cruise with unlimited drinks, Spanish tapas & paddle boards.",
  },
  es: {
    title: "Excursión en Barco al Atardecer Ibiza (Todo Incluido) | Salvador",
    description:
      "🌅 ¡Vive el legendario atardecer de Ibiza desde el mar! Crucero de 3 horas todo incluido con barra libre, tapas y paddle surf. Reserva desde 80 €.",
    ogTitle: "Excursión en Barco al Atardecer Ibiza | Salvador",
    ogDescription:
      "Crucero de 3 horas todo incluido al atardecer con barra libre, tapas españolas y paddle surf en Ibiza.",
  },
  nl: {
    title: "Ibiza Zonsondergang Boottocht (All-Inclusive) | Salvador",
    description:
      "🌅 Beleef de legendarische zonsondergang van Ibiza vanaf zee! 3 uur all-inclusive cruise met open bar, tapas en paddleboards. Boek vanaf €80!",
    ogTitle: "Ibiza Zonsondergang Boottocht | Salvador",
    ogDescription:
      "3 uur all-inclusive zonsondergangcruise met open bar, tapas en paddleboards op Ibiza.",
  },
  fr: {
    title: "Excursion Bateau Coucher de Soleil Ibiza (Tout Inclus) | Salvador",
    description:
      "🌅 Vivez le coucher de soleil légendaire d'Ibiza depuis la mer ! Croisière 3 h tout inclus avec open bar, tapas et paddleboards. Réservez dès 80 €.",
    ogTitle: "Excursion Bateau Coucher de Soleil Ibiza | Salvador",
    ogDescription:
      "Croisière 3 h tout inclus au coucher du soleil avec open bar, tapas et paddleboards à Ibiza.",
  },
};

export function getSunsetTripSeo(locale: SiteLocale): PageSeoFields {
  return pick(SUNSET_TRIP_SEO, locale);
}

const SUNSET_TRIP_HERO: Record<SiteLocale, TripHeroCopy> = {
  en: {
    h1Main: "Ibiza Sunset",
    h1Accent: "Boat Trip",
    subtitle:
      "Experience the magic of Ibiza's sunset from the sea aboard our traditional wooden boat.",
  },
  es: {
    h1Main: "Excursión en Barco",
    h1Accent: "al Atardecer Ibiza",
    subtitle:
      "Vive la magia del atardecer de Ibiza desde el mar a bordo de nuestro barco de madera tradicional.",
  },
  nl: {
    h1Main: "Ibiza Zonsondergang",
    h1Accent: "Boottocht",
    subtitle:
      "Beleef de magie van de zonsondergang van Ibiza vanaf zee aan boord van onze traditionele houten boot.",
  },
  fr: {
    h1Main: "Excursion Bateau",
    h1Accent: "Coucher de Soleil Ibiza",
    subtitle:
      "Vivez la magie du coucher de soleil d'Ibiza depuis la mer à bord de notre bateau en bois traditionnel.",
  },
};

export function getSunsetTripHeroCopy(locale: SiteLocale): TripHeroCopy {
  return pick(SUNSET_TRIP_HERO, locale);
}

const SUNSET_TRIP_FAQS: Record<SiteLocale, PlainFaq[]> = {
  en: [
    {
      question: "What time does the sunset boat trip depart?",
      answer:
        "Departure is typically between 5:00 PM and 6:30 PM depending on the month, timed to catch Ibiza's golden hour. Please arrive 30 minutes before boarding.",
    },
    {
      question: "Where does the Ibiza sunset boat trip go?",
      answer:
        "The captain selects the best route daily — either north towards Cala Salada and Punta Galera or west towards Cala Bassa and Cala Comte — positioning in front of Café Mambo and Café del Mar for the sunset.",
    },
    {
      question: "What food and drinks are included on the sunset trip?",
      answer:
        "Unlimited drinks including beer, wine, cava, sangria, soft drinks and water, plus Spanish tapas and fresh fruit.",
    },
    {
      question: "Are there water activities on the sunset boat trip?",
      answer:
        "Yes. When sea conditions and time allow, we stop for swimming, snorkelling, paddleboarding and kayaking before sunset.",
    },
    {
      question: "What should I bring on the sunset boat trip?",
      answer:
        "Comfortable clothing, swimwear, a towel, sunglasses and a light jacket for after sunset. Outside food and drinks are not permitted.",
    },
  ],
  es: [
    {
      question: "¿A qué hora sale la excursión al atardecer?",
      answer:
        "La salida suele ser entre las 17:00 y las 18:30 según el mes, programada para el mejor atardecer. Llega 30 minutos antes del embarque.",
    },
    {
      question: "¿Por dónde navega la excursión al atardecer?",
      answer:
        "El capitán elige la mejor ruta cada día — norte hacia Cala Salada y Punta Galera u oeste hacia Cala Bassa y Cala Comte — posicionándose frente a Café Mambo y Café del Mar.",
    },
    {
      question: "¿Qué comida y bebida incluye?",
      answer:
        "Bebidas ilimitadas (cerveza, vino, cava, sangría, refrescos, agua) más tapas españolas y fruta fresca.",
    },
    {
      question: "¿Hay actividades acuáticas?",
      answer:
        "Sí. Si el mar y el tiempo lo permiten, paramos para nadar, hacer snorkel, paddle surf y kayak antes del atardecer.",
    },
    {
      question: "¿Qué debo llevar?",
      answer:
        "Ropa cómoda, traje de baño, toalla, gafas de sol y una chaqueta ligera para después del atardecer. No se permite comida ni bebida externa.",
    },
  ],
  nl: [
    {
      question: "Hoe laat vertrekt de zonsondergangboottocht?",
      answer:
        "Vertrek is meestal tussen 17:00 en 18:30 uur, afgestemd op het gouden uur. Kom 30 minuten voor boarding.",
    },
    {
      question: "Welke route vaart de zonsondergangtocht?",
      answer:
        "De kapitein kiest dagelijks de beste route — noord naar Cala Salada of west naar Cala Bassa en Cala Comte — met uitzicht op Café Mambo en Café del Mar.",
    },
    {
      question: "Wat is inbegrepen aan eten en drinken?",
      answer:
        "Onbeperkt drinken (bier, wijn, cava, sangria, frisdrank, water) plus Spaanse tapas en vers fruit.",
    },
    {
      question: "Zijn er wateractiviteiten?",
      answer:
        "Ja. Bij goede omstandigheden stoppen we voor zwemmen, snorkelen, paddleboarden en kajakken vóór zonsondergang.",
    },
    {
      question: "Wat moet ik meenemen?",
      answer:
        "Comfortabele kleding, zwemkleding, handdoek, zonnebril en een licht jasje na zonsondergang. Eigen eten en drinken niet toegestaan.",
    },
  ],
  fr: [
    {
      question: "À quelle heure part l'excursion coucher de soleil ?",
      answer:
        "Le départ est généralement entre 17h00 et 18h30 selon le mois, pour l'heure dorée. Arrivez 30 minutes avant l'embarquement.",
    },
    {
      question: "Quel itinéraire pour le coucher de soleil ?",
      answer:
        "Le capitaine choisit la meilleure route — nord vers Cala Salada ou ouest vers Cala Bassa et Cala Comte — face au Café Mambo et Café del Mar.",
    },
    {
      question: "Qu'est-ce qui est inclus ?",
      answer:
        "Boissons illimitées (bière, vin, cava, sangria, softs, eau) plus tapas espagnoles et fruits frais.",
    },
    {
      question: "Y a-t-il des activités nautiques ?",
      answer:
        "Oui. Si la mer le permet, arrêt pour nager, snorkel, paddle et kayak avant le coucher du soleil.",
    },
    {
      question: "Que dois-je apporter ?",
      answer:
        "Vêtements confortables, maillot, serviette, lunettes de soleil et veste légère après le coucher du soleil. Nourriture et boissons extérieures interdites.",
    },
  ],
};

export function getSunsetTripFaqs(locale: SiteLocale): PlainFaq[] {
  return pick(SUNSET_TRIP_FAQS, locale);
}

// ─── Things to do ────────────────────────────────────────────────────────────

const THINGS_TO_DO_SEO: Record<SiteLocale, PageSeoFields> = {
  en: {
    title: "Things to Do in Ibiza | Best Ibiza Trips & Boat Tours",
    description:
      "Discover the best things to do in Ibiza — from all-inclusive boat trips and sunset cruises to family-friendly sea adventures. Plan your perfect Ibiza trip with Salvador.",
    keywords:
      "things to do in ibiza, things to do in ibiza spain, ibiza trips, best ibiza trips, ibiza activities, boat trips ibiza, what to do in ibiza",
    ogTitle: "Things to Do in Ibiza | Best Ibiza Trips & Experiences",
    ogDescription:
      "Plan the perfect Ibiza trip with our guide to the best things to do — boat trips, sunsets, snorkelling and hidden coves from San Antonio.",
  },
  es: {
    title: "Qué Hacer en Ibiza | Mejores Viajes y Excursiones en Barco",
    description:
      "Descubre qué hacer en Ibiza — excursiones en barco todo incluido, cruceros al atardecer y aventuras en familia. Planifica tu viaje perfecto con Salvador.",
    keywords:
      "qué hacer en ibiza, cosas que hacer en ibiza, viajes ibiza, excursiones ibiza, actividades ibiza, paseo en barco ibiza, excursiones en barco ibiza",
    ogTitle: "Qué Hacer en Ibiza | Mejores Experiencias y Excursiones",
    ogDescription:
      "Guía de qué hacer en Ibiza: excursiones en barco, atardeceres, snorkel y calas secretas desde San Antonio.",
  },
  nl: {
    title: "Dingen om te Doen op Ibiza | Beste Boottochten & Ervaringen",
    description:
      "Ontdek de beste dingen om te doen op Ibiza — all-inclusive boottochten, zonsondergangcruises en gezinsvriendelijke avonturen. Plan je perfecte Ibiza-reis met Salvador.",
    keywords:
      "dingen om te doen ibiza, ibiza reizen, ibiza activiteiten, boottocht ibiza, wat te doen ibiza, excursies ibiza",
    ogTitle: "Dingen om te Doen op Ibiza | Beste Ervaringen",
    ogDescription:
      "Plan je Ibiza-reis: boottochten, zonsondergangen, snorkelen en verborgen baaien vanuit San Antonio.",
  },
  fr: {
    title: "Que Faire à Ibiza | Meilleures Excursions & Croisières",
    description:
      "Découvrez les meilleures choses à faire à Ibiza — excursions en bateau tout inclus, couchers de soleil et aventures en famille. Planifiez votre séjour avec Salvador.",
    keywords:
      "que faire à ibiza, choses à faire ibiza, voyages ibiza, excursions ibiza, activités ibiza, excursion bateau ibiza, bateau ibiza",
    ogTitle: "Que Faire à Ibiza | Meilleures Expériences",
    ogDescription:
      "Guide des meilleures activités à Ibiza : excursions en bateau, couchers de soleil, snorkel et criques secrètes depuis San Antonio.",
  },
};

export function getThingsToDoSeo(locale: SiteLocale): PageSeoFields {
  return pick(THINGS_TO_DO_SEO, locale);
}

export type ThingsToDoCopy = {
  heroH1: string;
  heroSubtitle: string;
  heroImageAlt: string;
  section1H2: string;
  section1Text: string;
  section2H2: string;
  experiences: { title: string; description: string; cta: string }[];
  tripIdeas: { title: string; text: string; label: string }[];
  faqTitle: string;
  footerLink: string;
};

const THINGS_TO_DO_COPY: Record<SiteLocale, ThingsToDoCopy> = {
  en: {
    heroH1: "Things to Do in Ibiza",
    heroSubtitle:
      "Plan the best Ibiza trips — from all-inclusive boat adventures and sunset cruises to family-friendly days on the Mediterranean",
    heroImageAlt: "Aerial view of Salvador Ibiza boat trip in turquoise waters",
    section1H2: "Best Ibiza Trips & Experiences",
    section1Text:
      "Ibiza is famous for beaches, sunsets and hidden coves — and the best way to experience them is from the sea. Salvador Ibiza offers all-inclusive boat trips departing daily from San Antonio.",
    section2H2: "Plan Your Ibiza Trip",
    experiences: [
      {
        title: "All-Inclusive Day Boat Trip",
        description:
          "Swim in crystal-clear coves, snorkel, paddleboard and enjoy tapas with an open bar on a 3-hour cruise from San Antonio.",
        cta: "Explore Day Trip",
      },
      {
        title: "Ibiza Sunset Boat Trip",
        description:
          "Watch Ibiza's legendary sunset from the sea with cava, tapas and optional swim stops — one of the island's must-do experiences.",
        cta: "Explore Sunset Trip",
      },
      {
        title: "Family Boat Trips",
        description:
          "Kid-friendly swim stops, life jackets for all ages, paddleboards and a relaxed atmosphere — perfect for families visiting Ibiza.",
        cta: "Family Trips",
      },
      {
        title: "Private Boat Charter",
        description:
          "Customize your own Ibiza trip with a private charter — ideal for couples, birthdays, corporate groups or special celebrations.",
        cta: "Private Charters",
      },
      {
        title: "Coastal Routes & Hidden Coves",
        description:
          "Explore Ibiza's west coast (Cala Comte) and north coast (Es Vedrà, Sa Foradada) on routes only accessible by boat.",
        cta: "View Routes",
      },
    ],
    tripIdeas: [
      {
        title: "First time in Ibiza?",
        text: "Start with our boat trips hub to compare day and sunset options, then book the trip that fits your schedule.",
        label: "All Boat Trips",
      },
      {
        title: "Visiting San Antonio?",
        text: "We depart from San Antonio port — the best base for west-coast beaches, sunsets and boat excursions.",
        label: "San Antonio Departures",
      },
      {
        title: "Want inspiration?",
        text: "Read our blog for guides on hidden coves, sunset sailing and the best daytime adventures in Ibiza.",
        label: "Ibiza Travel Blog",
      },
    ],
    faqTitle: "Things to Do in Ibiza — FAQs",
    footerLink: "Things to Do in Ibiza",
  },
  es: {
    heroH1: "Qué Hacer en Ibiza",
    heroSubtitle:
      "Planifica los mejores viajes por Ibiza — excursiones en barco todo incluido, atardeceres y días en familia en el Mediterráneo",
    heroImageAlt: "Vista aérea de Salvador Ibiza navegando en aguas turquesas",
    section1H2: "Mejores Viajes y Experiencias en Ibiza",
    section1Text:
      "Ibiza es famosa por sus playas, atardeceres y calas secretas — y la mejor forma de vivirlas es desde el mar. Salvador Ibiza ofrece excursiones en barco todo incluido desde San Antonio.",
    section2H2: "Planifica tu Viaje a Ibiza",
    experiences: [
      {
        title: "Excursión en Barco de Día Todo Incluido",
        description:
          "Nada en calas cristalinas, haz snorkel y paddle surf con tapas y barra libre en un crucero de 3 horas desde San Antonio.",
        cta: "Ver excursión de día",
      },
      {
        title: "Excursión en Barco al Atardecer",
        description:
          "Contempla el legendario atardecer de Ibiza desde el mar con cava, tapas y paradas para bañarte — una experiencia imprescindible.",
        cta: "Ver excursión atardecer",
      },
      {
        title: "Excursiones en Familia",
        description:
          "Paradas tranquilas para niños, chalecos en todas las tallas, paddle surf y ambiente relajado — ideal para familias.",
        cta: "Excursiones familiares",
      },
      {
        title: "Charter Privado",
        description:
          "Personaliza tu viaje por Ibiza con un barco privado — perfecto para parejas, cumpleaños, empresas o celebraciones.",
        cta: "Charters privados",
      },
      {
        title: "Rutas Costeras y Calas Secretas",
        description:
          "Explora la costa oeste (Cala Comte) y norte (Es Vedrà, Sa Foradada) en rutas solo accesibles en barco.",
        cta: "Ver rutas",
      },
    ],
    tripIdeas: [
      {
        title: "¿Primera vez en Ibiza?",
        text: "Empieza en nuestra página de excursiones para comparar opciones de día y atardecer, y reserva la que mejor encaje.",
        label: "Todas las excursiones",
      },
      {
        title: "¿Visitas San Antonio?",
        text: "Salimos del puerto de San Antonio — la mejor base para playas de la costa oeste, atardeceres y excursiones en barco.",
        label: "Salidas San Antonio",
      },
      {
        title: "¿Buscas inspiración?",
        text: "Lee nuestro blog con guías de calas secretas, navegación al atardecer y las mejores aventuras diurnas en Ibiza.",
        label: "Blog de viajes",
      },
    ],
    faqTitle: "Qué Hacer en Ibiza — Preguntas Frecuentes",
    footerLink: "Qué Hacer en Ibiza",
  },
  nl: {
    heroH1: "Dingen om te Doen op Ibiza",
    heroSubtitle:
      "Plan de beste Ibiza-reizen — all-inclusive bootavonturen, zonsondergangcruises en gezinsvriendelijke dagen op de Middellandse Zee",
    heroImageAlt: "Luchtfoto van Salvador Ibiza boottocht in turquoise water",
    section1H2: "Beste Ibiza-reizen & Ervaringen",
    section1Text:
      "Ibiza staat bekend om stranden, zonsondergangen en verborgen baaien — en de beste manier om ze te beleven is vanaf zee. Salvador Ibiza biedt all-inclusive boottochten vanuit San Antonio.",
    section2H2: "Plan je Ibiza-reis",
    experiences: [
      {
        title: "All-Inclusive Dag Boottocht",
        description:
          "Zwem in kristalheldere baaien, snorkel en paddleboard met tapas en open bar op een 3-uur cruise vanuit San Antonio.",
        cta: "Dagtocht bekijken",
      },
      {
        title: "Ibiza Zonsondergang Boottocht",
        description:
          "Bekijk de legendarische zonsondergang van Ibiza vanaf zee met cava, tapas en zwemstops — een must-do op het eiland.",
        cta: "Zonsondergang bekijken",
      },
      {
        title: "Gezinsboottochten",
        description:
          "Kindvriendelijke zwemstops, zwemvesten, paddleboards en een ontspannen sfeer — perfect voor gezinnen.",
        cta: "Gezinstochten",
      },
      {
        title: "Privé Boot Charter",
        description:
          "Stel je eigen Ibiza-reis samen met een privé charter — ideaal voor koppels, verjaardagen of bedrijfsuitjes.",
        cta: "Privé charters",
      },
      {
        title: "Kustroutes & Verborgen Baaien",
        description:
          "Verken de westkust (Cala Comte) en noordkust (Es Vedrà, Sa Foradada) op routes alleen per boot bereikbaar.",
        cta: "Routes bekijken",
      },
    ],
    tripIdeas: [
      {
        title: "Eerste keer op Ibiza?",
        text: "Begin bij ons boottochten-overzicht om dag- en zonsondergangopties te vergelijken en boek wat bij je past.",
        label: "Alle boottochten",
      },
      {
        title: "Bezoek je San Antonio?",
        text: "We vertrekken vanuit de haven van San Antonio — de beste uitvalsbasis voor westkuststranden en bootexcursies.",
        label: "Vertrek San Antonio",
      },
      {
        title: "Inspiratie nodig?",
        text: "Lees onze blog over verborgen baaien, zonsondergang zeilen en de beste dagavonturen op Ibiza.",
        label: "Ibiza reisblog",
      },
    ],
    faqTitle: "Dingen om te Doen op Ibiza — FAQ",
    footerLink: "Dingen om te Doen op Ibiza",
  },
  fr: {
    heroH1: "Que Faire à Ibiza",
    heroSubtitle:
      "Planifiez les meilleures expériences à Ibiza — excursions tout inclus, couchers de soleil et journées en famille en Méditerranée",
    heroImageAlt: "Vue aérienne de Salvador Ibiza en eaux turquoise",
    section1H2: "Meilleures Expériences à Ibiza",
    section1Text:
      "Ibiza est célèbre pour ses plages, couchers de soleil et criques secrètes — et la meilleure façon de les vivre est depuis la mer. Salvador Ibiza propose des excursions tout inclus depuis San Antonio.",
    section2H2: "Planifiez votre Séjour à Ibiza",
    experiences: [
      {
        title: "Excursion Bateau Journée Tout Inclus",
        description:
          "Nagez dans des criques cristallines, snorkel et paddle avec tapas et open bar lors d'une croisière de 3 h depuis San Antonio.",
        cta: "Voir excursion jour",
      },
      {
        title: "Excursion Bateau Coucher de Soleil",
        description:
          "Admirez le coucher de soleil légendaire d'Ibiza depuis la mer avec cava, tapas et arrêts baignade — incontournable.",
        cta: "Voir coucher de soleil",
      },
      {
        title: "Excursions en Famille",
        description:
          "Arrêts baignade adaptés aux enfants, gilets toutes tailles, paddleboards et ambiance détendue — parfait pour les familles.",
        cta: "Excursions famille",
      },
      {
        title: "Charter Privé",
        description:
          "Personnalisez votre excursion à Ibiza en privé — idéal pour couples, anniversaires, entreprises ou célébrations.",
        cta: "Charters privés",
      },
      {
        title: "Routes Côtières & Criques Secrètes",
        description:
          "Explorez la côte ouest (Cala Comte) et nord (Es Vedrà, Sa Foradada) sur des routes accessibles uniquement en bateau.",
        cta: "Voir les routes",
      },
    ],
    tripIdeas: [
      {
        title: "Première fois à Ibiza ?",
        text: "Commencez par notre page excursions pour comparer jour et coucher de soleil, puis réservez selon votre planning.",
        label: "Toutes les excursions",
      },
      {
        title: "Vous visitez San Antonio ?",
        text: "Nous partons du port de San Antonio — la meilleure base pour les plages ouest et les excursions en bateau.",
        label: "Départs San Antonio",
      },
      {
        title: "Besoin d'inspiration ?",
        text: "Lisez notre blog : criques secrètes, navigation au coucher du soleil et meilleures aventures de jour à Ibiza.",
        label: "Blog voyage Ibiza",
      },
    ],
    faqTitle: "Que Faire à Ibiza — FAQ",
    footerLink: "Que Faire à Ibiza",
  },
};

const EXPERIENCE_HREFS = [
  "/boat-trips/day-trip",
  "/boat-trips/sunset-trip",
  "/boat-trips/family",
  "/private-boat-trips",
  "/routes",
] as const;

const TRIP_IDEA_HREFS = ["/boat-trips", "/boat-trips/san-antonio", "/blog"] as const;

export function getThingsToDoCopy(locale: SiteLocale) {
  const copy = pick(THINGS_TO_DO_COPY, locale);
  return {
    ...copy,
    experiences: copy.experiences.map((exp, i) => ({
      ...exp,
      href: EXPERIENCE_HREFS[i],
    })),
    tripIdeas: copy.tripIdeas.map((idea, i) => ({
      ...idea,
      href: TRIP_IDEA_HREFS[i],
    })),
  };
}

const THINGS_TO_DO_FAQS: Record<SiteLocale, PlainFaq[]> = {
  en: [
    {
      question: "What are the best things to do in Ibiza?",
      answer:
        "Top experiences include boat trips to hidden coves, sunset cruises, snorkelling, visiting Es Vedrà, exploring San Antonio's beaches and booking an all-inclusive day or sunset trip with Salvador Ibiza.",
    },
    {
      question: "What Ibiza trips should I book?",
      answer:
        "Book a day boat trip for swimming and water sports, a sunset cruise for golden-hour views, or a family boat trip if travelling with children.",
    },
    {
      question: "Are boat trips worth it in Ibiza?",
      answer:
        "Absolutely. Boat trips reach beaches and coves you cannot access by road, and include swimming, snorkelling and Ibiza's famous sunsets. Salvador Ibiza packs drinks, tapas and equipment into one all-inclusive ticket from €80.",
    },
    {
      question: "Where do the best Ibiza boat trips depart from?",
      answer:
        "San Antonio on the west coast is ideal for boat trips with access to Cala Comte, Cala Salada and sunset viewpoints. Salvador Ibiza departs from San Antonio port daily.",
    },
  ],
  es: [
    {
      question: "¿Qué hacer en Ibiza?",
      answer:
        "Las mejores experiencias incluyen excursiones en barco a calas secretas, cruceros al atardecer, snorkel, visitar Es Vedrà, explorar San Antonio y reservar una excursión todo incluido con Salvador Ibiza.",
    },
    {
      question: "¿Qué viajes por Ibiza debería reservar?",
      answer:
        "Reserva una excursión de día para nadar y hacer deportes acuáticos, un crucero al atardecer para las mejores vistas, o una excursión familiar si viajas con niños.",
    },
    {
      question: "¿Merece la pena hacer una excursión en barco en Ibiza?",
      answer:
        "Sí. Las excursiones en barco llegan a playas y calas inaccesibles por carretera e incluyen baño, snorkel y los famosos atardeceres. Salvador Ibiza incluye bebidas, tapas y equipo desde 80 €.",
    },
    {
      question: "¿Desde dónde salen las mejores excursiones en barco?",
      answer:
        "San Antonio en la costa oeste es ideal, con acceso a Cala Comte, Cala Salada y los mejores atardeceres. Salvador Ibiza sale diariamente del puerto de San Antonio.",
    },
  ],
  nl: [
    {
      question: "Wat zijn de beste dingen om te doen op Ibiza?",
      answer:
        "Topervaringen: boottochten naar verborgen baaien, zonsondergangcruises, snorkelen, Es Vedrà, San Antonio en een all-inclusive dag- of zonsondergangtocht met Salvador Ibiza.",
    },
    {
      question: "Welke Ibiza-reizen moet ik boeken?",
      answer:
        "Boek een dagboottocht voor zwemmen en watersport, een zonsondergangcruise voor het gouden uur, of een gezinstocht met kinderen.",
    },
    {
      question: "Zijn boottochten de moeite waard op Ibiza?",
      answer:
        "Absoluut. Boottochten bereiken stranden en baaien die je niet per weg bereikt, met zwemmen, snorkelen en zonsondergangen. Salvador Ibiza: drank, tapas en materiaal vanaf €80.",
    },
    {
      question: "Vanwaar vertrekken de beste boottochten?",
      answer:
        "San Antonio aan de westkust is ideaal met Cala Comte, Cala Salada en zonsondergangpunten. Salvador Ibiza vertrekt dagelijks vanuit de haven van San Antonio.",
    },
  ],
  fr: [
    {
      question: "Que faire à Ibiza ?",
      answer:
        "Les meilleures expériences : excursions vers criques secrètes, couchers de soleil, snorkel, Es Vedrà, San Antonio et excursion tout inclus jour ou coucher de soleil avec Salvador Ibiza.",
    },
    {
      question: "Quelles excursions réserver à Ibiza ?",
      answer:
        "Réservez une excursion de jour pour nager et faire du sport nautique, une croisière coucher de soleil, ou une excursion famille avec enfants.",
    },
    {
      question: "Les excursions en bateau valent-elles le coup à Ibiza ?",
      answer:
        "Oui. Les bateaux atteignent plages et criques inaccessibles par la route, avec baignade, snorkel et couchers de soleil. Salvador Ibiza : boissons, tapas et équipement dès 80 €.",
    },
    {
      question: "D'où partent les meilleures excursions ?",
      answer:
        "San Antonio sur la côte ouest est idéal avec Cala Comte, Cala Salada et points de vue coucher de soleil. Salvador Ibiza part quotidiennement du port de San Antonio.",
    },
  ],
};

export function getThingsToDoFaqs(locale: SiteLocale): PlainFaq[] {
  return pick(THINGS_TO_DO_FAQS, locale);
}

// ─── Homepage FAQs (schema) ──────────────────────────────────────────────────

const HOME_FAQS: Record<SiteLocale, PlainFaq[]> = {
  en: [
    {
      question: "What is the best boat trip in Ibiza for families?",
      answer:
        "Look for calm swim stops, life jackets for all ages and a relaxed atmosphere. Salvador Ibiza offers 3-hour all-inclusive family-friendly day trips from San Antonio with paddleboards, kayaks, snorkelling, tapas and an open bar.",
    },
    {
      question: "What kind of boat trips does Salvador Ibiza offer?",
      answer:
        "We offer all-inclusive shared day trips, sunset cruises and fully customizable private charters departing from San Antonio port in Ibiza.",
    },
    {
      question: "What's included in the price?",
      answer:
        "Captain and crew, fuel, unlimited open bar, Spanish tapas, fresh fruit, paddleboards, kayaks and snorkelling equipment. Private trips offer optional premium upgrades.",
    },
    {
      question: "How long do Salvador Ibiza boat trips last?",
      answer:
        "Day trips and sunset trips last around 3 hours each. Private charters can be tailored with a minimum of 3 hours.",
    },
    {
      question: "Where is the meeting point?",
      answer:
        "Our meeting point is at the port of San Antonio, Ibiza. The exact boarding location and directions are on our contact page and confirmed on your booking voucher.",
    },
    {
      question: "How can I book a Salvador Ibiza boat trip?",
      answer:
        "Book online through salvadoribiza.com/book-now using our secure booking widgets with live availability. You receive a confirmation voucher with all details.",
    },
    {
      question: "What should we bring on a boat trip?",
      answer:
        "Bring swimwear, a towel, sunscreen, a hat, sunglasses and a camera. Consider seasickness medication if needed.",
    },
  ],
  es: [
    {
      question: "¿Cuál es la mejor excursión en barco en Ibiza para familias?",
      answer:
        "Busca paradas tranquilas, chalecos para todas las edades y ambiente relajado. Salvador Ibiza ofrece excursiones de día de 3 horas todo incluido desde San Antonio con paddle surf, kayaks, snorkel, tapas y barra libre.",
    },
    {
      question: "¿Qué excursiones ofrece Salvador Ibiza?",
      answer:
        "Ofrecemos excursiones compartidas de día todo incluido, cruceros al atardecer y charters privados personalizables desde el puerto de San Antonio.",
    },
    {
      question: "¿Qué incluye el precio?",
      answer:
        "Patrón y tripulación, combustible, barra libre, tapas españolas, fruta fresca, paddle surf, kayaks y equipo de snorkel. Los charters privados tienen opciones premium.",
    },
    {
      question: "¿Cuánto duran las excursiones?",
      answer:
        "Las excursiones de día y atardecer duran unas 3 horas. Los charters privados se adaptan con un mínimo de 3 horas.",
    },
    {
      question: "¿Dónde es el punto de encuentro?",
      answer:
        "En el puerto de San Antonio, Ibiza. La ubicación exacta está en la página de contacto y en tu voucher de reserva.",
    },
    {
      question: "¿Cómo reservo una excursión?",
      answer:
        "Reserva online en salvadoribiza.com/book-now con disponibilidad en tiempo real. Recibirás un voucher de confirmación con todos los detalles.",
    },
    {
      question: "¿Qué debemos llevar?",
      answer:
        "Traje de baño, toalla, protector solar, gorra, gafas de sol y cámara. Considera medicación para el mareo si lo necesitas.",
    },
  ],
  nl: [
    {
      question: "Wat is de beste boottocht op Ibiza voor gezinnen?",
      answer:
        "Zoek rustige zwemstops, zwemvesten en een ontspannen sfeer. Salvador Ibiza biedt 3 uur all-inclusive dagtochten vanuit San Antonio met paddleboards, kajaks, snorkelen, tapas en open bar.",
    },
    {
      question: "Welke boottochten biedt Salvador Ibiza?",
      answer:
        "All-inclusive gedeelde dagtochten, zonsondergangcruises en volledig aanpasbare privé charters vanuit de haven van San Antonio.",
    },
    {
      question: "Wat is inbegrepen in de prijs?",
      answer:
        "Kapitein en bemanning, brandstof, open bar, Spaanse tapas, vers fruit, paddleboards, kajaks en snorkelspullen. Privé charters hebben premium opties.",
    },
    {
      question: "Hoe lang duren de boottochten?",
      answer:
        "Dag- en zonsondergangtochten duren ongeveer 3 uur. Privé charters minimaal 3 uur, aanpasbaar.",
    },
    {
      question: "Waar is het ontmoetingspunt?",
      answer:
        "In de haven van San Antonio, Ibiza. Exacte locatie op de contactpagina en op je boekingsvoucher.",
    },
    {
      question: "Hoe boek ik een boottocht?",
      answer:
        "Boek online via salvadoribiza.com/book-now met live beschikbaarheid. Je ontvangt een bevestigingsvoucher met alle details.",
    },
    {
      question: "Wat moeten we meenemen?",
      answer:
        "Zwemkleding, handdoek, zonnebrand, hoed, zonnebril en camera. Overweeg zeeziektepillen indien nodig.",
    },
  ],
  fr: [
    {
      question: "Quelle est la meilleure excursion en bateau à Ibiza pour les familles ?",
      answer:
        "Cherchez des arrêts baignade calmes, gilets toutes tailles et ambiance détendue. Salvador Ibiza propose des excursions de jour 3 h tout inclus depuis San Antonio avec paddle, kayaks, snorkel, tapas et open bar.",
    },
    {
      question: "Quelles excursions propose Salvador Ibiza ?",
      answer:
        "Excursions partagées de jour tout inclus, croisières coucher de soleil et charters privés personnalisables depuis le port de San Antonio.",
    },
    {
      question: "Qu'est-ce qui est inclus dans le prix ?",
      answer:
        "Capitaine et équipage, carburant, open bar, tapas espagnoles, fruits frais, paddleboards, kayaks et équipement snorkel. Charters privés avec options premium.",
    },
    {
      question: "Combien de temps durent les excursions ?",
      answer:
        "Les excursions jour et coucher de soleil durent environ 3 heures. Charters privés minimum 3 h, personnalisables.",
    },
    {
      question: "Où est le point de rendez-vous ?",
      answer:
        "Au port de San Antonio, Ibiza. L'emplacement exact est sur la page contact et sur votre voucher de réservation.",
    },
    {
      question: "Comment réserver une excursion ?",
      answer:
        "Réservez en ligne sur salvadoribiza.com/book-now avec disponibilité en direct. Vous recevez un voucher de confirmation.",
    },
    {
      question: "Que devons-nous apporter ?",
      answer:
        "Maillot, serviette, crème solaire, chapeau, lunettes de soleil et appareil photo. Médicament contre le mal de mer si besoin.",
    },
  ],
};

export function getHomepageFaqs(locale: SiteLocale): PlainFaq[] {
  return pick(HOME_FAQS, locale);
}

const HOME_FAQ_SECTION: Record<SiteLocale, { title: string; subtitle: string; viewAll: string }> = {
  en: {
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about our boat trips in Ibiza",
    viewAll: "View All FAQs",
  },
  es: {
    title: "Preguntas Frecuentes",
    subtitle: "Todo lo que necesitas saber sobre nuestras excursiones en barco en Ibiza",
    viewAll: "Ver todas las preguntas",
  },
  nl: {
    title: "Veelgestelde Vragen",
    subtitle: "Alles wat je moet weten over onze boottochten op Ibiza",
    viewAll: "Alle FAQ's bekijken",
  },
  fr: {
    title: "Questions Fréquentes",
    subtitle: "Tout ce qu'il faut savoir sur nos excursions en bateau à Ibiza",
    viewAll: "Voir toutes les FAQ",
  },
};

export function getHomepageFaqSectionCopy(locale: SiteLocale) {
  return pick(HOME_FAQ_SECTION, locale);
}

// ─── Breadcrumb labels ───────────────────────────────────────────────────────

const BREADCRUMB_LABELS: Record<SiteLocale, Record<string, string>> = {
  en: {
    "boat-trips": "Boat Trips",
    "day-trip": "Day Trip",
    "sunset-trip": "Sunset Trip",
    "private-boat-trips": "Private Trips",
    "things-to-do-ibiza": "Things to Do in Ibiza",
    family: "Family Boat Trips",
    routes: "Routes",
    blog: "Blog",
    faq: "FAQ",
    gallery: "Gallery",
    about: "About Us",
    contact: "Contact",
    partners: "Partners",
  },
  es: {
    "boat-trips": "Excursiones en Barco",
    "day-trip": "Excursión de Día",
    "sunset-trip": "Excursión al Atardecer",
    "private-boat-trips": "Charter Privado",
    "things-to-do-ibiza": "Qué Hacer en Ibiza",
    family: "Excursiones en Familia",
    routes: "Rutas",
    blog: "Blog",
    faq: "Preguntas Frecuentes",
    gallery: "Galería",
    about: "Sobre Nosotros",
    contact: "Contacto",
    partners: "Partners",
  },
  nl: {
    "boat-trips": "Boottochten",
    "day-trip": "Dagtocht",
    "sunset-trip": "Zonsondergangtocht",
    "private-boat-trips": "Privé Tochten",
    "things-to-do-ibiza": "Dingen om te Doen op Ibiza",
    family: "Gezinsboottochten",
    routes: "Routes",
    blog: "Blog",
    faq: "FAQ",
    gallery: "Galerij",
    about: "Over Ons",
    contact: "Contact",
    partners: "Partners",
  },
  fr: {
    "boat-trips": "Excursions en Bateau",
    "day-trip": "Excursion Journée",
    "sunset-trip": "Excursion Coucher de Soleil",
    "private-boat-trips": "Charters Privés",
    "things-to-do-ibiza": "Que Faire à Ibiza",
    family: "Excursions Famille",
    routes: "Itinéraires",
    blog: "Blog",
    faq: "FAQ",
    gallery: "Galerie",
    about: "À Propos",
    contact: "Contact",
    partners: "Partenaires",
  },
};

export function getBreadcrumbLabels(locale: SiteLocale): Record<string, string> {
  return pick(BREADCRUMB_LABELS, locale);
}

// ─── Navbar ──────────────────────────────────────────────────────────────────

export type NavbarCopy = {
  home: string;
  boatTrips: string;
  privateTrips: string;
  gallery: string;
  faq: string;
  bookNow: string;
  openMenu: string;
  mobileLangPrefix: string;
  conjunction: string;
  langNames: Record<SiteLocale, string>;
  langSiteTitle: Record<SiteLocale, string>;
};

const NAVBAR_COPY: Record<SiteLocale, NavbarCopy> = {
  en: {
    home: "HOME",
    boatTrips: "BOAT TRIPS",
    privateTrips: "PRIVATE TRIPS",
    gallery: "GALLERY",
    faq: "FAQ",
    bookNow: "BOOK NOW",
    openMenu: "Open main menu",
    mobileLangPrefix: "Same page in",
    conjunction: "or",
    langNames: { en: "English", es: "Spanish", nl: "Dutch", fr: "French" },
    langSiteTitle: {
      en: "You are on the English site",
      es: "Spanish version",
      nl: "Dutch version",
      fr: "French version",
    },
  },
  es: {
    home: "INICIO",
    boatTrips: "EXCURSIONES",
    privateTrips: "CHARTER",
    gallery: "GALERÍA",
    faq: "FAQ",
    bookNow: "RESERVAR",
    openMenu: "Abrir menú principal",
    mobileLangPrefix: "Misma página en",
    conjunction: "o",
    langNames: { en: "inglés", es: "español", nl: "holandés", fr: "francés" },
    langSiteTitle: {
      en: "Versión en inglés",
      es: "Estás en el sitio en español",
      nl: "Versión en holandés",
      fr: "Versión en francés",
    },
  },
  nl: {
    home: "HOME",
    boatTrips: "BOOTTOCHTEN",
    privateTrips: "PRIVÉ",
    gallery: "GALERIJ",
    faq: "FAQ",
    bookNow: "BOEKEN",
    openMenu: "Hoofdmenu openen",
    mobileLangPrefix: "Dezelfde pagina in",
    conjunction: "of",
    langNames: { en: "Engels", es: "Spaans", nl: "Nederlands", fr: "Frans" },
    langSiteTitle: {
      en: "Engelse versie",
      es: "Spaanse versie",
      nl: "Je bent op de Nederlandse site",
      fr: "Franse versie",
    },
  },
  fr: {
    home: "ACCUEIL",
    boatTrips: "EXCURSIONS",
    privateTrips: "PRIVÉ",
    gallery: "GALERIE",
    faq: "FAQ",
    bookNow: "RÉSERVER",
    openMenu: "Ouvrir le menu principal",
    mobileLangPrefix: "Même page en",
    conjunction: "ou",
    langNames: { en: "anglais", es: "espagnol", nl: "néerlandais", fr: "français" },
    langSiteTitle: {
      en: "Version anglaise",
      es: "Version espagnole",
      nl: "Version néerlandaise",
      fr: "Vous êtes sur le site en français",
    },
  },
};

export function getNavbarCopy(locale: SiteLocale): NavbarCopy {
  return pick(NAVBAR_COPY, locale);
}

// ─── Boat trips hub (/boat-trips) ────────────────────────────────────────────

const BOAT_TRIPS_HUB_SEO: Record<SiteLocale, PageSeoFields> = {
  en: {
    title: "Best Boat Trips Ibiza - Day & Sunset Tours | Salvador",
    description:
      "Discover the best boat trips in Ibiza with Salvador. All-inclusive day and sunset tours with paddleboards, snorkelling, open bar and tapas. Compare options and book from San Antonio.",
    keywords:
      "best boat trips ibiza, ibiza boat trips, boat tours ibiza, day boat trip ibiza, sunset boat trip ibiza, boat trip ibiza",
  },
  es: {
    title: "Mejores Excursiones en Barco Ibiza - Día y Atardecer | Salvador",
    description:
      "Descubre las mejores excursiones en barco en Ibiza con Salvador. Tours de día y atardecer todo incluido con paddle surf, snorkel, barra libre y tapas. Reserva desde San Antonio.",
    keywords:
      "mejores excursiones ibiza, excursiones en barco ibiza, paseo en barco ibiza, excursion barco ibiza, crucero atardecer ibiza",
  },
  nl: {
    title: "Beste Boottochten Ibiza - Dag & Zonsondergang | Salvador",
    description:
      "Ontdek de beste boottochten op Ibiza met Salvador. All-inclusive dag- en zonsondergangtochten met paddleboards, snorkelen, open bar en tapas. Boek vanuit San Antonio.",
    keywords:
      "beste boottochten ibiza, boottocht ibiza, boottrip ibiza, dag boottocht ibiza, zonsondergang boottocht ibiza",
  },
  fr: {
    title: "Meilleures Excursions Bateau Ibiza - Jour & Coucher de Soleil | Salvador",
    description:
      "Découvrez les meilleures excursions en bateau à Ibiza avec Salvador. Tours jour et coucher de soleil tout inclus avec paddle, snorkel, open bar et tapas. Réservez depuis San Antonio.",
    keywords:
      "meilleures excursions ibiza, excursion bateau ibiza, bateau ibiza, excursion jour ibiza, coucher soleil ibiza",
  },
};

export function getBoatTripsHubSeo(locale: SiteLocale): PageSeoFields {
  return pick(BOAT_TRIPS_HUB_SEO, locale);
}

export type BoatTripsHubCopy = {
  heroH1Main: string;
  heroH1Accent: string;
  heroSubtitle: string;
  heroImageAlt: string;
  dayBtn: string;
  sunsetBtn: string;
  signatureH2: string;
  signatureP1: string;
  signatureP2: string;
  bestTripH2: string;
  bestTripP: string;
  comparisonTitle: string;
  faqTitle: string;
  linkFamily: string;
  linkSunset: string;
  linkSnorkel: string;
  galleryH2: string;
  galleryP: string;
  includedH2: string;
  includedP: string;
  includedFeatures: { title: string; description: string }[];
  specializedH2: string;
  specializedH2Accent: string;
  specializedP: string;
  specializedCards: { title: string; description: string; badge: string }[];
  middayTrip: {
    title: string;
    description: string;
    badgeText: string;
    features: string[];
    price: string;
    priceSubtext: string;
    detailsText: string;
    imageAlt: string;
  };
  sunsetTrip: {
    title: string;
    description: string;
    badgeText: string;
    features: string[];
    price: string;
    priceSubtext: string;
    detailsText: string;
    imageAlt: string;
  };
};

const BOAT_TRIPS_HUB_COPY: Record<SiteLocale, BoatTripsHubCopy> = {
  en: {
    heroH1Main: "Your Perfect Ibiza",
    heroH1Accent: "Boat Trip",
    heroSubtitle: "Choose between our all-inclusive 3-hour Daytime Experience or the magical Sunset Voyage.",
    heroImageAlt: "Aerial drone view of the Salvador charter boat in Ibiza",
    dayBtn: "Daytime Experience",
    sunsetBtn: "Sunset Voyage",
    signatureH2: "Our Signature Boat Trips: Day or Sunset",
    signatureP1: "Embark on the ultimate Ibiza boat trip with Salvador. We offer two distinct, unforgettable boat tours. Whether you prefer basking in the daytime sun or witnessing a magical sunset, every trip is a premium, all-inclusive experience.",
    signatureP2: "Our boat trips showcase the stunning Ibiza coastline — hidden coves, turquoise waters, paddle boarding, kayaking and snorkelling, with a premium open bar and Spanish tapas.",
    bestTripH2: "What Is the Best Boat Trip in Ibiza?",
    bestTripP: "It depends on your group. Salvador Ibiza is ideal for an all-inclusive, relaxed experience on a traditional wooden boat with snorkelling, paddleboards, kayaks, tapas and an open bar. Choose our day trip for families and adventure, or our sunset trip for golden-hour magic.",
    comparisonTitle: "Salvador Ibiza vs Party Boats vs Catamarans",
    faqTitle: "Choosing Your Ibiza Boat Trip",
    linkFamily: "Family trips →",
    linkSunset: "Sunset trips →",
    linkSnorkel: "Snorkelling →",
    galleryH2: "Moments Aboard Salvador",
    galleryP: "Explore snapshots from our unforgettable Daytime & Sunset trips.",
    includedH2: "Included in Every Trip",
    includedP: "Relax and enjoy, we've taken care of the details.",
    includedFeatures: [
      { title: "Expert Captain & Crew", description: "Professional service ensuring safety and local insights" },
      { title: "All-Inclusive Service", description: "Unlimited premium drinks, gourmet snacks, and fresh fruit" },
      { title: "Premium Sound System", description: "High-quality audio with Bluetooth connectivity" },
      { title: "Unforgettable Views", description: "Capture stunning moments against Ibiza's iconic backdrop" },
    ],
    specializedH2: "Explore Our Specialized",
    specializedH2Accent: "Boat Trips",
    specializedP: "Discover the perfect boat trip for your needs. From romantic sunsets to family adventures, we have something special for everyone.",
    specializedCards: [
      { title: "Sunset Trips", description: "Experience Ibiza's legendary sunsets from the sea. Magical golden hour cruises.", badge: "620 searches/month" },
      { title: "San Antonio Departures", description: "Convenient departures from San Antonio Bay. Explore the stunning west coast.", badge: "240 searches/month" },
      { title: "Day Trips", description: "Perfect daytime adventures with swimming, snorkeling, and water sports.", badge: "50 searches/month" },
      { title: "Family Trips", description: "Safe, fun, and educational boat trips perfect for families with children.", badge: "40 searches/month" },
      { title: "All-Inclusive", description: "Everything included: drinks, food, equipment, and entertainment.", badge: "10 searches/month" },
      { title: "Private Charters", description: "Exclusive boat just for your group. Ultimate privacy and luxury.", badge: "100 searches/month" },
    ],
    middayTrip: {
      title: "Daytime Experience",
      description: "Sun, sea, and adventure await.",
      badgeText: "2:00 PM - 5:00 PM",
      features: ["15 Premium Paddle Boards & 2 Kayaks", "Snorkeling Equipment", "Swimming in Crystal Clear Waters", "Premium Open Bar & Fresh Sangria", "Spanish Tapas & Fresh Fruit", "Premium Sound System"],
      price: "€80 per adult",
      priceSubtext: "Children 6-12: €45 | Under 6: Complimentary",
      detailsText: "Explore Details",
      imageAlt: "Salvador Ibiza Day Boat Trip - Premium Sea Adventure",
    },
    sunsetTrip: {
      title: "Sunset Voyage",
      description: "Experience Ibiza's iconic sunset from the sea.",
      badgeText: "6:30 PM - 9:30 PM",
      features: ["Sunset Swimming at Hidden Coves", "15 Paddle Boards & 2 Kayaks", "Snorkeling Equipment", "Premium Bar & Unlimited Cava", "Spanish Tapas Selection", "Sunset at Café Mambo"],
      price: "€80 per adult",
      priceSubtext: "Children 6-12: €45 | Under 6: Complimentary",
      detailsText: "Explore Details",
      imageAlt: "Salvador Ibiza Sunset Boat Trip - Sunset & Sea Adventure",
    },
  },
  es: {
    heroH1Main: "Tu Excursión Perfecta en",
    heroH1Accent: "Barco por Ibiza",
    heroSubtitle: "Elige entre nuestra excursión diurna de 3 horas todo incluido o el mágico crucero al atardecer.",
    heroImageAlt: "Vista aérea del barco Salvador en Ibiza",
    dayBtn: "Excursión de Día",
    sunsetBtn: "Crucero al Atardecer",
    signatureH2: "Nuestras Excursiones Estrella: Día o Atardecer",
    signatureP1: "Vive la mejor excursión en barco de Ibiza con Salvador. Dos experiencias inolvidables: sol de día o atardecer mágico. Todo incluido en ambas.",
    signatureP2: "Recorremos la costa de Ibiza — calas secretas, aguas turquesas, paddle surf, kayak y snorkel, con barra libre premium y tapas españolas.",
    bestTripH2: "¿Cuál es la Mejor Excursión en Barco en Ibiza?",
    bestTripP: "Depende de tu grupo. Salvador Ibiza es ideal para una experiencia relajada todo incluido en barco de madera con snorkel, paddle surf, kayaks, tapas y barra libre. Día para familias, atardecer para la hora dorada.",
    comparisonTitle: "Salvador Ibiza vs Fiestas en Barco vs Catamaranes",
    faqTitle: "Elige tu Excursión en Ibiza",
    linkFamily: "Excursiones en familia →",
    linkSunset: "Excursiones al atardecer →",
    linkSnorkel: "Snorkel →",
    galleryH2: "Momentos a Bordo de Salvador",
    galleryP: "Instantáneas de nuestras excursiones de día y atardecer.",
    includedH2: "Incluido en Cada Excursión",
    includedP: "Relájate y disfruta, nosotros nos encargamos de todo.",
    includedFeatures: [
      { title: "Patrón y Tripulación Expertos", description: "Servicio profesional con seguridad y conocimiento local" },
      { title: "Servicio Todo Incluido", description: "Bebidas premium ilimitadas, tapas y fruta fresca" },
      { title: "Sistema de Sonido Premium", description: "Audio de alta calidad con Bluetooth" },
      { title: "Vistas Inolvidables", description: "Momentos espectaculares con el paisaje icónico de Ibiza" },
    ],
    specializedH2: "Explora Nuestras",
    specializedH2Accent: "Excursiones Temáticas",
    specializedP: "La excursión perfecta para ti: atardeceres románticos, aventuras en familia y mucho más.",
    specializedCards: [
      { title: "Excursiones al Atardecer", description: "Los legendarios atardeceres de Ibiza desde el mar.", badge: "620 búsquedas/mes" },
      { title: "Salidas San Antonio", description: "Salidas desde la bahía de San Antonio. Costa oeste.", badge: "240 búsquedas/mes" },
      { title: "Excursiones de Día", description: "Aventuras diurnas con baño, snorkel y deportes acuáticos.", badge: "50 búsquedas/mes" },
      { title: "Excursiones en Familia", description: "Seguras y divertidas, perfectas para niños.", badge: "40 búsquedas/mes" },
      { title: "Todo Incluido", description: "Bebidas, comida, equipo y entretenimiento incluidos.", badge: "10 búsquedas/mes" },
      { title: "Charters Privados", description: "Barco exclusivo para tu grupo. Máxima privacidad.", badge: "100 búsquedas/mes" },
    ],
    middayTrip: {
      title: "Excursión de Día",
      description: "Sol, mar y aventura te esperan.",
      badgeText: "14:00 - 17:00",
      features: ["15 Paddle Surf y 2 Kayaks", "Equipo de Snorkel", "Baño en Aguas Cristalinas", "Barra Libre y Sangría", "Tapas Españolas y Fruta", "Sistema de Sonido Premium"],
      price: "80 € por adulto",
      priceSubtext: "Niños 6-12: 45 € | Menores de 6: Gratis",
      detailsText: "Ver detalles",
      imageAlt: "Excursión en barco de día Salvador Ibiza",
    },
    sunsetTrip: {
      title: "Crucero al Atardecer",
      description: "Vive el icónico atardecer de Ibiza desde el mar.",
      badgeText: "18:30 - 21:30",
      features: ["Baño al Atardecer en Calas", "15 Paddle Surf y 2 Kayaks", "Equipo de Snorkel", "Barra Libre y Cava", "Tapas Españolas", "Atardecer en Café Mambo"],
      price: "80 € por adulto",
      priceSubtext: "Niños 6-12: 45 € | Menores de 6: Gratis",
      detailsText: "Ver detalles",
      imageAlt: "Excursión al atardecer Salvador Ibiza",
    },
  },
  nl: {
    heroH1Main: "Jouw Perfecte",
    heroH1Accent: "Boottocht Ibiza",
    heroSubtitle: "Kies tussen onze 3 uur all-inclusive dagervaring of de magische zonsondergangvoyage.",
    heroImageAlt: "Luchtfoto van de Salvador boot op Ibiza",
    dayBtn: "Dagervaring",
    sunsetBtn: "Zonsondergang Cruise",
    signatureH2: "Onze Signatuur Boottochten: Dag of Zonsondergang",
    signatureP1: "Beleef de ultieme Ibiza boottocht met Salvador. Twee onvergetelijke ervaringen — dagzon of magische zonsondergang — beide all-inclusive.",
    signatureP2: "Onze tochten tonen de prachtige Ibiza-kustlijn met verborgen baaien, turquoise water, paddle, kajak en snorkelen, met premium open bar en tapas.",
    bestTripH2: "Wat is de Beste Boottocht op Ibiza?",
    bestTripP: "Hangt af van je gezelschap. Salvador Ibiza is ideaal voor een ontspannen all-inclusive ervaring op een houten boot. Dagtocht voor gezinnen, zonsondergang voor golden hour.",
    comparisonTitle: "Salvador Ibiza vs Partyboten vs Catamarans",
    faqTitle: "Kies je Ibiza Boottocht",
    linkFamily: "Gezinstochten →",
    linkSunset: "Zonsondergang →",
    linkSnorkel: "Snorkelen →",
    galleryH2: "Momenten aan Boord",
    galleryP: "Foto's van onze dag- en zonsondergangtochten.",
    includedH2: "Inbegrepen bij Elke Tocht",
    includedP: "Ontspan en geniet, wij regelen de details.",
    includedFeatures: [
      { title: "Expert Kapitein & Bemanning", description: "Professionele service met veiligheid en lokale kennis" },
      { title: "All-Inclusive Service", description: "Onbeperkt premium drinken, snacks en vers fruit" },
      { title: "Premium Geluidssysteem", description: "Hoogwaardige audio met Bluetooth" },
      { title: "Onvergetelijke Uitzichten", description: "Prachtige momenten met Ibiza's iconische achtergrond" },
    ],
    specializedH2: "Ontdek Onze Gespecialiseerde",
    specializedH2Accent: "Boottochten",
    specializedP: "De perfecte boottocht voor jou — van romantische zonsondergangen tot gezinsavonturen.",
    specializedCards: [
      { title: "Zonsondergang", description: "Legendarische zonsondergangen vanaf zee.", badge: "620 zoekopdrachten/maand" },
      { title: "Vertrek San Antonio", description: "Vertrek vanuit San Antonio Bay. Westkust.", badge: "240 zoekopdrachten/maand" },
      { title: "Dagtochten", description: "Dagavonturen met zwemmen, snorkelen en watersport.", badge: "50 zoekopdrachten/maand" },
      { title: "Gezinstochten", description: "Veilig en leuk voor gezinnen met kinderen.", badge: "40 zoekopdrachten/maand" },
      { title: "All-Inclusive", description: "Alles inbegrepen: drank, eten, uitrusting.", badge: "10 zoekopdrachten/maand" },
      { title: "Privé Charters", description: "Exclusieve boot voor je groep.", badge: "100 zoekopdrachten/maand" },
    ],
    middayTrip: {
      title: "Dagervaring",
      description: "Zon, zee en avontuur wachten.",
      badgeText: "14:00 - 17:00",
      features: ["15 Paddleboards & 2 Kajaks", "Snorkeluitrusting", "Zwemmen in Helder Water", "Premium Open Bar & Sangria", "Spaanse Tapas & Fruit", "Premium Geluidssysteem"],
      price: "€80 per volwassene",
      priceSubtext: "Kinderen 6-12: €45 | Onder 6: Gratis",
      detailsText: "Details bekijken",
      imageAlt: "Salvador Ibiza dag boottocht",
    },
    sunsetTrip: {
      title: "Zonsondergang Cruise",
      description: "Beleef Ibiza's iconische zonsondergang vanaf zee.",
      badgeText: "18:30 - 21:30",
      features: ["Zwemmen bij Zonsondergang", "15 Paddleboards & 2 Kajaks", "Snorkeluitrusting", "Premium Bar & Cava", "Spaanse Tapas", "Zonsondergang bij Café Mambo"],
      price: "€80 per volwassene",
      priceSubtext: "Kinderen 6-12: €45 | Onder 6: Gratis",
      detailsText: "Details bekijken",
      imageAlt: "Salvador Ibiza zonsondergang boottocht",
    },
  },
  fr: {
    heroH1Main: "Votre Excursion Parfaite en",
    heroH1Accent: "Bateau à Ibiza",
    heroSubtitle: "Choisissez entre notre excursion de jour 3 h tout inclus ou la croisière magique au coucher du soleil.",
    heroImageAlt: "Vue aérienne du bateau Salvador à Ibiza",
    dayBtn: "Excursion de Jour",
    sunsetBtn: "Croisière Coucher de Soleil",
    signatureH2: "Nos Excursions Signature : Jour ou Coucher de Soleil",
    signatureP1: "Vivez la meilleure excursion en bateau à Ibiza avec Salvador. Deux expériences inoubliables — soleil de jour ou coucher de soleil magique — tout inclus.",
    signatureP2: "Nos excursions explorent la côte d'Ibiza — criques secrètes, eaux turquoise, paddle, kayak et snorkel, avec open bar premium et tapas espagnoles.",
    bestTripH2: "Quelle est la Meilleure Excursion en Bateau à Ibiza ?",
    bestTripP: "Selon votre groupe. Salvador Ibiza est idéal pour une expérience détendue tout inclus sur bateau en bois. Jour pour les familles, coucher de soleil pour l'heure dorée.",
    comparisonTitle: "Salvador Ibiza vs Fêtes en Bateau vs Catamarans",
    faqTitle: "Choisissez votre Excursion à Ibiza",
    linkFamily: "Excursions famille →",
    linkSunset: "Couchers de soleil →",
    linkSnorkel: "Snorkel →",
    galleryH2: "Moments à Bord",
    galleryP: "Photos de nos excursions jour et coucher de soleil.",
    includedH2: "Inclus dans Chaque Excursion",
    includedP: "Détendez-vous, nous nous occupons de tout.",
    includedFeatures: [
      { title: "Capitaine & Équipage Experts", description: "Service professionnel, sécurité et connaissance locale" },
      { title: "Service Tout Inclus", description: "Boissons premium illimitées, tapas et fruits frais" },
      { title: "Son Premium", description: "Audio haute qualité avec Bluetooth" },
      { title: "Vues Inoubliables", description: "Moments spectaculaires avec le décor iconique d'Ibiza" },
    ],
    specializedH2: "Explorez nos Excursions",
    specializedH2Accent: "Spécialisées",
    specializedP: "L'excursion parfaite pour vous — couchers de soleil romantiques, aventures en famille et plus.",
    specializedCards: [
      { title: "Couchers de Soleil", description: "Les couchers de soleil légendaires depuis la mer.", badge: "620 recherches/mois" },
      { title: "Départs San Antonio", description: "Départs depuis la baie de San Antonio. Côte ouest.", badge: "240 recherches/mois" },
      { title: "Excursions Jour", description: "Aventures diurnes avec baignade, snorkel et sports nautiques.", badge: "50 recherches/mois" },
      { title: "Excursions Famille", description: "Sûres et amusantes pour les familles avec enfants.", badge: "40 recherches/mois" },
      { title: "Tout Inclus", description: "Boissons, nourriture, équipement et divertissement inclus.", badge: "10 recherches/mois" },
      { title: "Charters Privés", description: "Bateau exclusif pour votre groupe.", badge: "100 recherches/mois" },
    ],
    middayTrip: {
      title: "Excursion de Jour",
      description: "Soleil, mer et aventure vous attendent.",
      badgeText: "14h00 - 17h00",
      features: ["15 Paddleboards & 2 Kayaks", "Équipement Snorkel", "Baignade en Eaux Claires", "Open Bar & Sangria", "Tapas Espagnoles & Fruits", "Son Premium"],
      price: "80 € par adulte",
      priceSubtext: "Enfants 6-12 : 45 € | Moins de 6 : Gratuit",
      detailsText: "Voir détails",
      imageAlt: "Excursion jour Salvador Ibiza",
    },
    sunsetTrip: {
      title: "Croisière Coucher de Soleil",
      description: "Vivez le coucher de soleil iconique d'Ibiza depuis la mer.",
      badgeText: "18h30 - 21h30",
      features: ["Baignade au Coucher", "15 Paddleboards & 2 Kayaks", "Équipement Snorkel", "Bar Premium & Cava", "Tapas Espagnoles", "Coucher au Café Mambo"],
      price: "80 € par adulte",
      priceSubtext: "Enfants 6-12 : 45 € | Moins de 6 : Gratuit",
      detailsText: "Voir détails",
      imageAlt: "Excursion coucher de soleil Salvador Ibiza",
    },
  },
};

const SPECIALIZED_HREFS = [
  "/boat-trips/sunset-trip",
  "/boat-trips/san-antonio",
  "/boat-trips/day-trip",
  "/boat-trips/family",
  "/boat-trips/day-trip",
  "/private-boat-trips",
] as const;

export function getBoatTripsHubCopy(locale: SiteLocale) {
  const copy = pick(BOAT_TRIPS_HUB_COPY, locale);
  return {
    ...copy,
    specializedCards: copy.specializedCards.map((card, i) => ({
      ...card,
      href: SPECIALIZED_HREFS[i],
    })),
  };
}

