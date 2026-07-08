import type { ActivePromoKind } from '@/lib/active-promo';
import type { SiteLocale } from '@/lib/site-locale';

export type PromoCopy = {
  labelShort: string;
  headline: string;
  primaryCtaLabel: string;
  validityShort: string;
  validityText: string;
  kicker: string;
  heroAlt: string;
};

export type PromoModalDesc = {
  lead: string;
  perPerson: string;
  product: string;
  tripTypes: string;
  webBookingLead: string;
  webBooking: string;
  codeAction: string;
  codeField: string;
  offerLabel: string;
  deadline: string;
  superGone?: string;
  earlyEnjoy?: string;
  earlyWithCode?: string;
  earlyEnter?: string;
};

export type PromoUi = {
  promoActive: string;
  offEachGuest: (eur: number) => string;
  promoCode: string;
  copy: string;
  copied: string;
  copySuccessModal: string;
  copySuccessBanner: string;
  copyError: string;
  closePromo: string;
  maybeLater: string;
  perGuestBadge: (eur: number) => string;
  appliedAtCheckout: string;
  enterWhenBook: string;
  bannerInstructions: (eur: number) => string;
  summerBadgeAllJuly: string;
  summerDeal: string;
  superBadgeDays: string;
  limitedTime: string;
  activePromoAria: (label: string) => string;
  codeBoxHint: (eur: number) => string;
};

