import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ChevronLeft,
  ChevronRight,
  Download,
  Heart,
  Info,
  Share2,
  Sparkles,
  Star,
  X,
  ZoomIn,
} from 'lucide-react';
import { useCallback, useEffect, useMemo, useState } from 'react';
import OptimizedImage from './OptimizedImage';

interface GalleryImage {
  id: number;
  src: string;
  title: string;
  description?: string;
  category?: string;
}

interface GalleryViewProps {
  title: string;
  description?: string;
  images: GalleryImage[];
}

// Animation variants for better performance
const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const scaleIn = {
  initial: { scale: 0.9, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  exit: { scale: 0.9, opacity: 0 },
};

const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
};

const GalleryView = ({ title, description, images }: GalleryViewProps) => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isInfoVisible, setIsInfoVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Memoize filtered images
  const filteredImages = useMemo(() => {
    return images.filter((image) => {
      const matchesSearch =
        image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (image.description?.toLowerCase().includes(searchTerm.toLowerCase()) ??
          false);
      const matchesCategory =
        !selectedCategory || image.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [images, searchTerm, selectedCategory]);

  // Memoize current image
  const currentImage = useMemo(() => {
    return selectedImage !== null
      ? images.find((img) => img.id === selectedImage)
      : null;
  }, [images, selectedImage]);

  // Memoize categories
  const categories = useMemo(() => {
    const uniqueCategories = new Set(
      images.map((img) => img.category).filter(Boolean)
    );
    return Array.from(uniqueCategories);
  }, [images]);

  const handlePrevious = useCallback(() => {
    if (selectedImage === null) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage);
    const previousIndex = (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[previousIndex].id);
  }, [images, selectedImage]);

  const handleNext = useCallback(() => {
    if (selectedImage === null) return;
    const currentIndex = images.findIndex((img) => img.id === selectedImage);
    const nextIndex = (currentIndex + 1) % images.length;
    setSelectedImage(images[nextIndex].id);
  }, [images, selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage, handlePrevious, handleNext]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <motion.div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="text-yellow-500" size={24} />
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600">
            {title}
          </h1>
          <Star className="text-yellow-500" size={24} />
        </motion.div>
        {description && (
          <p className="text-gray-600 text-center max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Search and Filter */}
      <div className="mb-6 flex flex-wrap gap-4 justify-center">
        <motion.div whileHover={{ scale: 1.05 }} className="relative">
          <input
            type="text"
            placeholder="Find something fun..."
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 bg-white/80 backdrop-blur-sm"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Sparkles className="text-yellow-500" size={16} />
          </motion.div>
        </motion.div>
        {categories.length > 0 && (
          <motion.div whileHover={{ scale: 1.05 }} className="relative">
            <select
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 bg-white/80 backdrop-blur-sm"
              value={selectedCategory || ''}
              onChange={(e) => setSelectedCategory(e.target.value || null)}
            >
              <option value="">All Fun Places</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <motion.div
              className="absolute -top-1 -right-1"
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
            >
              <Star className="text-yellow-500" size={16} />
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <motion.div
            key={image.id}
            className={cn(
              'relative group cursor-pointer overflow-hidden rounded-xl shadow-md',
              index % 5 === 0 || index % 5 === 3 ? 'row-span-2' : ''
            )}
            variants={fadeIn}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.3, delay: index * 0.05 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
            onClick={() => setSelectedImage(image.id)}
          >
            <div className="relative overflow-hidden h-full">
              <OptimizedImage
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end">
                <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold">{image.title}</h3>
                  {image.description && (
                    <p className="text-sm mt-1 text-gray-200 line-clamp-2">
                      {image.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedImage !== null && currentImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            variants={fadeIn}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="max-w-5xl w-full px-16 relative"
              variants={scaleIn}
              transition={{ duration: 0.3 }}
            >
              <OptimizedImage
                src={currentImage.src}
                alt={currentImage.title}
                className="max-h-[85vh] max-w-full w-auto mx-auto rounded-lg shadow-2xl object-contain"
                priority
              />

              {/* Image controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <ZoomIn size={20} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    'p-2 rounded-full transition-colors',
                    isLiked ? 'text-red-500' : 'text-white hover:bg-white/20'
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                  }}
                >
                  <Heart size={20} fill={isLiked ? 'currentColor' : 'none'} />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={cn(
                    'p-2 rounded-full transition-colors',
                    isInfoVisible
                      ? 'text-blue-400'
                      : 'text-white hover:bg-white/20'
                  )}
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsInfoVisible(!isInfoVisible);
                  }}
                >
                  <Info size={20} />
                </motion.button>
              </div>

              {/* Navigation arrows */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handlePrevious();
                }}
              >
                <ChevronLeft size={24} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  handleNext();
                }}
              >
                <ChevronRight size={24} />
              </motion.button>

              {/* Image info panel */}
              <AnimatePresence>
                {isInfoVisible && (
                  <motion.div
                    className="absolute bottom-16 left-1/2 -translate-x-1/2 w-full max-w-2xl bg-black/70 backdrop-blur-md rounded-lg p-4 text-white"
                    variants={slideUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3 className="text-xl font-bold mb-2">
                      {currentImage.title}
                    </h3>
                    {currentImage.description && (
                      <p className="text-gray-200 mb-2">
                        {currentImage.description}
                      </p>
                    )}
                    {currentImage.category && (
                      <div className="flex items-center gap-2 mt-2">
                        <span className="text-sm bg-purple-600/70 px-2 py-1 rounded-full">
                          {currentImage.category}
                        </span>
                      </div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default GalleryView;
