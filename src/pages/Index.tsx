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
import ScrollReveal from "@/components/home/ScrollReveal";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroSection />
        <ScrollReveal>
          <CategoryGrid />
        </ScrollReveal>
        <ScrollReveal>
          <FeaturedProducts />
        </ScrollReveal>
        <ScrollReveal>
          <TrustSection />
        </ScrollReveal>
        <ScrollReveal animation="fade-in-left">
          <AboutSection />
        </ScrollReveal>
        <ScrollReveal>
          <Bestsellers />
        </ScrollReveal>
        <ScrollReveal>
          <LifestyleSection />
        </ScrollReveal>
        <ScrollReveal>
          <Testimonials />
        </ScrollReveal>
        <ScrollReveal animation="fade-in-up">
          <PromoBanner />
        </ScrollReveal>
        <ScrollReveal>
          <Newsletter />
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Index;
