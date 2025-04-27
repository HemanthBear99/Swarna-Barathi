import founder from '@/assets/images/sri-kotha-rangaiah-garu.jpg';
// import principal from '@/assets/images/principal.webp';
// import principal from '@/assets/images/principal.webp';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import {
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  GraduationCap,
  Heart,
  Smile,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
} from 'lucide-react';
import { useEffect, useState } from 'react';

const About = () => {
  const [counters, setCounters] = useState({
    years: 0,
    students: 0,
    educators: 0,
    graduation: 0,
  });

  useEffect(() => {
    const targetValues = {
      years: 28,
      students: 1000,
      educators: 30,
      graduation: 100,
    };

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const animateCounters = () => {
      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        setCounters({
          years: Math.min(
            Math.floor((targetValues.years * currentStep) / steps),
            targetValues.years
          ),
          students: Math.min(
            Math.floor((targetValues.students * currentStep) / steps),
            targetValues.students
          ),
          educators: Math.min(
            Math.floor((targetValues.educators * currentStep) / steps),
            targetValues.educators
          ),
          graduation: Math.min(
            Math.floor((targetValues.graduation * currentStep) / steps),
            targetValues.graduation
          ),
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, interval);
    };

    animateCounters();
  }, []);

  const stats = [
    {
      number: `${counters.years}+`,
      label: 'Years of Excellence',
      icon: <Calendar className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'bg-yellow-400',
    },
    {
      number: `${counters.students}+`,
      label: 'Students Enrolled',
      icon: <GraduationCap className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'bg-blue-400',
    },
    {
      number: `${counters.educators}+`,
      label: 'Dedicated Educators',
      icon: <BookOpen className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'bg-green-400',
    },
    {
      number: `${counters.graduation}%`,
      label: 'Graduation Rate',
      icon: <Heart className="w-6 h-6 sm:w-8 sm:h-8" />,
      color: 'bg-red-400',
    },
  ];

  const values = [
    {
      icon: <Star size={24} className="text-yellow-500 sm:w-8 sm:h-8" />,
      title: 'Excellence',
      description:
        'We are committed to maintaining the highest standards of academic excellence and personal development.',
    },
    {
      icon: <Smile size={24} className="text-blue-500 sm:w-8 sm:h-8" />,
      title: 'Community',
      description:
        'We foster a supportive and inclusive environment where students, teachers, and parents work together.',
    },
    {
      icon: <Trophy size={24} className="text-purple-500 sm:w-8 sm:h-8" />,
      title: 'Integrity',
      description:
        'We uphold the highest ethical standards and promote honesty, respect, and responsibility.',
    },
    {
      icon: <Sparkles size={24} className="text-red-500 sm:w-8 sm:h-8" />,
      title: 'Innovation',
      description:
        'We embrace modern teaching methodologies and encourage creative thinking and problem-solving.',
    },
  ];

  const timeline = [
    {
      year: '1998',
      event: 'Swarna Bharathi Play & High School Established',
      description:
        'Founded with a vision to provide quality education to the community',
      icon: '🎓',
    },
    {
      year: '2005',
      event: 'Infrastructure Development',
      description:
        'Expanded facilities with modern playground and sports amenities',
      icon: '🎮',
    },
    {
      year: '2010',
      event: 'Digital Learning Initiative',
      description: 'Implemented computer labs and digital learning resources',
      icon: '💻',
    },
    {
      year: '2020',
      event: 'Science Education Enhancement',
      description: 'Established state-of-the-art science laboratories',
      icon: '🔬',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50 to-pink-50 overflow-x-hidden">
      <Navbar />
      <div className="pt-32 sm:pt-24 pb-8 sm:pb-12">
        <div className="container-custom px-3 sm:px-4 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-8 sm:mb-12"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 rainbow-text sparkle">
              Welcome to Swarna Bharathi Play & High School
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
              A premier educational institution dedicated to nurturing young
              minds through quality education and holistic development.
            </p>
          </motion.div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="child-friendly-card p-4 sm:p-6 text-center"
              >
                <div
                  className={`${stat.color} rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center wiggle-animation`}
                >
                  {stat.icon}
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">
                  {stat.number}
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Founder Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center mb-10 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="child-friendly-card p-4 sm:p-6 fun-border"
            >
              <img
                src={founder}
                alt="Founder"
                className="rounded-lg shadow-xl w-full h-auto mb-4 sm:mb-6 transform hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">
                Founder
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                Late Sri Kotha Rangaiah established Swarna Bharathi Play & High
                School with a vision to provide quality education and create a
                nurturing environment for young minds.
              </p>
              <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                <span>Established in 1998</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4 sm:space-y-6"
            >
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-3 sm:mb-4">
                Our Mission
              </h2>
              <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                At Swarna Bharathi Play & High School, we are committed to
                providing a comprehensive education that fosters academic
                excellence, character development, and prepares students for
                future success.
              </p>

              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="bg-purple-100 rounded-full p-1.5 sm:p-2 mt-1 wiggle-animation flex-shrink-0">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-purple-600">
                      Academic Excellence
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      We maintain high academic standards through innovative
                      teaching methods and comprehensive curriculum.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="bg-pink-100 rounded-full p-1.5 sm:p-2 mt-1 wiggle-animation flex-shrink-0">
                    <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-purple-600">
                      Holistic Development
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      We focus on the overall development of students through
                      various extracurricular activities and programs.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-2 sm:space-x-3">
                  <div className="bg-yellow-100 rounded-full p-1.5 sm:p-2 mt-1 wiggle-animation flex-shrink-0">
                    <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-base sm:text-lg text-purple-600">
                      Future Readiness
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-700">
                      We prepare students for future challenges through skill
                      development and career guidance.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Principal Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-purple-600 mb-6 sm:mb-8 rainbow-text">
              Principal
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="child-friendly-card p-4 sm:p-6 fun-border"
              >
                <div className="bg-purple-100 rounded-lg shadow-xl w-full h-48 sm:h-64 mb-4 sm:mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-2">👩‍🏫</div>
                    <p className="text-sm sm:text-base text-purple-600 font-medium">
                      Principal Photo
                    </p>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">
                  Kotha Sailaja
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Our principal leads the institution with dedication and
                  vision, ensuring the highest standards of education and
                  student development.
                </p>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                  <span>Principal since 2002 </span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-3 sm:mb-4">
                  Principal's Message
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  "Welcome to Swarna Bharathi Play & High School. As the
                  principal, I am committed to providing a nurturing environment
                  where students can achieve their full potential. Our dedicated
                  faculty and comprehensive programs ensure that every student
                  receives the support and guidance they need to succeed."
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-purple-100 rounded-full p-1.5 sm:p-2 mt-1 wiggle-animation flex-shrink-0">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-purple-600">
                        Our Vision
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">
                        To be a leading educational institution that shapes
                        future leaders through excellence in education.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-pink-100 rounded-full p-1.5 sm:p-2 mt-1 wiggle-animation flex-shrink-0">
                      <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-purple-600">
                        Our Commitment
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">
                        We are dedicated to providing quality education and
                        creating opportunities for every student to excel.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Correspondent Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-purple-600 mb-6 sm:mb-8 rainbow-text">
              Correspondent
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="child-friendly-card p-4 sm:p-6 fun-border"
              >
                <div className="bg-purple-100 rounded-lg shadow-xl w-full h-48 sm:h-64 mb-4 sm:mb-6 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl mb-2">👨‍💼</div>
                    <p className="text-sm sm:text-base text-purple-600 font-medium">
                      Correspondent Photo
                    </p>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl font-bold text-purple-600 mb-2">
                  Pokuri Rahul
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                  Our correspondent plays a vital role in managing the
                  institution's affairs and ensuring its continuous growth and
                  development.
                </p>
                <div className="flex items-center space-x-2 text-xs sm:text-sm text-gray-600">
                  <Star className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-500" />
                  <span>Serving since 2025</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-4 sm:space-y-6"
              >
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600 mb-3 sm:mb-4">
                  Correspondent's Message
                </h2>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6">
                  "As the correspondent of Swarna Bharathi Play & High School, I
                  am proud to be part of an institution that has been shaping
                  young minds for over two decades. Our commitment to excellence
                  in education and holistic development remains unwavering as we
                  continue to build upon the strong foundation laid by our
                  founder."
                </p>

                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-purple-100 rounded-full p-1.5 sm:p-2 mt-1 wiggle-animation flex-shrink-0">
                      <Award className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-purple-600">
                        Our Legacy
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Building upon our rich heritage while embracing modern
                        educational practices.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2 sm:space-x-3">
                    <div className="bg-pink-100 rounded-full p-1.5 sm:p-2 mt-1 wiggle-animation flex-shrink-0">
                      <Target className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-base sm:text-lg text-purple-600">
                        Future Goals
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-700">
                        Continuously improving our facilities and programs to
                        meet the evolving needs of education.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-purple-600 mb-6 sm:mb-8 rainbow-text">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="child-friendly-card p-4 sm:p-6 fun-border"
                >
                  <div className="bg-purple-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 flex items-center justify-center wiggle-animation">
                    {value.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-1 sm:mb-2">
                    {value.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-700">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Team Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-10 sm:mb-16"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-purple-600 mb-4 sm:mb-6 md:mb-8 rainbow-text">
              Our Faculty
            </h2>
            <p className="text-center text-xs sm:text-sm md:text-base text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 px-2 sm:px-0">
              Our team of experienced educators is dedicated to providing
              quality education and guidance to our students.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <div className="child-friendly-card p-4 sm:p-6 text-center fun-border">
                <div className="bg-purple-100 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center wiggle-animation">
                  <Users className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-1 sm:mb-2">
                  Qualified Faculty
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Our teachers are highly qualified and experienced in their
                  respective fields.
                </p>
              </div>

              <div className="child-friendly-card p-4 sm:p-6 text-center fun-border">
                <div className="bg-pink-100 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center wiggle-animation">
                  <CheckCircle2 className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-1 sm:mb-2">
                  Support Staff
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Our dedicated support staff ensures smooth operations and
                  student welfare.
                </p>
              </div>

              <div className="child-friendly-card p-4 sm:p-6 text-center fun-border">
                <div className="bg-yellow-100 rounded-full p-3 sm:p-4 w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4 flex items-center justify-center wiggle-animation">
                  <Star className="w-8 h-8 sm:w-10 sm:h-10 text-purple-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-purple-600 mb-1 sm:mb-2">
                  Student Body
                </h3>
                <p className="text-xs sm:text-sm text-gray-700">
                  Our diverse student community represents the future leaders of
                  tomorrow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
