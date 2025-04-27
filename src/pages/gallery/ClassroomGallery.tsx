import classroomImg1 from '@/assets/images/DSC01504.webp';
import classroomImg2 from '@/assets/images/DSC01505.webp';
import classroomImg3 from '@/assets/images/DSC01508.webp';
import classroomImg4 from '@/assets/images/DSC01510.webp';
import labImg1 from '@/assets/images/DSC01533.webp';
import labImg2 from '@/assets/images/DSC01536.webp';
import GalleryView from '@/components/GalleryView';

const classroomImages = [
  {
    id: 1,
    src: classroomImg1,
    title: 'Our Happy Learning Room',
    description:
      'This is where we learn, play, and share amazing stories with friends!',
    category: 'Learning Fun',
  },
  {
    id: 2,
    src: classroomImg2,
    title: 'Friendship Corner',
    description:
      'A special place where we work together and help each other learn!',
    category: 'Learning Fun',
  },
  {
    id: 3,
    src: classroomImg3,
    title: 'Computer Magic Room',
    description: 'Where we discover the magic of computers and technology!',
    category: 'Tech Fun',
  },
  {
    id: 4,
    src: classroomImg4,
    title: 'Story Time Hall',
    description: 'Our big room where we gather for exciting stories and shows!',
    category: 'Learning Fun',
  },
  {
    id: 5,
    src: labImg1,
    title: 'Science Adventure Lab',
    description: 'Watch us explore the wonders of science with fun experiments!',
    category: 'Science Fun',
  },
  {
    id: 6,
    src: labImg2,
    title: 'Discovery Zone',
    description:
      'Where we become little scientists and discover amazing things!',
    category: 'Science Fun',
  },
];

const ClassroomGallery = () => {
  return (
    <div className="pt-20 md:pt-24">
      <GalleryView
        images={classroomImages}
        title="Our Learning Adventures"
        description="Step into our magical classrooms where learning is fun and every day brings new discoveries! 🎨✨"
      />
    </div>
  );
};

export default ClassroomGallery;
