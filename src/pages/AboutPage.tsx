import SiteHeader from "@/components/home/SiteHeader";
import SiteFooter from "@/components/home/SiteFooter";
import ScrollReveal from "@/components/home/ScrollReveal";
import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import { Shield, Award, Heart, Globe, Users, Star } from "lucide-react";

const values = [
  { icon: Shield, title: "Authenticity", desc: "Every product is verified and sourced from trusted suppliers worldwide." },
  { icon: Award, title: "Quality", desc: "We accept nothing less than the finest — in products and service." },
  { icon: Heart, title: "Passion", desc: "Born from a genuine love for premium cigars and the finer things in life." },
  { icon: Globe, title: "Global Reach", desc: "Sourcing the world's best cigars and luxury goods for Australian enthusiasts." },
  { icon: Users, title: "Community", desc: "Building a community of like-minded aficionados who share our passion." },
  { icon: Star, title: "Excellence", desc: "Striving for excellence in every interaction, every order, every day." },
];

const milestones = [
  { year: "2014", event: "Cuban Cigar World founded in Melbourne" },
  { year: "2016", event: "Expanded to include luxury gifts and accessories" },
  { year: "2018", event: "Launched Australia-wide express shipping" },
  { year: "2020", event: "Introduced collectibles and vintage items" },
  { year: "2022", event: "Reached 5,000+ happy customers milestone" },
  { year: "2024", event: "Partnered with premium global cigar brands" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="relative py-32 sm:py-40 overflow-hidden">
          <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Our Story</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
              A Passion for the <span className="text-gold-gradient">Finer Things</span>
            </h1>
            <p className="text-lg text-muted-foreground font-sans leading-relaxed max-w-2xl mx-auto">
              Cuban Cigar World is Australia's premier destination for cigar enthusiasts and lovers of luxury. 
              We've built our reputation on an unwavering commitment to quality, authenticity, and the art of fine living.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <ScrollReveal>
          <section className="py-20 sm:py-28">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img src={lifestyle1} alt="Premium cigar experience" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-sm hidden lg:block" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">How It Started</p>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                    From Humble Beginnings
                  </h2>
                  <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
                    <p>
                      What began as a personal passion for fine Cuban cigars quickly grew into something much bigger. 
                      In 2014, we set out to bring the world's finest cigars and luxury goods to Australian shores — 
                      with a focus on authenticity, quality, and an unmatched customer experience.
                    </p>
                    <p>
                      Today, Cuban Cigar World offers a carefully curated collection of premium cigars from Cuba, 
                      the Dominican Republic, and Nicaragua, alongside bespoke luxury gifts including whiskey sets, 
                      leather goods, chess sets, and collectible art pieces.
                    </p>
                    <p>
                      Whether you're a seasoned aficionado or just beginning your journey into the world of premium 
                      cigars, we're here to guide you — with expert knowledge, genuine passion, and a commitment 
                      to making every experience memorable.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Values */}
        <ScrollReveal>
          <section className="py-20 sm:py-28 bg-secondary/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">What Drives Us</p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Our Values</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {values.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="text-center group">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-full border border-primary/30 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-sm font-serif font-semibold text-foreground mb-2">{title}</h3>
                    <p className="text-xs text-muted-foreground font-sans leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Timeline */}
        <ScrollReveal>
          <section className="py-20 sm:py-28">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-14">
                <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Our Journey</p>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">Milestones</h2>
              </div>
              <div className="relative">
                <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border" />
                {milestones.map((m, i) => (
                  <div key={m.year} className={`relative flex items-center mb-10 last:mb-0 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pr-12 text-right" : "pl-12 text-left"}`}>
                      <p className="text-2xl font-serif font-bold text-primary">{m.year}</p>
                      <p className="text-sm text-muted-foreground font-sans mt-1">{m.event}</p>
                    </div>
                    <div className="absolute left-4 md:left-1/2 w-3 h-3 bg-primary rounded-full -translate-x-1/2 z-10 ring-4 ring-background" />
                    <div className="md:hidden ml-10">
                      <p className="text-lg font-serif font-bold text-primary">{m.year}</p>
                      <p className="text-sm text-muted-foreground font-sans mt-1">{m.event}</p>
                    </div>
                    <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? "pl-12" : "pr-12"}`} />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Second Image + Stats */}
        <ScrollReveal animation="fade-in-left">
          <section className="py-20 sm:py-28 bg-secondary/30 border-y border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">The Numbers</p>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
                    Trusted by Thousands
                  </h2>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-8">
                    Over the years, we've earned the trust of cigar lovers and gift buyers across Australia. 
                    Our commitment to quality and customer satisfaction speaks for itself.
                  </p>
                  <div className="grid grid-cols-3 gap-6">
                    {[
                      { value: "10+", label: "Years Experience" },
                      { value: "5K+", label: "Happy Customers" },
                      { value: "500+", label: "Premium Products" },
                    ].map(({ value, label }) => (
                      <div key={label} className="text-center">
                        <div className="text-3xl font-serif font-bold text-primary">{value}</div>
                        <div className="text-xs text-muted-foreground font-sans uppercase tracking-wider mt-2">{label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className="aspect-[4/3] overflow-hidden rounded-sm">
                    <img src={lifestyle2} alt="Luxury gifting" className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="absolute -top-4 -left-4 w-32 h-32 border border-primary/20 rounded-sm hidden lg:block" />
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal animation="fade-in-up">
          <section className="py-20 sm:py-28">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                Ready to Experience the Difference?
              </h2>
              <p className="text-muted-foreground font-sans mb-8 max-w-lg mx-auto">
                Explore our curated collection and discover why thousands of Australians trust Cuban Cigar World.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/products" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/90 transition-all duration-300 rounded-sm">
                  Shop Now
                </a>
                <a href="/contact" className="inline-flex items-center justify-center border border-primary/50 text-primary px-10 py-4 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/10 transition-all duration-300 rounded-sm">
                  Contact Us
                </a>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  );
};

export default AboutPage;
