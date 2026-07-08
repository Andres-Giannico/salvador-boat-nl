import type { PlainFaq } from "@/lib/faq-schema";
import { discoverabilityFaqs } from "@/lib/discoverability-faqs";
import {
  familyBoatTripFaqs,
  generalBoatTripFaqs,
  snorkelingBoatTripFaqs,
  sunsetBoatTripFaqs,
} from "@/lib/topic-faqs";
import type { PageSeoFields } from "@/lib/seo-i18n";
import type { SiteLocale } from "@/lib/site-locale";

function pick<T>(record: Record<SiteLocale, T>, locale: SiteLocale): T {
  return record[locale] ?? record.en;
}

// ─── Discoverability FAQs ────────────────────────────────────────────────────

const DISCOVERABILITY_I18N: Record<SiteLocale, PlainFaq[]> = {
  en: [...discoverabilityFaqs],
  es: [
    {
      question: "¿Cuál es la mejor excursión en barco en Ibiza para familias?",
      answer:
        "Para familias, busca paradas tranquilas, chalecos en todas las tallas, comida apta para niños y ambiente relajado. Salvador Ibiza ofrece excursiones de día de 3 horas todo incluido desde San Antonio en barco de madera, con paddle surf, kayaks, snorkel, fruta y tapas.",
    },
    {
      question: "¿Cuál es la mejor excursión en barco al atardecer en Ibiza?",
      answer:
        "Las mejores combinan salida a la hora dorada, rutas por la costa oeste (Cala Comte) o norte (Es Vedrà) y ambiente cómodo. Salvador Ibiza ofrece cruceros al atardecer de 3 horas desde San Antonio con barra libre, tapas y paradas para bañarse.",
    },
    {
      question: "¿En qué se diferencia un barco de madera tradicional de una fiesta en barco en Ibiza?",
      answer:
        "Las fiestas en barco priorizan música alta y ambiente de club. Salvador Ibiza ofrece navegación relajada, calas secretas, paddle surf, snorkel, tapas y barra libre — experiencia mediterránea auténtica sin ambiente de discoteca.",
    },
    {
      question: "¿Desde dónde salen las mejores excursiones en barco en Ibiza?",
      answer:
        "San Antonio en la costa oeste es uno de los mejores puntos de salida, con acceso a Cala Comte, Cala Salada y atardeceres espectaculares. Salvador Ibiza sale del puerto de San Antonio.",
    },
    {
      question: "¿Qué debo buscar al elegir una excursión en barco en Ibiza?",
      answer:
        "Revisa qué incluye (bebidas, comida, equipo), duración, tamaño del grupo, punto de salida y si el ambiente encaja con tu grupo. Salvador Ibiza incluye patrón, tripulación, barra libre, tapas, 15 paddle surf, 2 kayaks y snorkel.",
    },
  ],
  nl: [
    {
      question: "Wat is de beste boottocht op Ibiza voor gezinnen?",
      answer:
        "Voor gezinnen: rustige zwemstops, zwemvesten, kindvriendelijk eten en een ontspannen sfeer. Salvador Ibiza biedt 3 uur all-inclusive dagtochten vanuit San Antonio met paddleboards, kajaks, snorkel, fruit en tapas.",
    },
    {
      question: "Wat is de beste zonsondergangboottocht op Ibiza?",
      answer:
        "De beste combineren vertrek bij golden hour, routes langs de westkust (Cala Comte) of noordkust (Es Vedrà) en een comfortabele sfeer. Salvador Ibiza biedt 3 uur zonsondergangcruises vanuit San Antonio met open bar en tapas.",
    },
    {
      question: "Hoe verschilt een traditionele houten boot van een party boot op Ibiza?",
      answer:
        "Partyboten draaien om harde muziek en clubvibe. Salvador Ibiza biedt ontspannen varen, verborgen baaien, paddle, snorkel, tapas en open bar — authentieke mediterrane ervaring.",
    },
    {
      question: "Vanwaar vertrekken de beste boottochten op Ibiza?",
      answer:
        "San Antonio aan de westkust is een populaire vertrekplaats met Cala Comte, Cala Salada en prachtige zonsondergangen. Salvador Ibiza vertrekt vanuit de haven van San Antonio.",
    },
    {
      question: "Waar moet ik op letten bij het kiezen van een boottocht?",
      answer:
        "Check inbegrepen drank, eten, uitrusting, duur, groepsgrootte en vertrekpunt. Salvador Ibiza incl. kapitein, bemanning, open bar, tapas, 15 paddleboards, 2 kajaks en snorkelspullen.",
    },
  ],
  fr: [
    {
      question: "Quelle est la meilleure excursion en bateau à Ibiza pour les familles ?",
      answer:
        "Pour les familles : arrêts calmes, gilets toutes tailles, nourriture adaptée et ambiance détendue. Salvador Ibiza propose des excursions de jour 3 h tout inclus depuis San Antonio avec paddle, kayaks, snorkel, fruits et tapas.",
    },
    {
      question: "Quelle est la meilleure excursion coucher de soleil à Ibiza ?",
      answer:
        "Les meilleures combinent départ à l'heure dorée, routes côte ouest (Cala Comte) ou nord (Es Vedrà) et ambiance confortable. Salvador Ibiza propose des croisières 3 h depuis San Antonio avec open bar et tapas.",
    },
    {
      question: "En quoi un bateau en bois traditionnel diffère-t-il d'une fête en bateau ?",
      answer:
        "Les fêtes en bateau privilégient musique forte et ambiance club. Salvador Ibiza offre navigation détendue, criques secrètes, paddle, snorkel, tapas et open bar — expérience méditerranéenne authentique.",
    },
    {
      question: "D'où partent les meilleures excursions en bateau à Ibiza ?",
      answer:
        "San Antonio sur la côte ouest est un point de départ populaire avec Cala Comte, Cala Salada et couchers de soleil. Salvador Ibiza part du port de San Antonio.",
    },
    {
      question: "Que faut-il vérifier en choisissant une excursion ?",
      answer:
        "Vérifiez boissons, nourriture, équipement, durée, taille du groupe et point de départ. Salvador Ibiza inclut capitaine, équipage, open bar, tapas, 15 paddleboards, 2 kayaks et snorkel.",
    },
  ],
};

