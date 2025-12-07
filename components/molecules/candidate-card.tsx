import { motion } from 'framer-motion';
import { Avatar, Chip, Text } from '@/components/atoms';
import CandidateTagList from './candidate-tag-list';
import type { Candidate } from '@/types/candidate';

type Props = {
  candidate: Candidate;
  isCenter: boolean;
  isMobile: boolean;
};

export default function CandidateCard({ candidate, isCenter, isMobile }: Props) {
  return (
    <>
      {isCenter && (
        <motion.div
          className="absolute -top-16 left-1/2 -translate-x-1/2 will-change-opacity"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}>
          <Chip iconSrc="/images/ic_dollar_circle.png" iconAlt="dollar">
            월 100만원
          </Chip>
        </motion.div>
      )}
      <div className="px-4 sm:px-8 py-8 flex flex-col items-center">
        <Avatar src={candidate.avatar} alt={candidate.name} size={isMobile ? 64 : isCenter ? 120 : 108} />
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Text className={`mt-3 sm:mt-6 font-black ${isCenter ? 'text-lg sm:text-2xl' : 'text-sm sm:text-xl'}`}>
            {candidate.name}
          </Text>
        </motion.div>
        <Text
          className={`mt-1 sm:mt-2 text-[#4A77FF] ${isCenter ? 'text-sm sm:text-base font-black' : 'text-xs sm:text-sm'}`}>
          {candidate.role} · {candidate.exp}
        </Text>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <CandidateTagList
            tags={candidate.tags}
            size={isCenter ? 'md' : 'sm'}
            className={`mt-3 sm:mt-6 ${isCenter ? '' : 'opacity-90'}`}
          />
        </motion.div>
      </div>
    </>
  );
}
