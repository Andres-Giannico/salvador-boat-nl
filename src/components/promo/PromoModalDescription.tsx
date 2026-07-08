'use client';

import type { ActivePromoKind } from '@/lib/active-promo';
import { getPromoModalDesc } from '@/lib/promo-i18n';
import { getClientSiteLocale } from '@/lib/site-locale';

export function PromoModalDescription({
  kind,
  code,
}: {
  kind: ActivePromoKind;
  code: string;
}) {
  const locale = getClientSiteLocale();
  const d = getPromoModalDesc(kind, locale);

  if (kind === 'earlybird') {
    if (locale === 'es') {
      return (
        <>
          {d.earlyEnjoy}{' '}
          <strong className="text-gray-800">{d.lead}</strong> {d.earlyWithCode}{' '}
          <strong className="font-mono text-gray-800">{code}</strong>:{' '}
          <strong className="text-[#1a7f37]">{d.perPerson}</strong> en{' '}
          <strong>{d.product}</strong> {d.tripTypes}. {d.earlyEnter}
        </>
      );
    }

    if (locale === 'nl' || locale === 'fr') {
      return (
        <>
          {d.earlyEnjoy}{' '}
          <strong className="text-gray-800">{d.lead}</strong> {d.earlyWithCode}{' '}
          <strong className="font-mono text-gray-800">{code}</strong>:{' '}
          <strong className="text-[#1a7f37]">{d.perPerson}</strong>{' '}
          {locale === 'fr' ? 'sur' : 'op'} <strong>{d.product}</strong> {d.tripTypes}.{' '}
          {d.earlyEnter}
        </>
      );
    }

    return (
      <>
        {d.earlyEnjoy}{' '}
        <strong className="text-gray-800">{d.lead}</strong> {d.earlyWithCode}{' '}
        <strong className="font-mono text-gray-800">{code}</strong>:{' '}
        <strong className="text-[#1a7f37]">{d.perPerson}</strong> on{' '}
        <strong>{d.product}</strong> {d.tripTypes}. {d.earlyEnter}{' '}
        <strong className="text-gray-800">{d.codeField}</strong> field when you book.
      </>
    );
  }

  const checkoutPhrase =
    locale === 'es'
      ? 'al pagar'
      : locale === 'nl'
        ? 'bij het afrekenen'
        : locale === 'fr'
          ? 'au paiement'
          : 'at checkout';

  const thisOfferPhrase =
    locale === 'es' ? 'esta' : locale === 'nl' ? 'deze' : locale === 'fr' ? 'cette' : 'this';

  const endsPhrase =
    locale === 'es'
      ? 'termina el'
      : locale === 'nl'
        ? 'eindigt op'
        : locale === 'fr'
          ? 'se termine le'
          : 'ends';

  const onPhrase = locale === 'es' ? 'en' : locale === 'fr' ? 'sur' : locale === 'nl' ? 'op' : 'on';

  const fieldPhrase =
    locale === 'es'
      ? 'en el campo'
      : locale === 'nl'
        ? 'in het veld'
        : locale === 'fr'
          ? 'dans le champ'
          : 'in the';

  return (
    <>
      <strong className="text-gray-800">{d.lead}</strong>{' '}
      <strong className="text-[#1a7f37]">{d.perPerson}</strong> {onPhrase}{' '}
      <strong>{d.product}</strong> {d.tripTypes} {d.webBookingLead}{' '}
      <strong>{d.webBooking}</strong>. {d.codeAction}{' '}
      <strong className="font-mono text-gray-800">{code}</strong> {fieldPhrase}{' '}
      <strong className="text-gray-800">{d.codeField}</strong> {checkoutPhrase} — {thisOfferPhrase}{' '}
      <strong className="text-gray-800">{d.offerLabel}</strong> {endsPhrase}{' '}
      <strong className="text-gray-800">{d.deadline}</strong>
      {kind === 'super' ? d.superGone : '.'}
    </>
  );
}