export function getDiscoverabilityFaqs(locale: SiteLocale): PlainFaq[] {
  return pick(DISCOVERABILITY_I18N, locale);
}

// ─── General boat trip FAQs (hub /boat-trips) ────────────────────────────────

const GENERAL_BOAT_TRIP_I18N: Record<SiteLocale, PlainFaq[]> = {
  en: generalBoatTripFaqs,
  es: [
    {
      question: "¿Cuál es la mejor excursión en barco en Ibiza?",
      answer:
        "Depende de tu grupo. Para familias, la excursión de día de 3 horas de Salvador Ibiza en barco de madera es ideal — todo incluido con paddle surf, kayaks, snorkel, tapas y barra libre. Para amantes del atardecer, el crucero al atardecer desde San Antonio.",
    },
    {
      question: "¿Salvador Ibiza o fiesta en barco?",
      answer:
        "Elige fiesta en barco si buscas música alta y ambiente de club. Elige Salvador Ibiza si prefieres calas secretas, snorkel, paddle surf, tapas y ambiente relajado en un barco de madera — ideal para familias, parejas y grupos.",
    },
    {
      question: "¿Salvador Ibiza o catamarán?",
      answer:
        "Los catamaranes ofrecen espacio pero menos encanto y menos equipo. Salvador Ibiza incluye 15 paddle surf, 2 kayaks, snorkel completo, barra libre y tapas — precio todo incluido competitivo desde San Antonio.",
    },
    {
      question: "¿Charter privado o excursión compartida?",
      answer:
        "Las compartidas (80 €/adulto) son excelente relación calidad-precio. Los charters privados (desde 1.350 €) son ideales para cumpleaños, familias o grupos que quieren el barco en exclusiva.",
    },
    {
      question: "¿Qué incluyen las excursiones de Salvador Ibiza?",
      answer:
        "Patrón, tripulación, combustible, barra libre, tapas españolas, fruta fresca, 15 paddle surf, 2 kayaks y equipo de snorkel completo — todo en el precio del billete.",
    },
  ],
  nl: [
    {
      question: "Wat is de beste boottocht op Ibiza?",
      answer:
        "Hangt af van je gezelschap. Voor gezinnen is Salvador Ibiza's 3 uur dagtocht op een houten boot top — all-inclusive met paddle, kajaks, snorkel, tapas en open bar. Voor zonsondergangliefhebbers de cruise vanuit San Antonio.",
    },
    {
      question: "Salvador Ibiza of party boot?",
      answer:
        "Kies party boot voor harde muziek en clubvibe. Kies Salvador Ibiza voor verborgen baaien, snorkel, paddle, tapas en ontspannen sfeer op een houten boot.",
    },
    {
      question: "Salvador Ibiza of catamaran?",
      answer:
        "Catamarans bieden ruimte maar minder charme en uitrusting. Salvador Ibiza incl. 15 paddleboards, 2 kajaks, snorkel, open bar en tapas vanaf San Antonio.",
    },
    {
      question: "Privé charter of gedeelde tocht?",
      answer:
        "Gedeelde tochten (€80/volw.) zijn goede waarde. Privé charters (vanaf €1.350) voor verjaardagen of groepen die exclusiviteit willen.",
    },
    {
      question: "Wat is inbegrepen?",
      answer:
        "Kapitein, bemanning, brandstof, open bar, tapas, vers fruit, 15 paddleboards, 2 kajaks en snorkelspullen — alles in de prijs.",
    },
  ],
  fr: [
    {
      question: "Quelle est la meilleure excursion en bateau à Ibiza ?",
      answer:
        "Selon votre groupe. Pour les familles, l'excursion de jour 3 h de Salvador Ibiza en bateau bois est idéale — tout inclus avec paddle, kayaks, snorkel, tapas et open bar. Pour le coucher de soleil, la croisière depuis San Antonio.",
    },
    {
      question: "Salvador Ibiza ou fête en bateau ?",
      answer:
        "Fête en bateau pour musique forte et ambiance club. Salvador Ibiza pour criques secrètes, snorkel, paddle, tapas et ambiance détendue sur bateau en bois.",
    },
    {
      question: "Salvador Ibiza ou catamaran ?",
      answer:
        "Les catamarans offrent de l'espace mais moins de charme. Salvador Ibiza inclut 15 paddleboards, 2 kayaks, snorkel, open bar et tapas depuis San Antonio.",
    },
    {
      question: "Charter privé ou excursion partagée ?",
      answer:
        "Partagées (80 €/adulte) : excellent rapport qualité-prix. Charters privés (dès 1 350 €) pour anniversaires ou groupes en exclusivité.",
    },
    {
      question: "Qu'est-ce qui est inclus ?",
      answer:
        "Capitaine, équipage, carburant, open bar, tapas, fruits frais, 15 paddleboards, 2 kayaks et équipement snorkel — tout inclus.",
    },
  ],
};

