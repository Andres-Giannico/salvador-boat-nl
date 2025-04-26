import { NextResponse } from "next/server";
import { Client, Language } from "@googlemaps/google-maps-services-js";

// Revalidate every hour (adjust as needed)
export const revalidate = 3600; 

export async function GET() {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.PLACE_ID;

  if (!apiKey) {
    console.error("Missing Google Maps API Key");
    return NextResponse.json(
      { error: "Missing API Key" },
      { status: 500 }
    );
  }

  if (!placeId) {
    console.error("Missing Place ID");
    return NextResponse.json(
      { error: "Missing Place ID" },
      { status: 500 }
    );
  }

  try {
    const client = new Client({});
    const response = await client.placeDetails({
      params: {
        place_id: placeId,
        key: apiKey,
        language: Language.es,
      },
    });

    if (response.data.status !== "OK") {
      console.error("Google API Error:", response.data.status);
      return NextResponse.json(
        { error: `Google API error: ${response.data.status}` },
        { status: 500 }
      );
    }

    const reviews = response.data.result.reviews || [];
    if (reviews.length === 0) {
      console.warn("No reviews found for place ID:", placeId);
      return NextResponse.json({ reviews: [] });
    }

    return NextResponse.json({ reviews });
  } catch (error: unknown) {
    console.error("Error fetching reviews:", error);
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    return NextResponse.json(
      { error: `Error fetching reviews: ${errorMessage}` },
      { status: 500 }
    );
  }
} 