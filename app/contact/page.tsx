"use client";

import { useState } from "react";

const contactMethods = [
  {
    icon: "✉️",
    title: "Email Us",
    value: "hello@whytl.com",
    desc: "We reply within 24 hours",
  },
  {
    icon: "🌍",
    title: "Visit",
    value: "Orphilia Ecosystem",
    desc: "whytl.com is part of Orphilia",
  },
  {
    icon: "⏰",
    title: "Hours",
    value: "24/7 Digital",
    desc: "Our team is always on",
  },
];

const inquiryTypes = [
  "Domain Inquiry",
  "Digital Key Purchase",
  "Domain Brokering",
  "Partnership / Reseller",
  "General Question",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    inquiryType: "",
    domain: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

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
            background: "rgba(255,90,95,0.1)",
            color: "#FF5A5F",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "14px",
            fontWeight: "600",
            marginBottom: "24px",
          }}>
            📬 Get in Touch
          </div>
          <h1 style={{
            fontSize: "clamp(36px, 5vw, 60px)",
            fontWeight: "800",
            color: "#222222",
            lineHeight: "1.15",
            marginBottom: "24px",
            letterSpacing: "-1.5px",
          }}>
            Let's find your<br />perfect domain.
          </h1>
          <p style={{ fontSize: "20px", color: "#717171", lineHeight: "1.6" }}>
            Whether you're looking for a specific domain, have questions about our services, or want to explore partnership opportunities — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section" style={{ background: "white" }}>
        <div className="container">
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.5fr",
            gap: "64px",
            alignItems: "start",
          }}>
            {/* Left: Info */}
            <div>
              <h2 style={{ fontSize: "24px", fontWeight: "800", color: "#222222", marginBottom: "32px" }}>
                Contact information
              </h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "48px" }}>
                {contactMethods.map((method) => (
                  <div key={method.title} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                    <span style={{ fontSize: "28px" }}>{method.icon}</span>
                    <div>
                      <p style={{ fontSize: "14px", color: "#717171", fontWeight: "500", marginBottom: "2px" }}>{method.title}</p>
                      <p style={{ fontSize: "16px", fontWeight: "700", color: "#222222" }}>{method.value}</p>
                      <p style={{ fontSize: "13px", color: "#B0B0B0" }}>{method.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* FAQ Teaser */}
              <div style={{
                background: "#F7F7F7",
                borderRadius: "16px",
                padding: "28px",
                border: "1px solid #EDEDED",
              }}>
                <h3 style={{ fontSize: "16px", fontWeight: "700", color: "#222222", marginBottom: "12px" }}>
                  💡 Common Questions
                </h3>
                <ul style={{ listStyle: "none" }}>
                  {[
                    "How long does a domain transfer take?",
                    "Do you offer escrow services?",
                    "Can I negotiate the price?",
                    "What payment methods do you accept?",
                  ].map((q) => (
                    <li key={q} style={{
                      padding: "10px 0",
                      borderBottom: "1px solid #E8E8E8",
                      fontSize: "14px",
                      color: "#717171",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}>
                      <span style={{ color: "#00A699" }}>→</span> {q}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right: Form */}
            <div>
              {submitted ? (
                <div style={{
                  textAlign: "center",
                  padding: "64px 32px",
                  background: "#F7F7F7",
                  borderRadius: "24px",
                  border: "1px solid #E8E8E8",
                }}>
                  <span style={{ fontSize: "64px", display: "block", marginBottom: "24px" }}>🎉</span>
                  <h2 style={{ fontSize: "28px", fontWeight: "800", color: "#222222", marginBottom: "12px" }}>
                    Message sent!
                  </h2>
                  <p style={{ fontSize: "16px", color: "#717171", lineHeight: "1.7", marginBottom: "28px" }}>
                    Thanks for reaching out, <strong>{form.name || "there"}</strong>. We've received your message and will get back to you at <strong>{form.email}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", inquiryType: "", domain: "", message: "" }); }}
                    style={{
                      background: "#222222",
                      color: "white",
                      padding: "12px 28px",
                      borderRadius: "12px",
                      fontWeight: "600",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{
                  background: "white",
                  border: "1px solid #E8E8E8",
                  borderRadius: "24px",
                  padding: "40px",
                  boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                }}>
                  <h2 style={{ fontSize: "22px", fontWeight: "800", color: "#222222", marginBottom: "28px" }}>
                    Send us a message
                  </h2>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px", marginBottom: "20px" }}>
                    {/* Name */}
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#444", marginBottom: "6px" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        placeholder="Jane Smith"
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1px solid #DDD",
                          fontSize: "15px",
                          outline: "none",
                          transition: "border-color 0.2s",
                          fontFamily: "inherit",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#FF5A5F")}
                        onBlur={(e) => (e.target.style.borderColor = "#DDD")}
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#444", marginBottom: "6px" }}>
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        placeholder="jane@company.com"
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1px solid #DDD",
                          fontSize: "15px",
                          outline: "none",
                          transition: "border-color 0.2s",
                          fontFamily: "inherit",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#FF5A5F")}
                        onBlur={(e) => (e.target.style.borderColor = "#DDD")}
                      />
                    </div>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#444", marginBottom: "6px" }}>
                      Inquiry Type *
                    </label>
                    <select
                      required
                      value={form.inquiryType}
                      onChange={(e) => handleChange("inquiryType", e.target.value)}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border: "1px solid #DDD",
                        fontSize: "15px",
                        outline: "none",
                        background: "white",
                        fontFamily: "inherit",
                        color: form.inquiryType ? "#222" : "#B0B0B0",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#FF5A5F")}
                      onBlur={(e) => (e.target.style.borderColor = "#DDD")}
                    >
                      <option value="" disabled>Select inquiry type...</option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div style={{ marginBottom: "20px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#444", marginBottom: "6px" }}>
                      Domain of Interest <span style={{ color: "#B0B0B0", fontWeight: "400" }}>(optional)</span>
                    </label>
                    <input
                      type="text"
                      value={form.domain}
                      onChange={(e) => handleChange("domain", e.target.value)}
                      placeholder="e.g., keystone.ai"
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border: "1px solid #DDD",
                        fontSize: "15px",
                        outline: "none",
                        transition: "border-color 0.2s",
                        fontFamily: "inherit",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#FF5A5F")}
                      onBlur={(e) => (e.target.style.borderColor = "#DDD")}
                    />
                  </div>

                  <div style={{ marginBottom: "32px" }}>
                    <label style={{ display: "block", fontSize: "13px", fontWeight: "600", color: "#444", marginBottom: "6px" }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      placeholder="Tell us what you're looking for..."
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border: "1px solid #DDD",
                        fontSize: "15px",
                        outline: "none",
                        resize: "vertical",
                        fontFamily: "inherit",
                        lineHeight: "1.6",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#FF5A5F")}
                      onBlur={(e) => (e.target.style.borderColor = "#DDD")}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "16px",
                      fontSize: "16px",
                      opacity: loading ? "0.7" : "1",
                      cursor: loading ? "not-allowed" : "pointer",
                    }}
                  >
                    {loading ? (
                      <>
                        <span>⏳</span> Sending...
                      </>
                    ) : (
                      <>
                        Send Message →
                      </>
                    )}
                  </button>

                  <p style={{ fontSize: "12px", color: "#B0B0B0", textAlign: "center", marginTop: "16px" }}>
                    We respect your privacy. Your information will never be shared with third parties.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            section:last-of-type .container > div {
              grid-template-columns: 1fr !important;
            }
          }
        `}</style>
      </section>
    </div>
  );
}
