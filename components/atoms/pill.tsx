import { HTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type PillProps = HTMLAttributes<HTMLSpanElement> & {
  children: React.ReactNode;
};

export default function Pill({ children, className, ...props }: PillProps) {
  return (
    <span
      {...props}
      className={cn(
        "relative inline-flex w-max items-center rounded-lg bg-[#8BC4FF] sm:bg-white px-3 py-[6px] text-lg font-black text-white sm:text-[#40E2E8] shadow-sm after:content-[''] after:absolute after:left-5 after:-bottom-[8px] after:border-t-[10px] after:border-l-[8px] after:border-r-[8px] after:border-l-transparent after:border-r-transparent after:border-t-[#8BC4FF] sm:after:border-t-white",
        className,
      )}
    >
      {children}
    </span>
  );
}
