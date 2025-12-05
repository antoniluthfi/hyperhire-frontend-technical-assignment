import Image from 'next/image';

type IconProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
};

export default function Icon({ src, alt, width, height, className, priority }: IconProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      aria-hidden={alt === '' ? true : undefined}
    />
  );
}
