import { NextResponse } from "next/server";
import { Client, Language } from "@googlemaps/google-maps-services-js";

// Revalidate every hour (adjust as needed)
export const revalidate = 3600;

export async function GET() {
  console.log("API Route /api/reviews invoked."); // Log entry point

  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.PLACE_ID;

  console.log(`API Key found: ${!!apiKey}`); // Log if API key exists
  console.log(`Place ID found: ${!!placeId}`); // Log if Place ID exists

  if (!apiKey) {
    console.error("Missing Google Maps API Key in Vercel environment.");
    return NextResponse.json(
      { error: "Configuration Error: Missing API Key" }, // More specific error
      { status: 500 }
    );
  }

  if (!placeId) {
    console.error("Missing Place ID in Vercel environment.");
    return NextResponse.json(
      { error: "Configuration Error: Missing Place ID" }, // More specific error
      { status: 500 }
    );
  }

  try {
    console.log("Attempting to create Google Maps client.");
    const client = new Client({});
    console.log("Google Maps client created. Attempting placeDetails call...");
    const response = await client.placeDetails({
      params: {
        place_id: placeId,
        key: apiKey,
        language: Language.es, // Corrected language type
      },
      timeout: 5000 // Add a timeout (5 seconds)
    });
    console.log(`Google API response status: ${response.data.status}`);

    if (response.data.status !== "OK") {
      console.error("Google API returned non-OK status:", response.data.status, response.data.error_message || '');
      return NextResponse.json(
        { error: `Google API error: ${response.data.status} - ${response.data.error_message || 'No details'}` },
        { status: 500 }
      );
    }

    const reviews = response.data.result?.reviews || []; // Safer access to reviews
    console.log(`Found ${reviews.length} reviews.`);
    if (reviews.length === 0) {
      console.warn("No reviews found for place ID:", placeId);
      // It's okay to return empty array, not an error
    }

    return NextResponse.json({ reviews });

  } catch (error: unknown) {
    console.error("!!! Critical Error fetching reviews:", error); // Log the full error object
    let errorMessage = 'Unknown server error';
    let statusCode = 500;

    if (error instanceof Error) {
        errorMessage = error.message;
        // Check for specific error types if needed, e.g., timeout
        if (error.message.includes('timeout')) {
             errorMessage = 'Request to Google API timed out.';
             statusCode = 504; // Gateway Timeout
        }
    }
    // Log the specific error before returning generic message
    console.error(`Error details: ${errorMessage}`);

    return NextResponse.json(
      // Return a more structured error
      { error: `Failed to fetch reviews. Server error: ${errorMessage}` },
      { status: statusCode }
    );
  }
} 