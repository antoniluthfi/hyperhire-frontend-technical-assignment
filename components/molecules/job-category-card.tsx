import { Icon, Text } from "@/components/atoms";

type JobCategoryCardProps = { title: string; image: string };

export default function JobCategoryCard({
  title,
  image,
}: JobCategoryCardProps) {
  return (
    <button className="flex items-center gap-6 rounded-xl bg-white/20 px-4 w-[332px] h-[88px] flex-shrink-0">
      <Icon src={image} alt={title} width={56} height={56} priority />
      <Text className="text-2xl">{title}</Text>
    </button>
  );
}
