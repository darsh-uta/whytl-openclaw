import Link from "next/link";
import Reveal from "@/components/Reveal";

const team = [
  {
    name: "Darshan U",
    role: "Founder & CEO",
    bio: "Visionary builder connecting the Orphilia ecosystem to the world of digital identity. Obsessed with the perfect name.",
    initials: "DU",
  },
  {
    name: "Aiko Tanaka",
    role: "Head of Domain Strategy",
    bio: "A decade in digital assets. She knows what makes a domain name stick, and what makes it worth paying for.",
    initials: "AT",
  },
  {
    name: "Liam O'Brien",
    role: "Chief Technology Officer",
    bio: "Full-stack engineer and security specialist. He's the reason every transfer is seamless and every transaction is safe.",
    initials: "LO",
  },
];

const values = [
  {
    title: "Quality, not quantity",
    desc: "We have 500+ domains. Every one was chosen deliberately. We'd rather have 500 great names than 50,000 mediocre ones.",
  },
  {
    title: "Radical transparency",
    desc: "Pricing, transfer timelines, process — we share it all upfront. No surprises, no hidden steps.",
  },
  {
    title: "Human at every step",
    desc: "Behind every domain in our portfolio is a person who will answer your email, take your call, and see the transfer through.",
  },
  {
    title: "Built to last",
    desc: "We're not optimizing for a quick flip. Whytl and Orphilia are infrastructure — designed to serve builders for decades.",
  },
];

