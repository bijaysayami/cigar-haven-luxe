import logo from "/user-uploads/cigar-logo_2.png";

const footerLinks = {
  "Shop": ["Premium Cigars", "Accessories", "Luxury Gifts", "Collectibles", "New Arrivals", "Sale"],
  "Information": ["About Us", "Shipping & Returns", "FAQ", "Contact Us", "Blog"],
  "Legal": ["Privacy Policy", "Terms & Conditions", "Refund Policy", "Age Verification"],
};

const SiteFooter = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <img src={logo} alt="Cuban Cigar World" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground font-sans leading-relaxed mb-6">
              Australia's premier destination for premium cigars and luxury gifts.
            </p>
            <div className="flex gap-4">
              {["Facebook", "Instagram", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors text-xs font-sans font-bold"
                >
                  {social[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-sm font-serif font-semibold text-foreground mb-4">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors font-sans">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground font-sans">
            © {new Date().getFullYear()} Cuban Cigar World. All rights reserved.
          </p>
          <p className="text-[10px] text-muted-foreground font-sans">
            You must be 18+ to purchase tobacco products.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
