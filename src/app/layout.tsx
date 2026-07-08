import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Script from 'next/script';
import { Toaster } from 'sonner';
import CookieConsentBanner from "@/components/CookieConsentBanner";
import EarlyBirdPromoModal from "@/components/EarlyBirdPromoModal";
import { getSiteUrl, pageAlternates } from "@/config/site";
import { getLayoutSeo, getOpenGraphLocales } from "@/lib/seo-i18n";
import { getSiteLocale } from "@/lib/site-locale";
import {
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildTouristAttractionSchema,
  buildWebsiteSchema,
} from "@/lib/business-schema";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const siteLocale = getSiteLocale();
const layoutSeo = getLayoutSeo(siteLocale);
const ogLocales = getOpenGraphLocales(siteLocale);

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  alternates: pageAlternates('/'),
  title: {
    default: layoutSeo.title,
    template: "%s | Salvador Ibiza",
  },
  description: layoutSeo.description,
  keywords: layoutSeo.keywords,
  authors: [{ name: "Salvador Ibiza Team" }],
  creator: "Salvador Ibiza",
  openGraph: {
    title: layoutSeo.title,
    description: layoutSeo.description,
    url: getSiteUrl(),
    siteName: "Salvador Ibiza",
    locale: ogLocales.locale,
    alternateLocale: ogLocales.alternateLocale,
    type: 'website',
    images: [
      {
        url: '/images/optimized/salvador-ibiza-boat-drone-view.webp',
        width: 1200,
        height: 630,
        alt: 'Salvador Ibiza Boat',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: layoutSeo.title,
    description: layoutSeo.description,
    images: ['/images/optimized/salvador-ibiza-boat-drone-view.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteBase = getSiteUrl();
  const localBusinessSchema = await buildLocalBusinessSchema(siteBase);
  const touristAttractionSchema = await buildTouristAttractionSchema(siteBase);
  const websiteSchema = buildWebsiteSchema(siteBase);
  const organizationSchema = buildOrganizationSchema(siteBase);

  return (
    <html lang={siteLocale} className={`${inter.variable} ${montserrat.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(touristAttractionSchema) }}
        />
        
        <Script
          id="google-tag-manager-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZR67SFF');
            `,
          }}
        />

        <Script
          id="google-analytics-consent"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              
              gtag('consent', 'default', {
                'analytics_storage': 'denied',
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'wait_for_update': 500
              });
              
              gtag('js', new Date());
            `,
          }}
        />
        
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/images/favicon.ico" sizes="any" />
        <Script
          id="website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </head>
      <body className={`${inter.className} bg-white text-gray-800`}>
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MZR67SFF"
        height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe></noscript>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <Toaster position="top-center" richColors />
          <main className="flex-grow pt-20 md:pt-24 sm:pt-16">
            {children}
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
        <CookieConsentBanner />
        <EarlyBirdPromoModal />
      </body>
    </html>
  );
}
