"use client";

import Image from "next/image";
import Link from "next/link";
import { FiSun, FiSunset, FiUsers, FiMap, FiAnchor } from "react-icons/fi";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import FAQ from "@/components/trips/FAQ";
import CallToActionSection from "@/components/CallToActionSection";
import { getThingsToDoCopy, getThingsToDoFaqs } from "@/lib/seo-i18n";
import { getClientSiteLocale } from "@/lib/site-locale";

const EXPERIENCE_ICONS = [
  <FiSun key="sun" className="w-6 h-6 text-blue-600" />,
  <FiSunset key="sunset" className="w-6 h-6 text-orange-500" />,
  <FiUsers key="users" className="w-6 h-6 text-green-600" />,
  <FiAnchor key="anchor" className="w-6 h-6 text-purple-600" />,
  <FiMap key="map" className="w-6 h-6 text-cyan-600" />,
];

export default function ThingsToDoIbizaClientPage() {
  const locale = getClientSiteLocale();
  const copy = getThingsToDoCopy(locale);
  const faqs = getThingsToDoFaqs(locale);

  return (
    <div className="bg-gray-50">
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/salvador-ibiza-boat-drone-view.webp"
            alt={copy.heroImageAlt}
            fill
            className="object-cover brightness-[0.45]"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {copy.heroH1}
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            {copy.heroSubtitle}
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {copy.section1H2}
          </h2>
          <p className="text-lg text-gray-600">{copy.section1Text}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {copy.experiences.map((item, index) => (
            <div
              key={item.href}
              className="bg-white rounded-2xl shadow-md p-6 flex flex-col hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{EXPERIENCE_ICONS[index]}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 mb-6 flex-grow">{item.description}</p>
              <Link
                href={item.href}
                className="text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                {item.cta} →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            {copy.section2H2}
          </h2>
          <div className="space-y-6">
            {copy.tripIdeas.map((idea) => (
              <div
                key={idea.href}
                className="border border-gray-200 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{idea.title}</h3>
                  <p className="text-gray-600">{idea.text}</p>
                </div>
                <Link
                  href={idea.href}
                  className="inline-flex items-center justify-center px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors whitespace-nowrap"
                >
                  {idea.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 container mx-auto px-4 max-w-4xl">
        <FAQ items={faqs} title={copy.faqTitle} />
      </section>

      <CallToActionSection />
    </div>
  );
}
