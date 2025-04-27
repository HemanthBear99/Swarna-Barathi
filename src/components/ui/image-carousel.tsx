import { memo, useCallback, useEffect, useRef, useState } from 'react';
import OptimizedImage from '../OptimizedImage';

interface ImageCarouselProps {
  images: string[];
  title: string;
  description?: string;
  icon?: React.ReactNode;
  path?: string;
}

const ImageCarousel = memo(({
  images,
  title,
  description,
  icon,
  path,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState<boolean[]>(
    Array(images.length).fill(false)
  );
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Preload the first image
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const newLoaded = [...isLoaded];
      newLoaded[0] = true;
      setIsLoaded(newLoaded);
    };
    img.src = images[0];

    return () => {
      img.onload = null;
    };
  }, []);

  // Setup autoplay with progressive loading
  useEffect(() => {
    // Start the timer for automatic sliding
    timerRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;

      // Preload the next image if it hasn't been loaded yet
      if (!isLoaded[nextIndex]) {
        const img = new Image();
        img.onload = () => {
          const newLoaded = [...isLoaded];
          newLoaded[nextIndex] = true;
          setIsLoaded(newLoaded);
        };
        img.src = images[nextIndex];
      }

      setCurrentIndex(nextIndex);
    }, 4000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [currentIndex, images.length, isLoaded]);

  // Pause autoplay when hovering
  const handleMouseEnter = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  }, []);

  const handleMouseLeave = useCallback(() => {
    timerRef.current = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      setCurrentIndex(nextIndex);
    }, 4000);
  }, [currentIndex, images.length]);

  return (
    <div 
      className="relative overflow-hidden rounded-t-xl h-full"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative h-full">
        {/* Images - Using simple fade transition for better performance */}
        <div className="relative h-full overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className="absolute inset-0 w-full h-full transition-opacity duration-1000"
              style={{
                opacity: index === currentIndex ? 1 : 0,
                zIndex: index === currentIndex ? 1 : 0,
              }}
            >
              <OptimizedImage
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />

        {/* Icon */}
        {icon && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full p-2 shadow-lg z-10">
            {icon}
          </div>
        )}

        {/* Simple dots indicator - minimal for better performance */}
        <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full ${
                index === currentIndex ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
});

ImageCarousel.displayName = 'ImageCarousel';

export default ImageCarousel;
