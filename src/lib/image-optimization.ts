/**
 * Utility functions for image optimization
 */

/**
 * Determines if an image should be lazy loaded based on its position
 * Critical above-the-fold images should not be lazy loaded
 */
export function shouldLazyLoad(priority: boolean = false): boolean {
  return !priority;
}

/**
 * Generates appropriate sizes attribute for responsive images
 */
export function getSizes(sizes?: string): string {
  return sizes || '(max-width: 640px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 80vw, (max-width: 1280px) 70vw, 60vw';
}

/**
 * Generates loading attribute for images
 */
export function getLoadingAttribute(
  priority: boolean = false
): 'eager' | 'lazy' {
  return priority ? 'eager' : 'lazy';
}

/**
 * Generates fetchPriority attribute for images
 */
export function getFetchPriority(priority: boolean = false): 'high' | 'auto' {
  return priority ? 'high' : 'auto';
}

/**
 * Converts image URL to WebP format if supported
 */
export function getWebPUrl(src: string): string {
  if (src.endsWith('.webp')) return src;
  return src.replace(/\.(jpg|jpeg|png)$/i, '.webp');
}

/**
 * Image props interface for optimized images
 */
export interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
  quality?: number;
  placeholder?: 'blur' | 'empty';
}

/**
 * Helper function to generate optimized image attributes
 */
export function getOptimizedImageProps({
  src,
  alt,
  width,
  height,
  className,
  priority = false,
  sizes,
  quality = 75,
  placeholder = 'empty',
}: OptimizedImageProps): React.ImgHTMLAttributes<HTMLImageElement> & {
  'data-src'?: string;
  'data-placeholder'?: string;
  'data-quality'?: string;
} {
  const loading = getLoadingAttribute(priority);
  const fetchPriority = getFetchPriority(priority);
  const webpSrc = getWebPUrl(src);
  
  return {
    src: webpSrc,
    alt,
    width,
    height,
    className,
    loading,
    fetchPriority,
    sizes: getSizes(sizes),
    decoding: priority ? 'sync' : 'async',
    'data-src': src, // Original source for fallback
    'data-placeholder': placeholder,
    'data-quality': quality.toString(),
  };
}
