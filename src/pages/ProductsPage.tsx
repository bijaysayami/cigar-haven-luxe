import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/home/SiteHeader";
import SiteFooter from "@/components/home/SiteFooter";
import ScrollReveal from "@/components/home/ScrollReveal";
import { allProducts, categories, types, sortOptions } from "@/data/products";
import { ShoppingCart, Heart, SlidersHorizontal, X, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const ProductsPage = () => {
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All");
  const [sort, setSort] = useState("featured");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400]);
  const [mobileFilters, setMobileFilters] = useState(false);

  const availableTypes = category !== "All" && types[category] ? types[category] : [];

  const filtered = useMemo(() => {
    let result = [...allProducts];
    if (category !== "All") result = result.filter((p) => p.category === category);
    if (type !== "All" && availableTypes.length > 0) result = result.filter((p) => p.type === type);
    result = result.filter((p) => p.price >= priceRange[0] && p.price <= priceRange[1]);

    switch (sort) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "best-selling": result.sort((a, b) => b.sold - a.sold); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      default: break;
    }
    return result;
  }, [category, type, sort, priceRange, availableTypes.length]);

  const FilterPanel = ({ className = "" }: { className?: string }) => (
    <div className={className}>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-sm font-serif font-semibold text-foreground mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => { setCategory(c); setType("All"); }}
              className={`block w-full text-left text-sm font-sans py-1.5 px-3 rounded-sm transition-colors ${
                category === c ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Types */}
      {availableTypes.length > 0 && (
        <div className="mb-8">
          <h3 className="text-sm font-serif font-semibold text-foreground mb-4">Type</h3>
          <div className="space-y-2">
            <button
              onClick={() => setType("All")}
              className={`block w-full text-left text-sm font-sans py-1.5 px-3 rounded-sm transition-colors ${
                type === "All" ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              All Types
            </button>
            {availableTypes.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`block w-full text-left text-sm font-sans py-1.5 px-3 rounded-sm transition-colors ${
                  type === t ? "bg-primary/10 text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Price Range */}
      <div className="mb-8">
        <h3 className="text-sm font-serif font-semibold text-foreground mb-4">Price Range</h3>
        <Slider
          min={0}
          max={400}
          step={5}
          value={priceRange}
          onValueChange={(v) => setPriceRange(v as [number, number])}
          className="mb-3"
        />
        <div className="flex items-center justify-between text-xs text-muted-foreground font-sans">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* Reset */}
      <button
        onClick={() => { setCategory("All"); setType("All"); setPriceRange([0, 400]); setSort("featured"); }}
        className="text-xs text-primary font-sans hover:underline"
      >
        Reset All Filters
      </button>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Our Collection</p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              All Products
            </h1>
            <p className="text-muted-foreground font-sans max-w-lg mx-auto">
              Browse our curated selection of premium cigars, accessories, luxury gifts, and collectibles.
            </p>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Top bar */}
            <div className="flex items-center justify-between mb-8">
              <p className="text-sm text-muted-foreground font-sans">
                {filtered.length} product{filtered.length !== 1 ? "s" : ""}
              </p>
              <div className="flex items-center gap-4">
                {/* Mobile filter toggle */}
                <button
                  onClick={() => setMobileFilters(true)}
                  className="lg:hidden flex items-center gap-2 text-sm text-foreground font-sans border border-border px-4 py-2 rounded-sm hover:border-primary/30 transition-colors"
                >
                  <SlidersHorizontal className="w-4 h-4" />
                  Filters
                </button>
                {/* Sort */}
                <div className="relative">
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="appearance-none bg-secondary border border-border rounded-sm px-4 py-2 pr-8 text-sm font-sans text-foreground focus:outline-none focus:border-primary cursor-pointer"
                  >
                    {sortOptions.map((o) => (
                      <option key={o.value} value={o.value}>{o.label}</option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground pointer-events-none" />
                </div>
              </div>
            </div>

            <div className="flex gap-10">
              {/* Desktop Sidebar */}
              <FilterPanel className="hidden lg:block w-60 flex-shrink-0" />

              {/* Mobile Filter Overlay */}
              {mobileFilters && (
                <div className="fixed inset-0 z-50 lg:hidden">
                  <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setMobileFilters(false)} />
                  <div className="absolute right-0 top-0 h-full w-80 max-w-full bg-card border-l border-border p-6 overflow-y-auto">
                    <div className="flex items-center justify-between mb-6">
                      <h2 className="text-lg font-serif font-semibold text-foreground">Filters</h2>
                      <button onClick={() => setMobileFilters(false)} className="text-muted-foreground hover:text-foreground">
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                    <FilterPanel />
                  </div>
                </div>
              )}

              {/* Products */}
              <div className="flex-1">
                {filtered.length === 0 ? (
                  <div className="text-center py-20">
                    <p className="text-muted-foreground font-sans">No products found matching your filters.</p>
                    <button
                      onClick={() => { setCategory("All"); setType("All"); setPriceRange([0, 400]); }}
                      className="text-primary font-sans text-sm mt-4 hover:underline"
                    >
                      Clear Filters
                    </button>
                  </div>
                ) : (
                  <ScrollReveal>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                      {filtered.map((product) => (
                        <Link
                          to={`/product/${product.id}`}
                          key={product.id}
                          className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300"
                        >
                          <div className="relative aspect-square overflow-hidden">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                              loading="lazy"
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
                            <button
                              onClick={(e) => e.preventDefault()}
                              className="absolute top-3 right-3 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:text-primary"
                            >
                              <Heart className="w-4 h-4" />
                            </button>
                            <button
                              onClick={(e) => e.preventDefault()}
                              className="absolute bottom-3 right-3 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 hover:bg-primary/90"
                            >
                              <ShoppingCart className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="p-4">
                            <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans mb-1">{product.category}</p>
                            <h3 className="text-sm font-serif font-semibold text-foreground mb-2 leading-tight">{product.name}</h3>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-sans font-bold text-primary">${product.price.toFixed(2)}</span>
                              {product.originalPrice && (
                                <span className="text-xs font-sans text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </ScrollReveal>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ProductsPage;
