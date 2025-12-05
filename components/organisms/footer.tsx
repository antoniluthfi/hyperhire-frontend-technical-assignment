import Link from "next/link";
import { Logo, Icon } from "@/components/atoms";

export default function Footer() {
  const SERVICES = [
    {
      title: "해외 개발자 원격 채용",
      image: "/images/ic_code.png",
    },
    {
      title: "외국인 원격 채용 (비개발)",
      image: "/images/ic_user.png",
    },
    {
      title: "한국어 가능 외국인 채용",
      image: "/images/ic_kor.png",
    },
    {
      title: "해외 개발자 활용 서비스",
      image: "/images/ic_gear.png",
    },
  ];

  const CONTACT = [
    {
      title: "상호명",
      value: "하이퍼하이어",
      value2: "Hyperhire India Private Limited",
    },
    {
      title: "대표 CEO",
      value: "김주현",
      value2: "Juhyun Kim",
    },
    {
      title: "사업자등록번호 CIN",
      value: "427-86-01187",
      value2: "U74110DL2016PTC290812",
    },
    {
      title: "주소 ADDRESS",
      value: "서울특별시 강남대로 479, 지하 1층 238호",
      value2:
        "D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India",
    },
  ];

  return (
    <footer className="bg-[#FBFBFB] text-slate-900">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-4 mb-10">
          <div className="w-[274px]">
            <Logo variant="footer" />
            <p className="mt-4 font-black text-sm">
              우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
            </p>
            <div className="mt-4 space-y-2 text-[#5E626F] text-[13px]">
              <div className="font-black">010-0000-0000</div>
              <div className="font-black">aaaaaa@naver.com</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            {SERVICES.map(({ title, image }, i) => (
              <div
                key={i}
                className="w-[187px] h-[142px] rounded-2xl p-4 bg-white"
              >
                <div className="w-10 h-10 rounded-lg bg-slate-100 mb-3">
                  <Icon src={image} alt={title} width={40} height={40} />
                </div>
                <div className="font-black text-sm text-slate-800">{title}</div>
                <Link
                  href="#"
                  className="text-[#5E626F] text-sm font-black mt-2 inline-flex items-center gap-1"
                >
                  바로가기
                  <Icon
                    src="/images/ic_arrow_right_square.png"
                    alt="arrow"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-sm text-slate-600 mb-10">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            {CONTACT.map(({ title, value, value2 }, i) => (
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
