import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export const useSmoothScroll = () => {
  useEffect(() => {
    let lenis: Lenis | null = null;

    const initLenis = () => {
      lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    
        touchMultiplier: 2,
        infinite: false,
      });

      function raf(time: number) {
        lenis?.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    };

    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href) as HTMLElement;
        if (element && lenis) {
          lenis.scrollTo(element, {
            offset: -80, // Account for fixed header
            duration: 1.5,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
          });
        }
      }
    };

    // Initialize Lenis
    initLenis();

    // Add click listeners to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
      link.addEventListener('click', handleAnchorClick);
    });

    return () => {
      // Cleanup
      anchorLinks.forEach(link => {
        link.removeEventListener('click', handleAnchorClick);
      });
      lenis?.destroy();
    };
  }, []);

  return null;
};