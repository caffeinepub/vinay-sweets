import { Mail, Phone } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  return (
    <footer className="bg-burgundy-dark border-t border-white/10 text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="font-serif text-3xl font-bold text-white mb-1">
              Vinay Sweets
            </h3>
            <p className="text-gold text-xs tracking-widest uppercase mb-4">
              Est. 1978
            </p>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Bringing the authentic taste of traditional Indian sweets to
              Chittorgarh since 1978. Made with pure ghee, natural ingredients,
              and generations of love.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5">
              Quick Links
            </h4>
            <ul className="flex flex-col gap-2">
              {["#home", "#sweets", "#reviews", "#faqs", "#contact"].map(
                (href, i) => (
                  <li key={href}>
                    <a
                      href={href}
                      data-ocid="footer.link"
                      className="text-white/70 text-sm hover:text-gold transition-colors capitalize"
                    >
                      {["Home", "Our Sweets", "Reviews", "FAQs", "Contact"][i]}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white uppercase tracking-widest text-xs mb-5">
              Contact
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:9888888899"
                className="flex items-center gap-2 text-white/70 text-sm hover:text-gold transition-colors"
              >
                <Phone className="w-4 h-4 flex-shrink-0" /> 9888888899
              </a>
              <a
                href="mailto:aaaaa@gmail.com"
                className="flex items-center gap-2 text-white/70 text-sm hover:text-gold transition-colors"
              >
                <Mail className="w-4 h-4 flex-shrink-0" /> aaaaa@gmail.com
              </a>
              <p className="text-white/70 text-sm">
                Collectory Chauraha, Station Road,
                <br />
                Chittorgarh-312001, Rajasthan
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/50 text-xs text-center sm:text-left">
            © {year} Vinay Sweets. All rights reserved.
          </p>
          <p className="text-white/40 text-xs text-center sm:text-right">
            Built with ❤️ using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gold transition-colors"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
