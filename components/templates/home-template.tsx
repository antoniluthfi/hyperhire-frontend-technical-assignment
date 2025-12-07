import { Header, Hero, Footer } from '@/components/organisms';
import dynamic from 'next/dynamic';
import { MobileChecklist } from '@/components/molecules';
import type { Candidate } from '@/types/candidate';
import type { Category } from '@/types/category';
import type { ServiceCard } from '@/types/service';
import type { ContactItem } from '@/types/contact';

const CandidateCarousel = dynamic(() => import('@/components/organisms/candidate-carousel'), { ssr: false });
const CategoriesMarquee = dynamic(() => import('@/components/organisms/categories-marquee'), { ssr: false });

type HomeTemplateProps = {
  candidates: Candidate[];
  categories: Category[];
  services: ServiceCard[];
  contact: ContactItem[];
};

export default function HomeTemplate({ candidates, categories, services, contact }: HomeTemplateProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-hero-mobile bg-cover bg-center md:bg-hero-desktop text-white">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 pb-8 sm:pb-16 pt-5 sm:pt-10 grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
          <Hero />
          <CandidateCarousel candidates={candidates} />
        </div>
        <MobileChecklist />
        <CategoriesMarquee categories={categories} />
      </main>
      <Footer services={services} contact={contact} />
    </div>
  );
}
