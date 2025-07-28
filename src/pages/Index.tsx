import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PromoBanner from '@/components/PromoBanner';
import FeaturedCourses from '@/components/FeaturedCourses';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PromoBanner />
      <FeaturedCourses />
    </div>
  );
};

export default Index;
