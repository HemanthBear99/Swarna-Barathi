import { motion } from 'framer-motion';
import { BookOpen, Clock, Globe, Users } from 'lucide-react';
import { ReactNode } from 'react';

interface Feature {
  title: string;
  icon: ReactNode;
}

interface Position {
  top: string;
  left: string;
}

const features: Feature[] = [
  { title: 'Expert Teachers', icon: <Users size={24} /> },
  { title: 'Modern Curriculum', icon: <BookOpen size={24} /> },
  { title: 'Current Affairs', icon: <Globe size={24} /> },
  { title: 'Flexible Learning', icon: <Clock size={24} /> },
];

const positions: Position[] = [
  { top: '20%', left: '30%' },
  { top: '35%', left: '65%' },
  { top: '55%', left: '40%' },
  { top: '75%', left: '60%' },
];

const CreeperFeatures = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="text-center max-w-3xl mx-auto mb-16 z-10 relative">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Makes Us Unique?
        </h2>
        <p className="text-gray-600">
          Our vision blossoms like nature — each value, a leaf nurtured by the
          vine of knowledge.
        </p>
      </div>

      {/* SVG Vine */}
      <svg
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-xl"
        viewBox="0 0 200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: '100%' }}
      >
        <path
          d="M100 0 C 120 200, 80 400, 100 600"
          stroke="#A3C9A8"
          strokeWidth="4"
          fill="none"
        />
      </svg>

      {/* Feature Leaves */}
      {features.map((feature, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: index * 0.3, duration: 0.6 }}
          viewport={{ once: true }}
          className="absolute"
          style={{
            top: positions[index].top,
            left: positions[index].left,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="bg-green-100 text-green-800 px-6 py-4 rounded-full shadow-md flex items-center gap-2 font-medium">
            {feature.icon}
            {feature.title}
          </div>
        </motion.div>
      ))}
    </section>
  );
};

export default CreeperFeatures;
