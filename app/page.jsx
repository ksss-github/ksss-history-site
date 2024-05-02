import { getTimeline } from "../sanity/sanity-utils"
import LandingPage from "../components/landing-page/landingPage";
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export default async function Home() {
  const timeline = await getTimeline();

  return (
    <div>
      <LandingPage timeline={timeline}/>
    </div>
  );
}
