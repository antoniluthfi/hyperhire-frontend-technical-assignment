import { HTMLAttributes } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type DividerProps = HTMLAttributes<HTMLDivElement> & {
  widthClass?: string;
  heightClass?: string;
  colorClass?: string;
  className?: string;
};

export default function Divider({
  widthClass = "w-[129px]",
  heightClass = "h-[1px]",
  colorClass = "bg-white",
  className,
  ...props
}: DividerProps) {
  return (
    <div
      {...props}
      className={cn(widthClass, heightClass, colorClass, className)}
    />
  );
}
