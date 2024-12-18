'use client';

import { Card } from '@/components/ui/card';

const videos = [
  {
    id: 1,
    videoId: 'Cnc7aErj1O8'
  },
  {
    id: 2,
    videoId: 'pqk9vkT1rI0'
  }
];

export function FeaturedVideos() {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {videos.map((video) => (
        <Card key={video.id} className="overflow-hidden">
          <div className="relative aspect-video">
            <iframe
              src={`https://www.youtube.com/embed/${video.videoId}?rel=0`}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute left-0 top-0 h-full w-full border-0"
            />
          </div>
        </Card>
      ))}
    </div>
  );
}
