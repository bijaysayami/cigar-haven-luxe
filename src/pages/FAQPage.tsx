import SiteHeader from "@/components/home/SiteHeader";
import SiteFooter from "@/components/home/SiteFooter";
import ScrollReveal from "@/components/home/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqCategories = [
  {
    title: "Orders & Shipping",
    items: [
      { q: "Do you ship Australia-wide?", a: "Yes! We offer standard and express shipping across all of Australia. Orders over $150 qualify for free standard shipping." },
      { q: "How long does delivery take?", a: "Standard shipping typically takes 3–7 business days. Express shipping arrives within 1–3 business days depending on your location." },
      { q: "Can I track my order?", a: "Absolutely. Once your order ships you'll receive a tracking number via email so you can follow it every step of the way." },
      { q: "Do you ship internationally?", a: "Currently we ship within Australia only. We're exploring international options — sign up for our newsletter to stay updated." },
    ],
  },
  {
    title: "Products & Authenticity",
    items: [
      { q: "Are your cigars authentic?", a: "Every cigar we sell is sourced from trusted, verified suppliers. We guarantee authenticity on all Cuban, Dominican, and Nicaraguan products." },
      { q: "How should I store my cigars?", a: "Cigars should be stored at 65–72% humidity and 18–21°C. A quality humidor is essential — browse our accessories collection for options." },
      { q: "What accessories do you recommend for beginners?", a: "We recommend starting with a reliable cutter, a single-flame torch lighter, and a small desktop humidor. Our staff picks make great starter kits." },
      { q: "Do you offer sampler packs?", a: "Yes, we curate sampler packs across different origins and strength profiles so you can explore a variety of premium cigars." },
    ],
  },
  {
    title: "Returns & Payments",
    items: [
      { q: "Can I return a product?", a: "We accept returns on unopened items within 30 days of purchase. Please contact us for a return authorisation before sending items back." },
      { q: "What payment methods do you accept?", a: "We accept Visa, Mastercard, American Express, PayPal, and Afterpay for flexible payment options." },
      { q: "Is my payment information secure?", a: "Yes. All transactions are processed through industry-standard encrypted payment gateways. We never store your card details." },
    ],
  },
  {
    title: "Gifts & Special Orders",
    items: [
      { q: "Do you offer gift wrapping?", a: "Yes, we offer premium gift wrapping with a personalised message card at checkout. Perfect for birthdays, anniversaries, and special occasions." },
      { q: "Can I place a bulk or corporate order?", a: "Absolutely. We cater to corporate gifts and bulk orders with custom packaging. Contact us directly for a tailored quote." },
      { q: "Do you have gift cards?", a: "Yes! Digital gift cards are available in various denominations — a perfect choice when you're unsure what to pick." },
    ],
  },
];

const FAQPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Support</p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-muted-foreground font-sans max-w-lg mx-auto">
              Find answers to common questions about our products, shipping, returns, and more.
            </p>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 sm:py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {faqCategories.map((category) => (
              <ScrollReveal key={category.title}>
                <div>
                  <h2 className="text-xl font-serif font-bold text-foreground mb-4">{category.title}</h2>
                  <Accordion type="single" collapsible className="border border-border rounded-sm overflow-hidden">
                    {category.items.map((item, idx) => (
                      <AccordionItem key={idx} value={`${category.title}-${idx}`} className="border-border px-6">
                        <AccordionTrigger className="text-sm font-sans text-foreground hover:text-primary hover:no-underline py-5">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-sm text-muted-foreground font-sans leading-relaxed">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <ScrollReveal>
          <section className="py-16 sm:py-20 bg-secondary/30 border-t border-border">
            <div className="max-w-2xl mx-auto px-4 text-center">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Still Have Questions?</h2>
              <p className="text-muted-foreground font-sans mb-8">
                Our team is happy to help. Reach out and we'll get back to you within 24 hours.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/90 transition-all duration-300 rounded-sm"
              >
                Contact Us
              </a>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  );
};

export default FAQPage;