export function getGeneralBoatTripFaqs(locale: SiteLocale): PlainFaq[] {
  return pick(GENERAL_BOAT_TRIP_I18N, locale);
}

// ─── Topic guide FAQs (FAQ page slices) ──────────────────────────────────────

function topicGuideEn(): PlainFaq[] {
  return [
    ...familyBoatTripFaqs.slice(0, 4),
    ...sunsetBoatTripFaqs.slice(0, 3),
    ...snorkelingBoatTripFaqs.slice(0, 3),
  ];
}

const TOPIC_GUIDE_I18N: Record<SiteLocale, PlainFaq[]> = {
  en: topicGuideEn(),
  es: [
    {
      question: "¿Cuál es la mejor excursión en barco en familia en Ibiza?",
      answer:
        "Las mejores combinan paradas tranquilas, chalecos para todas las edades, comida apta para niños y ambiente relajado. Salvador Ibiza ofrece excursiones de día de 3 horas desde San Antonio con paddle surf, kayaks, snorkel, tapas y fruta.",
    },
    {
      question: "¿Es Salvador Ibiza bueno para familias con niños?",
      answer:
        "Sí. Nuestra tripulación da la bienvenida a niños de todas las edades, proporciona chalecos en cada talla y elige calas protegidas para nadar, sin música de fiesta ni ambiente de discoteca.",
    },
    {
      question: "¿Es seguro para niños?",
      answer:
        "La seguridad es prioritaria. Todos los niños reciben chalecos, el capitán da un briefing y las paradas son en aguas tranquilas. La tripulación está formada para asistir a familias.",
    },
    {
      question: "¿Qué edad es adecuada?",
      answer:
        "Bebés 0–5 gratis, niños 6–12 a 45 €, adolescentes bienvenidos. Los bebés deben estar supervisados por un adulto.",
    },
    {
      question: "¿Cuál es la mejor excursión al atardecer en Ibiza?",
      answer:
        "Las mejores combinan salida a la hora dorada y rutas por la costa oeste o norte. Salvador Ibiza ofrece cruceros de 3 horas desde San Antonio con barra libre, tapas y vistas a Cala Comte o Es Vedrà.",
    },
    {
      question: "¿A qué hora sale la excursión al atardecer?",
      answer:
        "En temporada alta suele salir sobre las 18:30 y regresar sobre las 21:30, programada para el mejor atardecer.",
    },
    {
      question: "¿Por dónde navega la excursión al atardecer?",
      answer:
        "El capitán elige la mejor ruta según el mar — costa oeste hacia Cala Comte o norte hacia Es Vedrà y Sa Foradada.",
    },
    {
      question: "¿Cuál es la mejor excursión de snorkel en Ibiza?",
      answer:
        "Las mejores visitan varias calas cristalinas con equipo profesional. Salvador Ibiza incluye máscaras, tubos y aletas para todos, con 2–3 paradas en excursiones de día y atardecer.",
    },
    {
      question: "¿El equipo de snorkel está incluido?",
      answer:
        "Sí. Cada excursión incluye equipo completo de snorkel para todos los pasajeros sin coste extra.",
    },
    {
      question: "¿Dónde están los mejores puntos de snorkel?",
      answer:
        "Nuestras rutas visitan calas de la costa oeste (Cala Comte, Cala Salada) y norte (Sa Foradada). El capitán elige según visibilidad y condiciones.",
    },
  ],
  nl: [
    {
      question: "Wat is de beste gezinsboottocht op Ibiza?",
      answer:
        "De beste combineren rustige zwemstops, zwemvesten, kindvriendelijk eten en ontspannen sfeer. Salvador Ibiza biedt 3 uur dagtochten vanuit San Antonio met paddle, kajaks, snorkel, tapas en fruit.",
    },
    {
      question: "Is Salvador Ibiza geschikt voor gezinnen met kinderen?",
      answer:
        "Ja. Onze bemanning verwelkomt kinderen van alle leeftijden, biedt zwemvesten en kiest beschutte baaien — zonder harde feestmuziek.",
    },
    {
      question: "Is het veilig voor kinderen?",
      answer:
        "Veiligheid voorop. Alle kinderen krijgen zwemvesten, de kapitein geeft een briefing en zwemstops zijn in rustig water.",
    },
    {
      question: "Welke leeftijd is geschikt?",
      answer:
        "Baby's 0–5 gratis, kinderen 6–12 €45, tieners welkom. Baby's onder toezicht van een ouder.",
    },
    {
      question: "Wat is de beste zonsondergangboottocht?",
      answer:
        "De beste combineren vertrek bij golden hour en routes langs west- of noordkust. Salvador Ibiza biedt 3 uur cruises vanuit San Antonio met open bar en tapas.",
    },
    {
      question: "Hoe laat vertrekt de zonsondergangtocht?",
      answer:
        "In het hoogseizoen meestal rond 18:30, terug rond 21:30 — afgestemd op de zonsondergang.",
    },
    {
      question: "Welke route vaart de zonsondergangtocht?",
      answer:
        "De kapitein kiest dagelijks — westkust naar Cala Comte of noordkust naar Es Vedrà en Sa Foradada.",
    },
    {
      question: "Wat is de beste snorkelboottocht?",
      answer:
        "De beste bezoeken meerdere kristalheldere baaien met professionele uitrusting. Salvador Ibiza incl. maskers, snorkels en vinnen voor iedereen.",
    },
    {
      question: "Is snorkeluitrusting inbegrepen?",
      answer:
        "Ja. Elke tocht incl. complete snorkeluitrusting voor alle gasten zonder extra kosten.",
    },
    {
      question: "Waar zijn de beste snorkelplekken?",
      answer:
        "Routes langs westkust (Cala Comte, Cala Salada) en noordkust (Sa Foradada). Kapitein kiest op basis van zichtbaarheid.",
    },
  ],
  fr: [
    {
      question: "Quelle est la meilleure excursion famille à Ibiza ?",
      answer:
        "Les meilleures combinent arrêts calmes, gilets toutes tailles, nourriture adaptée et ambiance détendue. Salvador Ibiza propose excursions jour 3 h depuis San Antonio avec paddle, kayaks, snorkel, tapas et fruits.",
    },
    {
      question: "Salvador Ibiza convient-il aux familles avec enfants ?",
      answer:
        "Oui. Notre équipage accueille les enfants de tous âges, fournit des gilets et choisit des criques abritées — sans musique de fête.",
    },
    {
      question: "Est-ce sûr pour les enfants ?",
      answer:
        "La sécurité est prioritaire. Tous les enfants reçoivent des gilets, le capitaine fait un briefing et les arrêts sont en eaux calmes.",
    },
    {
      question: "Quel âge est adapté ?",
      answer:
        "Bébés 0–5 gratuits, enfants 6–12 à 45 €, ados bienvenus. Bébés sous surveillance parentale.",
    },
    {
      question: "Quelle est la meilleure excursion coucher de soleil ?",
      answer:
        "Les meilleures combinent départ à l'heure dorée et routes côte ouest ou nord. Salvador Ibiza propose croisières 3 h depuis San Antonio avec open bar et tapas.",
    },
    {
      question: "À quelle heure part l'excursion coucher de soleil ?",
      answer:
        "En haute saison vers 18h30, retour vers 21h30 — programmé pour le coucher de soleil.",
    },
    {
      question: "Quel itinéraire pour le coucher de soleil ?",
      answer:
        "Le capitaine choisit — côte ouest vers Cala Comte ou nord vers Es Vedrà et Sa Foradada.",
    },
    {
      question: "Quelle est la meilleure excursion snorkel ?",
      answer:
        "Les meilleures visitent plusieurs criques cristallines avec équipement pro. Salvador Ibiza inclut masques, tubas et palmes pour tous.",
    },
    {
      question: "L'équipement snorkel est-il inclus ?",
      answer:
        "Oui. Chaque excursion inclut l'équipement complet sans supplément.",
    },
    {
      question: "Où sont les meilleurs spots snorkel ?",
      answer:
        "Routes côte ouest (Cala Comte, Cala Salada) et nord (Sa Foradada). Le capitaine choisit selon la visibilité.",
    },
  ],
};