const PROMO_COPY: Record<ActivePromoKind, Record<SiteLocale, PromoCopy>> = {
  champion: {
    en: {
      labelShort: 'Champion 10',
      headline: 'World Cup special — €10 off each guest',
      primaryCtaLabel: 'Grab €10 off — book now',
      kicker: 'Champion 10 · 15 days only · Web bookings',
      validityShort: '20 Jun – 4 Jul 2026',
      validityText:
        'Valid for online bookings made 20 Jun – 4 Jul 2026 (23:59, your local time). €10 off per guest with CHAMPION10 on Salvador Boat Mix (Day or Sunset). This World Cup offer ends 4 July.',
      heroAlt:
        'Salvador Ibiza — World Cup special: €10 off per person on web bookings, code CHAMPION10, ends 4 July',
    },
    es: {
      labelShort: 'Champion 10',
      headline: 'Especial Mundial — 10 € menos por persona',
      primaryCtaLabel: 'Aprovecha 10 € — reserva ya',
      kicker: 'Champion 10 · 15 días · Reservas web',
      validityShort: '20 jun – 4 jul 2026',
      validityText:
        'Válido para reservas online del 20 jun al 4 jul 2026 (23:59, hora local). 10 € de descuento por persona con CHAMPION10 en Salvador Boat Mix (excursión de día o atardecer). Esta oferta del Mundial termina el 4 de julio.',
      heroAlt:
        'Salvador Ibiza — especial Mundial: 10 € de descuento por persona reservando en la web, código CHAMPION10, hasta el 4 de julio',
    },
    nl: {
      labelShort: 'Champion 10',
      headline: 'WK-special — €10 korting per gast',
      primaryCtaLabel: 'Pak €10 korting — boek nu',
      kicker: 'Champion 10 · 15 dagen · Webboekingen',
      validityShort: '20 jun – 4 jul 2026',
      validityText:
        'Geldig voor online boekingen van 20 jun – 4 jul 2026 (23:59, jouw lokale tijd). €10 korting per gast met CHAMPION10 op Salvador Boat Mix (dagtocht of zonsondergang). Deze WK-aanbieding eindigt op 4 juli.',
      heroAlt:
        'Salvador Ibiza — WK-special: €10 korting per persoon bij boeken op de web, code CHAMPION10, tot 4 juli',
    },
    fr: {
      labelShort: 'Champion 10',
      headline: 'Spécial Coupe du Monde — 10 € de réduction par personne',
      primaryCtaLabel: 'Profitez de 10 € — réserver',
      kicker: 'Champion 10 · 15 jours · Réservations web',
      validityShort: '20 juin – 4 juil. 2026',
      validityText:
        'Valable pour les réservations en ligne du 20 juin au 4 juillet 2026 (23:59, heure locale). 10 € de réduction par personne avec CHAMPION10 sur Salvador Boat Mix (excursion journée ou coucher de soleil). Cette offre Coupe du Monde se termine le 4 juillet.',
      heroAlt:
        'Salvador Ibiza — spécial Coupe du Monde : 10 € de réduction par personne en réservant sur le web, code CHAMPION10, fin le 4 juillet',
    },
  },
  summer: {
    en: {
      labelShort: 'Summer 10',
      headline: 'Summer special — €10 off each guest',
      primaryCtaLabel: 'Grab €10 off — book now',
      kicker: 'Summer 10 · All July · Web bookings',
      validityShort: '1–31 Jul 2026',
      validityText:
        'Valid for online bookings made 1–31 Jul 2026 (23:59, your local time). €10 off per guest with SUMMER10 on Salvador Boat Mix (Day or Sunset). This summer web-only offer ends 31 July.',
      heroAlt:
        'Salvador Ibiza — Summer special: €10 off per person on web bookings, code SUMMER10, all July',
    },
    es: {
      labelShort: 'Summer 10',
      headline: 'Promoción de verano — 10 € menos por persona',
      primaryCtaLabel: 'Aprovecha 10 € — reserva ya',
      kicker: 'Summer 10 · Todo julio · Reservas web',
      validityShort: '1–31 jul 2026',
      validityText:
        'Válido para reservas online del 1 al 31 de julio de 2026 (23:59, hora local). 10 € de descuento por persona con SUMMER10 en Salvador Boat Mix (excursión de día o atardecer). Esta oferta de verano solo en web termina el 31 de julio.',
      heroAlt:
        'Salvador Ibiza — promoción de verano: 10 € de descuento por persona reservando en la web, código SUMMER10, todo julio',
    },
    nl: {
      labelShort: 'Summer 10',
      headline: 'Zomeraanbieding — €10 korting per gast',
      primaryCtaLabel: 'Pak €10 korting — boek nu',
      kicker: 'Summer 10 · Hele juli · Webboekingen',
      validityShort: '1–31 jul 2026',
      validityText:
        'Geldig voor online boekingen van 1–31 jul 2026 (23:59, jouw lokale tijd). €10 korting per gast met SUMMER10 op Salvador Boat Mix (dagtocht of zonsondergang). Deze zomer-webaanbieding eindigt op 31 juli.',
      heroAlt:
        'Salvador Ibiza — zomeraanbieding: €10 korting per persoon bij boeken op de web, code SUMMER10, hele juli',
    },
    fr: {
      labelShort: 'Summer 10',
      headline: 'Offre été — 10 € de réduction par personne',
      primaryCtaLabel: 'Profitez de 10 € — réserver',
      kicker: 'Summer 10 · Tout juillet · Réservations web',
      validityShort: '1–31 juil. 2026',
      validityText:
        'Valable pour les réservations en ligne du 1er au 31 juillet 2026 (23:59, heure locale). 10 € de réduction par personne avec SUMMER10 sur Salvador Boat Mix (excursion journée ou coucher de soleil). Cette offre estivale web se termine le 31 juillet.',
      heroAlt:
        'Salvador Ibiza — offre été : 10 € de réduction par personne en réservant sur le web, code SUMMER10, tout juillet',
    },
  },
  super: {
    en: {
      labelShort: 'Super promo',
      headline: '7-day flash — €10 off each guest',
      primaryCtaLabel: 'Grab €10 off — book now',
      kicker: '7 days only · Web bookings · ends 17 Jun',
      validityShort: '11–17 Jun 2026',
      validityText:
        'Valid for online bookings made 11–17 Jun 2026 (23:59, your local time). €10 off per guest with SUPERPROMO on Salvador Boat Mix (Day or Sunset). This 7-day web-only offer ends 17 June — don’t miss it.',
      heroAlt:
        'Salvador Ibiza — 7-day flash: €10 off per person on web bookings, code SUPERPROMO, ends 17 June',
    },
    es: {
      labelShort: 'Super promo',
      headline: 'Flash de 7 días — 10 € menos por persona',
      primaryCtaLabel: 'Aprovecha 10 € — reserva ya',
      kicker: 'Solo 7 días · Reservas web · hasta el 17 jun',
      validityShort: '11–17 jun 2026',
      validityText:
        'Válido para reservas online del 11 al 17 de junio de 2026 (23:59, hora local). 10 € de descuento por persona con SUPERPROMO en Salvador Boat Mix (excursión de día o atardecer). Esta oferta web de 7 días termina el 17 de junio — no te la pierdas.',
      heroAlt:
        'Salvador Ibiza — flash de 7 días: 10 € de descuento reservando en la web, código SUPERPROMO, hasta el 17 de junio',
    },
    nl: {
      labelShort: 'Super-actie',
      headline: '7-daagse flash — €10 korting per gast',
      primaryCtaLabel: 'Pak €10 korting — boek nu',
      kicker: 'Slechts 7 dagen · Webboekingen · tot 17 jun',
      validityShort: '11–17 jun 2026',
      validityText:
        'Alleen voor online boekingen van 11–17 jun 2026 (23:59, jouw lokale tijd). €10 korting per gast met SUPERPROMO op Salvador Boat Mix (dagtocht of zonsondergang). Deze 7-daagse webaanbieding eindigt 17 juni — mis hem niet.',
      heroAlt:
        'Salvador Ibiza — 7-daagse flash: €10 korting per persoon bij boeken op de web, code SUPERPROMO, tot 17 juni',
    },
    fr: {
      labelShort: 'Super promo',
      headline: 'Flash 7 jours — 10 € de réduction par personne',
      primaryCtaLabel: 'Profitez de 10 € — réserver',
      kicker: '7 jours seulement · Réservations web · fin le 17 juin',
      validityShort: '11–17 juin 2026',
      validityText:
        "Valable pour les réservations en ligne du 11 au 17 juin 2026 (23:59, heure locale). 10 € de réduction par personne avec SUPERPROMO sur Salvador Boat Mix (excursion journée ou coucher de soleil). Cette offre web de 7 jours se termine le 17 juin — ne la manquez pas.",
      heroAlt:
        "Salvador Ibiza — flash 7 jours : 10 € de réduction en réservant sur le web, code SUPERPROMO, fin le 17 juin",
    },
  },
  earlybird: {
    en: {
      labelShort: 'Early Bird 5',
      headline: "Thanks — you're in",
      primaryCtaLabel: 'Book now',
      kicker: 'Exclusive · Early booking (Early Bird)',
      validityShort: '10 Apr – 20 Jun 2026',
      validityText:
        'Valid for bookings made 10 Apr – 20 Jun 2026. After that, this promotion ends.',
      heroAlt: 'Salvador Ibiza — aerial view over turquoise waters',
    },
    es: {
      labelShort: 'Early Bird 5',
      headline: 'Gracias — ya estás dentro',
      primaryCtaLabel: 'Reservar ahora',
      kicker: 'Exclusiva · Reserva anticipada (Early Bird)',
      validityShort: '10 abr – 20 jun 2026',
      validityText:
        'Válido para reservas del 10 abr – 20 jun 2026. Transcurrido ese período finaliza la promoción.',
      heroAlt: 'Salvador Ibiza — vista aérea del barco sobre agua turquesa',
    },
    nl: {
      labelShort: 'Early Bird 5',
      headline: 'Bedankt — je hoort erbij',
      primaryCtaLabel: 'Boek nu',
      kicker: 'Exclusief · Vroege boeker (Early Bird)',
      validityShort: '10 apr – 20 jun 2026',
      validityText:
        'Geldig voor boekingen van 10 apr – 20 jun 2026. Daarna eindigt deze actie.',
      heroAlt: 'Salvador Ibiza — luchtfoto boven turquoise water',
    },
    fr: {
      labelShort: 'Early Bird 5',
      headline: 'Merci — vous y êtes',
      primaryCtaLabel: 'Réserver maintenant',
      kicker: 'Exclusive · Réservation anticipée (Early Bird)',
      validityShort: '10 avr. – 20 juin 2026',
      validityText:
        'Valable pour les réservations du 10 avr. au 20 juin 2026. Passé cette date, la promotion prend fin.',
      heroAlt: 'Salvador Ibiza — vue aérienne du bateau sur des eaux turquoise',
    },
  },
};

