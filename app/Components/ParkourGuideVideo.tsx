'use client';

import YouTube from 'react-youtube';

const YOUTUBE_VIDEO_ID = 'w-2i3STn6bQ';

export default function ParkourGuideVideo() {
  return (
    <div className="relative mx-auto aspect-video w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl">
      <YouTube
        videoId={YOUTUBE_VIDEO_ID}
        iframeClassName="absolute inset-0 h-full w-full"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            mute: 1,
            rel: 0,
            controls: 1,
            modestbranding: 1,
          },
        }}
      />
    </div>
  );
}
