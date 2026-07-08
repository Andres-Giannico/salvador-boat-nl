/**
 * Turbookings / Turbnb — assets estáticos del widget de reservas.
 *
 * v2 (activo): `public/widget-turvok/turbookings-booking-widget.js` — solo JS (CSS embebido).
 * v1 (rollback): `public/widget-turvok/turbnb.booking.1.0.31.min.{js,css}`
 *
 * ---------------------------------------------------------------------------
 * Rollback a widget v1.0.31
 * ---------------------------------------------------------------------------
 * Pon `USE_TURBNB_WIDGET_V2` en `false` y despliega. Los archivos v1 siguen en
 * `public/widget-turvok/` sin cargarse mientras v2 esté activo.
 *
 * v1 producción (referencia):
 *   JS:  https://widgets.turbnb.com/turbnb.booking.1.0.31.min.js
 *   CSS: https://widgets.turbnb.com/turbnb.booking.1.0.31.min.css
 */

/** `true` = widget 2.0 · `false` = rollback a v1.0.31 */
export const USE_TURBNB_WIDGET_V2 = true;

/** `true` = `/public/widget-turvok/*` · `false` = CDN `widgets.turbnb.com` (solo v1) */
export const USE_LOCAL_TURBNB_WIDGET_ASSETS = true;

/** Idioma por defecto del widget en este sitio (inglés) */
export const TURBNB_DEFAULT_LOCALE = 'en';

/**
 * Bundle v2 servido desde .com — los sitios .es / .nl / .fr pueden apuntar aquí
 * para no duplicar el JS (un solo archivo que actualizar).
 */
export const TURBNB_WIDGET_V2_CDN_URL =
  'https://www.salvadoribiza.com/widget-turvok/turbookings-booking-widget.js';

/**
 * Holandés (.nl): `TURBNB_DEFAULT_LOCALE = 'nl'` en repo .nl (como .es / .fr).
 *
 * Props habituales a traducir por sitio: bookNow, quantity,
 * selectExperienceLabel, addonsLabel, depositObservation, childrenAge, infantAge.
 * No hardcodear confirmReservationAndPay ni selectTimeLabel — usa i18n del widget.
 */

const PROD_WIDGET_BASE = 'https://widgets.turbnb.com';
const V1_BUNDLE = 'turbnb.booking.1.0.31.min';

const V1_LOCAL_JS = `/widget-turvok/${V1_BUNDLE}.js`;
const V1_LOCAL_CSS = `/widget-turvok/${V1_BUNDLE}.css`;
const V1_PROD_JS = `${PROD_WIDGET_BASE}/${V1_BUNDLE}.js`;
const V1_PROD_CSS = `${PROD_WIDGET_BASE}/${V1_BUNDLE}.css`;

const V2_JS = '/widget-turvok/turbookings-booking-widget.js';

const v1Js = USE_LOCAL_TURBNB_WIDGET_ASSETS ? V1_LOCAL_JS : V1_PROD_JS;
const v1Css = USE_LOCAL_TURBNB_WIDGET_ASSETS ? V1_LOCAL_CSS : V1_PROD_CSS;

export const TURBNB_WIDGET_JS = USE_TURBNB_WIDGET_V2 ? V2_JS : v1Js;

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
