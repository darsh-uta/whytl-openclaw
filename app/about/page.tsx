import Link from "next/link";

const team = [
  {
    name: "Darshan U",
    role: "Founder & CEO",
    bio: "Visionary entrepreneur building the future of digital identity through the Orphilia ecosystem.",
    initials: "DU",
    color: "#FF5A5F",
  },
  {
    name: "Aiko Tanaka",
    role: "Head of Domain Strategy",
    bio: "Expert in brand naming and domain acquisition with 10+ years in the digital assets space.",
    initials: "AT",
    color: "#00A699",
  },
  {
    name: "Liam O'Brien",
    role: "Chief Technology Officer",
    bio: "Full-stack engineer and security specialist ensuring safe, seamless domain transfers worldwide.",
    initials: "LO",
    color: "#FF8C00",
  },
];

const values = [
  { icon: "🤝", title: "Trust & Transparency", desc: "Every transaction is handled with full transparency. No hidden fees, no surprises." },
  { icon: "💎", title: "Quality Over Quantity", desc: "We curate our domain collection carefully — every domain earns its place in our portfolio." },
  { icon: "🌍", title: "Global Perspective", desc: "We serve founders and businesses from every corner of the world with 24/7 support." },
  { icon: "🔒", title: "Security First", desc: "All transfers are secured with industry-leading protocols and escrow services." },
];

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section style={{
        padding: "100px 0 80px",
        background: "linear-gradient(180deg, #F7F7F7 0%, #FFFFFF 100%)",
      }}>
        <div className="container" style={{ maxWidth: "720px", textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(0,166,153,0.1)",
            color: "#00A699",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "24px",
          }}>
            🏢 About Whytl
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: "800",
            color: "#222222",
            lineHeight: "1.15",
            marginBottom: "24px",
            letterSpacing: "-1.5px",
          }}>
            Building the bridge between<br />ideas and digital identity.
          </h1>
          <p style={{
            fontSize: "20px",
            color: "#717171",
            lineHeight: "1.6",
          }}>
            Whytl is a premium domain marketplace powered by the Orphilia ecosystem. We help founders, creators, and businesses find their perfect digital home — one domain at a time.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "center",
          }}>
            <div>
              <h2 className="section-title">Our Story</h2>
              <p style={{ fontSize: "16px", color: "#717171", lineHeight: "1.8", marginBottom: "20px" }}>
                Whytl was born from a simple observation: finding the right domain name is hard, and most marketplaces make it even harder. Domains are often overpriced, poorly curated, or tied up in complicated brokerages.
              </p>
              <p style={{ fontSize: "16px", color: "#717171", lineHeight: "1.8", marginBottom: "20px" }}>
                Founded as part of the <strong style={{ color: "#00A699" }}>Orphilia</strong> digital ecosystem, we set out to create something better — a curated marketplace where every domain is hand-selected, fairly priced, and transferred with care.
              </p>
              <p style={{ fontSize: "16px", color: "#717171", lineHeight: "1.8" }}>
                Today, Whytl is home to hundreds of premium domain names and serves customers across 30+ countries. We're just getting started.
              </p>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #FFF9F5 0%, #F0FFF9 100%)",
              borderRadius: "24px",
              padding: "48px",
              textAlign: "center",
              border: "1px solid #EEE",
            }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }}>
                {[
                  { num: "500+", label: "Domains Listed" },
                  { num: "30+", label: "Countries Served" },
                  { num: "98%", label: "Satisfaction Rate" },
                  { num: "24/7", label: "Support Available" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p style={{ fontSize: "36px", fontWeight: "800", color: "#FF5A5F", marginBottom: "4px" }}>{stat.num}</p>
                    <p style={{ fontSize: "14px", color: "#717171", fontWeight: "500" }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            section:first-of-type + section .container > div,
            section:nth-of-type(2) .container > div {
              grid-template-columns: 1fr !important;
              gap: 40px !important;
            }
          }
        `}</style>
      </section>

      {/* Values */}
      <section className="section" style={{ background: "#F7F7F7" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">What we stand for</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Our values guide every domain we list, every conversation we have, and every transfer we complete.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}>
            {values.map((v) => (
              <div key={v.title} className="card">
                <span style={{ fontSize: "36px", display: "block", marginBottom: "16px" }}>{v.icon}</span>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#222222", marginBottom: "8px" }}>{v.title}</h3>
                <p style={{ fontSize: "15px", color: "#717171", lineHeight: "1.7" }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Meet the team</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Small team, big ambitions. We're a group of builders, strategists, and domain enthusiasts.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "32px",
            maxWidth: "960px",
            margin: "0 auto",
          }}>
            {team.map((member) => (
              <div key={member.name} className="card" style={{ textAlign: "center" }}>
                <div style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  background: `linear-gradient(135deg, ${member.color}, ${member.color}88)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                  fontSize: "24px",
                  fontWeight: "800",
                  color: "white",
                }}>
                  {member.initials}
                </div>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#222222", marginBottom: "4px" }}>
                  {member.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#FF5A5F", fontWeight: "600", marginBottom: "12px" }}>
                  {member.role}
                </p>
                <p style={{ fontSize: "14px", color: "#717171", lineHeight: "1.7" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Orphilia Ecosystem */}
      <section style={{
        padding: "80px 0",
        background: "linear-gradient(135deg, #1A1A1A 0%, #2D2D2D 100%)",
        color: "white",
      }}>
        <div className="container" style={{ maxWidth: "800px", textAlign: "center" }}>
          <span style={{ fontSize: "48px", display: "block", marginBottom: "24px" }}>🌿</span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: "800", marginBottom: "20px" }}>
            Part of the Orphilia Ecosystem
          </h2>
          <p style={{ fontSize: "17px", color: "rgba(255,255,255,0.7)", lineHeight: "1.8", marginBottom: "40px" }}>
            Whytl is proudly built within the Orphilia ecosystem — a suite of digital tools and services designed to help creators, builders, and entrepreneurs thrive online. From domain names to digital keys, Orphilia powers the infrastructure of tomorrow's internet.
          </p>
          <Link href="https://orphilia.com" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "#00A699",
            color: "white",
            padding: "12px 28px",
            borderRadius: "12px",
            fontWeight: "700",
            fontSize: "15px",
            transition: "all 0.2s",
          }}>
            Explore Orphilia →
          </Link>
        </div>
      </section>
    </div>
  );
}
