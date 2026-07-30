'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  FiCheck,
  FiTrendingUp,
  FiShare2,
  FiDollarSign,
  FiZap,
  FiBriefcase,
  FiAward,
  FiMail,
  FiArrowRight,
} from 'react-icons/fi';
import Breadcrumbs from '@/components/ui/Breadcrumbs';
import { TURVOK_PARTNER_REGISTER_URL } from '@/config/partners';
import { getPartnersCopy } from '@/lib/partners-i18n';
import { getClientSiteLocale } from '@/lib/site-locale';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] as const },
});

const INFLUENCER_ICONS = [FiShare2, FiDollarSign, FiZap, FiTrendingUp] as const;

const tripadvisorBadges = [
  {
    src: '/images/optimized/tripadvisor-salvador-ibiza-2023.webp',
    alt: "Tripadvisor Traveller's Choice Best of the Best 2023",
  },
  {
    src: '/images/optimized/tripadvisor-salvador-ibiza-2024.webp',
    alt: "Tripadvisor Traveller's Choice 2024",
  },
  {
    src: '/images/optimized/tripadvisor-salvador-ibiza-2025.webp',
    alt: "Tripadvisor Traveller's Choice Awards 2025",
  },
];

function SectionTitle({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-3xl md:text-4xl font-normal text-[#1A1A1A] tracking-tight ${className}`}>
      {children}
    </h2>
  );
}

function PrimaryButton({
  href,
  children,
  external = false,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  variant?: 'primary' | 'gold' | 'outline-light';
}) {
  const base =
    'inline-flex items-center justify-center gap-2 px-8 py-3.5 text-base font-semibold rounded transition-colors duration-200';
  const variants = {
    primary: 'bg-[#7C2D12] text-white hover:bg-[#6B2710]',
    gold: 'bg-[#B8860B] text-[#1A1A1A] hover:bg-[#A6780A]',
    'outline-light':
      'border border-white/40 text-white bg-white/10 backdrop-blur-sm hover:bg-white/20',
  };

  return (
    <a
      href={href}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={`${base} ${variants[variant]}`}
    >
      {children}
    </a>
  );
}

export default function PartnersClientPage() {
  const locale = getClientSiteLocale();
  const copy = getPartnersCopy(locale);

  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      <div className="bg-white border-b border-[#E5DFD6]">
        <div className="container mx-auto px-4 py-4">
          <Breadcrumbs />
        </div>
      </div>

      <section className="relative min-h-[72vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/optimized/salvador-ibiza-cala-comte-red-deck-aerial.webp"
            alt={copy.heroImageAlt}
            fill
            priority
            className="object-cover object-center brightness-[0.55]"
            quality={85}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
        </div>

        <div className="relative z-10 container mx-auto px-4 pb-16 md:pb-20 pt-32 md:pt-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <p className="text-[#B8860B] text-sm tracking-[0.2em] uppercase font-medium mb-4">
              {copy.heroEyebrow}
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight mb-6">
              {copy.heroTitle}
            </h1>
            <p className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-2xl">
              {copy.heroSubtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton href="#businesses">{copy.ctaPartner}</PrimaryButton>
              <PrimaryButton href="#influencers" variant="outline-light">
                {copy.ctaInfluencer}
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white border-b border-[#E5DFD6] py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center gap-2 text-[#4A4A4A] text-sm">
              <FiAward className="w-5 h-5 text-[#7C2D12]" />
              <span>{copy.trustBar}</span>
            </div>
            <div className="flex items-center gap-4">
              {tripadvisorBadges.map((badge) => (
                <Image
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  width={80}
                  height={80}
                  className="h-14 w-auto object-contain opacity-90"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="businesses" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <motion.div {...fadeUp()}>
            <p className="text-[#7C2D12] text-sm tracking-[0.15em] uppercase font-medium mb-4">
              {copy.businessEyebrow}
            </p>
            <SectionTitle className="mb-6">{copy.businessTitle}</SectionTitle>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">{copy.businessIntro}</p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#FAF8F5]">
        <div className="grid lg:grid-cols-2 items-stretch min-h-[360px] lg:min-h-[440px]">
          <div className="relative h-56 sm:h-72 lg:h-auto">
            <Image
              src="/images/optimized/partner-programme-banner.webp"
              alt={copy.bannerImageAlt}
              fill
              className="object-cover object-left"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <motion.div
            {...fadeUp()}
            className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-16 lg:py-0"
          >
            <p className="text-[#7C2D12] text-sm tracking-[0.15em] uppercase font-medium mb-4">
              {copy.bannerEyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-[#1A1A1A] leading-tight mb-5">
              {copy.bannerTitle}
            </h2>
            <p className="text-[#4A4A4A] leading-relaxed mb-8 max-w-md">{copy.bannerBody}</p>
            <div>
              <PrimaryButton href={TURVOK_PARTNER_REGISTER_URL} external>
                {copy.registerTurvok}
                <FiArrowRight className="w-4 h-4" />
              </PrimaryButton>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-[#FAF8F5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <SectionTitle>{copy.sellTitle}</SectionTitle>
          </motion.div>
          <div className="space-y-4">
            {copy.sellOptions.map((option, index) => (
              <motion.div
                key={option.title}
                {...fadeUp(index * 0.1)}
                className={`bg-white border border-[#E5DFD6] border-l-4 ${option.accent} p-6 md:p-8`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${option.titleColor}`}>{option.title}</h3>
                <p className="text-[#4A4A4A] leading-relaxed">{option.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <SectionTitle>{copy.benefitsTitle}</SectionTitle>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {copy.benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                {...fadeUp(index * 0.08)}
                className="bg-[#FAF8F5] border border-[#E5DFD6] p-6 text-center"
              >
                <h3 className="font-semibold text-[#1A1A1A] mb-2">{benefit.title}</h3>
                <p className="text-[#4A4A4A] text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#1A1A1A]">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeUp()} className="text-center mb-12">
            <p className="text-[#B8860B] text-xs tracking-[0.2em] uppercase font-medium mb-4">
              {copy.turvokEyebrow}
            </p>
            <h2 className="font-display text-3xl md:text-4xl font-normal text-[#FAF8F5] mb-6">
              {copy.turvokTitle}
            </h2>
            <p className="text-[#C8C4BE] text-lg leading-relaxed max-w-3xl mx-auto mb-4">
              {copy.turvokBody}
            </p>
            <p className="text-[#888888] italic text-sm">{copy.turvokNote}</p>
          </motion.div>

          <motion.div {...fadeUp(0.15)} className="mb-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div>
                <div className="relative border border-[#333333] rounded overflow-hidden">
                  <Image
                    src="/images/optimized/turvok-hotel-desk-mockup.webp"
                    alt={copy.turvokMockupAlt}
                    width={1920}
                    height={1080}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-[#888888] text-sm mt-3 text-center lg:text-left">
                  {copy.turvokMockupCaption}
                </p>
              </div>
              <div>
                <div className="relative border border-[#333333] rounded overflow-hidden">
                  <Image
                    src="/images/optimized/turvok-booking-widget-partner-email.webp"
                    alt={copy.turvokWidgetAlt}
                    width={1040}
                    height={720}
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-[#888888] text-sm mt-3 text-center lg:text-left">
                  {copy.turvokWidgetCaption}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.ul {...fadeUp(0.2)} className="max-w-xl mx-auto space-y-3 mb-12">
            {copy.turvokFeatures.map((feature) => (
              <li key={feature} className="flex items-start gap-3 text-[#C8C4BE]">
                <FiCheck className="w-5 h-5 text-[#B8860B] shrink-0 mt-0.5" />
                {feature}
              </li>
            ))}
          </motion.ul>

          <motion.div {...fadeUp(0.25)} className="text-center">
            <PrimaryButton href={TURVOK_PARTNER_REGISTER_URL} external variant="gold">
              {copy.registerTurvok}
              <FiArrowRight className="w-4 h-4" />
            </PrimaryButton>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-[#FAF8F5]">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <SectionTitle>{copy.experiencesTitle}</SectionTitle>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {copy.experiences.map((exp, index) => (
              <motion.article key={exp.title} {...fadeUp(index * 0.08)}>
                <div className="relative aspect-[4/3] overflow-hidden rounded mb-4">
                  <Image src={exp.src} alt={exp.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
                </div>
                <h3 className="font-semibold text-[#1A1A1A] mb-1">{exp.title}</h3>
                <p className="text-sm text-[#4A4A4A] leading-relaxed">{exp.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <motion.div {...fadeUp()} className="text-center mb-14">
            <SectionTitle>{copy.howTitle}</SectionTitle>
          </motion.div>

          {locale === 'en' && (
            <motion.div {...fadeUp(0.1)} className="mb-14">
              <div className="relative w-full overflow-hidden rounded border border-[#E5DFD6] bg-[#FAF8F5]">
                <Image
                  src="/images/optimized/partner-flow-infographic.webp"
                  alt={copy.infographicAlt}
                  width={1920}
                  height={1080}
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          )}

          <div className="space-y-8 max-w-3xl mx-auto">
            {copy.steps.map((step, index) => (
              <motion.div key={step.title} {...fadeUp(index * 0.1)} className="flex gap-5">
                <div className="shrink-0 w-9 h-9 bg-[#7C2D12] text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-1">{step.title}</h3>
                  <p className="text-[#4A4A4A] leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div {...fadeUp(0.35)} className="text-center mt-14 pt-10 border-t border-[#E5DFD6]">
            <PrimaryButton href={TURVOK_PARTNER_REGISTER_URL} external>
              {copy.registerTurvok}
              <FiArrowRight className="w-4 h-4" />
            </PrimaryButton>
            <p className="mt-6 text-[#4A4A4A] flex items-center justify-center gap-2 flex-wrap">
              <FiMail className="w-4 h-4 text-[#7C2D12]" />
              {copy.questions}{' '}
              <a
                href="mailto:partners@salvadoribiza.com"
                className="text-[#7C2D12] font-medium hover:underline"
              >
                partners@salvadoribiza.com
              </a>
            </p>
          </motion.div>
        </div>
      </section>

      <section id="influencers" className="py-20 md:py-28 bg-[#FAF8F5] border-t border-[#E5DFD6]">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp()} className="text-center mb-14 max-w-2xl mx-auto">
            <p className="text-[#7C2D12] text-sm tracking-[0.15em] uppercase font-medium mb-4">
              {copy.influencerEyebrow}
            </p>
            <SectionTitle className="mb-4">{copy.influencerTitle}</SectionTitle>
            <p className="text-[#4A4A4A] leading-relaxed">{copy.influencerIntro}</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-14">
            {copy.influencerFeatures.map((feature, index) => {
              const Icon = INFLUENCER_ICONS[index];
              return (
                <motion.div
                  key={feature.title}
                  {...fadeUp(index * 0.08)}
                  className="bg-white border border-[#E5DFD6] p-6"
                >
                  <div className="w-10 h-10 flex items-center justify-center bg-[#FAF8F5] border border-[#E5DFD6] mb-4">
                    <Icon className="w-5 h-5 text-[#7C2D12]" />
                  </div>
                  <h3 className="font-semibold text-[#1A1A1A] mb-2">{feature.title}</h3>
                  <p className="text-sm text-[#4A4A4A] leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>

          <motion.div {...fadeUp(0.2)} className="max-w-xl mx-auto">
            <div className="bg-white border border-[#E5DFD6] p-6 md:p-8 mb-10">
              <h3 className="font-semibold text-[#1A1A1A] mb-4">{copy.influencerHowTitle}</h3>
              <ol className="space-y-3 text-[#4A4A4A]">
                {copy.influencerSteps.map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-semibold text-[#7C2D12] shrink-0">{i + 1}.</span>
                    {step}
                  </li>
                ))}
              </ol>
            </div>

            <div className="text-center">
              <a
                href={copy.whatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1A1A1A] text-white font-semibold rounded hover:bg-[#333333] transition-colors duration-200"
              >
                <FiBriefcase className="w-4 h-4" />
                {copy.applyTurvok}
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
