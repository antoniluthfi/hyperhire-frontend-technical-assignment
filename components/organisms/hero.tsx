import { Pill, Heading, Text, Divider } from "@/components/atoms";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <Pill>풀타임, 파트타임</Pill>
      <Heading className="text-5xl sm:text-5xl tracking-[-0.02em]">
        최고의 실력을 가진 외국인 인재를 찾고 계신가요?
      </Heading>
      <Text className="text-white/90 text-2xl">
        법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
      </Text>
      <a className="underline underline-offset-4 text-lg font-black" href="#">
        개발자가 필요하신가요?
      </a>
      <div className="mt-12 grid sm:grid-cols-3 gap-6">
        <div>
          <Divider className="mb-2" />
          <div className="font-black text-lg">평균 월 120만원</div>
          <div className="text-white/90 mt-1">
            임금을 해당 국가를 기준으로 책정합니다.
          </div>
        </div>
        <div>
          <Divider className="mb-2" />
          <div className="font-black text-lg">최대 3회 인터뷰</div>
          <div className="text-white/90 mt-1">
            마치 채용처럼 지원자를 인터뷰하세요. 마음에 들지 않으면 채용하지
            마세요.
          </div>
        </div>
        <div>
          <Divider className="mb-2" />
          <div className="font-black text-lg">평균 3일, 최대 10일</div>
          <div className="text-white/90 mt-1">
            업무에 맞는 인재를 평균 3일, 최대 10일 안에 채용이 가능합니다.
          </div>
        </div>
      </div>
    </section>
  );
}
