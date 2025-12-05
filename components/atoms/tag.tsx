import { HTMLAttributes } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type TagProps = HTMLAttributes<HTMLSpanElement> & {
  size?: "sm" | "md";
  className?: string;
};

export default function Tag({ size = "md", className, ...props }: TagProps) {
  const base =
    "rounded-md border font-black border-slate-300 bg-white text-slate-700";
  const sizing = size === "md" ? "px-3 py-1" : "text-sm px-2 py-1";
  return <span {...props} className={cn(base, sizing, className)} />;
}
