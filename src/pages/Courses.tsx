import student from '@/assets/images/DSC01508.webp';
import {
  ChildBalloon,
  ChildBook,
  ChildCloud,
  ChildPencil,
  ChildRocket,
  ChildStar,
} from '@/assets/svg';
import ChildBanner from '@/components/ChildBanner';
import CourseCard from '@/components/CourseCard';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import {
  Beaker,
  Book,
  BookOpen,
  Calculator,
  Dumbbell,
  Globe,
  Microscope,
  Music,
  Palette,
} from 'lucide-react';

const programs = [
  {
    category: 'Pre-School (Nursery, LKG, UKG)',
    color: 'bg-pink-100',
    courses: [
      {
        icon: <Book size={36} />,
        title: 'Art & Craft',
        description: 'Encouraging creativity through hands-on activities...',
      },
      {
        icon: <Calculator size={36} />,
        title: 'Play-based Learning',
        description:
          'Play is the primary medium through which children explore...',
      },
      {
        icon: <Globe size={36} />,
        title: 'Writing & Reading',
        description:
          'Early literacy skills are developed through engaging activities...',
      },
    ],
  },
  {
    category: 'Middle School (1-5)',
    color: 'bg-yellow-100',
    courses: [
      {
        icon: <Globe size={36} />,
        title: 'Languages',
        description: 'Advanced Hindi, English, and Telugu studies...',
      },
      {
        icon: <Calculator size={36} />,
        title: 'Mathematics',
        description:
          'Developing algebraic thinking and problem-solving abilities...',
      },
      {
        icon: <Beaker size={36} />,
        title: 'Science',
        description: 'Intro to physics, chemistry, biology through labs...',
      },
      {
        icon: <Globe size={36} />,
        title: 'Social Studies',
        description: 'Exploration of Indian history, geography, civics...',
      },
      {
        icon: <Globe size={36} />,
        title: 'Navodaya and Sainik Coaching',
        description: 'Comprehensive coaching for Navodaya and Sainik exams...',
      },
    ],
  },
  {
    category: 'Secondary School (6-10)',
    color: 'bg-purple-100',
    courses: [
      {
        icon: <Globe size={36} />,
        title: 'Languages & Literature',
        description:
          'Hindi, English, and Telugu with emphasis on literary analysis...',
      },
      {
        icon: <Calculator size={36} />,
        title: 'Mathematics (IIT)',
        description: 'Advanced math for board and IIT-JEE prep...',
      },
      {
        icon: <Microscope size={36} />,
        title: 'Science (IIT)',
        description: 'Thorough grounding in physics, chemistry, and biology...',
      },
      {
        icon: <Globe size={36} />,
        title: 'Social Science',
        description: 'History, geography, political science, and economics...',
      },
      {
        icon: <Globe size={36} />,
        title: 'Navodaya and Sainik Coaching',
        description: 'Focused aptitude, reasoning and academics training...',
      },
    ],
  },
  {
    category: 'Co-Curricular Activities',
    color: 'bg-green-100',
    courses: [
      {
        icon: <Palette size={36} />,
        title: 'Art & Craft',
        description:
          'Developing creativity and traditional Indian art skills...',
      },
      {
        icon: <Music size={36} />,
        title: 'Music & Dance',
        description:
          'Training in classical and folk music, instruments, and dance...',
      },
      {
        icon: <Dumbbell size={36} />,
        title: 'Physical Education',
        description:
          'Sports, yoga, and fitness to promote health and teamwork...',
      },
      {
        icon: <BookOpen size={36} />,
        title: 'Value Education',
        description:
          'Character building through moral and cultural activities...',
      },
    ],
  },
];

const teachingApproach = [
  'Activity-based learning and practical applications',
  'Regular assessments and continuous evaluation',
  'Integration of traditional values with modern teaching methods',
  'Parent involvement through regular PTMs and open communication',
  'Special emphasis on language proficiency in Hindi, English and Telugu',
];

