"use client";

import Link from "next/link";

/**
 * Reusable button component with two variants:
 * - "primary" → Gold filled button with shimmer hover
 * - "outline" → Gold-bordered transparent button
 */
export default function Button({
  children,
  href,
  variant = "primary",
  type = "button",
  className = "",
  onClick,
  disabled = false,
}) {
  const base =
    "inline-flex items-center justify-center font-body font-semibold tracking-wide " +
    "rounded px-7 py-3.5 text-sm uppercase transition-all duration-300 " +
    "focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 " +
    "focus-visible:ring-offset-obsidian disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "btn-shimmer text-obsidian hover:shadow-[0_0_40px_rgba(197,160,89,0.4)] " +
      "hover:scale-[1.04] active:scale-[0.97]",
    outline:
      "border-2 border-gold text-gold hover:bg-gold/10 hover:text-gold-light " +
      "hover:shadow-[0_0_30px_rgba(197,160,89,0.25)] hover:scale-[1.04] active:scale-[0.97]",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  /* Render as a link if href is provided */
  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
