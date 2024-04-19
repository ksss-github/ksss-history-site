import Timeline from "../../components/Timeline";
import { getTimeline } from "../../sanity/sanity-utils";
export const dynamic = 'force-dynamic'
export const fetchCache = 'force-no-store';

export default async function TimelinePage() {
  const timeline = await getTimeline();

  return (
    <div>
      <Timeline timelineData={timeline} />
    </div>
  );
}