export default function AboutPage() {
  return (
    <div>
      {/* HERO */}
      <section
        style={{
          padding: "96px 0 80px",
          background: "var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container">
          <div style={{ maxWidth: "720px" }}>
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
              About Whytl
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
              We believe your
              <br />
              <em style={{ fontStyle: "italic" }}>domain name</em>
              <br />
              is your identity.
            </h1>

            <p
              className="animate-fade-up delay-2"
              style={{
                fontSize: "clamp(16px, 2vw, 19px)",
                color: "var(--text-muted)",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              Whytl is a premium domain marketplace built within the Orphilia
              digital ecosystem. We exist because finding the right domain
              shouldn&apos;t be hard — and the current market makes it harder
              than it needs to be.
            </p>
          </div>
        </div>
      </section>

      {/* STATS / STORY */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
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
                  Our Story
                </p>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                    color: "var(--text)",
                    marginBottom: "24px",
                  }}
                >
                  Built because the
                  <br />
                  alternatives failed us.
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  We started Whytl after spending months trying to buy a domain
                  through existing marketplaces. The prices were opaque, the
                  brokers unresponsive, and the transfer processes felt like
                  jumping through hoops designed by people who&apos;d never
                  actually used them.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                    marginBottom: "20px",
                  }}
                >
                  We thought: there has to be a better way. So we built it.
                  Whytl is the domain marketplace we wished existed — curated,
                  transparent, and human-first.
                </p>
                <p
                  style={{
                    fontSize: "16px",
                    color: "var(--text-muted)",
                    lineHeight: 1.8,
                  }}
                >
                  Today, we manage 500+ premium domains and serve customers
                  across 30+ countries. Every day, we help founders find the
                  digital identity that&apos;s going to represent them for the
                  next decade.
                </p>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div
                style={{
                  background: "var(--bg)",
                  border: "1px solid var(--border)",
                  padding: "48px",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "40px 24px",
                  }}
                >
                  {[
                    { num: "500+", label: "Domains listed" },
                    { num: "30+", label: "Countries served" },
                    { num: "98%", label: "Satisfaction rate" },
                    { num: "24/7", label: "Support available" },
                  ].map((stat) => (
                    <div key={stat.label}>
                      <p
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(36px, 4vw, 52px)",
                          fontWeight: 400,
                          color: "var(--text)",
                          lineHeight: 1,
                          marginBottom: "8px",
                          letterSpacing: "-0.03em",
                        }}
                      >
                        {stat.num}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--text-faint)",
                          letterSpacing: "0.02em",
                        }}
                      >
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(2) .container > div {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
          }
        `}</style>
      </section>

      {/* VALUES */}
      <section className="section" style={{ background: "var(--bg)" }}>
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
              What we stand for
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--text)",
                maxWidth: "480px",
              }}
            >
              Principles we don&apos;t negotiate on.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "0",
              borderTop: "1px solid var(--border)",
            }}
          >
            {values.map((v, i) => (
              <Reveal
                key={v.title}
                delay={i * 80}
                style={{
                  padding: "36px 48px 36px 0",
                  borderBottom: "1px solid var(--border)",
                }}
              >
                <div>
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
                    {v.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-muted)",
                      lineHeight: 1.75,
                      maxWidth: "400px",
                    }}
                  >
                    {v.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            section:nth-of-type(3) .container > div:last-child {
              grid-template-columns: 1fr !important;
            }
            section:nth-of-type(3) .container > div:last-child > div {
              padding-right: 0 !important;
            }
          }
        `}</style>
      </section>

      {/* TEAM */}
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
              The people
            </p>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(30px, 4vw, 48px)",
                fontWeight: 400,
                letterSpacing: "-0.025em",
                color: "var(--text)",
              }}
            >
              Small team. Big standards.
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "48px",
            }}
          >
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div>
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      background: "var(--text)",
                      borderRadius: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "24px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: "18px",
                        fontWeight: 700,
                        color: "var(--bg)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {member.initials}
                    </span>
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "var(--text)",
                      marginBottom: "4px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {member.name}
                  </h3>
                  <p
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: "var(--accent)",
                      letterSpacing: "0.01em",
                      marginBottom: "14px",
                    }}
                  >
                    {member.role}
                  </p>
                  <p
                    style={{
                      fontSize: "15px",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                    }}
                  >
                    {member.bio}
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

      {/* ORPHILIA BANNER */}
      <section
        style={{
          background: "var(--text)",
          padding: "80px 0",
          overflow: "hidden",
          position: "relative",
        }}
      >
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
              gridTemplateColumns: "1.4fr 1fr",
              gap: "64px",
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
                    fontSize: "clamp(28px, 3.5vw, 44px)",
                    fontWeight: 400,
                    lineHeight: 1.15,
                    letterSpacing: "-0.025em",
                    color: "var(--bg)",
                    marginBottom: "20px",
                  }}
                >
                  Whytl lives inside
                  <br />
                  <em style={{ fontStyle: "italic" }}>Orphilia.</em>
                </h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "rgba(248,247,244,0.5)",
                    lineHeight: 1.75,
                    marginBottom: "36px",
                    maxWidth: "440px",
                  }}
                >
                  Orphilia is a broader digital ecosystem providing tools for
                  builders, creators, and entrepreneurs. Whytl is its domain
                  and digital identity vertical — bringing the same values of
                  quality and transparency to the domain market.
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

            <Reveal delay={120}>
              <div
                style={{
                  borderLeft: "1px solid rgba(248,247,244,0.1)",
                  paddingLeft: "48px",
                }}
              >
                {[
                  "Digital Identity",
                  "Domain Names",
                  "Digital Keys",
                  "Ecosystem Access",
                  "Secure Transfers",
                ].map((item) => (
                  <div
                    key={item}
                    style={{
                      padding: "16px 0",
                      borderBottom: "1px solid rgba(248,247,244,0.08)",
                    }}
                  >
                    <p
                      style={{
                        fontSize: "15px",
                        color: "rgba(248,247,244,0.6)",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "4px",
                          height: "4px",
                          background: "var(--accent)",
                          borderRadius: "50%",
                          flexShrink: 0,
                        }}
                      />
                      {item}
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
              border-left: none !important;
              padding-left: 0 !important;
            }
          }
        `}</style>
      </section>

      {/* CONTACT CTA */}
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
                  Want to talk domain strategy?
                </h2>
                <p
                  style={{
                    fontSize: "17px",
                    color: "var(--text-muted)",
                    lineHeight: 1.7,
                    marginBottom: "36px",
                  }}
                >
                  Whether you&apos;re a first-time founder or closing a
                  six-figure domain acquisition, we&apos;re happy to chat. No
                  obligation, no hard sell.
                </p>
                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn-primary">
                    Get in Touch
                  </Link>
                  <Link href="/services" className="btn-secondary">
                    View Domains
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
