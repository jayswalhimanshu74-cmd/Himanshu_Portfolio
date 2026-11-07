import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isOverInteractive, setIsOverInteractive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(() => 
    typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false
  );

  useEffect(() => {
    // Check prefers-reduced-motion
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)');

    const handleMqlChange = (e) => setReducedMotion(e.matches);
    mql.addEventListener('change', handleMqlChange);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });

      // Detect if cursor is over interactive elements or form controls
      const target = e.target;
      if (
        target &&
        (target.closest('input, textarea, select, button, a, [role="button"], label, .interactive') ||
          window.getComputedStyle(target).cursor === 'pointer' ||
          window.getComputedStyle(target).cursor === 'text')
      ) {
        setIsOverInteractive(true);
      } else {
        setIsOverInteractive(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      mql.removeEventListener('change', handleMqlChange);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Do not render custom cursor if user prefers reduced motion
  if (reducedMotion) {
    return null;
  }

  return (
    <>
      {/* Outer ambient follower ring - Hidden over interactive controls/text */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-primary-container pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          opacity: isOverInteractive ? 0 : 0.6,
          scale: isOverInteractive ? 0.4 : 1,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.3 }}
      />

      {/* Center pinpoint - Hidden over interactive controls/text */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-primary-container rounded-full pointer-events-none z-[9999] hidden md:block"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          opacity: isOverInteractive ? 0 : 1,
          scale: isOverInteractive ? 0 : 1,
        }}
        transition={{ type: 'spring', damping: 30, stiffness: 450, mass: 0.15 }}
      />
    </>
  );
};

export default CustomCursor;
