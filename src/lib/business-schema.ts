import { businessContact, getSiteUrl, publicAssetUrl } from "@/config/site";

const WEEKDAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
] as const;

function postalAddress(address: typeof businessContact.registeredAddress) {
  return {
    "@type": "PostalAddress" as const,
    streetAddress: address.streetAddress,
    addressLocality: address.addressLocality,
    addressRegion: address.addressRegion,
    postalCode: address.postalCode,
    addressCountry: address.addressCountry,
  };
}

export function buildLocalBusinessSchema(siteBase: string = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TourOperator"],
    "@id": `${siteBase}/#organization`,
    name: businessContact.name,
    alternateName: businessContact.alternateName,
    description:
      "Premium boat trips and private charters in Ibiza. All-inclusive excursions with professional crew, equipment, and unforgettable experiences.",
    url: siteBase,
    telephone: businessContact.phones[0],
    email: businessContact.email,
    address: postalAddress(businessContact.registeredAddress),
    location: {
      "@type": "Place",
      name: "Boarding Point - Puerto de San Antonio",
      address: postalAddress(businessContact.boardingPoint),
      geo: {
        "@type": "GeoCoordinates",
        latitude: businessContact.geo.latitude,
        longitude: businessContact.geo.longitude,
      },
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessContact.geo.latitude,
      longitude: businessContact.geo.longitude,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [...WEEKDAYS],
        opens: businessContact.openingHours.opens,
        closes: businessContact.openingHours.closes,
      },
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessContact.aggregateRating.ratingValue,
      reviewCount: businessContact.aggregateRating.reviewCount,
      bestRating: businessContact.aggregateRating.bestRating,
      worstRating: businessContact.aggregateRating.worstRating,
    },
    priceRange: businessContact.priceRange,
    currenciesAccepted: "EUR",
    paymentAccepted: businessContact.paymentAccepted,
    areaServed: {
      "@type": "Place",
      name: "Ibiza, Balearic Islands, Spain",
    },
    serviceArea: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: businessContact.geo.latitude,
        longitude: businessContact.geo.longitude,
      },
      geoRadius: "50000",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Salvador Ibiza Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Day Boat Trips",
            description:
              "3-hour all-inclusive day boat trips with swimming, snorkeling, and refreshments",
          },
          price: "80",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Sunset Boat Trips",
            description:
              "3-hour sunset cruises with premium drinks and magical golden hour experience",
          },
          price: "80",
          priceCurrency: "EUR",
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Private Boat Charter",
            description:
              "Exclusive private boat charters with customized itinerary and premium service",
          },
          price: "1350",
          priceCurrency: "EUR",
        },
      ],
    },
    sameAs: [
      businessContact.social.instagram,
      businessContact.social.facebook,
      businessContact.social.tripadvisor,
    ],
    logo: {
      "@type": "ImageObject",
      url: `${siteBase}/images/logo-salvador.png`,
      width: "300",
      height: "100",
    },
    image: [
      publicAssetUrl("/images/optimized/salvador-ibiza-boat-drone-view.webp"),
      publicAssetUrl("/images/optimized/salvador-ibiza-boat-aerial-view.webp"),
    ],
  };
}

export function buildTouristAttractionSchema(siteBase: string = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "@id": `${siteBase}/#tourist-attraction`,
    name: "Salvador Ibiza Boat Trips",
    description:
      "Traditional wooden boat day trips and sunset cruises in Ibiza. All-inclusive excursions with swimming, paddleboarding, kayaking and snorkelling from San Antonio port.",
    url: siteBase,
    image: publicAssetUrl("/images/optimized/salvador-ibiza-boat-drone-view.webp"),
    touristType: ["Families", "Couples", "Groups"],
    isAccessibleForFree: false,
    address: postalAddress(businessContact.boardingPoint),
    geo: {
      "@type": "GeoCoordinates",
      latitude: businessContact.geo.latitude,
      longitude: businessContact.geo.longitude,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: businessContact.aggregateRating.ratingValue,
      reviewCount: businessContact.aggregateRating.reviewCount,
      bestRating: businessContact.aggregateRating.bestRating,
      worstRating: businessContact.aggregateRating.worstRating,
    },
    provider: {
      "@id": `${siteBase}/#organization`,
    },
  };
}

export function buildWebsiteSchema(siteBase: string = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: businessContact.name,
    url: siteBase,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteBase}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildOrganizationSchema(siteBase: string = getSiteUrl()) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: businessContact.name,
    url: siteBase,
    logo: `${siteBase}/images/logo-salvador.png`,
    contactPoint: {
      "@type": "ContactPoint",
      telephone: businessContact.phones[0],
      email: businessContact.email,
      contactType: "customer service",
      availableLanguage: ["English", "Spanish", "Dutch"],
    },
  };
}
