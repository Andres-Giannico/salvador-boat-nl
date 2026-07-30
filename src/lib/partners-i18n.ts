import type { SiteLocale } from '@/lib/site-locale';
import type { PageSeoFields } from '@/lib/seo-i18n';

function pick<T>(record: Record<SiteLocale, T>, locale: SiteLocale): T {
  return record[locale] ?? record.en;
}

export type PartnersCopy = {
  heroEyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  heroImageAlt: string;
  ctaPartner: string;
  ctaInfluencer: string;
  trustBar: string;
  businessEyebrow: string;
  businessTitle: string;
  businessIntro: string;
  bannerEyebrow: string;
  bannerTitle: string;
  bannerBody: string;
  bannerImageAlt: string;
  sellTitle: string;
  sellOptions: { title: string; description: string }[];
  benefitsTitle: string;
  benefits: { title: string; description: string }[];
  turvokEyebrow: string;
  turvokTitle: string;
  turvokBody: string;
  turvokNote: string;
  turvokMockupCaption: string;
  turvokWidgetCaption: string;
  turvokMockupAlt: string;
  turvokWidgetAlt: string;
  turvokFeatures: string[];
  registerTurvok: string;
  experiencesTitle: string;
  experiences: { alt: string; title: string; description: string }[];
  howTitle: string;
  infographicAlt: string;
  steps: { title: string; description: string }[];
  questions: string;
  influencerEyebrow: string;
  influencerTitle: string;
  influencerIntro: string;
  influencerFeatures: { title: string; description: string }[];
  influencerHowTitle: string;
  influencerSteps: string[];
  applyTurvok: string;
  whatsAppUrl: string;
};

const PARTNERS_SEO: Record<SiteLocale, PageSeoFields> = {
  en: {
    title: 'Partner Programme | Salvador Ibiza',
    description:
      'Offer premium Ibiza boat experiences to your guests. Hotels, villas, concierges and travel professionals can sell Salvador Ibiza via Turvok — earn commission on confirmed bookings.',
  },
  es: {
    title: 'Programa de Partners | Salvador Ibiza',
    description:
      'Ofrece experiencias premium en barco en Ibiza a tus huéspedes. Hoteles, villas, conserjerías y profesionales del viaje pueden vender Salvador Ibiza con Turvok y ganar comisión por reserva confirmada.',
  },
  nl: {
    title: 'Partnerprogramma | Salvador Ibiza',
    description:
      'Bied premium bootervaringen op Ibiza aan je gasten. Hotels, villa\'s, conciërges en reisprofessionals verkopen Salvador Ibiza via Turvok — commissie op elke bevestigde boeking.',
  },
  fr: {
    title: 'Programme Partenaires | Salvador Ibiza',
    description:
      'Proposez des expériences bateau premium à Ibiza à vos clients. Hôtels, villas, conciergeries et professionnels du voyage vendent Salvador Ibiza via Turvok — commission sur chaque réservation confirmée.',
  },
};

