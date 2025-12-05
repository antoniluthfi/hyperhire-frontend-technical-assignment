import Image from "next/image";

type LogoProps = {
  variant?: "header" | "footer";
};

export default function Logo({ variant = "header" }: LogoProps) {
  const isHeader = variant === "header";
  const src = isHeader
    ? "/images/hyperhire_logo_header.png"
    : "/images/hyperhire_logo_footer.png";
  const width = isHeader ? 114 : 187;
  const height = isHeader ? 21 : 34;
  return (
    <Image
      src={src}
      alt="hyperhire logo"
      width={width}
      height={height}
      priority
    />
  );
}
