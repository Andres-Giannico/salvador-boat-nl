import PartnersClientPage from './page.client';
import { pageMetadata } from '@/lib/page-meta';
import { getPartnersSeo } from '@/lib/partners-i18n';
import { getSiteLocale } from '@/lib/site-locale';

const locale = getSiteLocale();
const seo = getPartnersSeo(locale);

export const metadata = pageMetadata({
  ...seo,
  path: '/partners',
  locale,
});

export default function PartnersPage() {
  return <PartnersClientPage />;
}
