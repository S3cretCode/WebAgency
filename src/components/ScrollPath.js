/**
 * ScrollPath — vertical timeline showing the agency's process.
 * 4 steps: Discovery → Strategy → Execution → Results.
 * Gold connector line with numbered steps that animate on scroll.
 */
export default function ScrollPath() {
  const steps = [
    {
      number: "01",
      title: "Discovery",
      description:
        "We begin with a deep dive into your business — understanding your goals, " +
        "audience, competitive landscape, and current digital footprint.",
    },
    {
      number: "02",
      title: "Strategy",
      description:
        "Our team crafts a tailored roadmap with clear milestones, KPIs, and " +
        "deliverables aligned to your growth objectives.",
    },
    {
      number: "03",
      title: "Execution",
      description:
        "Designs are built, content is created, and systems are deployed with " +
        "precision — on time and to spec, every time.",
    },
    {
      number: "04",
      title: "Results",
      description:
        "We monitor performance, optimize continuously, and deliver transparent " +
        "reporting so you always know your ROI.",
    },
  ];

  return (
    <section id="scroll-path" className="section-padding bg-obsidian-light/40">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 reveal">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold">
            Our Process
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory mb-6">
            From Vision <span className="text-gold-gradient">to Results</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto leading-relaxed">
            A proven, structured approach that transforms business goals into
            measurable digital outcomes.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical gold line */}
          <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0
                          w-px bg-gradient-to-b from-gold/40 via-gold/20 to-transparent"
               aria-hidden="true" />

          {/* Steps */}
          <div className="space-y-16 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`reveal reveal-delay-${index + 1} relative flex flex-col
                           md:flex-row md:items-center gap-8
                           ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
              >
                {/* Step Number Badge */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-12 h-12 rounded-full bg-obsidian border-2 border-gold/60
                                  flex items-center justify-center">
                    <span className="text-gold text-sm font-semibold font-body">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`ml-20 md:ml-0 md:w-[calc(50%-3rem)]
                                ${index % 2 === 0 ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                  <h3 className="font-heading text-2xl text-ivory mb-3">{step.title}</h3>
                  <p className="text-silver leading-relaxed text-sm">{step.description}</p>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-[calc(50%-3rem)]" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
