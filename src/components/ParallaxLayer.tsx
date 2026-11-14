import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'motion/react';

interface ParallaxLayerProps {
  children: ReactNode;
  offset?: number;
  className?: string;
}

/**
 * Scroll-linked inner parallax container.
 * Outer frame stays stationary in document flow so it never overlaps adjacent text or controls,
 * while the inner media glides smoothly inside its clipped bounds.
 */
export function ParallaxLayer({
  children,
  offset = 14,
  className = '',
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    shouldReduceMotion ? [0, 0] : [-offset, offset]
  );

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{ y, scale: shouldReduceMotion ? 1 : 1.07, willChange: 'transform' }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </div>
  );
}