const Courses = () => (
  <>
    <Navbar />

    {/* Animated Colorful Background Bubbles */}
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-80 h-80 bg-pink-200 rounded-full top-10 left-5 blur-3xl opacity-40 animate-float-slow"></div>
      <div className="absolute w-96 h-96 bg-yellow-200 rounded-full bottom-10 right-5 blur-3xl opacity-40 animate-float-fast"></div>
      <div className="absolute w-72 h-72 bg-blue-200 rounded-full top-1/2 left-1/3 blur-3xl opacity-40 animate-float-medium"></div>

      {/* Child-friendly decorative elements */}
      <div className="absolute top-20 right-10 md:right-20 w-16 h-16 animate-bounce-slow">
        <ChildBalloon color="#FF6B6B" />
      </div>
      <div className="absolute bottom-20 left-10 md:left-20 w-16 h-16 animate-bounce-medium">
        <ChildBalloon color="#4CAF50" />
      </div>
      <div className="absolute top-1/3 left-5 md:left-10 w-12 h-12 animate-float-medium">
        <ChildStar />
      </div>
      <div className="absolute bottom-1/3 right-5 md:right-10 w-12 h-12 animate-float-slow">
        <ChildStar color="#FF9800" />
      </div>
    </div>

    <main className="pt-32 sm:pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-pink-100 to-sky-100 py-20 pt-32 text-center relative overflow-hidden">
        {/* Decorative elements for hero section */}
        <div className="absolute -left-6 top-1/4 md:top-1/3 w-24 h-24 opacity-80 z-0">
          <ChildBook
            color1="#4CAF50"
            color2="#8BC34A"
            className="animate-float-medium"
          />
        </div>
        <div className="absolute -right-6 top-1/4 md:top-1/3 w-24 h-24 opacity-80 z-0">
          <ChildPencil
            color1="#FFC107"
            color2="#FF5722"
            className="animate-float-slow"
          />
        </div>
        <div className="absolute left-1/4 -bottom-10 w-24 h-24 opacity-80 hidden md:block z-0">
          <ChildRocket
            color1="#9C27B0"
            color2="#E91E63"
            className="animate-bounce-slow"
          />
        </div>

        <div className="container-custom max-w-3xl mx-auto relative z-10">
          <ChildBanner
            title="Our Curriculum"
            color="bg-gradient-to-r from-yellow-100 to-pink-100"
            className="mb-6 shadow-lg"
          >
            <motion.h1
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold mb-4 text-school-900"
            >
              Our Curriculum
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-700"
            >
              Discover our comprehensive academic program designed to nurture
              well-rounded students with strong foundations in Indian education.
            </motion.p>
          </ChildBanner>
        </div>
      </section>

      {/* Program Sections */}
      {programs.map((program, idx) => (
        <section
          key={idx}
          className={`py-16 ${
            idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
          } relative overflow-hidden`}
        >
          {/* Section-specific decorative elements */}
          {idx === 0 && (
            <>
              <div className="absolute -left-6 bottom-10 w-20 h-20 opacity-70 hidden md:block">
                <ChildBalloon color="#FF6B6B" className="animate-bounce-slow" />
              </div>
              <div className="absolute right-10 top-10 w-16 h-16 opacity-70 hidden md:block">
                <ChildStar color="#FFD700" className="animate-float-medium" />
              </div>
            </>
          )}

          {idx === 1 && (
            <>
              <div className="absolute right-0 bottom-0 w-24 h-24 opacity-70 hidden md:block">
                <ChildBook
                  color1="#4CAF50"
                  color2="#8BC34A"
                  className="animate-float-slow"
                />
              </div>
              <div className="absolute left-10 top-10 w-16 h-16 opacity-70 hidden md:block">
                <ChildPencil
                  color1="#FFC107"
                  color2="#FF5722"
                  className="animate-float-medium"
                />
              </div>
            </>
          )}

          {idx === 2 && (
            <>
              <div className="absolute left-0 bottom-0 w-28 h-28 opacity-70 hidden md:block">
                <ChildRocket
                  color1="#9C27B0"
                  color2="#E91E63"
                  className="animate-bounce-slow"
                />
              </div>
              <div className="absolute right-10 top-10 w-16 h-16 opacity-70 hidden md:block">
                <ChildStar color="#FF9800" className="animate-float-medium" />
              </div>
            </>
          )}

          {idx === 3 && (
            <>
              <div className="absolute right-0 bottom-0 w-24 h-24 opacity-70 hidden md:block">
                <ChildBalloon
                  color="#4CAF50"
                  className="animate-bounce-medium"
                />
              </div>
              <div className="absolute left-10 top-10 w-20 h-20 opacity-70 hidden md:block">
                <ChildCloud className="animate-float-slow" />
              </div>
            </>
          )}

          <div className="container-custom relative z-10">
            <ChildBanner
              title={program.category}
              color={program.color}
              className="mb-10 mx-auto max-w-3xl shadow-md"
            >
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold text-center text-school-800"
              >
                {program.category}
              </motion.h2>
            </ChildBanner>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {program.courses.map((course, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    icon={course.icon}
                    color={program.color}
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Teaching Approach */}
      <section className="py-20 bg-school-700 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-pink-400 opacity-20 rounded-full blur-3xl animate-bounce-slow"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-400 opacity-20 rounded-full blur-3xl animate-bounce-medium"></div>

        {/* Child-friendly decorative elements */}
        <div className="absolute top-10 right-10 w-20 h-20 opacity-80 z-10 hidden md:block">
          <ChildStar color="#FFD700" className="animate-float-medium" />
        </div>
        <div className="absolute bottom-10 left-10 w-24 h-24 opacity-80 z-10 hidden md:block">
          <ChildBook
            color1="#FF9800"
            color2="#FFC107"
            className="animate-float-slow"
          />
        </div>

        <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
          <div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl mb-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 flex items-center">
                <span className="mr-3">
                  <ChildRocket
                    color1="#FF9800"
                    color2="#FFC107"
                    className="w-12 h-12"
                  />
                </span>
                Our Teaching Approach
              </h2>
              <p className="mb-4">
                At Swarna Bharathi Play & High School, we follow the state board
                curriculum with ICSE and IIT foundation to build a strong future
                for our students.
              </p>
            </div>

            <ul className="space-y-4">
              {teachingApproach.map((point, idx) => (
                <motion.li
                  key={idx}
                  className="flex items-start space-x-3 bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/20"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <span className="bg-white text-school-700 rounded-full p-1 mt-1 flex-shrink-0">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span>{point}</span>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="relative mt-8 lg:mt-0 px-4 md:px-8">
            <div className="absolute -top-6 -left-0 md:-left-6 w-full h-full bg-gradient-to-br from-pink-400 to-purple-400 rounded-3xl rotate-3 opacity-60"></div>
            <img
              src={student}
              alt="Classroom"
              className="rounded-3xl relative z-10 shadow-xl ring-4 ring-white/30 w-full max-w-md mx-auto"
            />
            <div className="absolute -bottom-4 right-0 md:-right-4 w-16 h-16 md:w-20 md:h-20">
              <ChildPencil
                color1="#FFC107"
                color2="#FF5722"
                className="animate-float-medium"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-tr from-yellow-100 to-pink-100 relative overflow-hidden">
        {/* Decorative elements */}
        <div
          className="absolute top-0 left-0 w-full h-20 bg-contain bg-repeat-x"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30H120V25C100 10 80 0 60 15C40 30 20 20 0 25V30Z' fill='%23FFFFFF' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          }}
        ></div>

        <div className="absolute -left-6 top-1/3 w-24 h-24 opacity-80">
          <ChildBalloon color="#FF6B6B" className="animate-bounce-slow" />
        </div>
        <div className="absolute -right-6 top-1/3 w-24 h-24 opacity-80">
          <ChildBalloon color="#4CAF50" className="animate-bounce-medium" />
        </div>
        <div className="absolute left-1/4 bottom-0 w-20 h-20 opacity-80 hidden md:block">
          <ChildStar color="#FFD700" className="animate-float-medium" />
        </div>
        <div className="absolute right-1/4 bottom-0 w-20 h-20 opacity-80 hidden md:block">
          <ChildStar color="#FF9800" className="animate-float-slow" />
        </div>

        <div className="container-custom text-center relative z-10">
          <div className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl shadow-xl max-w-2xl mx-auto border-2 border-dashed border-school-300">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-extrabold mb-4 text-school-800">
                Ready to Enroll?
              </h2>
              <div className="flex justify-center mb-6">
                <ChildRocket
                  color1="#9C27B0"
                  color2="#E91E63"
                  className="w-20 h-20"
                />
              </div>
              <p className="text-gray-700 mb-8">
                Take the first step toward providing your child with quality
                education.
              </p>
              <div className="flex flex-col md:flex-row justify-center gap-4">
                <a
                  href="/admission"
                  className="bg-school-600 hover:bg-school-700 text-white py-4 px-8 rounded-full transition-transform transform hover:scale-105 shadow-md text-lg font-bold"
                >
                  Apply Now
                </a>
                <a
                  href="/contact"
                  className="bg-white hover:bg-gray-100 text-school-700 py-4 px-8 rounded-full border border-gray-300 transition-transform transform hover:scale-105 shadow text-lg font-bold"
                >
                  Request Info
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        <div
          className="absolute bottom-0 left-0 w-full h-20 bg-contain bg-repeat-x transform rotate-180"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='30' viewBox='0 0 120 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 30H120V25C100 10 80 0 60 15C40 30 20 20 0 25V30Z' fill='%23FFFFFF' fill-opacity='0.3'/%3E%3C/svg%3E")`,
          }}
        ></div>
      </section>
    </main>

    <Footer />
  </>
);

export default Courses;
