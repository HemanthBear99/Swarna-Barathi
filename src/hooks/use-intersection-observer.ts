import { useEffect, useRef, useState } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

/**
 * Custom hook for efficiently detecting when an element enters the viewport
 * Optimizes animations by only triggering them when elements are visible
 */
export function useIntersectionObserver({
  threshold = 0.1,
  rootMargin = '0px',
  once = true,
}: UseIntersectionObserverProps = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLElement | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Skip if element ref is not set or if already intersected with once=true
    if (!ref.current || (once && isIntersecting)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);

        // If once is true and element has intersected, disconnect the observer
        if (once && entry.isIntersecting && observerRef.current) {
          observerRef.current.disconnect();
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(ref.current);
    observerRef.current = observer;

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, rootMargin, once, isIntersecting]);

  return { ref, isIntersecting };
}
