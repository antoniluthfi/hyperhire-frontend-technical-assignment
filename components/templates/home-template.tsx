import {
  Header,
  Hero,
  CandidateCarousel,
  CategoriesMarquee,
  Footer,
} from "@/components/organisms";
import { MobileChecklist } from "@/components/molecules";
import type { Candidate } from "@/types/candidate";
import type { Category } from "@/types/category";
import type { ServiceCard } from "@/types/service";
import type { ContactItem } from "@/types/contact";

type HomeTemplateProps = {
  candidates: Candidate[];
  categories: Category[];
  services: ServiceCard[];
  contact: ContactItem[];
};

export default function HomeTemplate({
  candidates,
  categories,
  services,
  contact,
}: HomeTemplateProps) {
  return (
    <div className="min-h-screen w-full bg-[linear-gradient(135deg,rgba(34,193,195,0.85)_0%,rgba(26,170,212,0.85)_40%,rgba(24,119,242,0.9)_80%,rgba(10,61,98,0.95)_100%),url('/images/img_hero_bg.png')] bg-cover bg-center bg-no-repeat text-white">
      <Header />
      <main id="main-content">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 pb-8 sm:pb-16 pt-5 sm:pt-10 grid md:grid-cols-2 gap-20 items-start">
          <Hero />
          <CandidateCarousel candidates={candidates} />
        </div>
        <MobileChecklist className="max-w-7xl mx-auto px-6 pb-14 sm:hidden" />
        <CategoriesMarquee categories={categories} />
      </main>
      <Footer services={services} contact={contact} />
    </div>
  );
}
