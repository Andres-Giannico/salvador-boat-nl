/**
 * Turbookings / Turbnb — widget de reservas cargado desde salvadoribiza.com.
 *
 * Fuente única de verdad: repo `salvador-boat` → `public/widget-turvok/`
 * Actualizar el bundle solo allí y desplegar .com; .es / .fr / .nl usan esta URL.
 *
 * Fallback Turbookings:
 *   https://widgets.turbnb.com/turbnb.booking.1.0.31.min.{js,css}
 */

const SALVADOR_WIDGET_CDN =
  process.env.NEXT_PUBLIC_TURBNB_WIDGET_CDN?.replace(/\/+$/, '') ||
  'https://www.salvadoribiza.com/widget-turvok';

const BUNDLE = 'turbnb.booking.1.0.31.min';

export const TURBNB_WIDGET_JS = `${SALVADOR_WIDGET_CDN}/${BUNDLE}.js`;
export const TURBNB_WIDGET_CSS = `${SALVADOR_WIDGET_CDN}/${BUNDLE}.css`;
