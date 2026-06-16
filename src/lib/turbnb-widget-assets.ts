/**
 * Turbookings / Turbnb — widget de reservas cargado desde salvadoribiza.com.
 *
 * v2 (activo): `turbookings-booking-widget.js` — solo JS (CSS embebido).
 * v1 (rollback): `turbnb.booking.1.0.31.min.{js,css}` en el mismo CDN.
 *
 * Fuente única del bundle: repo `salvador-boat` → desplegar .com para actualizar.
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

/** Idioma por defecto del widget en este sitio (holandés) */
export const TURBNB_DEFAULT_LOCALE = 'nl';

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
