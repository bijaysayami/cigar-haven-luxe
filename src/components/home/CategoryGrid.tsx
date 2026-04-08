import catCigars from "@/assets/cat-cigars.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catCollectibles from "@/assets/cat-collectibles.jpg";
import StaggerReveal from "@/components/home/StaggerReveal";

const categories = [
  { name: "Premium Cigars", subtitle: "Cuban · Dominican · Nicaraguan", image: catCigars },
  { name: "Accessories", subtitle: "Humidors · Cutters · Lighters", image: catAccessories },
  { name: "Luxury Gifts", subtitle: "Whiskey Sets · Leather · Chess", image: catGifts },
  { name: "Collectibles", subtitle: "Statues · Vintage · Art", image: catCollectibles },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Browse By Category</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Our Collections
          </h2>
        </div>

        <StaggerReveal staggerDelay={150}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {categories.map((cat) => (
              <a
                key={cat.name}
                href="/products"
                data-stagger
                className="group relative aspect-[3/4] overflow-hidden rounded-sm opacity-0"
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  width={640}
                  height={800}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-foreground mb-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-muted-foreground font-sans tracking-wide">
                    {cat.subtitle}
                  </p>
                  <div className="mt-3 overflow-hidden h-0.5 w-0 group-hover:w-12 bg-primary transition-all duration-500" />
                </div>
              </a>
            ))}
          </div>
        </StaggerReveal>
      </div>
    </section>
  );
};

export default CategoryGrid;
