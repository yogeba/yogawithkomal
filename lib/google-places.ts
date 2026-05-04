import { GOOGLE_PLACE_QUERY, SITE } from "./data";

export type PlaceReview = {
  authorName: string;
  authorBadge?: string;
  rating: number;
  text: string;
  relativeTime: string;
  publishTime?: string;
  authorUrl?: string;
};

export type PlaceData = {
  rating: number;
  totalReviews: number;
  reviews: PlaceReview[];
  source: "google" | "fallback";
};

const FALLBACK: PlaceData = {
  rating: 5.0,
  totalReviews: 3,
  source: "fallback",
  reviews: [
    {
      authorName: "Bandita Bhattarai",
      rating: 5,
      relativeTime: "a week ago",
      text: "Practicing yoga with Komal has been a truly transformative experience. Her calm presence, clear guidance, and deep knowledge make every class both accessible and inspiring. Each session made me feel much lighter in my body and mind, and more centered.",
    },
    {
      authorName: "Debya Sharma",
      authorBadge: "Local Guide",
      rating: 5,
      relativeTime: "a week ago",
      text: "Some practices stay with you long after the mat is rolled up, and this was one of them. Grateful for Komal who brought not just skill, but a deep sense of calm, patience, and presence to every session. Practicing by the riverside, and also indoors when the weather didn't permit, was fantastic. Every stretch felt lighter, every breath deeper, and every session left us more grounded than before.",
    },
    {
      authorName: "Catherine Canavan",
      authorBadge: "Local Guide",
      rating: 5,
      relativeTime: "a month ago",
      text: "Komal is one of the best yoga instructors I have practiced with. I found her technique to be very thoughtful and thorough with a beautiful flow to the sequence. We practiced the yoga by the riverside at Simala Resort, Baiguney and it was the most peaceful setting. Look forward to practicing with her again.",
    },
  ],
};

const FIELD_MASK = [
  "places.id",
  "places.displayName",
  "places.rating",
  "places.userRatingCount",
  "places.reviews",
].join(",");

export async function getPlaceData(): Promise<PlaceData> {
  const key = process.env.GOOGLE_MAPS_API_KEY;
  if (!key) return FALLBACK;

  try {
    const res = await fetch(
      "https://places.googleapis.com/v1/places:searchText",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Goog-Api-Key": key,
          "X-Goog-FieldMask": FIELD_MASK,
        },
        body: JSON.stringify({
          textQuery: GOOGLE_PLACE_QUERY,
          locationBias: {
            circle: {
              center: { latitude: SITE.lat, longitude: SITE.lng },
              radius: 500,
            },
          },
          maxResultCount: 1,
        }),
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return FALLBACK;
    const data = await res.json();
    const place = data.places?.[0];
    if (!place) return FALLBACK;

    type RawReview = {
      authorAttribution?: { displayName?: string; uri?: string };
      rating?: number;
      text?: { text?: string };
      originalText?: { text?: string };
      relativePublishTimeDescription?: string;
      publishTime?: string;
    };

    const reviews: PlaceReview[] = (place.reviews ?? [])
      .slice(0, 6)
      .map((r: RawReview) => ({
        authorName: r.authorAttribution?.displayName || "Anonymous",
        authorUrl: r.authorAttribution?.uri,
        rating: r.rating ?? 5,
        text: r.text?.text || r.originalText?.text || "",
        relativeTime: r.relativePublishTimeDescription || "",
        publishTime: r.publishTime,
      }))
      .filter((r: PlaceReview) => r.text.length > 0);

    return {
      rating: place.rating ?? FALLBACK.rating,
      totalReviews: place.userRatingCount ?? FALLBACK.totalReviews,
      reviews: reviews.length > 0 ? reviews : FALLBACK.reviews,
      source: "google",
    };
  } catch {
    return FALLBACK;
  }
}
