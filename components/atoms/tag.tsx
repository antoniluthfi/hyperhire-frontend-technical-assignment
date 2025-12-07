import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  size?: 'sm' | 'md';
  className?: string;
};

export default function Tag({ size = 'md', className, ...props }: TagProps) {
  const base =
    'inline-flex items-center whitespace-nowrap rounded-md border font-black border-slate-300 bg-white text-slate-700';
  const sizing = size === 'md' ? 'text-sm sm:text-base px-3 py-1' : 'text-xs sm:text-sm px-2 py-1';
  return <span {...props} className={cn(base, sizing, className)} />;
}
