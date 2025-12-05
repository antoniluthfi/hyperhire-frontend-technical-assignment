/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { Icon, Text } from "@/components/atoms";
import type { Category } from "@/types/category";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type Props = { categories: Category[] };

export default function CategoriesMarquee({ categories }: Props) {
  const REPEATED = [...categories, ...categories, ...categories];

  const controls = useAnimation();
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(categories.length);
  const jumpingRef = useRef(false);

  const getStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const first = track.firstElementChild as HTMLElement | null;
    const style = getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap || "0");
    const w = first ? first.getBoundingClientRect().width : 0;
    return w + gap;
  };

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const step = getStep();
    if (!step) return;
    const x = -Math.round(index * step);
    if (jumpingRef.current) {
      controls.set({ x });
      jumpingRef.current = false;
      return;
    }
    controls
      .start({ x, transition: { duration: 0.7, ease: [0.4, 0.0, 0.2, 1] } })
      .then(() => {
        const group = categories.length;
        if (index >= group * 2) {
          jumpingRef.current = true;
          setIndex((prev) => prev - group);
        }
      });
  }, [index, controls]);

  return (
    <motion.section
      className="max-w-7xl mx-auto px-6 pb-14"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="w-full overflow-hidden">
        <motion.div
          ref={trackRef}
          className="inline-flex gap-3 flex-nowrap mx-auto"
          animate={controls}
        >
          {REPEATED.map(({ title, image }, i) => (
            <button
              key={i}
              className="flex items-center gap-6 rounded-xl bg-white/20 px-4 w-[332px] h-[88px] flex-shrink-0"
            >
              <Icon src={image} alt={title} width={56} height={56} priority />
              <Text className="text-2xl">{title}</Text>
            </button>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
