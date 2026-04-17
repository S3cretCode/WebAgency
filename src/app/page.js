import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import Incentive from "@/components/Incentive";
import ScrollPath from "@/components/ScrollPath";
import ContactForm from "@/components/ContactForm";
import ScrollObserver from "@/components/ScrollObserver";

/**
 * Homepage — scrolling "Executive Summary" that combines all major
 * sections into a single, cohesive narrative.
 */
export default function HomePage() {
  return (
    <>
      {/* Handles scroll-based reveal animations */}
      <ScrollObserver />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Trust Bar */}
      <TrustBar />

      {/* 3. Services Overview */}
      <Services />

      {/* 4. Incentive — Free Audit Highlight */}
      <Incentive />

      {/* 5. Process & Results Timeline */}
      <ScrollPath />

      {/* 6. Contact / Qualification Form */}
      <section id="contact" className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12 reveal">
            <p className="text-gold text-xs uppercase tracking-[0.25em] mb-4 font-semibold">
              Get Started
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl text-ivory mb-6">
              Begin Your <span className="text-gold-gradient">Qualification</span>
            </h2>
            <p className="text-silver max-w-xl mx-auto leading-relaxed">
              Tell us about your business and goals. We&apos;ll evaluate if our
              services are the right fit — and get back to you within 24 hours.
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
