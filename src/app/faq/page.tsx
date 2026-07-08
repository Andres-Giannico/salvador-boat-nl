import { pageMetadata } from '@/lib/page-meta';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { getFaqPageSchemaFaqs, getFaqPageSeo } from '@/lib/faq-i18n';
import { getSiteLocale } from '@/lib/site-locale';
import FAQClientPage from './page.client';

const locale = getSiteLocale();
const faqSeo = getFaqPageSeo(locale);

export const metadata = pageMetadata({
  ...faqSeo,
  path: '/faq',
  locale,
});

export default function FAQPage() {
  const faqSchema = buildFaqPageSchema(getFaqPageSchemaFaqs(locale));

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <FAQClientPage />
    </>
  );
}
