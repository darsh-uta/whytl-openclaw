import Link from "next/link";

const heroDomains = [
  { name: "orphilia.com", tag: "Featured", price: "Inquire" },
  { name: "whytl.io", tag: "New", price: "Inquire" },
  { name: "keystone.ai", tag: "Popular", price: "Inquire" },
];

const features = [
  {
    icon: "🔐",
    title: "Premium Domain Names",
    description: "Curated selection of brandable, memorable domain names perfect for your next venture.",
  },
  {
    icon: "🌐",
    title: "Orphilia Ecosystem",
    description: "Exclusive access to domains within the Orphilia digital ecosystem — built on trust and innovation.",
  },
  {
    icon: "⚡",
    title: "Fast Transfer",
    description: "Secure, automated domain transfers with full support from our team at every step.",
  },
  {
    icon: "💎",
    title: "Digital Keys",
    description: "Own unique digital keys and access credentials tied to premium digital identities.",
  },
];

const testimonials = [
  {
    quote: "Found the perfect domain for my startup in minutes. The Orphilia ecosystem made the transfer seamless.",
    author: "Sarah Chen",
    role: "Founder, NovaTech",
    avatar: "SC",
  },
  {
    quote: "Whytl's collection of premium domains helped us establish a credible online presence from day one.",
    author: "Marcus Rivera",
    role: "CEO, BrightPath",
    avatar: "MR",
  },
  {
    quote: "Professional, fast, and trustworthy. The team went above and beyond to help with our domain strategy.",
    author: "Priya Sharma",
    role: "CTO, CloudNine",
    avatar: "PS",
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        padding: "100px 0 80px",
        background: "linear-gradient(180deg, #FFF9F5 0%, #FFFFFF 100%)",
      }}>
        <div className="container" style={{ textAlign: "center" }}>
          <div style={{
            display: "inline-block",
            background: "rgba(255,90,95,0.1)",
            color: "#FF5A5F",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "24px",
          }}>
            🔑 Premium Domain Marketplace
          </div>
          <h1 style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: "800",
            color: "#222222",
            lineHeight: "1.1",
            marginBottom: "24px",
            letterSpacing: "-2px",
          }}>
            Your perfect domain<br />is waiting.
          </h1>
          <p style={{
            fontSize: "20px",
            color: "#717171",
            maxWidth: "560px",
            margin: "0 auto 40px",
            lineHeight: "1.6",
          }}>
            Discover premium domain names and digital keys from the Orphilia ecosystem. Short, memorable, and ready for your brand.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/services" className="btn-primary" style={{ fontSize: "16px", padding: "14px 32px" }}>
              Browse Domains
            </Link>
            <Link href="/contact" className="btn-secondary" style={{ fontSize: "16px", padding: "14px 32px" }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Domain Showcase */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Featured Domains</h2>
            <p className="section-subtitle" style={{ margin: "0 auto 48px" }}>
              Hand-picked premium domains from our collection
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}>
            {heroDomains.map((domain) => (
              <div key={domain.name} className="card" style={{ cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "16px" }}>
                  <span style={{
                    background: domain.tag === "Featured" ? "#FF5A5F" : domain.tag === "New" ? "#00A699" : "#FF8C00",
                    color: "white",
                    padding: "4px 10px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}>
                    {domain.tag}
                  </span>
                  <span style={{ fontSize: "24px" }}>🌐</span>
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: "700", color: "#222222", marginBottom: "8px" }}>
                  {domain.name}
                </h3>
                <p style={{ fontSize: "14px", color: "#717171", marginBottom: "20px" }}>
                  Premium domain from the Orphilia ecosystem
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ fontSize: "18px", fontWeight: "700", color: "#FF5A5F" }}>{domain.price}</span>
                  <Link href="/contact" style={{
                    color: "#222222",
                    fontWeight: "600",
                    fontSize: "14px",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}>
                    Inquire →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section" style={{ background: "#F7F7F7" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Why choose Whytl?</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Built on the Orphilia platform, trusted by founders and businesses worldwide.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "24px",
          }}>
            {features.map((feature) => (
              <div key={feature.title} className="card">
                <span style={{ fontSize: "40px", display: "block", marginBottom: "20px" }}>{feature.icon}</span>
                <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#222222", marginBottom: "10px" }}>
                  {feature.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#717171", lineHeight: "1.7" }}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "56px" }}>
            <h2 className="section-title">How It Works</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              Getting your perfect domain is simple and secure.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            position: "relative",
          }}>
            {[
              { step: "01", title: "Browse & Select", desc: "Explore our curated collection of premium domains. Find the one that fits your brand vision." },
              { step: "02", title: "Connect & Negotiate", desc: "Reach out via our contact form. We&apos;ll match you with the right domain and handle negotiations transparently." },
              { step: "03", title: "Secure Transfer", desc: "Complete a safe, automated transfer with our team guiding you through every step of the process." },
            ].map((item, i) => (
              <div key={item.step} style={{ textAlign: "center", position: "relative" }}>
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #FF5A5F 0%, #FF8C00 100%)",
                  color: "white",
                  fontSize: "18px",
                  fontWeight: "800",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 20px",
                }}>
                  {item.step}
                </div>
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#222222", marginBottom: "12px" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "15px", color: "#717171", lineHeight: "1.7" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            section:last-child .container > div:last-child {
              grid-template-columns: 1fr !important;
              gap: 32px !important;
            }
          }
        `}</style>
      </section>

      {/* Testimonials */}
      <section className="section" style={{ background: "#1A1A1A", color: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title" style={{ color: "white" }}>What our clients say</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "24px",
          }}>
            {testimonials.map((t) => (
              <div key={t.author} style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "16px",
                padding: "32px",
              }}>
                <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.85)", lineHeight: "1.7", marginBottom: "24px", fontStyle: "italic" }}>
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "linear-gradient(135deg, #FF5A5F, #FF8C00)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                    fontSize: "14px",
                    color: "white",
                  }}>
                    {t.avatar}
                  </div>
                  <div>
                    <p style={{ fontWeight: "600", fontSize: "14px", color: "white" }}>{t.author}</p>
                    <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)" }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: "100px 0",
        background: "linear-gradient(135deg, #FF5A5F 0%, #FF8C00 100%)",
        textAlign: "center",
        color: "white",
      }}>
        <div className="container">
          <h2 style={{ fontSize: "clamp(32px, 4vw, 52px)", fontWeight: "800", marginBottom: "16px", letterSpacing: "-1px" }}>
            Ready to find your domain?
          </h2>
          <p style={{ fontSize: "18px", opacity: "0.9", marginBottom: "40px", maxWidth: "480px", margin: "0 auto 40px" }}>
            Join hundreds of founders who trust Whytl and the Orphilia ecosystem for their digital identity.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/services" style={{
              background: "white",
              color: "#FF5A5F",
              padding: "14px 32px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "16px",
              transition: "all 0.2s",
            }}>
              Browse All Domains
            </Link>
            <Link href="/contact" style={{
              background: "transparent",
              color: "white",
              padding: "14px 32px",
              borderRadius: "12px",
              fontWeight: "700",
              fontSize: "16px",
              border: "2px solid rgba(255,255,255,0.5)",
              transition: "all 0.2s",
            }}>
              Talk to Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
