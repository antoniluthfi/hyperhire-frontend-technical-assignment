'use client';

import type { Category } from '@/types/category';
import { motion } from 'framer-motion';
import { JobCategoryCard } from '@/components/molecules';
import { useInfiniteMarquee } from '@/hooks/use-infinite-marquee';

type Props = { categories: Category[] };

export default function CategoriesMarquee({ categories }: Props) {
  const { controls, trackRef, visible, fading } = useInfiniteMarquee(categories);

  return (
    <motion.section
      className="hidden sm:block max-w-screen-xl mx-auto px-6 pb-14"
      aria-label="Job categories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <motion.div ref={trackRef} className="w-full inline-flex gap-3 flex-nowrap mx-auto" animate={controls}>
        {visible.map(({ title, image }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 1 }}
            animate={{ opacity: fading && i === 0 ? 0 : 1 }}
            transition={{ duration: 0.2 }}>
            <JobCategoryCard title={title} image={image} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
