import lifestyle1 from "@/assets/lifestyle-1.jpg";
import lifestyle2 from "@/assets/lifestyle-2.jpg";

const LifestyleSection = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">The Lifestyle</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Moments Worth Celebrating
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <a href="#" className="group relative aspect-[3/2] overflow-hidden rounded-sm">
            <img
              src={lifestyle1}
              alt="Luxury cigar lounge experience"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={960}
              height={640}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-2">Relaxation</p>
              <h3 className="text-2xl font-serif font-bold text-foreground">The Art of Unwinding</h3>
              <p className="text-sm text-muted-foreground font-sans mt-2 max-w-sm">
                A fine cigar, a glass of whiskey, and the perfect moment of stillness.
              </p>
            </div>
          </a>

          <a href="#" className="group relative aspect-[3/2] overflow-hidden rounded-sm">
            <img
              src={lifestyle2}
              alt="Premium luxury gifting"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
              width={960}
              height={640}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-2">Gifting</p>
              <h3 className="text-2xl font-serif font-bold text-foreground">Gifts They'll Remember</h3>
              <p className="text-sm text-muted-foreground font-sans mt-2 max-w-sm">
                Make every occasion unforgettable with our curated luxury gifts.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LifestyleSection;
