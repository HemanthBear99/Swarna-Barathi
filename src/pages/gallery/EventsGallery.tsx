import communityImg from '@/assets/images/Community.webp';
import eventsImg1 from '@/assets/images/DSC01513.webp';
import eventsImg2 from '@/assets/images/DSC01514.webp';
import eventsImg3 from '@/assets/images/DSC01525.webp';
import eventsImg4 from '@/assets/images/DSC01528.webp';
import labImg3 from '@/assets/images/DSC01537.webp';
import GalleryView from '@/components/GalleryView';

const eventsImages = [
  {
    id: 1,
    src: eventsImg1,
    title: 'Happy Celebration Day',
    description:
      'Look at all our friends having fun at our special celebration!',
    category: 'Fun Days',
  },
  {
    id: 2,
    src: eventsImg2,
    title: 'Learning Together',
    description:
      'We love sharing our ideas and learning new things with friends!',
    category: 'Learning Fun',
  },
  {
    id: 3,
    src: eventsImg3,
    title: 'Sports Day Fun',
    description: 'Running, jumping, and playing games with our friends!',
    category: 'Play Time',
  },
  {
    id: 4,
    src: eventsImg4,
    title: 'Nature Adventures',
    description: 'Exploring the outdoors and discovering nature\'s wonders!',
    category: 'Play Time',
  },
  {
    id: 5,
    src: communityImg,
    title: 'Friendship Festival',
    description:
      'Our special day where we celebrate friendship and share happy moments!',
    category: 'Fun Days',
  },
  {
    id: 6,
    src: labImg3,
    title: 'Creative Workshop',
    description: 'Making amazing things and learning new skills together!',
    category: 'Learning Fun',
  },
];

const EventsGallery = () => {
  return (
    <div className="pt-20 md:pt-24">
      <GalleryView
        images={eventsImages}
        title="Our Special Days"
        description="Join us in celebrating all the fun and exciting moments we share at our school! 🎉🌟"
      />
    </div>
  );
};

export default EventsGallery;
