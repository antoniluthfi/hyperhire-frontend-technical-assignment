import {
  Header,
  Hero,
  CandidateCarousel,
  CategoriesMarquee,
  Footer,
} from "@/components/organisms";

export default function HomeTemplate() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#22c1c3] via-[#1aaad4] to-[#1877f2] text-white">
      <Header />
      <main className="max-w-7xl mx-auto px-6 pb-16 pt-10 grid md:grid-cols-2 gap-20 items-start">
        <Hero />
        <CandidateCarousel />
      </main>
      <CategoriesMarquee />
      <Footer />
    </div>
  );
}