const PARTNERS_COPY: Record<SiteLocale, PartnersCopy> = {
  en: {
    heroEyebrow: 'Partner Programme',
    heroTitle: 'Offer your guests an unforgettable Ibiza boat experience',
    heroSubtitle:
      'Hotels, villas, concierge teams and travel professionals can offer and sell Salvador Ibiza experiences — simply, professionally, and directly from your own channels.',
    heroImageAlt: 'Salvador Ibiza wooden boat in the turquoise waters of Cala Comte, Ibiza',
    ctaPartner: 'Become a Partner',
    ctaInfluencer: 'Influencer programme',
    trustBar: "TripAdvisor Traveller's Choice — 3 years running",
    businessEyebrow: 'For hospitality & travel partners',
    businessTitle: 'Enhance your guest offering with a trusted local experience',
    businessIntro:
      'Salvador Ibiza offers premium wooden boat experiences for travellers who want to discover the authentic Ibiza from the sea. Join our partner programme to recommend a trusted experience, earn commission on confirmed bookings, and reduce manual coordination for your team.',
    bannerEyebrow: 'Premium wooden boat experiences',
    bannerTitle: 'A partner programme built for Ibiza hospitality',
    bannerBody:
      'Recommend day trips, sunset cruises and private charters with confidence. Your guests book in minutes — your team earns on every confirmed reservation.',
    bannerImageAlt: 'Salvador Ibiza boat in Cala Comte — premium partner programme',
    sellTitle: 'What your team can sell',
    sellOptions: [
      {
        title: 'Ticket by ticket — shared boat trips',
        description:
          'Sell individual places on our scheduled day trips and sunset cruises. Perfect for couples, small groups or guests who want a premium sea experience without chartering the whole boat.',
      },
      {
        title: 'Full private charter — exclusive use of the boat',
        description:
          'Book Salvador Ibiza exclusively for your guests — ideal for villas, celebrations, corporate groups, weddings and VIP stays. Private charters accommodate up to 35 guests.',
      },
    ],
    benefitsTitle: 'Why partner with us',
    benefits: [
      {
        title: 'Earn on confirmed bookings',
        description: 'Earn commission on every confirmed booking through your partner channel.',
      },
      {
        title: 'Trusted local experience',
        description: 'A recognised Ibiza boat experience your team can recommend with confidence.',
      },
      {
        title: 'Real-time availability',
        description: 'Guests can check dates and capacity without back-and-forth coordination.',
      },
      {
        title: 'Less manual work',
        description: 'Automate bookings and reduce phone calls, emails and manual follow-ups.',
      },
    ],
    turvokEyebrow: 'Powered by Turvok',
    turvokTitle: 'Let your guests book directly from your website',
    turvokBody:
      'Salvador Ibiza uses Turvok as its booking technology. Partners receive a dedicated booking link or embed this widget directly on their website — the same experience your guests use to pick a date, select tickets and confirm their reservation.',
    turvokNote: 'This is what your guests see — not a back-office dashboard.',
    turvokMockupCaption: 'Embed the widget on your hotel or villa website',
    turvokWidgetCaption: 'Live calendar, pricing and ticket selection — what your guests see',
    turvokMockupAlt:
      'Salvador Ibiza booking widget embedded on a boutique hotel website — concierge desk mockup',
    turvokWidgetAlt:
      'Salvador Ibiza booking widget — calendar, date and ticket selection for partners',
    turvokFeatures: [
      'Live availability and pricing',
      'Mobile-optimised booking experience',
      'No unnecessary redirects for your guests',
      'Turn recommendations into confirmed reservations',
    ],
    registerTurvok: 'Register on Turvok',
    experiencesTitle: 'Experiences your guests will love',
    experiences: [
      {
        alt: 'Private charter on Salvador Ibiza wooden boat',
        title: 'Private Charters',
        description: 'Full boat hire — exclusive use for groups of up to 35 guests.',
      },
      {
        alt: 'Sunset cruise on Salvador Ibiza',
        title: 'Sunset Cruises',
        description: 'Sell tickets per person, or arrange a private sunset charter.',
      },
      {
        alt: 'Shared boat trip with paddleboarding in Cala Comte',
        title: 'Shared Boat Trips',
        description: 'Ticket-by-ticket day trips — open bar, paddleboards and hidden coves.',
      },
      {
        alt: 'Group of friends on a giant paddleboard during a Salvador Ibiza excursion',
        title: 'Group Experiences',
        description: 'Multiple tickets or a full private charter for groups and events.',
      },
    ],
    howTitle: 'How it works',
    infographicAlt:
      'Luxury travel partner programme — three steps: register, receive booking link or widget, start selling boat experiences',
    steps: [
      {
        title: 'Register on Turvok',
        description:
          'Register directly on Turvok — it takes just a few minutes to create your partner account.',
      },
      {
        title: 'Receive your booking link or website widget',
        description:
          'We set up your partner access with Turvok — a dedicated link, or an embeddable widget for your website.',
      },
      {
        title: 'Start offering Salvador Ibiza to your guests',
        description:
          'Share your link or embed the widget. Your guests book directly — you earn commission on every confirmed reservation.',
      },
    ],
    questions: 'Questions?',
    influencerEyebrow: 'For creators & influencers',
    influencerTitle: 'Turvok creator programme',
    influencerIntro:
      'Monetise your audience with a personalised booking link. Share on social media and earn commission on every confirmed ticket — fully automated, no manual follow-up.',
    influencerFeatures: [
      {
        title: 'Effortless setup',
        description: 'Sign up in minutes and get your unique booking link instantly.',
      },
      {
        title: 'Attractive commissions',
        description: 'Earn ~25% commission on every ticket sold via your personal link.',
      },
      {
        title: 'Instant URL creation',
        description: 'Turvok auto-generates your personalised URL — share and start earning.',
      },
      {
        title: 'Monetise your audience',
        description: 'Turn your social reach into real revenue. Ideal for creators of all sizes.',
      },
    ],
    influencerHowTitle: 'How it works',
    influencerSteps: [
      'Provide basic info and your profile details.',
      'Receive your unique booking URL instantly.',
      'Share the link on your social channels.',
      'Earn ~25% commission on every confirmed ticket.',
    ],
    applyTurvok: 'Apply via Turvok',
    whatsAppUrl:
      "https://wa.me/34871181393?text=Hi!%20I'm%20interested%20in%20the%20Turvok%20influencer%20programme.",
  },
  es: {
    heroEyebrow: 'Programa de Partners',
    heroTitle: 'Ofrece a tus huéspedes una experiencia en barco inolvidable en Ibiza',
    heroSubtitle:
      'Hoteles, villas, equipos de conserjería y profesionales del viaje pueden ofrecer y vender experiencias Salvador Ibiza — de forma sencilla, profesional y directamente desde sus propios canales.',
    heroImageAlt: 'Barco de madera Salvador Ibiza en las aguas turquesas de Cala Comte, Ibiza',
    ctaPartner: 'Hazte Partner',
    ctaInfluencer: 'Programa para influencers',
    trustBar: "TripAdvisor Traveller's Choice — 3 años consecutivos",
    businessEyebrow: 'Para partners de hostelería y viajes',
    businessTitle: 'Mejora tu oferta con una experiencia local de confianza',
    businessIntro:
      'Salvador Ibiza ofrece experiencias premium en barco de madera para viajeros que quieren descubrir la Ibiza auténtica desde el mar. Únete a nuestro programa de partners para recomendar una experiencia de confianza, ganar comisión por reservas confirmadas y reducir la coordinación manual de tu equipo.',
    bannerEyebrow: 'Experiencias premium en barco de madera',
    bannerTitle: 'Un programa de partners pensado para la hostelería de Ibiza',
    bannerBody:
      'Recomienda excursiones de día, puestas de sol y charters privados con confianza. Tus huéspedes reservan en minutos — tu equipo gana con cada reserva confirmada.',
    bannerImageAlt: 'Barco Salvador Ibiza en Cala Comte — programa premium de partners',
    sellTitle: 'Qué puede vender tu equipo',
    sellOptions: [
      {
        title: 'Ticket a ticket — excursiones compartidas',
        description:
          'Vende plazas individuales en nuestras excursiones diurnas y cruceros al atardecer. Ideal para parejas, grupos pequeños o huéspedes que buscan una experiencia premium en el mar sin reservar el barco entero.',
      },
      {
        title: 'Charter privado completo — uso exclusivo del barco',
        description:
          'Reserva Salvador Ibiza en exclusiva para tus huéspedes — ideal para villas, celebraciones, grupos corporativos, bodas y estancias VIP. Los charters privados admiten hasta 35 personas.',
      },
    ],
    benefitsTitle: 'Por qué asociarte con nosotros',
    benefits: [
      {
        title: 'Gana con reservas confirmadas',
        description: 'Comisión por cada reserva confirmada a través de tu canal de partner.',
      },
      {
        title: 'Experiencia local de confianza',
        description: 'Una experiencia en barco reconocida en Ibiza que tu equipo puede recomendar con seguridad.',
      },
      {
        title: 'Disponibilidad en tiempo real',
        description: 'Los huéspedes consultan fechas y plazas sin idas y venidas.',
      },
      {
        title: 'Menos trabajo manual',
        description: 'Automatiza reservas y reduce llamadas, emails y seguimientos manuales.',
      },
    ],
    turvokEyebrow: 'Con tecnología Turvok',
    turvokTitle: 'Deja que tus huéspedes reserven directamente desde tu web',
    turvokBody:
      'Salvador Ibiza utiliza Turvok como tecnología de reservas. Los partners reciben un enlace dedicado o integran este widget en su web — la misma experiencia que usan tus huéspedes para elegir fecha, seleccionar tickets y confirmar.',
    turvokNote: 'Esto es lo que ven tus huéspedes — no un panel de back-office.',
    turvokMockupCaption: 'Integra el widget en la web de tu hotel o villa',
    turvokWidgetCaption: 'Calendario en vivo, precios y selección de tickets — lo que ven tus huéspedes',
    turvokMockupAlt:
      'Widget de reservas Salvador Ibiza integrado en la web de un hotel boutique — mockup en recepción',
    turvokWidgetAlt:
      'Widget de reservas Salvador Ibiza — calendario, fecha y selección de tickets para partners',
    turvokFeatures: [
      'Disponibilidad y precios en tiempo real',
      'Experiencia de reserva optimizada para móvil',
      'Sin redirecciones innecesarias para tus huéspedes',
      'Convierte recomendaciones en reservas confirmadas',
    ],
    registerTurvok: 'Registrarse en Turvok',
    experiencesTitle: 'Experiencias que tus huéspedes adorarán',
    experiences: [
      {
        alt: 'Charter privado en el barco de madera Salvador Ibiza',
        title: 'Charters Privados',
        description: 'Alquiler del barco completo — uso exclusivo para grupos de hasta 35 personas.',
      },
      {
        alt: 'Crucero al atardecer en Salvador Ibiza',
        title: 'Cruceros al Atardecer',
        description: 'Vende tickets por persona o organiza un charter privado al atardecer.',
      },
      {
        alt: 'Excursión compartida con paddle surf en Cala Comte',
        title: 'Excursiones Compartidas',
        description: 'Excursiones diurnas ticket a ticket — barra libre, paddleboards y calas secretas.',
      },
      {
        alt: 'Grupo de amigos en una paddle gigante durante una excursión Salvador Ibiza',
        title: 'Experiencias en Grupo',
        description: 'Varios tickets o charter privado completo para grupos y eventos.',
      },
    ],
    howTitle: 'Cómo funciona',
    infographicAlt:
      'Programme de partners — tres pasos: registrarse, recibir enlace o widget, empezar a vender experiencias en barco',
    steps: [
      {
        title: 'Regístrate en Turvok',
        description:
          'Regístrate directamente en Turvok — crear tu cuenta de partner lleva solo unos minutos.',
      },
      {
        title: 'Recibe tu enlace de reserva o widget web',
        description:
          'Configuramos tu acceso de partner con Turvok — un enlace dedicado o un widget integrable en tu web.',
      },
      {
        title: 'Empieza a ofrecer Salvador Ibiza a tus huéspedes',
        description:
          'Comparte tu enlace o integra el widget. Tus huéspedes reservan directamente — tú ganas comisión por cada reserva confirmada.',
      },
    ],
    questions: '¿Preguntas?',
    influencerEyebrow: 'Para creadores e influencers',
    influencerTitle: 'Programa de creadores Turvok',
    influencerIntro:
      'Monetiza tu audiencia con un enlace de reserva personalizado. Compártelo en redes y gana comisión por cada ticket confirmado — totalmente automatizado, sin seguimiento manual.',
    influencerFeatures: [
      {
        title: 'Configuración sencilla',
        description: 'Regístrate en minutos y recibe tu enlace de reserva único al instante.',
      },
      {
        title: 'Comisiones atractivas',
        description: 'Gana ~25% de comisión por cada ticket vendido con tu enlace personal.',
      },
      {
        title: 'URL instantánea',
        description: 'Turvok genera tu URL personalizada automáticamente — comparte y empieza a ganar.',
      },
      {
        title: 'Monetiza tu audiencia',
        description: 'Convierte tu alcance social en ingresos reales. Ideal para creadores de cualquier tamaño.',
      },
    ],
    influencerHowTitle: 'Cómo funciona',
    influencerSteps: [
      'Proporciona información básica y los datos de tu perfil.',
      'Recibe tu URL de reserva única al instante.',
      'Comparte el enlace en tus redes sociales.',
      'Gana ~25% de comisión por cada ticket confirmado.',
    ],
    applyTurvok: 'Solicitar vía Turvok',
    whatsAppUrl:
      'https://wa.me/34871181393?text=%C2%A1Hola!%20Me%20interesa%20el%20programa%20de%20influencers%20de%20Turvok.',
  },
  nl: {
    heroEyebrow: 'Partnerprogramma',
    heroTitle: 'Bied je gasten een onvergetelijke bootervaring op Ibiza',
    heroSubtitle:
      'Hotels, villa\'s, conciërgeteams en reisprofessionals kunnen Salvador Ibiza-ervaringen aanbieden en verkopen — eenvoudig, professioneel en rechtstreeks via eigen kanalen.',
    heroImageAlt: 'Houten boot Salvador Ibiza in het turquoise water van Cala Comte, Ibiza',
    ctaPartner: 'Word Partner',
    ctaInfluencer: 'Influencerprogramma',
    trustBar: "TripAdvisor Traveller's Choice — 3 jaar op rij",
    businessEyebrow: 'Voor hospitality- en reispartners',
    businessTitle: 'Versterk je aanbod met een vertrouwde lokale ervaring',
    businessIntro:
      'Salvador Ibiza biedt premium houten bootervaringen voor reizigers die het authentieke Ibiza vanaf zee willen ontdekken. Sluit je aan bij ons partnerprogramma om een vertrouwde ervaring aan te bevelen, commissie te verdienen op bevestigde boekingen en handmatige coördinatie voor je team te verminderen.',
    bannerEyebrow: 'Premium houten bootervaringen',
    bannerTitle: 'Een partnerprogramma voor Ibiza hospitality',
    bannerBody:
      'Beveel dagtochten, zonsondergangcruises en privécharters met vertrouwen aan. Je gasten boeken in minuten — je team verdient aan elke bevestigde reservering.',
    bannerImageAlt: 'Salvador Ibiza boot in Cala Comte — premium partnerprogramma',
    sellTitle: 'Wat je team kan verkopen',
    sellOptions: [
      {
        title: 'Ticket voor ticket — gedeelde boottochten',
        description:
          'Verkoop individuele plaatsen op onze geplande dagtochten en zonsondergangcruises. Perfect voor koppels, kleine groepen of gasten die een premium zee-ervaring willen zonder de hele boot te charteren.',
      },
      {
        title: 'Volledige privécharter — exclusief gebruik van de boot',
        description:
          'Boek Salvador Ibiza exclusief voor je gasten — ideaal voor villa\'s, vieringen, bedrijfsgroepen, bruiloften en VIP-verblijven. Privécharters bieden plaats aan maximaal 35 gasten.',
      },
    ],
    benefitsTitle: 'Waarom partner worden',
    benefits: [
      {
        title: 'Verdien op bevestigde boekingen',
        description: 'Commissie op elke bevestigde boeking via jouw partnerkanaal.',
      },
      {
        title: 'Vertrouwde lokale ervaring',
        description: 'Een erkende Ibiza-bootervaring die je team met vertrouwen kan aanbevelen.',
      },
      {
        title: 'Realtime beschikbaarheid',
        description: 'Gasten controleren data en capaciteit zonder heen-en-weer.',
      },
      {
        title: 'Minder handmatig werk',
        description: 'Automatiseer boekingen en verminder telefoontjes, e-mails en handmatige opvolging.',
      },
    ],
    turvokEyebrow: 'Powered by Turvok',
    turvokTitle: 'Laat je gasten direct vanaf je website boeken',
    turvokBody:
      'Salvador Ibiza gebruikt Turvok als boekingstechnologie. Partners ontvangen een dedicated boekingslink of integreren deze widget op hun website — dezelfde ervaring die gasten gebruiken om een datum te kiezen, tickets te selecteren en te bevestigen.',
    turvokNote: 'Dit is wat je gasten zien — geen back-office dashboard.',
    turvokMockupCaption: 'Embed de widget op je hotel- of villawebsite',
    turvokWidgetCaption: 'Live kalender, prijzen en ticketselectie — wat je gasten zien',
    turvokMockupAlt:
      'Salvador Ibiza boekingswidget ingebed op een boutique hotelwebsite — concierge mockup',
    turvokWidgetAlt:
      'Salvador Ibiza boekingswidget — kalender, datum en ticketselectie voor partners',
    turvokFeatures: [
      'Live beschikbaarheid en prijzen',
      'Mobiel geoptimaliseerde boekingservaring',
      'Geen onnodige redirects voor je gasten',
      'Zet aanbevelingen om in bevestigde reserveringen',
    ],
    registerTurvok: 'Registreren op Turvok',
    experiencesTitle: 'Ervaringen waar je gasten van houden',
    experiences: [
      {
        alt: 'Privécharter op de houten boot Salvador Ibiza',
        title: 'Privécharters',
        description: 'Volledige bootverhuur — exclusief gebruik voor groepen tot 35 gasten.',
      },
      {
        alt: 'Zonsondergangcruise op Salvador Ibiza',
        title: 'Zonsondergangcruises',
        description: 'Verkoop tickets per persoon of regel een privé zonsondergangcharter.',
      },
      {
        alt: 'Gedeelde boottocht met paddleboarden in Cala Comte',
        title: 'Gedeelde Boottochten',
        description: 'Dagtochten ticket voor ticket — open bar, paddleboards en verborgen baaien.',
      },
      {
        alt: 'Groep vrienden op een reuzenpaddleboard tijdens een Salvador Ibiza excursie',
        title: 'Groepservaringen',
        description: 'Meerdere tickets of een volledige privécharter voor groepen en events.',
      },
    ],
    howTitle: 'Hoe het werkt',
    infographicAlt:
      'Luxury travel partnerprogramma — drie stappen: registreren, boekingslink of widget ontvangen, bootervaringen verkopen',
    steps: [
      {
        title: 'Registreren op Turvok',
        description:
          'Registreer direct op Turvok — een partneraccount aanmaken duurt slechts enkele minuten.',
      },
      {
        title: 'Ontvang je boekingslink of website-widget',
        description:
          'We richten je partnertoegang in met Turvok — een dedicated link of een embedbare widget voor je website.',
      },
      {
        title: 'Begin Salvador Ibiza aan te bieden aan je gasten',
        description:
          'Deel je link of embed de widget. Je gasten boeken direct — jij verdient commissie op elke bevestigde reservering.',
      },
    ],
    questions: 'Vragen?',
    influencerEyebrow: 'Voor creators & influencers',
    influencerTitle: 'Turvok creatorprogramma',
    influencerIntro:
      'Monetiseer je publiek met een gepersonaliseerde boekingslink. Deel op social media en verdien commissie op elk bevestigd ticket — volledig geautomatiseerd, geen handmatige opvolging.',
    influencerFeatures: [
      {
        title: 'Eenvoudige setup',
        description: 'Meld je in minuten aan en ontvang direct je unieke boekingslink.',
      },
      {
        title: 'Aantrekkelijke commissies',
        description: 'Verdien ~25% commissie op elk ticket via je persoonlijke link.',
      },
      {
        title: 'Directe URL',
        description: 'Turvok genereert automatisch je gepersonaliseerde URL — deel en begin te verdienen.',
      },
      {
        title: 'Monetiseer je publiek',
        description: 'Zet je social bereik om in echte inkomsten. Ideaal voor creators van elke omvang.',
      },
    ],
    influencerHowTitle: 'Hoe het werkt',
    influencerSteps: [
      'Geef basisinfo en je profielgegevens.',
      'Ontvang direct je unieke boekings-URL.',
      'Deel de link op je social kanalen.',
      'Verdien ~25% commissie op elk bevestigd ticket.',
    ],
    applyTurvok: 'Aanvragen via Turvok',
    whatsAppUrl:
      'https://wa.me/34871181393?text=Hoi!%20Ik%20heb%20interesse%20in%20het%20Turvok%20influencerprogramma.',
  },
  fr: {
    heroEyebrow: 'Programme Partenaires',
    heroTitle: 'Offrez à vos clients une expérience bateau inoubliable à Ibiza',
    heroSubtitle:
      'Hôtels, villas, équipes de conciergerie et professionnels du voyage peuvent proposer et vendre les expériences Salvador Ibiza — simplement, professionnellement et directement depuis leurs propres canaux.',
    heroImageAlt: 'Bateau en bois Salvador Ibiza dans les eaux turquoise de Cala Comte, Ibiza',
    ctaPartner: 'Devenir Partenaire',
    ctaInfluencer: 'Programme influenceurs',
    trustBar: "TripAdvisor Traveller's Choice — 3 années consécutives",
    businessEyebrow: 'Pour les partenaires hôteliers et voyage',
    businessTitle: 'Enrichissez votre offre avec une expérience locale de confiance',
    businessIntro:
      'Salvador Ibiza propose des expériences premium en bateau en bois pour les voyageurs qui veulent découvrir l\'Ibiza authentique depuis la mer. Rejoignez notre programme partenaires pour recommander une expérience de confiance, gagner une commission sur les réservations confirmées et réduire la coordination manuelle de votre équipe.',
    bannerEyebrow: 'Expériences premium en bateau en bois',
    bannerTitle: 'Un programme partenaires conçu pour l\'hospitalité ibizienne',
    bannerBody:
      'Recommandez des excursions de jour, des croisières au coucher du soleil et des charters privés en toute confiance. Vos clients réservent en quelques minutes — votre équipe gagne sur chaque réservation confirmée.',
    bannerImageAlt: 'Bateau Salvador Ibiza à Cala Comte — programme partenaires premium',
    sellTitle: 'Ce que votre équipe peut vendre',
    sellOptions: [
      {
        title: 'Ticket par ticket — excursions partagées',
        description:
          'Vendez des places individuelles sur nos excursions de jour et croisières au coucher du soleil. Parfait pour les couples, petits groupes ou clients souhaitant une expérience premium en mer sans affréter le bateau entier.',
      },
      {
        title: 'Charter privé complet — usage exclusif du bateau',
        description:
          'Réservez Salvador Ibiza en exclusivité pour vos clients — idéal pour villas, célébrations, groupes corporate, mariages et séjours VIP. Les charters privés accueillent jusqu\'à 35 personnes.',
      },
    ],
    benefitsTitle: 'Pourquoi devenir partenaire',
    benefits: [
      {
        title: 'Gagnez sur les réservations confirmées',
        description: 'Commission sur chaque réservation confirmée via votre canal partenaire.',
      },
      {
        title: 'Expérience locale de confiance',
        description: 'Une expérience bateau reconnue à Ibiza que votre équipe peut recommander en toute confiance.',
      },
      {
        title: 'Disponibilité en temps réel',
        description: 'Les clients consultent dates et capacité sans allers-retours.',
      },
      {
        title: 'Moins de travail manuel',
        description: 'Automatisez les réservations et réduisez appels, e-mails et relances manuelles.',
      },
    ],
    turvokEyebrow: 'Propulsé par Turvok',
    turvokTitle: 'Laissez vos clients réserver directement depuis votre site',
    turvokBody:
      'Salvador Ibiza utilise Turvok comme technologie de réservation. Les partenaires reçoivent un lien dédié ou intègrent ce widget sur leur site — la même expérience que vos clients utilisent pour choisir une date, sélectionner des tickets et confirmer.',
    turvokNote: 'C\'est ce que vos clients voient — pas un tableau de bord back-office.',
    turvokMockupCaption: 'Intégrez le widget sur le site de votre hôtel ou villa',
    turvokWidgetCaption: 'Calendrier en direct, tarifs et sélection de tickets — ce que vos clients voient',
    turvokMockupAlt:
      'Widget de réservation Salvador Ibiza intégré sur un site d\'hôtel boutique — mockup conciergerie',
    turvokWidgetAlt:
      'Widget de réservation Salvador Ibiza — calendrier, date et sélection de tickets pour partenaires',
    turvokFeatures: [
      'Disponibilité et tarifs en direct',
      'Expérience de réservation optimisée mobile',
      'Pas de redirections inutiles pour vos clients',
      'Transformez les recommandations en réservations confirmées',
    ],
    registerTurvok: 'S\'inscrire sur Turvok',
    experiencesTitle: 'Des expériences que vos clients adoreront',
    experiences: [
      {
        alt: 'Charter privé sur le bateau en bois Salvador Ibiza',
        title: 'Charters Privés',
        description: 'Location du bateau entier — usage exclusif pour groupes jusqu\'à 35 personnes.',
      },
      {
        alt: 'Croisière coucher de soleil sur Salvador Ibiza',
        title: 'Croisières au Coucher du Soleil',
        description: 'Vendez des tickets à l\'unité ou organisez un charter privé au coucher du soleil.',
      },
      {
        alt: 'Excursion partagée avec paddle dans Cala Comte',
        title: 'Excursions Partagées',
        description: 'Excursions de jour ticket par ticket — open bar, paddleboards et criques secrètes.',
      },
      {
        alt: 'Groupe d\'amis sur une paddle géante lors d\'une excursion Salvador Ibiza',
        title: 'Expériences de Groupe',
        description: 'Plusieurs tickets ou charter privé complet pour groupes et événements.',
      },
    ],
    howTitle: 'Comment ça marche',
    infographicAlt:
      'Programme partenaires voyage de luxe — trois étapes : s\'inscrire, recevoir lien ou widget, vendre des expériences bateau',
    steps: [
      {
        title: 'Inscrivez-vous sur Turvok',
        description:
          'Inscrivez-vous directement sur Turvok — créer votre compte partenaire ne prend que quelques minutes.',
      },
      {
        title: 'Recevez votre lien de réservation ou widget web',
        description:
          'Nous configurons votre accès partenaire avec Turvok — un lien dédié ou un widget intégrable sur votre site.',
      },
      {
        title: 'Proposez Salvador Ibiza à vos clients',
        description:
          'Partagez votre lien ou intégrez le widget. Vos clients réservent directement — vous gagnez une commission sur chaque réservation confirmée.',
      },
    ],
    questions: 'Des questions ?',
    influencerEyebrow: 'Pour créateurs & influenceurs',
    influencerTitle: 'Programme créateurs Turvok',
    influencerIntro:
      'Monétisez votre audience avec un lien de réservation personnalisé. Partagez sur les réseaux sociaux et gagnez une commission sur chaque ticket confirmé — entièrement automatisé, sans suivi manuel.',
    influencerFeatures: [
      {
        title: 'Configuration simple',
        description: 'Inscrivez-vous en quelques minutes et recevez instantanément votre lien unique.',
      },
      {
        title: 'Commissions attractives',
        description: 'Gagnez ~25% de commission sur chaque ticket vendu via votre lien personnel.',
      },
      {
        title: 'URL instantanée',
        description: 'Turvok génère automatiquement votre URL personnalisée — partagez et commencez à gagner.',
      },
      {
        title: 'Monétisez votre audience',
        description: 'Transformez votre portée sociale en revenus réels. Idéal pour les créateurs de toute taille.',
      },
    ],
    influencerHowTitle: 'Comment ça marche',
    influencerSteps: [
      'Fournissez vos informations de base et votre profil.',
      'Recevez instantanément votre URL de réservation unique.',
      'Partagez le lien sur vos réseaux sociaux.',
      'Gagnez ~25% de commission sur chaque ticket confirmé.',
    ],
    applyTurvok: 'Postuler via Turvok',
    whatsAppUrl:
      'https://wa.me/34871181393?text=Bonjour!%20Je%20suis%20int%C3%A9ress%C3%A9(e)%20par%20le%20programme%20influenceurs%20Turvok.',
  },
};

