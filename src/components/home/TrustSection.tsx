import { Shield, Award, DollarSign, Truck, CheckCircle } from "lucide-react";
import StaggerReveal from "@/components/home/StaggerReveal";

const reasons = [
  { icon: Shield, title: "Authentic Products", desc: "Every item is verified for authenticity and quality" },
  { icon: Award, title: "Years of Expertise", desc: "Decades of passion for premium cigars and luxury goods" },
  { icon: DollarSign, title: "Competitive Pricing", desc: "Premium quality at the best possible prices" },
  { icon: Truck, title: "Fast Shipping", desc: "Reliable Australia-wide delivery with tracking" },
  { icon: CheckCircle, title: "Curated Collection", desc: "Handpicked selection of the finest products" },
];

const TrustSection = () => {
  return (
    <section className="py-20 sm:py-28 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">The CCW Difference</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Why Choose Us
          </h2>
        </div>

        <StaggerReveal staggerDelay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {reasons.map(({ icon: Icon, title, desc }) => (
              <div key={title} data-stagger className="text-center group opacity-0">
                <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-sm font-serif font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-xs text-muted-foreground font-sans leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default TrustSection;
