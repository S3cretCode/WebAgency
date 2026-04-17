import ScrollObserver from "@/components/ScrollObserver";
import Button from "@/components/Button";

export const metadata = {
  title: "About | Premium WebServices & Co.",
  description:
    "Learn about Premium WebServices & Co. — our mission, values, and the team behind " +
    "premium digital solutions for growing enterprises.",
};

/**
 * About page — company story, mission, values, and approach.
 */
export default function AboutPage() {
  const values = [
    {
      title: "Excellence First",
      description:
        "We don't cut corners. Every pixel, every line of code, every strategy " +
        "is crafted to the highest standard.",
      icon: "◆",
    },
    {
      title: "Transparent Partnership",
      description:
        "No hidden fees, no jargon walls. We communicate clearly and treat " +
        "your business goals as our own.",
      icon: "◇",
    },
    {
      title: "Results-Driven",
      description:
        "Beautiful design means nothing without measurable impact. Every decision " +
        "is grounded in data and aligned with your KPIs.",
      icon: "○",
    },
  ];

  return (
    <>
      <ScrollObserver />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold
                        animate-fade-in">
            About Us
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory mb-6
                         animate-fade-in-up">
            Built for Businesses <br />
            <span className="text-gold-gradient">That Mean Business</span>
          </h1>
          <p className="text-silver text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in"
             style={{ animationDelay: "0.3s" }}>
            Premium WebServices & Co. was founded on a simple conviction: growing
            enterprises deserve the same caliber of digital infrastructure as
            industry giants — without the enterprise price tag.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold">
              Our Mission
            </p>
            <h2 className="font-heading text-3xl text-ivory mb-6">
              Empowering Growth Through Digital Excellence
            </h2>
            <p className="text-silver leading-relaxed mb-4">
              We partner with moderate-sized businesses — typically 15 to 100
              employees — at the critical inflection point where digital presence
              becomes a growth multiplier, not just a brochure.
            </p>
            <p className="text-silver/70 leading-relaxed">
              Our team combines strategic thinking with technical precision to
              deliver websites, applications, and social strategies that don&apos;t
              just look premium — they perform.
            </p>
          </div>
          {/* Decorative element */}
          <div className="reveal reveal-delay-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl glass-card border border-gold/20
                            flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.06] to-transparent" />
              <span className="text-8xl font-heading text-gold/20 select-none">PW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-obsidian-light/40">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold">
              Our Values
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ivory">
              What We Stand For
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`reveal reveal-delay-${i + 1} glass-card rounded-xl p-8
                           text-center border-t-2 border-t-gold/40
                           hover:border-t-gold transition-all duration-500`}
              >
                <span className="text-gold text-3xl mb-4 block">{value.icon}</span>
                <h3 className="font-heading text-xl text-ivory mb-3">{value.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding text-center">
        <div className="max-w-2xl mx-auto reveal">
          <h2 className="font-heading text-3xl text-ivory mb-6">
            Ready to Elevate Your Digital Presence?
          </h2>
          <p className="text-silver mb-8 leading-relaxed">
            Let&apos;s start with a conversation. No pressure, no commitment —
            just a candid discussion about where your business is and where it
            could be.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button href="/contact" variant="primary">
              Book Consultation
            </Button>
            <Button href="/audit" variant="outline">
              Free Audit
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
