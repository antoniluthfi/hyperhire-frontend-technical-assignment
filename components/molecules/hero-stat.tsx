import { Divider } from '@/components/atoms';

type HeroStatProps = { title: string; description: string };

export default function HeroStat({ title, description }: HeroStatProps) {
  return (
    <div>
      <Divider className="mb-2" />
      <h3 className="font-black text-lg">{title}</h3>
      <p className="text-white/90 mt-1">{description}</p>
    </div>
  );
}
