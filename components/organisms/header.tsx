import { Logo, Button } from "@/components/atoms";
import { Dropdown } from "@/components/molecules";
import Link from "next/link";

export default function Header() {
  return (
    <header className="max-w-7xl mx-auto px-6 pt-6 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Logo variant="header" />
      </div>
      <nav className="hidden sm:flex items-center gap-8">
        <Dropdown
          label="채용"
          title="채용"
          items={[
            { label: "해외 개발자 원격 채용", href: "#services" },
            { label: "외국인 원격 채용 (비개발 직군)", href: "#services" },
            {
              label: "한국어 가능 외국인 채용",
              href: "#services",
              separator: true,
            },
          ]}
        />
        <Link
          className="opacity-90 hover:opacity-100 font-black"
          href="#services"
        >
          해외 개발자 채용 서비스
        </Link>
      </nav>
      <Button variant="white" className="hidden sm:block">
        문의하기
      </Button>
    </header>
  );
}
