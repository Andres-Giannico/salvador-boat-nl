import { pageMetadata } from "@/lib/page-meta";
import { buildFaqPageSchema } from "@/lib/faq-schema";
import { getThingsToDoSeo, getThingsToDoFaqs } from "@/lib/seo-i18n";
import { getSiteLocale } from "@/lib/site-locale";
import ThingsToDoIbizaClientPage from "./page.client";

const locale = getSiteLocale();
const thingsToDoSeo = getThingsToDoSeo(locale);

export const metadata = pageMetadata({
  ...thingsToDoSeo,
  path: "/things-to-do-ibiza",
  ogImage: "/images/optimized/salvador-ibiza-boat-drone-view.webp",
  locale,
});

const faqSchema = buildFaqPageSchema(getThingsToDoFaqs(locale));

export default function ThingsToDoIbizaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ThingsToDoIbizaClientPage />
    </>
  );
}
