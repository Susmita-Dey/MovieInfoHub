import HeroSection from '@/components/HeroSection';
import PopularSection from '@/components/PopularSection';
import TrendingSection from '@/components/TrendingSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center scroll-smooth">
      <HeroSection />
      <TrendingSection />
      <PopularSection />
    </main>
  )
}
