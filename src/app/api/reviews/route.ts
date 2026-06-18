import { NextResponse } from "next/server";
import { Client, Language } from "@googlemaps/google-maps-services-js";
import { getGoogleAggregateRating } from "@/lib/google-aggregate-rating";

export const revalidate = 3600;

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.PLACE_ID;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Configuration Error: Missing API Key" },
      { status: 500 }
    );
  }

  if (!placeId) {
    return NextResponse.json(
      { error: "Configuration Error: Missing Place ID" },
      { status: 500 }
    );
  }

  try {
    const client = new Client({});
    const response = await client.placeDetails({
      params: {
        place_id: placeId,
        key: apiKey,
        language: Language.en,
      },
      timeout: 5000,
    });

    if (response.data.status !== "OK") {
      return NextResponse.json(
        {
          error: `Google API error: ${response.data.status} - ${response.data.error_message || "No details"}`,
        },
        { status: 500 }
      );
    }

    const result = response.data.result;
    const reviews = result?.reviews || [];
    const aggregateRating = await getGoogleAggregateRating();

    return NextResponse.json({
      reviews,
      rating: aggregateRating.ratingValue,
      reviewCount: aggregateRating.reviewCount,
    });
  } catch (error: unknown) {
    let errorMessage = "Unknown server error";
    let statusCode = 500;

    if (error instanceof Error) {
      errorMessage = error.message;
      if (error.message.includes("timeout")) {
        errorMessage = "Request to Google API timed out.";
        statusCode = 504;
      }
    }

    return NextResponse.json(
      { error: `Failed to fetch reviews. Server error: ${errorMessage}` },
      { status: statusCode }
    );
  }
}
