import { Text, Icon } from "@/components/atoms";
import Link from "next/link";

type Props = {
  items?: string[];
  linkLabel?: string;
  linkHref?: string;
  className?: string;
};

export default function MobileChecklist({
  items = ["한국어 능력", "업무 수행 능력", "검업 여부", "평판 조회"],
  linkLabel = "개발자가 필요하신가요?",
  linkHref = "#",
  className = "",
}: Props) {
  const list = items.slice(0, 4);

  return (
    <section className={`sm:hidden ${className}`}>
      <div className="grid grid-cols-[max-content_max-content] justify-items-start gap-x-3 gap-y-1">
        {list.map((label, i) => (
          <div key={i} className="inline-flex items-center gap-3 w-max">
            <Icon
              src="/images/ic_checkbox.png"
              alt="checkbox"
              width={20}
              height={20}
            />
            <Text className="text-white">{label}</Text>
          </div>
        ))}
      </div>
      <Link
        href={linkHref}
        className="mt-6 inline-block underline underline-offset-4 font-black text-[#FBFF23]"
      >
        {linkLabel}
      </Link>
    </section>
  );
}
