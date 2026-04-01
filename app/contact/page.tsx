"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";
import type { Metadata } from "next";

const contactMethods = [
  {
    title: "Email",
    value: "hello@whytl.com",
    desc: "We respond within 24 hours on business days.",
  },
  {
    title: "Hours",
    value: "Always open",
    desc: "Digital-first. Messages are monitored continuously.",
  },
  {
    title: "Part of",
    value: "Orphilia Ecosystem",
    desc: "Whytl is the domain vertical of Orphilia.",
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

const faqs = [
  "How long does a domain transfer take?",
  "Do you offer escrow services?",
  "Can I negotiate the price?",
  "What payment methods do you accept?",
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
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    setLoading(false);
    setSubmitted(true);
  };

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    width: "100%",
    padding: "13px 16px",
    borderRadius: "3px",
    border: `1.5px solid ${focusedField === field ? "var(--text)" : "var(--border)"}`,
    fontSize: "15px",
    fontFamily: "var(--font-sans)",
    color: "var(--text)",
    background: "var(--surface)",
    outline: "none",
    transition: "border-color 0.18s ease",
  });

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
          <div style={{ maxWidth: "600px" }}>
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
              Contact
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
              Let&apos;s find your
              <br />
              <em style={{ fontStyle: "italic" }}>perfect domain.</em>
            </h1>

            <p
              className="animate-fade-up delay-2"
              style={{
                fontSize: "clamp(16px, 2vw, 18px)",
                color: "var(--text-muted)",
                lineHeight: 1.7,
              }}
            >
              Whether you know exactly what you want or you&apos;re just
              exploring — we&apos;d love to hear from you. No pressure, no
              obligation.
            </p>
          </div>
        </div>
      </section>

      {/* ─── CONTENT ─────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--surface)" }}>
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "80px",
              alignItems: "start",
            }}
          >
            {/* Left: Info */}
            <Reveal direction="left">
              <div>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(24px, 2.5vw, 32px)",
                    fontWeight: 400,
                    letterSpacing: "-0.02em",
                    color: "var(--text)",
                    marginBottom: "36px",
                  }}
                >
                  Reach us directly.
                </h2>

                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0",
                    borderTop: "1px solid var(--border)",
                    marginBottom: "48px",
                  }}
                >
                  {contactMethods.map((m) => (
                    <div
                      key={m.title}
                      style={{
                        padding: "20px 0",
                        borderBottom: "1px solid var(--border)",
                      }}
                    >
                      <p
                        style={{
                          fontSize: "11px",
                          fontWeight: 600,
                          color: "var(--text-faint)",
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: "4px",
                        }}
                      >
                        {m.title}
                      </p>
                      <p
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: "16px",
                          fontWeight: 600,
                          color: "var(--text)",
                          marginBottom: "4px",
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {m.value}
                      </p>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "var(--text-muted)",
                        }}
                      >
                        {m.desc}
                      </p>
                    </div>
                  ))}
                </div>

                {/* FAQ */}
                <h3
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "13px",
                    fontWeight: 700,
                    color: "var(--text-faint)",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "16px",
                  }}
                >
                  Common Questions
                </h3>
                <ul
                  style={{
                    listStyle: "none",
                    borderTop: "1px solid var(--border)",
                  }}
                >
                  {faqs.map((q) => (
                    <li
                      key={q}
                      style={{
                        padding: "13px 0",
                        borderBottom: "1px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px",
                        fontSize: "14px",
                        color: "var(--text-muted)",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--accent)",
                          fontSize: "12px",
                          flexShrink: 0,
                        }}
                      >
                        →
                      </span>
                      {q}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            {/* Right: Form */}
            <Reveal delay={100}>
              {submitted ? (
                <div
                  style={{
                    background: "var(--bg)",
                    border: "1px solid var(--border)",
                    padding: "64px 48px",
                    textAlign: "center",
                  }}
                >
                  {/* Check icon */}
                  <div
                    style={{
                      width: "56px",
                      height: "56px",
                      background: "var(--text)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 28px",
                    }}
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      stroke="#F8F7F4"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <polyline points="4 11 9 16 18 7" />
                    </svg>
                  </div>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(26px, 3vw, 36px)",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "16px",
                      letterSpacing: "-0.025em",
                    }}
                  >
                    Message received.
                  </h2>
                  <p
                    style={{
                      fontSize: "16px",
                      color: "var(--text-muted)",
                      lineHeight: 1.7,
                      marginBottom: "32px",
                      maxWidth: "360px",
                      margin: "0 auto 32px",
                    }}
                  >
                    Thanks,{" "}
                    <strong style={{ color: "var(--text)" }}>
                      {form.name || "there"}
                    </strong>
                    . We&apos;ll get back to you at{" "}
                    <strong style={{ color: "var(--text)" }}>{form.email}</strong>{" "}
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        inquiryType: "",
                        domain: "",
                        message: "",
                      });
                    }}
                    className="btn-secondary"
                    style={{ fontSize: "14px" }}
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  style={{
                    background: "var(--surface)",
                    border: "1px solid var(--border)",
                    padding: "48px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(22px, 2.5vw, 30px)",
                      fontWeight: 400,
                      color: "var(--text)",
                      marginBottom: "36px",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Send us a note.
                  </h2>

                  {/* Name + Email */}
                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr 1fr",
                      gap: "16px",
                      marginBottom: "16px",
                    }}
                  >
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--text-muted)",
                          marginBottom: "6px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Jane Smith"
                        style={inputStyle("name")}
                      />
                    </div>
                    <div>
                      <label
                        style={{
                          display: "block",
                          fontSize: "12px",
                          fontWeight: 600,
                          color: "var(--text-muted)",
                          marginBottom: "6px",
                          letterSpacing: "0.01em",
                        }}
                      >
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        placeholder="jane@company.com"
                        style={inputStyle("email")}
                      />
                    </div>
                  </div>

                  {/* Inquiry type */}
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "6px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      Inquiry Type *
                    </label>
                    <select
                      required
                      value={form.inquiryType}
                      onChange={(e) => handleChange("inquiryType", e.target.value)}
                      onFocus={() => setFocusedField("inquiryType")}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...inputStyle("inquiryType"),
                        color: form.inquiryType
                          ? "var(--text)"
                          : "var(--text-faint)",
                        cursor: "pointer",
                      }}
                    >
                      <option value="" disabled>
                        Select inquiry type...
                      </option>
                      {inquiryTypes.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Domain of interest */}
                  <div style={{ marginBottom: "16px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "6px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      Domain of Interest{" "}
                      <span
                        style={{
                          fontWeight: 400,
                          color: "var(--text-faint)",
                        }}
                      >
                        (optional)
                      </span>
                    </label>
                    <input
                      type="text"
                      value={form.domain}
                      onChange={(e) => handleChange("domain", e.target.value)}
                      onFocus={() => setFocusedField("domain")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="e.g., keystone.ai"
                      style={inputStyle("domain")}
                    />
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: "32px" }}>
                    <label
                      style={{
                        display: "block",
                        fontSize: "12px",
                        fontWeight: 600,
                        color: "var(--text-muted)",
                        marginBottom: "6px",
                        letterSpacing: "0.01em",
                      }}
                    >
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => handleChange("message", e.target.value)}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us what you're looking for..."
                      style={{
                        ...inputStyle("message"),
                        resize: "vertical",
                        lineHeight: 1.6,
                      }}
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary"
                    style={{
                      width: "100%",
                      justifyContent: "center",
                      padding: "16px",
                      fontSize: "15px",
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? "not-allowed" : "pointer",
                      borderRadius: "3px",
                    }}
                  >
                    {loading ? (
                      <>
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          style={{
                            animation:
                              "spin 0.8s linear infinite",
                          }}
                        >
                          <circle
                            cx="8"
                            cy="8"
                            r="6"
                            stroke="rgba(255,255,255,0.3)"
                            strokeWidth="2"
                          />
                          <path
                            d="M14 8a6 6 0 0 1-6 6"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
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
                      </>
                    )}
                  </button>

                  <p
                    style={{
                      fontSize: "12px",
                      color: "var(--text-faint)",
                      textAlign: "center",
                      marginTop: "16px",
                    }}
                  >
                    We never share your information with third parties.
                  </p>
                </form>
              )}
            </Reveal>
          </div>
        </div>

        <style>{`
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
          @media (max-width: 768px) {
            section:nth-of-type(2) .container > div {
              grid-template-columns: 1fr !important;
              gap: 48px !important;
            }
            form { padding: 32px 24px !important; }
          }
        `}</style>
      </section>
    </div>
  );
}
