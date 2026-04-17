import Button from "./Button";

/**
 * Hero section — full viewport, minimalist.
 * Headline, subtext, and primary gold CTA.
 * Decorative gold accent elements for visual depth.
 */
export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[800px] h-[800px] rounded-full
                        bg-gradient-radial from-gold/[0.03] to-transparent" />
        {/* Gold accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32
                        bg-gradient-to-b from-transparent via-gold/30 to-transparent" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.05]"
             style={{
               backgroundImage:
                 "linear-gradient(rgba(197,160,89,0.3) 1px, transparent 1px), " +
                 "linear-gradient(90deg, rgba(197,160,89,0.3) 1px, transparent 1px)",
               backgroundSize: "80px 80px",
             }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
        {/* Eyebrow label */}
        <p className="text-gold text-xs uppercase tracking-[0.3em] mb-6 font-semibold
                      animate-fade-in">
          Est. 2026 &mdash; Premium Digital Agency
        </p>

        {/* Main headline */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                       text-ivory leading-[1.1] mb-12 animate-fade-in-up">
          Digital Infrastructure
          <br />
          <span className="text-gold-gradient">for Growing Enterprises.</span>
        </h1>

        {/* Subtext */}
        <p className="text-silver text-base sm:text-lg md:text-xl max-w-2xl mx-auto
                      mb-10 leading-relaxed animate-fade-in"
           style={{ animationDelay: "0.3s" }}>
          Premium Web Design &amp; Social Management — delivering tailored digital
          solutions that elevate your brand and accelerate growth.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4
                        animate-fade-in-up"
             style={{ animationDelay: "0.5s" }}>
          <Button href="/contact" variant="primary">
            Book Qualifying Consultation
          </Button>
          <Button href="/services" variant="outline">
            Explore Services
          </Button>
        </div>

        {/* Scroll indicator — links to qualification form at page bottom */}
        <a
          href="#contact"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col
                     items-center gap-2 animate-fade-in group cursor-pointer"
          style={{ animationDelay: "1s" }}
          aria-label="Scroll to qualification form"
        >
          <span className="text-silver/40 text-xs uppercase tracking-widest group-hover:text-gold/60 transition-colors duration-300">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent group-hover:from-gold/70 transition-all duration-300" />
        </a>
      </div>
    </section>
  );
}
