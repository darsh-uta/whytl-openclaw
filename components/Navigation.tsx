"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled ? "rgba(248,247,244,0.96)" : "var(--bg)",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "border-color 0.3s ease, background 0.3s ease",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "68px",
          }}
        >
          {/* Logo */}
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              flexShrink: 0,
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="22" height="22" rx="4" fill="#1A1A1E"/>
              <path d="M7 11C7 9.34315 8.34315 8 10 8V8C11.6569 8 13 9.34315 13 11V14H10C8.34315 14 7 12.6569 7 11V11Z" fill="#F8F7F4"/>
              <rect x="7" y="14" width="6" height="2" rx="1" fill="#E5484D"/>
            </svg>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "22px",
                fontWeight: 400,
                color: "var(--text)",
                letterSpacing: "-0.03em",
              }}
            >
              Whytl
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav
            className="desktop-nav"
            style={{ display: "flex", alignItems: "center", gap: "2px" }}
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    padding: "6px 14px",
                    fontSize: "14.5px",
                    fontWeight: isActive ? 600 : 400,
                    color: isActive ? "var(--text)" : "var(--text-muted)",
                    borderBottom: isActive ? "2px solid var(--accent)" : "2px solid transparent",
                    transition: "color 0.18s ease, border-color 0.18s ease",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.4,
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* CTA */}
          <Link
            href="/contact"
            className="btn-primary desktop-nav"
            style={{
              padding: "10px 20px",
              fontSize: "14px",
              borderRadius: "3px",
            }}
          >
            Get a Domain
          </Link>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="mobile-menu-btn"
            style={{
              display: "none",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "8px",
              color: "var(--text)",
            }}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="3" y1="3" x2="17" y2="17" />
                <line x1="17" y1="3" x2="3" y2="17" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8">
                <line x1="2" y1="6" x2="18" y2="6" />
                <line x1="2" y1="14" x2="18" y2="14" />
              </svg>
            )}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            top: "68px",
            background: "var(--bg)",
            zIndex: 99,
            padding: "24px 24px 40px",
            display: "flex",
            flexDirection: "column",
            gap: "4px",
            borderTop: "1px solid var(--border)",
            animation: "fadeIn 0.2s ease",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  display: "block",
                  padding: "14px 0",
                  fontSize: "20px",
                  fontFamily: "var(--font-serif)",
                  fontWeight: 400,
                  color: isActive ? "var(--accent)" : "var(--text)",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
          <div style={{ marginTop: "24px" }}>
            <Link href="/contact" className="btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Get a Domain
            </Link>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; }
        }
      `}</style>
    </>
  );
}
