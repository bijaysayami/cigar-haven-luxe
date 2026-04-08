import heroBg from "@/assets/hero-bg.jpg";

const PromoBanner = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
        width={1920}
        height={1080}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Limited Time Offer</p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-4">
          20% Off Your First Order
        </h2>
        <p className="text-muted-foreground font-sans mb-8 max-w-lg mx-auto">
          Use code <span className="text-primary font-semibold">WELCOME20</span> at checkout.
          Discover our curated collection of premium cigars and luxury gifts.
        </p>
        <a
          href="#"
          className="inline-flex items-center justify-center bg-primary text-primary-foreground px-10 py-4 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/90 transition-all duration-300 rounded-sm"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default PromoBanner;
