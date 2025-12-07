import { Logo, Icon, Heading, Text } from '@/components/atoms';
import type { ServiceCard } from '@/types/service';
import type { ContactItem } from '@/types/contact';

export default function Footer({ services, contact }: { services: ServiceCard[]; contact: ContactItem[] }) {
  return (
    <footer className="bg-[#FBFBFB] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-10">
          <div id="contact" className="w-[274px]">
            <Logo variant="footer" />
            <Text className="mt-4 text-sm">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</Text>
            <address className="mt-4 space-y-2 text-[#5E626F] text-[13px] not-italic">
              <Text className="font-black">
                <a href="tel:01000000000">010-0000-0000</a>
              </Text>
              <Text className="font-black">
                <a href="mailto:aaaaaa@naver.com">aaaaaa@naver.com</a>
              </Text>
            </address>
          </div>

          <div id="services" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
            {services.map(({ title, image }, i) => (
              <div
                key={i}
                className="w-full rounded-xl p-4 sm:p-5 md:p-6 bg-white flex flex-col items-start justify-between">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 mb-3">
                    <Icon src={image} alt={title} width={40} height={40} />
                  </div>
                  <Heading as="h3" className="text-sm text-slate-800">
                    {title}
                  </Heading>
                </div>
                <Text as="span" className="text-[#5E626F] text-sm mt-2 inline-flex items-center gap-1">
                  바로가기
                  <Icon src="/images/ic_arrow_right_square.png" alt="" width={20} height={20} />
                </Text>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-8 mb-10">
          {contact.map(({ title, value, value2 }, i) => (
            <div key={i}>
              <Heading as="h3" className="mt-3 text-xs">
                {title}
              </Heading>
              <Text className="mt-1 text-[#5E626F] text-[13px]">{value}</Text>
              <Text className="mt-1 text-[#5E626F] text-[13px]">{value2}</Text>
            </div>
          ))}
        </div>

        <Text className="mt-1 text-[#5E626F]">ⓒ 2023 Hyperhire</Text>
      </div>
    </footer>
  );
}
