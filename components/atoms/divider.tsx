import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type DividerProps = HTMLAttributes<HTMLDivElement> & {
  widthClass?: string;
  heightClass?: string;
  colorClass?: string;
  className?: string;
};

export default function Divider({
  widthClass = 'w-[129px]',
  heightClass = 'h-[1px]',
  colorClass = 'bg-white',
  className,
  ...props
}: DividerProps) {
  return <div {...props} className={cn(widthClass, heightClass, colorClass, className)} />;
}
