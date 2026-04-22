/**
 * Turbookings / Turbnb — assets estáticos del widget de reservas (JS + CSS).
 *
 * Ubicación local: `public/widget-turvok/turbnb.booking.1.0.31.min.{js,css}`
 * (se sirven como `/widget-turvok/...` desde el mismo origen: menos latencia que ir a widgets.turbnb.com).
 *
 * ---------------------------------------------------------------------------
 * Cómo VOLVER a cargar desde producción (CDN de Turbookings)
 * ---------------------------------------------------------------------------
 * 1) Pon `USE_LOCAL_TURBNB_WIDGET_ASSETS` en `false` más abajo y despliega, O
 * 2) Sustituye `TURBNB_WIDGET_JS` / `TURBNB_WIDGET_CSS` por las URLs de prod
 *    indicadas en los comentarios (misma versión 1.0.31).
 *
 * Producción (referencia, no borrar):
 *   JS:  https://widgets.turbnb.com/turbnb.booking.1.0.31.min.js
 *   CSS: https://widgets.turbnb.com/turbnb.booking.1.0.31.min.css
 *
 * Si Turbookings publica una versión nueva del widget, descarga los nuevos
 * archivos a `public/widget-turvok/`, actualiza nombres + versión aquí y en
 * los imports que usen este módulo.
 */

/** `true` = `/public/widget-turvok/*` · `false` = `https://widgets.turbnb.com/*` */
export const USE_LOCAL_TURBNB_WIDGET_ASSETS = true;

const PROD_WIDGET_BASE = 'https://widgets.turbnb.com';
const BUNDLE = 'turbnb.booking.1.0.31.min';

const LOCAL_JS = `/widget-turvok/${BUNDLE}.js`;
const LOCAL_CSS = `/widget-turvok/${BUNDLE}.css`;

const PROD_JS = `${PROD_WIDGET_BASE}/${BUNDLE}.js`;
const PROD_CSS = `${PROD_WIDGET_BASE}/${BUNDLE}.css`;

export const TURBNB_WIDGET_JS = USE_LOCAL_TURBNB_WIDGET_ASSETS ? LOCAL_JS : PROD_JS;
export const TURBNB_WIDGET_CSS = USE_LOCAL_TURBNB_WIDGET_ASSETS ? LOCAL_CSS : PROD_CSS;
