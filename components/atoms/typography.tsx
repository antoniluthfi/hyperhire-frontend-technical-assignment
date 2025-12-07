import { HTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

export function Heading({ as = 'h1', className, ...props }: HeadingProps) {
  const Comp = as;
  return <Comp {...props} className={cn('font-extrabold', className)} />;
}

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: 'p' | 'span' | 'div';
};

export function Text({ as = 'p', className, ...props }: TextProps) {
  const Comp = as;
  return <Comp {...props} className={cn('font-black', className)} />;
}
