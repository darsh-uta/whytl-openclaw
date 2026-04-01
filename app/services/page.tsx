import Link from "next/link";
import Reveal from "@/components/Reveal";
import DomainRow from "@/components/DomainRow";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services — Whytl",
  description:
    "Premium domain names, digital keys, and domain brokering from the Orphilia ecosystem.",
};

const services = [
  {
    title: "Premium Domain Names",
    tagline: "Short. Memorable. Brandable.",
    desc: "Our core offering. We curate a portfolio of hand-selected premium domains — .com, .io, .ai, and beyond. Every name earns its place through brevity, pronounceability, and brand potential.",
    features: [
      "One-word & two-word brandable names",
      "Premium .com, .io, .ai, .co domains",
      "SEO-optimized naming options",
      "Instant availability check on inquiry",
    ],
  },
  {
    title: "Digital Keys",
    tagline: "Access the Orphilia ecosystem.",
    desc: "Digital keys grant exclusive access to services, features, and early-adopter opportunities within the Orphilia digital ecosystem. They're not just credentials — they're membership.",
    features: [
      "Orphilia platform ecosystem access",
      "Exclusive product features",
      "Early-adopter program enrollment",
      "Priority support channel",
    ],
  },
  {
    title: "Domain Brokering",
    tagline: "We find it. You own it.",
    desc: "Can't find the right name in our portfolio? Our brokering service puts our network and expertise to work — sourcing, negotiating, and securing the perfect domain for your brand.",
    features: [
      "Custom domain acquisition search",
      "Marketplace & private owner negotiation",
      "Secure escrow service",
      "End-to-end transfer support",
    ],
  },
];

const domains = [
  { name: "orphilia.com", cat: "Brand", price: "Premium" },
  { name: "keystone.ai", cat: "AI / Tech", price: "Premium" },
  { name: "nexusnow.com", cat: "Brand", price: "$2,500" },
  { name: "cloudvault.io", cat: "SaaS", price: "$1,800" },
  { name: "zenloop.com", cat: "Wellness", price: "$950" },
  { name: "stackflow.io", cat: "Dev Tools", price: "$2,200" },
  { name: "purely.app", cat: "Mobile", price: "$1,200" },
  { name: "bloomia.co", cat: "Brand", price: "$750" },
  { name: "forged.ai", cat: "AI / Tech", price: "$3,500" },
];

const categories = ["All", "Brand", "AI / Tech", "SaaS", "Dev Tools", "Mobile", "Wellness", "Mobile"];

const tiers = [
  {
    name: "Starter",
    price: "From $500",
    desc: "Quality domains for personal projects, side ventures, and early-stage brands. Short, memorable, and priced fairly.",
    cta: "Browse Starter",
    featured: false,
  },
  {
    name: "Growth",
    price: "From $1,500",
    desc: "Premium brandable domains for startups and growing companies. The names that make people remember you.",
    cta: "Browse Growth",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "High-value, ultra-premium domains with full brokering support. For brands that need the best and want a partner to get them there.",
    cta: "Start a Conversation",
    featured: false,
  },
];

