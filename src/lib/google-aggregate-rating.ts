import { unstable_cache } from "next/cache";
import { Client, Language } from "@googlemaps/google-maps-services-js";
import { PLACE_ID } from "@/config/google";
import { businessContact } from "@/config/site";

export type AggregateRatingData = {
  ratingValue: string;
  reviewCount: string;
  bestRating: string;
  worstRating: string;
};

const FALLBACK: AggregateRatingData = {
  ratingValue: businessContact.aggregateRating.ratingValue,
  reviewCount: businessContact.aggregateRating.reviewCount,
  bestRating: businessContact.aggregateRating.bestRating,
  worstRating: businessContact.aggregateRating.worstRating,
};

async function fetchGoogleAggregateRating(): Promise<AggregateRatingData> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  if (!apiKey || !PLACE_ID) {
    return FALLBACK;
  }

  try {
    const client = new Client({});
    const response = await client.placeDetails({
      params: {
        place_id: PLACE_ID,
        key: apiKey,
        language: Language.en,
        fields: ["rating", "user_ratings_total"],
      },
      timeout: 5000,
    });

    if (response.data.status !== "OK" || !response.data.result) {
      return FALLBACK;
    }

    const { rating, user_ratings_total } = response.data.result;
    if (rating == null || user_ratings_total == null) {
      return FALLBACK;
    }

    return {
      ratingValue: rating.toFixed(1),
      reviewCount: String(user_ratings_total),
      bestRating: "5",
      worstRating: "1",
    };
  } catch {
    return FALLBACK;
  }
}

export const getGoogleAggregateRating = unstable_cache(
  fetchGoogleAggregateRating,
  ["google-aggregate-rating", PLACE_ID],
  { revalidate: 3600, tags: ["google-rating"] }
);

export function toSchemaAggregateRating(rating: AggregateRatingData) {
  return {
    "@type": "AggregateRating" as const,
    ratingValue: rating.ratingValue,
    reviewCount: rating.reviewCount,
    bestRating: rating.bestRating,
    worstRating: rating.worstRating,
  };
}
