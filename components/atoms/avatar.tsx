import Image from "next/image";

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
  ring?: "light" | "white" | "none";
};

export default function Avatar({
  src,
  alt,
  size = 120,
  ring = "light",
}: AvatarProps) {
  const ringClass =
    ring === "light"
      ? "ring-8 ring-slate-100"
      : ring === "white"
        ? "ring-4 ring-white/50"
        : "";
  return (
    <div
      className={`${ringClass} rounded-full overflow-hidden`}
      style={{ width: size, height: size }}
    >
      <Image
        unoptimized
        className="h-full w-full object-cover"
        src={src}
        alt={alt}
        width={size}
        height={size}
      />
    </div>
  );
}
