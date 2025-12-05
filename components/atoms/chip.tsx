import { Icon } from "@/components/atoms";

type ChipProps = {
  children: React.ReactNode;
  iconSrc?: string;
  iconAlt?: string;
  iconSize?: number;
};

export default function Chip({
  children,
  iconSrc,
  iconAlt = "",
  iconSize = 26,
}: ChipProps) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-[#E9F7EF] text-[#00C696] px-4 py-2 font-black text-lg relative after:content-[''] after:absolute after:left-[45%] after:-bottom-[8px] after:border-t-[10px] after:border-l-[8px] after:border-r-[8px] after:border-l-transparent after:border-r-transparent after:border-t-[#E9F7EF]">
      {iconSrc && (
        <Icon
          src={iconSrc}
          alt={iconAlt}
          width={iconSize}
          height={iconSize}
          priority
        />
      )}
      {children}
    </div>
  );
}
