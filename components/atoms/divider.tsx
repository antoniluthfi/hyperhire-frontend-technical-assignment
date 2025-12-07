import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type DividerProps = HTMLAttributes<HTMLDivElement> & {
  className?: string;
};

export default function Divider({ className, ...props }: DividerProps) {
  return <div {...props} className={cn('w-[129px] h-[1px] bg-white', className)} />;
}
