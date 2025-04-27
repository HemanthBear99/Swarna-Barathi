import ImageCarousel from '@/components/ui/image-carousel';
import { AnimatePresence, motion } from 'framer-motion';
import {
  Building2,
  CalendarDays,
  GraduationCap,
  Heart,
  Microscope,
  Sparkles,
  Star,
  Trophy,
} from 'lucide-react';
import { lazy, Suspense, useMemo } from 'react';
import { Link } from 'react-router-dom';

// Import images properly so Vite can process them
// Campus images
import campusImg1 from '@/assets/images/DSC01489.webp';
import campusImg2 from '@/assets/images/DSC01492.webp';
import campusImg3 from '@/assets/images/DSC01496.webp';
import campusImg4 from '@/assets/images/DSC01499.webp';
import campusImg5 from '@/assets/images/DSC01502.webp';

// Classroom images
import classroomImg1 from '@/assets/images/DSC01504.webp';
import classroomImg2 from '@/assets/images/DSC01505.webp';
import classroomImg3 from '@/assets/images/DSC01508.webp';
import classroomImg4 from '@/assets/images/DSC01510.webp';

// Events images
import communityImg from '@/assets/images/Community.webp';
import eventsImg1 from '@/assets/images/DSC01513.webp';
import eventsImg2 from '@/assets/images/DSC01514.webp';
import eventsImg3 from '@/assets/images/DSC01525.webp';
import eventsImg4 from '@/assets/images/DSC01528.webp';

// Laboratory images
import labImg1 from '@/assets/images/DSC01533.webp';
import labImg2 from '@/assets/images/DSC01536.webp';
import labImg3 from '@/assets/images/DSC01537.webp';

// Use imported images
const campusImages = [
  campusImg1,
  campusImg2,
  campusImg3,
  campusImg4,
  campusImg5,
];

const classroomImages = [
  classroomImg1,
  classroomImg2,
  classroomImg3,
  classroomImg4,
];

const eventsImages = [
  eventsImg1,
  eventsImg2,
  eventsImg3,
  eventsImg4,
  communityImg,
];

const laboratoryImages = [labImg1, labImg2, labImg3, classroomImg1];

// Memoize gallery sections to prevent unnecessary re-renders
const gallerySections = [
  {
    title: 'Play School',
    description: 'Come explore our magical world of learning and fun!',
    categories: [
      {
        id: 'campus',
        title: 'Our Magical Campus',
        description:
          'Take a peek at our wonderful school where learning meets adventure!',
        icon: <Building2 className="text-pink-500" size={24} />,
        path: '/gallery/campus',
        image: campusImg1,
        images: campusImages,
      },
      {
        id: 'classroom',
        title: 'Fun Learning Spaces',
        description: 'See where we play, learn, and make new friends!',
        icon: <GraduationCap className="text-yellow-500" size={24} />,
        path: '/gallery/classroom',
        image: classroomImg1,
        images: classroomImages,
      },
      {
        id: 'events',
        title: 'Special Celebrations',
        description: 'Look at all the fun we have during our special days!',
        icon: <CalendarDays className="text-purple-500" size={24} />,
        path: '/gallery/events',
        image: eventsImg1,
        images: eventsImages,
      },
    ],
  },
  {
    title: 'High School',
    description: 'Join us on an exciting journey of discovery and growth!',
    categories: [
      {
        id: 'campus',
        title: 'Our Amazing Campus',
        description: 'Explore our beautiful school where dreams come true!',
        icon: <Building2 className="text-blue-500" size={24} />,
        path: '/gallery/campus',
        image: campusImg3,
        images: campusImages.slice().reverse(),
      },
      {
        id: 'classroom',
        title: 'Learning Adventures',
        description: 'Discover where we learn cool new things every day!',
        icon: <GraduationCap className="text-green-500" size={24} />,
        path: '/gallery/classroom',
        image: classroomImg3,
        images: classroomImages.slice().reverse(),
      },
      {
        id: 'laboratory',
        title: 'Science Magic',
        description: 'Watch us explore the wonders of science!',
        icon: <Microscope className="text-indigo-500" size={24} />,
        path: '/gallery/laboratory',
        image: labImg1,
        images: laboratoryImages,
      },
      {
        id: 'sports',
        title: 'Sports Fun',
        description: 'See us play, run, and have a blast!',
        icon: <Trophy className="text-orange-500" size={24} />,
        path: '/gallery/sports',
        image: eventsImg4,
        images: [eventsImg4, eventsImg3, campusImg5, campusImg4, communityImg],
      },
      {
        id: 'events',
        title: 'Special Moments',
        description: 'Celebrate with us in our fun school events!',
        icon: <CalendarDays className="text-red-500" size={24} />,
        path: '/gallery/events',
        image: communityImg,
        images: eventsImages.slice().reverse(),
      },
    ],
  },
];

// Animation variants for better performance
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const Gallery = () => {
  return (
    <div className="min-h-screen pt-32 sm:pt-24 bg-gradient-to-b from-white via-pink-50 to-sky-50">
      <div className="container-custom py-16">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
          transition={{ duration: 0.6 }}
        >
          <motion.div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-yellow-500" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
              Our Fun Gallery
            </h1>
            <Star className="text-yellow-500" size={32} />
          </motion.div>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Come take a peek at all the fun things we do at our school!
            <motion.span
              className="inline-block ml-2"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
            >
              <Heart className="inline text-pink-500" size={20} />
            </motion.span>
          </p>
        </motion.div>

        {/* Gallery Sections */}
        {gallerySections.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            className="mb-20"
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: sectionIndex * 0.2 }}
          >
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-8 border-b border-school-100 pb-4">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
                  {section.title}
                </h2>
                <p className="text-slate-500 mt-1">{section.description}</p>
              </div>
              <Link
                to={section.categories[0].path}
                className="text-school-600 hover:text-school-700 font-medium mt-2 md:mt-0 flex items-center group"
              >
                Let's Explore!
                <motion.span
                  className="ml-1"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.categories.map((category, index) => (
                <motion.div
                  key={category.id}
                  variants={fadeInUp}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: sectionIndex * 0.1 + index * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.2 },
                  }}
                  className="group"
                >
                  <Link to={category.path} className="block h-full">
                    <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-[16/9]">
                        <ImageCarousel
                          images={category.images}
                          title={category.title}
                          description={category.description}
                          icon={category.icon}
                          path={category.path}
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-school-600 transition-colors">
                          {category.title}
                        </h3>
                        <p className="text-slate-600 text-sm mb-4 flex-grow">
                          {category.description}
                        </p>
                        <div className="mt-auto">
                          <span className="inline-flex items-center text-school-500 font-medium text-sm group-hover:text-school-600 transition-colors">
                            Take a Look!
                            <motion.svg
                              className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1, repeat: Infinity }}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                              />
                            </motion.svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
