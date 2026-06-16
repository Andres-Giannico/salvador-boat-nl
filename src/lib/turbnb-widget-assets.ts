/**
 * Turbookings / Turbnb — widget de reservas cargado desde salvadoribiza.com.
 *
 * v2 (activo): `turbookings-booking-widget.js` — solo JS (CSS embebido).
 * v1 (rollback): `turbnb.booking.1.0.31.min.{js,css}` en el mismo CDN.
 *
 * Fuente única del bundle: repo `salvador-boat` → desplegar .com para actualizar.
 *
 * Holandés: el widget 2.0 no tiene UI completa en nl → `locale: "en"` + textos NL
 * en customProperties (como en v1).
 *
 * Rollback: `USE_TURBNB_WIDGET_V2 = false` y despliega .nl
 */

/** `true` = widget 2.0 · `false` = rollback a v1.0.31 */
export const USE_TURBNB_WIDGET_V2 = true;

const SALVADOR_WIDGET_CDN =
  process.env.NEXT_PUBLIC_TURBNB_WIDGET_CDN?.replace(/\/+$/, '') ||
  'https://www.salvadoribiza.com/widget-turvok';

export const TURBNB_WIDGET_V2_CDN_URL = `${SALVADOR_WIDGET_CDN}/turbookings-booking-widget.js`;

const V1_BUNDLE = 'turbnb.booking.1.0.31.min';
const v1Js = `${SALVADOR_WIDGET_CDN}/${V1_BUNDLE}.js`;
const v1Css = `${SALVADOR_WIDGET_CDN}/${V1_BUNDLE}.css`;

/** Widget 2.0 sin UI nl completa — base en inglés, textos vía customProperties */
export const TURBNB_DEFAULT_LOCALE = 'en';

export const TURBNB_NL_DEPOSIT_DEFAULT =
  'Na je boeking ontvang je een bevestiging met ontmoetingspunt en tijd. Controleer of telefoon en e-mail kloppen. Aanbetaling €20 per persoon; het restant aan boord.';

/** Textos holandeses por defecto para el widget (sin locale nl en v2) */
export const TURBNB_NL_WIDGET_DEFAULTS = {
  displayBillingTerm: true,
  showQuantity: true,
  quantity: 'Aantal gasten',
  titleVariant: 'Modern',
  bookNow: 'NU RESERVEREN',
  confirmReservationAndPay: 'BEVESTIGEN & BETALEN',
  selectTimeLabel: 'Kies tijd',
  selectExperienceLabel: 'Soort ervaring',
  addonsLabel: "Extra's",
  childrenAge: '6 tot 12 jaar',
  infantAge: '0 tot 5 jaar',
  depositObservation: TURBNB_NL_DEPOSIT_DEFAULT,
} as const;

export const TURBNB_WIDGET_JS = USE_TURBNB_WIDGET_V2 ? TURBNB_WIDGET_V2_CDN_URL : v1Js;

/** `null` en v2 (CSS inline en el bundle) */
export const TURBNB_WIDGET_CSS: string | null = USE_TURBNB_WIDGET_V2 ? null : v1Css;

/** Inyecta locale del sitio; el resto de customProperties se conserva tal cual */
export function mergeTurboBookingCustomProperties(
  customProperties?: Record<string, unknown>
): Record<string, unknown> {
  return {
    locale: TURBNB_DEFAULT_LOCALE,
    ...customProperties,
  };
}
