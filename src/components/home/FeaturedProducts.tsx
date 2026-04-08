import { ShoppingCart, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import catCigars from "@/assets/cat-cigars.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";
import catGifts from "@/assets/cat-gifts.jpg";
import catCollectibles from "@/assets/cat-collectibles.jpg";
import StaggerReveal from "@/components/home/StaggerReveal";

const products = [
  { id: 1, name: "Cohiba Behike 56", category: "Cuban Cigar", price: 89.95, originalPrice: 109.95, image: catCigars, badge: "Best Seller" },
  { id: 2, name: "Gold Cigar Cutter Set", category: "Accessories", price: 45.00, image: catAccessories, badge: null },
  { id: 3, name: "Crystal Whiskey Decanter", category: "Luxury Gifts", price: 129.95, originalPrice: 159.95, image: catGifts, badge: "Sale" },
  { id: 4, name: "Bronze Atlas Statue", category: "Collectibles", price: 199.00, image: catCollectibles, badge: "Limited" },
  { id: 5, name: "Montecristo No. 2", category: "Cuban Cigar", price: 64.95, image: catCigars, badge: null },
  { id: 6, name: "Premium Humidor 50ct", category: "Accessories", price: 249.00, originalPrice: 299.00, image: catAccessories, badge: "Sale" },
  { id: 7, name: "Leather Travel Case", category: "Luxury Gifts", price: 79.95, image: catGifts, badge: "New" },
  { id: 8, name: "Vintage Compass Set", category: "Collectibles", price: 149.00, image: catCollectibles, badge: null },
];

const FeaturedProducts = () => {
  return (
    <section className="py-20 sm:py-28 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Handpicked For You</p>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground">
            Featured Products
          </h2>
        </div>

        <StaggerReveal staggerDelay={100}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {products.map((product) => (
              <Link to={`/product/${product.id}`} key={product.id} data-stagger className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300 opacity-0">
                {/* Image */}
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    width={640}
                    height={800}
                  />
                  {product.badge && (
                    <span className={`absolute top-3 left-3 text-[10px] uppercase tracking-wider font-sans font-semibold px-2.5 py-1 rounded-sm ${
                      product.badge === "Sale" ? "bg-accent text-accent-foreground" :
                      product.badge === "Limited" ? "bg-primary text-primary-foreground" :
                      "bg-secondary text-foreground"
                    }`}>
                      {product.badge}
                    </span>
                  )}
                  <button onClick={(e) => e.preventDefault()} className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary">
                    <Heart className="w-4 h-4" />
                  </button>
                  <button onClick={(e) => e.preventDefault()} className="absolute bottom-3 right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-primary/90">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>

                {/* Info */}
                <div className="p-4">
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans mb-1">
                    {product.category}
                  </p>
                  <h3 className="text-sm font-serif font-semibold text-foreground mb-2 leading-tight">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-sans font-bold text-primary">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs font-sans text-muted-foreground line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </StaggerReveal>

        <div className="text-center mt-12">
          <Link
            to="/products"
            className="inline-flex items-center justify-center border border-primary/50 text-primary px-10 py-3.5 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300 rounded-sm"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
