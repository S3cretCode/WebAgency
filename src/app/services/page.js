import ScrollObserver from "@/components/ScrollObserver";
import Button from "@/components/Button";

export const metadata = {
  title: "Services | Premium WebServices & Co.",
  description:
    "Explore our premium web development and social media management services. " +
    "Custom solutions designed for growing enterprises.",
};

/**
 * Services page — expanded descriptions of Web Development
 * and Social Media Management, plus pricing philosophy and CTA.
 */
export default function ServicesPage() {
  const webDevFeatures = [
    {
      title: "Custom Design & Development",
      desc: "Bespoke websites built from scratch — no templates, no compromises. Every element is designed to reflect your brand identity.",
    },
    {
      title: "E-Commerce Solutions",
      desc: "Conversion-optimized storefronts with secure payment processing, inventory management, and customer analytics.",
    },
    {
      title: "Performance Engineering",
      desc: "Lightning-fast load times, Core Web Vitals optimization, and infrastructure that scales with your growth.",
    },
    {
      title: "SEO & Accessibility",
      desc: "Built-in search engine optimization and WCAG compliance so your site reaches and serves every potential customer.",
    },
    {
      title: "Ongoing Support",
      desc: "Dedicated maintenance plans with priority response times, security monitoring, and regular performance audits.",
    },
  ];

  const socialFeatures = [
    {
      title: "Strategy & Auditing",
      desc: "Comprehensive analysis of your current social presence with a data-driven strategy for audience growth and engagement.",
    },
    {
      title: "Content Creation",
      desc: "Professional content tailored to each platform — from copywriting and graphics to video production and stories.",
    },
    {
      title: "Community Management",
      desc: "Active engagement with your audience, reputation monitoring, and crisis management protocols.",
    },
    {
      title: "Paid Advertising",
      desc: "Targeted ad campaigns across Meta, LinkedIn, and Google with transparent reporting and continuous optimization.",
    },
    {
      title: "Analytics & Reporting",
      desc: "Monthly performance reports with actionable insights, ROI tracking, and strategy recommendations.",
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
            Our Services
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory mb-6
                         animate-fade-in-up">
            Solutions Engineered <br />
            <span className="text-gold-gradient">for Impact</span>
          </h1>
          <p className="text-silver text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in"
             style={{ animationDelay: "0.3s" }}>
            Every engagement is custom-scoped to your business objectives. No
            cookie-cutter packages — just precision-crafted digital solutions.
          </p>
        </div>
      </section>

      {/* Web Development */}
      <section id="web-development" className="section-padding scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-12">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3 font-semibold">
              Service 01
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ivory mb-4">
              Web Development
            </h2>
            <p className="text-silver max-w-3xl leading-relaxed">
              From corporate websites to complex web applications, we build
              digital experiences that are beautiful, fast, and built to convert.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {webDevFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${(i % 4) + 1} glass-card rounded-xl p-6
                           border-l-2 border-l-gold/40 hover:border-l-gold
                           transition-all duration-500`}
              >
                <h3 className="font-heading text-lg text-ivory mb-2">{feature.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-xs mx-auto border-t border-obsidian-mid/40" />

      {/* Social Media Management */}
      <section id="social-media" className="section-padding scroll-mt-24">
        <div className="max-w-5xl mx-auto">
          <div className="reveal mb-12">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-3 font-semibold">
              Service 02
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl text-ivory mb-4">
              Social Media Management
            </h2>
            <p className="text-silver max-w-3xl leading-relaxed">
              Strategic social presence that builds authority, drives engagement,
              and converts followers into customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialFeatures.map((feature, i) => (
              <div
                key={feature.title}
                className={`reveal reveal-delay-${(i % 4) + 1} glass-card rounded-xl p-6
                           border-l-2 border-l-gold/40 hover:border-l-gold
                           transition-all duration-500`}
              >
                <h3 className="font-heading text-lg text-ivory mb-2">{feature.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Philosophy */}
      <section className="section-padding bg-obsidian-light/40">
        <div className="max-w-3xl mx-auto text-center reveal">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold">
            Investment
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl text-ivory mb-6">
            Custom Solutions, Transparent Pricing
          </h2>
          <p className="text-silver leading-relaxed mb-4">
            We don&apos;t believe in one-size-fits-all pricing. Every project is
            scoped individually based on your specific requirements, timeline,
            and business goals.
          </p>
          <p className="text-silver/70 leading-relaxed mb-8">
            After an initial consultation, you&apos;ll receive a detailed proposal
            with transparent line items — no surprises, no hidden fees.
          </p>
          <Button href="/contact" variant="primary">
            Request a Proposal
          </Button>
        </div>
      </section>
    </>
  );
}
