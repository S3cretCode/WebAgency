import Link from "next/link";

/**
 * Minimal dark footer with navigation, contact info, and copyright.
 */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
    { label: "Free Audit", href: "/audit" },
  ];

  return (
    <footer className="bg-obsidian border-t border-obsidian-mid/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div>
            <h3 className="font-heading text-xl text-ivory mb-4">
              Premium <span className="text-gold">WebServices</span>
            </h3>
            <p className="text-silver text-sm leading-relaxed max-w-xs">
              Digital infrastructure for growing enterprises. Premium web design,
              development, and social media management.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-widest mb-4 font-semibold">
              Navigation
            </h4>
            <nav className="flex flex-col gap-3" aria-label="Footer navigation">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-silver hover:text-gold text-sm transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-gold text-xs uppercase tracking-widest mb-4 font-semibold">
              Get In Touch
            </h4>
            <div className="flex flex-col gap-3 text-sm text-silver">
              <a
                href="mailto:hello@premiumwebservices.co"
                className="hover:text-gold transition-colors duration-300"
              >
                hello@premiumwebservices.co
              </a>
              <a
                href="tel:+15551234567"
                className="hover:text-gold transition-colors duration-300"
              >
                +1 (555) 123-4567
              </a>
              <p>New York, NY</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-obsidian-mid/40 flex flex-col sm:flex-row
                        items-center justify-between gap-4">
          <p className="text-silver/60 text-xs">
            &copy; {currentYear} Premium WebServices & Co. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-silver/60 hover:text-gold text-xs transition-colors duration-300">
              Privacy Policy
            </Link>
            <Link href="#" className="text-silver/60 hover:text-gold text-xs transition-colors duration-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
