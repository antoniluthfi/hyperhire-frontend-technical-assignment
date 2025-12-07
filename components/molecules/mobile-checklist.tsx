import { Text, Icon } from '@/components/atoms';
import Link from 'next/link';

type Props = {
  className?: string;
};

export default function MobileChecklist({ className = '' }: Props) {
  const items = ['한국어 능력', '업무 수행 능력', '검업 여부', '평판 조회'];
  const list = items.slice(0, 4);

  return (
    <section className={`sm:hidden max-w-7xl mx-auto px-6 pb-14 ${className}`} aria-label="Checklist">
      <ul className="grid grid-cols-2 justify-items-start gap-x-3 gap-y-1">
        {list.map((label, i) => (
          <li key={i} className="flex items-start gap-3 w-full min-w-0">
            <Icon src="/images/ic_checkbox.png" alt="" width={20} height={20} />
            <Text className="text-white flex-1 min-w-0 break-words">{label}</Text>
          </li>
        ))}
      </ul>
      <Link href="#contact" className="mt-6 inline-block underline underline-offset-4 font-black text-[#FBFF23]">
        개발자가 필요하신가요?
      </Link>
    </section>
  );
}
