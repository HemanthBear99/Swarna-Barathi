import InteractiveBentoGallery from './interactive-bento-gallery';

const mediaItems = [
  {
    id: 1,
    type: 'image',
    title: 'Mountain Landscape',
    desc: 'Majestic mountain peaks at sunset',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 2,
    type: 'video',
    title: 'Ocean Waves',
    desc: 'Peaceful ocean waves crashing',
    url: 'https://cdn.pixabay.com/video/2024/07/24/222837_large.mp4',
    span: 'md:col-span-2 md:row-span-2 col-span-1 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 3,
    type: 'image',
    title: 'Forest Path',
    desc: 'Mystical forest trail',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-2 sm:row-span-2',
  },
  {
    id: 4,
    type: 'image',
    title: 'Desert Dunes',
    desc: 'Golden sand dunes at sunset',
    url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 5,
    type: 'video',
    title: 'Northern Lights',
    desc: 'Aurora borealis dancing in the sky',
    url: 'https://cdn.pixabay.com/video/2020/07/30/46026-447087782_large.mp4',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 6,
    type: 'image',
    title: 'Beach Paradise',
    desc: 'Sunny tropical beach',
    url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    span: 'md:col-span-2 md:row-span-2 sm:col-span-1 sm:row-span-2',
  },
  {
    id: 7,
    type: 'video',
    title: 'Waterfall',
    desc: 'Cascading waterfall in the jungle',
    url: 'https://cdn.pixabay.com/video/2020/05/25/40130-424930032_large.mp4',
    span: 'md:col-span-1 md:row-span-3 sm:col-span-1 sm:row-span-2',
  },
];

export function BentoGridGalleryDemo() {
  return (
    <div className="min-h-screen overflow-y-auto">
      <InteractiveBentoGallery
        mediaItems={mediaItems}
        title="Gallery Shots Collection"
        description="Drag and explore our curated collection of shots"
      />
    </div>
  );
}
