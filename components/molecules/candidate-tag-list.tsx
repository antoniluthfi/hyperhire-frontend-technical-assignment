import { Tag } from '@/components/atoms';

type CandidateTagListProps = {
  tags: string[];
  size?: 'sm' | 'md';
  className?: string;
};

export default function CandidateTagList({ tags, size = 'md', className = '' }: CandidateTagListProps) {
  return (
    <ul className={`w-full flex flex-wrap justify-center gap-x-1 gap-y-3 ${className}`}>
      {tags.map((t, i) => (
        <li key={i}>
          <Tag size={size}>{t}</Tag>
        </li>
      ))}
    </ul>
  );
}
