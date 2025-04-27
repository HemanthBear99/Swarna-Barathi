import communityImg from '@/assets/images/Community.webp';
import campusImg1 from '@/assets/images/DSC01489.webp';
import campusImg2 from '@/assets/images/DSC01492.webp';
import campusImg3 from '@/assets/images/DSC01496.webp';
import campusImg4 from '@/assets/images/DSC01499.webp';
import campusImg5 from '@/assets/images/DSC01502.webp';
import GalleryView from '@/components/GalleryView';

const campusImages = [
  {
    id: 1,
    src: campusImg1,
    title: 'Our Magical School Castle',
    description:
      'Welcome to our amazing school! This is where all the learning magic happens!',
    category: 'Fun Places',
  },
  {
    id: 2,
    src: campusImg2,
    title: 'The Grand Entrance',
    description: 'Step into our wonderful world of learning and fun!',
    category: 'Fun Places',
  },
  {
    id: 3,
    src: campusImg3,
    title: 'Our Playful Garden',
    description:
      'Look at our beautiful garden where we can play and explore nature!',
    category: 'Outdoor Fun',
  },
  {
    id: 4,
    src: campusImg4,
    title: 'Learning Adventure Zone',
    description:
      'This is where we discover new things and have amazing learning adventures!',
    category: 'Fun Places',
  },
  {
    id: 5,
    src: campusImg5,
    title: 'Friendship Path',
    description: 'Walk along our special path where we make new friends!',
    category: 'Outdoor Fun',
  },
  {
    id: 6,
    src: communityImg,
    title: 'Friendship Square',
    description:
      'Our special place where everyone gathers to play and share happy moments!',
    category: 'Fun Places',
  },
];

const CampusGallery = () => {
  return (
    <div className="pt-20 md:pt-24">
      <GalleryView
        images={campusImages}
        title="Our Magical School"
        description="Come explore our wonderful school where learning is fun and adventures await around every corner! 🌟"
      />
    </div>
  );
};

export default CampusGallery;