export function getTopicGuideFaqs(locale: SiteLocale): PlainFaq[] {
  return pick(TOPIC_GUIDE_I18N, locale);
}

// ─── FAQ page metadata & UI ──────────────────────────────────────────────────

const FAQ_PAGE_SEO: Record<SiteLocale, PageSeoFields> = {
  en: {
    title: "Frequently Asked Questions | Boat Trips Ibiza",
    description:
      "Answers about the best boat trips in Ibiza for families, sunset cruises, traditional wooden boat experiences, and Salvador Ibiza bookings.",
    keywords:
      "boat trips ibiza faq, ibiza boat trip questions, salvador ibiza booking, family boat trip ibiza, sunset cruise ibiza",
  },
  es: {
    title: "Preguntas Frecuentes | Excursiones en Barco Ibiza",
    description:
      "Respuestas sobre las mejores excursiones en barco en Ibiza para familias, cruceros al atardecer, barco de madera tradicional y reservas en Salvador Ibiza.",
    keywords:
      "preguntas excursiones ibiza, excursion en barco ibiza, reservar salvador ibiza, excursion familiar ibiza, atardecer ibiza barco",
  },
  nl: {
    title: "Veelgestelde Vragen | Boottochten Ibiza",
    description:
      "Antwoorden over de beste boottochten op Ibiza voor gezinnen, zonsondergangcruises, houten boot en boekingen bij Salvador Ibiza.",
    keywords:
      "boottocht ibiza faq, vragen boottrip ibiza, salvador ibiza boeken, gezinsboottocht ibiza",
  },
  fr: {
    title: "Questions Fréquentes | Excursions Bateau Ibiza",
    description:
      "Réponses sur les meilleures excursions en bateau à Ibiza pour familles, couchers de soleil, bateau en bois et réservations Salvador Ibiza.",
    keywords:
      "faq excursion bateau ibiza, questions bateau ibiza, réserver salvador ibiza, excursion famille ibiza",
  },
};

