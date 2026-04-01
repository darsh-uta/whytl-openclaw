import Link from "next/link";

const footerLinks = {
  Services: [
    { href: "/services", label: "Domain Names" },
    { href: "/services", label: "Digital Keys" },
    { href: "/services", label: "Domain Brokering" },
  ],
  Company: [
    { href: "/about", label: "About Us" },
    { href: "/about", label: "The Team" },
    { href: "/contact", label: "Contact" },
  ],
  Legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
};

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--text)",
        color: "var(--bg)",
        paddingTop: "72px",
        paddingBottom: "40px",
      }}
    >
      <div className="container">
        {/* Top: Brand + Links */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr",
            gap: "48px",
            paddingBottom: "56px",
            borderBottom: "1px solid rgba(248,247,244,0.12)",
          }}
        >
          {/* Brand */}
          <div>
            <Link
              href="/"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
              }}
            >
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="22" height="22" rx="4" fill="#F8F7F4"/>
                <path d="M7 11C7 9.34315 8.34315 8 10 8V8C11.6569 8 13 9.34315 13 11V14H10C8.34315 14 7 12.6569 7 11V11Z" fill="#1A1A1E"/>
                <rect x="7" y="14" width="6" height="2" rx="1" fill="#E5484D"/>
              </svg>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "22px",
                  fontWeight: 400,
                  color: "var(--bg)",
                  letterSpacing: "-0.03em",
                }}
              >
                Whytl
              </span>
            </Link>
            <p
              style={{
                fontSize: "14px",
                color: "rgba(248,247,244,0.5)",
                lineHeight: 1.7,
                maxWidth: "260px",
                marginBottom: "28px",
              }}
            >
              Premium domain names and digital keys from the Orphilia ecosystem. Built for founders who care about their digital identity.
            </p>
            <p
              style={{
                fontSize: "12px",
                color: "rgba(248,247,244,0.3)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Part of Orphilia
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "rgba(248,247,244,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {heading}
              </h4>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="footer-link"
                      style={{ fontSize: "14px", color: "rgba(248,247,244,0.6)" }}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          style={{
            paddingTop: "28px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "12px",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(248,247,244,0.35)" }}>
            © {new Date().getFullYear()} Whytl. All rights reserved.
          </p>
          <p
            style={{
              fontSize: "13px",
              color: "rgba(248,247,244,0.25)",
              fontStyle: "italic",
              fontFamily: "var(--font-serif)",
            }}
          >
            Your domain is waiting.
          </p>
        </div>
      </div>

      <style>{`
        .footer-link {
          transition: color 0.18s ease;
        }
        .footer-link:hover {
          color: var(--bg) !important;
        }
        @media (max-width: 768px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr 1fr !important;
          }
          footer .container > div:first-child > div:first-child {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          footer .container > div:first-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
