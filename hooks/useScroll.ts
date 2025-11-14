// Custom hook for scroll behavior
import { useState, useEffect } from 'react';

interface ScrollInfo {
  scrollY: number;
  scrollDirection: 'up' | 'down';
  isScrolled: boolean;
  scrollPercentage: number;
}

const useScroll = (): ScrollInfo => {
  const [scrollInfo, setScrollInfo] = useState<ScrollInfo>({
    scrollY: 0,
    scrollDirection: 'up',
    isScrolled: false,
    scrollPercentage: 0,
  });

  useEffect(() => {
    // Check if window is available (client-side only)
    if (typeof window === 'undefined') return;

    let lastScrollY = window.scrollY;

    const updateScrollInfo = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      const isScrolled = currentScrollY > 10; // Consider scrolled if > 10px
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = documentHeight > 0 ? (currentScrollY / documentHeight) * 100 : 0;

      setScrollInfo({
        scrollY: currentScrollY,
        scrollDirection,
        isScrolled,
        scrollPercentage: Math.min(scrollPercentage, 100), // Cap at 100%
      });

      lastScrollY = currentScrollY;
    };

    // Set initial scroll position
    updateScrollInfo();

    // Throttled scroll event listener
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScrollInfo();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollInfo;
};

export default useScroll;