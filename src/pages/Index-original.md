import CourseCard from '@/components/CourseCard';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';
import { motion } from 'framer-motion';
import {
ArrowRight,
BarChart3,
Book,
BookOpen,
Clock,
Code,
Globe,
Microscope,
Users,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
const features = [
{
icon: <Users size={32} />,
title: 'Expert Teachers',
description:
'Learn from passionate, experienced educators dedicated to your growth and success.',
},
{
icon: <BookOpen size={32} />,
title: 'Modern Curriculum',
description:
'Stay ahead with a curriculum that blends current standards with future-ready skills.',
},
{
icon: <Globe size={32} />,
title: 'Current Affairs',
description:
'Understand today’s world through relevant topics and real-world perspectives.',
},
{
icon: <Clock size={32} />,
title: 'Flexible Learning',
description:
'Adapt your studies to your lifestyle with our dynamic and student-friendly schedules.',
},
];

const courses = [
{
icon: <Book size={36} />,
title: 'Mathematics & Core Skills',
description:
'Sharpen your critical thinking and communication through a strong foundation in liberal arts.',
link: '/courses',
color: 'bg-blue-50',
},
{
icon: <BarChart3 size={36} />,
title: 'Business Case Studies',
description:
'Gain real-world insights and essential skills to thrive in today’s business landscape.',
link: '/courses',
color: 'bg-green-50',
},
{
icon: <Code size={36} />,
title: 'Computers and AI Introduction',
description:
'Dive into computing and AI with hands-on projects and problem-solving techniques.',
link: '/courses',
color: 'bg-purple-50',
},
{
icon: <Microscope size={36} />,
title: 'Lab Learning & Experiments',
description:
'Discover science in action through interactive labs and experimental learning.',
link: '/courses',
color: 'bg-amber-50',
},
];

return (
<>
<Navbar />
<main className="overflow-hidden">
<Hero />

        {/* About Section */}
        <motion.section
          className="py-20 bg-cover bg-center relative"
          style={{ backgroundImage: 'url(/path/to/your/background-image.jpg)' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <div className="container-custom relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.h2
                className="text-3xl md:text-4xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
              >
                Welcome to Swarna Bharathi Play & High School Play & High School
              </motion.h2>
              <motion.p
                className="text-gray-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
              >
                At Swarna Bharathi Play & High School Play & High School, we believe in providing
                an education that nurtures intellectual growth and personal
                development. Our mission is to inspire and empower students to
                achieve their full potential and become responsible global
                citizens.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.2 * index,
                    duration: 0.5,
                    ease: 'easeOut',
                  }}
                >
                  <div className="bg-school-50 rounded-full p-4 inline-block mb-4 text-school-600">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.6, ease: 'easeInOut' }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center bg-school-600 hover:bg-school-700 text-white py-3 px-6 rounded-md transition-colors duration-200 font-medium"
                >
                  Discover Our Story
                  <ArrowRight className="ml-2" size={16} />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Courses Section */}
        <motion.section
          className="py-20 bg-gray-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Academic Programs
              </h2>
              <p className="text-gray-600">
                Explore our diverse range of programs designed to challenge and
                inspire students while preparing them for future success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <CourseCard
                    title={course.title}
                    description={course.description}
                    icon={course.icon}
                    link={course.link}
                    color={course.color}
                  />
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/courses"
                className="inline-flex items-center bg-school-600 hover:bg-school-700 text-white py-3 px-6 rounded-md transition-colors duration-200 font-medium"
              >
                View All Programs
                <ArrowRight className="ml-2" size={16} />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 bg-school-700 text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Join Our Community?
                </h2>
                <p className="mb-6 text-school-100">
                  Take the first step toward an exceptional educational
                  experience. Our admissions team is ready to guide you through
                  the process.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/admission"
                    className="bg-white text-school-700 hover:bg-gray-100 py-3 px-6 rounded-md transition-colors duration-200 font-medium"
                  >
                    Apply Now
                  </Link>
                  <Link
                    to="/contact"
                    className="bg-transparent border border-white text-white hover:bg-white/10 py-3 px-6 rounded-md transition-colors duration-200 font-medium"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="absolute top-0 left-0 w-64 h-64 bg-school-800 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-school-600 rounded-full mix-blend-multiply filter blur-xl opacity-70"></div>
                <img
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                  alt="Students walking on campus"
                  className="rounded-lg relative z-10"
                />
              </div>
            </div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </>

);
};

export default Index;
