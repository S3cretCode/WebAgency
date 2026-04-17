import ScrollObserver from "@/components/ScrollObserver";
import ContactForm from "@/components/ContactForm";
import Button from "@/components/Button";

export const metadata = {
  title: "Free Performance Audit | Premium WebServices & Co.",
  description:
    "Claim your complimentary performance audit. We'll evaluate your website, " +
    "social presence, and digital strategy — then deliver actionable recommendations.",
};

/**
 * Audit landing page — dedicated page for the free audit offering.
 * Includes eligibility info, what's included, and qualification form.
 */
export default function AuditPage() {
  const auditSteps = [
    {
      number: "01",
      title: "Submit Your Details",
      desc: "Fill out the qualification form below with your business information and goals.",
    },
    {
      number: "02",
      title: "Qualification Review",
      desc: "Our team evaluates your submission to ensure our services align with your needs.",
    },
    {
      number: "03",
      title: "Audit Delivery",
      desc: "Qualifying businesses receive a comprehensive audit report within 5 business days.",
    },
  ];

  const auditIncludes = [
    "Website performance & speed analysis",
    "Mobile responsiveness evaluation",
    "SEO health check with keyword insights",
    "Social media presence & engagement review",
    "Competitor benchmarking",
    "Prioritized improvement roadmap",
    "30-minute strategy call to review findings",
  ];

  return (
    <>
      <ScrollObserver />

      {/* Page Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold
                        animate-fade-in">
            Value-First Partnership
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl text-ivory mb-6
                         animate-fade-in-up">
            Complimentary <br />
            <span className="text-gold-gradient">Performance Audit</span>
          </h1>
          <p className="text-silver text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in"
             style={{ animationDelay: "0.3s" }}>
            We believe in proving value before asking for commitment. Qualifying
            businesses receive a thorough evaluation of their digital presence — 
            completely free of charge.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding pt-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-heading text-3xl text-ivory mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditSteps.map((step, i) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${i + 1} text-center`}
              >
                <div className="w-14 h-14 rounded-full bg-gold/10 border border-gold/30
                              flex items-center justify-center mx-auto mb-4">
                  <span className="text-gold font-semibold text-sm">{step.number}</span>
                </div>
                <h3 className="font-heading text-xl text-ivory mb-2">{step.title}</h3>
                <p className="text-silver text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section-padding bg-obsidian-light/40">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            <div className="reveal">
              <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold">
                What&apos;s Included
              </p>
              <h2 className="font-heading text-3xl text-ivory mb-6">
                A Complete Digital Health Check
              </h2>
              <p className="text-silver leading-relaxed">
                This isn&apos;t a generic automated report. Our senior strategists
                manually evaluate every aspect of your digital presence and deliver
                tailored, actionable recommendations.
              </p>
            </div>

            <div className="reveal reveal-delay-1">
              <ul className="space-y-4">
                {auditIncludes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                    <span className="text-ivory/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Note */}
      <section className="py-12 px-6">
        <div className="max-w-3xl mx-auto glass-card rounded-xl p-8 border border-gold/20
                        text-center reveal">
          <h3 className="font-heading text-xl text-ivory mb-3">Eligibility</h3>
          <p className="text-silver text-sm leading-relaxed">
            Our complimentary audits are reserved for established businesses with
            15+ employees and an existing digital presence. This ensures we can
            deliver meaningful, actionable insights for your specific situation.
          </p>
        </div>
      </section>

      {/* Qualification Form */}
      <section className="section-padding pt-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <h2 className="font-heading text-3xl text-ivory mb-4">
              Check If You <span className="text-gold-gradient">Qualify</span>
            </h2>
            <p className="text-silver leading-relaxed">
              Fill out the form below and we&apos;ll review your eligibility
              within 24 business hours.
            </p>
          </div>
          <div className="reveal reveal-delay-1">
            <ContactForm variant="compact" />
          </div>
        </div>
      </section>
    </>
  );
}