const EXPERIENCE_IMAGE_SRC = [
  '/images/optimized/salvador-ibiza-private-charter-boat.webp',
  '/images/optimized/ibiza-sunset-boat-trip-salvador.webp',
  '/images/optimized/salvador-ibiza-cala-comte-guests-paddleboarding.webp',
  '/images/boat/4chicasparadasentablaxxl.webp',
] as const;

const SELL_OPTION_STYLES = [
  { accent: 'border-l-[#7C2D12]', titleColor: 'text-[#7C2D12]' },
  { accent: 'border-l-[#B8860B]', titleColor: 'text-[#5C4033]' },
] as const;

const INFLUENCER_ICON_KEYS = ['share', 'dollar', 'zap', 'trending'] as const;

export function getPartnersSeo(locale: SiteLocale): PageSeoFields {
  return pick(PARTNERS_SEO, locale);
}

export function getPartnersCopy(locale: SiteLocale) {
  const copy = pick(PARTNERS_COPY, locale);
  return {
    ...copy,
    sellOptions: copy.sellOptions.map((option, i) => ({
      ...option,
      ...SELL_OPTION_STYLES[i],
    })),
    experiences: copy.experiences.map((exp, i) => ({
      ...exp,
      src: EXPERIENCE_IMAGE_SRC[i],
    })),
    influencerIconKeys: INFLUENCER_ICON_KEYS,
  };
}