export function getFaqPageSeo(locale: SiteLocale): PageSeoFields {
  return pick(FAQ_PAGE_SEO, locale);
}

export type FaqPageUiCopy = {
  heroH1Main: string;
  heroH1Accent: string;
  heroSubtitle: string;
  categories: { general: string; pricing: string; onboard: string; safety: string; activities: string };
  sections: {
    topicGuide: string;
    topicGuideIntro: string;
    planning: string;
    general: string;
    pricing: string;
    onboard: string;
    safety: string;
    activities: string;
  };
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
};

const FAQ_PAGE_UI: Record<SiteLocale, FaqPageUiCopy> = {
  en: {
    heroH1Main: "Frequently Asked",
    heroH1Accent: "Questions",
    heroSubtitle: "Find answers to your questions about our boat trips, bookings, and services.",
    categories: { general: "General", pricing: "Pricing", onboard: "On Board", safety: "Safety", activities: "Activities" },
    sections: {
      topicGuide: "Best Boat Trips by Topic",
      topicGuideIntro: "Quick answers — see full guides on our family, sunset and snorkelling pages.",
      planning: "Choosing a Boat Trip in Ibiza",
      general: "General Questions",
      pricing: "Pricing & Booking",
      onboard: "On Board Experience",
      safety: "Safety & Preparation",
      activities: "Activities & More",
    },
    ctaTitle: "Still have questions?",
    ctaText: "We're here to help! Contact us directly for personalized assistance.",
    ctaButton: "Contact Us",
  },
  es: {
    heroH1Main: "Preguntas",
    heroH1Accent: "Frecuentes",
    heroSubtitle: "Encuentra respuestas sobre nuestras excursiones en barco, reservas y servicios.",
    categories: { general: "General", pricing: "Precios", onboard: "A Bordo", safety: "Seguridad", activities: "Actividades" },
    sections: {
      topicGuide: "Mejores Excursiones por Tema",
      topicGuideIntro: "Respuestas rápidas — guías completas en nuestras páginas de familia, atardecer y snorkel.",
      planning: "Elegir una Excursión en Ibiza",
      general: "Preguntas Generales",
      pricing: "Precios y Reservas",
      onboard: "Experiencia a Bordo",
      safety: "Seguridad y Preparación",
      activities: "Actividades y Más",
    },
    ctaTitle: "¿Sigues con dudas?",
    ctaText: "¡Estamos aquí para ayudarte! Contáctanos para asistencia personalizada.",
    ctaButton: "Contactar",
  },
  nl: {
    heroH1Main: "Veelgestelde",
    heroH1Accent: "Vragen",
    heroSubtitle: "Vind antwoorden over onze boottochten, boekingen en diensten.",
    categories: { general: "Algemeen", pricing: "Prijzen", onboard: "Aan Boord", safety: "Veiligheid", activities: "Activiteiten" },
    sections: {
      topicGuide: "Beste Boottochten per Onderwerp",
      topicGuideIntro: "Snelle antwoorden — volledige gidsen op onze familie-, zonsondergang- en snorkelpagina's.",
      planning: "Een Boottocht Kiezen op Ibiza",
      general: "Algemene Vragen",
      pricing: "Prijzen & Boeken",
      onboard: "Ervaring aan Boord",
      safety: "Veiligheid & Voorbereiding",
      activities: "Activiteiten & Meer",
    },
    ctaTitle: "Nog vragen?",
    ctaText: "We helpen je graag! Neem direct contact op voor persoonlijke assistentie.",
    ctaButton: "Contact",
  },
  fr: {
    heroH1Main: "Questions",
    heroH1Accent: "Fréquentes",
    heroSubtitle: "Trouvez des réponses sur nos excursions, réservations et services.",
    categories: { general: "Général", pricing: "Tarifs", onboard: "À Bord", safety: "Sécurité", activities: "Activités" },
    sections: {
      topicGuide: "Meilleures Excursions par Thème",
      topicGuideIntro: "Réponses rapides — guides complets sur nos pages famille, coucher de soleil et snorkel.",
      planning: "Choisir une Excursion à Ibiza",
      general: "Questions Générales",
      pricing: "Tarifs & Réservation",
      onboard: "Expérience à Bord",
      safety: "Sécurité & Préparation",
      activities: "Activités & Plus",
    },
    ctaTitle: "Encore des questions ?",
    ctaText: "Nous sommes là pour vous aider ! Contactez-nous pour une assistance personnalisée.",
    ctaButton: "Nous Contacter",
  },
};

