"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Avatar, Chip, Icon, Text } from "@/components/atoms";
import { CandidateTagList } from "@/components/molecules";
import type { Candidate } from "@/types/candidate";

type Props = { candidates: Candidate[] };

export default function CandidateCarousel({ candidates }: Props) {
  const [index, setIndex] = useState(0);
  const prev = () =>
    setIndex((i) => (i - 1 + candidates.length) % candidates.length);
  const next = () => setIndex((i) => (i + 1) % candidates.length);

  return (
    <section className="relative">
      <motion.div
        className="absolute -top-6 left-1/2 -translate-x-1/2 will-change-opacity"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Chip iconSrc="/images/ic_dollar_circle.png" iconAlt="dollar">
          월 100만원
        </Chip>
      </motion.div>
      <div className="relative mt-12 h-[520px]">
        <motion.button
          onClick={prev}
          className="absolute -left-2 top-[40%] -translate-y-1/2"
          aria-label="prev"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon
            src="/images/ic_caret_left.png"
            alt="prev"
            width={28}
            height={28}
            priority
          />
        </motion.button>
        <motion.button
          onClick={next}
          className="absolute -right-2 top-[40%] -translate-y-1/2"
          aria-label="next"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon
            src="/images/ic_caret_right.png"
            alt="next"
            width={28}
            height={28}
            priority
          />
        </motion.button>
        <div className="relative pointer-events-none">
          {[-1, 0, 1].map((offset) => {
            const i = (index + offset + candidates.length) % candidates.length;
            const slide = candidates[i];
            const isCenter = offset === 0;
            const base = isCenter
              ? "w-[292px] h-[408px] bg-white text-[#24252F] shadow-2xl"
              : "w-[260px] h-[367px] bg-[#EDFCFF] backdrop-blur text-[#24252F]";
            const x = offset * 120;

            return (
              <div
                key={i}
                className={`absolute left-1/2 -translate-x-1/2 ${isCenter ? "z-20" : "z-10"}`}
              >
                <motion.div
                  className={`rounded-3xl will-change-transform ${base}`}
                  initial={{ opacity: 0 }}
                  animate={{
                    x,
                    y: isCenter ? 0 : 20.5,
                    scale: isCenter ? 1 : 0.97,
                    opacity: isCenter ? 1 : 0.95,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                    opacity: { duration: 0.5 },
                  }}
                  layout
                >
                  <div className="px-8 py-8 flex flex-col items-center">
                    <Avatar
                      src={slide.avatar}
                      alt="profile"
                      size={isCenter ? 120 : 108}
                      ring={isCenter ? "light" : "white"}
                    />
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Text
                        className={`mt-6 font-black ${isCenter ? "text-2xl" : "text-xl"}`}
                      >
                        {slide.name}
                      </Text>
                    </motion.div>
                    <Text
                      className={`mt-2 text-[#4A77FF] ${isCenter ? "font-black" : "text-sm"}`}
                    >
                      {slide.role} · {slide.exp}
                    </Text>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <CandidateTagList
                        tags={slide.tags}
                        size={isCenter ? "md" : "sm"}
                        className={`mt-6 ${isCenter ? "" : "opacity-90"}`}
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