const PROMO_MODAL_DESC: Record<ActivePromoKind, Record<SiteLocale, PromoModalDesc>> = {
  champion: {
    en: {
      lead: 'World Cup special:',
      perPerson: '€10 per person',
      product: 'Salvador Boat Mix',
      tripTypes: '(Day Trip or Sunset)',
      webBookingLead: 'when you complete your',
      webBooking: 'booking on our website',
      codeAction: 'Paste',
      codeField: 'Promo code',
      offerLabel: '15-day offer',
      deadline: '4 July',
    },
    es: {
      lead: 'Especial Mundial:',
      perPerson: '10 € menos por persona',
      product: 'Salvador Boat Mix',
      tripTypes: '(excursión de día o atardecer)',
      webBookingLead: 'al completar tu',
      webBooking: 'reserva en nuestra web',
      codeAction: 'Introduce',
      codeField: 'Código promocional',
      offerLabel: 'oferta de 15 días',
      deadline: '4 de julio',
    },
    nl: {
      lead: 'WK-special:',
      perPerson: '€10 per persoon',
      product: 'Salvador Boat Mix',
      tripTypes: '(dagtocht of zonsondergang)',
      webBookingLead: 'wanneer je je',
      webBooking: 'boeking op onze website afrondt',
      codeAction: 'Plak',
      codeField: 'Promocode',
      offerLabel: '15-daagse aanbieding',
      deadline: '4 juli',
    },
    fr: {
      lead: 'Spécial Coupe du Monde :',
      perPerson: '10 € de réduction par personne',
      product: 'Salvador Boat Mix',
      tripTypes: '(excursion journée ou coucher de soleil)',
      webBookingLead: 'lorsque vous effectuez votre',
      webBooking: 'réservation sur notre site',
      codeAction: 'Collez',
      codeField: 'Code promo',
      offerLabel: 'offre de 15 jours',
      deadline: '4 juillet',
    },
  },
  summer: {
    en: {
      lead: 'Summer special:',
      perPerson: '€10 per person',
      product: 'Salvador Boat Mix',
      tripTypes: '(Day Trip or Sunset)',
      webBookingLead: 'when you complete your',
      webBooking: 'booking on our website',
      codeAction: 'Paste',
      codeField: 'Promo code',
      offerLabel: 'July-only offer',
      deadline: '31 July',
    },
    es: {
      lead: 'Promoción de verano:',
      perPerson: '10 € menos por persona',
      product: 'Salvador Boat Mix',
      tripTypes: '(excursión de día o atardecer)',
      webBookingLead: 'al completar tu',
      webBooking: 'reserva en nuestra web',
      codeAction: 'Introduce',
      codeField: 'Código promocional',
      offerLabel: 'oferta solo en julio',
      deadline: '31 de julio',
    },
    nl: {
      lead: 'Zomeraanbieding:',
      perPerson: '€10 per persoon',
      product: 'Salvador Boat Mix',
      tripTypes: '(dagtocht of zonsondergang)',
      webBookingLead: 'wanneer je je',
      webBooking: 'boeking op onze website afrondt',
      codeAction: 'Plak',
      codeField: 'Promocode',
      offerLabel: 'juli-aanbieding',
      deadline: '31 juli',
    },
    fr: {
      lead: 'Offre été :',
      perPerson: '10 € de réduction par personne',
      product: 'Salvador Boat Mix',
      tripTypes: '(excursion journée ou coucher de soleil)',
      webBookingLead: 'lorsque vous effectuez votre',
      webBooking: 'réservation sur notre site',
      codeAction: 'Collez',
      codeField: 'Code promo',
      offerLabel: 'offre de juillet',
      deadline: '31 juillet',
    },
  },
  super: {
    en: {
      lead: 'Super promo:',
      perPerson: '€10 per person',
      product: 'Salvador Boat Mix',
      tripTypes: '(Day Trip or Sunset)',
      webBookingLead: 'when you complete your',
      webBooking: 'booking on our website',
      codeAction: 'Paste',
      codeField: 'Promo code',
      offerLabel: '7-day flash deal',
      deadline: '17 June',
      superGone: ", then it's gone.",
    },
    es: {
      lead: 'Super promo:',
      perPerson: '10 € menos por persona',
      product: 'Salvador Boat Mix',
      tripTypes: '(excursión de día o atardecer)',
      webBookingLead: 'al completar tu',
      webBooking: 'reserva en nuestra web',
      codeAction: 'Introduce',
      codeField: 'Código promocional',
      offerLabel: 'oferta flash de 7 días',
      deadline: '17 de junio',
      superGone: ' y se acaba.',
    },
    nl: {
      lead: 'Super-actie:',
      perPerson: '€10 per persoon',
      product: 'Salvador Boat Mix',
      tripTypes: '(dagtocht of zonsondergang)',
      webBookingLead: 'wanneer je je',
      webBooking: 'boeking op onze website afrondt',
      codeAction: 'Plak',
      codeField: 'Promocode',
      offerLabel: '7-daagse flashdeal',
      deadline: '17 juni',
      superGone: ', daarna is hij weg.',
    },
    fr: {
      lead: 'Super promo :',
      perPerson: '10 € de réduction par personne',
      product: 'Salvador Boat Mix',
      tripTypes: '(excursion journée ou coucher de soleil)',
      webBookingLead: 'lorsque vous effectuez votre',
      webBooking: 'réservation sur notre site',
      codeAction: 'Collez',
      codeField: 'Code promo',
      offerLabel: 'offre flash de 7 jours',
      deadline: '17 juin',
      superGone: ', puis elle disparaît.',
    },
  },
  earlybird: {
    en: {
      lead: 'early booking deal',
      perPerson: '€5 off per person',
      product: 'Salvador Boat Mix',
      tripTypes: '— Day Trip or Sunset',
      webBookingLead: '',
      webBooking: '',
      codeAction: '',
      codeField: 'Promo code',
      offerLabel: '',
      deadline: '',
      earlyEnjoy: 'Use our',
      earlyWithCode: 'with code',
      earlyEnter: 'Enter your code in the',
    },
    es: {
      lead: 'oferta de reserva anticipada',
      perPerson: '5 € de descuento por persona',
      product: 'Salvador Boat Mix',
      tripTypes: '— excursión de día o al atardecer',
      webBookingLead: '',
      webBooking: '',
      codeAction: '',
      codeField: 'Código promocional',
      offerLabel: '',
      deadline: '',
      earlyEnjoy: 'Aprovecha la',
      earlyWithCode: 'con código',
      earlyEnter: 'Introduce tu código al reservar.',
    },
    nl: {
      lead: 'vroege boekingsdeal',
      perPerson: '€5 korting per persoon',
      product: 'Salvador Boat Mix',
      tripTypes: '— dagtocht of zonsondergang',
      webBookingLead: '',
      webBooking: '',
      codeAction: '',
      codeField: 'Promocode',
      offerLabel: '',
      deadline: '',
      earlyEnjoy: 'Gebruik onze',
      earlyWithCode: 'met code',
      earlyEnter: 'Voer je code in bij het boeken.',
    },
    fr: {
      lead: 'offre de réservation anticipée',
      perPerson: '5 € de réduction par personne',
      product: 'Salvador Boat Mix',
      tripTypes: '— excursion journée ou coucher de soleil',
      webBookingLead: '',
      webBooking: '',
      codeAction: '',
      codeField: 'Code promo',
      offerLabel: '',
      deadline: '',
      earlyEnjoy: 'Profitez de notre',
      earlyWithCode: 'avec le code',
      earlyEnter: 'Saisissez votre code lors de la réservation.',
    },
  },
};

