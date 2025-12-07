import Image from 'next/image';
import headerLogo from '@/public/images/hyperhire_logo_header.png';
import footerLogo from '@/public/images/hyperhire_logo_footer.png';

type LogoProps = {
  variant?: 'header' | 'footer';
};

export default function Logo({ variant = 'header' }: LogoProps) {
  const isHeader = variant === 'header';
  const src = isHeader ? headerLogo : footerLogo;
  const width = isHeader ? 114 : 187;
  const height = isHeader ? 21 : 34;
  const sizes = isHeader ? '114px' : '187px';

  return (
    <Image
      src={src}
      alt="Hyperhire"
      width={width}
      height={height}
      priority={isHeader}
      placeholder="blur"
      sizes={sizes}
    />
  );
}
