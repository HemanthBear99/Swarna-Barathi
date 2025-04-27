import classroomImg1 from '@/assets/images/DSC01504.webp';
import classroomImg3 from '@/assets/images/DSC01508.webp';
import classroomImg4 from '@/assets/images/DSC01510.webp';
import labImg1 from '@/assets/images/DSC01533.webp';
import labImg2 from '@/assets/images/DSC01536.webp';
import labImg3 from '@/assets/images/DSC01537.webp';
import GalleryView from '@/components/GalleryView';

const laboratoryImages = [
  {
    id: 1,
    src: labImg1,
    title: 'Magic Science Lab',
    description: 'Where we mix colorful potions and watch amazing reactions!',
    category: 'Science Fun',
  },
  {
    id: 2,
    src: labImg2,
    title: 'Chemistry Wonderland',
    description:
      'Watch us create magical mixtures and discover new colors!',
    category: 'Science Fun',
  },
  {
    id: 3,
    src: labImg3,
    title: 'Nature Explorer Lab',
    description: 'We learn about plants, animals, and all living things!',
    category: 'Science Fun',
  },
  {
    id: 4,
    src: classroomImg3,
    title: 'Computer Magic Room',
    description:
      'Where we learn to make computers do amazing things!',
    category: 'Tech Fun',
  },
  {
    id: 5,
    src: classroomImg4,
    title: 'Discovery Station',
    description:
      'Our special place for finding out cool new things!',
    category: 'Science Fun',
  },
  {
    id: 6,
    src: classroomImg1,
    title: 'Learning Adventure Lab',
    description: 'Where we become little scientists and explore the world!',
    category: 'Science Fun',
  },
];

const LaboratoryGallery = () => {
  return (
    <div className="pt-20 md:pt-24">
      <GalleryView
        images={laboratoryImages}
        title="Science Magic Lab"
        description="Welcome to our magical science labs where we discover amazing things and have fun learning! 🔬✨"
      />
    </div>
  );
};

export default LaboratoryGallery;