const PROMO_UI: Record<SiteLocale, PromoUi> = {
  en: {
    promoActive: 'Promo active',
    offEachGuest: (eur) => `€${eur} off each guest`,
    promoCode: 'Promo code',
    copy: 'Copy',
    copied: 'Copied',
    copySuccessModal: 'Code copied — paste it in the Promo code field at checkout.',
    copySuccessBanner: 'Code copied — paste it in the Promo code field below.',
    copyError: 'Could not copy. Please type the code manually.',
    closePromo: 'Close promotion',
    maybeLater: 'Maybe later',
    perGuestBadge: (eur) => `€${eur} / guest`,
    appliedAtCheckout: 'applied at checkout on the web',
    enterWhenBook: 'enter when you book',
    bannerInstructions: (eur) =>
      `Paste the code in the Promo code field in the booking form below and tap Apply — the €${eur}/guest discount is applied at checkout.`,
    summerBadgeAllJuly: 'All July · ends 31 Jul',
    summerDeal: 'Summer deal',
    superBadgeDays: '7 days only · ends 17 Jun',
    limitedTime: 'Limited time',
    activePromoAria: (label) => `Active promotion: ${label}`,
    codeBoxHint: (eur) => `✓ €${eur} off each guest · Salvador Boat Mix (Day or Sunset) ·`,
  },
  es: {
    promoActive: 'Promo activa',
    offEachGuest: (eur) => `${eur} € menos por persona`,
    promoCode: 'Código promocional',
    copy: 'Copiar',
    copied: 'Copiado',
    copySuccessModal: 'Código copiado — pégalo en el campo Código promocional al pagar.',
    copySuccessBanner: 'Código copiado — pégalo en el campo de abajo.',
    copyError: 'No se pudo copiar. Escríbelo manualmente.',
    closePromo: 'Cerrar promoción',
    maybeLater: 'Quizá más tarde',
    perGuestBadge: (eur) => `${eur} € / persona`,
    appliedAtCheckout: 'se aplica al pagar en la web',
    enterWhenBook: 'introduce al reservar',
    bannerInstructions: (eur) =>
      `Pega el código en el campo Código promocional del formulario de abajo y pulsa Aplicar — el descuento de ${eur} €/persona se aplica al pagar.`,
    summerBadgeAllJuly: 'Todo julio · hasta 31 jul',
    summerDeal: 'Oferta verano',
    superBadgeDays: 'Solo 7 días · hasta 17 jun',
    limitedTime: 'Tiempo limitado',
    activePromoAria: (label) => `Promoción activa: ${label}`,
    codeBoxHint: (eur) => `✓ ${eur} € menos por persona · Salvador Boat Mix (día o atardecer) ·`,
  },
  nl: {
    promoActive: 'Actie actief',
    offEachGuest: (eur) => `€${eur} korting per gast`,
    promoCode: 'Promocode',
    copy: 'Kopiëren',
    copied: 'Gekopieerd',
    copySuccessModal: 'Code gekopieerd — plak hem in het veld Promocode bij het afrekenen.',
    copySuccessBanner: 'Code gekopieerd — plak hem in het veld hieronder.',
    copyError: 'Kopiëren mislukt. Typ de code handmatig.',
    closePromo: 'Promotie sluiten',
    maybeLater: 'Misschien later',
    perGuestBadge: (eur) => `€${eur} / gast`,
    appliedAtCheckout: 'toegepast bij afrekenen op de web',
    enterWhenBook: 'invoeren bij boeken',
    bannerInstructions: (eur) =>
      `Plak de code in het veld Promocode in het boekingsformulier hieronder en tik op Toepassen — de korting van €${eur}/gast wordt bij afrekenen toegepast.`,
    summerBadgeAllJuly: 'Hele juli · tot 31 jul',
    summerDeal: 'Zomeraanbieding',
    superBadgeDays: 'Slechts 7 dagen · tot 17 jun',
    limitedTime: 'Beperkte tijd',
    activePromoAria: (label) => `Actieve actie: ${label}`,
    codeBoxHint: (eur) => `✓ €${eur} korting per gast · Salvador Boat Mix (dag of zonsondergang) ·`,
  },
  fr: {
    promoActive: 'Promo active',
    offEachGuest: (eur) => `${eur} € de réduction par personne`,
    promoCode: 'Code promo',
    copy: 'Copier',
    copied: 'Copié',
    copySuccessModal: 'Code copié — collez-le dans le champ Code promo au paiement.',
    copySuccessBanner: 'Code copié — collez-le dans le champ ci-dessous.',
    copyError: 'Impossible de copier. Saisissez le code manuellement.',
    closePromo: 'Fermer la promotion',
    maybeLater: 'Plus tard',
    perGuestBadge: (eur) => `${eur} € / personne`,
    appliedAtCheckout: 'appliquée au paiement sur le web',
    enterWhenBook: 'saisir lors de la réservation',
    bannerInstructions: (eur) =>
      `Collez le code dans le champ Code promo du formulaire ci-dessous et appuyez sur Appliquer — la réduction de ${eur} €/personne s'applique au paiement.`,
    summerBadgeAllJuly: 'Tout juillet · fin 31 juil.',
    summerDeal: 'Offre été',
    superBadgeDays: '7 jours seulement · fin 17 juin',
    limitedTime: 'Durée limitée',
    activePromoAria: (label) => `Promotion active : ${label}`,
    codeBoxHint: (eur) => `✓ ${eur} € de réduction par personne · Salvador Boat Mix (jour ou coucher de soleil) ·`,
  },
};

export function getPromoCopy(kind: ActivePromoKind, locale: SiteLocale): PromoCopy {
  return PROMO_COPY[kind][locale];
}

export function getPromoModalDesc(kind: ActivePromoKind, locale: SiteLocale): PromoModalDesc {
  return PROMO_MODAL_DESC[kind][locale];
}

export function getPromoUi(locale: SiteLocale): PromoUi {
  return PROMO_UI[locale];
}
