import Button from "./Button";

/**
 * Incentive section — highlights the "Complimentary Performance Audit"
 * as a value-first partnership offering. Clean design with generous
 * whitespace to let the gold accents breathe.
 */
export default function Incentive() {
  const auditIncludes = [
    "Full website performance analysis",
    "SEO health check & recommendations",
    "Social media presence evaluation",
    "Competitor landscape overview",
    "Actionable improvement roadmap",
  ];

  return (
    <section id="incentive" className="section-padding">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold">
            Value-First Partnership
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory mb-6">
            Complimentary <span className="text-gold-gradient">Performance Audit</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto leading-relaxed">
            We believe in earning trust before earning business. Qualifying
            enterprises receive a comprehensive, no-obligation audit of their
            digital presence.
          </p>
        </div>

        {/* Audit Card */}
        <div className="reveal reveal-delay-1 glass-card rounded-2xl p-8 md:p-12
                        border border-gold/20 relative overflow-hidden">
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl
                          from-gold/[0.06] to-transparent" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr
                          from-gold/[0.04] to-transparent" aria-hidden="true" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            {/* Left — Description */}
            <div>
              <h3 className="font-heading text-2xl text-ivory mb-4">
                What You&apos;ll Receive
              </h3>
              <p className="text-silver leading-relaxed mb-6">
                Our team conducts a thorough evaluation of your website, social
                channels, and digital strategy — then delivers a detailed report
                with prioritized recommendations.
              </p>
              <p className="text-silver/70 text-sm leading-relaxed">
                This isn&apos;t a generic template. Every audit is performed manually
                by our senior strategists and tailored to your industry, goals,
                and competitive landscape.
              </p>
            </div>

            {/* Right — Audit Items + CTA */}
            <div>
              <ul className="space-y-4 mb-8">
                {auditIncludes.map((item, i) => (
                  <li key={item} className="flex items-center gap-4">
                    <span className="w-8 h-8 rounded-full bg-gold/10 flex items-center
                                     justify-center text-gold text-sm font-semibold shrink-0">
                      {i + 1}
                    </span>
                    <span className="text-ivory/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <Button href="/audit" variant="primary">
                Check If You Qualify
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
