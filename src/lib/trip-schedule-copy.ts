import type { SiteLocale } from "@/lib/site-locale";

function pick<T>(record: Record<SiteLocale, T>, locale: SiteLocale): T {
  return record[locale] ?? record.en;
}

/** Short badge on cards — no fixed clock times */
export const DAY_TRIP_BADGE: Record<SiteLocale, string> = {
  en: "~3 h · time varies by date",
  es: "~3 h · horario según fecha",
  nl: "~3 u · tijd varieert per datum",
  fr: "~3 h · horaire selon la date",
};

export const SUNSET_TRIP_BADGE: Record<SiteLocale, string> = {
  en: "~3 h evening · sunset schedule",
  es: "~3 h tarde · según atardecer",
  nl: "~3 u avond · zonsondergangschema",
  fr: "~3 h soir · selon le coucher de soleil",
};

export type TripSidebarScheduleCopy = {
  durationMain: string;
  durationEstimate: string;
  durationNote: string;
};

export function getDayTripSidebarSchedule(
  locale: SiteLocale
): TripSidebarScheduleCopy {
  return pick(DAY_TRIP_SIDEBAR, locale);
}

export function getSunsetTripSidebarSchedule(
  locale: SiteLocale
): TripSidebarScheduleCopy {
  return pick(SUNSET_TRIP_SIDEBAR, locale);
}

const DAY_TRIP_SIDEBAR: Record<SiteLocale, TripSidebarScheduleCopy> = {
  en: {
    durationMain: "3 hours",
    durationEstimate:
      "Typical departure between 1:00 PM and 2:00 PM (e.g. 1:00, 1:30 or 2:00).",
    durationNote:
      "Exact time for your date when you book and on your voucher — it can change by season.",
  },
  es: {
    durationMain: "3 horas",
    durationEstimate:
      "Salida orientativa entre 13:00 y 14:00 (p. ej. 13:00, 13:30 o 14:00).",
    durationNote:
      "Hora exacta de tu día al reservar y en el voucher — puede variar según la temporada.",
  },
  nl: {
    durationMain: "3 uur",
    durationEstimate:
      "Richtlijn: vertrek tussen 13:00 en 14:00 (bijv. 13:00, 13:30 of 14:00).",
    durationNote:
      "Exacte tijd voor jouw datum bij boeken en op je voucher — kan per seizoen wijzigen.",
  },
  fr: {
    durationMain: "3 heures",
    durationEstimate:
      "Départ indicatif entre 13h00 et 14h00 (p. ex. 13h00, 13h30 ou 14h00).",
    durationNote:
      "Heure exacte pour votre date à la réservation et sur le voucher — peut varier selon la saison.",
  },
};

const SUNSET_TRIP_SIDEBAR: Record<SiteLocale, TripSidebarScheduleCopy> = {
  en: {
    durationMain: "Approx. 3 hours (evening)",
    durationEstimate:
      "Typical departure between 5:00 PM and 6:00 PM (e.g. 5:00, 5:30 or 6:00), timed for sunset.",
    durationNote:
      "Exact time for your date when you book and on your voucher — it shifts earlier later in the season.",
  },
  es: {
    durationMain: "Aprox. 3 horas (tarde)",
    durationEstimate:
      "Salida orientativa entre 17:00 y 18:00 (p. ej. 17:00, 17:30 o 18:00), según atardecer.",
    durationNote:
      "Hora exacta de tu día al reservar y en el voucher — adelanta a final de temporada.",
  },
  nl: {
    durationMain: "Ca. 3 uur (avond)",
    durationEstimate:
      "Richtlijn: vertrek tussen 17:00 en 18:00 (bijv. 17:00, 17:30 of 18:00), afgestemd op zonsondergang.",
    durationNote:
      "Exacte tijd voor jouw datum bij boeken en op je voucher — vroeger naarmate het seizoen vordert.",
  },
  fr: {
    durationMain: "Environ 3 heures (soirée)",
    durationEstimate:
      "Départ indicatif entre 17h00 et 18h00 (p. ex. 17h00, 17h30 ou 18h00), selon le coucher de soleil.",
    durationNote:
      "Heure exacte pour votre date à la réservation et sur le voucher — avance en fin de saison.",
  },
};

