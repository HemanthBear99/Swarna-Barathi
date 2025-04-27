import communityImg from '@/assets/images/Community.webp';
import campusImg3 from '@/assets/images/DSC01496.webp';
import campusImg4 from '@/assets/images/DSC01499.webp';
import campusImg5 from '@/assets/images/DSC01502.webp';
import eventsImg3 from '@/assets/images/DSC01525.webp';
import eventsImg4 from '@/assets/images/DSC01528.webp';
import GalleryView from '@/components/GalleryView';

const sportsImages = [
  {
    id: 1,
    src: eventsImg3,
    title: 'Our Playground Paradise',
    description: 'A magical place where we run, jump, and play all day!',
    category: 'Outdoor Fun',
  },
  {
    id: 2,
    src: eventsImg4,
    title: 'Friendship Games',
    description: 'Playing fun games and making new friends every day!',
    category: 'Outdoor Fun',
  },
  {
    id: 3,
    src: campusImg4,
    title: 'Indoor Play Zone',
    description: 'Our special indoor space for fun activities and games!',
    category: 'Indoor Fun',
  },
  {
    id: 4,
    src: campusImg5,
    title: 'Running Adventure',
    description: 'Watch us zoom around like speedy superheroes!',
    category: 'Outdoor Fun',
  },
  {
    id: 5,
    src: communityImg,
    title: 'Team Spirit Corner',
    description: 'Working together and cheering for our friends!',
    category: 'Team Fun',
  },
  {
    id: 6,
    src: campusImg3,
    title: 'Playtime Paradise',
    description:
      'Our favorite place to play, laugh, and have amazing adventures!',
    category: 'Outdoor Fun',
  },
];

const SportsGallery = () => {
  return (
    <div className="pt-20 md:pt-24">
      <GalleryView
        images={sportsImages}
        title="Playtime Adventures"
        description="Come join us in our fun playgrounds where we play, laugh, and make wonderful memories! 🏃‍♂️⚽"
      />
    </div>
  );
};

export default SportsGallery;
