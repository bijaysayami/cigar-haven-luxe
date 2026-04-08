import SiteHeader from "@/components/home/SiteHeader";
import HeroSection from "@/components/home/HeroSection";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import TrustSection from "@/components/home/TrustSection";
import AboutSection from "@/components/home/AboutSection";
import Bestsellers from "@/components/home/Bestsellers";
import LifestyleSection from "@/components/home/LifestyleSection";
import Testimonials from "@/components/home/Testimonials";
import PromoBanner from "@/components/home/PromoBanner";
import Newsletter from "@/components/home/Newsletter";
import SiteFooter from "@/components/home/SiteFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <CategoryGrid />
        <FeaturedProducts />
        <TrustSection />
        <AboutSection />
        <Bestsellers />
        <LifestyleSection />
        <Testimonials />
        <PromoBanner />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
