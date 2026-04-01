import Link from "next/link";

const services = [
  {
    icon: "🌐",
    title: "Premium Domain Names",
    tagline: "Short, memorable, brandable",
    description: "Browse our hand-curated selection of premium .com, .io, .ai, and other TLD domains. Every domain is carefully selected for brandability, SEO value, and memorability.",
    features: ["One-word & brandable names", "Premium .com & niche TLDs", "SEO-optimized options", "Instant availability check"],
    popular: true,
    cta: "Browse Domains",
  },
  {
    icon: "🔑",
    title: "Digital Keys",
    tagline: "Access the Orphilia ecosystem",
    description: "Digital keys grant exclusive access to services, platforms, and early-adopter opportunities within the growing Orphilia digital ecosystem.",
    features: ["Orphilia ecosystem access", "Exclusive platform features", "Early-bird product access", "Priority support通道"],
    popular: false,
    cta: "Learn More",
  },
  {
    icon: "🤝",
    title: "Domain Brokering",
    tagline: "We find, you own",
    description: "Can't find what you're looking for? Our domain brokering service puts our expertise to work — sourcing, negotiating, and securing the perfect domain for you.",
    features: ["Custom domain search", "Marketplace negotiation", "Secure escrow service", "Full transfer support"],
    popular: false,
    cta: "Start a Search",
  },
];

const domainListings = [
  { name: "orphilia.com", category: "Brand", price: "Premium" },
  { name: "keystone.ai", category: "AI / Tech", price: "Premium" },
  { name: "nexusnow.com", category: "Brand", price: "$2,500" },
  { name: "cloudvault.io", category: "SaaS", price: "$1,800" },
  { name: "zenloop.com", category: "Wellness", price: "$950" },
  { name: "stackflow.io", category: "Dev Tools", price: "$2,200" },
  { name: "purely.app", category: "Mobile", price: "$1,200" },
  { name: "bloomia.co", category: "Brand", price: "$750" },
  { name: "forged.ai", category: "AI / Tech", price: "$3,500" },
];

const categories = ["All", "Brand", "AI / Tech", "SaaS", "Dev Tools", "Mobile"];