export function getFaqPageUi(locale: SiteLocale): FaqPageUiCopy {
  return pick(FAQ_PAGE_UI, locale);
}

// ─── FAQ page category FAQs (plain text, all locales) ────────────────────────

type FaqCategories = {
  general: PlainFaq[];
  pricing: PlainFaq[];
  onboard: PlainFaq[];
  safety: PlainFaq[];
  activity: PlainFaq[];
};

const FAQ_CATEGORIES_I18N: Record<SiteLocale, FaqCategories> = {
  en: {
    general: [
      { question: "What kind of boat trips do you offer?", answer: "We offer all-inclusive shared day trips, sunset cruises and fully customizable private charters from San Antonio port." },
      { question: "How long do the trips last?", answer: "Day and sunset trips last around 3 hours each. Private charters can be tailored with a minimum of 3 hours." },
      { question: "What routes do you usually take?", answer: "Shared tours explore the west coast (Cala Comte) or north coast (Sa Foradada). The captain chooses daily based on conditions. Private trips are fully customizable." },
      { question: "Where is the meeting point?", answer: "Our meeting point is at the port of San Antonio. Exact location and directions are on our contact page and confirmed on your booking voucher." },
    ],
    pricing: [
      { question: "What's included in the price?", answer: "Captain, crew, fuel, unlimited open bar, Spanish tapas, fresh fruit, paddleboards, kayaks and snorkel gear. Private trips offer premium upgrade options." },
      { question: "Can we bring our own food and drinks?", answer: "You may bring your own food, especially on private trips. Outside drinks are not permitted as we provide a full open bar." },
      { question: "How can I book a trip?", answer: "Book online through salvadoribiza.com/book-now with live availability. You receive a confirmation voucher with all details." },
      { question: "What's the cancellation policy?", answer: "Cancellation terms vary by trip type and notice period. We generally offer full or partial refunds with sufficient advance notice. Contact us for details." },
    ],
    onboard: [
      { question: "What's the maximum capacity of the boat?", answer: "Our boats accommodate up to 35 passengers on shared trips. Check individual trip pages or contact us for details." },
      { question: "Is there a toilet on board?", answer: "Yes, our boats are equipped with a marine toilet (WC) for your comfort." },
      { question: "Is there shade on the boat?", answer: "Yes, all boats have a canopy (bimini top) providing ample shade." },
      { question: "Is there music on board?", answer: "Yes, our boats have sound systems with Bluetooth so you can play your own music on private charters." },
    ],
    safety: [
      { question: "Do we need any prior boating experience?", answer: "Not at all! Our expert captain handles everything — just relax and enjoy." },
      { question: "Is it safe for children?", answer: "Absolutely! We have life jackets in all sizes and our crew ensures family safety. Let us know children's ages when booking." },
      { question: "What should we bring?", answer: "Swimwear, towel, sunscreen, hat, sunglasses and camera. Consider seasickness medication if needed." },
      { question: "What happens if there's bad weather?", answer: "Safety is our priority. If conditions are unsafe, we'll reschedule or offer a full refund." },
    ],
    activity: [
      { question: "Can we do watersports?", answer: "Yes! All trips include 15 paddleboards, 2 kayaks and complete snorkelling equipment during swim stops." },
      { question: "Are pets allowed on board?", answer: "Pets are not permitted on shared trips. On private charters, well-behaved pets may be considered upon prior request." },
      { question: "Do you speak languages other than English?", answer: "Yes, our crew speaks fluent Spanish and often Italian or French." },
      { question: "What makes Salvador Ibiza so special?", answer: "Our traditional wooden boat, stunning routes, generous inclusions and friendly professional crew create an authentic unforgettable Ibiza experience." },
    ],
  },
  es: {
    general: [
      { question: "¿Qué excursiones en barco ofrecéis?", answer: "Ofrecemos excursiones compartidas de día todo incluido, cruceros al atardecer y charters privados personalizables desde San Antonio." },
      { question: "¿Cuánto duran las excursiones?", answer: "Las de día y atardecer duran unas 3 horas. Los charters privados se adaptan con mínimo de 3 horas." },
      { question: "¿Qué rutas recorréis?", answer: "Las compartidas exploran la costa oeste (Cala Comte) o norte (Sa Foradada). El capitán elige según condiciones. Los privados son personalizables." },
      { question: "¿Dónde es el punto de encuentro?", answer: "En el puerto de San Antonio. Ubicación exacta en la página de contacto y en tu voucher de reserva." },
    ],
    pricing: [
      { question: "¿Qué incluye el precio?", answer: "Patrón, tripulación, combustible, barra libre, tapas, fruta, paddle surf, kayaks y snorkel. Los privados tienen opciones premium." },
      { question: "¿Podemos traer comida y bebida?", answer: "Puedes traer comida, especialmente en charters privados. Bebida externa no permitida — incluimos barra libre completa." },
      { question: "¿Cómo reservo?", answer: "Reserva online en salvadoribiza.com/book-now con disponibilidad en tiempo real. Recibirás voucher de confirmación." },
      { question: "¿Cuál es la política de cancelación?", answer: "Varía según tipo de excursión y antelación. Generalmente ofrecemos reembolso total o parcial con suficiente aviso. Contáctanos." },
    ],
    onboard: [
      { question: "¿Cuál es la capacidad máxima?", answer: "Hasta 35 pasajeros en excursiones compartidas. Consulta páginas individuales o contáctanos." },
      { question: "¿Hay baño a bordo?", answer: "Sí, nuestros barcos tienen WC marino." },
      { question: "¿Hay sombra?", answer: "Sí, todos los barcos tienen toldo (bimini) con amplia sombra." },
      { question: "¿Hay música?", answer: "Sí, sistema de sonido con Bluetooth en charters privados." },
    ],
    safety: [
      { question: "¿Necesitamos experiencia náutica?", answer: "¡Para nada! Nuestro capitán experto se encarga de todo." },
      { question: "¿Es seguro para niños?", answer: "¡Por supuesto! Chalecos en todas las tallas y tripulación formada. Indica edades al reservar." },
      { question: "¿Qué debemos llevar?", answer: "Traje de baño, toalla, protector solar, gorra, gafas de sol y cámara. Medicación para mareo si la necesitas." },
      { question: "¿Qué pasa si hay mal tiempo?", answer: "La seguridad es prioritaria. Reprogramamos o reembolso completo si no es seguro navegar." },
    ],
    activity: [
      { question: "¿Hay deportes acuáticos?", answer: "¡Sí! 15 paddle surf, 2 kayaks y equipo de snorkel completo en las paradas." },
      { question: "¿Se permiten mascotas?", answer: "No en excursiones compartidas. En charters privados, mascotas bien educadas bajo consulta previa." },
      { question: "¿Hablan otros idiomas?", answer: "Sí, la tripulación habla español con fluidez y a menudo italiano o francés." },
      { question: "¿Qué hace especial a Salvador Ibiza?", answer: "Barco de madera tradicional, rutas espectaculares, inclusiones generosas y tripulación profesional y cercana." },
    ],
  },
  nl: {
    general: [
      { question: "Welke boottochten bieden jullie?", answer: "All-inclusive gedeelde dagtochten, zonsondergangcruises en aanpasbare privé charters vanuit San Antonio." },
      { question: "Hoe lang duren de tochten?", answer: "Dag- en zonsondergangtochten circa 3 uur. Privé charters minimaal 3 uur, aanpasbaar." },
      { question: "Welke routes?", answer: "Gedeelde tochten langs westkust (Cala Comte) of noordkust (Sa Foradada). Kapitein kiest dagelijks. Privé volledig aanpasbaar." },
      { question: "Waar is het ontmoetingspunt?", answer: "Haven van San Antonio. Exacte locatie op contactpagina en boekingsvoucher." },
    ],
    pricing: [
      { question: "Wat is inbegrepen?", answer: "Kapitein, bemanning, brandstof, open bar, tapas, fruit, paddleboards, kajaks en snorkel. Privé met premium opties." },
      { question: "Eigen eten en drinken?", answer: "Eigen eten mag, vooral op privé charters. Eigen drank niet toegestaan — volledige open bar inbegrepen." },
      { question: "Hoe boek ik?", answer: "Online via salvadoribiza.com/book-now met live beschikbaarheid. Bevestigingsvoucher met alle details." },
      { question: "Annuleringsbeleid?", answer: "Varieert per tocht en termijn. Meestal volledige of gedeeltelijke terugbetaling bij voldoende vooruitzicht. Neem contact op." },
    ],
    onboard: [
      { question: "Maximale capaciteit?", answer: "Tot 35 passagiers op gedeelde tochten. Check individuele pagina's of contact." },
      { question: "Toilet aan boord?", answer: "Ja, marine toilet (WC) aan boord." },
      { question: "Schaduw?", answer: "Ja, alle boten hebben een bimini met ruime schaduw." },
      { question: "Muziek?", answer: "Ja, geluidssysteem met Bluetooth op privé charters." },
    ],
    safety: [
      { question: "Vaarervaring nodig?", answer: "Helemaal niet! Onze expert kapitein regelt alles." },
      { question: "Veilig voor kinderen?", answer: "Absoluut! Zwemvesten alle maten en getrainde bemanning. Geef leeftijden door bij boeking." },
      { question: "Wat meenemen?", answer: "Zwemkleding, handdoek, zonnebrand, hoed, zonnebril en camera. Zeeziektepillen indien nodig." },
      { question: "Slecht weer?", answer: "Veiligheid voorop. Herschikken of volledige terugbetaling bij onveilige omstandigheden." },
    ],
    activity: [
      { question: "Watersporten?", answer: "Ja! 15 paddleboards, 2 kajaks en snorkeluitrusting bij zwemstops." },
      { question: "Huisdieren?", answer: "Niet op gedeelde tochten. Op privé charters mogelijk op aanvraag." },
      { question: "Andere talen?", answer: "Ja, bemanning spreekt vloeiend Spaans en vaak Italiaans of Frans." },
      { question: "Wat maakt Salvador Ibiza bijzonder?", answer: "Traditionele houten boot, prachtige routes, royale inclusies en vriendelijke professionele bemanning." },
    ],
  },
  fr: {
    general: [
      { question: "Quelles excursions proposez-vous ?", answer: "Excursions partagées jour tout inclus, croisières coucher de soleil et charters privés personnalisables depuis San Antonio." },
      { question: "Combien de temps durent les excursions ?", answer: "Jour et coucher de soleil environ 3 h. Charters privés minimum 3 h, personnalisables." },
      { question: "Quels itinéraires ?", answer: "Partagées : côte ouest (Cala Comte) ou nord (Sa Foradada). Capitaine choisit quotidiennement. Privés entièrement personnalisables." },
      { question: "Point de rendez-vous ?", answer: "Port de San Antonio. Emplacement exact sur page contact et voucher de réservation." },
    ],
    pricing: [
      { question: "Qu'est-ce qui est inclus ?", answer: "Capitaine, équipage, carburant, open bar, tapas, fruits, paddle, kayaks et snorkel. Privés avec options premium." },
      { question: "Nourriture et boissons propres ?", answer: "Nourriture autorisée, surtout en privé. Boissons extérieures interdites — open bar complet inclus." },
      { question: "Comment réserver ?", answer: "En ligne sur salvadoribiza.com/book-now avec disponibilité en direct. Voucher de confirmation fourni." },
      { question: "Politique d'annulation ?", answer: "Varie selon type et délai. Remboursement total ou partiel avec préavis suffisant. Contactez-nous." },
    ],
    onboard: [
      { question: "Capacité maximale ?", answer: "Jusqu'à 35 passagers en partagé. Voir pages individuelles ou contact." },
      { question: "Toilettes à bord ?", answer: "Oui, WC marin à bord." },
      { question: "Ombre ?", answer: "Oui, tous les bateaux ont un bimini avec ombre ample." },
      { question: "Musique ?", answer: "Oui, système son avec Bluetooth sur charters privés." },
    ],
    safety: [
      { question: "Expérience nautique requise ?", answer: "Pas du tout ! Notre capitaine expert gère tout." },
      { question: "Sûr pour les enfants ?", answer: "Absolument ! Gilets toutes tailles et équipage formé. Indiquez les âges à la réservation." },
      { question: "Que apporter ?", answer: "Maillot, serviette, crème solaire, chapeau, lunettes et appareil photo. Médicament anti-nausée si besoin." },
      { question: "Mauvais temps ?", answer: "Sécurité prioritaire. Report ou remboursement intégral si conditions dangereuses." },
    ],
    activity: [
      { question: "Sports nautiques ?", answer: "Oui ! 15 paddleboards, 2 kayaks et équipement snorkel complet aux arrêts baignade." },
      { question: "Animaux ?", answer: "Non en partagé. En privé, animaux bien élevés sur demande préalable." },
      { question: "Autres langues ?", answer: "Oui, l'équipage parle couramment espagnol et souvent italien ou français." },
      { question: "Qu'est-ce qui rend Salvador Ibiza spécial ?", answer: "Bateau bois traditionnel, routes magnifiques, inclusions généreuses et équipage professionnel et chaleureux." },
    ],
  },
};

export function getFaqCategories(locale: SiteLocale): FaqCategories {
  return pick(FAQ_CATEGORIES_I18N, locale);
}

/** All FAQs for FAQPage JSON-LD schema */
export function getFaqPageSchemaFaqs(locale: SiteLocale): PlainFaq[] {
  const cats = getFaqCategories(locale);
  return [
    ...getTopicGuideFaqs(locale),
    ...getDiscoverabilityFaqs(locale),
    ...cats.general,
    ...cats.pricing,
    ...cats.onboard,
    ...cats.safety,
    ...cats.activity,
  ];
}
