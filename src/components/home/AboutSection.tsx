import lifestyle1 from "@/assets/lifestyle-1.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={lifestyle1}
                alt="Gentleman enjoying premium cigar"
                className="w-full h-full object-cover"
                loading="lazy"
                width={960}
                height={640}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-primary/20 rounded-sm hidden lg:block" />
          </div>

          {/* Content */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Our Story</p>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6">
              A Passion for the <span className="text-gold-gradient">Finer Things</span>
            </h2>
            <div className="space-y-4 text-muted-foreground font-sans leading-relaxed">
              <p>
                Cuban Cigar World is Australia's premier destination for cigar enthusiasts
                and lovers of luxury. We've built our reputation on an unwavering commitment
                to quality, authenticity, and the art of fine living.
              </p>
              <p>
                From hand-rolled Cuban cigars to bespoke luxury gifts, every product in our
                collection is carefully curated to meet the highest standards. Whether you're
                a seasoned aficionado or discovering the world of premium cigars for the first
                time, we're here to guide your journey.
              </p>
            </div>
            <div className="mt-8 flex gap-8">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "5K+", label: "Happy Customers" },
                { value: "500+", label: "Premium Products" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-serif font-bold text-primary">{value}</div>
                  <div className="text-xs text-muted-foreground font-sans uppercase tracking-wider mt-1">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
