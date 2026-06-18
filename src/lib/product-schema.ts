import { absoluteUrl, publicAssetUrl } from "@/config/site";
import {
  getGoogleAggregateRating,
  toSchemaAggregateRating,
  type AggregateRatingData,
} from "@/lib/google-aggregate-rating";

export type ProductSchemaOptions = {
  name: string;
  description: string;
  path: string;
  price: string;
  image: string;
  /** Include aggregateRating — only on pages that display Google reviews. */
  includeRating?: boolean;
  rating?: AggregateRatingData;
  duration?: string;
  validFrom?: string;
};

export async function buildProductSchema(opts: ProductSchemaOptions) {
  const {
    name,
    description,
    path,
    price,
    image,
    includeRating = false,
    rating: ratingOverride,
    duration,
    validFrom = "2025-06-25",
  } = opts;

  const rating = includeRating
    ? (ratingOverride ?? (await getGoogleAggregateRating()))
    : null;

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: [publicAssetUrl(image)],
    brand: {
      "@type": "Organization",
      name: "Salvador Ibiza",
    },
    offers: {
      "@type": "Offer",
      url: absoluteUrl(path),
      priceCurrency: "EUR",
      price,
      itemCondition: "https://schema.org/NewCondition",
      availability: "https://schema.org/InStock",
      validFrom,
    },
    ...(duration ? { duration } : {}),
    ...(rating ? { aggregateRating: toSchemaAggregateRating(rating) } : {}),
  };
}
