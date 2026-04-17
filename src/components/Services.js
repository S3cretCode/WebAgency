import Button from "./Button";

/**
 * Services section — two detailed cards for Web Development
 * and Social Media Management. Each card has an icon, title,
 * description, feature list, and a "Learn More" link.
 */
export default function Services() {
  const services = [
    {
      icon: WebDevIcon,
      title: "Web Development",
      href: "/services#web-development",
      description:
        "Custom-built websites and web applications engineered for performance, " +
        "scalability, and conversion. From corporate platforms to e-commerce solutions.",
      features: [
        "Responsive, mobile-first design",
        "Performance-optimized architecture",
        "SEO & accessibility built-in",
        "Custom CMS integration",
        "Ongoing maintenance & support",
      ],
    },
    {
      icon: SocialIcon,
      title: "Social Media Management",
      href: "/services#social-media",
      description:
        "Strategic social presence that builds authority and drives engagement. " +
        "Data-driven content strategies tailored to your industry and audience.",
      features: [
        "Platform strategy & auditing",
        "Content creation & scheduling",
        "Community management",
        "Analytics & performance reports",
        "Paid advertising campaigns",
      ],
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 reveal">
          <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold">
            What We Do
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory mb-6">
            Services Built for <span className="text-gold-gradient">Growth</span>
          </h2>
          <p className="text-silver max-w-2xl mx-auto leading-relaxed">
            Every solution is tailored to your business objectives, ensuring measurable
            impact and sustainable digital growth.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal reveal-delay-${index + 1} group glass-card rounded-xl
                         p-8 md:p-10 border-t-2 border-t-gold/60 hover:border-t-gold
                         transition-all duration-500 hover:shadow-[0_0_40px_rgba(197,160,89,0.08)]
                         hover:-translate-y-1`}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-lg bg-gold/10 flex items-center justify-center mb-6
                            group-hover:bg-gold/20 transition-colors duration-300">
                <service.icon className="w-7 h-7 text-gold" />
              </div>

              {/* Title & Description */}
              <h3 className="font-heading text-2xl text-ivory mb-4">{service.title}</h3>
              <p className="text-silver leading-relaxed mb-6">{service.description}</p>

              {/* Feature List */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm text-silver/80">
                    <span className="text-gold mt-0.5 shrink-0">&#10003;</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Button href={service.href} variant="outline" className="text-xs">
                Learn More
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Service Icons --- */
function WebDevIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <polyline points="8,10 6,12 8,14" />
      <polyline points="16,10 18,12 16,14" />
      <line x1="12" y1="9" x2="12" y2="15" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

function SocialIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <circle cx="9" cy="3" r="1" fill="currentColor" />
      <circle cx="15" cy="5" r="1" fill="currentColor" />
      <path d="M21 12a9 9 0 1 1-18 0" />
      <path d="M3.6 9h16.8" />
      <path d="M12 3c-3.2 3.6-3.2 14.4 0 18" />
      <path d="M12 3c3.2 3.6 3.2 14.4 0 18" />
    </svg>
  );
}
