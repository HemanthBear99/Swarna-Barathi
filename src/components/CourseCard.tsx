import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface CourseCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link?: string;
  color: string;
}

const CourseCard = ({
  title,
  description,
  icon,
  link,
  color = 'bg-school-50',
}: CourseCardProps) => {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group border-2 border-gray-100 hover:border-gray-200 hover:-translate-y-1 h-full">
      <div
        className={`${color} p-4 sm:p-5 md:p-6 flex items-center justify-center relative overflow-hidden`}
      >
        {/* Decorative circles in the background */}
        <div className="absolute top-2 left-2 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 rounded-full bg-white/20"></div>
        <div className="absolute bottom-2 right-2 w-6 sm:w-8 h-6 sm:h-8 rounded-full bg-white/20"></div>

        <div className="text-school-700 transform transition-transform group-hover:scale-110 relative z-10">
          {icon}
        </div>
      </div>
      <div className="p-4 sm:p-5 md:p-6 relative flex flex-col h-full">
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-8 sm:w-10 md:w-12 h-8 sm:h-10 md:h-12 overflow-hidden">
          <div className="absolute top-0 right-0 w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-yellow-100 rotate-45 transform origin-top-right"></div>
        </div>

        <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 text-school-800">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600 mb-4 flex-grow">{description}</p>
        {link && (
          <Link
            to={link}
            className="inline-flex items-center text-school-600 font-medium group-hover:text-school-700 transition-colors text-sm sm:text-base mt-auto"
          >
            Learn More
            <ArrowRight size={14} className="ml-1 group-hover:ml-2 transition-all" />
          </Link>
        )}
      </div>
    </div>
  );
};

export default CourseCard;
