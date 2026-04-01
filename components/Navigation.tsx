"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 100,
      background: "rgba(255,255,255,0.95)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid #EEEEEE",
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <span style={{ fontSize: "28px" }}>🔑</span>
          <span style={{ fontSize: "24px", fontWeight: "800", color: "#222222", letterSpacing: "-0.5px" }}>Whytl</span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "8px" }} className="desktop-nav">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                padding: "8px 16px",
                borderRadius: "21px",
                fontSize: "15px",
                fontWeight: "500",
                color: pathname === link.href ? "#FF5A5F" : "#222222",
                background: pathname === link.href ? "rgba(255,90,95,0.08)" : "transparent",
                transition: "all 0.2s ease",
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <Link href="/contact" className="btn-primary desktop-nav" style={{ padding: "10px 20px", fontSize: "14px" }}>
          Get a Domain
        </Link>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="mobile-menu-btn"
          style={{
            display: "none",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "8px",
          }}
          aria-label="Toggle menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2">
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="8" x2="21" y2="8" />
                <line x1="3" y1="16" x2="21" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={{
          background: "white",
          borderTop: "1px solid #EEEEEE",
          padding: "16px 24px 24px",
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: "block",
                padding: "14px 0",
                fontSize: "18px",
                fontWeight: "500",
                color: pathname === link.href ? "#FF5A5F" : "#222222",
                borderBottom: "1px solid #F0F0F0",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary" style={{ marginTop: "16px", width: "100%", justifyContent: "center" }}>
            Get a Domain
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </header>
  );
}