/** First FAQ answer: day trip departure times */
export function getDayTripDepartureFaqAnswer(locale: SiteLocale): string {
  return pick(DAY_TRIP_DEPARTURE_FAQ, locale);
}

const DAY_TRIP_DEPARTURE_FAQ: Record<SiteLocale, string> = {
  en:
    "The trip lasts 3 hours and departs from San Antonio Port. Departure time depends on the date: peak season typically 14:00–17:00 (2:00 PM–5:00 PM); 1–15 September 13:30–16:30 (1:30 PM–4:30 PM); 16–30 September 13:00–16:00 (1:00 PM–4:00 PM); in October the time is confirmed based on bookings and there may be a single departure. Please arrive 30 minutes before boarding. The exact time for your date is shown when you book and on your voucher.",
  es:
    "La excursión dura 3 horas y sale del puerto de San Antonio. El horario depende de la fecha: temporada alta suele ser 14:00–17:00; del 1 al 15 de septiembre 13:30–16:30; del 16 al 30 de septiembre 13:00–16:00; en octubre se confirma según las reservas y puede haber una única salida. Llega 30 minutos antes del embarque. La hora exacta de tu fecha aparece al reservar y en el voucher.",
  nl:
    "De tocht duurt 3 uur en vertrekt vanuit de haven van San Antonio. Vertrektijd hangt af van de datum: hoogseizoen meestal 14:00–17:00; 1–15 september 13:30–16:30; 16–30 september 13:00–16:00; in oktober wordt de tijd bevestigd op basis van boekingen en kan er één vertrek zijn. Kom 30 minuten voor boarding. De exacte tijd voor jouw datum zie je bij boeken en op je voucher.",
  fr:
    "L'excursion dure 3 heures et part du port de San Antonio. L'horaire dépend de la date : haute saison en général 14h00–17h00 ; 1–15 septembre 13h30–16h30 ; 16–30 septembre 13h00–16h00 ; en octobre l'horaire est confirmé selon les réservations et il peut n'y avoir qu'un seul départ. Arrivez 30 minutes avant l'embarquement. L'heure exacte pour votre date est indiquée à la réservation et sur le voucher.",
};

/** First FAQ answer: sunset trip departure times */
export function getSunsetTripDepartureFaqAnswer(locale: SiteLocale): string {
  return pick(SUNSET_TRIP_DEPARTURE_FAQ, locale);
}

const SUNSET_TRIP_DEPARTURE_FAQ: Record<SiteLocale, string> = {
  en:
    "The cruise lasts about 3 hours from San Antonio Port. Departure time is not fixed — it is scheduled for the sunset on your date and shifts earlier as the season progresses (typically between 5:00 PM and 6:00 PM, e.g. 5:00, 5:30 or 6:00). Please arrive 30 minutes before boarding. The exact time is shown when you book and on your voucher — always trust your booking confirmation over generic website times.",
  es:
    "El crucero dura unas 3 horas desde el puerto de San Antonio. La hora de salida no es fija: la programamos según el atardecer de tu fecha y adelanta a final de temporada (orientativamente entre 17:00 y 18:00, p. ej. 17:00, 17:30 o 18:00). Llega 30 minutos antes del embarque. La hora exacta aparece al reservar y en el voucher — confía siempre en tu reserva, no en horarios genéricos de la web.",
  nl:
    "De cruise duurt ongeveer 3 uur vanuit de haven van San Antonio. Vertrektijd is niet vast — afgestemd op de zonsondergang op jouw datum en vroeger naarmate het seizoen vordert (meestal tussen 17:00 en 18:00, bijv. 17:00, 17:30 of 18:00). Kom 30 minuten voor boarding. De exacte tijd zie je bij boeken en op je voucher — vertrouw altijd op je boeking, niet op algemene tijden op de site.",
  fr:
    "La croisière dure environ 3 heures depuis le port de San Antonio. L'heure de départ n'est pas fixe — elle est programmée pour le coucher de soleil de votre date et avance en fin de saison (indicatif entre 17h00 et 18h00, p. ex. 17h00, 17h30 ou 18h00). Arrivez 30 minutes avant l'embarquement. L'heure exacte est indiquée à la réservation et sur le voucher — fiez-vous toujours à votre confirmation, pas aux horaires génériques du site.",
};
