import { useState } from "react";
import SiteHeader from "@/components/home/SiteHeader";
import SiteFooter from "@/components/home/SiteFooter";
import ScrollReveal from "@/components/home/ScrollReveal";
import { Mail, Phone, MapPin, Clock, Send, Facebook, Instagram, Twitter, Youtube } from "lucide-react";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you within 24 hours.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "info@cubancigarworld.com.au", href: "mailto:info@cubancigarworld.com.au" },
    { icon: Phone, label: "Phone", value: "+61 3 9000 0000", href: "tel:+61390000000" },
    { icon: MapPin, label: "Location", value: "Melbourne, Victoria, Australia" },
    { icon: Clock, label: "Hours", value: "Mon–Fri: 9am–5pm AEST" },
  ];

  const socialLinks = [
    { icon: Facebook, label: "Facebook", href: "#" },
    { icon: Instagram, label: "Instagram", href: "#" },
    { icon: Twitter, label: "X (Twitter)", href: "#" },
    { icon: Youtube, label: "YouTube", href: "#" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        {/* Hero */}
        <section className="py-16 sm:py-20 border-b border-border">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-sans mb-3">Get In Touch</p>
            <h1 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-muted-foreground font-sans max-w-lg mx-auto">
              Have a question, need a recommendation, or want to place a custom order? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <ScrollReveal>
          <section className="py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
                {/* Left – Contact Details & Social */}
                <div className="lg:col-span-2">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">We're Here to Help</h2>
                  <p className="text-muted-foreground font-sans leading-relaxed mb-10">
                    Whether you need advice on choosing the perfect cigar, help with an order, or information about our luxury gift collections — our team is ready to assist.
                  </p>

                  <div className="space-y-6 mb-10">
                    {contactInfo.map(({ icon: Icon, label, value, href }) => (
                      <div key={label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-full border border-primary/30 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs uppercase tracking-wider text-muted-foreground font-sans mb-1">{label}</p>
                          {href ? (
                            <a href={href} className="text-sm font-sans text-foreground hover:text-primary transition-colors">
                              {value}
                            </a>
                          ) : (
                            <p className="text-sm font-sans text-foreground">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Social Links */}
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans mb-4">Follow Us</p>
                    <div className="flex gap-3">
                      {socialLinks.map(({ icon: Icon, label, href }) => (
                        <a
                          key={label}
                          href={href}
                          aria-label={label}
                          className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary text-muted-foreground transition-colors duration-300"
                        >
                          <Icon className="w-4 h-4" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right – Feedback Form */}
                <div className="lg:col-span-3">
                  <form onSubmit={handleSubmit} className="bg-card border border-border rounded-sm p-8 sm:p-10">
                    <h3 className="text-xl font-serif font-bold text-foreground mb-6">Send Us a Message</h3>
                    <div className="grid sm:grid-cols-2 gap-5 mb-5">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2">Your Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="John Smith"
                        />
                      </div>
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2">Email Address</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div className="mb-5">
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2">Subject</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div className="mb-6">
                      <label className="block text-xs uppercase tracking-wider text-muted-foreground font-sans mb-2">Message</label>
                      <textarea
                        required
                        rows={5}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full bg-secondary border border-border rounded-sm px-4 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                        placeholder="Tell us what you're looking for..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-primary/90 transition-all duration-300 rounded-sm"
                    >
                      <Send className="w-4 h-4" />
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </main>
      <SiteFooter />
    </div>
  );
};

export default ContactPage;
