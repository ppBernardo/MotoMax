import { useEffect, useRef, useState, useCallback } from 'react';

interface UseIntersectionObserverProps {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = ({
  threshold = 0.1,
  rootMargin = '0px 0px -100px 0px', // Increased margin for better performance
  triggerOnce = true
}: UseIntersectionObserverProps = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const handleIntersection = useCallback(([entry]: IntersectionObserverEntry[]) => {
    // Use requestAnimationFrame to throttle updates
    requestAnimationFrame(() => {
      const isElementIntersecting = entry.isIntersecting;
      setIsIntersecting(isElementIntersecting);
      
      if (isElementIntersecting && !hasIntersected) {
        setHasIntersected(true);
        // Disconnect observer immediately after first intersection for better performance
        if (triggerOnce && observerRef.current) {
          observerRef.current.disconnect();
        }
      }
    });
  }, [hasIntersected, triggerOnce]);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Create observer with optimized options
    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
        observerRef.current = null;
      }
    };
  }, [threshold, rootMargin, handleIntersection]);

  return {
    ref,
    isIntersecting: triggerOnce ? hasIntersected : isIntersecting,
  };
};
