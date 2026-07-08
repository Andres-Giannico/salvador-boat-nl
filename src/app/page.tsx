import HomePageContent from '@/components/HomePageContent';
import { pageMetadata } from '@/lib/page-meta';
import { buildFaqPageSchema } from '@/lib/faq-schema';
import { getHomeSeo, getHomepageFaqs } from '@/lib/seo-i18n';
import { getSiteLocale } from '@/lib/site-locale';

const locale = getSiteLocale();
const homeSeo = getHomeSeo(locale);

export const metadata = pageMetadata({
  ...homeSeo,
  path: '/',
  locale,
});

const faqSchema = buildFaqPageSchema(getHomepageFaqs(locale));

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomePageContent />
    </>
  );
}
