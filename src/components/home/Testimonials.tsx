import { Star, Quote } from "lucide-react";
import { useState } from "react";

const reviews = [
  {
    name: "James M.",
    location: "Sydney, NSW",
    text: "Absolutely fantastic selection. The Cohiba Behike I ordered was in perfect condition. Packaging was premium and delivery was fast. Will be a repeat customer for sure.",
    rating: 5,
  },
  {
    name: "David R.",
    location: "Melbourne, VIC",
    text: "Bought a whiskey decanter set as a gift — the quality blew me away. Cuban Cigar World has become my go-to for unique luxury gifts. Highly recommended.",
    rating: 5,
  },
  {
    name: "Michael T.",
    location: "Brisbane, QLD",
    text: "The humidor I purchased is stunning. Great communication from the team and the product arrived earlier than expected. Top-notch service all around.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-20 sm:py-28 bg-secondary/30 border-y border-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Testimonials</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-14">
          What Our Customers Say
        </h2>

        <div className="relative">
          <Quote className="w-10 h-10 text-primary/20 mx-auto mb-6" />

          <p className="text-lg sm:text-xl font-serif text-foreground leading-relaxed mb-8 min-h-[120px]">
            "{reviews[active].text}"
          </p>

          <div className="flex items-center justify-center gap-1 mb-4">
            {Array.from({ length: reviews[active].rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 text-primary fill-primary" />
            ))}
          </div>

          <p className="font-sans font-semibold text-foreground text-sm">{reviews[active].name}</p>
          <p className="font-sans text-muted-foreground text-xs mt-1">{reviews[active].location}</p>

          {/* Dots */}
          <div className="flex items-center justify-center gap-3 mt-10">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-primary w-8" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
