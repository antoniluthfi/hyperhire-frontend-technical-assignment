'use client';

import { useState } from 'react';
import { useWindowSize } from '@/hooks/use-window-size';
import { motion } from 'framer-motion';
import { Avatar, Chip, Icon, Text } from '@/components/atoms';
import { CandidateTagList } from '@/components/molecules';
import type { Candidate } from '@/types/candidate';

type Props = { candidates: Candidate[] };

export default function CandidateCarousel({ candidates }: Props) {
  const { isMobile, isTablet } = useWindowSize();

  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + candidates.length) % candidates.length);
  const next = () => setIndex((i) => (i + 1) % candidates.length);

  return (
    <section className="relative" aria-label="Candidates">
      <motion.div
        className="absolute -top-6 left-1/2 -translate-x-1/2 will-change-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}>
        <Chip iconSrc="/images/ic_dollar_circle.png" iconAlt="dollar">
          월 100만원
        </Chip>
      </motion.div>
      <div className="relative mt-12 h-[320px] sm:h-[520px]">
        <motion.button
          onClick={prev}
          className="absolute -left-2 top-1/2 sm:top-[40%] -translate-y-1/2"
          aria-label="prev"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Icon src="/images/ic_caret_left.png" alt="prev" width={28} height={28} priority />
        </motion.button>
        <motion.button
          onClick={next}
          className="absolute -right-2 top-1/2 sm:top-[40%] -translate-y-1/2"
          aria-label="next"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Icon src="/images/ic_caret_right.png" alt="next" width={28} height={28} priority />
        </motion.button>
        <div className="relative pointer-events-none" role="list">
          {[-1, 0, 1].map((offset) => {
            const i = (index + offset + candidates.length) % candidates.length;
            const slide = candidates[i];
            const isCenter = offset === 0;
            const base = isCenter
              ? 'w-[234px] min-h-[311px] sm:w-[292px] sm:min-h-[408px] bg-white text-[#24252F] shadow-2xl'
              : 'w-[210px] min-h-[287px] sm:w-[260px] sm:min-h-[367px] bg-[#EDFCFF] backdrop-blur text-[#24252F]';
            const sideGap = isMobile ? 50 : isTablet ? 80 : 100;
            const x = offset * sideGap;

            return (
              <div
                key={i}
                role="listitem"
                aria-hidden={!isCenter}
                className={`absolute left-1/2 -translate-x-1/2 ${isCenter ? 'z-20' : 'z-10'}`}>
                <motion.div
                  className={`rounded-xl will-change-transform ${base}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    x,
                    y: isCenter ? 0 : isMobile ? 10 : 16,
                    scale: isCenter ? 1 : 0.97,
                    opacity: isCenter ? 1 : 0.95,
                  }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.5 },
                  }}
                  layout>
                  <div className="px-4 sm:px-8 py-8 flex flex-col items-center">
                    <Avatar src={slide.avatar} alt={slide.name} size={isMobile ? 64 : isCenter ? 120 : 108} />
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <Text
                        className={`mt-3 sm:mt-6 font-black ${isCenter ? 'text-lg sm:text-2xl' : 'text-sm sm:text-xl'}`}>
                        {slide.name}
                      </Text>
                    </motion.div>
                    <Text
                      className={`mt-1 sm:mt-2 text-[#4A77FF] ${isCenter ? 'text-sm sm:text-base font-black' : 'text-xs sm:text-sm'}`}>
                      {slide.role} · {slide.exp}
                    </Text>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
                      <CandidateTagList
                        tags={slide.tags}
                        size={isCenter ? 'md' : 'sm'}
                        className={`mt-3 sm:mt-6 ${isCenter ? '' : 'opacity-90'}`}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
