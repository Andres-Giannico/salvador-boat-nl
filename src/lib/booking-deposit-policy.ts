/**
 * Deposit and cancellation copy for Turbookings widgets and marketing UI.
 * Shared/mixed trips: €20/person deposit, refund only if cancelled >48h before departure.
 * Private charters: confirmation deposit, refund only if cancelled >72h before departure.
 */

const SHARED_BOOKING_INTRO =
  'After completing your booking, you will receive a confirmation voucher with all the details including meeting point and time. Please ensure your contact information (phone and email) is correct as we may need to reach you regarding your booking.';

const SHARED_DEPOSIT_CANCELLATION =
  'A deposit of €20 per person is required to secure your reservation, with the remaining balance paid onboard on the day of the trip. Deposit & cancellation: deposit refunds are only possible if you cancel more than 48 hours before your trip\'s departure time, so we can offer your places to other guests. Cancellations within 48 hours of departure are non-refundable (deposit retained). Contact us as early as possible to cancel.';

/** Turbookings `depositObservation` — shared / mixed day & sunset trips */
export const SHARED_MIXED_DEPOSIT_OBSERVATION = `${SHARED_BOOKING_INTRO} ${SHARED_DEPOSIT_CANCELLATION}`;

const PRIVATE_GUEST_REMINDER =
  'Make sure you selected the amount of guests you will have on the boat as the price is calculated per person. After the reservation you will get the voucher with all the info such as location and booking details.';

const PRIVATE_DEPOSIT_CANCELLATION =
  'Confirmation deposit & cancellation: a confirmation deposit is required to secure your private charter. Deposit refunds apply only if you cancel more than 72 hours before departure, allowing us time to re-offer the date. Cancellations within 72 hours are non-refundable (deposit retained). Contact us as early as possible to cancel.';

/** Turbookings `depositObservation` — private charters */
export const PRIVATE_CHARTER_DEPOSIT_OBSERVATION = `${PRIVATE_GUEST_REMINDER} ${PRIVATE_DEPOSIT_CANCELLATION}`;

const WEDDING_GUEST_REMINDER =
  'Make sure you selected the amount of guests for your wedding. After the reservation you will get the voucher with all the info as location and booking details.';

/** Turbookings `depositObservation` — wedding private charters */
export const WEDDING_CHARTER_DEPOSIT_OBSERVATION = `${WEDDING_GUEST_REMINDER} ${PRIVATE_DEPOSIT_CANCELLATION}`;

/** Booking guarantees bullet on shared trip pages */
export const BOOKING_GUARANTEE_SHARED_CANCELLATION =
  'Deposit refundable if you cancel more than 48 hours before departure (shared trips); within 48 hours the deposit is not refunded';

/** Short label on book-now / flyer pages */
export const BOOKING_HIGHLIGHT_CANCELLATION =
  '48-hour deposit refund policy on shared trips (72 hours for private charters)';

/** FAQ answers (EN / ES) */
export const CANCELLATION_POLICY_FAQ_EN =
  'When you book online you pay a deposit to secure your place. Shared and mixed trips (day and sunset): the deposit is refunded only if you cancel more than 48 hours before departure, so we can resell your tickets. Cancellations within 48 hours are non-refundable. Private charters: the confirmation deposit is refunded only if you cancel more than 72 hours before departure; within 72 hours the deposit is not refunded. If the captain cancels for unsafe weather, we reschedule or refund as described in our weather policy — that is separate from guest-initiated cancellations.';

export const CANCELLATION_POLICY_FAQ_ES =
  'Al reservar online pagáis un depósito para confirmar la plaza. Excursiones compartidas y mixtas (día y atardecer): solo devolvemos el depósito si canceláis con más de 48 horas de antelación respecto a la salida, para poder volver a vender esos tickets. Cancelaciones con menos de 48 horas: el depósito no se reembolsa. Charters privados: solo reembolsamos el depósito de confirmación si canceláis con más de 72 horas de antelación; con menos de 72 horas no hay devolución. Si el capitán cancela por mal tiempo o condiciones inseguras, reprogramamos o reembolsamos según nuestra política de meteorología — distinto de una cancelación iniciada por el cliente.';
