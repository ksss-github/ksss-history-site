import { getTimeline } from "../sanity/sanity-utils"
import LandingPage from "./landing-page/landingPage";

export default async function Home() {
  const timeline = await getTimeline();

  return (
    <div>
      <LandingPage />
    </div>
  );
}
