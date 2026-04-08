import heroBg from "@/assets/hero-bg.jpg";
import { Shield, Star, Truck } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background */}
      <img
        src={heroBg}
        alt="Premium Cuban cigars with whiskey"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/30" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-4 py-1.5 mb-8">
            <Star className="w-3.5 h-3.5 text-primary fill-primary" />
            <span className="text-xs uppercase tracking-widest text-primary font-sans font-medium">
              Australia's Premier Cigar Destination
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold leading-[1.1] mb-6">
            <span className="text-foreground">Experience the</span>
            <br />
            <span className="text-gold-gradient">Art of Fine Living</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground font-sans leading-relaxed mb-10 max-w-lg">
            Curated premium cigars and luxury gifts for the discerning gentleman.
            Elevate every moment with our handpicked collection.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a
              href="#"
              className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/90 transition-all duration-300 rounded-sm"
            >
              Shop Cigars
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center border border-primary/50 text-primary px-8 py-4 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/10 transition-all duration-300 rounded-sm"
            >
              Explore Gifts
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {[
              { icon: Shield, text: "Authentic Products" },
              { icon: Star, text: "Curated Collection" },
              { icon: Truck, text: "Fast Shipping" },
            ].map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2.5">
                <Icon className="w-4 h-4 text-primary" />
                <span className="text-xs uppercase tracking-wider text-muted-foreground font-sans">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
