import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  BarChart3,
  Book,
  BookOpen,
  Clock,
  Code,
  Cookie,
  Gamepad,
  Globe,
  Heart,
  IceCream,
  Microscope,
  Music,
  Palette,
  PartyPopper,
  Rainbow,
  Smile,
  Sparkles,
  Star,
  Users,
} from 'lucide-react';
import { lazy, memo, Suspense, useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

// Lazy-load heavy components
const Navbar = lazy(() => import('@/components/Navbar'));
const Hero = lazy(() => import('@/components/Hero'));
const Footer = lazy(() => import('@/components/Footer'));
const CourseCard = lazy(() => import('@/components/CourseCard'));

// Images
import Community from '@/assets/images/Community.webp';
import DSC01489 from '@/assets/images/DSC01489.webp';
import DSC01496 from '@/assets/images/DSC01496.webp';
import DSC01504 from '@/assets/images/DSC01504.webp';
import DSC01505 from '@/assets/images/DSC01505.webp';
import DSC01510 from '@/assets/images/DSC01510.webp';
import DSC01536 from '@/assets/images/DSC01536.webp';

// Carousel Images
const galleryImages = [DSC01496, DSC01504, DSC01510, DSC01505];
const mobileImages1 = [DSC01489, DSC01504, DSC01510];
const mobileImages2 = [DSC01536, DSC01505, DSC01496];

// Gallery Carousel Component
const GalleryCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      key={current}
      className="w-full h-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={galleryImages[current]}
        alt={`Gallery ${current}`}
        loading="lazy"
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

// Mini Mobile Carousel
const MobileImageCarousel = ({ images }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      key={current}
      className="rounded-lg shadow-md h-40 object-cover"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src={images[current]}
        alt={`Mobile ${current}`}
        loading="lazy"
        className="rounded-lg shadow-md h-40 object-cover w-full"
      />
    </motion.div>
  );
};

// Data
const features = [
  {
    icon: <Users size={32} className="text-blue-500" />,
    title: 'Expert Teachers! 👩‍🏫',
    description:
      'Learn from amazing teachers who make learning fun and exciting!',
  },
  {
    icon: <BookOpen size={32} className="text-blue-500" />,
    title: 'IIT Foundation Classes 📚',
    description:
      'Discover new things through activities, and exciting projects!',
  },
  {
    icon: <Globe size={32} className="text-blue-500" />,
    title: 'Navodaya and Sainik Coaching! 🌍',
    description: 'Comprehensive coaching for Navodaya and Sainik exams',
  },
  {
    icon: <Clock size={32} className="text-blue-500" />,
    title: 'Play & Learn! ⏰',
    description:
      'Have fun while learning with our special play-based activities!',
  },
];

const courses = [
  {
    icon: <Book size={36} className="text-blue-500" />,
    title: 'Math Magic! 🔢',
    description: 'Discover the magic of numbers through fun games and puzzles!',
    link: '/courses',
    color: 'bg-primary/10',
  },
  {
    icon: <BarChart3 size={36} className="text-blue-500" />,
    title: 'Creative Arts! 🎨',
    description: 'Express yourself through drawing, painting, and fun crafts!',
    link: '/courses',
    color: 'bg-secondary/10',
  },
  {
    icon: <Code size={36} className="text-blue-500" />,
    title: 'Computer Classes 💻',
    description: 'Explore the world of computers and robots in a fun way!',
    link: '/courses',
    color: 'bg-accent/10',
  },
  {
    icon: <Microscope size={36} className="text-blue-500" />,
    title: 'Lab Activities 🔬',
    description: 'Conducting exciting experiments in science and biology labs!',
    link: '/courses',
    color: 'bg-primary/10',
  },
];

// Add floating element animation
const FloatingElement = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-10, 10, -10] }}
    transition={{
      duration: 4,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
);

// Add floating elements
const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        initial={{ y: 1000, x: Math.random() * 100 - 50 }}
        animate={{ y: -100, x: Math.random() * 100 - 50 }}
        transition={{
          duration: 10 + Math.random() * 10,
          repeat: Infinity,
          delay: Math.random() * 5,
        }}
      >
        {i % 5 === 0 ? (
          <span className="text-2xl">🌟</span>
        ) : i % 5 === 1 ? (
          <span className="text-2xl">🎨</span>
        ) : i % 5 === 2 ? (
          <span className="text-2xl">📚</span>
        ) : i % 5 === 3 ? (
          <span className="text-2xl">🎮</span>
        ) : (
          <span className="text-2xl">🎵</span>
        )}
      </motion.div>
    ))}
  </div>
);

// Add confetti effect component
const Confetti = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(50)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 rounded-full"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          background: `hsl(${Math.random() * 360}, 100%, 50%)`,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 1000, opacity: [0, 1, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: Math.random() * 2,
        }}
      />
    ))}
  </div>
);

// Add hover card effect
const HoverCard = ({ children, className = '' }) => (
  <motion.div
    className={`relative group ${className}`}
    whileHover={{ scale: 1.02 }}
    transition={{ type: 'spring', stiffness: 300 }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-school-100 to-school-200 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      initial={{ scale: 0.8 }}
      whileHover={{ scale: 1 }}
    />
    <div className="relative z-10">{children}</div>
  </motion.div>
);

// Add bouncing animation for child-friendly elements
const BounceElement = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ y: 0 }}
    animate={{ y: [-5, 5, -5] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      delay,
      ease: 'easeInOut',
    }}
  >
    {children}
  </motion.div>
);

// Add rainbow text effect
const RainbowText = ({ children }) => (
  <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 via-yellow-500 to-blue-500 animate-gradient-x">
    {children}
  </span>
);

