/**
 * Trust bar — horizontal strip of monochrome partner logos.
 * Uses CSS marquee animation for infinite scroll effect.
 * Logos are placeholder SVG icons rendered inline.
 */
export default function TrustBar() {
  /* Placeholder partner data */
  const partners = [
    { name: "Vertex Corp", icon: VertexIcon },
    { name: "Stratos Inc", icon: StratosIcon },
    { name: "Pinnacle Group", icon: PinnacleIcon },
    { name: "Meridian Co", icon: MeridianIcon },
    { name: "Atlas Digital", icon: AtlasIcon },
  ];

  /* Triple logos for seamless infinite scroll (fills the gap on wide screens) */
  const allPartners = [...partners, ...partners, ...partners];

  return (
    <section id="trust-bar" className="py-12 border-y border-obsidian-mid/30 overflow-hidden">
      <p className="text-center text-silver/50 text-xs uppercase tracking-[0.25em] mb-8">
        Trusted By Industry Leaders
      </p>

      {/* Dual-track marquee — two identical strips for gapless looping */}
      <div className="relative flex overflow-hidden">
        <div className="flex items-center gap-16 animate-marquee shrink-0">
          {allPartners.map((partner, i) => (
            <div
              key={`a-${partner.name}-${i}`}
              className="flex items-center gap-3 opacity-30 hover:opacity-60
                         transition-opacity duration-300 shrink-0"
            >
              <partner.icon className="w-8 h-8 text-silver" />
              <span className="text-silver text-sm font-body tracking-wide whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
        {/* Second identical strip immediately after the first */}
        <div className="flex items-center gap-16 animate-marquee shrink-0" aria-hidden="true">
          {allPartners.map((partner, i) => (
            <div
              key={`b-${partner.name}-${i}`}
              className="flex items-center gap-3 opacity-30 hover:opacity-60
                         transition-opacity duration-300 shrink-0"
            >
              <partner.icon className="w-8 h-8 text-silver" />
              <span className="text-silver text-sm font-body tracking-wide whitespace-nowrap">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --- Placeholder SVG Icons --- */
function VertexIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polygon points="16,2 30,28 2,28" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

function StratosIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="4" width="24" height="24" rx="4" stroke="currentColor" strokeWidth="2" />
      <line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function PinnacleIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function MeridianIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 28L16 4L28 28" stroke="currentColor" strokeWidth="2" fill="none" />
      <line x1="10" y1="18" x2="22" y2="18" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function AtlasIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="16" cy="16" rx="6" ry="12" stroke="currentColor" strokeWidth="1.5" />
      <line x1="4" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}
