import { HTMLAttributes } from "react";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function Heading({
  className,
  ...props
}: HTMLAttributes<HTMLHeadingElement>) {
  return <h1 {...props} className={cn("font-extrabold", className)} />;
}

export function Text({
  className,
  ...props
}: HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} className={cn("font-black", className)} />;
}