export default function ServicesPage() {
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
            background: "rgba(255,140,0,0.1)",
            color: "#FF8C00",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "24px",
          }}>
            💼 Our Services
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: "800",
            color: "#222222",
            lineHeight: "1.15",
            marginBottom: "24px",
            letterSpacing: "-1.5px",
          }}>
            Everything you need<br />for your digital identity.
          </h1>
          <p style={{ fontSize: "20px", color: "#717171", lineHeight: "1.6" }}>
            From premium domain names to digital keys and expert brokering — we provide a full suite of services to help you establish and grow your digital presence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "32px",
          }}>
            {services.map((service) => (
              <div
                key={service.title}
                className="card"
                style={{
                  border: service.popular ? "2px solid #FF5A5F" : "1px solid #E0E0E0",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {service.popular && (
                  <div style={{
                    position: "absolute",
                    top: "16px",
                    right: "16px",
                    background: "#FF5A5F",
                    color: "white",
                    padding: "4px 12px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "700",
                  }}>
                    Most Popular
                  </div>
                )}
                <span style={{ fontSize: "48px", display: "block", marginBottom: "20px" }}>{service.icon}</span>
                <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#222222", marginBottom: "4px" }}>
                  {service.title}
                </h2>
                <p style={{ fontSize: "14px", color: "#00A699", fontWeight: "600", marginBottom: "16px" }}>
                  {service.tagline}
                </p>
                <p style={{ fontSize: "15px", color: "#717171", lineHeight: "1.7", marginBottom: "24px" }}>
                  {service.description}
                </p>
                <ul style={{ listStyle: "none", marginBottom: "28px" }}>
                  {service.features.map((f) => (
                    <li key={f} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      marginBottom: "10px",
                      fontSize: "14px",
                      color: "#444",
                    }}>
                      <span style={{ color: "#00A699", fontSize: "16px" }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Link href="/contact" className="btn-primary" style={{
                  width: "100%",
                  justifyContent: "center",
                  background: service.popular ? "#FF5A5F" : "#222222",
                }}>
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domain Listings */}
      <section className="section" style={{ background: "#F7F7F7" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Current Domain Listings</h2>
            <p className="section-subtitle" style={{ margin: "0 auto 32px" }}>
              A snapshot of domains currently available. Contact us for pricing and availability.
            </p>
            <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap" }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  style={{
                    padding: "8px 18px",
                    borderRadius: "20px",
                    border: "1px solid #DDD",
                    background: cat === "All" ? "#222" : "white",
                    color: cat === "All" ? "white" : "#717171",
                    fontSize: "14px",
                    fontWeight: "500",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div style={{
            background: "white",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #E8E8E8",
            boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
          }}>
            {/* Table Header */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 120px 120px",
              padding: "16px 24px",
              background: "#FAFAFA",
              borderBottom: "1px solid #E8E8E8",
              fontSize: "12px",
              fontWeight: "700",
              color: "#717171",
              textTransform: "uppercase",
              letterSpacing: "0.5px",
            }}>
              <span>Domain Name</span>
              <span>Category</span>
              <span>Price</span>
            </div>
            {domainListings.map((d, i) => (
              <div
                key={d.name}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 120px 120px",
                  padding: "18px 24px",
                  borderBottom: i < domainListings.length - 1 ? "1px solid #F0F0F0" : "none",
                  alignItems: "center",
                  transition: "background 0.15s",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "#F9F9F9")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "white")}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <span style={{ fontSize: "20px" }}>🌐</span>
                  <span style={{ fontSize: "15px", fontWeight: "600", color: "#222222" }}>{d.name}</span>
                </div>
                <span style={{
                  fontSize: "13px",
                  background: "#F0F0F0",
                  color: "#717171",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  fontWeight: "500",
                  width: "fit-content",
                }}>
                  {d.category}
                </span>
                <span style={{ fontSize: "15px", fontWeight: "700", color: "#FF5A5F" }}>{d.price}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: "40px" }}>
            <Link href="/contact" className="btn-primary">
              Request Full Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "48px" }}>
            <h2 className="section-title">Transparent Pricing</h2>
            <p className="section-subtitle" style={{ margin: "0 auto" }}>
              No hidden fees. Clear pricing for every domain and service we offer.
            </p>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            maxWidth: "960px",
            margin: "0 auto",
          }}>
            {[
              { tier: "Starter", price: "From $500", desc: "Quality domains ideal for personal projects and small businesses.", color: "#717171" },
              { tier: "Growth", price: "From $1,500", desc: "Premium brandable domains for startups and growing companies.", color: "#FF5A5F", featured: true },
              { tier: "Enterprise", price: "Custom", desc: "High-value, ultra-premium domains with full brokering support.", color: "#00A699" },
            ].map((plan) => (
              <div key={plan.tier} className="card" style={{
                textAlign: "center",
                border: plan.featured ? "2px solid #FF5A5F" : "1px solid #E8E8E8",
              }}>
                {plan.featured && (
                  <div style={{
                    background: "#FF5A5F",
                    color: "white",
                    padding: "4px 16px",
                    borderRadius: "12px",
                    fontSize: "12px",
                    fontWeight: "700",
                    marginBottom: "16px",
                    display: "inline-block",
                  }}>
                    Most Popular
                  </div>
                )}
                <h3 style={{ fontSize: "20px", fontWeight: "700", color: plan.color, marginBottom: "8px" }}>{plan.tier}</h3>
                <p style={{ fontSize: "32px", fontWeight: "800", color: "#222222", marginBottom: "16px" }}>{plan.price}</p>
                <p style={{ fontSize: "15px", color: "#717171", lineHeight: "1.7", marginBottom: "28px" }}>{plan.desc}</p>
                <Link href="/contact" className="btn-primary" style={{
                  background: plan.featured ? "#FF5A5F" : "#222222",
                  width: "100%",
                  justifyContent: "center",
                }}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
