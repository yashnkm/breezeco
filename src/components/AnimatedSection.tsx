import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';
}

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeUp' 
}: AnimatedSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    // Define animation configs
    const animations = {
      fadeUp: {
        from: { y: 100, opacity: 0 },
        to: { y: 0, opacity: 1 }
      },
      fadeLeft: {
        from: { x: -100, opacity: 0 },
        to: { x: 0, opacity: 1 }
      },
      fadeRight: {
        from: { x: 100, opacity: 0 },
        to: { x: 0, opacity: 1 }
      },
      scale: {
        from: { scale: 0.8, opacity: 0 },
        to: { scale: 1, opacity: 1 }
      }
    };

    const config = animations[animation];

    // Set initial state
    gsap.set(element, config.from);

    // Create scroll trigger animation
    gsap.to(element, {
      ...config.to,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [animation]);

  return (
    <div ref={sectionRef} className={className}>
      {children}
    </div>
  );
};

export default AnimatedSection;