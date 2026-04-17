import ScrollObserver from "@/components/ScrollObserver";
import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact | Premium WebServices & Co.",
  description:
    "Get in touch with Premium WebServices & Co. Book a qualifying consultation " +
    "or inquire about our digital services for your growing enterprise.",
};

/**
 * Contact page — full-page contact form with direct contact info.
 */
export default function ContactPage() {
  return (
    <>
      <ScrollObserver />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold
                        animate-fade-in">
            Contact Us
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory mb-6
                         animate-fade-in-up">
            Let&apos;s Start a <br />
            <span className="text-gold-gradient">Conversation</span>
          </h1>
          <p className="text-silver text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in"
             style={{ animationDelay: "0.3s" }}>
            Whether you&apos;re ready to begin a project or simply exploring
            options, we&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form + Contact Info */}
      <section className="section-padding pt-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-1 reveal">
            <h2 className="font-heading text-2xl text-ivory mb-8">Direct Contact</h2>

            <div className="space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-gold text-xs uppercase tracking-widest mb-2 font-semibold">
                  Email
                </h3>
                <a
                  href="mailto:hello@premiumwebservices.co"
                  className="text-ivory hover:text-gold transition-colors duration-300"
                >
                  hello@premiumwebservices.co
                </a>
              </div>

              {/* Phone */}
              <div>
                <h3 className="text-gold text-xs uppercase tracking-widest mb-2 font-semibold">
                  Phone
                </h3>
                <a
                  href="tel:+15551234567"
                  className="text-ivory hover:text-gold transition-colors duration-300"
                >
                  +1 (555) 123-4567
                </a>
              </div>

              {/* Office */}
              <div>
                <h3 className="text-gold text-xs uppercase tracking-widest mb-2 font-semibold">
                  Office
                </h3>
                <p className="text-silver leading-relaxed">
                  123 Digital Avenue, Suite 400<br />
                  New York, NY 10001
                </p>
              </div>

              {/* Response Time */}
              <div className="glass-card rounded-xl p-6 border border-gold/20">
                <h3 className="text-gold text-xs uppercase tracking-widest mb-2 font-semibold">
                  Response Time
                </h3>
                <p className="text-silver text-sm leading-relaxed">
                  We respond to all inquiries within <strong className="text-ivory">24
                  business hours</strong>. For urgent matters, please call directly.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2 reveal reveal-delay-1">
            <ContactForm variant="full" />
          </div>
        </div>
      </section>
    </>
  );
}
