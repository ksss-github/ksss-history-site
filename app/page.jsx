import { getTimeline } from "../sanity/sanity-utils"
import AboutUs from "./about-us/AboutUs";
import LandingPage from "./landing-page/landingPage";
import Link from "next/link";

export default async function Home() {
  const timeline = await getTimeline();

  return (
    <div>
      <LandingPage/>
    </div>
  );
}
