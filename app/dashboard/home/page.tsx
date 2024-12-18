import { FeaturedVideos } from './_components/featured-videos';
import { QuickLinks } from './_components/quick-links';
import { UpcomingEvents } from './_components/upcoming-events';
import PageContainer from '@/components/layout/page-container';

export default function HomePage() {
  return (
    <PageContainer scrollable>
      <div className="space-y-2">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Início</h2>
        </div>

        <div className="space-y-10">
          <FeaturedVideos />
          <QuickLinks />
          <UpcomingEvents />
        </div>
      </div>
    </PageContainer>
  );
}
