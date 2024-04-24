"use client";
import { getTimeline } from "../sanity/sanity-utils";

export default async function Home() {
  const timeline = await getTimeline();

  console.log(timeline);

  return <div></div>;
}
