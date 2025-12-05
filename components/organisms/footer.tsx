import { Logo, Icon } from "@/components/atoms";
import type { ServiceCard } from "@/types/service";
import type { ContactItem } from "@/types/contact";

export default function Footer({
  services,
  contact,
}: {
  services: ServiceCard[];
  contact: ContactItem[];
}) {
  return (
    <footer className="bg-[#FBFBFB] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-10">
          <div id="contact" className="w-[274px]">
            <Logo variant="footer" />
            <p className="mt-4 font-black text-sm">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <address className="mt-4 space-y-2 text-[#5E626F] text-[13px] not-italic">
              <div className="font-black">
                <a href="tel:01000000000">010-0000-0000</a>
              </div>
              <div className="font-black">
                <a href="mailto:aaaaaa@naver.com">aaaaaa@naver.com</a>
              </div>
            </address>
          </div>

          <div
            id="services"
            className="grid grid-cols-2 gap-2 sm:gap-4 md:flex md:flex-row"
          >
            {services.map(({ title, image }, i) => (
              <div
                key={i}
                className="w-full md:w-max rounded-xl p-4 bg-white flex flex-col items-start justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 mb-3">
                    <Icon src={image} alt={title} width={40} height={40} />
                  </div>
                  <div className="font-black text-sm text-slate-800">
                    {title}
                  </div>
                </div>
                <button
                  type="button"
                  className="text-[#5E626F] text-sm font-black mt-2 inline-flex items-center gap-1"
                >
                  바로가기
                  <Icon
                    src="/images/ic_arrow_right_square.png"
                    alt=""
                    width={20}
                    height={20}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm text-slate-600 mb-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-4 sm:gap-8">
            {contact.map(({ title, value, value2 }, i) => (
              <div key={i}>
                <div className="mt-3 font-black text-xs">{title}</div>
                <div className="mt-1 font-black text-[#5E626F] text-[13px]">
                  {value}
                </div>
                <div className="mt-1 font-black text-[#5E626F] text-[13px]">
                  {value2}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-1 font-black text-[#5E626F]">ⓒ 2023 Hyperhire</div>
      </div>
    </footer>
  );
}
