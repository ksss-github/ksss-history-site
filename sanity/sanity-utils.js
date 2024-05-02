// All values for the groq queries are listed in the end of this file
import { createClient, groq } from "next-sanity";
import clientConfig from "./config/client-config";

// Fetches all timeline events with only the title, slug, date, location, and image (preview)
export async function getTimeline() {
  try {
    return await createClient(clientConfig).fetch(
      groq`*[_type == "timeline"]{
        _id,
        _createdAt,
        title,
        "tagIds": tags[]->value.current,
        "slug": slug.current,
        date,
        location,
        description,
        "image": {
    "url": image.asset->url,
    "alt": image.alt
  }
      }`
    );
  } catch (error) {
    console.error("Error fetching timeline:", error);
    return [];
  }
}

// Fetches a single timeline event with all fields for the full page view
export async function getFullEvent(slug) {
  try {
    return await createClient(clientConfig).fetch(
      groq`*[_type == "timeline" && slug.current == $slug][0]{
        _id,
        _createdAt,
        title,
        "slug": slug.current,
        date,
        location,
        content,
        "image": {
    "url": image.asset->url,
    "alt": image.alt
  },
        "gallery": gallery[]{
    "url": asset->url,
    "alt": alt
  },
  "relatedLinks": relatedLinks[]{
    "title": title,
    "url": url
  }
      }`,
      { slug }
    );
  } catch (error) {
    console.error("Error fetching timeline:", error);
    return {};
  }
}

export async function getPdfYearBooks() {
  try {
    return await createClient(clientConfig).fetch(
      groq`*[_type == "yearbookpdfurl"]{
        pdfyear,
        pdf
      }`
    );
  } catch (error) {
    console.error("Error fetching pdfyearBooks:", error);
    return [];
  }
}
