import { useParams, Link } from "react-router-dom";
import SiteHeader from "@/components/home/SiteHeader";
import SiteFooter from "@/components/home/SiteFooter";
import ScrollReveal from "@/components/home/ScrollReveal";
import { allProducts } from "@/data/products";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Star, ShoppingCart, Heart, Minus, Plus, Truck, Shield, RotateCcw, ChevronRight } from "lucide-react";
import { useState } from "react";

const fakeReviews = [
  { name: "James M.", location: "Sydney, NSW", rating: 5, date: "2 weeks ago", text: "Absolutely stunning quality. Exceeded my expectations in every way. Packaging was premium and delivery was lightning fast." },
  { name: "David R.", location: "Melbourne, VIC", rating: 5, date: "1 month ago", text: "Bought this as a gift and it was a huge hit. The quality is outstanding and the presentation is first-class." },
  { name: "Michael T.", location: "Brisbane, QLD", rating: 4, date: "2 months ago", text: "Great product overall. Very well made and looks exactly like the photos. Would definitely buy again." },
  { name: "Robert K.", location: "Perth, WA", rating: 5, date: "3 months ago", text: "Top-notch quality and service. Cuban Cigar World never disappoints. This is my third purchase and they're all exceptional." },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = allProducts.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <SiteHeader />
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-serif font-bold text-foreground mb-4">Product Not Found</h1>
          <Link to="/products" className="text-primary font-sans hover:underline">← Back to Products</Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const related = allProducts.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  const avgRating = product.rating;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex items-center gap-2 text-xs text-muted-foreground font-sans">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Main */}
        <section className="pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
              {/* Image */}
              <div className="relative aspect-square overflow-hidden rounded-sm bg-card border border-border">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                {product.badge && (
                  <span className={`absolute top-4 left-4 text-xs uppercase tracking-wider font-sans font-semibold px-3 py-1.5 rounded-sm ${
                    product.badge === "Sale" ? "bg-accent text-accent-foreground" :
                    product.badge === "Limited" ? "bg-primary text-primary-foreground" :
                    "bg-secondary text-foreground"
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-2">
                  {product.category} · {product.type}
                </p>
                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                {/* Rating */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className={`w-4 h-4 ${i < Math.round(avgRating) ? "text-primary fill-primary" : "text-muted"}`} />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground font-sans">
                    {avgRating} ({product.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-3xl font-sans font-bold text-primary">${product.price.toFixed(2)}</span>
                  {product.originalPrice && (
                    <>
                      <span className="text-lg font-sans text-muted-foreground line-through">${product.originalPrice.toFixed(2)}</span>
                      <span className="text-xs bg-accent/20 text-accent-foreground px-2 py-0.5 rounded-sm font-sans font-semibold">
                        Save ${(product.originalPrice - product.price).toFixed(2)}
                      </span>
                    </>
                  )}
                </div>

                <p className="text-muted-foreground font-sans leading-relaxed mb-8">{product.description}</p>

                {/* Qty + Add to cart */}
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <div className="flex items-center border border-border rounded-sm">
                    <button onClick={() => setQty(Math.max(1, qty - 1))} className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors">
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="px-4 py-3 text-sm font-sans font-semibold text-foreground min-w-[3rem] text-center">{qty}</span>
                    <button onClick={() => setQty(qty + 1)} className="px-4 py-3 text-muted-foreground hover:text-foreground transition-colors">
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/90 transition-all duration-300 rounded-sm">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                  <button className="w-12 h-12 border border-border rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                </div>

                {/* Trust */}
                <div className="grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {[
                    { icon: Truck, text: "Free Shipping $150+" },
                    { icon: Shield, text: "Authentic Guarantee" },
                    { icon: RotateCcw, text: "Easy Returns" },
                  ].map(({ icon: Icon, text }) => (
                    <div key={text} className="flex flex-col items-center gap-2 text-center">
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Accordion Info */}
        <ScrollReveal>
          <section className="py-12 border-t border-border">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
              <Accordion type="single" collapsible defaultValue="details">
                <AccordionItem value="details">
                  <AccordionTrigger className="text-base font-serif">Product Details</AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2">
                      {product.details.map((d) => (
                        <li key={d} className="text-sm text-muted-foreground font-sans flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="shipping">
                  <AccordionTrigger className="text-base font-serif">Shipping & Returns</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-3 text-sm text-muted-foreground font-sans">
                      <p>Free standard shipping on orders over $150. Express shipping available at checkout.</p>
                      <p>Delivery within 3-7 business days Australia-wide. Express orders ship within 1-2 business days.</p>
                      <p>30-day return policy on unopened items. Please contact us for return authorisation.</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="reviews">
                  <AccordionTrigger className="text-base font-serif">Reviews ({product.reviews})</AccordionTrigger>
                  <AccordionContent>
                    {/* Rating Summary */}
                    <div className="flex items-center gap-4 mb-8 pb-6 border-b border-border">
                      <div className="text-center">
                        <div className="text-4xl font-serif font-bold text-foreground">{avgRating}</div>
                        <div className="flex items-center gap-0.5 mt-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className={`w-3 h-3 ${i < Math.round(avgRating) ? "text-primary fill-primary" : "text-muted"}`} />
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground font-sans mt-1">{product.reviews} reviews</p>
                      </div>
                    </div>

                    {/* Individual Reviews */}
                    <div className="space-y-6">
                      {fakeReviews.map((review, i) => (
                        <div key={i} className="border-b border-border pb-6 last:border-0">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <span className="text-sm font-sans font-semibold text-foreground">{review.name}</span>
                              <span className="text-xs text-muted-foreground font-sans ml-2">{review.location}</span>
                            </div>
                            <span className="text-xs text-muted-foreground font-sans">{review.date}</span>
                          </div>
                          <div className="flex items-center gap-0.5 mb-2">
                            {Array.from({ length: 5 }).map((_, j) => (
                              <Star key={j} className={`w-3 h-3 ${j < review.rating ? "text-primary fill-primary" : "text-muted"}`} />
                            ))}
                          </div>
                          <p className="text-sm text-muted-foreground font-sans leading-relaxed">{review.text}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </section>
        </ScrollReveal>

        {/* Related Products */}
        {related.length > 0 && (
          <ScrollReveal>
            <section className="py-16 bg-secondary/30 border-t border-border">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">You May Also Like</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  {related.map((p) => (
                    <Link to={`/product/${p.id}`} key={p.id} className="group bg-card border border-border rounded-sm overflow-hidden hover:border-primary/30 transition-all duration-300">
                      <div className="relative aspect-square overflow-hidden">
                        <img src={p.image} alt={p.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      </div>
                      <div className="p-4">
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-sans mb-1">{p.category}</p>
                        <h3 className="text-sm font-serif font-semibold text-foreground mb-2 leading-tight">{p.name}</h3>
                        <span className="text-sm font-sans font-bold text-primary">${p.price.toFixed(2)}</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </ScrollReveal>
        )}
      </main>
      <SiteFooter />
    </div>
  );
};

export default ProductDetailPage;
