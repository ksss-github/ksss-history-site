import { getTimeline } from "../sanity/sanity-utils";
import AboutUs from "./AboutUs";

export default async function AboutUsPage() {
  const timeline = await getTimeline();

  return (
    <div>
      <AboutUs /> 
    </div>
  );
}
