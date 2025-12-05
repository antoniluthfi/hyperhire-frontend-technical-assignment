import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/cn';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'white' | 'ghost';
  className?: string;
};

export default function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  const base = 'font-black rounded-lg px-6 py-[6px] shadow-sm';
  const palette =
    variant === 'primary'
      ? 'bg-[#4A77FF] text-white'
      : variant === 'white'
        ? 'bg-white text-[#4A77FF]'
        : 'bg-transparent text-white';
  return <button {...props} className={cn(base, palette, className)} />;
}
