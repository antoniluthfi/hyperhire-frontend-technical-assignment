import Image from 'next/image';

type AvatarProps = {
  src: string;
  alt: string;
  size?: number;
};

export default function Avatar({ src, alt, size = 120 }: AvatarProps) {
  return (
    <div className="rounded-full" style={{ width: size, height: size }}>
      <Image
        className="h-full w-full object-cover"
        src={src}
        alt={alt}
        width={size}
        height={size}
        sizes={`${size}px`}
      />
    </div>
  );
}