// Add fun cursor trail
const CursorTrail = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setTrail((prev) => [...prev, { x: e.clientX, y: e.clientY }].slice(-10));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {trail.map((pos, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"
          style={{ left: pos.x, top: pos.y }}
          initial={{ scale: 0 }}
          animate={{ scale: 1, opacity: 1 - i / 10 }}
          transition={{ duration: 0.2 }}
        />
      ))}
    </div>
  );
};

// Add a fun interactive button component
const FunButton = ({ children, onClick = () => {}, className = '' }) => (
  <motion.button
    onClick={onClick}
    className={`child-friendly-button ${className}`}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.button>
);

// Add a fun card component
const FunCard = ({ children, className = '' }) => (
  <motion.div
    className={`child-friendly-card p-6 ${className}`}
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.div>
);

const Index = memo(() => {
  const featuresData = useMemo(() => features, []);
  const coursesData = useMemo(() => courses, []);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    setShowConfetti(true);
    const timer = setTimeout(() => setShowConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>{showConfetti && <Confetti />}</AnimatePresence>

      <FloatingElements />

      <Suspense
        fallback={<div className="text-center p-10">Loading Navbar...</div>}
      >
        <Navbar />
      </Suspense>

      <main className="overflow-hidden">
        <Suspense
          fallback={<div className="text-center p-10">Loading Hero...</div>}
        >
          <Hero />
        </Suspense>

        {/* About Section */}
        <motion.section
          className="py-20 relative overflow-x-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="container-custom relative z-10 w-full">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <RainbowText>
                  Welcome to Swarna Bharathi Play & High School
                </RainbowText>
                <FloatingElement delay={0}>
                  <PartyPopper
                    className="absolute -top-6 -right-6 text-yellow-400"
                    size={24}
                  />
                </FloatingElement>
                <FloatingElement delay={0.2}>
                  <Smile
                    className="absolute -top-6 -left-6 text-blue-400"
                    size={24}
                  />
                </FloatingElement>
              </motion.h2>
              <p className="text-gray-600">
                At Swarna Bharathi Play & High School, we provide an education
                that nurtures intellectual growth and personal development.
              </p>
            </div>

            {/* Mobile Image Carousels */}
            <div className="grid grid-cols-2 gap-4 mb-8 md:hidden">
              <MobileImageCarousel images={mobileImages1} />
              <MobileImageCarousel images={mobileImages2} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuresData.map((feature, index) => (
                <FunCard key={index} className="text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mt-4 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </FunCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white py-3 px-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Discover Our Story <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Courses Section */}
        <motion.section
          className="py-20 bg-gradient-to-b from-gray-50 to-pink-50 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4 relative inline-block"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <RainbowText>Our Fun Learning Programs</RainbowText>
                <FloatingElement delay={0.5}>
                  <Rainbow
                    className="absolute -top-6 -right-6 text-purple-400"
                    size={24}
                  />
                </FloatingElement>
                <FloatingElement delay={0.7}>
                  <Music
                    className="absolute -top-6 -left-6 text-blue-400"
                    size={24}
                  />
                </FloatingElement>
              </motion.h2>
              <p className="text-gray-600">
                Explore our exciting range of programs designed to make learning
                fun and engaging!
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coursesData.map((course, index) => (
                <FunCard key={index} className={course.color}>
                  <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {course.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold mt-4 mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </FunCard>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/courses"
                  className="inline-flex items-center bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white py-3 px-6 rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Explore All Fun Programs{' '}
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Gallery Section */}
        <motion.section
          className="py-20 bg-gradient-to-br from-gray-50 to-gray-100"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-school-700 mb-4">
              Life at Swarna Bharathi Play & High School
            </h2>
            <p className="text-gray-600 max-w-xl mx-auto mb-12">
              Step into our campus and explore the vibrant life that empowers
              students to learn, grow, and shine.
            </p>

            <div className="relative mx-auto max-w-6xl rounded-xl shadow-lg overflow-hidden aspect-video">
              <GalleryCarousel />
              <div className="absolute inset-0 bg-white/20  rounded-xl pointer-events-none" />
            </div>

            <div className="mt-12">
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center bg-school-600 hover:bg-school-700 text-white py-3 px-6 rounded-full font-semibold shadow transition-all duration-300 hover:scale-105"
              >
                View Full Gallery <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* CTA */}
        <motion.section
          className="py-20 bg-school-700 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Join Our Community?
              </h2>
              <p className="mb-6 text-school-100">
                Begin your journey with Swarna Bharathi Play & High School. Our
                admissions team is ready to help.
              </p>
              <div className="flex gap-4 flex-wrap">
                <Link
                  to="/admission"
                  className="bg-white text-school-700 hover:bg-gray-100 py-3 px-6 rounded-md font-medium"
                >
                  Apply Now
                </Link>
                <Link
                  to="/contact"
                  className="bg-transparent border border-white text-white hover:bg-white/10 py-3 px-6 rounded-md font-medium"
                >
                  Contact Us
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute top-0 left-0 w-64 h-64 bg-school-800 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
              <div className="absolute bottom-0 right-0 w-64 h-64 bg-school-600 rounded-full mix-blend-multiply blur-3xl opacity-70"></div>
              <img
                src={Community}
                loading="lazy"
                alt="Students walking"
                className="rounded-lg relative z-10 w-full h-auto"
              />
            </div>
          </div>
        </motion.section>
      </main>

      <Suspense
        fallback={<div className="text-center p-10">Loading Footer...</div>}
      >
        <Footer />
      </Suspense>
    </>
  );
});

export default Index;
