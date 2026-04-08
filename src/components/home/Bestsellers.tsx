import { Flame, Clock } from "lucide-react";
import catCigars from "@/assets/cat-cigars.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catCollectibles from "@/assets/cat-collectibles.jpg";

const bestsellers = [
  { name: "Partagas Serie D No. 4", price: 74.95, image: catCigars, sold: 342 },
  { name: "Hand-Carved Chess Set", price: 349.00, image: catGifts, sold: 128 },
  { name: "Antique Bronze Globe", price: 189.00, image: catCollectibles, sold: 96 },
];

const Bestsellers = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Most Popular</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Bestsellers
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {bestsellers.map((item, i) => (
            <a key={i} href="#" className="group relative overflow-hidden rounded-sm bg-card border border-border hover:border-primary/30 transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  width={640}
                  height={800}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-2">
                  <Flame className="w-3.5 h-3.5 text-accent" />
                  <span className="text-[10px] uppercase tracking-wider text-accent font-sans font-semibold">
                    Trending
                  </span>
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-sans font-bold text-primary">${item.price.toFixed(2)}</span>
                  <div className="flex items-center gap-1.5 text-muted-foreground">
                    <Clock className="w-3 h-3" />
                    <span className="text-[10px] font-sans">{item.sold} sold</span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;
