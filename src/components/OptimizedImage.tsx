import {
    getOptimizedImageProps,
    OptimizedImageProps,
} from '@/lib/image-optimization';
import React, { memo, useEffect, useState } from 'react';

/**
 * OptimizedImage component that applies performance best practices
 * - Uses WebP format with fallback
 * - Implements blur placeholder
 * - Uses appropriate loading strategy
 * - Sets correct fetchPriority
 * - Provides proper size hints
 * - Applies decoding attribute
 */
const OptimizedImage: React.FC<OptimizedImageProps> = (props) => {
  const [isWebPSupported, setIsWebPSupported] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);
  const optimizedProps = getOptimizedImageProps(props);

  useEffect(() => {
    // Check WebP support
    const checkWebPSupport = async () => {
      const webP = new Image();
      webP.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
      webP.onload = () => setIsWebPSupported(true);
      webP.onerror = () => setIsWebPSupported(false);
    };
    checkWebPSupport();
  }, []);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const imageProps = {
    ...optimizedProps,
    src: isWebPSupported ? optimizedProps.src : props.src,
    onLoad: handleLoad,
    className: `${props.className || ''} ${!isLoaded ? 'blur-sm' : ''}`,
  };

  return <img {...imageProps} />;
};

OptimizedImage.displayName = 'OptimizedImage';

export default memo(OptimizedImage);
