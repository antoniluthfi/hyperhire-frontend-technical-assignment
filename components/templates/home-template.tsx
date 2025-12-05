import {
  Header,
  Hero,
  CandidateCarousel,
  CategoriesMarquee,
  Footer,
} from "@/components/organisms";
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
    <div className="min-h-screen w-full bg-gradient-to-br from-[#22c1c3] via-[#1aaad4] to-[#1877f2] text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 pb-16 pt-10 grid md:grid-cols-2 gap-20 items-start">
        <Hero />
        <CandidateCarousel candidates={candidates} />
      </main>
      <CategoriesMarquee categories={categories} />
      <Footer services={services} contact={contact} />
    </div>
  );
}
