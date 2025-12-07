/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import type { Category } from '@/types/category';
import { motion, useAnimation, useReducedMotion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { JobCategoryCard } from '@/components/molecules';

type Props = { categories: Category[] };

export default function CategoriesMarquee({ categories }: Props) {
  const REPEATED = [...categories, ...categories, ...categories];

  const [index, setIndex] = useState(categories.length);

  const controls = useAnimation();
  const prefersReducedMotion = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const jumpingRef = useRef(false);

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
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  useEffect(() => {
    const step = getStep();
    if (!step) return;
    const x = -Math.round(index * step);
    if (jumpingRef.current) {
      controls.set({ x });
      jumpingRef.current = false;
      return;
    }
    if (prefersReducedMotion) {
      controls.set({ x });
      return;
    }
    controls.start({ x, transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] } }).then(() => {
      const group = categories.length;
      if (index >= group * 2) {
        jumpingRef.current = true;
        setIndex((prev) => prev - group);
      }
    });
  }, [index, controls, prefersReducedMotion]);

  useEffect(() => {
    const onResize = () => {
      const step = getStep();
      if (!step) return;
      const x = -Math.round(index * step);
      controls.set({ x });
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [index, controls]);

  return (
    <motion.section
      className="hidden sm:block max-w-7xl mx-auto px-6 pb-14"
      aria-label="Job categories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="w-full overflow-hidden">
        <motion.div ref={trackRef} className="inline-flex gap-3 flex-nowrap mx-auto" animate={controls}>
          {REPEATED.map(({ title, image }, i) => (
            <JobCategoryCard key={i} title={title} image={image} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
