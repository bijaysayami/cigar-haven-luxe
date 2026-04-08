import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User } from "lucide-react";
import logo from "@/assets/cigar-logo.png";

const navLinks = [
  { label: "Cigars", href: "/products" },
  { label: "Accessories", href: "/products" },
  { label: "Luxury Gifts", href: "/products" },
  { label: "Collectibles", href: "/products" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Promo bar */}
      <div className="bg-primary/10 border-b border-primary/20 text-center py-2 px-4">
        <p className="text-xs tracking-widest uppercase text-primary font-sans">
          Free Shipping on Orders Over $150 &nbsp;|&nbsp; Premium Quality Guaranteed
        </p>
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden text-foreground hover:text-primary transition-colors"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src={logo} alt="Cuban Cigar World" className="h-14 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors font-sans font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button className="text-foreground hover:text-primary transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="text-foreground hover:text-primary transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="text-foreground hover:text-primary transition-colors relative">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center font-sans font-bold">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <nav className="flex flex-col py-4 px-6 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors font-sans font-medium py-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default SiteHeader;
