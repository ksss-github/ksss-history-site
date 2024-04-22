import { getTimeline } from "../sanity/sanity-utils"
import Footer from "../components/Footer/Footer";

export default async function Home() {
  const timeline = await getTimeline();

  console.log(timeline);

  return (
    <div>
     <Footer />
    </div>
  );
}
