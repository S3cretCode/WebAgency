"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

/**
 * Sticky header with blur backdrop.
 * Desktop: Logo | Nav Links | Gold "Free Audit" CTA
 * Mobile:  Logo | Hamburger → slide-out nav panel
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* Track scroll position for header transparency */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Lock body scroll when mobile nav is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header
      id="site-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-obsidian/90 header-blur shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Home">
          <Image
            src="/images/logo.png"
            alt="Premium WebServices Logo"
            width={40}
            height={40}
            className="rounded transition-transform duration-300 group-hover:scale-105"
          />
          <span className="text-ivory font-heading text-lg tracking-wide hidden sm:inline">
            Premium <span className="text-gold">WebServices</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-silver hover:text-gold text-sm uppercase tracking-widest
                         transition-colors duration-300 relative after:absolute after:bottom-[-4px]
                         after:left-0 after:w-0 after:h-[1px] after:bg-gold
                         after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button href="/audit" variant="primary" className="text-xs px-5 py-2.5">
            Free Audit
          </Button>
        </div>

        {/* Mobile Hamburger */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden relative z-50 w-8 h-8 flex flex-col justify-center gap-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className={`block h-0.5 w-full bg-ivory transition-all duration-300 ${
            mobileOpen ? "rotate-45 translate-y-2" : ""
          }`} />
          <span className={`block h-0.5 w-full bg-ivory transition-all duration-300 ${
            mobileOpen ? "opacity-0" : ""
          }`} />
          <span className={`block h-0.5 w-full bg-ivory transition-all duration-300 ${
            mobileOpen ? "-rotate-45 -translate-y-2" : ""
          }`} />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        className={`fixed inset-0 bg-obsidian/95 header-blur flex flex-col items-center
                    justify-center gap-8 transition-all duration-500 md:hidden ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-ivory text-2xl font-heading tracking-wide
                       hover:text-gold transition-colors duration-300"
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </Link>
        ))}
        <Button
          href="/audit"
          variant="primary"
          className="mt-4"
          onClick={() => setMobileOpen(false)}
        >
          Free Audit
        </Button>
      </div>
    </header>
  );
}
