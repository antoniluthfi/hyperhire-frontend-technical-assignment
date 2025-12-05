import { Tag } from '@/components/atoms';

type CandidateTagListProps = {
  tags: string[];
  size?: 'sm' | 'md';
  className?: string;
};

export default function CandidateTagList({ tags, size = 'md', className = '' }: CandidateTagListProps) {
  return (
    <div className={`w-full flex flex-wrap justify-center gap-1 ${className}`}>
      {tags.map((t, i) => (
        <Tag key={i} size={size}>
          {t}
        </Tag>
      ))}
    </div>
  );
}
