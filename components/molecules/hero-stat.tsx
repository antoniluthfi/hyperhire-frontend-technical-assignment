import { Divider } from "@/components/atoms";

type HeroStatProps = { title: string; description: string };

export default function HeroStat({ title, description }: HeroStatProps) {
  return (
    <div>
      <Divider className="mb-2" />
      <div className="font-black text-lg">{title}</div>
      <div className="text-white/90 mt-1">{description}</div>
    </div>
  );
}
