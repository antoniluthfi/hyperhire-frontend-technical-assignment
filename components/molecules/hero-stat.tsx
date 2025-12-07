import { Divider, Heading, Text } from '@/components/atoms';

type HeroStatProps = { title: string; description: string };

export default function HeroStat({ title, description }: HeroStatProps) {
  return (
    <div>
      <Divider className="mb-2" />
      <Heading as="h3" className="text-lg">
        {title}
      </Heading>
      <Text className="text-white/90 mt-1">{description}</Text>
    </div>
  );
}