export default function ServicesPage() {
  return (
    <div>
      {/* ─── HERO ───────────────────────────────────────── */}
      <section
        style={{
          padding: "96px 0 80px",
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "680px" }}>
            <p
              className="animate-fade-up"
              style={{
                fontSize: "11px",
                fontWeight: 600,
                color: "var(--text-faint)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              <span
                style={{
                  display: "inline-block",
                  width: "24px",
                  height: "1.5px",
                  background: "var(--accent)",
                }}
              />
              Our Services
            </p>

            <h1
              className="animate-fade-up delay-1"
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(40px, 6vw, 80px)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.03em",
                color: "var(--text)",
                marginBottom: "28px",
              }}
            >
              Everything you need for your{" "}
              <em style={{ fontStyle: "italic" }}>digital identity.</em>
            </h1>

            <p
              className="animate-fade-up delay-2"
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "500px",
              }}
            >
              From premium domain names to digital keys and expert brokering —
              we provide the full toolkit for establishing and growing your
              digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ───────────────────────────────────── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div style={{ marginBottom: "56px" }}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--text)",
              }}
            >
              What we offer.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "0",
              borderTop: "1px solid var(--border)",
            }}
          >
            {services.map((service, i) => (
              <Reveal
                key={service.title}
                delay={i * 100}
                style={{
                  padding: "40px 32px 40px 0",
                  borderRight: i < services.length - 1 ? "1px solid var(--border)" : "none",
                  paddingRight: "32px",
                  borderTop: "3px solid transparent",
                  transition: "border-top-color 0.2s ease",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "6px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--accent)",
                      letterSpacing: "0.04em",
                      marginBottom: "20px",
                    }}
                  >
                    {service.tagline}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      marginBottom: "28px",
                    }}
                  >
                    {service.desc}
                  </p>
                  <ul
                    style={{
                      listStyle: "none",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      marginBottom: "32px",
                    }}
                  >
                    {service.features.map((f) => (
                      <li
                        key={f}
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          gap: "10px",
                          fontSize: "14px",
                          color: "var(--text-muted)",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            width: "4px",
                            height: "4px",
                            background: "var(--accent)",
                            borderRadius: "50%",
                            marginTop: "7px",
                            flexShrink: 0,
                          }}
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className="btn-secondary"
                    style={{ fontSize: "14px", padding: "10px 20px" }}
                  >
                    {service.title === "Domain Brokering"
                      ? "Start a Search"
                      : "Learn More"}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 900px) {
            section:nth-of-type(2) .container > div:last-child {
              grid-template-columns: 1fr !important;
              gap: 0 !important;
            }
            section:nth-of-type(2) .container > div:last-child > div {
              border-right: none !important;
              padding-right: 0 !important;
              border-top: none !important;
              border-bottom: 1px solid var(--border) !important;
              padding: 32px 0 !important;
            }
          }
        `}</style>
      </section>

      {/* ─── DOMAIN LISTINGS ─────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg)" }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "40px",
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
                  marginBottom: "10px",
                }}
              >
                Current Inventory
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(28px, 3.5vw, 44px)",
                  fontWeight: 400,
                  letterSpacing: "-0.025em",
                  color: "var(--text)",
                }}
              >
                Available domains.
              </h2>
            </div>
            <p
              style={{
                fontSize: "14px",
                color: "var(--text-muted)",
                maxWidth: "360px",
                textAlign: "right",
              }}
            >
              Contact us for full pricing details and availability. Catalog
              updated weekly.
            </p>
          </div>

          {/* Table */}
          <div
            style={{
              borderTop: "1px solid var(--border-strong)",
            }}
          >
            {/* Header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 140px 140px",
                padding: "14px 0",
                borderBottom: "1px solid var(--border)",
              }}
            >
              {["Domain", "Category", "Price Range"].map((h) => (
                <span
                  key={h}
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--text-faint)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  {h}
                </span>
              ))}
            </div>

            {domains.map((d, i) => (
              <Reveal key={d.name} delay={i * 50}>
                <DomainRow domain={d} />
              </Reveal>
            ))}
          </div>

          <div style={{ marginTop: "40px", textAlign: "left" }}>
            <Link href="/contact" className="btn-primary">
              Request Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* ─── PRICING TIERS ──────────────────────────────── */}
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
                marginBottom: "10px",
              }}
            >
              Pricing
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--text)",
              }}
            >
              Transparent pricing. No surprises.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {tiers.map((tier, i) => (
              <Reveal key={tier.name} delay={i * 80}>
                <div
                  style={{
                    background: tier.featured ? "var(--text)" : "var(--surface)",
                    border: tier.featured ? "none" : "1px solid var(--border)",
                    padding: "40px 32px",
                    position: "relative",
                  }}
                >
                  {tier.featured && (
                    <div
                      style={{
                        position: "absolute",
                        top: "-1px",
                        left: "32px",
                        background: "var(--accent)",
                        padding: "4px 12px",
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "white",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                      }}
                    >
                      Most Common
                    </div>
                  )}
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "13px",
                      fontWeight: 700,
                      color: tier.featured ? "rgba(248,247,244,0.5)" : "var(--accent)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      marginBottom: "12px",
                    }}
                  >
                    {tier.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(28px, 3vw, 40px)",
                      fontWeight: 400,
                      color: tier.featured ? "var(--bg)" : "var(--text)",
                      lineHeight: 1,
                      marginBottom: "20px",
                      letterSpacing: "-0.03em",
                    }}
                  >
                    {tier.price}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: tier.featured
                        ? "rgba(248,247,244,0.55)"
                        : "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: "32px",
                    }}
                  >
                    {tier.desc}
                  </p>
                  <Link
                    href="/contact"
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      background: tier.featured ? "var(--bg)" : "var(--text)",
                      color: tier.featured ? "var(--text)" : "var(--bg)",
                      borderRadius: "3px",
                    }}
                  >
                    {tier.cta}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(4) .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>

      {/* ─── CTA ────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg)",
          borderTop: "1px solid var(--border)",
          padding: "96px 0",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "560px" }}>
            <Reveal direction="left">
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(32px, 4.5vw, 52px)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: "var(--text)",
                    marginBottom: "20px",
                  }}
                >
                  Don&apos;t see what you need?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: "36px",
                  }}
                >
                  Our brokering service can find and acquire virtually any domain.
                  Tell us what you&apos;re looking for and we&apos;ll make it happen.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-primary">
                    Start a Domain Search
                  </Link>
                  <Link href="/contact" className="btn-secondary">
                    Talk to Us
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
