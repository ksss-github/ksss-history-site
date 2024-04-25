import { getTimeline } from "../sanity/sanity-utils"
import AboutUs from "./about-us/AboutUs";
import LandingPage from "./landing-page/landingPage";

export default async function Home() {
  const timeline = await getTimeline();

  return (
    <div>
      <AboutUs />
    </div>
  );
}
