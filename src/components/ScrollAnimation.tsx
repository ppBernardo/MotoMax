import { ReactNode, memo } from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn' | 'fadeIn';
  delay?: number;
  duration?: number;
  className?: string;
}

const ScrollAnimation = memo(({ 
  children, 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.3, // Reduced default duration
  className = ''
}: ScrollAnimationProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px', // Increased margin for better performance
    triggerOnce: true
  });

  const getAnimationClass = () => {
    if (!isIntersecting) return 'opacity-0';
    
    switch (animation) {
      case 'fadeInUp':
        return 'animate-fade-in-up';
      case 'fadeInLeft':
        return 'animate-fade-in-left';
      case 'fadeInRight':
        return 'animate-fade-in-right';
      case 'scaleIn':
        return 'animate-scale-in';
      case 'fadeIn':
        return 'animate-fade-in';
      default:
        return 'animate-fade-in-up';
    }
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        animationFillMode: 'forwards',
        // Optimize for performance
        transform: 'translateZ(0)',
        backfaceVisibility: 'hidden'
      }}
    >
      {children}
    </div>
  );
});

ScrollAnimation.displayName = 'ScrollAnimation';

export default ScrollAnimation;
