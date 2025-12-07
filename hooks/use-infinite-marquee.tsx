import type { Category } from '@/types/category';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useAnimation, useReducedMotion } from 'framer-motion';

export function useInfiniteMarquee(categories: Category[]) {
  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild as HTMLElement | null;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || '0');
    const w = first ? first.getBoundingClientRect().width : 0;
    return w + gap;
  };

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => {
      const step = getStep();
      if (!step) return;
      setFading(true);
      setTimeout(() => {
        controls.set({ x: Math.round(step) });
        setIndex((prev) => (prev + 1) % categories.length);
        controls.start({
          x: 0,
          transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] },
        });
        setFading(false);
      }, 200);
    }, 5000);
    return () => clearInterval(id);
  }, [prefersReducedMotion, controls, categories.length]);

  useEffect(() => {
    const onResize = () => {
      const step = getStep();
      if (!step) return;
      controls.set({ x: 0 });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [controls]);

  const visible = useMemo(() => {
    const g = categories.length;
    return categories.map((_, i) => categories[(i + (index % g)) % g]);
  }, [categories, index]);

  return { controls, trackRef, visible, fading };
}
