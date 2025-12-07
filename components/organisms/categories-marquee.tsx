'use client';

import type { Category } from '@/types/category';
import { motion } from 'framer-motion';
import { JobCategoryCard } from '@/components/molecules';
import { useInfiniteMarquee } from '@/hooks/use-infinite-marquee';

type Props = { categories: Category[] };

export default function CategoriesMarquee({ categories }: Props) {
  const { controls, trackRef, visible } = useInfiniteMarquee(categories);

  return (
    <motion.section
      className="hidden sm:block max-w-7xl mx-auto px-6 pb-14"
      aria-label="Job categories"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}>
      <div className="w-full overflow-hidden">
        <motion.div ref={trackRef} className="inline-flex gap-3 flex-nowrap mx-auto" animate={controls}>
          {visible.map(({ title, image }) => (
            <JobCategoryCard key={title} title={title} image={image} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
