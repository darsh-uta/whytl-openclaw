import Link from "next/link";
import Reveal from "@/components/Reveal";

const featuredDomains = [
  {
    name: "orphilia.com",
    tag: "Featured",
    desc: "The anchor of the Orphilia ecosystem. A name that means something.",
    price: "Inquire",
  },
  {
    name: "keystone.ai",
    tag: "Popular",
    desc: "Short, sharp, and built for the AI era. Two syllables, infinite potential.",
    price: "Inquire",
  },
  {
    name: "whytl.io",
    tag: "New",
    desc: "Our house brand. Clean, memorable, ready to own.",
    price: "Inquire",
  },
];

const stats = [
  { num: "500+", label: "Domains in portfolio" },
  { num: "30+", label: "Countries served" },
  { num: "98%", label: "Client satisfaction" },
];

const steps = [
  {
    num: "01",
    title: "Browse the collection",
    desc: "Explore our hand-curated portfolio of premium domain names and digital keys. Every name is selected for brandability, brevity, and lasting value.",
  },
  {
    num: "02",
    title: "Reach out directly",
    desc: "Found something you like — or something you need? Send us a note. We'll respond within 24 hours with availability, pricing, and next steps.",
  },
  {
    num: "03",
    title: "Secure transfer",
    desc: "Once terms are agreed, we handle the transfer end-to-end. Escrow, DNS, and full support — guided by a real person, not a bot.",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* ─── HERO ───────────────────────────────────────── */}
      <section
        style={{
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Decorative background text */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            right: "-2%",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(140px, 22vw, 320px)",
            fontWeight: 400,
            color: "var(--border)",
            lineHeight: 1,
            userSelect: "none",
            letterSpacing: "-0.06em",
            pointerEvents: "none",
          }}
        >
          .com
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "720px" }}>
            {/* Eyebrow — left-aligned, no pill */}
            <div
              className="animate-fade-up"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "32px",
              }}
            >
              <div
                style={{
                  width: "32px",
                  height: "2px",
                  background: "var(--accent)",
                  borderRadius: "1px",
                }}
              />
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  color: "var(--text-muted)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Premium Domain Marketplace
              </span>
            </div>

            {/* Headline */}
            <h1
              className="animate-fade-up delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(52px, 7.5vw, 96px)",
                fontWeight: 400,
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: "var(--text)",
                marginBottom: "32px",
              }}
            >
              My perfect
              <br />
              <em style={{ fontStyle: "italic", color: "var(--accent)" }}>
                domain
              </em>{" "}
              is waiting.
            </h1>

            {/* Sub */}
            <p
              className="animate-fade-up delay-2"
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--text-muted)",
                lineHeight: 1.65,
                maxWidth: "480px",
                marginBottom: "40px",
              }}
            >
              Premium domain names and digital keys from the Orphilia ecosystem.
              Short, memorable, and ready to become the foundation of your brand.
            </p>

            {/* CTAs */}
            <div
              className="animate-fade-up delay-3"
              style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}
            >
              <Link href="/services" className="btn-primary">
                Browse Domains
              </Link>
              <Link href="/contact" className="btn-secondary">
                Talk to Us
              </Link>
            </div>

            {/* Stats row */}
            <div
              className="animate-fade-up delay-4"
              style={{
                display: "flex",
                gap: "40px",
                marginTop: "72px",
                paddingTop: "40px",
                borderTop: "1px solid var(--border)",
                flexWrap: "wrap",
              }}
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(28px, 3.5vw, 40px)",
                      fontWeight: 400,
                      color: "var(--text)",
                      lineHeight: 1,
                      marginBottom: "6px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {s.num}
                  </p>
                  <p
                    style={{
                      fontSize: "13px",
                      color: "var(--text-faint)",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FEATURED DOMAINS ───────────────────────────── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          {/* Section header — left-aligned */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "48px",
              flexWrap: "wrap",
              gap: "16px",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--text-faint)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Curated Selection
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(32px, 4vw, 52px)",
                  fontWeight: 400,
                  letterSpacing: "-0.025em",
                  color: "var(--text)",
                }}
              >
                Featured domains.
              </h2>
            </div>
            <Link
              href="/services"
              className="link-accent"
              style={{
                fontSize: "14px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "6px",
              }}
            >
              View all domains
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 7h10M8 3l4 4-4 4" />
              </svg>
            </Link>
          </div>

          {/* Domain list — not cards inside cards */}
          <div>
            {featuredDomains.map((domain, i) => (
              <Reveal key={domain.name} delay={i * 80}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr auto",
                    alignItems: "center",
                    padding: "28px 0",
                    borderBottom:
                      i === featuredDomains.length - 1
                        ? "none"
                        : "1px solid var(--border)",
                    gap: "24px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        marginBottom: "8px",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "clamp(20px, 2.5vw, 28px)",
                          fontWeight: 600,
                          color: "var(--text)",
                          letterSpacing: "-0.02em",
                        }}
                      >
                        {domain.name}
                      </h3>
                      <span
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color:
                            domain.tag === "Featured"
                              ? "var(--accent)"
                              : domain.tag === "Popular"
                              ? "#00A67E"
                              : "var(--text-faint)",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          padding: "3px 8px",
                          border: `1px solid ${
                            domain.tag === "Featured"
                              ? "var(--accent)"
                              : domain.tag === "Popular"
                              ? "#00A67E"
                              : "var(--border)"
                          }`,
                          borderRadius: "2px",
                        }}
                      >
                        {domain.tag}
                      </span>
                    </div>
                    <p
                      style={{
                        fontSize: "15px",
                        color: "var(--text-muted)",
                        maxWidth: "460px",
                      }}
                    >
                      {domain.desc}
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "24px",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "16px",
                        fontWeight: 600,
                        color: "var(--accent)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {domain.price}
                    </span>
                    <Link
                      href="/contact"
                      className="btn-secondary"
                      style={{ fontSize: "14px", padding: "10px 18px" }}
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── WHY WHYTL ──────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Left: Statement */}
            <Reveal direction="left">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--text-faint)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  Why Whytl
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: "var(--text)",
                    marginBottom: "28px",
                  }}
                >
                  Built on trust.
                  <br />
                  <em style={{ fontStyle: "italic" }}>
                    Designed for builders.
                  </em>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    marginBottom: "20px",
                  }}
                >
                  We started Whytl because the domain market was broken — full of
                  opaque pricing, impersonal brokerages, and transfers that felt
                  like a leap of faith.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text-muted)",
                    lineHeight: 1.75,
                    marginBottom: "36px",
                  }}
                >
                  Whytl is different. Every domain in our portfolio is hand-selected.
                  Every transfer is handled by a human who cares. And every price is
                  fair and transparent.
                </p>
                <Link href="/about" className="btn-secondary">
                  Our story
                </Link>
              </div>
            </Reveal>

            {/* Right: Value list */}
            <Reveal delay={120}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "0",
                  borderTop: "1px solid var(--border)",
                }}
              >
                {[
                  {
                    title: "Curated, not collected",
                    desc: "We list domains we believe in. No inflated portfolios, no dead weight.",
                  },
                  {
                    title: "Human-first transfers",
                    desc: "Every transfer is personally overseen. No automated emails, no black boxes.",
                  },
                  {
                    title: "Orphilia ecosystem",
                    desc: "Backed by the infrastructure and reputation of the Orphilia platform.",
                  },
                  {
                    title: "Fair, transparent pricing",
                    desc: "No hidden fees. No games. The price you see is the price you pay.",
                  },
                ].map((item, i) => (
                  <div
                    key={item.title}
                    style={{
                      padding: "24px 0",
                      borderBottom: "1px solid var(--border)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        gap: "16px",
                        alignItems: "flex-start",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "11px",
                          color: "var(--text-faint)",
                          marginTop: "4px",
                          flexShrink: 0,
                        }}
                      >
                        0{i + 1}
                      </span>
                      <div>
                        <h3
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: "16px",
                            fontWeight: 600,
                            color: "var(--text)",
                            marginBottom: "6px",
                            letterSpacing: "-0.01em",
                          }}
                        >
                          {item.title}
                        </h3>
                        <p
                          style={{
                            fontSize: "14px",
                            color: "var(--text-muted)",
                            lineHeight: 1.65,
                          }}
                        >
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(3) .container > div {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>
      </section>

      {/* ─── HOW IT WORKS ───────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-alt)" }}>
        <div className="container">
          <div style={{ marginBottom: "56px" }}>
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--text-faint)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "12px",
              }}
            >
              Process
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--text)",
              }}
            >
              Three steps to your domain.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "48px",
            }}
          >
            {steps.map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "56px",
                      fontWeight: 400,
                      color: "var(--border-strong)",
                      lineHeight: 1,
                      marginBottom: "20px",
                      letterSpacing: "-0.04em",
                    }}
                  >
                    {step.num}
                  </p>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: "12px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                    }}
                  >
                    {step.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(4) .container > div:last-child {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* ─── ORPHILIA BANNER ────────────────────────────── */}
      <section
        style={{
          background: "var(--text)",
          padding: "80px 0",
          overflow: "hidden",
          position: "relative",
        }}
      >
        {/* Large background text */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-3%",
            top: "50%",
            transform: "translateY(-50%)",
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(100px, 18vw, 240px)",
            fontWeight: 400,
            color: "rgba(248,247,244,0.04)",
            lineHeight: 1,
            letterSpacing: "-0.06em",
            pointerEvents: "none",
            userSelect: "none",
          }}
        >
          Orphilia
        </div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.2fr 1fr",
              gap: "80px",
              alignItems: "center",
            }}
          >
            <Reveal direction="left">
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "rgba(248,247,244,0.35)",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                  }}
                >
                  The Ecosystem
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(32px, 4vw, 52px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: "var(--bg)",
                    marginBottom: "24px",
                  }}
                >
                  Part of something{" "}
                  <em style={{ fontStyle: "italic" }}>bigger.</em>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(248,247,244,0.55)",
                    lineHeight: 1.75,
                    marginBottom: "36px",
                    maxWidth: "420px",
                  }}
                >
                  Whytl sits within the Orphilia digital ecosystem — a suite of
                  tools and services for builders, creators, and entrepreneurs.
                  From domain names to digital keys, Orphilia powers the
                  infrastructure of tomorrow&apos;s internet.
                </p>
                <a
                  href="https://orphilia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{
                    background: "var(--bg)",
                    color: "var(--text)",
                    borderRadius: "3px",
                  }}
                >
                  Explore Orphilia
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path d="M2 7h10M8 3l4 4-4 4" />
                  </svg>
                </a>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div
                style={{
                  borderLeft: "1px solid rgba(248,247,244,0.1)",
                  paddingLeft: "48px",
                }}
              >
                {[
                  { label: "Digital Identity", desc: "Premium domains and keys" },
                  { label: "Ecosystem Access", desc: "Cross-platform integration" },
                  { label: "Security", desc: "Escrow and transfer protection" },
                  { label: "Support", desc: "Human-led, 24/7 available" },
                ].map((item) => (
                  <div
                    key={item.label}
                    style={{
                      padding: "20px 0",
                      borderBottom: "1px solid rgba(248,247,244,0.08)",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: "var(--bg)",
                        marginBottom: "4px",
                      }}
                    >
                      {item.label}
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "rgba(248,247,244,0.4)",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(5) .container > div {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
            section:nth-of-type(5) .container > div > div:last-child {
              borderLeft: none !important;
              paddingLeft: 0 !important;
            }
          }
        `}</style>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          padding: "100px 0",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr auto",
              alignItems: "center",
              gap: "48px",
              flexWrap: "wrap",
            }}
          >
            <Reveal direction="left">
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(32px, 4.5vw, 56px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: "var(--text)",
                    marginBottom: "16px",
                  }}
                >
                  Ready to find your domain?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text-muted)",
                    maxWidth: "460px",
                  }}
                >
                  Browse our collection or reach out. No pressure, no
                  hard sell — just a conversation.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/services" className="btn-primary">
                  Browse Domains
                </Link>
                <Link href="/contact" className="btn-secondary">
                  Get in Touch
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
