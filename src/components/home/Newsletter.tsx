import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Stay Connected</p>
        <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-4">
          Join the Club
        </h2>
        <p className="text-muted-foreground font-sans mb-8">
          Subscribe for exclusive offers, new arrivals, and cigar guides delivered to your inbox.
        </p>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-secondary border border-border rounded-sm px-5 py-3.5 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
          />
          <button
            type="submit"
            className="bg-primary text-primary-foreground px-8 py-3.5 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/90 transition-all duration-300 rounded-sm whitespace-nowrap"
          >
            Subscribe
          </button>
        </form>
        <p className="text-[10px] text-muted-foreground font-sans mt-4">
          No spam. Unsubscribe anytime. We respect your privacy.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
