import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Sweets", href: "#sweets" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 bg-cream-light border-b border-border transition-shadow ${
        scrolled ? "shadow-sweet" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a
            href="#home"
            data-ocid="nav.link"
            className="flex flex-col leading-tight"
          >
            <span className="font-serif text-2xl sm:text-3xl font-bold text-burgundy tracking-tight">
              Vinay Sweets
            </span>
            <span className="text-xs text-muted-foreground tracking-widest uppercase">
              Est. 1978
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                data-ocid="nav.link"
                className="text-sm font-medium text-foreground hover:text-burgundy transition-colors tracking-wide uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone */}
          <a
            href="tel:9888888899"
            data-ocid="nav.link"
            className="hidden sm:flex items-center gap-2 text-burgundy font-semibold text-sm hover:text-gold transition-colors"
          >
            <Phone className="w-4 h-4" />
            9888888899
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="md:hidden p-2 text-burgundy"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            data-ocid="nav.toggle"
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-light border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              data-ocid="nav.link"
              className="block py-2 text-sm font-medium text-foreground hover:text-burgundy transition-colors tracking-wide uppercase"
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="tel:9888888899"
            className="flex items-center gap-2 text-burgundy font-semibold text-sm mt-2"
          >
            <Phone className="w-4 h-4" />
            9888888899
          </a>
        </div>
      )}
    </header>
  );
}
